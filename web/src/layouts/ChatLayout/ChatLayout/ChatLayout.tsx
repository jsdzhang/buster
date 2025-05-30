'use client';

import React, { useMemo, useRef, useState } from 'react';
import { AppSplitter, AppSplitterRef } from '@/components/ui/layouts/AppSplitter';
import { ChatContainer } from '../ChatContainer';
import { FileContainer } from '../FileContainer';
import { ChatLayoutContextProvider, useChatLayoutContext } from '../ChatLayoutContext';
import { ChatContextProvider } from '../ChatContext/ChatContext';
import { DEFAULT_CHAT_OPTION_SIDEBAR_SIZE } from '../ChatLayoutContext/config';
import { useMount } from '@/hooks';
import { useHotkeys } from 'react-hotkeys-hook';
import { CREATE_LANGFUSE_SESSION_URL } from '@/routes/externalRoutes';
import { useBusterNotifications } from '@/context/BusterNotifications';

interface ChatSplitterProps {
  children?: React.ReactNode;
}

export const ChatLayout: React.FC<ChatSplitterProps> = ({ children }) => {
  const appSplitterRef = useRef<AppSplitterRef>(null);
  const { openErrorNotification } = useBusterNotifications();
  const [mounted, setMounted] = useState(false);

  const chatLayoutProps = useChatLayoutContext({ appSplitterRef });
  const { selectedLayout, selectedFile } = chatLayoutProps;

  const defaultSplitterLayout = useMemo(() => {
    if (selectedLayout === 'chat-only') return ['100%', '0%'];
    if (selectedLayout === 'file-only' || selectedLayout === 'chat-hidden') return ['0%', '100%'];
    return ['380px', 'auto'];
  }, [selectedLayout]);

  useMount(() => {
    setMounted(true); //we need to wait for the app splitter to be mounted because this is nested in the app splitter
  });

  useHotkeys(
    'meta+l',
    (e) => {
      e.stopPropagation();
      const chatId = chatLayoutProps.chatId;
      if (!chatId) {
        openErrorNotification('No chat id found');
        return;
      }
      const link = CREATE_LANGFUSE_SESSION_URL(chatId);
      window.open(link, '_blank');
    },
    {
      preventDefault: true
    }
  );

  return (
    <ChatLayoutContextProvider chatLayoutProps={chatLayoutProps}>
      <ChatContextProvider>
        <AppSplitter
          ref={appSplitterRef}
          leftChildren={useMemo(() => mounted && <ChatContainer mounted={mounted} />, [mounted])}
          rightChildren={useMemo(
            () => mounted && <FileContainer>{children}</FileContainer>,
            [children, mounted]
          )}
          autoSaveId="chat-splitter"
          defaultLayout={defaultSplitterLayout}
          allowResize={selectedLayout === 'both'}
          preserveSide="left"
          leftPanelMinSize={selectedFile ? DEFAULT_CHAT_OPTION_SIDEBAR_SIZE : undefined}
        />
      </ChatContextProvider>
    </ChatLayoutContextProvider>
  );
};

ChatLayout.displayName = 'ChatLayout';
