import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './card/Card';
import { TasksResponse } from '../types/responseTypes';
import { getTasks } from '../utils/apiService';

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskManager = () => {
  const [tasks, setTasks] = useState<TasksResponse>();
  useEffect(() => {
    getTasks()
      .then(response => setTasks(response.data))
      .catch((error) => alert(error));
  }, []);

  console.log(tasks)

  return (
    <Wrapper>
      <Card></Card>
    </Wrapper>
  );
};

export default TaskManager;