export async function GET(request) {
    return new Response(JSON.stringify({ message: "Hello2 depuis Webflow Cloud!" }), {
        headers: { "Content-Type": "application/json" }
    });
}
