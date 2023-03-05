import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import QuizContainer from "../../components/QuizContainer";
import { Quiz } from "../api/quiz";

const QuizPage = () => {
  const [quizes, setQuizes] = useState([] as Quiz[]);
  const [keywords, setKeywords] = useState([] as string[]);
  const [quizNumber, setQuizNumber] = useState(0);

  const [quizNumberSet, setQuizNumberSet] = useState([]);

  const [quiz, setQuiz] = useState(null as Quiz | null);

  const router = useRouter();
  useEffect(() => {
    const quizes = JSON.parse(localStorage.getItem("quizes"));
    if (!quizes) router.push("/");
    const keywords = JSON.parse(localStorage.getItem("keywords"));

    setQuizes(quizes);
    setKeywords(keywords);
    setQuizNumber(Math.floor(Math.random() * quizes.length));
    setQuiz(quizes[quizNumber]);
  }, []);

  return (
    <div>
      <QuizContainer quiz={quiz} keywords={keywords} />
    </div>
  );
};

export default QuizPage;
