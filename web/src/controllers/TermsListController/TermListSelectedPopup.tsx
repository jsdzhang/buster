'use client';

import type React from 'react';
import { useDeleteTerm } from '@/api/buster_rest/terms';
import { Button } from '@/components/ui/buttons';
import { BusterListSelectedOptionPopupContainer } from '@/components/ui/list';
import { useMemoizedFn } from '@/hooks';

export const TermListSelectedOptionPopup: React.FC<{
  selectedRowKeys: string[];
  onSelectChange: (selectedRowKeys: string[]) => void;
}> = ({ selectedRowKeys, onSelectChange }) => {
  return (
    <BusterListSelectedOptionPopupContainer
      selectedRowKeys={selectedRowKeys}
      onSelectChange={onSelectChange}
      buttons={[
        <DeleteButton
          key="delete"
          selectedRowKeys={selectedRowKeys}
          onSelectChange={onSelectChange}
        />
      ]}
      show={selectedRowKeys.length > 0}
    />
  );
};

const DeleteButton: React.FC<{
  selectedRowKeys: string[];
  onSelectChange: (selectedRowKeys: string[]) => void;
}> = ({ selectedRowKeys, onSelectChange }) => {
  const { mutateAsync: onDeleteTerm, isPending: isPendingDeleteTerm } = useDeleteTerm();

  const onDeleteClick = useMemoizedFn(async () => {
    await onDeleteTerm({ ids: selectedRowKeys });
    onSelectChange([]);
  });

  return (
    <Button onClick={onDeleteClick} loading={isPendingDeleteTerm}>
      Delete
    </Button>
  );
};
