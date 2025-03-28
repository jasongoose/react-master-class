import styled, {ThemeProvider} from "styled-components";
import type {PropsWithChildren} from "react";
import {useAtomValue} from "jotai/react";
import {themeAtom} from "../atoms/theme.ts";
import ThemeSwitch from "../ui/parts/ThemeSwitch.tsx";

const ThemeSwitchWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;

function Providers({children}: PropsWithChildren) {
  const theme = useAtomValue(themeAtom);

  return (
      <ThemeProvider theme={theme}>
        {children}
        <ThemeSwitchWrapper>
          <ThemeSwitch size={30}/>
        </ThemeSwitchWrapper>
      </ThemeProvider>
  );
}

export default Providers;