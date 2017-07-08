using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace app.Controllers {

    [Route("[controller]")]
    public class StateController : Controller {
     
        [HttpPost]
        public IActionResult playerMovement([FromBody]GameState state) {
            var serverMovement = new Movement();
            serverMovement.row = "row6";
            serverMovement.column = "column4";
            return Json(serverMovement);
        }
    }

    public class GameState {
        public Row row1 { get;  set;}
        public Row row2 { get;  set;}
        public Row row3 { get;  set;}
        public Row row4 { get;  set;}
        public Row row5 { get;  set;}
        public Row row6 { get;  set;}
    }

    public class Row {
        public string column1 { get;  set;}
        public string column2 { get;  set;}
        public string column3 { get;  set;}
        public string column4 { get;  set;}
        public string column5 { get;  set;}
        public string column6 { get;  set;}
        public string column7 { get;  set;}
    }

    public class Movement {
        public string row { get;  set;}
        public string column { get;  set;}
    }

}
