import type React from 'react';
import { Button } from '@/components/ui/buttons';
import { AppTooltip } from '@/components/ui/tooltip';
import { ASSET_ICONS } from '../config/assetIcons';

export const CollectionButton: React.FC<{
  buttonType?: 'ghost' | 'default';
  useText?: boolean;
}> = ({ buttonType = 'default', useText = false }) => {
  return (
    <AppTooltip title={!useText ? 'Add to collection' : ''}>
      <Button
        prefix={<ASSET_ICONS.collections />}
        variant={buttonType}
        data-testid="add-to-collection-button">
        {useText ? 'Collections' : ''}
      </Button>
    </AppTooltip>
  );
};
