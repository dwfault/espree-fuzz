//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Promise((resolve, reject) => resolve(5));  
var o1 = o0.then((o2) => { try {
return o2 + 1;
}catch(e){} }); // 5  

var o52 = {
          set: function (o72) { try {
o0.writeln("setter was called");
}catch(e){} try {
this.o56 = o72;
}catch(e){} },
          configurable: true,
          enumerable: true
        };

function o34() {
                try {
return { o65: 1 };
}catch(e){} // Use x_101 to start a unique path
            };
var o8 = {
  get: function () {
    try {
return 0x1234567 >> 1;
}catch(e){}
  },
  set: function () { }
};
var o6 = undefined;

function o7()
{
    try {
o0.then((o2) => o150 = o2);
}catch(e){}
    try {
o1.then((o2) => o1("form"));
}catch(e){}
    try {
o3.then((o2) => o16 = o2);
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


