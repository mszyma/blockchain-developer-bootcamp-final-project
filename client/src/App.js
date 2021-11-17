import React, { useReducer } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import NavBar from './components/NavBar';
import {
  AppDispatchContext,
  AppStateContext,
  appReducer,
  initialState,
} from './store/appReducer';

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

function App() {
  const [dispatch, store] = useReducer(appReducer, initialState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={store}>
        <ChakraProvider theme={theme}>
          <Web3ReactProvider getLibrary={getLibrary}>
            <NavBar />
          </Web3ReactProvider>
        </ChakraProvider>
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
}

export default App;
