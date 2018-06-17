//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Promise((resolve, reject) => resolve(5));  
var o1 = o0.then((o2) => { return o2 + 1; }); // 5  

var o3 = new Promise((resolve, reject) => resolve(10));

var o4 = undefined;
var o5 = undefined;
var o6 = undefined;

function o7()
{
    o0.then((o2) => o4 = o2);
    o1.then((o2) => o5 = o2);
    o3.then((o2) => o6 = o2);
    
    o8.o9(o10, 50);
}

o8.o9(o7, 50);

function o10()
{            
    o11(`v1: ${o4}`, true); //5
    o11(`v2: ${o5}`, true); //6
    o11(`v3: ${o6}`, true); //10
}


