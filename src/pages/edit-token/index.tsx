import Head from 'next/head';
import { useRouter } from 'next/router';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Logo, WalletName, Text, Button, Input } from '@/components';
import type { EditTokenFormData } from '@/types';

import * as S from './styles';

const schema = Yup.object().shape({
  symbol: Yup.string()
    .max(3, 'Must be 3 characters or less')
    .required('Token symbol is required'),
  balance: Yup.number().required('Token balance is required')
});

const EditToken = () => {
  const { back } = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const handleGoBack = () => {
    back();
  };

  const handleEditToken = ({ symbol, balance }: EditTokenFormData) => {
    console.log({ symbol, balance });
    reset();
  };

  return (
    <>
      <Head>
        <title>kwallet | Edit Token</title>
      </Head>

      <S.Wrapper>
        <S.Header>
          <Logo />
        </S.Header>

        <S.Body>
          <WalletName name="Wish Wallet" />
          <S.Content>
            <S.ContentHeader>
              <Text highlight>Edit Token</Text>
              <Button rounded title="Voltar" onClick={handleGoBack} />
            </S.ContentHeader>

            <S.Form onSubmit={handleSubmit(handleEditToken)}>
              <S.InputWrapper>
                <Text>Token</Text>
                <Input
                  name="symbol"
                  control={control}
                  error={errors.symbol && errors.symbol.message}
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <Text>Balance</Text>
                <Input
                  name="balance"
                  control={control}
                  error={errors.balance && errors.balance.message}
                />
              </S.InputWrapper>
              <S.ButtonWrapper>
                <Button
                  rounded
                  title="Remove"
                  onClick={() => ''}
                  color="error"
                />
                <Button rounded type="submit" title="Save" />
              </S.ButtonWrapper>
            </S.Form>
          </S.Content>
        </S.Body>
      </S.Wrapper>
    </>
  );
};

export default EditToken;
