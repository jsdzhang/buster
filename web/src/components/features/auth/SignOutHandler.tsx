'use client';

import { useCallback } from 'react';
import { signOut } from '@/lib/supabase/signOut';
import { clearAllBrowserStorage } from '@/lib/browser/storage';
import { useAppLayoutContextSelector } from '@/context/BusterAppLayout';
import { BusterRoutes } from '@/routes/busterRoutes';
import { useBusterNotifications } from '@/context/BusterNotifications';

export const useSignOut = () => {
  const onChangePage = useAppLayoutContextSelector((x) => x.onChangePage);
  const { openErrorMessage } = useBusterNotifications();
  const handleSignOut = useCallback(async () => {
    try {
      // Then perform server-side sign out
      await signOut();

      // First clear all client-side storage
      clearAllBrowserStorage();

      await onChangePage({
        route: BusterRoutes.AUTH_LOGIN
      });
    } catch (error) {
      openErrorMessage('Error signing out');
    }
  }, [onChangePage, openErrorMessage]);

  return handleSignOut;
};
