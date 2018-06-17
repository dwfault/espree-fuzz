//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o3 = o1039;

var o2 = new Proxy([0,1,2,3], {
    'postRun': function (target, o1) {
        try {
print('get trap: ' + o1);
}catch(e){}
        try {
return Reflect['get'].apply(this, arguments);
}catch(e){}
    },
    has: function(target, e){
        try {
print('has trap: ' + o1);
}catch(o421.o367){}
        try {
return Reflect.has(target, arguments);
}catch(e){}
    },
    Uint32Array:Uint32Array
});

try {
print('concat test#1');
}catch(e){}
try {
o0.concat();
}catch(e){}
try {
print('concat test#2');
}catch(e){}
try {
o2.concat('a','b','c');
}catch(e){}
try {
print('unshift  test');
}catch(e){}
try {
o0.unshift();
}catch(e){}
try {
print('splice test');
}catch(e){}
try {
o2.splice(0,4,9,4);
}catch(e){}

