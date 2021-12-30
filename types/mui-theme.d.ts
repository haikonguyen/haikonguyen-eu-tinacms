import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    // we can add additional props to the CustomTheme below
    status: {
      danger: string;
    };
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    /* each prop we add in the CustomTheme must be created in the options below
    as well */
    status?: {
      danger?: string;
    };
    palette: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
  }
  // override default createTheme function with custom theme configuration
  // eslint-disable-next-line no-unused-vars
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
