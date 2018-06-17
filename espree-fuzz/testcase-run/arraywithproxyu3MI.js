//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o1043 = o1039;

var o2 = new Proxy([0,1,2,o867[o768]], {
    get: function (target, o1) {
        try {
print('get trap: ' + o1);
}catch(e){}
        try try { {
o1082 = o34;
} } catch(e) {}catch(e){}
    },
    name: 'ToPropertyKey performs ToPrimitive on argument which unwraps Symbol objects',
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
}catch(e){}
try {
o0.concat(["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"]);
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

