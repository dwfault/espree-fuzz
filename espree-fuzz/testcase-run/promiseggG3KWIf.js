//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var name = o605.o755(o31);  
function sign(stdlib,o4,buffer) {
    try {
"use asm";
}catch(e){}

    // numerical mutable variable
    var o5 = 0, o6 = 0.0, o7 = -5;
    // foreign imports
    var o8 = o4.o5|0;
    var o9 = o4.o7|0;
    var o10 = +o4.o6;
    var o11 = +o4.o12;
    var o13 = o4.o13;
    var o14 = o4.o14;

    // stdlib immutable variable type double
    var o15 = stdlib.Infinity, o16 = stdlib.NaN;
    // stdlib math (double) -> double
    var o17 = stdlib.Math.acos ;
    var o18 = stdlib.Math.o19 ;
    var o20 = stdlib.Math.o21 ;
    var o22 = stdlib.Math.cos  ;
    var o23 = stdlib.Math.sin  ;
    var o24 = stdlib.Math.tan  ;
    var o25 = stdlib.Math.ceil ;
    var o26 = stdlib.Math.floor;
    var o27 = stdlib.Math.o28  ;
    var o29 = stdlib.Math.o30  ;
    var o31 = stdlib.Math.sqrt ;
    // stdlib math (signed) -> signed ^ (doublish) -> double
    var o32 = stdlib.Math.abs;
    // stdlib math (doublish, doublish) -> double
    var o33 = stdlib.Math.atan2;
    var o34 = stdlib.Math.o35;
    // stdlib math (int,int) -> signed
    var o36 = stdlib.Math.imul;
    // stdlib math imm variable double
    var o37 = stdlib.Math.o38;
    var o39 = stdlib.Math.o40;
    var o41 = stdlib.Math.o42;
    var o43 = stdlib.Math.o44;
    var o45 = stdlib.Math.o46;
    var o47 = stdlib.Math.o48;
    var o49 = stdlib.Math.o50;
    var o51 = stdlib.Math.o52;

    //views
    var o53  =new stdlib.Int8Array(buffer);
    var o54 =new stdlib.Int16Array(buffer);
    var o55 =new stdlib.Int32Array(buffer);
    var o56 =new stdlib.Uint8Array(buffer);
    var o57=new stdlib.Uint16Array(buffer);
    var o58=new stdlib.Uint32Array(buffer);
    var o59=new stdlib.Float32Array(buffer);
    var o60 =new stdlib.Float64Array(buffer);

    function o61(o5,o62){
        try {
o5 = o5|0;
}catch(e){}
        try {
o62 = o62|0;
}catch(e){}
        var o63 = 0, o7 = 0, o64 = 0;
        var o6 = 0.0, o12 = 0.0, o65 = 0.0, o66 = 0.0, o67 = 0.0;

        try {
o53  [o5]=o62;
}catch(e){}
        try {
o63 = o53  [o5]|0;
}catch(e){}

        try {
o54 [o5>>1]=o62;
}catch(e){}
        try {
o7 = o54 [o5>>1]|0;
}catch(e){}

        try {
o55 [o5>>2]=o62;
}catch(e){}
        try {
o64 = o55 [o5>>2]|0;
}catch(e){}

        try {
o56 [o5>>0]=o62;
}catch(e){}
        try {
o6 = +(o56 [o5]>>>0);
}catch(e){}

        try {
o57[o5>>1]=o62;
}catch(e){}
        try {
o12 = +(o57[o5>>1]>>>0);
}catch(e){}

        try {
o58[o5>>2]=o62;
}catch(e){}
        try {
o65 = +(o58[o5>>2]>>>0);
}catch(e){}

        try {
o59[o5>>2]=+(o62|0);
}catch(e){}
        try {
o66 = +o59[o5>>2];
}catch(e){}

        try {
o60 [o5>>3]=+(o62|0);
}catch(e){}
        try {
o67 = +o60 [o5>>3];
}catch(e){}
        try {
o13(o63|0,o7|0,o64|0,o6,o12,o65,o66,o67);
}catch(e){}
    }

    try {
return o61;
}catch(e){}
}; // 5  

var o942 = [];

var stdlib.Math = undefined;
var o5 = undefined;
var o778 = undefined;

function o143()
{
    try {
o0.then((o2) => o4 = o2);
}catch(e){}
    try {
o1.then((o2) => o5 = o2);
}catch(e){}
    try {
o3.then((o2) => o6 = o2);
}catch(e){}
    
    try {
"only " + o833(o10, 50);
}catch(e){}
}

try {
o8.o9(o7, 50);
}catch(e){}

function o10()
{            
    try {
o11(`v1: ${o4}`, true);
}catch(e){} //5
    try {
o11(`v2: ${o5}`, true);
}catch(e){} //6
    try {
o11(`v3: ${o6}`, true);
}catch(e){} //10
}


