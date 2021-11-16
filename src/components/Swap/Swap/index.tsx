import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import TokenDrop from './TokenDrop';
import AmountInput from './AmountInput';

import { useData } from '../../../context/DataContext';

const Container = styled('div')`
  display: block;
  padding: 0px;
  margin: 48px 0px;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
  }
`;

const SwitchContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0px;
`;

const SwitchButton = styled(IconButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #1F6DC9;
  background: rgba(31, 109, 201, 0.2);
  font-size: 16px;
  line-height: 140%;
  border-radius: 0;
  padding: 20px;
  &:hover {
    background-color: rgba(31, 109, 201, 0.2);
    opacity: 0.8;
  }
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    font-size: 14px;
  }
`;

const SwitchIcon = styled('img')`
  width: 24px;
  height: 24px;
`;

const tokens = [
  { name: 'ETH', icon: '/images/tokens/ethereum.svg', price: 0.0002188},
  { name: 'Matic', icon: '/images/tokens/polygon.svg', price: 0.59},
  { name: 'AVAX', icon: '/images/tokens/avalanche.svg', price: 0.01062},
];

const Swap = () => {
  const data = useData();

  const [from, setFrom] = useState(0);
  const [fromAmount, setFromAmount] = useState('');
  const [fromError, setFromError] = useState('');
  const [to, setTo] = useState(0);
  const [toAmount, setToAmount] = useState('');
  const [toError, setToError] = useState('');

  const getRateString = () => {
    const toToken = tokens[to];
    const fromToken = tokens[from];

    return `1 ${toToken.name} = ${fromToken.price / toToken.price} ${fromToken.name}`;
  }

  const setFromWithValidation = (value: string) => {
    let error = '';
    if (!(Number(value) >= 0.1 && Number(value) <= 100)) {
      error = 'invalid value';
      if (Number(value) < 0.1) {
        error = 'Minimun amount for conversion is 0.1';
      }
    }
    setFromError(error);
    setFromAmount(value);
  }

  const setToWithValidation = (value: string) => {
    setToAmount(value);
    const error = !(Number(value) >= 0 && Number(value) <= 100) ? 'invalid value' : '';
    setToError(error)
  }

  useEffect(() => {
    if (data.setDetail) {
      data.setDetail(fromAmount !== '' && toAmount !== '' && !Boolean(fromError || toError));
    }
  }, [fromError, toError, fromAmount, toAmount]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={5} xs={5}>
          <TokenDrop
            items={tokens}
            label="Frome"
            value={from}
            onChange={(v) => setFrom(v)}
          />
        </Grid>
        <Grid item md={7} xs={7}>
          <AmountInput
            label="Amount"
            labelSec={data.balance}
            helper={fromError ? fromError : "Max to use all your funds"}
            onMax={() => {
              setFromWithValidation('100.00');
            }}
            disabled={!data.connected}
            value={fromAmount}
            onChange={(e) => {
              setFromWithValidation(e.target.value)
            }}
            error={Boolean(fromError)}
          />
        </Grid>
      </Grid>
      <SwitchContainer>
        <SwitchButton
          disabled={Boolean(fromError || toError)}
          onClick={() => {
            setFrom(to);
            setTo(from);
            setFromWithValidation(toAmount);
            setToWithValidation(fromAmount);
          }}
        >
          <SwitchIcon src="/images/switch.png" />
        </SwitchButton>
      </SwitchContainer>
      <Grid container spacing={2}>
        <Grid item md={5} xs={5}>
          <TokenDrop
            items={tokens}
            label="To"
            value={to}
            onChange={(v) => setTo(v)}
          />
        </Grid>
        <Grid item md={7} xs={7}>
          <AmountInput
            label="Amount"
            helper={getRateString()}
            disabled={!data.connected}
            value={toAmount}
            onChange={(e) => {
              setToWithValidation(e.target.value);
            }}
            error={Boolean(toError)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Swap;