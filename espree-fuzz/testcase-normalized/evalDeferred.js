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
o2.o3('done s1');
var o4 = o5();
o2.o3('done f1');
o4();

var o6 =

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

eval(o6);
o2.o3('done s2');
var o7 = o8(0);
var o9 = o8(1);
o2.o3('done f2');
o7();
o9();

var o10 = 

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

eval(o10);
o2.o3('done s3');
var o11 = o12(0);
var o13 = o12(1);
o2.o3('done f3');
o11();
o13();
