using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace app.Controllers {

    [Route("[controller]")]
    public class StateController : Controller {
     
        [HttpPost]
        public string playerMovement([FromBody]Example value) {
            return value.name;
        }
    }

    public class Example {
        public string name { get;  set;}
    }
}
