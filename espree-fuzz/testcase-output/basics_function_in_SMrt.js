//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


write("Only function code is in strict mode");

var o3 = 02;
write(o3);
try
{
    eval(" function f() { 'use strict'; a = 01; }");
    o4();
}
catch(o5)
{
    write(o5);
}

let o6;
function o7() {
    function o8() {
        "use strict";
    }
    o6 = 'yield okay';
}
o7();

write(o6);

try {
    eval('function test1() {' +
         '   "use strict";' +
         '    function test1_1() {' +
         '    }' +
         '    yield;' +
         '}');
}
catch(o5) {
    write(o5);
}

try {
    eval('function outer() {' +
            '(function() {' +
            '"use strict";' +
            'with({}){}' +
            '})();' +
         '}');
}
catch(o5) {
    write(o5);
}
