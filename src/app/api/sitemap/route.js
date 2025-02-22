export async function GET() {
    const headers = new Headers({
        "Content-Type": "application/xml",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
    });

    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://pothoczuto.xyz/</loc>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
      </urlset>`;

    return new Response(sitemapXML, { status: 200, headers });
}
