import { PrimaryButton } from '@/components/atoms/Buttons';
import { Container } from '@/components/atoms/Container';
import { BodyRecord } from './components/BodyRecord';
import { DiaryList } from './components/DiaryList';
import { MyExercise } from './components/MyExercise';
import { RecordCategoryList } from './components/RecordCategoryList';
const MyRecordSection: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col gap-14 pt-14">
        <RecordCategoryList />
        <BodyRecord />
        <MyExercise />
        <DiaryList />
      </div>
      <PrimaryButton className="mt-[28px] mx-auto">自分の日記をもっと見る</PrimaryButton>
    </Container>
  );
};

export default MyRecordSection;
