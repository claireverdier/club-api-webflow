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
    // 1️⃣ Récupère la liste des collections du site
    const collectionsRes = await fetch(`${WEBFLOW_API_URL}/sites/${WEBFLOW_SITE_ID}/collections`, {
      headers: {
        Authorization: `Bearer ${WEBFLOW_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const collections: WebflowCollection[] = await collectionsRes.json();

    // 2️⃣ Trouve la collection "Clubs" (par son slug ou nom)
    const clubsCollection = collections.find(
      (col: any) => col.displayName.toLowerCase() === "clubs" || col.slug === "clubs"
    );

    if (!clubsCollection) {
      return NextResponse.json({ error: "Collection 'Clubs' non trouvée" }, { status: 404 });
    }

    // 3️⃣ Récupère les items de cette collection
    const itemsRes = await fetch(`${WEBFLOW_API_URL}/collections/${clubsCollection.id}/items`, {
      headers: {
        Authorization: `Bearer ${WEBFLOW_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const { items }: { items: WebflowItem[] } = await itemsRes.json();

    // 4️⃣ Renvoie le JSON à Postman
    return NextResponse.json(items);
  } catch (error: any) {
    console.error("Erreur API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

