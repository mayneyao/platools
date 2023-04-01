// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { type NextApiRequest, type NextApiResponse } from 'next';
import { type NotionProfile } from '@auth/core/providers/notion';

async function storeValue(key: string, value: any) {
  return await fetch(
    `https://key-pair-gen.gine.workers.dev/write?writeKey=${key}`
    , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(value)
    }
  )
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, state } = req.query
  /**
   * POST /v1/oauth/token HTTP/1.1
  Authorization: Basic "$CLIENT_ID:$CLIENT_SECRET" 
  Content-Type: application/json
  
  {"grant_type":"authorization_code","code":"e202e8c9-0990-40af-855f-ff8f872b1ec6", "redirect_uri":"https://example.com/auth/notion/callback"}
   */

  // 将 client id 和 client secret 用冒号隔开
  if (!process.env.NOTION_CLIENT_ID || !process.env.NOTION_CLIENT_SECRET) {
    res.status(500).json({ ok: false, message: 'NOTION_CLIENT_ID or NOTION_CLIENT_SECRET is not set' })
    return
  }
  const credentials = `${process.env.NOTION_CLIENT_ID}:${process.env.NOTION_CLIENT_SECRET}`;

  // 对组合后的字符串进行 base64 编码
  const encodedCredentials = btoa(credentials);
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.NOTION_REDIRECT_URI4FIGMA
    })
  }
  const resp = await fetch('https://api.notion.com/v1/oauth/token', options)

  const authResp = await resp.json() as NotionProfile;
  const writeKey = state as string;
  await storeValue(writeKey, authResp)
  if (authResp.duplicated_template_id) {
    res.redirect(302, `https://notion.so/${authResp.duplicated_template_id.split('-').join('')}`)
  } else {
    res.status(200).json({ ok: true, message: `it's ok, you can close this page` })
  }
}
