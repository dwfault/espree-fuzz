//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = Math.o0;
var o2 = Math.ceil(o0);
var o4 = Math.floor(o0);

o6.o7(o2, o4);

(function o4()
{
    // Test calls that modify the call target operands when the args are evaluated.
    // Do this locally, as that's the case that Eze is likeliest to get wrong.

    var o8;
    var o9 = { o10 : function() { return "O.foo"; }, o11 : function() { return "O.bar"; } };
    o9.o12 = { o10 : function() { return "O.o.foo"; }, o11 : function() { return "O.o.bar"; } };

    o6.o7(o9.o10(o8 = o9, o9 = o9.o12));
    o6.o7(o9.o10(o9 = o8));

    var o13 = 'foo';
    o6.o7(o9[o13](o9 = o9.o12, o13 = 'bar'));
    o6.o7(o9[o13](o9 = o8, o13 = 'foo'));

})();
