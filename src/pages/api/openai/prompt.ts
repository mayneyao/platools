// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { type NextApiRequest, type NextApiResponse } from "next";

import { mockTable } from "~/server/openai/prompt";

// get data from body
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const data = req.body as {
    prompt: string;
    action: "mock_database" | string;
  };
  switch (data.action) {
    case "mock_database":
      const tableStr = await mockTable(data.prompt);
      res.status(200).json({ ok: true, data: tableStr });
      break;
    default:
      res.status(500).json({ ok: false, data: "action is not supported" });
  }
}

// test generate curl command to test api
// curl -X POST -H "Content-Type: application/json" -d '{"prompt":"comments for elden ring","action":"mock_database"}' http://localhost:3000/api/openai/prompt
