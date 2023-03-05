import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

const QuizAnswerContainer = ({ ...props }) => {
  const [activated, setActivated] = useState(true);
  return (
    <StyledQuizAnswers>
      <div className="actionButton">
        <Button
          onClick={() => {
            setActivated(!activated);
          }}
          label={activated ? "숨기기" : "+"}
          size="small"
          color="orange"
          backgroundColor="white"
        ></Button>
      </div>
      <div
        className="buttons"
        style={
          activated
            ? { height: "30vh", opacity: "1" }
            : { height: "0vh", opacity: "0" }
        }
      >
        {props.children}
      </div>
    </StyledQuizAnswers>
  );
};

export default QuizAnswerContainer;

export const StyledQuizAnswers = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 30%;
  text-align: center;
  -webkit-box-shadow: 0 -8px 10px -6px rgba(255, 148, 46, 0.3);
  -moz-box-shadow: 0 -8px 10px -6px rgba(255, 148, 46, 0.3);
  box-shadow: 0 -8px 10px -6px rgba(255, 148, 46, 0.3);
  background: white;
  .buttons {
    overflow: hidden;
    justify-content: space-around;
    transition: all 200ms;
  }
  .actionButton {
    position: relative;
    top: -17px;
  }
`;
