import SubTitle from '@/components/sub-title';
import 'animate.css';
import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import CenterGallery from '@/components/center-gallery';

const HONOR_TRAINER_DATA_3000 = ['/images/hornor-trainer/1.png'];

const Center = () => {
  const router = useRouter();

  return (
    <Frame>
      <SubTitle content="3000클럽 명예 트레이너" />
      <CenterGallery images={HONOR_TRAINER_DATA_3000} />

      <SubTitle content="4000클럽 명예 트레이너" $margin="10rem 0 3rem 0" />
      <CommingSoon>곧 업에이트 됩니다.</CommingSoon>

      <SubTitle content="5000클럽 명예 트레이너" $margin="10rem 0 3rem 0" />
      <CommingSoon>곧 업에이트 됩니다.</CommingSoon>
    </Frame>
  );
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
