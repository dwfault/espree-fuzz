//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2 (o3)
{
    var o4 = function o4(o5){ }

    o4.prototype = {
        valueOf : function(){ return o3; }
    };

    function o8()
    {
        var o9 = new o4(0);
        o9<"1";
    }

    o8();
    o8();
    o8();
}

o2(null);
o2(undefined);
o11.o12(function() { o2(Symbol("abc")); }, o14, "Number expected");

o0.o15("Passed");
