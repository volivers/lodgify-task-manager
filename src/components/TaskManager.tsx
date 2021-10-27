import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import { TasksResponse } from '../types/responseTypes';
import { getTasks } from '../utils/apiService';
import Card from './card/Card';
import { Spin } from 'antd';
import ProgressBar from './progress/ProgressBar';

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyState = styled.p`align-self: center;`;

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
      <Suspense fallback={<Spin />}>
        <Card>
          {!!tasks ? (
            <ProgressBar percentage={30} />
          ) : (
            <EmptyState>There are no tasks available.</EmptyState>
          )}
        </Card>
      </Suspense>
    </Wrapper>
  );
};

export default TaskManager;