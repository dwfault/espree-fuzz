//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0;

Object.prototype.o3 ="o.p.u";
Object.prototype.o4 ="o.p.x";
Object.prototype.o5 = "o.p.y";
Object.prototype.o6 = "o.p.z";

var o7 = function(){};
o7.prototype.o4 = "f.p.x";
o7.prototype.o8 = "f.p.q";
o7.prototype.o6 = "f.p.z";
o7.prototype.o9 = "f.p.r";

var o10 = new o7();

o10.o4 = "a.x";
o10.o8 = "a.q";
o10.o3 = "a.q";

for (o0 in o10)
{
  o11.o12(o0+":"+o10[o0]);
}

var o13 = new Object();
o13.o4="hello";
o13.o5="world";

var o14  = new o15();
o14.o16 = "pqr";

o11.o12("Object a");

for (o0 in o13)
{
    o11.o12(o0);
}

o11.o12("Math");

for (o0 in Math)
{
    o11.o12(o0);
}


o11.o12("Array");

for (o0 in Array)
{
    o11.o12(o0);
}

o11.o12("Array.prototype");

for (o0 in Array.prototype)
{
    o11.o12(o0);
}

o11.o12("Date");
for (o0 in Date)
{
    o11.o12(o0);
}

o11.o12("Number");
for (o0 in Number)
{
    o11.o12(o0);
}

o11.o12("String");
for (o0 in String)
{
    o11.o12(o0);
}


o11.o12("Object.prototype");

Object.prototype.o6 = "me too";

for (o0 in Object.prototype)
{
    o11.o12(o0);
}

o11.o12("Object");

for (o0 in Object)
{
    o11.o12(o0);
}

o11.o12("Array.prototype.sort");

for(o0 in Array.prototype.sort)
{
  o11.o12(o0);
}


o11.o12("function foo");

function o15()
{
  this.o23  = "xyz";
}


for(o0 in o15)
{
  o11.o12(o0);
}

Array.prototype.sort.o4 = "hello"
var o14 = Array.prototype.sort;

for (o0 in Array.prototype.sort)
{
  o11.o12(o0);
}

o11.o12("me here");


o11.o12("prototype chain");

Object.prototype.o4 = 10;

function o24() { }
function o25() { }

o25.prototype = new o24();

o5 = new o25();

for (o0 in o5) { o11.o12(o0); }

var o26 = "StringType";

String.prototype.o27 = "s.p.zz";

var o28 = new String("StringObject");
o28.o29 = "bString.xx";
o28.o30 = "bString.yy";


o11.o12("Literal String");
for( o0 in o26) { o11.o12(o0); }

o11.o12("String Object");
for( o0 in o28) { o11.o12(o0); }


function o31(){}
o31.prototype[5]=20;
var o13 = new o31();
for (var o0 in o13) { o11.o12(o0); }


Array.prototype[3] = 3;
var o13 = new Array();
for (var o0 in o13) { o11.o12(o0); }

for ( o0 in null ) { o11.o12(o0); }
