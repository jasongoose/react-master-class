import {useAtom} from "jotai";
import styled from "styled-components";
import {themeIndexAtom} from "../../atoms/theme.ts";
import IconSunOutlined from "./icon/IconSunOutlined.tsx";
import IconMoonFilled from "./icon/IconMoonFilled.tsx";

type Props = {
  size: number;
}

const ThemeSwitchContainer = styled.div<{ $size: number }>`
  width: ${(props) => props.$size + 'px'};
  height: ${(props) => props.$size + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

function ThemeSwitch(props: Props) {
  const [themeIndex, setThemeIndex] = useAtom(themeIndexAtom);

  const handleContainerClick = () => {
    setThemeIndex(1 - themeIndex);
  }

  return (
      <ThemeSwitchContainer $size={props.size + 30} onClick={handleContainerClick}>
        {themeIndex ? <IconSunOutlined size={props.size}/> : <IconMoonFilled size={props.size}/>}
      </ThemeSwitchContainer>
  )
}

export default ThemeSwitch;