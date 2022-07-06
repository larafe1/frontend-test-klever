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

  @media (max-width: 1120px) {
    width: 70%;
  }
  @media (max-width: 810px) {
    width: 90%;
  }
  @media (max-width: 630px) {
    width: 100%;
  }
`;
