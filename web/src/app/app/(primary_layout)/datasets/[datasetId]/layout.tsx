import type React from 'react';
import { AppPageLayout } from '@/components/ui/layouts';
import { DatasetPageProvider } from './_DatasetsLayout/DatasetPageContext';
import { DatasetsIndividualHeader } from './_DatasetsLayout/DatasetsIndividualHeader';

export default async function Layout({
  children,
  params
}: {
  params: Promise<{ datasetId: string }>;
  children: React.ReactNode;
}) {
  const { datasetId } = await params;

  return (
    <DatasetPageProvider datasetId={datasetId}>
      <AppPageLayout header={<DatasetsIndividualHeader />}>{children}</AppPageLayout>
    </DatasetPageProvider>
  );
}
