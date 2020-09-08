import React from "react";
import styled from "@emotion/styled";
import Reel from 'react-reel';

const Condition = ({ temp, condition }) => {
  const reelStyle = {
    reel: {
      height: '1em',
      display: 'flex',
      alignItems: 'flex-end',
      overflowY: 'hidden',
      lineHeight: '1em',
      justifyContent: 'center'
    },
    group: {
      transitionDelay: '0',
      transitionTimingFunction: 'ease-in-out',
      transform: 'translate(0,0)',
      height: '1.5em'
    },
    number: {
      height: '1em',
    },
  };

  return (
    <>
      {/* <Temp>{temp}c</Temp> */}
      <div style={{ fontSize: '2rem' }}>
        <Reel theme={reelStyle} text={`${temp}°C`} />
      </div>

      <State>{condition}</State>
    </>
  );
};

export default Condition;

const Temp = styled.h1`
    font-size: 1.6rem;
  `;
const State = styled.h2`
    font-size: 1.2rem;
  `;