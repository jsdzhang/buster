import { IBusterMetricChartConfig } from '@/api/asset_interfaces';
import React, { useMemo } from 'react';
import { LabelAndInput } from '../Common';
import { PieSortBy } from '@/api/asset_interfaces/metric/charts';
import { AppSegmented, SegmentedItem } from '@/components/ui/segmented';
import { SortAlphaAscending, SortNumAscending, Empty } from '@/components/ui/icons';
import { useMemoizedFn } from '@/hooks';

const options: SegmentedItem<NonNullable<PieSortBy> | 'none'>[] = [
  {
    icon: <SortNumAscending />,
    value: 'value',
    tooltip: 'Sort by value'
  },
  {
    value: 'key',
    tooltip: 'Sort by key',
    icon: <SortAlphaAscending />
  },
  {
    icon: <Empty />,
    value: 'none',
    tooltip: 'No sorting'
  }
];

export const EditPieSorting: React.FC<{
  pieSortBy: IBusterMetricChartConfig['pieSortBy'];
  onUpdateChartConfig: (v: Partial<IBusterMetricChartConfig>) => void;
}> = React.memo(({ pieSortBy, onUpdateChartConfig }) => {
  const selectedOption = useMemo(() => {
    return (
      options.find((option) => {
        return pieSortBy === option.value;
      })?.value || 'none'
    );
  }, [pieSortBy]);

  const onChange = useMemoizedFn((value: SegmentedItem<NonNullable<PieSortBy> | 'none'>) => {
    if (value.value === 'none') {
      onUpdateChartConfig({ pieSortBy: null });
    } else {
      onUpdateChartConfig({ pieSortBy: value.value });
    }
  });

  return (
    <LabelAndInput label="Sorting">
      <div className="flex justify-end">
        <AppSegmented options={options} value={selectedOption} onChange={onChange} type="button" />
      </div>
    </LabelAndInput>
  );
});
EditPieSorting.displayName = 'EditPieSorting';
