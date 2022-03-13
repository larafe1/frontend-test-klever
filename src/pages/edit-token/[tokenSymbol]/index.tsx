import { useState, useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import {
  Modal,
  Logo,
  Loading,
  WalletName,
  Text,
  Button,
  Input
} from '@/components';
import {
  MODAL_MSG_TOKEN_DELETION,
  MODAL_MSG_TOKEN_DUPLICITY
} from '@/constants';
import { useWallet } from '@/hooks';
import * as S from '@/styles/pages/EditToken.styles';
import type { ModalMsgProps, FormData } from '@/types';
import { tokenSchema } from '@/utils';

const EditToken = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState({} as ModalMsgProps);

  const { query, back } = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(tokenSchema) });

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

  const handleNotificationModalVisibility = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEditToken = async (token: FormData) => {
    try {
      await editTokenInWallet(token);
      handleGoBack();
      reset();
    } catch (err) {
      console.error(err);
      setModalMsg(MODAL_MSG_TOKEN_DUPLICITY);
      setIsModalOpen(true);
    }
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
        multipleActions={modalMsg.exception === 'DELETION'}
        title={modalMsg.title}
        content={modalMsg.content}
        isOpen={isModalOpen}
        onClose={handleNotificationModalVisibility}
        onConfirm={
          modalMsg.exception === 'DELETION'
            ? handleRemoveToken
            : handleNotificationModalVisibility
        }
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
            <Loading />
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
                    onClick={() => {
                      setModalMsg(MODAL_MSG_TOKEN_DELETION);
                      handleNotificationModalVisibility();
                    }}
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
