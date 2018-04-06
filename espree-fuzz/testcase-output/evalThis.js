//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

"use strict";

var o0 = o1.o2;

o0("** Checking 'this' using 'eval' in global scope");
eval("echo(this);");
eval("'use strict'; echo(this);");
eval("eval('echo(this);');");
eval("'use strict'; eval('echo(this);');");

o0("** Checking 'this' using 'my_eval' in global scope");
var o4 = eval;
o4("echo(this);");
o4("'use strict'; echo(this);");
o4("eval('echo(this);');");
o4("'use strict'; eval('echo(this);');");

function o5() {
    o0("** Checking 'this' using 'eval' in function scope");
    eval("echo(this);");
    eval("'use strict'; echo(this);");
    eval("eval('echo(this);');");
    eval("'use strict'; eval('echo(this);');");

    o0("** Checking 'this' using 'my_eval' in function scope");
    var o4 = eval;
    o4("echo(this);");
    o4("'use strict'; echo(this);");
    o4("eval('echo(this);');");
    o4("'use strict'; eval('echo(this);');");
}
o5();
