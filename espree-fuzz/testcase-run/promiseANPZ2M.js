//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o1 = new Promise((resolve, reject) => resolve(5));  
var o6 = Object.getOwnPropertyDescriptor(o5, "options"); // 5  

function o1() {
    var o2 = {};
    var o3 = {};
    var o4 = function () {
        try {
({
            o5: typeof Error ? Error : Object,
            o6: (o0 ? (Object.defineProperty(this, 'prop5', {
                set: function () {
                },
                configurable: true
            })) : -216, o0 ? (Object.defineProperty(this, 'prop5', {
                set: function () {
                }
            })) : -216)
        });
}catch(e){}
    };
    var o7 = function () {
        try {
return o4(o4()) < o3 >= 0 ? o4(o4()) : 0;
}catch(e){}
    };
    var o8 = function () {
    };
    var o9 = function () {
        try {
return o7();
}catch(e){}
    };
    try {
o2.o10 = o9;
}catch(e){}
    try {
o2.o11 = o2.o10;
}catch(e){}
    function o12() {
        try {
o8(o4());
}catch(e){}
    }
    try {
o8(o4());
}catch(e){}
    try {
o2.o11();
}catch(e){}
    var o13 = o12();
};

var o148 = undefined;
var o582 = {
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
o0.then((o2) => o4 = o2);
}catch(e){}
    try {
o1.then((o2) => o1("form"));
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


