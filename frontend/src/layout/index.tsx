import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import { ContentsWrapper } from '@/styles/common';

const Layout = () => {
  return (
    <ContentsWrapper>
      <Header />
      <Outlet />
    </ContentsWrapper>
  );
};

export default Layout;
