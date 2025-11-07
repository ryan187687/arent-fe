import { useAtom } from 'jotai';

import { mockRequestTargetProductList } from '@/features/documents/mock/data';
import { useModal, useSendRequest } from '@/hooks';
import { selectedDocumentAtom, targetProductListAtom } from '@/store/documentsAtom';
import { EnumModal, type IDocument, type ITargetProductListRequest } from '@/types';

const useGetTargetProductList = () => {
  // Hooks
  const { sendRequest } = useSendRequest();
  const { toggleModal } = useModal();

  // State global
  const [targetProductList, setTargetProductList] = useAtom(targetProductListAtom);
  const [selectedDocument, setSelectedDocument] = useAtom(selectedDocumentAtom);

  // Handler get documents
  const handleGetTargetProductList = async (document: IDocument) => {
    setSelectedDocument(document);
    const params: ITargetProductListRequest = {
      document_code: document.code,
    };
    console.log('🚀 ~ handleGetTargetProductList ~ params:', params);

    // TODO: Remove mockdata and uncomment the request
    await new Promise((resolve) => setTimeout(resolve, 400));
    setTargetProductList(mockRequestTargetProductList.data);
    toggleModal(EnumModal.TARGET_PRODUCT_LIST, true);
    // sendRequest({
    //   apiRequest: getTargetProductListRequest(params),
    //   onSuccess: (res) => {
    //     console.log('🚀 ~ handleGetTargetProductList ~ res:', res);
    //   },
    //   onError: () => {},
    //   onFinally: () => {
    //     setTargetProductList(mockRequestTargetProductList.data);
    //   },
    // });
  };

  return {
    handleGetTargetProductList,
    targetProductList,
    selectedDocument,
    setSelectedDocument,
  };
};

export default useGetTargetProductList;
