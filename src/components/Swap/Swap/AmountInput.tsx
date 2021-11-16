import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid #B3BCD0;
  box-sizing: border-box;
`;

const LabelContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  margin: 8px 0px;
  color: #525F7B;
  font-size: 14px;
  line-height: 160%;
`;

const MaxButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 16px;
  color: #1F6DC9;
  background: rgba(31, 109, 201, 0.2);
  font-size: 16px;
  line-height: 140%;
  &:hover {
    background-color: rgba(31, 109, 201, 0.2);
    opacity: 0.8;
  }
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    font-size: 14px;
  }
`;

const Helper = styled('span')`
  font-size: 14px;
  line-height: 160%;
  color: #525F7B;
`;

interface InputProps {
  label: string,
  labelSec: string,
  helper: string,
  error: boolean,
  value: string,
  disabled: boolean,
  onMax: Function;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export default function AmountInput({ 
  label,
  labelSec,
  helper,
  error,
  value,
  disabled,
  onChange,
  onMax
}: InputProps) {
  const theme = useTheme();
  return (
    <Box>
      <LabelContainer>
        <label>{label}</label>
        <span>{labelSec}</span>
      </LabelContainer>
      <Container style={{ borderColor: error ? theme.palette.error.main : '#B3BCD0'}}>
        <InputBase
          sx={{ flex: 1 }}
          placeholder="0.0"
          inputProps={{ 'aria-label': 'amount' }}
          style={{ fontSize: 20, color: error ? theme.palette.error.main : '#525F7B' }}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
        {onMax && (
          <MaxButton onClick={() => onMax()} disabled={disabled}>
            MAX
          </MaxButton>
        )}
      </Container>
      <Helper style={{ color: error ? theme.palette.error.main : '#525F7B' }}>
        {helper}
      </Helper>
    </Box>
  );
};

AmountInput.defaultProps = {
  label: "",
  labelSec: "",
  helper: "",
  error: false,
  value: '',
  disabled: false,
  onChange: null,
  onMax: null,
}