import { isEmpty } from 'lodash';

export const isEmptyLodash = (value: any) => {
  return isEmpty(value);
};

export const isNotEmptyLodash = (value: any) => {
  return !isEmpty(value);
};
