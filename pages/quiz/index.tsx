import axios from "axios";
import React, { useEffect, useState } from "react";
import QuizContainer from "../../components/QuizContainer";
import { Quiz } from "../api/quiz";

const QuizPage = () => {
  const [quizes, setQuizes] = useState([] as Quiz[]);
  const [keywords, setKeywords] = useState([] as string[]);
  const [quizNumber, setQuizNumber] = useState(0);

  const [quizNumberSet, setQuizNumberSet] = useState([]);
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

  const [quiz, setQuiz] = useState(null as Quiz | null);

  useEffect(() => {
    fetchData().then((res) => {
      const { quizes, keywords } = res;
      setQuizes(quizes);
      setKeywords(keywords);
      setQuizNumber(Math.floor(Math.random() * quizes.length));
      setQuiz(quizes[quizNumber]);
    });
  }, []);

  return (
    <div>
      <QuizContainer quiz={quiz} keywords={keywords} />
    </div>
  );
};

export default QuizPage;
