import { ThemeProvider } from 'styled-components';
import type { PropsWithChildren } from 'react';
import { useAtomValue } from 'jotai/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { themeAtom } from '../atoms/theme.ts';
import GlobalStyle from './GlobalStyle.tsx';
import { ThemeSwitchWrapper } from '../ui/pieces/ThemeSwitchWrapper.tsx';
import ThemeSwitch from '../ui/parts/ThemeSwitch.tsx';

const queryClient = new QueryClient();

function Providers({ children }: PropsWithChildren) {
  const theme = useAtomValue(themeAtom);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        {children}
        <ThemeSwitchWrapper>
          <ThemeSwitch size={30} />
        </ThemeSwitchWrapper>
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default Providers;
