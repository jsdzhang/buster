import { useDeleteDataset } from '@/api/buster_rest';
import { useAppLayoutContextSelector } from '@/context/BusterAppLayout';
import { BusterRoutes } from '@/routes';
import { Dropdown, DropdownItems } from '@/components/ui/dropdown';
import { Button } from '@/components/ui/buttons';
import React, { useMemo } from 'react';
import { Dots, Trash } from '@/components/ui/icons';

export const DatasetIndividualThreeDotMenu: React.FC<{
  datasetId?: string;
}> = React.memo(({ datasetId }) => {
  const onChangePage = useAppLayoutContextSelector((x) => x.onChangePage);
  const { mutateAsync: onDeleteDataset } = useDeleteDataset();

  const items: DropdownItems = useMemo(() => {
    return [
      {
        value: '1',
        label: 'Delete dataset',
        icon: <Trash />,
        onClick: datasetId
          ? async () => {
              await onDeleteDataset([datasetId]);
              onChangePage({
                route: BusterRoutes.APP_DATASETS
              });
            }
          : undefined
      }
    ];
  }, [datasetId, onDeleteDataset]);

  return (
    <Dropdown items={items} side={'bottom'} align={'end'}>
      <Button variant={'ghost'} prefix={<Dots />} />
    </Dropdown>
  );
});
DatasetIndividualThreeDotMenu.displayName = 'DatasetIndividualThreeDotMenu';
