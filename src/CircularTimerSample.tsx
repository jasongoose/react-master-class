import {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components';

// 원형 프로그레스 바 애니메이션 키프레임
const progressAnimation = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 283; // 전체 원의 둘레
  }
`;

// 타이머 컨테이너 스타일
const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  position: relative;
`;

// SVG 원형 프로그레스 바 스타일
const ProgressCircle = styled.svg`
  position: absolute;
  width: 250px;
  height: 250px;
  transform: rotate(-90deg);
`;

// 시간 표시 스타일
const TimeDisplay = styled.div`
  position: absolute;
  font-size: 48px;
  font-weight: bold;
  color: #333;
  z-index: 10;
`;

// 원형 프로그레스 바 구현
const CircularProgress = styled.circle.attrs({
  cx: 125,
  cy: 125,
  r: 45,
})<{ $progress: number }>`
  fill: none;
  stroke: #4caf50;
  stroke-width: 10;
  stroke-dasharray: 283;
  stroke-dashoffset: ${props => props.$progress};
  animation: ${progressAnimation} 60s linear;
`;

function CircularTimerSample() {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prev => prev - 1);
        setProgress(prev => prev + (283 / (3 * 60))); // 283은 원의 둘레, 3분 * 60초
      } else if (minutes > 0) {
        setMinutes(prev => prev - 1);
        setSeconds(59);
        setProgress(prev => prev + (283 / (3 * 60)));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  // 시간을 두 자리 숫자로 포맷팅
  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
      <TimerContainer>
        <ProgressCircle>
          <CircularProgress
              $progress={progress}
              strokeLinecap="round"
          />
        </ProgressCircle>
        <TimeDisplay>
          {formatTime(minutes)}:{formatTime(seconds)}
        </TimeDisplay>
      </TimerContainer>
  );
}

export default CircularTimerSample;