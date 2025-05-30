'use client';

import React from 'react';
import { TermIndividualHeader } from './TermIndividualHeader';
import { AppPageLayout, AppSplitter } from '@/components/ui/layouts';
import { TermIndividualHeaderSider } from './TermIndividualHeaderSider';
import { TermIndividualContentSider } from './TermIndividualContentSider';
import { TermIndividualContent } from './TermIndividualContent';
import { useGetTermsList } from '@/api/buster_rest/terms';

export const TermIndividualController: React.FC<{
  termPageIdLayout: string[];
  termId: string;
}> = ({ termPageIdLayout, termId }) => {
  const { isFetched: isFetchedTermsList } = useGetTermsList();

  return (
    <AppSplitter
      defaultLayout={termPageIdLayout}
      rightPanelMinSize={'280px'}
      rightPanelMaxSize={'400px'}
      autoSaveId="term-page"
      preserveSide="right"
      leftChildren={
        <>
          <TermIndividualHeader termId={termId} />
          <TermIndividualContent termId={termId} />
        </>
      }
      rightHidden={!isFetchedTermsList}
      rightChildren={
        <AppPageLayout header={<TermIndividualHeaderSider />}>
          <TermIndividualContentSider termId={termId} />
        </AppPageLayout>
      }
    />
  );
};
