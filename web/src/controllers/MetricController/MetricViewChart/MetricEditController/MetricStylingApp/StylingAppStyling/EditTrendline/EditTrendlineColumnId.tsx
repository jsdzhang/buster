import type { ColumnMetaData, IBusterMetricChartConfig } from '@/api/asset_interfaces';
import { formatLabel } from '@/lib';
import { Select, SelectItem } from '@/components/ui/select';
import React, { useMemo } from 'react';
import { LabelAndInput } from '../../Common';
import { LoopTrendline } from './EditTrendline';

export const TrendlineColumnId = React.memo(
  ({
    trend,
    columnMetadata,
    onUpdateExistingTrendline,
    columnLabelFormats,
    yAxisEncodes
  }: {
    trend: LoopTrendline;
    columnMetadata: ColumnMetaData[];
    columnLabelFormats: IBusterMetricChartConfig['columnLabelFormats'];
    onUpdateExistingTrendline: (trend: LoopTrendline) => void;
    yAxisEncodes: string[];
  }) => {
    const options = useMemo(() => {
      return columnMetadata
        .filter((column) => yAxisEncodes.includes(column.name))
        .map<SelectItem>((column) => {
          const columnLabelFormat = columnLabelFormats[column.name];
          return {
            label: formatLabel(column.name, columnLabelFormat, true),
            value: column.name
          };
        });
    }, [columnMetadata, columnLabelFormats, yAxisEncodes]);

    const defaultSelected = useMemo(() => {
      return options.find((option) => option.value === trend.columnId);
    }, [options, trend.columnId]);

    return (
      <LabelAndInput label="Column">
        <Select
          className="w-full overflow-hidden"
          items={options}
          value={defaultSelected?.value}
          onChange={(value) => onUpdateExistingTrendline({ ...trend, columnId: value })}
        />
      </LabelAndInput>
    );
  }
);
TrendlineColumnId.displayName = 'TrendlineColumnId';
