import { useState, useEffect } from 'react';

const useScrollEvent = () => {
  const [getUserHeight, setGetUserHeight] = useState(0);
  const [scrollEventState, setScrollEventState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (getUserHeight >= 0) {
        setScrollEventState(st > getUserHeight);
      }
    };

    const updateHeight = () => {
      setGetUserHeight(window.pageYOffset);
    };

    // 초기 실행
    updateHeight();

    // 이벤트 리스너 등록
    window.addEventListener('scroll', updateHeight);
    window.addEventListener('scroll', handleScroll);

    // 클린업 함수
    return () => {
      window.removeEventListener('scroll', updateHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [getUserHeight]);

  return { scrollEventState };
};

export default useScrollEvent;
