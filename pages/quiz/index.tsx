import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import QuizContainer from "../../components/QuizContainer";
import { Quiz } from "../api/quiz";

const QuizPage = () => {
  const [quizes, setQuizes] = useState([] as Quiz[]);
  const [keywords, setKeywords] = useState([] as string[]);
  const [quizNumber, setQuizNumber] = useState(0);
  const [quizNumberSet, setQuizNumberSet] = useState([]);
  const [quiz, setQuiz] = useState(null as Quiz | null);
  const [attemptsArray, setAttemptsArray] = useState([0, 0, 0, 0, 0]);
  const onCorrect = (attempts) => {
    const newAttemptsArray = [...attemptsArray];
    const index = newAttemptsArray.indexOf(0);
    newAttemptsArray[index] = attempts;
    setAttemptsArray(newAttemptsArray);
    //내가 푼 문제에 저장합니다.
    let myQuiz = JSON.parse(localStorage.getItem("myQuiz"));
    if (!myQuiz) myQuiz = [];
    myQuiz.push({ ...quiz, attempts: attempts });
    localStorage.setItem("myQuiz", JSON.stringify(myQuiz));
    //새로운 퀴즈를 반환합니다.
    let quizNumber;
    while (!quizNumber) {
      const newQuizNumber = Math.floor(Math.random() * quizes.length);
      if (!quizNumberSet.includes(newQuizNumber)) {
        quizNumber = newQuizNumber;
      }
    }
    setQuizNumber(quizNumber);
    setQuizNumberSet([...quizNumberSet, quizNumber]);
    setQuiz(JSON.parse(JSON.stringify(quizes[quizNumber])));
  };

  const router = useRouter();
  useEffect(() => {
    const quizes = JSON.parse(localStorage.getItem("quizes"));
    if (!quizes) router.push("/");
    const keywords = JSON.parse(localStorage.getItem("keywords"));

    setQuizes(quizes);
    setKeywords(keywords);
    const quizNumber = Math.floor(Math.random() * quizes.length);
    setQuizNumber(quizNumber);
    setQuizNumberSet([quizNumber]);
    setQuiz(quizes[quizNumber]);
  }, []);

  const nav = (
    <StyledNav>
      <div>문제번호: {quizNumber}</div>
      <div className="attempts-flex">
        {attemptsArray.map((attempts, idx) => {
          let Squarebox;
          const score = 5 / attempts;

          if (score < 0.2) {
            Squarebox = (
              <div className="red-box" key={idx.toString() + attempts}>
                ■
              </div>
            );
          } else if (score < 0.82) {
            Squarebox = (
              <div className="yellow-box" key={idx.toString() + attempts}>
                ■
              </div>
            );
          } else if (score <= 1) {
            Squarebox = (
              <div className="green-box" key={idx.toString() + attempts}>
                ■
              </div>
            );
          } else {
            Squarebox = <div key={idx.toString() + attempts}>□</div>;
          }
          return Squarebox;
        })}
      </div>
    </StyledNav>
  );
  return (
    <div>
      <QuizContainer
        quiz={quiz}
        keywords={keywords}
        onCorrect={onCorrect}
        nav={nav}
      />
    </div>
  );
};

export default QuizPage;

const StyledNav = styled.nav`
  background-color: white;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  .attempts-flex {
    display: flex;
  }
  .red-box {
    color: rgba(223, 54, 112, 1);
  }
  .yellow-box {
    color: rgba(255, 148, 46, 1);
  }
  .green-box {
    color: rgba(52, 196, 113, 1);
  }
`;
