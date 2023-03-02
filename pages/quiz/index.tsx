import axios from "axios";
import React, { useEffect, useState } from "react";
import { Quiz } from "../api/quiz";

const QuizPage = () => {
  const [quizes, setQuizes] = useState([]);
  const [keywords, setKeywords] = useState([]);
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

  useEffect(() => {
    fetchData().then((res) => {
      const { quizes, keywords } = res;
      setQuizes(quizes);
      setKeywords(keywords);
      setQuizNumber(Math.floor(Math.random() * quizes.length));
    });
  }, []);

  return (
    <div>
      <div>{JSON.stringify(quizes[quizNumber])}</div>
      <div>{JSON.stringify(keywords)}</div>
    </div>
  );
};

export default QuizPage;
