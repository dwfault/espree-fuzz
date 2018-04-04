//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }


var o4;

o4 = Object();
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));
o4 = new Object();
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));

o4 = Object(null);
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));
o9 = new Object(null);
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));

o4 = Object(undefined);
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));
o4 = new Object(undefined);
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));

o4 = Object(true);
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));
o4 = new Object(true);
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));

o4 = Object(new Boolean(false));
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));
o4 = new Object(new Boolean(false));
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));

o4 = Object(0);
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));
o4 = new Object(0);
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));

o4 = Object(new Number(10));
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));
o4 = new Object(new Number(10));
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));

o4 = Object("hello");
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));
o4 = new Object("hello");
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));

o4 = Object(new String("hello"));
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));
o4 = new Object(new String("hello"));
write("o:"  + o4 + " typeof(o):" + typeof(o4) + " o.toString():" + Object.prototype.toString.call(o4));

var o14 = new Boolean(true);
o14.o15 = 10;
o4 = new Object(o14);
write("o.x = " + o4.o15);

var o16 = new Number(100);
o16.o15 = 20;
o4 = new Object(o16);
write("o.x = " + o4.o15);

var o17 = new String("world");
o17.o15 = 30;
o4 = new Object(o17);
write("o.x = " + o4.o15);