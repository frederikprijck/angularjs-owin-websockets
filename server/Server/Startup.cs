using Microsoft.Owin;
using Owin;
using Owin.WebSocket.Extensions;
using Server.Connections;

[assembly: OwinStartup(typeof(Server.Startup))]

namespace Server
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapWebSocketRoute<MyWebSocketConnection>("/ws");
        }
    }
}