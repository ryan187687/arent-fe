import { PrimaryButton } from '@/components/atoms/Buttons';
import { Container } from '@/components/atoms/Container';

import { HealthyChart } from './components/HealthyChart';
import { HealthyFilters } from './components/HealthyFilters';
import { HealthyList } from './components/HealthyList';

const TopSection: React.FC = () => {
  return (
    <>
      <HealthyChart />
      <Container>
        <HealthyFilters />
        <HealthyList />
        <PrimaryButton className="mt-[28px] mx-auto">記録をもっと見る</PrimaryButton>
      </Container>
    </>
  );
};

export default TopSection;
