export interface IResponseCommon<T> {
  status: string;
  message: string;
  data: T;
  meta: {
    total_pages?: number;
    total_items?: number;
    page?: number;
  };
}
