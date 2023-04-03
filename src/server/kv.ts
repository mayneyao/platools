import { upstash } from './upstash';

export const generateKeyPair = () => {
  const publicKey = crypto.randomUUID();
  const privateKey = crypto.randomUUID();
  return { readKey: publicKey, writeKey: privateKey };
};
// 一小时过期
export const defaultExpirationTtl = 3600;


export async function getWriteKeyByReadKey(readKey: string) {
  return await upstash.get(readKey);
}

export async function getWriteContent(writeKey: string): Promise<string | null> {
  return await upstash.get<string>(writeKey)
}
