/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Vika } from "@vikadata/vika";

if (!process.env.VIKA_TOKEN) {
  throw new Error("VIKA_TOKEN is not set");
}
const vika = new Vika({ token: process.env.VIKA_TOKEN, fieldKey: "name" });
// 通过 datasheetId 来指定要从哪张维格表操作数据。
const datasheet = vika.datasheet("dstTxM6PTcEcGVA4CR");

const getFigmaPluginData = async (query: string) => {
  const url = `https://www.figma.com/api/search/community_resources?sort_by=relevancy&editor_type=all&query=${query}&price=all&creators=all&resource_type=plugins`;
  const resp = await fetch(url, {
    headers: {
      accept: "application/json",
      "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      "sec-ch-ua": '"Chromium";v="111", "Not(A:Brand";v="8"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-csrf-bypass": "yes",
    },
    referrerPolicy: "origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  });
  const data = await resp.json();
  if (data.error) {
    return [];
  }
  return data.meta.results;
};

const formatData = (item: { model: { id: any; versions: { [x: string]: { name: any; }; }; current_plugin_version_id: string | number; comment_count: any; install_count: any; like_count: any; unique_run_count: any; view_count: any; }; }) => {
  return {
    id: item.model.id,
    name: item.model.versions[item.model.current_plugin_version_id]?.name,
    comment_count: item.model.comment_count,
    install_count: item.model.install_count,
    like_count: item.model.like_count,
    unique_run_count: item.model.unique_run_count,
    view_count: item.model.view_count,
  };
};

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; end: { (arg0: string): void; new(): any; }; }; }) {
  const plugins = await getFigmaPluginData("Notion");
  const platoID = "1220625048523881652";
  const plato = plugins.find((item: { model: { id: string; }; }) => item.model.id === platoID);
  const platoData = formatData(plato);
  await datasheet.records
    .create([
      {
        fields: platoData,
      },
    ])
    .then((response) => {
      if (response.success) {
        console.log(response.data);
      } else {
        console.error(response);
      }
    });
  res.status(200).end("Hello Cron!");
}
