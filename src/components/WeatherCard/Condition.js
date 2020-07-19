import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.h1`
    font-size: 1.6rem;
  `;
  const State = styled.h2`
    font-size: 1.2rem;
  `;
  return (
    <>
      <Temp>{temp}c</Temp>
      <State>{condition}</State>
    </>
  );
};
export default Condition;
