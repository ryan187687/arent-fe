import { HealthyDTO, HealthyEntity } from '@/models';
import { getHealthyRequest } from '@/requests';
import { requestServer } from '@/services/requestServer';
import { isEmptyLodash } from '@/utils';
import { mapHealthyDtoToEntity } from '@/utils/mapper';
import HealthyItem from './HealthyItem';

const HealthyList: React.FC = async () => {
  const healthy = await requestServer({
    apiRequest: getHealthyRequest(),
  });

  const healthyData: HealthyDTO[] = healthy?.data || [];

  if (isEmptyLodash(healthyData)) {
    return null;
  }
  const healthyEntities: HealthyEntity[] = healthyData.map(mapHealthyDtoToEntity);
  return (
    <ul className="grid grid-cols-4 gap-2">
      {healthyEntities.map((healthyEntityData) => (
        <li key={healthyEntityData.id}>
          <HealthyItem {...healthyEntityData} />
        </li>
      ))}
    </ul>
  );
};

export default HealthyList;
