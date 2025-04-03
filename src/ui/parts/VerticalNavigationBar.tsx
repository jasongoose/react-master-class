import styled from 'styled-components';
import NavBarMenu from '../pieces/NavBarMenu.tsx';

const NavBarMenuGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function VerticalNavBar() {
  return (
    <NavBarMenuGroup>
      <NavBarMenu targetPath="/" />
      <NavBarMenu targetPath="/coming-soon" />
      <NavBarMenu targetPath="/now-playing" />
    </NavBarMenuGroup>
  );
}

export default VerticalNavBar;
