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
  fieldData: {
    name?: string;
    slug?: string;
    latitude?: string;
    longitude?: string;
    city?: string;
    image?: string | { url: string };
    address?: string;
    postal?: string;
    [key: string]: any;
  };
}

export async function GET() {
  try {
    // 1️⃣ Récupère les collections
    const collectionsRes = await fetch(`${WEBFLOW_API_URL}/sites/${WEBFLOW_SITE_ID}/collections`, {
      headers: {
        Authorization: `Bearer ${WEBFLOW_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!collectionsRes.ok) {
      throw new Error(`Erreur API Webflow: ${collectionsRes.statusText}`);
    }

    const data = (await collectionsRes.json()) as { collections: WebflowCollection[] };
    const collections = data.collections ?? [];

    // 2️⃣ Trouve la collection "Clubs"
    const clubsCollection = collections.find(
      (col) =>
        col.displayName.toLowerCase() === "clubs" ||
        col.slug.toLowerCase() === "clubs"
    );

    if (!clubsCollection) {
      return NextResponse.json({ error: "Collection 'Clubs' non trouvée" }, { status: 404 });
    }

    // 3️⃣ Récupère tous les items (pagination)
    let allItems: WebflowItem[] = [];
    let nextCursor: string | null = null;

    do {
      const url = new URL(`${WEBFLOW_API_URL}/collections/${clubsCollection.id}/items`);
      url.searchParams.set("limit", "100");
      if (nextCursor) url.searchParams.set("after", nextCursor);

      const itemsRes = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${WEBFLOW_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (!itemsRes.ok) {
        throw new Error(`Erreur lors du fetch des items: ${itemsRes.statusText}`);
      }

      const itemsData = (await itemsRes.json()) as {
        items: WebflowItem[];
        pagination: { total: number; limit: number; next?: string | null };
      };

      allItems = allItems.concat(itemsData.items ?? []);
      nextCursor = itemsData.pagination?.next ?? null;
    } while (nextCursor);

    // 4️⃣ Filtre les champs utiles
    const filtered = allItems.map((item) => ({
      name: item.fieldData?.name ?? null,
      slug: item.fieldData?.slug ?? null,
      city: item.fieldData?.city ?? null,
      address: item.fieldData?.address ?? null,
      postal: item.fieldData?.postal ?? null,
      image:
        typeof item.fieldData?.image === "string"
          ? item.fieldData.image
          : item.fieldData?.image?.url ?? null,
      lat: parseFloat(item.fieldData?.latitude ?? "0"),
      lng: parseFloat(item.fieldData?.longitude ?? "0"),
    }));

    return NextResponse.json(filtered);
  } catch (error: any) {
    console.error("Erreur API Clubs:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

