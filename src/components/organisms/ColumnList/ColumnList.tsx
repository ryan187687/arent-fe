import { ColumnItem } from '@/components/molecules/ColumnItem';
import { ColumnDTO } from '@/models/dto/column.dto';
import { ColumnEntity } from '@/models/entities/column.entity';
import { getColumnRequest } from '@/requests/column.reques';
import { requestServer } from '@/services/requestServer';
import { isEmptyLodash } from '@/utils';
import { mapColumnDtoToEntity } from '@/utils/mapper/column.mapper';

const ColumnList: React.FC = async () => {
  const column = await requestServer({
    apiRequest: getColumnRequest(),
  });

  const columnData: ColumnDTO[] = column?.data || [];

  if (isEmptyLodash(columnData)) {
    return null;
  }
  const columnEntities: ColumnEntity[] = columnData.map(mapColumnDtoToEntity);
  return (
    <ul className="grid grid-cols-4 gap-x-2 gap-y-4">
      {columnEntities.map((columnEntityData) => (
        <li key={columnEntityData.id}>
          <ColumnItem {...columnEntityData} />
        </li>
      ))}
    </ul>
  );
};

export default ColumnList;
