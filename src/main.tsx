import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";

const darkTheme = {
  textColor: 'whiteSmoke',
  backgroundColor: '#111',
}

const lightTheme = {
  textColor: '#111',
  backgroundColor: 'whiteSmoke',
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={darkTheme}>
        <App/>
      </ThemeProvider>
    </StrictMode>,
)
