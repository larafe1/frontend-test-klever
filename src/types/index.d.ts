import { ReactNode } from 'react';

import { Control } from 'react-hook-form';

export type Token = {
  symbol: string;
  balance: string;
};

export type WalletContextProps = {
  isLoading: boolean;
  wallet: Token[];
  token: Token;
  addTokenToWallet: (payload: Token) => Promise<void>;
  editTokenInWallet: (payload: Token) => Promise<void>;
  removeTokenFromWallet: (symbol: string) => Promise<void>;
  getTokenBySymbol: (symbol: string) => Promise<void>;
};

export type ProviderProps = {
  children: ReactNode;
};

type ButtonType = 'submit' | 'reset' | 'button';
type Colors = 'primary' | 'error' | 'warning';

export type ButtonProps = {
  type?: ButtonType;
  title: string;
  color?: Colors;
  rounded?: boolean;
  onClick?: () => void;
};

export type InputProps = {
  control: Control;
  name: string;
  defaultValue?: string;
  error: string;
};

export type ModalProps = {
  multipleActions?: boolean;
  title: string;
  content: string;
  isOpen: boolean;
  onClose?: () => void;
  onConfirm: () => void;
};

type ModalExceptions = 'DELETION' | 'DUPLICITY';

export type ModalMsgProps = {
  exception: ModalExceptions;
  title: string;
  content: string;
};

export type WalletNameProps = {
  name: string;
};

export type TextProps = {
  children: ReactNode;
  highlight?: boolean;
  isTitle?: boolean;
};

export type TokensTableProps = {
  data: Token[];
};

export type TokensTableItemProps = {
  symbol: string;
  balanceValue: string;
};

export type FormData = {
  symbol: string;
  balance: string;
};
