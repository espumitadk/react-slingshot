using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Sockets;
using System.Net;
using System.Text;

namespace app.Controllers {

    [Route("[controller]")]
    public class StateController : Controller {
     
        [HttpPost]
        public IActionResult playerMovement([FromBody]IEnumerable<Cell> state) {
            var serverMovement = new Movement();
            var RandomColumn = new System.Random().Next(1, 8);
            serverMovement.column = "column" + RandomColumn;
            TcpClient client = new TcpClient();
            client.Client.Connect(IPAddress.Parse("172.18.0.3"), 5051);
            var serverFormatState = state.Select(cell => {
                var serverCell = new ServerCell();
                serverCell.x = 1;
                serverCell.y = 1;
                serverCell.player = cell.player == "PLAYER_2" ? "X" : "O";
                return serverCell;
            });
            client.Client.Send(Encoding.UTF8.GetBytes("[]"));           
            byte[] buffer = Encoding.UTF8.GetBytes("This message is longer than what the server is willing to read.");
            int len = client.GetStream().Read(buffer, 0, buffer.Length);
            string message = Encoding.UTF8.GetString(buffer, 0, len);
            serverMovement.column = "column" + message;
            return Json(serverMovement);
        }

    }

    public class Cell {
        public short row { get;  set;}
        public short column { get;  set;}
        public string player { get;  set;}
    }

    public class Movement {
        public string column { get;  set;}
    }

    
    public class ServerCell {
        public short x { get;  set;}
        public short y { get;  set;}
        public string player { get;  set;}
    }

}
