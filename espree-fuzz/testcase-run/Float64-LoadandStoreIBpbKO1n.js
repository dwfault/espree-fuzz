//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o1,buffer) {
    try {
o8[4294967294];
}catch(o1){}
    function o104(o49, o50, o73) {
                try {
o95(o49, o50, o73, this);
}catch(e){}

                try {
o16++;
}catch(e){}

                try {
if (o929 == 0x8 && o421.o643 == 0x7FFF) {
                    try {
return true;
}catch(e){}
                }
}catch(o123){}

                try {
return false;
}catch(e){}
            };
    //views
    var o3  =new stdlib.set.o500(buffer);

    function o4(){
        var o689 = o474.o687(o479.o502.o333, o479.name)
        var o6 = o2(1.5);
        try {
o3[1] = o6;
}catch(e){}
        try {
return +(o3[1])
}catch(e){}
    }
    try {
return o4;
}catch(e){}
}

function test(o15, o16, o17) {

                var o3 = [o15], o4 = [o16, o17];
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable] undefined');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = null;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==null');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==false');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = '';
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==\'\'');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 0;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = +0.0;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==+0.0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = -0.0;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==-0.0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = NaN;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==NaN');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = undefined;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==undefined');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==true');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 'abc';
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]=\'abc\'');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 0.1;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==0.1');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = -0.1;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==-0.1');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = Symbol();
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==Symbol()');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = {};
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]=={}');
}catch(e){}

                try {
delete o4[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable] deleted');
}catch(e){}
            }
var o7 = o181.length
var buffer = new ArrayBuffer(1<<"Object.create(BoundF) instanceof f");

var e = o0(global,o7,buffer);

try {
o9.o10(o8());
}catch(e){}
try {
o9.o10(o8());
}catch(e){}
