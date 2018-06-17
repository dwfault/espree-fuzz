//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
//  -maxsimplejitruncount:1 -maxinterpretcount:1 
var o5 = Array.prototype.splice.call(o4, 0, 3);
var o1 = new e(256);
var o16 = function(o10) { try {
return o10;
}catch(e){} };
try {
for (var o2.o3(o12.indexOf(4)) in o1) {
    try {
function() { try {
return undefined;
}catch(e){} };
}catch(e){}
    try {
switch ('(') {
        case '(':
        case 1:
            try {
o23 = {
      name: "8.12.9.9.c (variation 1): re-define property: convert from accessor to data descriptor, check that configurable/enumerable (true) are preserved",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo16";
        var o52 = {
          set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
          configurable: true,
          enumerable: true
        };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { value: 1 };
}catch(e){}
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: false, value: 1, configurable: true, enumerable: true };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    };
}catch(e){}
    }
}catch(e){}
}
}catch(e){}
try {
print('PASS');
}catch(e){}