import Pre from './pre';
import styled from 'styled-components';

const REVIEWS = [
  {
    id: 1,
    content:
      '제대로 된 다이어트를 하기위해 살면서 처음으로 헬스장을 등록했는데 막상 운동을 할 줄 몰라 버벅이던 차에 한재훈 팀장님을 만났습니다. 팀장님께서 열심히 알려주신 덕분에 다이어트 성공 후 바디프로필까지 찍게 되었습니다. 운동을 아예 할 줄 모르는 저에게 수준에 맞는 운동을 통해 점진적으로 더 좋아질 수 있도록 항상 케어해주셨고 식단도 세세하게 다 알려주셔서 좀 더 체계적으로 다이어트를 할 수 있었던 것 같습니다. 포기하고 싶은 마음이 들때마다 옆에서 항상 힘찬 응원과 동기 부여를 팍팍 넣어주셔서 다이어트 성공하게 해주신 한재훈 팀장님 감사합니다!!',
    name: '홍XX 회원님',
    center: '남스짐 은행점',
  },
  {
    id: 2,
    content:
      '연수쌤이랑 피티를 시작하고서 운동의 재미를 알게 됐어요!! 헬스장에 가면 웨이트는 어렵고 기구 쓰기도 어려워서 러닝머신만 타고 왔는데 이제는 근력운동이 더 재밌네요 ㅎㅎㅎ 운동하는법 꼼꼼히 알려주시고 자극점 찾을 수 있게 잘 도와주세요💗 그리고 체형까지 꼼꼼히 봐주셔서 비대칭도 교정하고 예쁜 몸 만들기 쌉가능💪 완전 저한테 맞춤형으로 케어해주시니까 운동도 재밌고 변화도 보여서 너무 좋아요 강추입니다!!!!',
    name: '혜XX 회원님',
    center: '남스짐 범박점',
  },
  {
    id: 3,
    content:
      '남스짐 오류점에서 김도연 선생님과 함께 운동을 한지 30회가 되어갑니다. 김도연 선생님 덕분에 허리디스크가 있었는데 많이 좋아지고 자세도 많이 좋아졌어요. 다이어트는 당연히 많이되고 전반적으로 몸의 균형이 잡혀가는 재미에 20회 추가로 수업 결정했습니다! 친구도 50회 가까이 김도연선생님께 수업들었는데 너무좋다고 극찬해서 시작해봤는데 왜 이제서야 시작했는지ㅠㅠ 제 몸 상태에맞게 전문적이고 체계적으로 수업진행해주시고, 항상 유쾌하셔서 김도연선생님과 운동하는시간이 기다려집니다!!',
    name: 'fltXX 회원님',
    center: '남스짐 오류점',
  },
  {
    id: 4,
    content:
      '우선 저는 헬스장을 두달이상 다니지 못하는 의지가 부족한 사람중 하나입니다 이번에 남스짐에서 이재정 팀장님께 피티 50회가량 수업 신청 해봤습니다 물론 첫달 20회 정도 시작했고 저와의 소통이나 맞춰주시는 운동 진행 하는 것 들이 마음에 들어 피티 30회 추가연장 하게 되었습니다 현재도 수업에 만족하며 열심히 팀장님과 같이 운동하는 중입니다 과체중이어서 살이 금방 빠지기도 하겠지만 체계적인 운동법과 안정성을 잘 알려주신 덕분에 딱 두달만에 25kg정도 감량에 성공했습니다 다른 헬스장에서도 피티도 해보고 운동도 해봤지만 무언가 맘에 들지 않아 금방 포기하고 했었는데 이번엔 팀장님도 잘 도와주시고 감량도 잘 되서 남스짐에서 할 수 있을 때까지 해보려고 합니다 다른 선생님들도 친절하십니다!!! 운동하러 오세요~~~',
    name: '로XX 회원님',
    center: '남스짐 월곶점',
  },
  {
    id: 5,
    content:
      '살이 너무 많이 찌고 이건 안되겠다 싶어서 남스짐에 등록하게 되었습니다! 처음 헬스를 끊으면 일일 PT를 잡아주시는데 그 때 자세 교정이나 다이어트의 필요성을 정말 많이 느꼈습니다! 그래서 현재 3월부터 지금까지 계속 PT를 받고 있고, 사진은 제 몸의 전 후 사진입니다!! 살도 많이 빠졌지만 자세 교정이 정말 잘되었습니다!! 허리가 많이 안좋았었는데 운동 하고 허리도 하나도 안아파요! 주변에서 몸 예뻐졌다는 말도 많이 해주고 운동 전 후로 몸에 대한 자신감이 달라졌습니다! 생리 전후로 케어도 해주시고 정말 매 수업이 너무 감사하고 소중합니다❤️ PT는 “윤재욱 트레이너님”께 꼭! 받으세요!! 올해 제가 제일 잘 쓴 돈이 pt 이지 않을까 싶습니다.. 내 몸에 투자 꼭 해보세요!!!💕💕😍',
    name: '진XX 회원님',
    center: '남스짐 월곶점',
  },
  {
    id: 6,
    content:
      '살이 많이 찌고 몸이 많이 안 좋아져서 이곳 저곳 검색해보고 남스짐 찬미쌤에게 찾아갔습니다!! 찬미쌤과 9개월 동안 함께 했는데 체형 교정도 많이 되고 15kg 감량이라는 쾌거를 이뤘습니다💪 무엇보다 너무나도 열정적이시고 세심하게 1:1 케어를 해주셔서 많은 효과를 보고 저도 열정적으로 임할 수 있었던 거 같아요! 덕분에 운동 루틴도 생기고 식단도 많이 잡혀서 많이 건강해진 삶을 살게될 거 같습니다 ㅎㅎ 뿐만 아니라 쌤과 대화 코드도 잘 맞아서 피티때마다 운동하면서 재밌게 놀고온 기분이에요😉 이후에 또 피티를 하게 된다면 무조건 찬미쌤에게 오게 될 거 같습니다. 능곡에서는 남스짐이 기구도 많고, 넓고 쾌적하고, 트레이너 쌤들도 친절하고 전문적이셔서 최고인 거 같아요~ 추천합니다!',
    name: '똑XX 회원님',
    center: '남스짐 능곡점',
  },
];

