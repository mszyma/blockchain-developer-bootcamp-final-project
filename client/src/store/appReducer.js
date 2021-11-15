import { createContext } from 'react';

export const AppStateContext = createContext();
export const AppDispatchContext = createContext();

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'connectWallet':
      return {
        ...state,
        isWalletConnectModalOpen: true,
      };
    default:
      break;
  }
};

export const appState = {
  isWalletConnectModalOpen: false,
};
