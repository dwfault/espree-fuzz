//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3("" + o1); }

function o4(o5)
{
    try
    {
        return o5();
    }
    catch (o6)
    {
        write(o6.name + " (" + o6.o8 + "): " + o6.o9);
    }
}

var o10 = "global.x";
var o11 = { o10 : "object.x" }

function o12(o13) {
    write("In foo: " + o13 + ". this.x: " + this.o10);
}

o12(1);
o4(function() { o12(1); eval('foo(1) = true;'); });
//foo.call(this, 2);
o12.call(o11, 3);

var o13 = new Array();

for (var o17=0; o17<10; o17++) {
    o13[o17] = o17 * o17 + 1;
}

write(Array.prototype.concat.call(o13));
