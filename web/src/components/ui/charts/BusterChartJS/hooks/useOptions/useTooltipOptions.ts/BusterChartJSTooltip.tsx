import { BusterChartTooltip } from '../../../../BusterChartTooltip';
import { type BusterChartProps, ChartType } from '@/api/asset_interfaces/metric/charts';
import React, { useMemo } from 'react';
import type { Chart, TooltipItem, ChartType as ChartJSChartType, TimeScale } from 'chart.js';
import type { ITooltipItem } from '../../../../BusterChartTooltip/interfaces';
import { barAndLineTooltipHelper } from './barAndLineTooltipHelper';
import { pieTooltipHelper } from './pieTooltipHelper';
import { formatLabel } from '@/lib/columnFormatter';
import { scatterTooltipHelper } from './scatterTooltipHelper';
import { AUTO_DATE_FORMATS } from '../useXAxis/config';

export const BusterChartJSTooltip: React.FC<{
  chart: Chart;
  dataPoints: TooltipItem<ChartJSChartType>[];
  columnLabelFormats: NonNullable<BusterChartProps['columnLabelFormats']>;
  selectedChartType: NonNullable<BusterChartProps['selectedChartType']>;
  hasCategoryAxis: boolean;
  hasMultipleMeasures: boolean;
  keyToUsePercentage: string[];
  lineGroupType: BusterChartProps['lineGroupType'];
  barGroupType: BusterChartProps['barGroupType'];
}> = ({
  chart,
  dataPoints: dataPointsProp,
  columnLabelFormats,
  selectedChartType,
  hasCategoryAxis,
  keyToUsePercentage,
  hasMultipleMeasures,
  lineGroupType,
  barGroupType
}) => {
  const isPieChart = selectedChartType === ChartType.Pie;
  const isScatter = selectedChartType === ChartType.Scatter;
  const isLine = selectedChartType === ChartType.Line;
  const isBar = selectedChartType === ChartType.Bar;
  const isPie = selectedChartType === ChartType.Pie;
  const isComboChart = selectedChartType === ChartType.Combo;
  const datasets = chart.data.datasets;
  const dataPoints = dataPointsProp;

  const percentageMode: undefined | 'stacked' = useMemo(() => {
    if (isBar) {
      return barGroupType === 'percentage-stack' ? 'stacked' : undefined;
    }
    if (isLine) {
      return lineGroupType === 'percentage-stack' ? 'stacked' : undefined;
    }
    return undefined;
  }, [isBar, barGroupType, isLine, lineGroupType]);

  const tooltipItems: ITooltipItem[] = useMemo(() => {
    if (isBar || isLine || isComboChart) {
      const hasMultipleShownDatasets = datasets.filter((dataset) => !dataset.hidden).length > 1;

      return barAndLineTooltipHelper(
        dataPoints,
        chart,
        columnLabelFormats,
        keyToUsePercentage,
        hasMultipleShownDatasets,
        percentageMode
      );
    }

    if (isPieChart) {
      return pieTooltipHelper(dataPoints, chart, columnLabelFormats, keyToUsePercentage);
    }

    if (isScatter) {
      return scatterTooltipHelper(dataPoints, columnLabelFormats);
    }

    return [];
  }, []);

  const title = useMemo(() => {
    if (isScatter) {
      if (!hasCategoryAxis) return undefined;
      return {
        title: tooltipItems[0].formattedLabel,
        color: tooltipItems[0].color,
        seriesType: 'scatter'
      };
    }

    const dataIndex = dataPoints[0].dataIndex;
    const value = chart.data.labels?.[dataIndex!];
    if (typeof value === 'string') return String(value);

    //THIS IS ONLY FOR LINE CHART WITH A TIME AXIS
    const datasetIndex = dataPoints[0].datasetIndex;
    const dataset = datasets[datasetIndex!];
    const xAxisKeys = dataset.xAxisKeys;
    const key = xAxisKeys.at(0)!;
    const columnLabelFormat = columnLabelFormats[key!];

    //I decided to do this because the tooltip really need to be more detailed than the x...
    // const isAutoDateFormat =
    //   columnLabelFormat?.dateFormat === 'auto' && columnLabelFormat?.style === 'date';

    // if (isAutoDateFormat) {
    //   const unit = (chart.scales.x as TimeScale)._unit;
    //   const format = AUTO_DATE_FORMATS[unit];

    //   return formatLabel(value as number | Date, { ...columnLabelFormat, dateFormat: format });
    // }

    return formatLabel(value as number | string, columnLabelFormat);
  }, [dataPoints, isPie, isScatter, chart, tooltipItems[0], hasCategoryAxis]);

  //use mount will not work here because the tooltip is passed to a renderString function
  const busterTooltipNode = document?.querySelector('#buster-chartjs-tooltip')!;
  if (busterTooltipNode) {
    if (tooltipItems.length === 0) {
      (busterTooltipNode as HTMLElement).style.display = 'none';
    } else {
      (busterTooltipNode as HTMLElement).style.display = 'block';
    }
  }

  return <BusterChartTooltip title={title} tooltipItems={tooltipItems} />;
};
