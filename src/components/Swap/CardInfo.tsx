import React from 'react';
import { styled } from '@mui/material/styles';

import ConnectWallet from './SwapInfo/ConnectWallet';
import Details from './SwapInfo/Details';

import { useData } from '../../context/DataContext';

const Container = styled('div')`
  width: 432px;
  display: flex;
  flex-direction: column;
  padding: 48px 32px;
  background: rgba(179, 188, 208, 0.1);
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 100%;
  }
`;

const Wrapper = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Circle = styled('div')`
  width: 96px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(179, 188, 208, 0.4);
  border-radius: 50%;
  margin: 32px 0px;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 52px;
    height: 52px;
    margin: 16px 0px;
  }
`;

const CardInfo = () => {
  const data = useData();
  
  return (
    <Container>
      <Wrapper>
        <Circle />
        {!data.connected && <ConnectWallet />}
        {data.connected && <Details detail={Boolean(data.detail)} />}
      </Wrapper>
    </Container>
  );
};

export default CardInfo;