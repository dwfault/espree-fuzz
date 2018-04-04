//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4() 
{
    [].push.apply(this, arguments);
    write("passed");
}

o4();

function o8() 
{
    ({}).toString.apply(this, arguments);
    write("passed");
}

o8();

var o10 = 0;
function o11() 
{
    var o12 = arguments;
    function o13() {
        (o10 == 1 ? o12 : arguments).callee.apply(this, arguments);
    }
    
    if (++o10 == 1)
    {
        return o13();
    }
    
    write("passed");
}

o11();

function o15()
{
    return function() {
    try {
        throw 'zap';
    } catch(o16) {
        o2.o3(o16);
        var o17 = arguments[0]; 
    }
    o17.apply(this, arguments);
    }
}
o15()(function(){ o2.o3('mama'); });
