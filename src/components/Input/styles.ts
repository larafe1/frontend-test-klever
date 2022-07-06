import styled from 'styled-components';

import type { InputProps } from '@/types';

export const Input = styled.input<Pick<InputProps, 'error'>>`
  width: 40rem;

  padding: 1rem 1.2rem;

  font-size: ${({ theme }) => theme.fonts.sizes.large};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  background: ${({ theme }) => theme.colors.shape};

  border: ${({ error, theme }) =>
    error
      ? `2px solid ${theme.colors.error}`
      : `2px solid ${theme.colors.shape}`};
  border-radius: ${({ theme }) => theme.shapes.rounded};

  position: relative;

  margin: 1rem 0;

  transition: all ${({ theme }) => theme.transitions.default};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: 445px) {
    width: 35rem;
  }
`;

export const Error = styled.p`
  margin-left: 0.8rem;

  color: ${({ theme }) => theme.colors.error};
`;
