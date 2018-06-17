//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new e([], {
    get: function (target, o1) {
        try {
print('get trap: ' + o1);
}catch(e){}
        try {
return Reflect['get'].apply(this, arguments);
}catch(e){}
    }
});

var o12 = {
                        get __proto__() { try {
return "proto";
}catch(e){} },
                        set __proto__(value) { try {
this.o17 = value;
}catch(e){} }
                    };

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

