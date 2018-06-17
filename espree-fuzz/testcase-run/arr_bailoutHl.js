//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array(10);
try {
o579 = 100;
}catch(e){}
try {
{
        name: 'Symbol with numeric description does not create a numeric property',
        o13: function() {
            var o31 = Symbol('1');
            var o32 = {};

            try {
o32[o31] = 'a string';
}catch(e){}

            try {
o4.o11(undefined, o32[1], "Object should not contain numeric property at index == symbol description");
}catch(e){}
            try {
o4.o11('a string', o32[o31], "Object should contain the symbol property");
}catch(e){}

            try {
o32 = [];
}catch(e){}

            try {
o32[1] = 'the number 1';
}catch(e){}
            try {
o32[o31] = 'the symbol 1';
}catch(e){}

            try {
o4.o11(2, o32.length, "Object has correct length");
}catch(e){}
            try {
o4.o11('the number 1', o32[1], "Object with numeric property has correct value");
}catch(e){}
            try {
o4.o11('the symbol 1', o32[o31], "Object with symbol property has correct value");
}catch(e){}
        }
    };
}catch(e){}
var o1 = 0;

function o2()
{
    try {
o3++;
}catch(e){}
    try {
o3.o4("FAILED");
}catch(e){}
}

function o5(o6, o7, e)
{
    var o9 = 0;
    try {
for(var o10 = o421.o148 & 0xFF00;this.o362;o10++){
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
for(var o7=0;o7<200;o7++)
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