const Reviews = () => {
  return (
    <Frame>
      <Pre
        $fontSize="2.6rem"
        $fontWeight={700}
        $lineHeight={1.3}
        $textAlign="center"
      >
        {`네이버 리얼 후기가 증명하는 수 많은 경험 사례`}
      </Pre>

      <Pre
        $fontSize="2rem"
        $fontWeight={700}
        $lineHeight={1.3}
        $textAlign="center"
        $textDecoration="underline"
        $cursor="pointer"
        color="#D6B86B"
        onClick={() =>
          window.open(
            'https://map.naver.com/p/search/%EB%82%A8%EC%8A%A4%EC%A7%90/place/1890409909?c=15.00,0,0,0,dh&placePath=/review',
          )
        }
      >
        {`네이버 리얼 후기 더 보기 👉`}
      </Pre>

      <CardFrame>
        {REVIEWS.map(x => {
          return (
            <Card key={x.id}>
              <Pre $fontSize="1.4rem" $fontWeight={700} $lineHeight={1.3}>
                {`"${x.content}"`}
              </Pre>

              <div>
                <Pre
                  $fontSize="1.4rem"
                  $fontWeight={700}
                  $lineHeight={1.3}
                  $margin="2rem 0 0 0"
                >
                  {`${x.name}`}
                </Pre>

                <Pre
                  $fontSize="1.2rem"
                  $color="#cccccc"
                  $fontWeight={700}
                  $lineHeight={1.3}
                >
                  {`${x.center}`}
                </Pre>
              </div>
            </Card>
          );
        })}
      </CardFrame>
    </Frame>
  );
};

export default Reviews;

const Frame = styled.div`
  margin-top: 13rem;
`;

const CardFrame = styled.div`
  margin-top: 5rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem;
  border-radius: 10px;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
