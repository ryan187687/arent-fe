'use client';

import { PrimaryButton } from '@/components/atoms/Buttons';
import { APP_CONSTANTS, APP_PAGES } from '@/config';
import type { IRequest } from '@/types';
import { getQueryParams, nextRedirect } from '@/utils';

const LoadMoreBtn: React.FC<IRequest> = (props) => {
  const handleClick = () => {
    const queryParams = getQueryParams({
      ...props,
      limit: Number(props.limit || APP_CONSTANTS.LIMIT_PER_PAGE) + APP_CONSTANTS.LIMIT_PER_PAGE,
    });
    nextRedirect(`${APP_PAGES.MY_RECORD}?${queryParams}`);
  };
  return (
    <PrimaryButton className="mt-[28px] mx-auto" onClick={handleClick}>
      自分の日記をもっと見る
    </PrimaryButton>
  );
};

export default LoadMoreBtn;
