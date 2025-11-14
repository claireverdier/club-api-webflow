import { NextResponse } from "next/server";

const WEBFLOW_API_URL = "https://api.webflow.com/v2";

/**
 * Configuration multi-sites
 * - 1 site Webflow = 1 ID + 1 token + 1 domain + 1 brand
 */
const SITES = [
  {
    id: process.env.WEBFLOW_SITE_A_ID!,
    token: process.env.WEBFLOW_SITE_A_TOKEN!,
    brand: "keepcool",
    domain: process.env.WEBFLOW_SITE_A_DOMAIN!,
  },
  {
    id: process.env.WEBFLOW_SITE_B_ID!,
    token: process.env.WEBFLOW_SITE_B_TOKEN!,
    brand: "neoness",
    domain: process.env.WEBFLOW_SITE_B_DOMAIN!,
  },
];

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
    city?: string;
    latitude?: string;
    longitude?: string;
    address?: string;
    ["postal-code"]?: string;
    cover?: string | { url: string };
    [key: string]: any;
  };
}

interface ClubEntry {
  name: string | null;
  url: string | null;
  cityId: string | null;
  city: string | null;
  address: string | null;
  postal: string | null;
  image: string | null;
  lat: number;
  lng: number;
}

/**
 * Récupération paginée de tous les items d'une collection
 */
async function getAllItems(collectionId: string, token: string): Promise<WebflowItem[]> {
  let allItems: WebflowItem[] = [];
  const limit = 100;
  let offset = 0;
  let total = 0;

  do {
    const url = new URL(`${WEBFLOW_API_URL}/collections/${collectionId}/items`);
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("offset", String(offset));

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Erreur fetch items: ${res.statusText}`);
    }

    const data = (await res.json()) as {
      items: WebflowItem[];
      pagination?: { total: number; offset: number; limit: number };
    };

    allItems = allItems.concat(data.items ?? []);
    total = data.pagination?.total ?? allItems.length;

    offset += limit;
  } while (offset < total);

  return allItems;
}

/**
 * Récupère clubs + villes pour un site
 */
async function fetchDataForSite(site: {
  id: string;
  token: string;
  brand: string;
  domain: string;
}) {
  // 1️⃣ Récupère les collections du site
  const collectionsRes = await fetch(
    `${WEBFLOW_API_URL}/sites/${site.id}/collections`,
    {
      headers: {
        Authorization: `Bearer ${site.token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!collectionsRes.ok) {
    throw new Error(`Erreur récupération collections: ${collectionsRes.statusText}`);
  }

  const { collections } = (await collectionsRes.json()) as {
    collections: WebflowCollection[];
  };

  // 2️⃣ Trouve la collection Clubs
  const clubsCollection = collections.find(
    (col) =>
      col.displayName.toLowerCase() === "clubs" ||
      col.slug.toLowerCase() === "clubs"
  );

  // 3️⃣ Trouve la collection Club Groups (villes)
  const cityCollection = collections.find(
    (col) =>
      col.displayName.toLowerCase() === "club groups" ||
      col.slug.toLowerCase() === "v"
  );

  if (!clubsCollection || !cityCollection) {
    console.warn(`⚠️ Clubs ou Club Groups introuvables pour ${site.id}`);
    return [];
  }

  // 4️⃣ Récupère les items clubs + villes
  const [clubs, cities] = await Promise.all([
    getAllItems(clubsCollection.id, site.token),
    getAllItems(cityCollection.id, site.token),
  ]);

  // 5️⃣ Map des villes (id → nom)
  const cityMap: Record<string, string> = {};
  for (const city of cities) {
    cityMap[city.id] = city.fieldData?.name ?? "Inconnue";
  }

  // 6️⃣ Fusion clubs + ville + brand + url
  const filtered: ClubEntry[] = clubs.map((club) => {
  // calcule les valeurs intermédiaires ici
  const slug = club.fieldData?.slug ?? null;
  const cityId = club.fieldData?.city ?? null;

  return {
    brand: site?.brand ?? null, 
    name: club.fieldData?.name ?? null,
    cityId,
    city: cityId ? cityMap[cityId] ?? null : null,
    address: club.fieldData?.address ?? null,
    postal: club.fieldData?.["postal-code"] ?? null,
    image:
      typeof club.fieldData?.cover === "string"
        ? club.fieldData.cover
        : club.fieldData?.cover?.url ?? null,
    lat: parseFloat(club.fieldData?.latitude ?? "0") || 0,
    lng: parseFloat(club.fieldData?.longitude ?? "0") || 0,
    url: slug ? `https://${site.domain}/clubs/${slug}` : null,
  };
});

  // 6️⃣ Tri alphabétique par nom de club
filtered.sort((a, b) => {
  const nameA = a.name ?? "";
  const nameB = b.name ?? "";
  if (!nameA && !nameB) return 0;
  if (!nameA) return 1;
  if (!nameB) return -1;
  return nameA.localeCompare(nameB, "fr", { sensitivity: "base" });
});

return NextResponse.json(filtered);
}

/**
 * API handler
 */
export async function GET() {
  try {
    let allClubs: any[] = [];

    for (const site of SITES) {
      const clubs = await fetchDataForSite(site);
      allClubs = allClubs.concat(clubs);
    }

    return NextResponse.json(allClubs);
  } catch (error: any) {
    console.error("Erreur API multi-sites:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

