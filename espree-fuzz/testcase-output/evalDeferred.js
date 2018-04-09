//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 =

'function f1() {' +
'    var a = "a";' +
'    function g1() {' +
'        WScript.Echo(a);' +
'    }' +
'    return g1;' +
'}';

eval(o0);
o1.o2('done s1');
var o3 = o4();
o1.o2('done f1');
o3();

var o5 =

'var a = "global a";' +
'function f2(i) {' +
'    with ({a:"with a"}) {' +
'        var g2 = function() {' +
'            WScript.Echo(a);' +
'        };' +
'        function g2_() {' +
'            WScript.Echo(a);' +
'        }' +
'    }' +
'    switch(i) {' +
'        case 0: return g2;' +
'        case 1: return g2_;' +
'    }' +
'}';

eval(o5);
o1.o2('done s2');
var o6 = o7(0);
var o8 = o7(1);
o1.o2('done f2');
o6();
o8();

var o9 = 

'function f3(i) {' +
'    var a = "f3 a";' +
'    function g3(i) {' +
'        try {' +
'            throw "catch";' +
'        }' +
'        catch(a) {' +
'            function g4_() {' +
'                WScript.Echo(a);' +
'            }' +
'            var g4 = function() {' +
'                WScript.Echo(a);' +
'            };' +
'            return i == 0 ? g4 : g4_;' +
'        }' +
'    }' +
'    return g3(i);' +
'}';

eval(o9);
o1.o2('done s3');
var o10 = o11(0);
var o12 = o11(1);
o1.o2('done f3');
o10();
o12();
