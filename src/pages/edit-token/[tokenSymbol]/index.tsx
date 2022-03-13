import { useState, useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Modal, Logo, WalletName, Text, Button, Input } from '@/components';
import { useWallet } from '@/hooks';
import type { EditTokenFormData } from '@/types';

import * as S from './styles';

const schema = Yup.object().shape({
  symbol: Yup.string()
    .max(3, 'Must be 3 characters or less')
    .required('Token symbol is required'),
  balance: Yup.number()
    .moreThan(0, 'Token balance must be greater than 0')
    .required('Token balance is required')
});

const EditToken = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { query, back } = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const {
    isLoading,
    token,
    getTokenBySymbol,
    editTokenInWallet,
    removeTokenFromWallet
  } = useWallet();

  const handleGoBack = () => {
    back();
  };

  const handleExclusionModalVisibility = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEditToken = async (token: EditTokenFormData) => {
    await editTokenInWallet(token);
    reset();
    handleGoBack();
  };

  const handleRemoveToken = async () => {
    await removeTokenFromWallet(token.symbol);
    handleGoBack();
  };

  useEffect(() => {
    getTokenBySymbol(query.tokenSymbol as string);
  }, [getTokenBySymbol, query, token]);

  return (
    <>
      <Head>
        <title>kwallet | Edit Token</title>
      </Head>

      <Modal
        title="Deletion Confirmation"
        content="Have you sure you want to remove this token from your wallet?"
        isOpen={isModalOpen}
        onClose={handleExclusionModalVisibility}
        onConfirm={handleRemoveToken}
      />

      <S.Wrapper>
        <S.Header>
          <Logo />
        </S.Header>

        <S.Body>
          <WalletName name="Wish Wallet" />

          {isLoading ||
          !query.tokenSymbol ||
          query.tokenSymbol !== token.symbol ? (
            <span>Loading...</span>
          ) : (
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
                    defaultValue={token.symbol}
                    control={control}
                    error={errors.symbol && errors.symbol.message}
                  />
                </S.InputWrapper>
                <S.InputWrapper>
                  <Text>Balance</Text>
                  <Input
                    name="balance"
                    defaultValue={token.balance}
                    control={control}
                    error={errors.balance && errors.balance.message}
                  />
                </S.InputWrapper>
                <S.ButtonWrapper>
                  <Button
                    rounded
                    title="Remove"
                    onClick={handleExclusionModalVisibility}
                    color="error"
                  />
                  <Button rounded type="submit" title="Save" />
                </S.ButtonWrapper>
              </S.Form>
            </S.Content>
          )}
        </S.Body>
      </S.Wrapper>
    </>
  );
};

export default EditToken;
