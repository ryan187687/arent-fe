import MyRecordSection from '@/features/my-record';
import type { IPageProps, IRequest } from '@/types';

const MyRecordPage: React.FC<IPageProps<IRequest>> = async ({ searchParams }) => {
  const queryParams = await searchParams;
  return <MyRecordSection {...queryParams} />;
};

export default MyRecordPage;
