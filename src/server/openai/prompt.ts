import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const mockTable = async (prompt: string) => {
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0301",
    max_tokens: 1000,
    messages: [
      {
        role: "system",
        content: `
You play a data mock tool, always return legal JSON, *only* return JSON, *prohibit* any extra instructions. The default mock 3 rows. *According to the user's input language returns the corresponding language data*.
Return JSON description:

- name is the database name
- data is the database data, as an array

example1:
input: 关于游戏的评价包含 username、comment。2条。
return: {
"name": "游戏评价",
"icon": "🎮",
"data": [
  {
    "username": "张三",
    "comment": "这个游戏很好玩"
  },
  {
    "username": "李四",
    "comment": "这个游戏很好玩"
  }
]
}

example2:
input: comments for ELDEN RING, includes: nickname,comment,star. 2 rows
return: {
"name": "comments for ELDEN RING",
"icon": "🎮",
"data": [
  {
    "nickname": "Gamer123",
    "comment": "I've been waiting for this game for so long! It looks amazing!",
    "star": 5
  },
  {
    "nickname": "DarkSoulsFan",
    "comment": "Can't wait to see how the Souls series will be mixed with new ideas in this game",
    "star": 5
  }
]
}
`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  return res?.data?.choices?.[0]?.message?.content;
};
