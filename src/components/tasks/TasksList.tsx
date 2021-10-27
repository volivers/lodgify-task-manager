import React from 'react';
import styled, { css } from 'styled-components';
import { Group } from '../../types/domainTypes';
import { Collapse } from 'antd';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/outline';

const Wrapper = styled.div`
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
    }
  }
`;

const Name = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  > svg {
    margin-right: 0.75rem;
  }
`;

const Toggle = styled.p<{ isActive?: boolean }>`
  color: #999999;
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

type Props = {
  groups: Group[];
};

const TasksList: React.FC<Props> = ({
  groups,
}) => {
  const { Panel } = Collapse;

  return (
    <Wrapper>
      <StyledCollapse
        expandIconPosition="right"
        expandIcon={({ isActive }) =>
          <Toggle isActive={isActive}>
            {isActive ? 'Hide' : 'Show'}
            <ChevronDownIcon height="25" />
          </Toggle>
        }
      >
        {groups.map((group, ind) => (
          <Panel
            key={ind}
            header={
              <Name>
                <ClipboardListIcon height="25" /> {group.name}
              </Name>
            }
          >
            {group.tasks.map((task, ind) => (
              <p key={ind}>{task.description}</p>
            ))}
          </Panel>
        ))}
      </StyledCollapse>
    </Wrapper>
  );
};

export default TasksList;