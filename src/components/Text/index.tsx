import type { TextProps } from '@/types';

import * as S from './styles';

export const Text = ({ children, isTitle, highlight }: TextProps) => {
  return (
    <S.Wrapper>
      <S.Title isTitle={isTitle}>{children}</S.Title>
      {highlight && <S.Underline />}
    </S.Wrapper>
  );
};
