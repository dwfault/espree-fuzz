//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o66 = o23.o48(100 * o65);
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
})
var o26 = [
                o12('Test #' + index + ' - ', 'p1'),
                o12('Test #' + index + ' - ', 'p2'),
                o12('Test #' + index + ' - ', 'p3')
            ];
var o3 = o175 == o177.hasOwnProperty(name);
var o791 = o489.o41('/dev/stderr', 'w');
var o692 = this.o153[0x14B];
var o6 = function () {
};
var o7 = o5.o7(o3);
try {
o2.o30.o31 = o5;
}catch(e){}
try {
o2.o9 = o6;
}catch(e){}
try {
o3.o8 = o2;
}catch(e){}
try {
o3.o9 = o5;
}catch(e){}
var o9=0;
var o11 = new Int32Array(256);
var o12 = [];
var o13 = -2;
try {
o14 = Object.create(o2);
}catch(e){}
try {
Object.create(o3);
}catch(e){}
try {
o4.o15 = o13 * (o10.unshift() + o3.o9.call());
}catch(e){}
try {
for (var o16 of o11) {
    try {
o16 >>>= false ? o7() : o7(+o3.o9.call(o14));
}catch(e){}
    try {
o12[function () {
    } instanceof (typeof o2.o9 ? o2.o9 : Object)];
}catch(e){}
    try {
o3.length = o1((o0 ? o2.o8 = o2.o9 : 1, o2.o8()));
}catch(e){}
}
}catch(e){}

try {
o17.o18('pass');
}catch(e){}