import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from "styled-components";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import App from './App.tsx'
import {theme} from "./theme.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={true}/>
      </QueryClientProvider>
    </StrictMode>,
)
