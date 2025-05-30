import { prefetchDatasetGroupUsers } from '@/api/buster_rest';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { DatasetGroupUsersController } from './DatasetGroupUsersController';

export default async function Page(
  props: {
    params: Promise<{ datasetGroupId: string }>;
  }
) {
  const params = await props.params;

  const {
    datasetGroupId
  } = params;

  const queryClient = await prefetchDatasetGroupUsers(datasetGroupId);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DatasetGroupUsersController datasetGroupId={datasetGroupId} />
    </HydrationBoundary>
  );
}
