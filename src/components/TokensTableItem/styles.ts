import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 60%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 3rem;

  cursor: pointer;

  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }
`;
