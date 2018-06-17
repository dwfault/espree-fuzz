//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function call() {}

var o26 = [
                Promise.resolve(0),
                o14(Promise.resolve(1)),
                Promise.resolve(2).then(o10 => { 
                    try {
o0(`Test #${index} - Success handler #1a called with result = '${o10}' (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
}catch(e){}
                    try {
return 3;
}catch(e){}
                }).then(o10 => { 
                    try {
o0(`Test #${index} - Success handler #1b called with result = '${o10}' (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
}catch(e){}
                    try {
return 4;
}catch(e){}
                }).catch(o11 => {
                    try {
o0(`Test #${index} - Catch handler #1 called with err = ${o11}`);
}catch(e){}
                })
            ];

var o22 = 1

function o67(o62,o63) {
        try {
o62 = o421.o557;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|o1("appMinorVersion"))==(Object.getOwnPropertyNames(o32)|0))|0;
}catch(e){}
    }
var o92 = {
      name: "Define property 'length' as accessor property on array: check that it throws TypeError.",
      o25: function () {
        try {
o32.o44(
          function() { try {
Object.defineProperty([], "length", {configurable: false, get: function() {try {
return 2;
}catch(e){}}});
}catch(e){} },
          o62);
}catch(e){}
        try {
o32.o44(
          function() { try {
Object.defineProperty(Array.prototype, "length", {configurable: false, get: function() {try {
return 2;
}catch(e){}}});
}catch(e){} },
          o62);
}catch(e){}
      }
    }
var buffer = new ArrayBuffer(1<<20);

var o93 = o3(global,o92,buffer);

try {
for (var o77=0; o77<all.length; ++o77) {
    try {
for (var o83=0; o83<all.length; ++o83) {
        try {
print("f1 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o82   (all[o77],all[o83])));
}catch(e){}
        try {
print("f2 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o86   (all[o77],all[o83])));
}catch(e){}
        try {
print("f3 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o91   (all[o77],all[o83])));
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

