import TopSection from '@/features/top';
import type { IHealthyRequest, IPageProps } from '@/types';

const TopPage: React.FC<IPageProps<IHealthyRequest>> = async ({ searchParams }) => {
  const queryParams = await searchParams;
  return <TopSection {...queryParams} />;
};

export default TopPage;
