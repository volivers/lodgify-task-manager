import React from 'react';
import styled, { css } from 'styled-components';
import { Group } from '../../types/domainTypes';
import { flatten, calculatePercentage } from '../../utils/calculations';
import ProgressBar from '../progress/ProgressBar';
import { Collapse } from 'antd';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Task from './Task';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
`;

const StyledCollapse = styled(Collapse)`
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 0.5rem;
  > div {
    border-color: ${({ theme }) => theme.palette.dark};
    border-bottom: 1px solid ${({ theme }) => theme.palette.dark} !important;
    > div {
      padding: 1.5rem !important;
      > div {
        padding: 0 !important;
      }
    }
  }
`;

const StyledToggle = styled.p<{ isActive?: boolean }>`
  color: ${({ theme }) => theme.palette.accent};
  font-size: 16px !important;
  display: flex !important;
  align-items: center !important;
  width: 13% !important;
  > svg {
    padding-left: 0.5rem;
    
    ${({ isActive }) => isActive &&
    css`
      padding-right: 0.5rem;
      transform: rotate(180deg);
    `}
  }
`;

const Label = styled.p<{ isComplete?: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  color: ${({ isComplete, theme }) => isComplete ? theme.palette.primary : theme.palette.body};
  > svg {
    margin-right: 0.75rem;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  groups: Group[];
  setGroups: (prev: any) => void;
};

const TasksList: React.FC<Props> = ({
  groups,
  setGroups,
}) => {
  const tasks = flatten(groups?.map(group => group.tasks));
  const { Panel } = Collapse;

  return (
    <>
      <ProgressBar percentage={calculatePercentage(tasks)} />
      <ListContainer>
        <StyledCollapse
          expandIconPosition="right"
          expandIcon={({ isActive }) =>
            <StyledToggle isActive={isActive}>
              {isActive ? 'Hide' : 'Show'}
              <ChevronDownIcon height="25" />
            </StyledToggle>
          }
        >
          {groups.map((group, ind) => (
            <Panel
              key={ind}
              header={
                <Label isComplete={group.tasks.every(task => task.checked === true)}>
                  <ClipboardListIcon height="25" /> {group.name}
                </Label>
              }
            >
              <CheckboxGroup>
                {group.tasks.map((task, ind) => (
                  <Task
                    key={ind}
                    label={task.name ? task.name : task.description}
                    checked={task.checked}
                    groups={groups}
                    setGroups={setGroups}
                  />
                ))}
              </CheckboxGroup>
            </Panel>
          ))}
        </StyledCollapse>
      </ListContainer>
    </>
  );
};

export default TasksList;