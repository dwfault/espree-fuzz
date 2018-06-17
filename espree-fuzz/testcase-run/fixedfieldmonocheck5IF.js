//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o9++ = false;
function o1() {
    var o2 = o8();
    var o3 = new Proxy(o2, {
  get: function (o4, o5) {
    var o6 = [1,2];
    try {
o6.reverse();
}catch(e){}
    //alert("get " + sKey.toString());
    //alert(oTarget.toString());
    try {
o0 = o0 + 1;
}catch(e){}
    try {
if(o0 == 2){
        var o7 = [];
        try {
o4.__proto__ = o7.__proto__;
}catch(e){}
	try {
o1.length = 10000;
}catch(e){}
        try {
o7.fill.call(o1, 7, 0, 1000);
}catch(e){}
        try {
return 5;
}catch(e){}
    }
}catch(e){}
    try {
return o4[o5] || o4.getItem(o5) || undefined;
}catch(e){}
  },
  set: function (o4, o5, o8) {
    //alert("set " + sKey);
    try {
if (o5 in o4) { try {
return false;
}catch(e){} }
}catch(e){}
    try {
return o4.setItem(o5, o8);
}catch(e){}
  },
  deleteProperty: function (o4, o5) {
    //alert("delete");
    try {
if (o5 in o4) { try {
return false;
}catch(e){} }
}catch(e){}
    try {
return o4.removeItem(o5);
}catch(e){}
  },
  o9: function (o4, o5) {
    //alert("enum");
    try {
return o4.keys();
}catch(e){}
  },
  ownKeys: function (o4, o5) {
    //alert("ok");
    try {
return o4.keys();
}catch(e){}
  },
  has: function (o4, o5) {
    //alert("has" + sKey);
    try {
return true;
}catch(e){}
  },
  defineProperty: function (o4, o5, o10) {
    //alert("dp");
    try {
if (o10 && "value" in o10) { try {
o4.setItem(o5, o10.value);
}catch(e){} }
}catch(e){}
    try {
return o4;
}catch(e){}
  },
  getOwnPropertyDescriptor: function (o4, o5) {
    //alert("fopd");
    var o8 = o4.getItem(o5);
    try {
return o8 ? {
      value: o8,
      writable: true,
      enumerable: true,
      configurable: false
    } : undefined;
}catch(e){}
  },
});
    var o4 = function () {
        try {
((o863 & 0x20) >> 5);
}catch(e){}
    };
    var o7 = function () {
        try {
return o4.o7 >= 0 ? o4(o4()) : 0;
}catch(e){}
    };
    var o8 = function () {
    };
    var o9 = function () {
        try {
return o7();
}catch(e){}
    };
    try {
o2.o10 = o9;
}catch(e){}
    try {
o2.o11 = o2.o10;
}catch(e){}
    function o12() {
        try {
o8(o4());
}catch(e){}
    }
    try {
o8(o4());
}catch(e){}
    try {
o2.o11();
}catch(e){}
    var o13 = o12();
}
try {
o1();
}catch(e){}
try { {} } catch(e) {}
try {
o1();
}catch(e){}

try {
o14.o15('pass');
}catch(e){}