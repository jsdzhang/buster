import { useMemo } from 'react';
import { barDelayAnimation } from '../../core/animations/barDelayAnimation';
import { ANIMATION_DURATION, ANIMATION_THRESHOLD } from '../../../config';
import { AnimationOptions, ChartType as ChartTypeJS } from 'chart.js';
import { BusterChartProps, ChartType } from '@/api/asset_interfaces/metric';

export const useAnimations = ({
  animate,
  numberOfDataPoints,
  selectedChartType,
  barGroupType
}: {
  animate: boolean;
  numberOfDataPoints: number;
  selectedChartType: ChartType;
  barGroupType: BusterChartProps['barGroupType'];
}): AnimationOptions<ChartTypeJS>['animation'] => {
  const isAnimationEnabled = useMemo(() => {
    if (selectedChartType === 'scatter') return false;

    return animate && numberOfDataPoints <= ANIMATION_THRESHOLD;
  }, [animate, numberOfDataPoints, selectedChartType]);

  return useMemo(() => {
    return isAnimationEnabled
      ? {
          duration: ANIMATION_DURATION,
          ...animationRecord[selectedChartType]?.({ barGroupType })
        }
      : false;
  }, [isAnimationEnabled, selectedChartType, barGroupType]);
};

const animationRecord: Record<
  ChartType,
  ({
    barGroupType
  }: {
    barGroupType: BusterChartProps['barGroupType'];
  }) => AnimationOptions<ChartTypeJS>['animation']
> = {
  bar: barDelayAnimation,
  line: () => ({}),
  scatter: () => ({}),
  pie: () => ({}),
  metric: () => ({}),
  table: () => ({}),
  combo: () => ({})
};
