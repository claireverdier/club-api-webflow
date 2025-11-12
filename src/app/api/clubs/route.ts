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
  name: string;
  [key: string]: any;
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

    if (!Array.isArray(collections) || collections.length === 0) {
      return NextResponse.json(
        { error: "Aucune collection trouvée pour ce site Webflow" },
        { status: 404 }
      );
    }

    // 2️⃣ Trouve la collection "Clubs"
    const clubsCollection = collections.find(
      (col) =>
        col.displayName.toLowerCase() === "clubs" ||
        col.slug.toLowerCase() === "clubs"
    );

    if (!clubsCollection) {
      return NextResponse.json({ error: "Collection 'Clubs' non trouvée" }, { status: 404 });
    }

    // 3️⃣ Récupère les items
    const itemsRes = await fetch(
      `${WEBFLOW_API_URL}/collections/${clubsCollection.id}/items`,
      {
        headers: {
          Authorization: `Bearer ${WEBFLOW_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!itemsRes.ok) {
      throw new Error(`Erreur lors du fetch des items: ${itemsRes.statusText}`);
    }

    const itemsData = (await itemsRes.json()) as { items: WebflowItem[] };
    const items = itemsData.items ?? [];

    return NextResponse.json(items);
  } catch (error: any) {
    console.error("Erreur API Clubs:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
