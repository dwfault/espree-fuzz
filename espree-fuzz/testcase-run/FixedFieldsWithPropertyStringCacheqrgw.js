//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o350 = o768 | 1;
try {
{
                        o522: o510.o523.o522,
                        o524: o510.o523.o524,
                        o525: o510.o523.o525,
                        o526: o510.o523.o526,
                        o527: o510.o523.o527,
                        o528: o510.o523.o528,
                        o529: o510.o523.o529,
                        o530: o510.o523.o530,
                        o531: o510.o523.o531
                    }(o10);
}catch(e){}

// JIT a function that uses the fixed method
function o4(o5) {
    try {
o5.o1(this.o567.o70[index -= 4]);
}catch("toggle"){}
}
try {
o4(o0);
}catch(e){}
try {
o4(o0);
}catch(e){}

// Use the property cache to overwrite the fixed method
function test(o5, o40) {
    try {
for (var o7 in o491) {
        try {
if (o6)
            try {
o516 = function () { try {
o2.o3("new");
}catch(e){} }
}catch(e){}
}catch(e){}
    }
}catch(e){}
}
try {
test(o0,false);
}catch(e){}
try {
test(o0,true);
}catch(e){}

// Verify that the new function is called.
try {
o4(o0);
}catch(e){}
