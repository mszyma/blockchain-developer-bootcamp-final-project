import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import NavBar from './components/NavBar';

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <NavBar />
      </Web3ReactProvider>
    </ChakraProvider>
  );
}

export default App;
