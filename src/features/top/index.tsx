import { Container } from '@/components/atoms/Container';
import type { IHealthyRequest } from '@/types';

import { HealthyChart } from './components/HealthyChart';
import { HealthyFilters } from './components/HealthyFilters';
import { HealthyList } from './components/HealthyList';
import { LoadMoreBtn } from './components/LoadMoreBtn';

const TopSection: React.FC<IHealthyRequest> = (props) => {
  return (
    <>
      <HealthyChart />
      <Container>
        <HealthyFilters />
        <HealthyList {...props} />
        <LoadMoreBtn {...props} />
      </Container>
    </>
  );
};

export default TopSection;
