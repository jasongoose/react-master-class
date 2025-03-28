import styled from "styled-components";

type Props = {
  currentGauge: number;
  totalGauge: number;
}

const BatteryContainer = styled.div<{ $totalGauge: number; }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$totalGauge}, 1fr)`};
  gap: 5px;
  padding: 5px;
  outline: 1px solid ${(props) => props.theme.contrast};
`;

const BatterySegment = styled.div<{ $isFilled: boolean }>`
  height: 30px;
  background-color: ${(props) => props.$isFilled ? 'green' : 'transparent'};
  outline: 1px dashed ${(props) => props.$isFilled ? 'none' : 'green'};
`;

function Battery({currentGauge, totalGauge}: Props) {
  const gaugeArr = Array.from(Array(totalGauge), (_, i) => i + 1);

  return (
      <BatteryContainer $totalGauge={totalGauge}>
        {gaugeArr.map((gaugeNumber) => (
            <BatterySegment key={gaugeNumber} $isFilled={gaugeNumber <= currentGauge}/>
        ))}
      </BatteryContainer>
  )
}

export default Battery;