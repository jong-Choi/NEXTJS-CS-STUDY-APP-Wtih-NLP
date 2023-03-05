import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const QuizCreate = () => {
  const [originalText, setOriginalText] = useState("");
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("리액트");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== process.env.NEXT_PUBLIC_ADMINPASSWORD) {
      alert("관리자 비밀번호가 일치하지 않습니다.");
      return router.push("/");
    }
    try {
      const res = await axios.post("/api/quiz", {
        category,
        title,
        originalText,
        source,
      });
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="리액트">리액트</option>
          <option value="프론트엔드 전반">프론트엔드 전반</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="자바스크립트">자바스크립트</option>
          <option value="네트워크">네트워크</option>
          <option value="운영체제">운영체제</option>
        </select>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="문제 제목"
        />
        <textarea
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
          placeholder="문제로 만들 내용을 입력하세요"
        />
        <input
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="출처"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="관리자 비밀번호"
        />
        <button type="submit" onClick={onSubmit}>
          전송하기
        </button>
      </form>
    </div>
  );
};

export default QuizCreate;
