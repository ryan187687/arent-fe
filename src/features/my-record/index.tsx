import { Container } from '@/components/atoms/Container';
import type { IRequest } from '@/types';

import { BodyRecord } from './components/BodyRecord';
import { DiaryList } from './components/DiaryList';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { MyExercise } from './components/MyExercise';
import { RecordCategoryList } from './components/RecordCategoryList';
const MyRecordSection: React.FC<IRequest> = (props) => {
  return (
    <Container>
      <div className="flex flex-col gap-8 lg:gap-14 pt-8 lg:pt-14">
        <RecordCategoryList />
        <BodyRecord />
        <MyExercise />
        <DiaryList {...props} />
      </div>
      <LoadMoreBtn {...props} />
    </Container>
  );
};

export default MyRecordSection;
