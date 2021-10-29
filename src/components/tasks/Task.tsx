import React from 'react';
import styled from 'styled-components';
import { Group } from '../../types/domainTypes';
import { Checkbox } from 'antd';

const StyledCheckbox = styled(Checkbox)`
  margin-left: 0 !important;
  padding: 1rem;

  .ant-checkbox .ant-checkbox-inner {
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.palette.accent};
    border-radius: 4px;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.palette.primary};
    border: 1px solid ${({ theme }) => theme.palette.primary};
    border-radius: 4px;
  }

  &:hover {
    .ant-checkbox .ant-checkbox-inner {
      border: 1px solid ${({ theme }) => theme.palette.primary};
      border-radius: 4px;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      border: 1px solid ${({ theme }) => theme.palette.primary};
      opacity: 0.8;
    }
  }
`;

const Label = styled.p`
  font-size: 16px;
  margin-left: 1rem;
  margin-bottom: 0;
`;

type Props = {
  label: string;
  checked: boolean;
  groups: Group[];
  setGroups: (prev: any) => void;
};

const Task: React.FC<Props> = ({
  label,
  checked,
  groups,
  setGroups,
}) => {
  return (
    <StyledCheckbox
      defaultChecked={checked}
      onChange={(e) => {

        setGroups(groups.map(group => {
          return {
            name: group.name,
            tasks: group.tasks.map(task =>
              (task.description === label || task.name) ?
                { ...task, checked: e.target.checked }
                : { ...task }
            ),
          };
        }));
      }}>
      <Label>{label}</Label>
    </StyledCheckbox>
  );
};

export default Task;