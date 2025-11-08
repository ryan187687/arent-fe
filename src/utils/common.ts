import { redirect, RedirectType } from 'next/navigation';

export const nextRedirect = (url: string, type: RedirectType = RedirectType.push) => {
  redirect(url, type);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getQueryParams = (params: Record<string, any>): string => {
  const newParams = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(params).filter(([_, value]) => value !== undefined),
  );
  const requestParams = new URLSearchParams(newParams as Record<string, string>);
  return requestParams.toString();
};
