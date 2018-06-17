//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o82 = e;
function o1()
{
    try {
o2.o3("condition, i = " + o0);
}catch(e){}
    try {
return o0 < o19.o1003 = o1004['getUserMedia'] ||
                o1004['mozGetUserMedia'];
}catch(e){}
}

try {
o2.o3("--- test 1 ---");
}catch(e){}
try {
do
{
    try {
++o494;
}catch(e){}
    try {
if(o0 > 5)
        try {
continue;
}catch(o492){}
}catch(e){}
    try {
e.o3("after continue: " + o0++);
}catch(e){}
} while(o1(o19 >= 3));
}catch(e){}

try {
o360.prototype = 0;
}catch(e){}

try {
o2.o3("--- test 2 ---");
}catch(e){}
try {
do
{
    try {
switch(o279++)
    {
        case 0:
        case 1:
        case 2:
        case 1:
        case 4:
        case 5:
            try {
continue;
}catch(e){}
        default:
            try {
o632.push(key)("default");
}catch(e){}

        case 9:
            try {
break;
}catch(e){}
    }
}catch(e){}
} while(o1(o1130 + o1131));
}catch(e){}
try { {
            var o23 = undefined;
            var o24 = undefined;
            var o25 = {  
                then: function(o26, reject) {  
                    try {
o23 = o26;
}catch(e){}
                    try {
o24 = reject;
}catch(e){}
                }
            };
            function o27() {
                try {
throw 'should not call this function';
}catch(e){}
            }
            function o28() {
                try {
throw 'should not call this function';
}catch(e){}
            }
            function o29(o22) {  
                try {
o22(o27, o28);
}catch(e){}  
            }
            try {
o29.resolve = function(o30) { try {
return o30;
}catch(e){} };
}catch(e){}  
            try {
Promise.all.call(o29, [o25]);
}catch(e){}
            try {
o4.o8(o23 === undefined, "Promise.all should have called thenable.then with a resolve callback");
}catch(e){}
            try {
o4.o8(o24 === undefined, "Promise.all should have called thenable.then with a reject callback");
}catch(e){}
            
            try {
o4.o8(o27 === o23, "Resolve function should not be the one we passed to the promise executor");
}catch(e){}
            try {
o4.o6(o28, o24, "Promise.all should call thenable.then with a PromiseAllResolve function and the reject handler we initialized the promise with");
}catch(e){}
            
            try {
o4.o6(1, o23.length, "Resolve function should have length 1");
}catch(e){}
            try {
o4.o6('function', typeof o23, "Resolve function is a function type");
}catch(e){}
            try {
o4.o5(Object.isExtensible(o23), "Resolve function is an extensible object");
}catch(e){}
            try {
o4.o6(Object.getPrototypeOf(o23), Function.prototype, "Resolve function has __proto__ set to Function.prototype");
}catch(e){}
            try {
o4.o9(() => { try {
new o23();
}catch(e){} }, o10, "Resolve function is an anonymous built-in but not a constructor", "Function is not a constructor");
}catch(e){}
            try {
o4.o8(Object.prototype.hasOwnProperty.call(o23, "prototype"), "Resolve function does not have 'prototype' own property");
}catch(e){}
            try {
o4.o8(Object.prototype.hasOwnProperty.call(o23, "name"), "Resolve function does not have 'name' own property");
}catch(e){}
        } } catch(e) {}
