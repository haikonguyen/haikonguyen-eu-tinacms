import { createTheme, CustomTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme: CustomTheme = createTheme({
  status: {
    danger: purple[500],
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default theme;
