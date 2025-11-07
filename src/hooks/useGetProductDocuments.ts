'use client';
import { useAtom, useSetAtom } from 'jotai';

import { useSendRequest } from '@/hooks';
import {
  isLoadingProductDocumentsAtom,
  paramsProductDocumentsRequestsAtom,
  productDocumentsAtom,
  productDocumentsPageAtom,
} from '@/store/productDocumentsAtom';
import { type IProductDocumentRequest } from '@/types';

const useGetProductDocuments = () => {
  const { sendRequest, requestLoading } = useSendRequest();
  const setProductDocuments = useSetAtom(productDocumentsAtom);
  const [paramRequest, setParamsRequest] = useAtom(paramsProductDocumentsRequestsAtom);
  const [productDocumentsPage, setProductDocumentsPage] = useAtom(productDocumentsPageAtom);
  const [isLoadingProductDocuments, setIsLoadingProductDocuments] = useAtom(
    isLoadingProductDocumentsAtom,
  );

  const handleClearSearch = () => {
    // setProductDocuments({});
    // setParamsRequest({
    //   q: '',
    //   filters: {},
    //   sort: '',
    //   order: APP_CONSTANTS.ORDER_BY.ASC,
    //   limit: APP_CONSTANTS.PAGE_SIZE,
    //   page: APP_CONSTANTS.FIRST_PAGE,
    //   document_type: '',
    //   product_code: '',
    // });
  };

  const handleGetProductDocuments = async (
    productCode: string,
    params: IProductDocumentRequest,
    callback?: () => void,
  ) => {
    // setIsLoadingProductDocuments(true);
    // handleClearSearch();
    // const jsonParams = {
    //   ...params,
    //   filters: params?.filters ? JSON.stringify(params.filters) : '{}',
    // };
    // sendRequest({
    //   apiRequest: getProductDocumentsRequest(productCode, jsonParams),
    //   onSuccess: (res) => {
    //     setProductDocuments(res.data);
    //     const response = res as AxiosResponse<IResponseStructure<IProductDocumentsResponse>> & {
    //       total_pages?: number;
    //       total_items?: number;
    //     };
    //     setProductDocumentsPage({
    //       total_items: response.total_items,
    //       total_pages: response.total_pages,
    //     });
    //     setParamsRequest(params);
    //   },
    //   onError: () => {
    //     setParamsRequest(params);
    //   },
    //   onFinally: () => {
    //     setTimeout(() => {
    //       setIsLoadingProductDocuments(false);
    //     }, 1000);
    //     if (callback) {
    //       callback();
    //     }
    //   },
    // });
  };

  const handleChangePage = async (page: number) => {
    // const paramsRequestApi = { ...paramRequest, page: page };
    // await handleGetProductDocuments(paramRequest.product_code || '', paramsRequestApi);
  };

  const handleShowPagination = () => {
    const shouldShow =
      !!productDocumentsPage &&
      !!productDocumentsPage.total_items &&
      !!productDocumentsPage.total_pages &&
      productDocumentsPage.total_items < productDocumentsPage.total_pages;
    return shouldShow;
  };

  return {
    handleGetProductDocuments,
    requestLoading,
    handleChangePage,
    handleShowPagination,
    isLoadingProductDocuments,
  };
};

export default useGetProductDocuments;
