import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
  width: 100%;
  height: 18rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 4rem;
`;

export const Content = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 8rem;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 565px) {
    width: 90%;
  }
`;

export const ContentHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  margin-top: 2rem;
`;

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 3rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 4rem;
`;
