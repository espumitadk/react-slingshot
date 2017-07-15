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
            client.Client.Connect(IPAddress.Parse("artificial-intelligence"), 5051);
            client.Client.Send(Encoding.UTF8.GetBytes("[{\"x\": 1,\"y\": 1,\"player\": \"X\"},{\"x\": 1,\"y\": 2,\"player\": \"X\"},{\"x\": 1,\"y\": 3,\"player\": \"X\"}]"));           
            return Json(serverMovement);
        }

    }

    public class Cell {
        public string row { get;  set;}
        public string column { get;  set;}
        public string player { get;  set;}
    }

    public class Movement {
        public string column { get;  set;}
    }

    

}
