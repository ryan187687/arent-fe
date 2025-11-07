'use client';

import { TopIcon } from '@/components/atoms/Icons';
import { APP_CONSTANTS } from '@/config/constants';
import { throttle } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

const ToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: APP_CONSTANTS.SCROLL_2_TOP.HEAD, behavior: 'smooth' });
  };

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > APP_CONSTANTS.SCROLL_2_TOP.POSITION_Y_OFFSET);
  }, []);

  const throttledHandleScroll = throttle(handleScroll, APP_CONSTANTS.SCROLL_2_TOP.THROTTLE_DELAY);

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [throttledHandleScroll]);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="h-[48px] w-[48px] fixed bottom-[20dvh] right-[90px] rounded-full bg-white"
      onClick={handleScrollToTop}
    >
      <TopIcon />
    </button>
  );
};

export default ToTop;
