import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../components/common/atoms/Button";
import {
  Container,
  Main,
  Title,
  Description,
} from "../components/sharedstyles";
import { Quiz } from "./api/quiz";

export default function Home() {
  const fetchData = async () => {
    try {
      const res = await axios.get("/api/quiz");
      if (res.status === 200) {
        const quizes = res.data.result.quizes as Quiz[];
        const keywords = res.data.result.keywords as string[];
        return { quizes, keywords };
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [myQuiz, setMyQuiz] = useState(null);
  useEffect(() => {
    // if (
    //   JSON.parse(localStorage.getItem("quizes")).length &&
    //   JSON.parse(localStorage.getItem("keywords"))
    // ) {
    //   setMyQuiz(JSON.parse(localStorage.getItem("myQuiz")));
    //   return setReady(true);
    // }
    fetchData().then((res) => {
      const { quizes, keywords } = res;
      localStorage.setItem("quizes", JSON.stringify(quizes));
      localStorage.setItem("keywords", JSON.stringify(keywords));
      setMyQuiz(JSON.parse(localStorage.getItem("myQuiz")));
      setReady(true);
    });
  }, []);

  return (
    <Container>
      <Main>
        <Title>다짜고짜</Title>
        <Title>CS문제 풀기</Title>

        {ready ? (
          <>
            <Description>
              <Button label="시작하기" onClick={(e) => router.push("/quiz")} />
            </Description>
            {myQuiz ? (
              <Button
                label="내가 푼 문제 초기화"
                size="small"
                color="secondary"
                onClick={() => {
                  localStorage.removeItem("myQuiz");
                  setMyQuiz(JSON.parse(localStorage.getItem("myQuiz")));
                }}
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <Description>잠시만 기다려 주세요</Description>
        )}
      </Main>
    </Container>
  );
}
