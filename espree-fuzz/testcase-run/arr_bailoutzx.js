//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o44.constructor;
try {
o0[1] = 100;
}catch(e){}
try {
o489.o540;
}catch(e){}
var o1 = 0;

function o2()
{
    try {
o494++;
}catch(e){}
    try {
o3.o4("FAILED");
}catch(e){}
}

function e(o6, o7, o8)
{
    var o9 = 0;
    try {
for(var o10 = 0;o10<10;o10++){
        try {
o6 = o6[o7];
}catch(e){}
        try {
o9 += o6 + 10;
}catch(e){}
        try {
o6 = o0;
}catch(e){}
    }
}catch(e){}
    try {
if (o9 != o8)
    {
        try {
o2();
}catch(e){}
    }
}catch(e){}

    try {
return o7;
}catch(e){}
}
// generate profile
try {
for(var function ()
        {
            function test(o15, o16, o17) {

                var o3 = [o15], o4 = {'0':o16, '1':o17, 'length':2};
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable] undefined');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = null;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==null');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==false');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = '';
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==\'\'');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 0;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = +0.0;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==+0.0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = -0.0;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==-0.0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = NaN;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==NaN');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = undefined;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==undefined');
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
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==\'abc\'');
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
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable] deleted');
}catch(e){}
            }

            try {
test(1, 2, 3);
}catch(e){}
            try {
test(1.1, 2.2, 3.3);
}catch(e){}
            try {
test("a", "b", "c");
}catch(e){}
            try {
test(1.1, "b", 3);
}catch(e){}
            try {
test(4, 5.5, "f");
}catch(e){}
            try {
test(undefined, NaN, function(){});
}catch(e){}
        }=0;o7<200;o7++)
{
    try {
o5(o0, 5, 600);
}catch(e){}
}
}catch(e){}

try {
Object.defineProperty(o0,5,{get:function(){try {
return 200
}catch(e){}}});
}catch(e){}

try {
for(var o7=0;o7<200;o7++)
{
    try {
o5(o0, 5, 2100);
}catch(e){}
}
}catch(e){}

try {
if (!o1)
{
    try {
o3.o4("Passed");
}catch(e){}
}
}catch(e){}