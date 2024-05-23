import styled from 'styled-components';
import Font from '@/components/font';
import Button from '@/components/button';
import { useRouter } from 'next/router';
import ImageComponent from '@/components/image-component';

const Custom404 = () => {
  const router = useRouter();

  return (
    <Frame>
      <Font fontSize="2.7rem" fontWeight={700}>
        해당 페이지를 찾지 못했습니다.
      </Font>

      <Font
        fontSize="2rem"
        fontWeight={700}
        $margin="1.5rem 0 0 0"
        textAlign="center"
        lineHeight={1.4}
      >
        주소가 잘못 되었거나
        <br /> 더 이상 제공되지 않는 페이지입니다.
      </Font>

      <ImageComponent width={50} height={50} $src="/404.svg" $alt="404" />

      <ButtonWrapper>
        <CustomButton
          color="#fff"
          padding="2rem 3rem 2rem 3rem"
          backgroundColor="#B49445"
          onClick={() => router.push('/')}
        >
          메인 홈으로 이동
        </CustomButton>

        <CustomButton
          color="#fff"
          padding="2rem 3rem 2rem 3rem"
          backgroundColor="#000"
          onClick={() => router.back()}
        >
          이전 화면으로 이동
        </CustomButton>
      </ButtonWrapper>
    </Frame>
  );
};

export default Custom404;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
`;

const CustomButton = styled(Button)`
  width: 100%;
  color: #fff;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
  border: none;
`;
