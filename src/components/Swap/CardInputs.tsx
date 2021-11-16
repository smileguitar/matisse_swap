import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Swap from './Swap';
import Button from '../buttons/Button';

import { useData } from '../../context/DataContext';

const Container = styled('div')`
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 48px 32px;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 100%;
  }
`;

const Title = styled('div')`
  font-size: 24px;
  line-height: 160%;
`;


const CardInputs = () => {
  const data = useData();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Container>
      <Title>
        Select a token to start swapping
      </Title>
      <Swap />
      <div style={matches ? { width: '100%' } : { width: '100%', background: 'white', position: 'fixed', bottom: '0%', left: 0, padding: 16 }}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: '100%' }}
          disabled={!data.connected}
        >
          Swap
        </Button>
      </div>
    </Container>
  );
};

export default CardInputs;