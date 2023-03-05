import React from "react";
import styled from "styled-components";

export const QuizContainerWrapper = ({ children }) => {
  return (
    <StyledQuizContainer>
      <div>{children}</div>
    </StyledQuizContainer>
  );
};

export const StyledQuizContainer = styled.div`
  height: 100%;
  width: 100%;

  @media screen and (min-width: 769px) {
    position: absolute;
    height: 50%;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 0.5rem;
  }
`;
