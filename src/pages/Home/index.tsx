import Head from 'next/head';
import { useRouter } from 'next/router';

import { Logo, WalletName, Button, TokensTable } from '@/components';

import * as S from './styles';

const Home = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push('/add-token');
  };

  return (
    <>
      <Head>
        <title>kwallet | Home</title>
      </Head>

      <S.Wrapper>
        <S.Header>
          <Logo />
        </S.Header>

        <S.Body>
          <S.WalletHeader>
            <WalletName name="Wish Wallet" />
            <Button rounded title="Add Token" onClick={handleClick} />
          </S.WalletHeader>

          <S.WalletContent>
            <TokensTable />
          </S.WalletContent>
        </S.Body>
      </S.Wrapper>
    </>
  );
};

export default Home;
