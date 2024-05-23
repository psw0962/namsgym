const shuffleArray = array => {
  let currentIndex = array.length,
    randomIndex;

  // 남은 요소가 없을 때까지 반복합니다.
  while (currentIndex != 0) {
    // 남은 요소 중에서 무작위 인덱스를 선택합니다.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 현재 요소와 무작위로 선택된 요소를 교환합니다.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default shuffleArray;
