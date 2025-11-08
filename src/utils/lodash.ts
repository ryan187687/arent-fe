import { isEmpty } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEmptyLodash = (value: any) => {
  return isEmpty(value);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNotEmptyLodash = (value: any) => {
  return !isEmpty(value);
};
