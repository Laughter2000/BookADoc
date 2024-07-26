'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box width="full" m={0} p={0} minH="100vh" height="full">
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
