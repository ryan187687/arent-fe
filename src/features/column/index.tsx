import { Container } from '@/components/atoms/Container';
import type { IRequest } from '@/types';

import { ColumnList } from './components/ColumnList';
import { LoadMoreBtn } from './components/LoadMoreBtn';
import { RecommendedList } from './components/RecommendedList';

const ColumnSection: React.FC<IRequest> = (props) => {
  return (
    <Container>
      <RecommendedList />
      <ColumnList {...props} />
      <LoadMoreBtn {...props} />
    </Container>
  );
};

export default ColumnSection;
