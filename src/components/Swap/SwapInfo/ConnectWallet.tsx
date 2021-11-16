import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { useData } from '../../../context/DataContext';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled('div')`
  font-size: 20px;
  line-height: 160%;
  margin: 16px 0px;
  color: #000000;
`
const Descripttion = styled('div')`
  font-size: 16px;
  line-height: 160%;
  margin: 16px 0px;
  color: #525F7B;
  text-align: center;
`
const ConnectButton = styled(Button)`
  font-size: 16px;
  line-height: 140%;
  margin: 0px 16px;
`
const ConnectWallet = () => {
  const data = useData();

  return (
    <Container>
      <Title>
        Connect your wallet
      </Title>
      <Descripttion>
        To start using the app, your wallet needs to be connected :)
      </Descripttion>
      <ConnectButton variant="text" onClick={() => { if (data.connect) data.connect() }}>Connet wallet</ConnectButton>
    </Container>
  );
};

export default ConnectWallet;