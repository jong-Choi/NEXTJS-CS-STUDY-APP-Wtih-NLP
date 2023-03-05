import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/common/atoms/Button";
import QuizAnswerContainer from "../../components/common/molecules/QuizAnswerContainer";
import TextWrapper from "../../components/common/molecules/TextWrapper";
import { StyledQuizContainer } from "../../components/common/organisms/QuizContainerWrapper";
import { StyledTextHeader } from "../../components/QuizContainer";
import { Quiz } from "../api/quiz";

interface MyQuiz extends Quiz {
  attempts: number;
}

const MyQuiz = () => {
  const [myQuizes, setMyQuizes] = useState([] as Array<MyQuiz>);
  const [quizes, setQuizes] = useState([] as Array<MyQuiz>);
  const [filteredArray, setFilteredArray] = useState(
    [] as Array<Array<MyQuiz>>
  );

  const router = useRouter();
  useEffect(() => {
    const myQuizes = JSON.parse(localStorage.getItem("myQuiz"));
    if (!myQuizes) {
      alert("푼 문제가 없습니다");
      router.push("/");
    } else {
      setMyQuizes(myQuizes);
      setQuizes(myQuizes);
      setFilteredArray(
        categoryArray.map((category) => {
          return myQuizes.filter((myQuiz) => {
            return myQuiz.category === category;
          });
        })
      );
    }
  }, []);

  const categoryArray = [
    "리액트",
    "프론트엔드 전반",
    "HTML",
    "CSS",
    "자바스크립트",
    "네트워크",
    "운영체제",
  ];
  const onClickCategory = (e) => {
    const index = categoryArray.indexOf(e.target.value);
    if (e.target.value === "전체") return setQuizes(myQuizes);
    else {
      setQuizes(filteredArray[index]);
    }
  };

  const FAB = (
    <StyledNav>
      <Button
        label={`< 새로운 문제 풀기`}
        size="small"
        onClick={() => router.push("/quiz")}
        color="purple"
        backgroundColor="rgba(246, 245, 254, 1)"
      />
    </StyledNav>
  );
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <StyledQuizContainer>
        <StyledTextHeader>
          <div style={{ textAlign: "center", fontWeight: "700" }}>
            내가 푼 문제
          </div>
        </StyledTextHeader>
        <TextWrapper>
          {quizes.map((element) => {
            return (
              <div key={element.id}>
                <div style={{ paddingLeft: "0.5rem" }}>
                  <div
                    style={{
                      fontSize: "small",
                    }}
                  >
                    <b>나의 정확도 : </b>
                    <span
                      style={{
                        color: `${element.attempts > 6 ? "orange" : "green"}`,
                      }}
                    >
                      {((5 / ~~element.attempts) * 100).toFixed(0) + "%"}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "large",
                      fontWeight: "700",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {/* <b>제목:</b>  */}
                    {element.title}
                    <span
                      style={{
                        fontSize: "x-small",
                        fontWeight: "400",
                        margin: "0 0.5rem",
                        color: "gray",
                      }}
                    >
                      {/* <b>카테고리:</b>  */}
                      {element.category}
                    </span>
                  </div>

                  {/* <div>
                <b>내용</b>
              </div> */}
                </div>
                <div style={{ border: "1px solid", padding: "0.5rem" }}>
                  {element.originalText}
                  <br />
                  <b>문제 출처 : </b>
                  <a href={element.source} style={{ color: "darkblue" }}>
                    {element.source}
                  </a>
                </div>

                <div></div>
                <hr />
              </div>
            );
          })}
        </TextWrapper>
        <QuizAnswerContainer FAB={FAB}>
          <Button
            key="전체"
            value="전체"
            label={`전체(${myQuizes.length})`}
            onClick={onClickCategory}
            style={{ margin: "5px" }}
            color="teal"
          />
          {categoryArray.map((element, idx) => {
            return (
              <Button
                key={idx}
                value={element}
                label={`${element}(${filteredArray[idx]?.length})`}
                onClick={onClickCategory}
                color="teal"
                style={{ margin: "5px" }}
              />
            );
          })}
        </QuizAnswerContainer>
      </StyledQuizContainer>
    </div>
  );
};

export default MyQuiz;

export const StyledNav = styled.div`
  /* position: fixed;
  top: 0px;
  right: 0px; */
  position: absolute;
  top: -50px;
  padding: 5px 10px;
`;
