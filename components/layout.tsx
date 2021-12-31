import Footer from './footer';
import Meta from './meta';
import { ReactNode } from 'react';
import { Global } from '@emotion/react';
import useGlobalStyle from '@styles/global';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Global styles={useGlobalStyle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
