import SubTitle from '@/components/sub-title';
import 'animate.css';
import styled from 'styled-components';
import CenterGallery from '@/components/center-gallery';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const HONOR_TRAINER_DATA_2024 = [
  '/images/hornor-trainer/1.png',
  '/images/hornor-trainer/2.png',
];

const HONOR_TRAINER_DATA_2025 = [
  '/images/hornor-trainer/3.png',
  '/images/hornor-trainer/4.png',
  '/images/hornor-trainer/5.png',
  '/images/hornor-trainer/6.png',
];

const Center = ({ honorTrainerData2024, honorTrainerData2025 }) => {
  const firework = () => {
    const duration = 15 * 100;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
    };

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3'],
      });

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#54a0ff', '#5f27cd', '#00d2d3', '#ff9ff3'],
      });

      confetti({
        ...defaults,
        particleCount: particleCount * 0.7,
        origin: { x: randomInRange(0.4, 0.6), y: Math.random() - 0.1 },
        colors: ['#feca57', '#ff6348', '#48dbfb', '#ff9ff3'],
      });
    }, 250);
  };

  const celebrationEffect = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FF6347', '#FF1493'],
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      firework();
    }, 800);

    const celebrationTimer = setTimeout(() => {
      celebrationEffect();
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(celebrationTimer);
    };
  }, []);

  return (
    <Frame>
      <SubTitle content="3000클럽 명예 트레이너" />
      <CenterGallery images={honorTrainerData2024} />

      <div style={{ marginTop: '3rem' }}></div>

      <CenterGallery images={honorTrainerData2025} />

      <SubTitle content="4000클럽 명예 트레이너" $margin="10rem 0 3rem 0" />
      <CommingSoon>곧 업데이트 됩니다.</CommingSoon>

      <SubTitle content="5000클럽 명예 트레이너" $margin="10rem 0 3rem 0" />
      <CommingSoon>곧 업데이트 됩니다.</CommingSoon>
    </Frame>
  );
};

export const getStaticProps = async () => {
  const honorTrainerData2024 = HONOR_TRAINER_DATA_2024;
  const honorTrainerData2025 = HONOR_TRAINER_DATA_2025;

  return {
    props: {
      honorTrainerData2024,
      honorTrainerData2025,
    },
  };
};

export default Center;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommingSoon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  border: 1px solid #ccc;
  padding: 5rem;
  border-radius: 10px;
`;
