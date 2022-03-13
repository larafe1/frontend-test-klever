import { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Logo, WalletName, Text, Button, Input, Modal } from '@/components';
import { MODAL_MSG_TOKEN_DUPLICITY } from '@/constants';
import { useWallet } from '@/hooks';
import type { FormData } from '@/types';
import { tokenSchema } from '@/utils';

import * as S from './styles';

const AddToken = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { back } = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(tokenSchema) });

  const { addTokenToWallet } = useWallet();

  const handleGoBack = () => {
    back();
  };

  const handleNotificationModalVisibility = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddToken = async (token: FormData) => {
    try {
      await addTokenToWallet(token);
      handleGoBack();
    } catch (err) {
      setIsModalOpen(true);
    } finally {
      reset();
    }
  };

  return (
    <>
      <Head>
        <title>kwallet | Add Token</title>
      </Head>

      <Modal
        title={MODAL_MSG_TOKEN_DUPLICITY.title}
        content={MODAL_MSG_TOKEN_DUPLICITY.content}
        isOpen={isModalOpen}
        onConfirm={handleNotificationModalVisibility}
      />

      <S.Wrapper>
        <S.Header>
          <Logo />
        </S.Header>

        <S.Body>
          <WalletName name="Wish Wallet" />

          <S.Content>
            <S.ContentHeader>
              <Text highlight>Add Token</Text>
              <Button rounded title="Voltar" onClick={handleGoBack} />
            </S.ContentHeader>

            <S.Form onSubmit={handleSubmit(handleAddToken)}>
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
                <Button rounded type="submit" title="Save" />
              </S.ButtonWrapper>
            </S.Form>
          </S.Content>
        </S.Body>
      </S.Wrapper>
    </>
  );
};

export default AddToken;
