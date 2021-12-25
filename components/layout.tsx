import Footer from './footer';
import Meta from './meta';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
