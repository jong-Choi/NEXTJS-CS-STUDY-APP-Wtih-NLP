import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Quiz } from "../pages/api/quiz";
import { Button, ButtonProps } from "./common/atoms/Button";
import TextWrapper from "./common/molecules/TextWrapper";
import QuizAnswerContainer from "./common/molecules/QuizAnswerContainer";
import { StyledQuizContainer } from "./common/organisms/QuizContainerWrapper";

const QuizContainer = ({
  quiz,
  keywords,
  onCorrect,
  nav,
  timer,
}: {
  quiz: Quiz;
  keywords: string[];
  onCorrect: (attempts: number) => void;
  nav: JSX.Element;
  timer: number;
}) => {
  const [slicedTextArray, setSlicedTextArray] = useState([] as string[]);
  const [replacedTextArray, setReplacedTextArray] = useState([] as string[]);
  const [answersKeyword, setAnswersKeyword] = useState([] as string[]);
  // const [allAnswersKeyword, setAllAnswersKeyword] = useState([] as string[]);
  const [isCorrect, setIsCorrect] = useState([] as boolean[]);
  const [keywordStyleArray, setKeywordStyleArray] = useState(
    [] as Array<ButtonProps>
  );
  const [attempts, setAttemps] = useState(0);
  // const [keywordStyleArraySnapshot, setKeywordStyleArraySnapshot] = useState(
  //   [] as Array<ButtonProps>
  // );

  useEffect(() => {
    const randomIndexes = [];
    const randomKeywordSet = [];
    if (!quiz) return;
    const { keywordArray, originalText, category, title } = quiz;
    let flag = 0;
    while (randomKeywordSet.length < 5 && flag < 50) {
      flag++;
      // 배열 인덱스 중 무작위 5개의 인덱스를 선택한다.
      const randomIndex = Math.floor(Math.random() * keywordArray.length);
      console.log(keywordArray[randomIndex]);
      console.log(randomKeywordSet.indexOf(keywordArray[randomIndex]));
      if (randomKeywordSet.indexOf(keywordArray[randomIndex]) >= 0) continue;
      randomIndexes.push(randomIndex);
      randomKeywordSet.push(keywordArray[randomIndex]);
    }

    // 인덱스들을 오름차순으로 정렬한다.
    randomIndexes.sort((a, b) => a - b);
    // 해당하는 인덱스의 키워드들을 배열로 반환한다.
    const sortedKeyword = randomIndexes.map((index) => {
      return keywordArray[index];
    });

    let fromIndex = 0;
    const answersKeyword = [];
    const answersIndex = [];
    sortedKeyword.forEach((value) => {
      let target = value;
      let indexResult = originalText.indexOf(target, fromIndex);
      if (indexResult < 0) target = value.split(" ").join("");
      indexResult = originalText.indexOf(target, fromIndex);
      if (indexResult >= 0) {
        answersKeyword.push(target);
        answersIndex.push(indexResult);
        fromIndex = indexResult + 1;
      }
    });

    const slicedTextArray = [];
    const replacedTextArray = [];
    answersIndex.forEach((answerIndex, idx) => {
      //만약 slicedTextArray가 없다면, 최초 키워드의 인덱스 전까지의 모든 문자열을 배열에 삽입한다.
      if (!slicedTextArray.length) {
        slicedTextArray.push(originalText.slice(0, answerIndex));
      }
      //현재 키워드의 인덱스부터 다음 키워드의 인덱스까지를 slice한다. 만일 다음 키워드가 없다면 끝까지 슬라이스 된다.
      const slicedText = originalText.slice(answerIndex, answersIndex[idx + 1]);
      //슬라이스한 문자열에서 키워드를 찾아 키워드를 '{0번 문제}'로 바꾼다.
      const replacedText = slicedText.replace(
        answersKeyword[idx],
        `\{문제 ${idx + 1}번\}`
      );
      //바꾼 문자열을 배열에 추가한다.
      slicedTextArray.push(slicedText);
      replacedTextArray.push(replacedText);
    });

    //배열을 모두 합치면 원하는 문자열이 된다.
    setAttemps(0);
    setIsCorrect(Array(replacedTextArray.length).fill(false));
    setSlicedTextArray(slicedTextArray);
    setReplacedTextArray(replacedTextArray);
    setAnswersKeyword(answersKeyword);
    let allAnswersKeyword = [...answersKeyword];
    const keyset = new Set(allAnswersKeyword);
    while (keyset.size < 10) {
      const idx = Math.floor(Math.random() * keywords.length);
      const keyword = keywords[idx];
      keyset.add(keyword);
    }
    allAnswersKeyword = Array.from(keyset);
    const sortedAllKeywords = allAnswersKeyword.sort(() => Math.random() - 0.5);
    const sortedAllKeywordStyle = sortedAllKeywords.map(
      (element, index) =>
        ({
          label: element,
          color: "blue",
          disabled: false,
        } as ButtonProps)
    );
    // setAllAnswersKeyword(sortedAllKeywords);
    setKeywordStyleArray(sortedAllKeywordStyle);
  }, [quiz]);

  const [answerIndex, setAnswerIndex] = useState(0);
  useEffect(() => {
    if (!isCorrect.length) return;
    let allCorrected = true;
    for (let i = 0; i < isCorrect.length; i++) {
      if (!isCorrect[i]) {
        setAnswerIndex(i);
        allCorrected = false;
        break;
      }
    }
    if (allCorrected) {
      let crrAttempts = attempts;
      if (isCorrect.length < 5) {
        crrAttempts += 5 - isCorrect.length;
      }
      setTimeout(() => onCorrect(crrAttempts), 50);
    }
  }, [isCorrect]);

  const onClickKeyword = (e) => {
    const idx = keywordStyleArray.findIndex(
      (element) => element.label === e.target.value
    );
    const newKeywordStyleArray: Array<ButtonProps> = [...keywordStyleArray];

    if (e.target.value === answersKeyword[answerIndex]) {
      const newIsCorrect = [...isCorrect];
      newIsCorrect[answerIndex] = true;
      e.target.disabled = true;
      setIsCorrect(newIsCorrect);
      newKeywordStyleArray[idx].disabled = true;
      newKeywordStyleArray[idx].color = "green";
      newKeywordStyleArray.forEach((element) => {
        if (element.color === "green") return;
        element.color = "blue";
        element.disabled = false;
      });
    } else {
      newKeywordStyleArray[idx].disabled = true;
      newKeywordStyleArray[idx].color = "red";
    }
    setKeywordStyleArray(newKeywordStyleArray);
    setAttemps(attempts + 1);
  };

  return (
    <StyledQuizContainer>
      <StyledTextHeader>
        {nav}
        <div className="sub-header">
          <div>시도: {attempts}</div>
          <div>지난 시간: {timer}초</div>
        </div>
      </StyledTextHeader>

      <TextWrapper>
        <span>{slicedTextArray[0]}</span>
        {isCorrect.map((boolean, idx) => {
          if (!replacedTextArray) return <></>;
          if (boolean)
            return <span key={"text" + idx}>{slicedTextArray[idx + 1]}</span>;
          else {
            const [left, rest] = replacedTextArray[idx].split("{");
            const [center, right] = rest.split("}");
            return (
              <span key={"text" + idx}>
                <span>{left}</span>
                <StyledQuiz>{center}</StyledQuiz>
                <span>{right}</span>
              </span>
            );
          }
        })}
      </TextWrapper>
      <QuizAnswerContainer>
        {keywordStyleArray.map((props, idx) => {
          return (
            <Button
              key={idx}
              {...props}
              value={props.label}
              onClick={onClickKeyword}
              style={{ margin: "5px" }}
            />
          );
        })}
      </QuizAnswerContainer>
    </StyledQuizContainer>
  );
};

export default QuizContainer;

export const StyledQuiz = styled.span`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  color: rgba(64, 103, 249, 1);
  background-color: rgba(64, 103, 249, 0.05);
  border-radius: 3em;
  padding: 0px 6px;
  /* color: red;
  background-color: yellow; */
`;

export const StyledTextHeader = styled.div`
  position: sticky;
  top: 0;
  /* top: env(safe-area-inset-top); */
  /* min-height: calc(100% + env(safe-area-inset-top)); */
  padding: 0.5rem 1rem;
  padding-top: calc(0.3rem + env(safe-area-inset-top));
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 1) 10%,
    #daf1ff 100%
  );
  .sub-header {
    display: flex;
    justify-content: space-between;
  }
`;
