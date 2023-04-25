// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { type NextApiRequest, type NextApiResponse } from "next";
import Cors from "cors";

import { mockTable } from "~/server/openai/prompt";
// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
// get data from body
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  await runMiddleware(req, res, cors);
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
