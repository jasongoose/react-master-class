import styled from "styled-components";
import {motion} from "motion/react";

type Props = {
  isOn: boolean;
  onText: string;
  offText: string;
  handleToggleChipClick: () => void;
}

const ToggleContainer = styled.div<{ $isOn: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: ${(props) => props.$isOn ? "flex-start" : "flex-end"};
  outline: 1px solid ${(props) => props.theme.contrast};
  background-color: ${(props) => props.theme.contrast};
`;

const ToggleChip = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.main};
  border-collapse: collapse;
  cursor: pointer;
`;

const ToggleChipText = styled.span`
  font-size: 30px;
  color: ${(props) => props.theme.contrast};
`;

function ToggleSlider({isOn, onText, offText, handleToggleChipClick}: Props) {
  return (
      <ToggleContainer $isOn={isOn}>
        <ToggleChip layout onClick={handleToggleChipClick}>
          <ToggleChipText>
            {isOn ? offText : onText}
          </ToggleChipText>
        </ToggleChip>
      </ToggleContainer>
  )
}

export default ToggleSlider;