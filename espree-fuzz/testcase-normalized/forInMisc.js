//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

// https://github.com/Microsoft/ChakraCore/issues/1340
function o3() {
    try {
        eval('(function () { "use strict"; for (var i = 0 in { }) { } })');
        print('testForInInitializer strict: failure: did not throw');
    } catch (o6) {
        var o7 = '' + o6;
        var o8 = o7 === 'SyntaxError: for-in loop head declarations cannot have an initializer' ? 'success' : 'failure';
        print('testForInInitializer strict: ' + o8 + ': e = ' + o7);
    }

    try {
        var o9 = eval('(function () { for (var i = 0 in { }) { } return i; })');
        var o10 = o9();
        var o8 = o10 === 0 ? 'success' : 'failure';
        print('testForInInitializer non-strict: ' + o8 + ': i = ' + o10);
    } catch (o6) {
        print('testForInInitializer non-strict: failure: e = ' + o6);
    }
}
o3();

// regress WOOB 1143623
function find(o12, value) {
    var o8 = -1;

    for(var o10 in o12)
    {
        o0("enumerated index:", o10);
        if(o12[o10] == value)
        {
            o8 = o10;
            break;
        }
    }
    return o8;
}

var o12 = [0, 1, 2, 3, 4, 5];
o0("Find 3 at index: ", find(o12, 3));

function o14()
{
   var o15 = new Object();
   for (var o10 = 0; o10 < 10; o10++)
   {
        o15["randomprop" + o10] = o10;
   }
    var o17 = new Array();
    for (var o19 in o15)
    {
        o17[o17.length] = o19;
    }
    for (var o19 in Array)
    {
    }
    o15 = null;
    return o17;
}

var o21 = o14();
o22();

for (var o10 = 0; o10 < o21.length; o10++)
{
    o0(o21[o10]);
}
