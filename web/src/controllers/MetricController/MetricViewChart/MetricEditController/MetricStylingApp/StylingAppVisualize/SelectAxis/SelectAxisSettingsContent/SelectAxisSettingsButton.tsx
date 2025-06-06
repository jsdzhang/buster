import React, { useMemo } from 'react';
import { Button } from '@/components/ui/buttons';
import { Sliders3 } from '@/components/ui/icons';
import { Popover } from '@/components/ui/popover/Popover';
import type { SelectAxisContainerId } from '../config';
import { useSelectAxisContextSelector } from '../useSelectAxisContext';
import { zoneIdToAxisSettingContent } from './config';
import { SelectAxisSettingContent } from './SelectAxisSettingContent';

export const SelectAxisSettingsButton: React.FC<{
  zoneId: SelectAxisContainerId;
}> = React.memo(({ zoneId }) => {
  const selectedChartType = useSelectAxisContextSelector((x) => x.selectedChartType);

  const canUseAxisSetting = useMemo(() => {
    if (zoneIdToAxisSettingContent[zoneId] === null) return false;
    if (selectedChartType === 'pie' && zoneId !== 'tooltip') return false;
    return true;
  }, [selectedChartType, zoneId]);

  if (!canUseAxisSetting) return null;

  return (
    <Popover
      content={<SelectAxisSettingContent zoneId={zoneId} />}
      size="none"
      trigger="click"
      align="end"
      side="left">
      <Button variant="ghost" prefix={<Sliders3 />} />
    </Popover>
  );
});
SelectAxisSettingsButton.displayName = 'SelectAxisSettingsButton';
