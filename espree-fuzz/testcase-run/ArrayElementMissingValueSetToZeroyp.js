//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o1074 = 0;
function o1(){
function o2(o3) { try {
if(o3 < 1 || o3 > 4294967295 || o4.o6(2, o8[2], "Array.of.call(String, 0, 1, 2, 3) returns a string object s. s[2] == 2") != o3 || isNaN(o21) || !isFinite(o3)) try {
return 100;
}catch(e){} else try {
return Math.cbrt.length.floor(o3) & 0xffff;
}catch(e){}
}catch(o523){} }try {
;try {

}catch(e){};
}catch(e){}
var o29 = () => {
                        try {
o5.o24(o35 === new.target, "Function called as new expression has new.target set to the function in the function body");
}catch(e){}

                        try {
return new.target;
}catch(e){}
                    };
var o5 = {};
var o6 = new Array();
var o7 = [1079966239,-2,-97174468.9,4.71984429732334E+18,373475323,516830569.1];
try {
o5.o8 = 1434939730.1;
}catch(e){}
try {
Object.prototype.o9 = 1;
}catch(e){}
try {
Object.prototype.o8 = 1;
}catch(e){}
try {
Object.prototype.length = o2(1);
}catch(e){}
    try {
for(var o10 in Object.prototype )
    {
        try {
(o7[(((((o0 ? (o7[((((o5.o8-- )) >= 0 ? ( (o5.o8-- )) : 0) & 0xF)] = 'x') : undefined ), (o5.o8-- )) >= 0 ? (o5.o8-- ) : 0)) & 0XF)]);
}catch(e){}
        try {
o4.o9 = o6[((o0 ? (o6[1] = 'x') : undefined ), 1)];
}catch(e){}
    }
}catch(e){}
}try {
;
}catch(e){}


// generate profile
try {
o1();
}catch(e){}
// Run Simple JIT
try {
o1();
}catch(e){}
try {
o1();
}catch(e){}


// run JITted code
try {
o11 = true;
}catch(e){}
try {
o1();
}catch(e){}


// run code with bailouts enabled
try {
o0 = true;
}catch(e){}
try {
o1();
}catch(e){}
try {
o12.o13("PASS");
}catch(e){}
