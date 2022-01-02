import { blue, yellow } from '@mui/material/colors';
import { CustomThemeOptions } from '@mui/material/styles';
import useStore from '../zustand/store';

export const useThemeOptions = (): CustomThemeOptions => {
  const { paletteMode } = useStore();
  return {
    status: {
      danger: paletteMode === 'dark' ? blue[500] : 'red',
    },
    palette: {
      primary: {
        main: blue[500],
      },
      secondary: {
        main: yellow[500],
      },
    },
  };
};
