import { mainApi } from '../instances';
import { BusterChatListItem } from '@/api/asset_interfaces/chat/chatInterfaces';

// Mock the mainApi
jest.mock('../instances', () => ({
  mainApi: {
    get: jest.fn()
  }
}));

describe('Chat API Requests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getListChats', () => {
    it('should fetch list of chats with default pagination parameters', async () => {
      // Mock data
      const mockChats: BusterChatListItem[] = [
        {
          id: 'test-chat-1',
          title: 'Test Chat 1',
          created_at: '2024-03-20T00:00:00Z',
          updated_at: '2024-03-20T00:00:00Z',
          is_favorited: false,
          created_by: 'test-user',
          created_by_id: 'test-user-id',
          created_by_name: 'Test User',
          created_by_avatar: 'avatar-url',
          last_edited: '2024-03-20T00:00:00Z',
          latest_file_id: 'file-1',
          latest_file_type: 'dashboard'
        }
      ];

      // Setup mock response
      (mainApi.get as jest.Mock).mockResolvedValueOnce({ data: mockChats });

      // Import the function we want to test
      const { getListChats } = await import('./requests');

      // Execute the function
      const result = await getListChats();

      // Verify the API was called with correct parameters
      expect(mainApi.get).toHaveBeenCalledWith('/chats', {
        params: { page_token: 0, page_size: 3500 }
      });

      // Verify the result matches the mock data
      expect(result).toEqual(mockChats);
    });
  });
});
