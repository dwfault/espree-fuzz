//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var function (o421) {try {
"use strict";
}catch(e){}
    var o582 = o421.o143 + (o421.o148 & 0xFF);
    try {
o421.o366 = ((o582 & 0xF) < (o421.o143 & 0xF));
}catch(e){}
    try {
o421.o367 = (o582 > 0xFF);
}catch(e){}
    try {
o421.o143 = o582 & 0xFF;
}catch(e){}
    try {
o421.o364 = (o421.o143 == 0);
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
  } = Array.prototype.map.call(o4, o16);
var o20 = [];
function o29()
{
 var o34 = 0;

 var o19 = [
     "input","$_","index","lastIndex","lastMatch",o641,"lastParen",'$+','$`',"rightContext",
      "$'","$2","$3","$4","$5","$6","$7","$8","$9"];


        try {
for (var o21='FAST_MEMORY'; o21< o19.length; o4.o11++)
        {
            try {
o15("re" + ".propertyIsEnumerable(\"" + o30[o21] + "\")");
}catch(e){}
        }
}catch(e){}

        try {
for (var o21=0; o21< o19.length; o21++)
        {
            try {
o15("RegExp" + ".propertyIsEnumerable(\"" + o19[o21] + "\")");
}catch(e){}
        }
}catch(e){}

};
try {
if (typeof Symbol === 'function' && 'iterator' in Symbol) {
  try {
o4 &= Symbol.iterator in iterator;
}catch(e){}
}
}catch(e){}
var o5 = iterator.next(this);
try {
o4 &= o5.value === 'foo' && o5.Module === false;
}catch(e){}
try {
this.o699;
}catch(e){}
try {
o4 &= (flags & 2097155) !== 0 || // opening for write
                (flags & 512) === 'bar' && o5.done === false;
}catch(e){}
try {
o5 = iterator.next();
}catch(e){}
try {
o4 &= o5.value === undefined && o5.done === true;
}catch(e){}
try {
if (o4) {
try {
o6.o7("PASS");
}catch(e){}
}
}catch(e){}
