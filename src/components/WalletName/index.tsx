import Link from 'next/link';

import { Star, Text } from '@/components';
import type { WalletNameProps } from '@/types';

import * as S from './styles';

export const WalletName = ({ name }: WalletNameProps) => {
  return (
    <Link href="/" passHref>
      <S.Wrapper>
        <Star />
        <Text isTitle>{name}</Text>
      </S.Wrapper>
    </Link>
  );
};
