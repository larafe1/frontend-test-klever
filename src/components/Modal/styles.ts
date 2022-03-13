import styled, { keyframes } from 'styled-components';

const modalScale = keyframes`
  0% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  position: fixed;

  z-index: 1;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  z-index: 2;

  background-color: ${({ theme }) => theme.colors.black};

  opacity: 0.7;
`;

export const ModalWrapper = styled.div`
  width: 65rem;
  height: 20rem;

  display: flex;
  flex-direction: column;

  margin: auto;

  z-index: 3;

  border-radius: ${({ theme }) => theme.shapes.rounded};

  background-color: ${({ theme }) => theme.colors.background};

  animation: ${modalScale} ${({ theme }) => theme.transitions.fast};
`;

export const Header = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  border-top-left-radius: ${({ theme }) => theme.shapes.rounded};
  border-top-right-radius: ${({ theme }) => theme.shapes.rounded};

  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

export const Body = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 25%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 5rem;
`;
