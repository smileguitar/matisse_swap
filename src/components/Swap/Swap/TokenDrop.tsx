import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import Popover from '@mui/material/Popover';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border: 1px solid #B3BCD0;
  box-sizing: border-box;
  &:focus {
    border-color: '#0062cc';
    opacity: 0.8;
    padding: 12px;
  }
`;

const LabelContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  margin: 8px 0px;
  color: #525F7B;
  font-size: 14px;
  line-height: 160%;
`;

const Helper = styled('span')`
  font-size: 14px;
  line-height: 160%;
  color: #525F7B;
`;

const ToeknView = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  line-height: 160%;
`;

const TokenIcon = styled('img')`
  width: 24px;
  height: 24px;
  margin: 0px 16px;
`;

const TokenList = styled(Box)`
  width: 278px;
  background: #FFFFFF;
  border: 1px solid #1F6DC9;
  box-sizing: border-box;
  box-shadow: 0px 0px 24px #B3BCD0;
`;

const TokenDrawer = styled(Box)`
  background: #FFFFFF;
  box-sizing: border-box;
  padding: 16px 0px;
`;

const TokenDrawerCloser = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 24px;
`;

const ToeknItem = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  line-height: 160%;
  padding: 20px 32px;
  &:hover {
    background: rgba(179, 188, 208, 0.4);
  }
`;

interface InputProps {
  items: { icon: string, name: string }[];
  label: string,
  helper: string,
  error: boolean,
  value: number,
  onChange: (v: number) => void;
}


export default function TokenDrop({
  items,
  label,
  helper,
  error,
  value,
  onChange
}: InputProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const selectEl = React.useRef(null);

  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSelect = (i: number) => {
    onChange(i);
    handleClose();
  }

  const open = Boolean(anchorEl);

  const list = () => {
    return (
      <>
        {items.map((item, i) => {
          return (
            <ToeknItem key={item.name} onClick={() => onSelect(i)}>
              <TokenIcon src={item.icon} />
              {item.name}
            </ToeknItem>
          );
        })}
      </>
    );
  }
  return (
    <Box>
      <LabelContainer>
        <label>{label}</label>
      </LabelContainer>
      <Container ref={selectEl} onClick={handleClick}>
        <ToeknView>
          <TokenIcon src={items[value].icon} />
          {items[value].name}
        </ToeknView>
        {!open && <KeyboardArrowDownIcon />}
        {open && <KeyboardArrowUpIcon />}
      </Container>
      {matches && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <TokenList>
            {list()}
          </TokenList>
        </Popover>
      )}
      {!matches && (
        <Drawer
          anchor="bottom"
          open={open}
          onClose={handleClose}
        >
          <TokenDrawer>
            <TokenDrawerCloser>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </TokenDrawerCloser>
            {list()}
          </TokenDrawer>
        </Drawer>
      )}
      <Helper style={{ color: error ? theme.palette.error.main : '#525F7B' }}>
        {helper}
      </Helper>
    </Box>
  );
};

TokenDrop.defaultProps = {
  items: [],
  label: "",
  helper: "",
  error: false,
  value: 0,
  onChange: null,
}