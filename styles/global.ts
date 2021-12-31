import { css } from '@emotion/react';
import { useTheme } from '@mui/styles';
import { CustomTheme } from '@mui/material/styles';

const useGlobalStyle = () => {
  const theme: CustomTheme = useTheme();
  const { palette } = theme || {};

  return css`
    body {
      color: ${palette};
    }
  `;
};

export default useGlobalStyle;
