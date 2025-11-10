export async function GET() {
    return new Response(
        JSON.stringify({ message: "Hello from Webflow Cloud 🚀" }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        }
    );
}
