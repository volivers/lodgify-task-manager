import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 40%;
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.dark};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease-in;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.custom};
    transform: scale(1.01);
  }
`;

const Card: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Card;