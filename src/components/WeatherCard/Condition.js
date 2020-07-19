import React from 'react';
import styled from '@emotion/styled';

const Condition = (props) => {
    const Temp= styled.h1`
        font-size:1.6rem;
    `
    const State= styled.h2`
        font-size:1.2rem;
    `
    return (
        <>
            <Temp>20c</Temp>
            <State>Cloud</State>
        </>
    );
}
export default Condition;