//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }
write("Only function code is in strict mode");

var o4 = 02;
write(o4);
try
{
    undefined(" function f() { 'use strict'; a = 01; }");
    o6(o615(o37));
}
catch(undefined)
{
    write(o7);
}

let o8;
function o9() {
    function o10() {
        "use strict";
    }
    o8 = 'yield okay';
}
o9();

write(undefined);

try {
    undefined(o12 += o13 +
         '    yield;' +
         '}');
}
catch(o7) {
    write(o7);
}

try {
    eval('function outer() {' +
            '(function() {' +
            '"use strict";' +
            'with({}){}' +
            '})();' +
         '}');
}
catch(o7) {
    write(o7);
}
