import { BackButton } from '@/components/ui/buttons/BackButton';
import { createBusterRoute, BusterRoutes } from '@/routes/busterRoutes';

export const PermissionGroupBackButton = ({}: {}) => {
  const route = createBusterRoute({ route: BusterRoutes.SETTINGS_PERMISSION_GROUPS });
  const text = 'Permission groups';
  return <BackButton text={text} linkUrl={route} />;
};
