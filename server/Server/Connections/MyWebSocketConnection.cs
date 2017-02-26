using System;
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Owin.WebSocket;
using Server.Chat;

namespace Server.Connections
{
    public class MyWebSocketConnection : WebSocketConnection
    {
        public override Task OnMessageReceived(ArraySegment<byte> message, WebSocketMessageType type)
        {
            var json = Encoding.UTF8.GetString(message.Array, message.Offset, message.Count);
            var chatServer = ChatServer.Instance;
            chatServer.AddMessage(json);

            return Task.CompletedTask;
        }

        public override void OnOpen()
        {
            var chatServer = ChatServer.Instance;

            chatServer.MessageRecieved += message =>
            {
                var action = new WebSocketAction<string>("chatMessage", message);
                SendText(Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(action, Formatting.None, new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                })), true);
            };
        }

        public override bool AuthenticateRequest(IOwinRequest request)
        {
            return true;
        }

        public override Task<bool> AuthenticateRequestAsync(IOwinRequest request)
        {
            return Task.FromResult(true);
        }
    }
}