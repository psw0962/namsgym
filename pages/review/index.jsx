import Image from 'next/image';
import styled from 'styled-components';
import { reviewData } from '@/constant/review';
import SubTitle from '@/components/sub-title';

const Review = () => {
  return (
    <Frame>
      <SubTitle content="비포&애프터" />

      <ReviewGrid>
        {reviewData.map(review => (
          <ReviewCard key={review.id}>
            <ImageWrapper>
              <Image
                src={review.images[0]}
                alt={review.title}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ImageWrapper>
            <ContentWrapper>
              <HeaderWrapper>
                <CardTitle>{review.title}</CardTitle>
                <TagBadge>{review.tag}</TagBadge>
              </HeaderWrapper>

              <CenterText>{review.center}</CenterText>
              <TrainerText>{review.trainer}</TrainerText>
              <ReviewText>{review.clientReview}</ReviewText>
            </ContentWrapper>
          </ReviewCard>
        ))}
      </ReviewGrid>
    </Frame>
  );
};

export default Review;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ReviewCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: white;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const ContentWrapper = styled.div`
  padding: 1rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 1.1rem;
`;

const TagBadge = styled.span`
  background-color: #f3f4f6;
  color: #4b5563;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
`;

const CenterText = styled.p`
  color: #000;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const TrainerText = styled.p`
  color: #6b7280;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const ReviewText = styled.p`
  font-size: 1.4rem;
  margin-top: 0.5rem;
  line-height: 1.2;
`;
