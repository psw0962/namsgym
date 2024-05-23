import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

const useScrollMove = dom => {
  const router = useRouter();
  const [scrollInfos, setScrollInfos] = useState(() =>
    localStorage.getItem('scroll_pos'),
  );
  const scrollTop = parseInt(scrollInfos, 10) || 0;

  const scrollMove = () => {
    if (!scrollInfos && scrollInfos !== 0) {
      return;
    }
    localStorage.removeItem('scroll_pos');
    setScrollInfos(localStorage.getItem('scroll_pos'));
    window.scrollTo(0, scrollTop);
  };

  const scrollOnceMove = useCallback(scrollMove, [scrollTop]);

  const scrollSave = () => {
    const scrollPos = dom ? dom.scrollTop : window.scrollY;
    localStorage.setItem('scroll_pos', scrollPos);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      scrollSave();
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return { scrollMove, scrollOnceMove, scrollSave };
};

export default useScrollMove;
