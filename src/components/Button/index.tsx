import type { ButtonProps } from '@/types';

import * as S from './styles';

export const Button = ({
  type,
  title,
  color,
  rounded,
  onClick
}: ButtonProps) => {
  return (
    <S.Wrapper
      type={type ? type : 'button'}
      rounded={rounded}
      color={color}
      onClick={onClick}
    >
      {title}
    </S.Wrapper>
  );
};
