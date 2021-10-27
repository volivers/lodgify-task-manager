import React from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';

const Wrapper = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Bar = styled(Progress)`
  position: relative;
  > span {
    font-family: 'Source Sans Pro';
    font-weight: 600;
    font-size: 16px;
    position: absolute;
    top: 15%;
    left: ${({ percent }) =>
    percent !== 0
      ? `calc(${percent}% - 10%)`
      : '0%'
  };
    color: ${({ theme, percent }) =>
    percent !== 0
      ? theme.palette.white
      : theme.palette.primary
  };
  }
  > div {
    > div {
      > div {
        height: 24px !important;
        border-radius: 1.5rem !important;
      }
    }
  }
`;

const Label = styled.h1`margin-bottom: 0.5rem`;

type Props = {
  percentage: number;
};

const ProgressBar: React.FC<Props> = ({
  percentage,
}) => {
  return (
    <Wrapper>
      <Label>Lodgify Grouped Tasks</Label>
      <Bar percent={percentage} strokeColor="#00B797" trailColor="#F2FBFA" />
    </Wrapper>
  );
};

export default ProgressBar;