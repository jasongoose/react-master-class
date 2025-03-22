import {ThemeProvider} from "styled-components";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {PropsWithChildren} from "react";
import {useAtomValue} from "jotai/react";
import {themeAtom} from "./atoms.ts";

const queryClient = new QueryClient();

function Provider({children}: PropsWithChildren) {
  const theme = useAtomValue(themeAtom);

  return (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        </QueryClientProvider>
      </ThemeProvider>
  );
}

export default Provider;