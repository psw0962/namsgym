import { useState, useEffect, useCallback } from 'react';

const useScrollEvent = () => {
  const [scrollEventState, setScrollEventState] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldShowNavbar = scrollTop > 100; // 100px 이상 스크롤 시

    setScrollEventState(prev => {
      // 상태가 실제로 변경될 때만 업데이트
      if (prev !== shouldShowNavbar) {
        return shouldShowNavbar;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    // 스로틀링을 위한 변수
    let ticking = false;

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [handleScroll]);

  return { $scrollEventState: scrollEventState };
};

export default useScrollEvent;
