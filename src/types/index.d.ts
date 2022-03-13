import { ReactNode } from 'react';

import { Control } from 'react-hook-form';

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
  error: string;
};

export type WalletNameProps = {
  name: string;
};

export type TextProps = {
  children: ReactNode;
  highlight?: boolean;
  isTitle?: boolean;
};

export type TokensTableItemProps = {
  name: string;
  balanceValue: string;
};

export type EditTokenFormData = {
  symbol: string;
  balance: string;
};
