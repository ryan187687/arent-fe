import type { ColumnDTO } from '@/models/dto';
import type { ColumnEntity } from '@/models/entities';
import { getColumnRequest } from '@/requests';
import { requestServer } from '@/services/requestServer';
import type { IRequest } from '@/types';
import { isEmptyLodash } from '@/utils';
import { mapColumnDtoToEntity } from '@/utils/mapper';

import ColumnItem from './ColumnItem';

const ColumnList: React.FC<IRequest> = async (props) => {
  const column = await requestServer({
    apiRequest: getColumnRequest(props),
  });

  const columnData: ColumnDTO[] = column?.data || [];

  if (isEmptyLodash(columnData)) {
    return null;
  }
  const columnEntities: ColumnEntity[] = columnData.map(mapColumnDtoToEntity);
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4">
      {columnEntities.map((columnEntityData) => (
        <li key={columnEntityData.id}>
          <ColumnItem {...columnEntityData} />
        </li>
      ))}
    </ul>
  );
};

export default ColumnList;
