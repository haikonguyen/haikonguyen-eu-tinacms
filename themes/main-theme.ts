import { createTheme, CustomThemeOptions } from '@mui/material/styles';
import { blue, yellow } from '@mui/material/colors';

const theme: CustomThemeOptions = createTheme({
  status: {
    danger: blue[500],
  },
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
});

export default theme;
