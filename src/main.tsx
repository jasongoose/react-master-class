import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from "./utils/GlobalStyle.tsx";
import Providers from "./utils/Providers.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <GlobalStyle/>
      <Providers>
        <App/>
      </Providers>
    </StrictMode>,
)
