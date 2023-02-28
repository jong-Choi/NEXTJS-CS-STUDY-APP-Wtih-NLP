import axios from "axios";
import React, { useState } from "react";

const PostCreate = () => {
  const [content, setContent] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/articles", { content });
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
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="무슨 일이 일어나고 있나요?"
        />
        <button type="submit" onClick={onSubmit}>
          전송하기
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
