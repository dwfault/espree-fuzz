//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = Boolean(true);
try { 0xFF; } catch(function () {
            var o18 = undefined;
            var o19 = undefined;  
            try {
new Promise(function(resolve, reject) {  
                try {
o18 = resolve;
}catch(e){}
                try {
o19 = reject;
}catch(e){}  
            });
}catch(e){}  
            try {
o4.o8(o18 === undefined, "new Promise should provide a resolve function");
}catch(e){}
            try {
o4.o8(o19 === undefined, "new Promise should provide a reject function");
}catch(e){}

            try {
o4.o6(1, o18.length, "Resolve function should have length 1");
}catch(e){}
            try {
o4.o6('function', typeof o18, "Resolve function is a function type");
}catch(e){}
            try {
o4.o5(Object.isExtensible(o18), "Resolve function is an extensible object");
}catch(e){}
            try {
o4.o6(Object.getPrototypeOf(o18), Function.prototype, "Resolve function has __proto__ set to Function.prototype");
}catch(e){}
            try {
o4.o9(() => { try {
new o18();
}catch(e){} }, o10, "Resolve function is an anonymous built-in but not a constructor", "Function is not a constructor");
}catch(e){}
            try {
o4.o8(Object.prototype.hasOwnProperty.call(o18, "prototype"), "Resolve function does not have 'prototype' own property");
}catch(e){}
            try {
o4.o8(Object.prototype.hasOwnProperty.call(o18, "name"), "Resolve function does not have 'name' own property");
}catch(e){}
            
            try {
o4.o6(1, o19.length, "Reject function should have length 1");
}catch(e){}
            try {
o4.o6('function', typeof o19, "Reject function is a function type");
}catch(e){}
            try {
o4.o5(Object.isExtensible(o19), "Reject function is an extensible object");
}catch(e){}
            try {
o4.o6(Object.getPrototypeOf(o19), Function.prototype, "Reject function has __proto__ set to Function.prototype");
}catch(e){}
            try {
o4.o9(() => { try {
new o19();
}catch(e){} }, o10, "Reject function is an anonymous built-in but not a constructor", "Function is not a constructor");
}catch(e){}
            try {
o4.o8(Object.prototype.hasOwnProperty.call(o19, "prototype"), "Reject function does not have 'prototype' own property");
}catch(e){}
            try {
o4.o8(Object.prototype.hasOwnProperty.call(o19, "name"), "Reject function does not have 'name' own property");
}catch(e){}
        }) {}try { try {
throw o149;
}catch(e){} } catch(e) {}

var o1 = Boolean(true);
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
o2.o3('Pass');
}catch(e){}
