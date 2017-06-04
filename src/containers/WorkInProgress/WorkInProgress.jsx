import React from 'react';
import styled from 'styled-components';

const WorkInProgress = () => (
  <Wrapper>
    <Title>Work In Progress...</Title>
    <Link target="_blank" href="https://github.com/Luchanso/iq-stopwatch">Project code</Link>
    <Link target="_blank" href="https://github.com/Luchanso/iq-stopwatch/projects/1">Progress table</Link>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
`;

const Link = styled.a`
  margin-top: 5px;
  color: white;
`;

export default WorkInProgress;
