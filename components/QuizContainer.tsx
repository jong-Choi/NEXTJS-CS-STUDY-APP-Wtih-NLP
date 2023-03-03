import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Quiz } from "../pages/api/quiz";

const QuizContainer = ({
  quiz,
  keywords,
}: {
  quiz: Quiz;
  keywords: string[];
}) => {
  const [slicedTextArray, setSlicedTextArray] = useState([] as string[]);
  const [replacedTextArray, setReplacedTextArray] = useState([] as string[]);
  const [answersKeyword, setAnswersKeyword] = useState([] as string[]);
  const [allAnswersKeyword, setAllAnswersKeyword] = useState([] as string[]);
  const [isCorrect, setIsCorrect] = useState([] as boolean[]);

  useEffect(() => {
    const randomIndexes = [];
    if (!quiz) return;
    const { keywordArray, originalText, category, title } = quiz;
    while (randomIndexes.length < 5) {
      // 배열 인덱스 중 무작위 5개의 인덱스를 선택한다.
      const randomIndex = Math.floor(Math.random() * keywordArray.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    // 인덱스들을 오름차순으로 정렬한다.
    randomIndexes.sort((a, b) => a - b);
    // 해당하는 인덱스의 키워드들을 배열로 반환한다.
    const sortedKeyword = randomIndexes.map((index) => {
      return keywordArray[index];
    });
    console.log(JSON.stringify(sortedKeyword));

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
    setIsCorrect(Array(replacedTextArray.length).fill(false));
    setSlicedTextArray(slicedTextArray);
    setReplacedTextArray(replacedTextArray);
    setAnswersKeyword(answersKeyword);
    const allAnswersKeyword = [...answersKeyword];
    while (allAnswersKeyword.length < 10) {
      const idx = Math.floor(Math.random() * keywords.length);
      const keyword = keywords[idx];
      if (!allAnswersKeyword.includes(keyword)) allAnswersKeyword.push(keyword);
    }
    setAllAnswersKeyword(allAnswersKeyword.sort(() => Math.random() - 0.5));
  }, [quiz]);

  const [answerIndex, setAnswerIndex] = useState(0);
  useEffect(() => {
    if (!isCorrect.length) return;
    let allCorrected = true;
    for (let i = 0; i < 5; i++) {
      if (!isCorrect[i]) {
        setAnswerIndex(i);
        allCorrected = false;
        break;
      }
    }
    if (allCorrected) setTimeout(() => alert("모두 맞췄습니다!"), 50);
  }, [isCorrect]);

  const onClickKeyword = (e) => {
    if (e.target.value === answersKeyword[answerIndex]) {
      const newIsCorrect = [...isCorrect];
      newIsCorrect[answerIndex] = true;
      e.target.disabled = true;
      setIsCorrect(newIsCorrect);
    } else {
      alert("틀렸습니당");
    }
  };
  return (
    <div>
      <div style={{ whiteSpace: "pre" }}>
        <span>{slicedTextArray[0]}</span>
        {isCorrect.map((boolean, idx) => {
          if (boolean) return <span>{slicedTextArray[idx + 1]}</span>;
          else {
            const [left, rest] = replacedTextArray[idx].split("{");
            const [center, right] = rest.split("}");
            return (
              <>
                <span>{left}</span>
                <StyledQuiz>{center}</StyledQuiz>
                <span>{right}</span>
              </>
            );
          }
        })}
      </div>
      <div>
        {allAnswersKeyword.map((keyword) => {
          return (
            <button type="button" value={keyword} onClick={onClickKeyword}>
              {keyword}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizContainer;

export const StyledQuiz = styled.span`
  color: red;
  background-color: yellow;
`;
