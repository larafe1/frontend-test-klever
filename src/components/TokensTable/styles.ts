import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Headers = styled.div`
  width: 38.5%;

  display: flex;
  justify-content: space-between;

  position: fixed;
  padding: 0 3rem 3rem 3rem;

  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1120px) {
    width: 60%;
  }
  @media (max-width: 810px) {
    width: 90%;
  }
  @media (max-width: 630px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 6rem;
  padding-bottom: 1rem;
`;

export const NoTokensWrapper = styled.div`
  margin-top: 7rem;
`;
