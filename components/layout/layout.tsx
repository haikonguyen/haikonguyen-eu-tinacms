import Footer from '../footer';
import Meta from '../meta';
import { Global } from '@emotion/react';
import useGlobalStyle from '@styles/global';
import { LayoutProps } from '@components/layout/types';
import NavBar from '@components/navbar/navbar';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Global styles={useGlobalStyle} />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
