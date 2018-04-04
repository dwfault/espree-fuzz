//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Promise((resolve, reject) => resolve(5));  
var o4 = o0.then((o6) => { return o6 + 1; }); // 5  

var o7 = new Promise((resolve, reject) => resolve(10));

var o8 = undefined;
var o10 = undefined;
var o11 = undefined;

function o12()
{
    o0.then((o6) => o8 = o6);
    o4.then((o6) => o10 = o6);
    o7.then((o6) => o11 = o6);
    
    o13.o14(o15, 50);
}

o13.o14(o12, 50);

function o15()
{            
    o16(`v1: ${o8}`, true); //5
    o16(`v2: ${o10}`, true); //6
    o16(`v3: ${o11}`, true); //10
}


