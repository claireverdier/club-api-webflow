export async function GET(request) {
    return new Response(JSON.stringify({ message: "Hello depuis Webflow Cloud!" }), {
        headers: { "Content-Type": "application/json" }
    });
}
