import { NextResponse } from "next/server";

const WEBFLOW_API_URL = "https://api.webflow.com/v2";
const WEBFLOW_SITE_ID = process.env.WEBFLOW_SITE_ID!;
const WEBFLOW_TOKEN = process.env.WEBFLOW_API_TOKEN!;

interface WebflowCollection {
  id: string;
  displayName: string;
  slug: string;
}

interface WebflowItem {
  id: string;
  fieldData: Record<string, any>;
}

export async function GET() {
  try {
    // 1️⃣ Récupération des collections
    const collectionsRes = await fetch(`${WEBFLOW_API_URL}/sites/${WEBFLOW_SITE_ID}/collections`, {
      headers: {
        Authorization: `Bearer ${WEBFLOW_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!collectionsRes.ok) {
      throw new Error(`Erreur API Webflow: ${collectionsRes.statusText}`);
    }

    const { collections } = (await collectionsRes.json()) as { collections: WebflowCollection[] };

    // 2️⃣ Identifie les collections Clubs et Club groups
    const clubsCollection = collections.find(
      (col) => col.displayName.toLowerCase() === "clubs" || col.slug.toLowerCase() === "clubs"
    );

    const cityCollection = collections.find(
      (col) =>
        col.displayName.toLowerCase() === "club groups" ||
        col.slug.toLowerCase() === "v"
    );

    if (!clubsCollection || !cityCollection) {
      return NextResponse.json(
        { error: "Collection 'Clubs' ou 'Club groups' non trouvée" },
        { status: 404 }
      );
    }

    // 3️⃣ Récupère tous les clubs
    const getAllItems = async (collectionId: string): Promise<WebflowItem[]> => {
      let allItems: WebflowItem[] = [];
      const limit = 100;
      let offset = 0;
      let total = 0;

      do {
        const url = new URL(`${WEBFLOW_API_URL}/collections/${collectionId}/items`);
        url.searchParams.set("limit", limit.toString());
        url.searchParams.set("offset", offset.toString());

        const res = await fetch(url.toString(), {
          headers: {
            Authorization: `Bearer ${WEBFLOW_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error(`Erreur lors du fetch des items: ${res.statusText}`);

        const data = (await res.json()) as {
          items: WebflowItem[];
          pagination?: { total: number; limit: number; offset: number };
        };

        allItems = allItems.concat(data.items ?? []);
        total = data.pagination?.total ?? allItems.length;
        offset += limit;
      } while (offset < total);

      return allItems;
    };

    const [clubs, cities] = await Promise.all([
      getAllItems(clubsCollection.id),
      getAllItems(cityCollection.id),
    ]);

    // 4️⃣ Crée un dictionnaire ID → nom pour les villes
    const cityMap: Record<string, string> = {};
    for (const city of cities) {
      const id = city.id;
      const name = city.fieldData?.name || "Inconnue";
      cityMap[id] = name;
    }

    // 5️⃣ Filtre et enrichit les clubs avec le nom de la ville
    const filtered = clubs.map((item) => ({
      name: item.fieldData?.name ?? null,
      slug: item.fieldData?.slug ?? null,
      cityId: item.fieldData?.city ?? null,
      city: cityMap[item.fieldData?.city] ?? null,
      address: item.fieldData?.address ?? null,
      postal: item.fieldData?.["postal-code"] ?? null,
      image:
        typeof item.fieldData?.cover === "string"
          ? item.fieldData.cover
          : item.fieldData?.cover?.url ?? null,
      lat: parseFloat(item.fieldData?.latitude ?? "0"),
      lng: parseFloat(item.fieldData?.longitude ?? "0"),
    }));

    return NextResponse.json(filtered);
  } catch (error: any) {
    console.error("Erreur API Clubs:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
