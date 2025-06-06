import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { organizationQueryKeys } from '@/api/query_keys/organization';
import { useMemoizedFn } from '@/hooks';
import { createOrganization, getOrganizationUsers, getOrganizationUsers_server } from './requests';

export const useGetOrganizationUsers = (organizationId: string) => {
  const queryFn = useMemoizedFn(() => {
    return getOrganizationUsers({ organizationId });
  });

  const { queryKey } =
    organizationQueryKeys['/organizations/users:getOrganizationUsers'](organizationId);

  return useQuery({
    queryKey,
    staleTime: 10 * 1000,
    queryFn,
    enabled: !!organizationId
  });
};

export const prefetchGetOrganizationUsers = async (
  organizationId: string,
  queryClientProp?: QueryClient
) => {
  const queryClient = queryClientProp || new QueryClient();
  const queryOptions =
    organizationQueryKeys['/organizations/users:getOrganizationUsers'](organizationId);

  await queryClient.prefetchQuery({
    ...queryOptions,
    staleTime: 10 * 1000,
    queryFn: () => getOrganizationUsers_server({ organizationId })
  });
  return queryClient;
};

export const useCreateOrganization = () => {
  return useMutation({
    mutationFn: createOrganization
  });
};
