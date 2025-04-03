import { NavLink } from 'react-router';
import styled from 'styled-components';
import { motion } from 'motion/react';

type Props = {
  targetPath: string;
};

const pathToMenuTextMap: Record<string, string> = {
  '/': 'Popular',
  '/coming-soon': 'Coming Soon',
  '/now-playing': 'Now Playing'
};

const SingleMenu = styled.li`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.contrast};
  }
`;

const MenuText = styled(motion.span)<{ $isActive: boolean }>`
  font-size: ${(props) => (props.$isActive ? '60px' : '30px')};

  &:hover {
    color: red;
    text-decoration: underline;
  }
`;

function NavBarMenu({ targetPath }: Props) {
  return (
    <SingleMenu>
      <NavLink to={targetPath}>
        {({ isActive }) => (
          <MenuText $isActive={isActive}>
            {pathToMenuTextMap[targetPath]}
          </MenuText>
        )}
      </NavLink>
    </SingleMenu>
  );
}

export default NavBarMenu;
