import { NextApiHandler } from "next";
import fs from "fs/promises";
import path from "path";

interface Article {
  content: string;
}

const articlesApiHandler: NextApiHandler = async (req, res) => {
  //메서드가 post일 때에,
  if (req.method === "POST") {
    //body에 있는 content 프로퍼티를 읽는다.
    const { content } = req.body as { content: string };

    //프로세스의 current working directory/db/articles.json
    const filePath = path.join(process.cwd(), "db", "articles.json");

    //fs.readFileSync는 동기적으로 처리한다. 반면 readFile는 비동기적으로 작동한다.
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data: Article[] = JSON.parse(jsonData);

    // 읽어온 json의 배열에 새로운 객체를 추가한다.
    data.push({ content });

    // 배열을 다시 문자열로 만들어서 비동기적으로 파일을 작성한다.
    await fs.writeFile(filePath, JSON.stringify(data));

    res.status(200).json({ message: "글이 작성되었습니다." });
  } else {
    res.status(405).json({ message: "메서드가 잘못 되었습니다." });
  }
};

export default articlesApiHandler;
