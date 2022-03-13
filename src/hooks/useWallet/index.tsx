import { createContext, useState, useContext, useEffect } from 'react';

import config from '@/config';
import { WalletContextProps, ProviderProps, Token } from '@/types';

const initalWalletState = [
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

const WalletContext = createContext({} as WalletContextProps);

const WalletProvider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [wallet, setWallet] = useState(initalWalletState as Token[]);
  const [token, setToken] = useState({} as Token);

  const addTokenToWallet = async (payload: Token) => {
    try {
      setIsLoading(true);
      const updatedWallet = [...wallet, payload];
      setWallet(updatedWallet);
      localStorage.setItem(
        config.tokensWalletStorageKey,
        JSON.stringify(updatedWallet)
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const editTokenInWallet = async (payload: Token) => {
    try {
      setIsLoading(true);
      const updatedWallet = wallet.map((token) =>
        token.symbol === payload.symbol ? payload : token
      );
      setWallet(updatedWallet);
      localStorage.setItem(
        config.tokensWalletStorageKey,
        JSON.stringify(updatedWallet)
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const removeTokenFromWallet = async (symbol: string) => {
    try {
      setIsLoading(true);
      const updatedWallet = wallet.filter((token) => token.symbol !== symbol);
      setWallet(updatedWallet);
      localStorage.setItem(
        config.tokensWalletStorageKey,
        JSON.stringify(updatedWallet)
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getTokenBySymbol = async (symbol: string) => {
    try {
      setIsLoading(true);
      const targetToken = wallet.find((token) => token.symbol === symbol);
      if (!targetToken) throw new Error('Token not found');
      setToken(targetToken);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getWallet = async () => {
    try {
      setIsLoading(true);
      const tokens = localStorage.getItem(config.tokensWalletStorageKey);
      if (tokens) {
        const parsedTokens: Token[] = JSON.parse(tokens);
        setWallet(parsedTokens);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        isLoading,
        wallet,
        token,
        addTokenToWallet,
        editTokenInWallet,
        removeTokenFromWallet,
        getTokenBySymbol
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

const useWallet = () => {
  const context = useContext(WalletContext);

  return context;
};

export { WalletProvider, useWallet };
