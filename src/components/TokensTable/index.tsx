import { Text, TokensTableItem } from '@/components';

import * as S from './styles';

export const TokensTable = () => {
  return (
    <S.Wrapper>
      <S.Headers>
        <Text highlight>Tokens</Text>
        <Text highlight>Balance</Text>
      </S.Headers>

      <S.Content>
        <TokensTableItem name="KLV" balanceValue="10,250.50" />
        <TokensTableItem name="ETH" balanceValue="24,436.68" />
        <TokensTableItem name="BTC" balanceValue="2" />
      </S.Content>
    </S.Wrapper>
  );
};
