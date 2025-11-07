import { PrimaryButton } from '@/components/atoms/Buttons';
import { ChartWrapper } from '@/components/atoms/Chart';
import { Container } from '@/components/atoms/Container';
import { Image } from '@/components/atoms/Image';
import { HealthyFilters } from '@/components/organisms/HealthyFilters';
import { HealthyList } from '@/components/organisms/HealthyList';

const TopSection: React.FC = () => {
  return (
    <>
      <div className="flex">
        <div className="w-[40%] h-[316px]">
          <Image
            src="/assets/images/top/main_photo.png"
            alt="main photo"
            width={540}
            height={316}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[60%]">
          <ChartWrapper />
        </div>
      </div>
      <Container>
        <HealthyFilters />
        <HealthyList />
        <PrimaryButton className="mt-[28px] mx-auto">記録をもっと見る</PrimaryButton>
      </Container>
    </>
  );
};

export default TopSection;
