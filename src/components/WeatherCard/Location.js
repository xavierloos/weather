import React from 'react';
import styled from '@emotion/styled';

const Location = (props) => {
    const Container = styled.div`
        text-aling:center;
    `
    const City= styled.h1`
        font-size:1.6rem;
    `
    const Country= styled.h2`
        font-size:1.2rem;
    `
    return (
        <Container>
            <City>SYDNEY</City>
            <Country>AU</Country>
        </Container>
    );
}

export default Location;