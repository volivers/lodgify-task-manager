import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import { TasksResponse } from '../types/responseTypes';
import { getTasks } from '../utils/apiService';
import Card from './card/Card';
import { Spin } from 'antd';
import TaskList from './tasks/TasksList';

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskManager = () => {
  const [groups, setGroups] = useState<TasksResponse>();
  useEffect(() => {
    getTasks()
      .then(response => setGroups(response.data))
      .catch((error) => alert(error));
  }, []);

  return (
    <Wrapper>
      <Suspense fallback={<Spin />}>
        {!!groups && (
          <Card>
            <TaskList groups={Object.values(groups)} setGroups={setGroups} />
          </Card>
        )}
      </Suspense>
    </Wrapper>
  );
};

export default TaskManager;