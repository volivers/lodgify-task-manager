import React from 'react';
import styled, { css } from 'styled-components';
import { Progress } from 'antd';

const Wrapper = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBar = styled(Progress)`
  position: relative;
  > span {
    font-family: ${({ theme }) => theme.typography.body};
    font-weight: 600;
    font-size: 16px;
    position: absolute;
    top: 15%;

    ${({ theme, percent }) => percent !== 0 ?
    css`
      left: calc(${percent}% - 10%);
      color: ${theme.palette.white};
    `
    : css`
      left: 0%;
      color: ${theme.palette.primary};
    `}
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

const Label = styled.h1`margin-bottom: 1rem`;

type Props = {
  percentage: number;
};

const ProgressBar: React.FC<Props> = ({
  percentage,
}) => {
  return (
    <Wrapper>
      <Label>Lodgify Grouped Tasks</Label>
      <StyledBar percent={percentage} strokeColor="#00B797" trailColor="#F2FBFA" />
    </Wrapper>
  );
};

export default ProgressBar;