import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;

  display: flex;
  align-items: center;

  cursor: pointer;

  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    filter: brightness(0.75);
  }
`;
