using System;
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;
using System.Timers;
using Microsoft.Owin;
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
                SendText(Encoding.UTF8.GetBytes(message), true);
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