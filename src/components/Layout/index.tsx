import React from 'react';
import { ThemeProvider } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Logo from '@components/SVGs/logo';
import * as theme from '@identity/index';
import Nav from '@components/Nav';
import { LayoutContainer } from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <PerfectScrollbar>
        <LayoutContainer>
          <div>
            <Logo width={200} height={100} />
            <Nav />
          </div>
          {children}
        </LayoutContainer>
      </PerfectScrollbar>
    </ThemeProvider>
  );
};

export default Layout;
