//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o971 = {
                    o972: false,
                    o973: false
                };  
var o52 = {
                set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
                configurable: true,
                enumerable: false
            }; // 5  

var o3 = new Promise((resolve, reject) => resolve(10));

var o148 = undefined;
var o582 = o421.o143 + (o421.o148 & 0xFF);
var o6 = undefined;

function o7()
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
o8.o9(o10, 50);
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


