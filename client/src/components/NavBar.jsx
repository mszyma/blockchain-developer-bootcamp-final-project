import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useWeb3React } from '@web3-react/core';

const NavBar = props => {
  const web3 = useWeb3React();
  console.log(web3);

  return (
    <Flex
      as="nav"
      align={['none', 'none', 'baseline']}
      justify="space-between"
      wrap="wrap"
      px="1.5rem"
      py="0.5rem"
      {...props}
    >
      <Flex align="center" mr={10}>
        <Heading as="h1">F1 APP</Heading>
      </Flex>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default NavBar;
