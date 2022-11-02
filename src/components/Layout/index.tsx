import React, { ReactNode } from 'react';
import Header from '../Header';
import * as Styled from './styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Styled.Layout>
      <Header />
      {children}
    </Styled.Layout>
  );
};

export default Layout;
