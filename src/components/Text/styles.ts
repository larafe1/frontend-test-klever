import styled, { css } from 'styled-components';

import type { TextProps } from '@/types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1<TextProps>`
  ${({ isTitle, theme }) =>
    isTitle
      ? css`
          font-size: ${theme.fonts.sizes.xxlarge};
          font-weight: ${theme.fonts.weights.bold};
        `
      : css`
          font-size: ${theme.fonts.sizes.large};
          font-weight: ${theme.fonts.weights.medium};
        `}

  color: ${({ theme }) => theme.colors.text};
`;

export const Underline = styled.div`
  width: 75%;
  height: 2px;

  align-self: flex-end;

  margin-top: 1rem;

  background: ${({ theme }) => theme.colors.shape};
`;
