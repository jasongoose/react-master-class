import { NavLink } from 'react-router';
import styled from 'styled-components';
import { RedMarker } from './RedMarker.tsx';

type Props = {
  targetPath: string;
};

const pathToMenuTextMap: Record<string, string> = {
  '/': 'Popular',
  '/coming-soon': 'Coming Soon',
  '/now-playing': 'Now Playing'
};

const SingleMenu = styled.li<{ $isActive: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  a {
    text-decoration: none;
  }
`;

const MenuText = styled.span<{ $isActive: boolean }>`
  font-size: 40px;
  color: ${(props) => props.theme.contrast};

  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

function NavBarMenu({ targetPath }: Props) {
  return (
    <NavLink to={targetPath}>
      {({ isActive }) => (
        <SingleMenu $isActive={isActive}>
          <MenuText $isActive={isActive}>
            {pathToMenuTextMap[targetPath]}
          </MenuText>
          {isActive ? <RedMarker layoutId="red-markeer" /> : null}
        </SingleMenu>
      )}
    </NavLink>
  );
}

export default NavBarMenu;
