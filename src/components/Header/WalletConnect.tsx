import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import Button from '../buttons/Button';
import { useData } from '../../context/DataContext';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Network = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 19px 32px;
  background: rgba(179, 188, 208, 0.4);
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    padding: 11px 12px;
  }
`;

const TokenIcon = styled('img')`
  width: 24px;
  height: 24px;
  margin: 0px 16px;
`;

const Address = styled('div')`
  width: 101px;
  font-size: 16px;
  line-height: 160%;
  color: #525F7B;
  margin: 0px 16px;  
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DisconnectButton = styled(IconButton)`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #1F6DC9;
  background: rgba(31, 109, 201, 0.2);
  border-radius: 0;
  padding: 0px;
  margin: 0px 32px;
  &:hover {
    background-color: rgba(31, 109, 201, 0.2);
    opacity: 0.8;
  }
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 48px;
    height: 48px;
    margin: 0px 12px;
  }
`;

const WalletConnect = () => {
  const data = useData();
  
  return (
    <>
      {!data.connected && (
        <Button variant="contained"  color="primary" onClick={() => { if (data.connect) data.connect(); }}>Connect wallet</Button>
      )}
      {data.connected && (
        <Wrapper>
          <Network>
            <TokenIcon src="/images/tokens/ethereum.svg" />
            <Address>
              {data.address}
            </Address>
            <TokenIcon src="/images/disconnect.png" />
          </Network>
          <DisconnectButton>
            <PowerSettingsNewIcon />
          </DisconnectButton>
        </Wrapper>
      )}
    </>
  );
};

export default WalletConnect;