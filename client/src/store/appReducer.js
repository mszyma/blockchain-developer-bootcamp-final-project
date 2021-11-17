import { createContext } from 'react';

export const AppStateContext = createContext();
export const AppDispatchContext = createContext();

export const appReducer = (state, { type, payload }) => {
  switch (type) {
    case 'connectWallet':
      return {
        ...state,
        isWalletConnectModalOpen: true,
      };
    case 'updateEthBalance':
      return {
        ...state,
        ethBalance: payload,
      };
    case 'setTxnStatus':
      return {
        ...state,
        txnStatus: payload,
      };
    default:
      break;
  }
};

export const initialState = {
  isWalletConnectModalOpen: false,
  ethBalance: 0,
  nftsMinted: 0,
  txnStatus: 'Not Submited',
};
