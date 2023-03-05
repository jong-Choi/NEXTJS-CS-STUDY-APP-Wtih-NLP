import React from "react";
import styled from "styled-components";

const TextWrapper = ({ children }) => {
  return (
    <StyledTextWrapper>
      {children}
      <div className="bottom-padding"></div>
    </StyledTextWrapper>
  );
};

export default TextWrapper;

const StyledTextWrapper = styled.div`
  font-family: "Noto Sans KR";
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  white-space: pre-wrap;
  line-height: 1.5rem;
  padding: 1rem;
  .bottom-padding {
    width: 100%;
    height: 40vh;
  }
`;
