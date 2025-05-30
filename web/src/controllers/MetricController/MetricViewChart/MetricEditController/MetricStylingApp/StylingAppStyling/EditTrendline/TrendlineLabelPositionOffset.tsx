import React from 'react';
import { LabelAndInput } from '../../Common';
import { LoopTrendline } from './EditTrendline';
import { Slider } from '@/components/ui/slider';

interface TrendlineLabelPositionOffsetProps {
  trend: LoopTrendline;
  onUpdateExistingTrendline: (trend: LoopTrendline) => void;
}

export const TrendlineLabelPositionOffset: React.FC<TrendlineLabelPositionOffsetProps> = React.memo(
  ({ trend, onUpdateExistingTrendline }) => {
    const handleChange = (value: number[]) => {
      onUpdateExistingTrendline({
        ...trend,
        trendlineLabelPositionOffset: value[0]
      });
    };

    return (
      <LabelAndInput label="Label position">
        <div className="w-full px-2">
          <Slider
            defaultValue={[trend.trendlineLabelPositionOffset ?? 85]}
            step={1}
            min={0}
            max={100}
            onValueChange={handleChange}
          />
        </div>
      </LabelAndInput>
    );
  }
);

TrendlineLabelPositionOffset.displayName = 'TrendlineLabelPositionOffset';
