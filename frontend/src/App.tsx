import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import '@/assets/fonts/index.css';
import Layout from '@/layout';
import Complete from '@/pages/Complete';
import Home from '@/pages/Home';
import GlobalStyle from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/complete" element={<Complete />} />
              </Route>
            </Routes>
          </Router>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
