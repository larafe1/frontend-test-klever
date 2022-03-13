import { Text, TokensTableItem } from '@/components';
import type { TokensTableProps } from '@/types';

import * as S from './styles';

export const TokensTable = ({ data }: TokensTableProps) => {
  return (
    <S.Wrapper>
      <S.Headers>
        <Text highlight>Tokens</Text>
        <Text highlight>Balance</Text>
      </S.Headers>

      <S.Content>
        {data.map((token) => (
          <TokensTableItem
            key={token.symbol}
            symbol={token.symbol}
            balanceValue={token.balance}
          />
        ))}
      </S.Content>
    </S.Wrapper>
  );
};
