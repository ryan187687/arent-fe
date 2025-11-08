import ColumnSection from '@/features/column';
import type { IPageProps, IRequest } from '@/types';

const ColumnPage: React.FC<IPageProps<IRequest>> = async ({ searchParams }) => {
  const queryParams = await searchParams;
  return <ColumnSection {...queryParams} />;
};

export default ColumnPage;
