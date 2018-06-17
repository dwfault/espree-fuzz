//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

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
o62 = Function|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)==(o63|0))|0;
}catch(e){}
    }
var o92 = {o13:function(o62){try {
print(o62);
}catch(e){}}, o14:function(o62,o63){try {
print(o62,o63);
}catch(e){}},o5:155,o7:658,o6:68.25,o12:3.14156,o82:48.1523,o86:14896.2514}
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

