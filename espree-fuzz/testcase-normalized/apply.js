//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4() 
{
    this.o5 = "hello";
}

o4.apply();
write("x1 : " + o5);

o5 = 0;
o4.apply(null);
write("x1 : " + o5);

o5 = 0;
o4.apply(undefined);
write("x1 : " + o5);

var o8 = new Object();

o5 = 0;
o4.apply(o8);
write("x1 : " + o5);
write("o.x1 : " + o8.o5);

function o10(o11)
{
    this.o12 = o11;
}

o12 = 0;
o10.apply();
write("x2 : " + o12);

o12 = 0;
o10.apply(null);
write("x2 : " + o12);

o12 = 0;
o10.apply(undefined);
write("x2 : " + o12);

o12 = 0;
o10.apply(o8);
write("x2 : " + o12);
write("o.x2 : " + o8.o12);

o12 = 0;
o10.apply(null, ["world"]);
write("x2 : " + o12);

o12 = 0;
o10.apply(undefined, ["world"]);
write("x2 : " + o12);

o12 = 0;
o10.apply(o8, ["world"]);
write("x2 : " + o12);
write("o.x2 : " + o8.o12);


function o13()
{
    this.construct.apply(this, arguments);
    write("after apply");
    return new Object();
}

function o16()
{
    try
    {
        this.construct.apply(this, arguments);
    }
    catch (o17)
    {
    }
    
    write("after apply");
    return new Object();
}

o13.prototype.construct = function(o19, o20)
{
    this.o11 = o19;
    this.o21 = o20;
}
o16.prototype.construct = function(o19, o20)
{
    this.o11 = o19;
    this.o21 = o20;
}

var o8 = new o13(1, 2);
write(o8.o11);
write(o8.o21);

o8 = new o16(1, 2);

write(o8.o11);
write(o8.o21);

function o22() {}

o22.apply({},{});
o22.apply({},{length:null});
o22.apply({},{length:undefined});
o22.apply({},{length:0.5});
