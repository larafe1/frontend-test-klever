import Link from 'next/link';

import { Text } from '@/components';
import type { TokensTableItemProps } from '@/types';

import * as S from './styles';

export const TokensTableItem = ({
  name,
  balanceValue
}: TokensTableItemProps) => {
  return (
    <Link href="/edit-token" passHref>
      <S.Wrapper>
        <Text isTitle>{name}</Text>
        <Text isTitle>{balanceValue}</Text>
      </S.Wrapper>
    </Link>
  );
};
