import { IColumnLabelFormat } from '@/api/asset_interfaces/metric/charts';
import { formatLabel } from '@/lib';
import React, { useMemo } from 'react';
import { Text } from '@/components/ui/typography';
import { ColumnTypeIcon } from './config';
import { DEFAULT_COLUMN_LABEL_FORMAT } from '@/api/asset_interfaces';
import { cn } from '@/lib/classMerge';

export const SelectAxisItemLabel = React.memo(
  ({
    id,
    columnLabelFormat,
    onClick
  }: {
    id: string;
    columnLabelFormat: IColumnLabelFormat | undefined;
    onClick?: () => void;
  }) => {
    const { style } = columnLabelFormat || DEFAULT_COLUMN_LABEL_FORMAT;

    const label = useMemo(() => {
      return formatLabel(id, columnLabelFormat, true);
    }, [columnLabelFormat, id]);

    const Icon = useMemo(() => ColumnTypeIcon[style] || ColumnTypeIcon.string, [style]);

    return (
      <div
        className={`flex items-center space-x-1.5 overflow-hidden whitespace-nowrap ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}>
        <div className={cn('text-icon-color flex')}>{Icon.icon}</div>
        <Text className="truncate">{label}</Text>
      </div>
    );
  }
);
SelectAxisItemLabel.displayName = 'SelectAxisItemLabel';
