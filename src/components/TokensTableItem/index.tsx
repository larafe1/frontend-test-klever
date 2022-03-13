import Link from 'next/link';

import { Text } from '@/components';
import type { TokensTableItemProps } from '@/types';
import { formatCurrency } from '@/utils';

import * as S from './styles';

export const TokensTableItem = ({
  symbol,
  balanceValue
}: TokensTableItemProps) => {
  const parsedUrl = `/edit-token/${symbol}`;

  return (
    <Link href={parsedUrl} passHref>
      <S.Wrapper>
        <Text isTitle>{symbol}</Text>
        <Text isTitle>{formatCurrency(balanceValue)}</Text>
      </S.Wrapper>
    </Link>
  );
};
