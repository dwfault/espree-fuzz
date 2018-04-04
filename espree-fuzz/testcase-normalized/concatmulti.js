//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = [
function (o1)
{
    // Can't optimize
    return "<start> " + o1 + " <end>";
},

function(o1, o2)
{
    // Can't optimize because the first two might not be string
    return o1 + o2 + " something";
},

function(o1, o2)
{
    // Can't optimize, side effect ordering
    return o1 + " something " + o2;
},

function(o1, o2)
{
    // Can't optimize, side effect ordering
    return o1 + (" something " + o2);
},

function(o1)
{
    return ("<start> " + o1) 
        + (o1 + " <end>");
},

function(o1)
{
    return "<start> " + o1 + o1 + (o1 += "<extra>") + " <end>";
},

function(o1)
{
    return "<start> " + o1 + o1;
}


];


function test(o4, o1, o2)
{
    o5.o6("------------------------------------------");
    o5.o6(o4(o1, o2));
    o5.o6(o4(o1, o2));
}

function o7(o1, o2)
{
    o5.o6("==========================================");
    o5.o6("Input : " + o1 + " | " + o2);
    o5.o6("==========================================");
    for (var o8 = 0; o8 < o0.length; o8++)
    {
        test(o0[o8], o1, o2);
    } 
}

o7("x");
o7(12);
o7(true);


function o10() {};
function o11() {};
o10.prototype.toString = function() { o5.o6("A.toString"); return "A"; }
o11.prototype.toString = function() { o5.o6("B.toString"); return "B"; }


o7(new o10(), new o11());
