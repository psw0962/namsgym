import { useState, useCallback, useEffect } from 'react';

const useDrag = () => {
  const [isDrag, setIsDrag] = useState(false);

  const handleMouseDown = useCallback(() => {
    setIsDrag(false);
  }, []);

  const handleMouseMove = useCallback(() => {
    setIsDrag(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!isDrag) {
      // 클릭 이벤트
      setIsDrag(false);
    }
  }, [isDrag]);

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return isDrag;
};

export default useDrag;
