//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o0)
{
    try {
o621.o630 = 1;
}catch(e){}
}
var o28 = e(o25);
function o2() { try {
this[1] = 2;
}catch(e){} }try {
;
}catch(e){}
try {
Object.defineProperty(o1, Array.prototype.findIndex.call(o15, function (o18, o19, o20) {try {
o6.o21("shouldn't visit any element when length is less than zero");
}catch(e){} try {
return true;
}catch(e){}}), { value: 0, writable: false });
}catch(e){}
var o34 = function o34(o35, o36) {
    try {
if (isObject(o35)) {
      try {
if (!isObject(o36)) try {
return "actual is not an object";
}catch(e){}
}catch(e){}
      var o37 = 0, o38 = 0;
      try {
for (var o6 in o35) {
        var o39 = o34(o35[o6], o36[o6]);
        try {
if (o39 !== true) try {
return o39;
}catch(e){}
}catch(e){}
        try {
++o37;
}catch(e){}
      }
}catch(e){}
      try {
for (var o6 in o36) {
        try {
++o38;
}catch(e){}
      }
}catch(e){}
      try {
if (o37 !== o38) {
        try {
return "actual has different number of fields than expected";
}catch(e){}
      }
}catch(e){}
      try {
return true;
}catch(e){}
    } else {
      try {
if (isObject(o36)) try {
return "actual is an object";
}catch(e){}
}catch(e){}
      try {
if (o35 === o36) try {
return true;
}catch(e){}
}catch(e){}
      try {
return "expected: " + o35 + " actual: " + o36;
}catch(e){}
    }
}catch(e){}
  };
try {
o0.__proto__ = o1;
}catch(e){}
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
var o0 = new o2();
try {
o0.__proto__ = o1;
}catch(e){}
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
