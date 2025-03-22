import styled from 'styled-components';
import {useState} from "react";
import LeftArrowIcon from "./LeftArrowIcon.tsx";

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
  border: none;
`;

const BackButtonTextWrapper = styled.div<{ isContainerHovered: boolean }>`
  max-width: ${(props) => props.isContainerHovered ? '400px' : 0};
  opacity: ${(props) => (props.isContainerHovered ? 1 : 0)};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
`;

const BackButtonText = styled.span`
  margin-left: 4px;
  font-size: 40px;
  color: ${(props) => props.theme.textColor};
`;

const BackButton = () => {
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const handleContainerMouseEnter = () => {
    setIsContainerHovered(true);
  }

  const handleContainerMouseLeave = () => {
    setIsContainerHovered(false);
  }

  return (
      <BackButtonContainer onMouseEnter={handleContainerMouseEnter} onMouseLeave={handleContainerMouseLeave}>
        <LeftArrowIcon size={40}/>
        <BackButtonTextWrapper isContainerHovered={isContainerHovered}>
          <BackButtonText>Back to home</BackButtonText>
        </BackButtonTextWrapper>
      </BackButtonContainer>
  );
};

export default BackButton;