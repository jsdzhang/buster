'use client';

import { useGetUserDatasetGroups } from '@/api/buster_rest';
import { useDebounceSearch } from '@/hooks';
import {
  NewDatasetGroupModal,
  PermissionSearchAndListWrapper
} from '@/components/features/PermissionComponents';
import React, { useMemo, useState } from 'react';
import { UserDatasetGroupListContainer } from './UserDatasetGroupListContainer';
import { Button } from '@/components/ui/buttons';
import { useMemoizedFn } from '@/hooks';
import { Plus } from '@/components/ui/icons';

export const UserDatasetGroupsController: React.FC<{ userId: string }> = ({ userId }) => {
  const { data: datasetGroups } = useGetUserDatasetGroups({ userId });
  const [isNewDatasetGroupModalOpen, setIsNewDatasetGroupModalOpen] = useState(false);
  const { filteredItems, searchText, handleSearchChange } = useDebounceSearch({
    items: datasetGroups || [],
    searchPredicate: (item, searchText) => item.name.toLowerCase().includes(searchText)
  });

  const onCloseNewDatasetGroupModal = useMemoizedFn(() => {
    setIsNewDatasetGroupModalOpen(false);
  });

  const onOpenNewDatasetGroupModal = useMemoizedFn(() => {
    setIsNewDatasetGroupModalOpen(true);
  });

  const NewDatasetGroupButton: React.ReactNode = useMemo(() => {
    return (
      <Button prefix={<Plus />} onClick={onOpenNewDatasetGroupModal}>
        New dataset group
      </Button>
    );
  }, []);

  return (
    <>
      <PermissionSearchAndListWrapper
        searchText={searchText}
        handleSearchChange={handleSearchChange}
        searchPlaceholder="Search by dataset group"
        searchChildren={NewDatasetGroupButton}>
        <UserDatasetGroupListContainer filteredDatasetGroups={filteredItems} userId={userId} />
      </PermissionSearchAndListWrapper>

      <NewDatasetGroupModal
        isOpen={isNewDatasetGroupModalOpen}
        onClose={onCloseNewDatasetGroupModal}
        datasetId={null}
        userId={userId}
      />
    </>
  );
};
