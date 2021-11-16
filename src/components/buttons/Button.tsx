import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CommonButton = styled(Button)`
  display: flex;
  font-size: 20px;
  line-height: 140%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  border-radius: 0px;
  color: #FFFFFF;
  box-shadow: none;
  @media (max-width: ${p => p.theme.breakpoints.values.md}px) {
    font-size: 18px;
    line-height: 160%;
  }
`;

export default CommonButton;