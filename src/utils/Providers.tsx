import styled, {ThemeProvider} from "styled-components";
import type {PropsWithChildren} from "react";
import {useAtomValue} from "jotai/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {themeAtom} from "../atoms/theme.ts";
import ThemeSwitch from "../ui/parts/ThemeSwitch.tsx";

const queryClient = new QueryClient();

const ThemeSwitchWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;

function Providers({children}: PropsWithChildren) {
  const theme = useAtomValue(themeAtom);

  return (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        </QueryClientProvider>
        <ThemeSwitchWrapper>
          <ThemeSwitch size={30}/>
        </ThemeSwitchWrapper>
      </ThemeProvider>
  );
}

export default Providers;