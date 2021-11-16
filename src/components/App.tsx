import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Header from './Header';
import CardInputs from './Swap/CardInputs';
import CardInfo from './Swap/CardInfo';

import { DataProvider } from '../context/DataContext';

const Wrapper = styled(Box)`
  display: flex;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    display: block;
  }
`;

const Container = styled('div')`
  margin-top: 72px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 72px;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    margin-top: 24px;
    margin-bottom: 96px;
  }
`;

const Margin = styled('div')`
  margin-left: 16px;
  margin-right: 16px;
`;

const TabWrapper = styled(Box)`
  width: 1032px;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 100%;
  }
`;

const Tabs = styled('div')`
  width: 600px;
  display: flex;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 100%;
  }
`;

interface StyleProps {
  active: boolean;
}

const Tab = styled(Button)<StyleProps>`
  width: 50%;
  display: flex;
  font-size: 20px;
  line-height: 160%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 0px;
  color: ${p => p.active ? "#FFFFFF" : "#B3BCD0"};
  background: ${p => p.active ? "#020B44" : "rgba(179, 188, 208, 0.2)"};
  &:hover {
    border-color: '#0062cc';
    background-color: ${p => p.active ? "#020B44" : "rgba(179, 188, 208, 0.2)"};
    opacity: 0.8;
  }
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    font-size: 18px;
    line-height: 160%;
  }
`;
Tab.defaultProps = {
  active: false
};

const Body = styled('div')`
  display: flex;
  flex-direction: row;
  padding: 0px;
  background: #FFFFFF;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.1);
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    flex-direction: column;
  }
`;

const App = () => {
  const [active, setActive] = useState(0);

  return (
    <DataProvider>
      <Header />
      <Wrapper>
        <Container>
          <Margin>
            <TabWrapper>
              <Tabs>
                <Tab active={active === 0} onClick={() => setActive(0)} >Swap</Tab>
                <Tab active={active === 1} onClick={() => setActive(1)} >Pool</Tab>
              </Tabs>
            </TabWrapper>
            {active === 0 && (
              <Body>
                <CardInputs />
                <CardInfo />
              </Body>
            )}
            {active === 1 && (
              <Body>
              </Body>
            )}
          </Margin>
        </Container>
      </Wrapper>
    </DataProvider>
  );
};

export default App;