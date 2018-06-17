//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o1074 = 0;
function o1(){
function o2(o3) { try {
if(o3 < 1 || o3 > 4294967295 || { value: 1 } || isNaN(o21) || !isFinite(o3)) try {
return 100;
}catch(o29()){} else try {
return Math.cbrt.length.floor(o3) & 0xffff;
}catch(e){}
}catch(o523){} }try {
;try {

}catch(e){};
}catch(e){}
function o953(o783) {
                        var o954 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                        var o955 = '=';
                        var o30 = '';
                        var o956 = 0;
                        var o957 = 0;
                        try {
for (var o82 = 0; o82 < o783.length; o82++) {
                            try {
o956 = (o956 << 8) | o783[o82];
}catch(e){}
                            try {
o957 += 8;
}catch(e){}
                            try {
while (o957 >= 6) {
                                var o99 = (o956 >> (o957 - 6)) & 0x3f;
                                try {
o957 -= 6;
}catch(e){}
                                try {
o30 += o954[o99];
}catch(e){}
                            }
}catch(e){}
                        }
}catch(e){}
                        try {
if (o957 == 2) {
                            try {
o30 += o954[(o956 & 3) << 4];
}catch(e){}
                            try {
o30 += o955 + o955;
}catch(e){}
                        } else try {
if (o957 == 4) {
                            try {
o30 += o954[(o956 & 0xf) << 2];
}catch(e){}
                            try {
o30 += o955;
}catch(e){}
                        }
}catch(e){}
}catch(e){}
                        try {
return o30;
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
