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

  overflow: hidden;

  margin-top: 4rem;
`;

export const WalletHeader = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WalletContent = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  margin-top: 10rem;
`;
