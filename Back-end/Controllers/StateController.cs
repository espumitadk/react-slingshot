using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Sockets;
using System.Net;
using System.Text;
using Newtonsoft.Json;

namespace app.Controllers {

    [Route("[controller]")]
    public class StateController : Controller {
     
        [HttpPost]
        public IActionResult playerMovement([FromBody]IEnumerable<Cell> state) {
            TcpClient client = new TcpClient();
            client.Client.Connect(IPAddress.Parse("172.18.0.3"), 5051);
            var serverFormatState = state.Select(cell => {
                var serverCell = new ServerCell();
                serverCell.x = cell.column;
                serverCell.y = cell.row;
                serverCell.player = cell.player == "PLAYER_2" ? "X" : "O";
                return serverCell;
            });
            string serialaizedState = JsonConvert.SerializeObject(serverFormatState);
            client.Client.Send(Encoding.UTF8.GetBytes(serialaizedState));           
            byte[] buffer = Encoding.UTF8.GetBytes("Result");
            int len = client.GetStream().Read(buffer, 0, buffer.Length);
            var serverMovement = new Movement();
            serverMovement.column = short.Parse(Encoding.UTF8.GetString(buffer, 0, len));
            return Json(serverMovement);
        }

    }

    public class Cell {
        public short row { get;  set;}
        public short column { get;  set;}
        public string player { get;  set;}
    }

    public class Movement {
        public short column { get;  set;}
    }

    
    public class ServerCell {
        public short x { get;  set;}
        public short y { get;  set;}
        public string player { get;  set;}
    }

}
