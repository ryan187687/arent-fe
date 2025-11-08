import { PrimaryButton } from '@/components/atoms/Buttons';
import { Container } from '@/components/atoms/Container';

import { ColumnList } from './components/ColumnList';
import { RecommendedList } from './components/RecommendedList';

const ColumnSection: React.FC = () => {
  return (
    <Container>
      <RecommendedList />
      <ColumnList />
      <PrimaryButton className="mt-[28px] mx-auto">コラムをもっと見る</PrimaryButton>
    </Container>
  );
};

export default ColumnSection;
