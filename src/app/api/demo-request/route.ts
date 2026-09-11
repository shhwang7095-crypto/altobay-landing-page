const NOTION_VERSION = "2022-06-28";

type DemoRequestBody = {
  name?: string;
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
  region?: string;
  services?: string[];
  message?: string;
};

function richText(content: string) {
  return content ? [{ text: { content } }] : [];
}

// The Notion "Interested Service" multi_select option for this one is
// singular ("...Report"), while the site's copy is plural everywhere else
// ("...Reports"). Renaming the Notion option via the API didn't stick, so
// translate here instead of introducing the mismatch into the UI.
const NOTION_SERVICE_OPTION: Record<string, string> = {
  "AI-Generated Service Reports": "AI-Generated Service Report",
};

function toNotionServiceName(service: string) {
  return NOTION_SERVICE_OPTION[service] ?? service;
}

export async function POST(request: Request) {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return Response.json(
      { error: "Demo requests aren't wired up yet. Please email hello@altobay.ai instead." },
      { status: 503 }
    );
  }

  let body: DemoRequestBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, company, role, email, phone, region, services, message } = body;

  if (!name || !company || !email || !services || services.length === 0) {
    return Response.json(
      { error: "Name, company, email, and at least one interested service are required." },
      { status: 400 }
    );
  }

  const notionRes = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: richText(name) },
        Company: { rich_text: richText(company) },
        Role: { rich_text: richText(role ?? "") },
        Email: { email },
        Phone: phone ? { phone_number: phone } : { phone_number: null },
        Region: { rich_text: richText(region ?? "") },
        "Interested Service": {
          multi_select: services.map((name) => ({ name: toNotionServiceName(name) })),
        },
        Message: { rich_text: richText(message ?? "") },
      },
    }),
  });

  if (!notionRes.ok) {
    const errBody = await notionRes.json().catch(() => ({}));
    console.error("Notion API error:", errBody);
    return Response.json(
      {
        error: "Couldn't submit your request. Please try again or email hello@altobay.ai.",
        debug: errBody,
      },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
