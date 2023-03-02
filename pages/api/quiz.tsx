import { NextApiHandler } from "next";
import fs from "fs/promises";
import path from "path";
import axios from "axios";

interface Quiz {
  id: number;
  originalText: string;
  keywordArray: Array<string>;
}

interface Morp {
  id: number;
  lemma: string;
  type: string;
  position: number;
  weight: number;
}

const quizApiHandler: NextApiHandler = async (req, res) => {
  const filePath = path.join(process.cwd(), "data", "quizes.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data: Quiz[] = JSON.parse(jsonData);

  const keywordsFilePath = path.join(process.cwd(), "data", "keywords.json");
  const keywordsData = await fs.readFile(keywordsFilePath, "utf-8");
  const keywords: string[] = JSON.parse(keywordsData);

  if (req.method === "POST") {
    const { category, title, originalText } = req.body as {
      category: string;
      title: string;
      originalText: string;
    };

    const keywordArray = await getKeywordArray(originalText);

    const quiz = {
      id: data.at(-1)?.id + 1 || 0,
      category,
      title,
      originalText,
      keywordArray,
    };

    const newKeywordsSet = new Set([...keywords, ...keywordArray]);
    const newKeywordsData = Array.from(newKeywordsSet);

    data.push(quiz);

    await fs.writeFile(filePath, JSON.stringify(data));
    await fs.writeFile(keywordsFilePath, JSON.stringify(newKeywordsData));

    res.status(200).json({ message: "글이 작성되었습니다.", result: quiz });
  } else {
    res.status(405).json({ message: "메서드가 잘못 되었습니다." });
  }
};

const getMorpData = async (originalText: string) => {
  return axios
    .post(
      "http://aiopen.etri.re.kr:8000/WiseNLU",
      {
        argument: {
          analysis_code: "morp", //"morp" 형태소 분석 코드
          text: originalText,
        },
      },
      {
        headers: {
          Authorization: process.env.NODE_YOUR_ACCESS_KEY,
        },
      }
    )
    .then((res) => {
      const resultArr = res.data.return_object.sentence.map((e) => {
        return { id: e.id, text: e.text, morp: e.morp };
      });

      return resultArr as Array<{
        id: number;
        text: string;
        morp: Array<Morp>;
      }>;
    });
};

const getKeywordArray = async (originalText: string) => {
  const morpData = await getMorpData(originalText);
  const keywordArray = [];
  const jointTypeArray = ["JKS", "JKC", "JKG", "JKO", "JKB", "JKQ"];
  const nounTypeArray = ["NNP", "NNG", "SL"];
  const suffixTypeArray = ["XSN", "XSV", "XSA"];
  morpData.forEach((jsonData) => {
    const morp = jsonData.morp;
    let i = 0;
    morp.forEach((element, idx) => {
      if (jointTypeArray.includes(element.type)) {
        let crrIdx = idx - 1;
        let string = "";
        while (crrIdx >= 0) {
          if (morp[crrIdx].type === "NNB") break;
          if (nounTypeArray.includes(morp[crrIdx].type)) {
            let suffix = " ";
            if (crrIdx > 0 && suffixTypeArray.includes(morp[crrIdx + 1].type)) {
              suffix = morp[crrIdx + 1].lemma;
            }
            string = morp[crrIdx].lemma + suffix + string;
            if (
              crrIdx > 0 &&
              !nounTypeArray.includes(morp[crrIdx - 1].type) &&
              !suffixTypeArray.includes(morp[crrIdx - 1].type)
            ) {
              break;
            }
          }
          crrIdx -= 1;
        }
        const crrKeyword = string.trim();
        if (crrKeyword) {
          keywordArray.push(crrKeyword);
        }
      }
    });
  });

  return keywordArray as Array<string>;
};

export default quizApiHandler;
