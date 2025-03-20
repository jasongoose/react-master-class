import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {ThemeProvider} from "styled-components";
import App from './App.tsx'
import {darkTheme} from "./my-theme.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={darkTheme}>
        <QueryClientProvider client={queryClient}>
          <App/>
          <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>,
)
