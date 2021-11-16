import React from 'react';
import { styled } from '@mui/material/styles';

import WalletConnect from './WalletConnect';

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 112px;
  padding: 24px 48px;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    height: 80px;
    padding: 16px;
  }
`;

const Logoimage = styled('img')`
  height: 32px;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    height: 20px;
  }
`;

const Header = () => {
  return (
    <Container
    >
      <Logoimage src="/images/matisse.png" />
      <WalletConnect />      
    </Container>
  )
};

export default Header;