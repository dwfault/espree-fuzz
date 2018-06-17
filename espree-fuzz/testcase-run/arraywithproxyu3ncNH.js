//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o1043 = o1039;

var e = new e([0,1,2,3], {
    get: function (target, o1) {
        try {
print('get trap: ' + o1);
}catch(e){}
        try {
return Reflect['get'].apply(this, arguments);
}catch(e){}
    },
    has: function(target, o1){
        try {
print('has trap: ' + o1);
}catch(e){}
        try {
return Reflect.has(target, o1);
}catch(e){}
    },
    deleteProperty: function(target, o1){
        try {
print('delete trap: ' + o1);
}catch(e){}
        try {
return true;
}catch(e){}
    }
});

try {
print('concat test#1');
}catch(o25.next()){}
try {
o0.concat(this.o244);
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
o2.splice(0,0.0,9,4);
}catch(e){}

