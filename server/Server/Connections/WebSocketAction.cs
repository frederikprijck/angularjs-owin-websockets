namespace Server.Connections
{
    public class WebSocketAction<T>
    {
        public WebSocketAction(string type, T payload)
        {
            Type = type;
            Payload = payload;
        }

        public string Type { get; private set; }
        public T Payload { get; private set; }
    }
}