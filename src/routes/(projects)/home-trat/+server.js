// src/routes/home-trat/+server.js
export async function GET() {
    return new Response(null, {
        status: 302,
        headers: {
            Location: '/websites/home-trat/index.html',
        }
    });
}
