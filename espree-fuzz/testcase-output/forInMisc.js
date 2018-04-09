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
    } catch (o4) {
        var o5 = '' + o4;
        var o6 = o5 === 'SyntaxError: for-in loop head declarations cannot have an initializer' ? 'success' : 'failure';
        print('testForInInitializer strict: ' + o6 + ': e = ' + o5);
    }

    try {
        var o7 = eval('(function () { for (var i = 0 in { }) { } return i; })');
        var o8 = o7();
        var o6 = o8 === 0 ? 'success' : 'failure';
        print('testForInInitializer non-strict: ' + o6 + ': i = ' + o8);
    } catch (o4) {
        print('testForInInitializer non-strict: failure: e = ' + o4);
    }
}
o3();

// regress WOOB 1143623
function find(o9, value) {
    var o6 = -1;

    for(var o8 in o9)
    {
        o0("enumerated index:", o8);
        if(o9[o8] == value)
        {
            o6 = o8;
            break;
        }
    }
    return o6;
}

var o9 = [0, 1, 2, 3, 4, 5];
o0("Find 3 at index: ", find(o9, 3));

function o10()
{
   var o11 = new Object();
   for (var o8 = 0; o8 < 10; o8++)
   {
        o11["randomprop" + o8] = o8;
   }
    var o12 = new Array();
    for (var o13 in o11)
    {
        o12[o12.length] = o13;
    }
    for (var o13 in Array)
    {
    }
    o11 = null;
    return o12;
}

var o14 = o10();
o15();

for (var o8 = 0; o8 < o14.length; o8++)
{
    o0(o14[o8]);
}
