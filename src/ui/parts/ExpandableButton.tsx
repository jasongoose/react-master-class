import styled from 'styled-components';
import {PropsWithChildren, ReactNode, useState} from "react";

type Props = {
  fontSize: number;
  maxWidth: number;
  buttonText: string;
  icon: ReactNode;
}

const ExpandableButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
  border: none;
`;

const ExpandableButtonTextWrapper = styled.div<{ $isContainerHovered: boolean }>`
  max-width: ${(props) => props.$isContainerHovered ? '400px' : 0};
  opacity: ${(props) => (props.$isContainerHovered ? 1 : 0)};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
`;

const ExpandableButtonText = styled.span<{ $fontSize: number }>`
  margin-left: 4px;
  font-size: ${(props) => props.$fontSize + 'px'};
  color: ${(props) => props.theme.textColor};
`;

function ExpandableButton(props: PropsWithChildren<Props>) {
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const handleContainerMouseEnter = () => {
    setIsContainerHovered(true);
  }

  const handleContainerMouseLeave = () => {
    setIsContainerHovered(false);
  }

  return (
      <ExpandableButtonContainer onMouseEnter={handleContainerMouseEnter} onMouseLeave={handleContainerMouseLeave}>
        {props.icon}
        <ExpandableButtonTextWrapper $isContainerHovered={isContainerHovered}>
          <ExpandableButtonText $fontSize={props.fontSize}>{props.buttonText}</ExpandableButtonText>
        </ExpandableButtonTextWrapper>
      </ExpandableButtonContainer>
  );
}

export default ExpandableButton;