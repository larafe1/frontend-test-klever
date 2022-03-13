import styled, { css } from 'styled-components';

import type { ButtonProps } from '@/types';

export const Wrapper = styled.button<
  Pick<ButtonProps, 'rounded'> & Pick<ButtonProps, 'color'>
>`
  padding: 0.9rem 1.8rem;

  border-radius: ${({ rounded, theme }) =>
    rounded ? theme.shapes.rounded : theme.shapes.sharp};

  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};

  color: ${({ theme }) => theme.colors.shape};
  ${({ color }) => {
    if (color === 'error') {
      return css`
        background: ${({ theme }) => theme.colors.error};
      `;
    } else if (color === 'warning') {
      return css`
        background: ${({ theme }) => theme.colors.warning};
      `;
    } else {
      return css`
        background: ${({ theme }) => theme.colors.primaryDark};
      `;
    }
  }}

  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    filter: brightness(0.8);
  }
`;
