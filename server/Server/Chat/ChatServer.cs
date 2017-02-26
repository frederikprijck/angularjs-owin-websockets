namespace Server.Chat
{
    public delegate void OnMessageRecieved(string message);

    public class ChatServer
    {
        private static ChatServer _instance;
        public event OnMessageRecieved MessageRecieved;

        private ChatServer()
        {

        }

        public void AddMessage(string message)
        {
            OnMessageRecieved(message);
        }

        public void OnMessageRecieved(string message)
        {
            MessageRecieved?.Invoke(message);
        }

        public static ChatServer Instance
        {
            get
            {
                _instance = _instance ?? new ChatServer();
                return _instance;
            }
        }
    }
}