import React from 'react';
import styled from 'styled-components';
import Card from './card/Card';

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskManager = () => {
  return (
    <Wrapper>
      <Card></Card>
    </Wrapper>
  );
};

export default TaskManager;