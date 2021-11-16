import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1F6DC9',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#D94B62',
    },
    action: {
      disabled: '#525F7B',
      disabledBackground: '#B3BCD0'
    }
  },
  typography: {
    fontFamily: 'Konnect'
  }
});

export default theme;
