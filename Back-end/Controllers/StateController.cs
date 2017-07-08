using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace app.Controllers {

    [Route("[controller]")]
    public class StateController : Controller {
     
        [HttpPost]
        public IActionResult playerMovement([FromBody]IEnumerable<Cell> state) {
            var serverMovement = new Movement();
            var RandomColumn = new System.Random().Next(1, 8);
            serverMovement.column = "column" + RandomColumn;
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
