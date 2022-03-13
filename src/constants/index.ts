import type { ModalMsgProps } from '@/types';

export const DEFAULT_WALLET = [
  {
    symbol: 'BTC',
    balance: '2'
  },
  {
    symbol: 'ETH',
    balance: '246439.87'
  },
  {
    symbol: 'SOL',
    balance: '6405481.10'
  },
  {
    symbol: 'KLV',
    balance: '387129.70'
  }
];

export const MODAL_MSG_TOKEN_DELETION: ModalMsgProps = {
  exception: 'DELETION',
  title: 'Token Deletion Confirmation',
  content: 'Are you sure you want to remove this token from your wallet?'
};

export const MODAL_MSG_TOKEN_DUPLICITY: ModalMsgProps = {
  exception: 'DUPLICITY',
  title: 'Tokens Must Be Unique',
  content: 'Another token with the same symbol already exists in your wallet.'
};
