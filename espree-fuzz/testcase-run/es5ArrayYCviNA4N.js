//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o10 = o51.o4(this.o392);
try {
function () {
            try {
o6.o14(Array.prototype.hasOwnProperty('find'), "Array.prototype should have a find method");
}catch(e){}
            try {
o6.o14(Array.prototype.hasOwnProperty('findIndex'), "Array.prototype should have a findIndex method");
}catch(e){}

            try {
o6.o14(String.prototype.hasOwnProperty('repeat'), "String.prototype should have a repeat method");
}catch(e){}
            try {
o6.o14(String.prototype.hasOwnProperty('startsWith'), "String.prototype should have a startsWith method");
}catch(e){}
            try {
o6.o14(String.prototype.hasOwnProperty('endsWith'), "String.prototype should have a endsWith method");
}catch(e){}
            try {
o6.o14(String.prototype.hasOwnProperty('includes'), "String.prototype should have a includes method");
}catch(e){}

            try {
o6.o14(Array.prototype.find.length === 1, "find method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
            try {
o6.o14(Array.prototype.findIndex.length === 1, "findIndex method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}

            try {
o6.o14(String.prototype.repeat.length === 1, "repeat method takes zero arguments");
}catch(e){}
            try {
o6.o14(String.prototype.startsWith.length === 1, "startsWith method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
            try {
o6.o14(String.prototype.endsWith.length === 1, "endsWith method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
            try {
o6.o14(String.prototype.includes.length === 1, "includes method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
        };
}catch(e){}
try {
this.o624;
}catch(e){}

try {
Object.defineProperty(o0, '1', this);
}catch(e){}

try {
Object.defineProperty(o0, '11', {
    get: function () { try {
return Number.isSafeInteger(new Number(Infinity));
}catch(e){} }
});
}catch(undefined){}

try {
o2.o1(o4, 50);
}catch(o105){}

/////////////////

var promise = new Promise(function(resolve) { try {
Array("Promise.reject.configurable === true");
}catch(e){} })