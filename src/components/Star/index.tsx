import Image from 'next/image';

import ShootingStar from '@/assets/svgs/shooting-star.svg';

import * as S from './styles';

export const Star = () => {
  return (
    <S.Wrapper>
      <Image width={60} height={60} src={ShootingStar} alt="Shooting Star" />
    </S.Wrapper>
  );
};
