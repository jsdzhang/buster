import { AppPageLayout } from '@/components/ui/layouts';
import { ChatListContainer } from '../../../../controllers/ChatsListController';
import { ChatListHeader } from '../../../../controllers/ChatsListController/ChatListHeader';

const type = 'logs';

export default function LogsPage() {
  return (
    <AppPageLayout headerSizeVariant="list" header={<ChatListHeader type={type} />}>
      <ChatListContainer type={type} />
    </AppPageLayout>
  );
}
