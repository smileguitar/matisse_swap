import React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

const DetailWrapper = styled('div')`
  display: block;
  width: 100%;
`;

const DetailItemWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  line-height: 160%;
  margin: 16px 0px;
  color: #525F7B;
`;

const DetailDescription = styled('div')`
  font-size: 12px;
  line-height: 160%;
  margin: 16px 0px;
  color: #525F7B;
`;

const Details = ({ detail } : { detail: boolean; }) => {
  return (
    <Container>
      <Title>
        {detail? 'Transaction details' : 'Hint'}
      </Title>
      {!detail && (
        <Descripttion>
          Choose the amount you want to swap on your balance. You can check it on the top of the amount field that you want to swap :D
        </Descripttion>
      )}
      {detail && (
        <DetailWrapper>
          <DetailItemWrapper>
            <span>Liquidity Provider Fee</span><span>0.0000005 ETH</span>
          </DetailItemWrapper>
          <DetailItemWrapper>
            <span>Price Impact</span><span>0.00%</span>
          </DetailItemWrapper>
          <DetailItemWrapper>
            <span>Allowed Slippage</span><span>0.50%</span>
          </DetailItemWrapper>
          <DetailItemWrapper>
            <span>Minimum Received</span><span>99.98 AVAX</span>
          </DetailItemWrapper>
          <Divider />
          <DetailDescription>
            Output is estimated. you will receive at least 99.95 AVAX or the transaction will revert.
          </DetailDescription>
        </DetailWrapper>
      )}
    </Container>
  );
};

export default Details;