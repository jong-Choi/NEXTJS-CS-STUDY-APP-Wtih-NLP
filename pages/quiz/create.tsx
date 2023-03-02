import axios from "axios";
import React, { useState } from "react";

const QuizCreate = () => {
  const [originalText, setOriginalText] = useState("");
  const [title, setTitle] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/quiz", { title, originalText });
      if (res.status === 200) {
        alert(res.data.message);
      }
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div>
      <form method="post">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
          placeholder="무슨 일이 일어나고 있나요?"
        />
        <button type="submit" onClick={onSubmit}>
          전송하기
        </button>
      </form>
    </div>
  );
};

export default QuizCreate;
