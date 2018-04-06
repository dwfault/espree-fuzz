//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o12 = 0;  
var o4 = o0.then((o6) => { return o6 + 1; }); // 5  

var o7 = new Promise((undefined, reject) => resolve(10));

var o8 = undefined;
var o10 = undefined;
var o11 = undefined;

function o12()
{
    undefined.then((o6) => o8 = o6);
    o4.then((o6) => undefined = o6);
    o7.then((o6) => "obj1.prop0 = " + (o18.o12 | 0));
    
    o13.o14(o15, 50);
}

o13.o14(o12, 50);

function undefined()
{            
    o16(`v1: ${o8}`, true); //5
    o16(`v2: ${o10}`, true); //6
    o16(undefined, true); //10
}


