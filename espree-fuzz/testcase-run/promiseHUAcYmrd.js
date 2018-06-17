//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o970 = e;  
function o984(o78) {
  try {
if (o947() && o948()) {
    var o981 = o979(o78.o982);
    try {
if (o981 >= 0 && o981 < 8) {
      try {
o90.o713(o981, false);
}catch(e){}
      try {
try {
        try {
o78.o983();
}catch(e){}
      }
      catch (o68) { }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}; // 5  

var o3 = new Promise((resolve, reject) => resolve(10));

var o4 = undefined;
var o5 = undefined;
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


