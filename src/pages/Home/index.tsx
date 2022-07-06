import Head from 'next/head';
import { useRouter } from 'next/router';

import { Logo, Loading, WalletName, Button, TokensTable } from '@/components';
import { useWallet } from '@/hooks';
import * as S from '@/styles/pages/Home.styles';

const Home = () => {
  const { push } = useRouter();

  const { isLoading, wallet } = useWallet();

  const handleClick = () => {
    push('/add-token');
  };

  return (
    <>
      <Head>
        <title>Wish Wallet | Home</title>
      </Head>

      <S.Wrapper>
        <S.Header>
          <Logo />
        </S.Header>

        {isLoading ? (
          <Loading />
        ) : (
          <S.Body>
            <S.WalletHeader>
              <WalletName name="Wish Wallet" />
              <Button rounded title="Add Token" onClick={handleClick} />
            </S.WalletHeader>

            <S.WalletContent>
              <TokensTable data={wallet} />
            </S.WalletContent>
          </S.Body>
        )}
      </S.Wrapper>
    </>
  );
};

export default Home;
