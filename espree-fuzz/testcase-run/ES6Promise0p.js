//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Promise tests -- verifies the API shape and basic functionality

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    {},
    {
        name: "Promise prototype has correct shape",
        o3: function () {
            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, 'constructor');
            try {
o4.o5(o7.writable, "Promise.prototype.constructor.writable === true");
}catch(e){}
            try {
o4.o8(o7.enumerable, "Promise.prototype.constructor.enumerable === false");
}catch(e){}
            try {
o4.o5(o7.configurable, "Promise.prototype.constructor.configurable === true");
}catch(e){}
            try {
o4.o6('function', typeof o7.value, "typeof Promise.prototype.constructor === 'function'");
}catch(e){}
            try {
o4.o6(1, Promise.prototype.constructor.length, "Promise.prototype.constructor.length === 1");
}catch(e){}

            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, 'catch');
            try {
o4.o5(o7.writable, "Promise.prototype.catch.writable === true");
}catch(e){}
            try {
o4.o8(o7.enumerable, "Promise.prototype.catch.enumerable === false");
}catch(e){}
            try {
o4.o5(o7.configurable, "Promise.prototype.catch.configurable === true");
}catch(e){}
            try {
o4.o6('function', typeof o7.value, "typeof Promise.prototype.catch === 'function'");
}catch(e){}
            try {
o4.o6(1, Promise.prototype.catch.length, "Promise.prototype.catch.length === 1");
}catch(e){}

            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, 'then');
            try {
o4.o5(o7.writable, "Promise.prototype.then.writable === true");
}catch(e){}
            try {
o4.o8(o7.enumerable, "Promise.prototype.then.enumerable === false");
}catch(e){}
            try {
o4.o5(o7.configurable, "Promise.prototype.then.configurable === true");
}catch(e){}
            try {
o4.o6('function', typeof o7.value, "typeof Promise.prototype.then === 'function'");
}catch(e){}
            try {
o4.o6(2, Promise.prototype.then.length, "Promise.prototype.then.length === 2");
}catch(e){}

            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, Symbol.toStringTag);
            try {
o4.o8(o7.writable, "Promise.prototype[@@toStringTag].writable === false");
}catch(e){}
            try {
o4.o8(o7.enumerable, "Promise.prototype[@@toStringTag].enumerable === false");
}catch(e){}
            try {
o4.o5(o7.configurable, "Promise.prototype[@@toStringTag].configurable === true");
}catch(e){}
            try {
o4.o6('string', typeof o7.value, "typeof Promise.prototype[@@toStringTag] === 'string'");
}catch(e){}
            try {
o4.o6('Promise', Promise.prototype[Symbol.toStringTag], "Promise.prototype[@@toStringTag] === 'Promise'");
}catch(e){}
        }
    },
    {
        name: "Promise constructor throwing behavior",
        o3: function () {
            try {
o4.o9(function() { try {
Promise.call();
}catch(e){} }, o10, "Promise throws when not called as a new expression with no this parameter", "Promise: cannot be called without the new keyword");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.call(undefined);
}catch(e){} }, o10, "Promise throws when not called as a new expression if the this parameter is undefined", "Promise: cannot be called without the new keyword");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.call(null);
}catch(e){} }, o10, "Promise throws when not called as a new expression if the this parameter is null", "Promise: cannot be called without the new keyword");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.call({});
}catch(e){} }, o10, "Promise throws when not called as a new expression if the this parameter is not a promise", "Promise: cannot be called without the new keyword");
}catch(e){}

            try {
o4.o9(function() { try {
new Promise();
}catch(e){} }, o10, "new Promise throws when called with no parameter", "Promise: argument is not a Function object");
}catch(e){}
            try {
o4.o9(function() { try {
new Promise(undefined);
}catch(e){} }, o10, "new Promise throws when called with an undefined parameter", "Promise: argument is not a Function object");
}catch(e){}
            try {
o4.o9(function() { try {
new Promise(null);
}catch(e){} }, o10, "new Promise throws when called with a null parameter", "Promise: argument is not a Function object");
}catch(e){}
            try {
o4.o9(function() { try {
new Promise({});
}catch(e){} }, o10, "new Promise throws when called with a non-function parameter", "Promise: argument is not a Function object");
}catch(e){}

            var promise = new Promise(function() { } );

            try {
o4.o9(function() { try {
Promise.call(promise);
}catch(e){} }, o10, "Promise throws when not called as a new expression if the executor argument is not passed", "Promise: cannot be called without the new keyword");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.call(promise, undefined);
}catch(e){} }, o10, "Promise throws when not called as a new expression if the executor argument is undefined", "Promise: cannot be called without the new keyword");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.call(promise, null);
}catch(e){} }, o10, "Promise throws when not called as a new expression if the executor argument is null", "Promise: cannot be called without the new keyword");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.call(promise, {});
}catch(e){} }, o10, "Promise throws when not called as a new expression if the executor argument is non-callable", "Promise: cannot be called without the new keyword");
}catch(e){}

            try {
o4.o9(function() { try {
Promise.call(promise, function() { });
}catch(e){} }, o10, "Promise throws when not called as a new expression if the this parameter is an initialized promise object", "Promise: cannot be called without the new keyword");
}catch(e){}
        }
    },
    {
        name: "Promise.prototype.then throwing behavior",
        o3: function () {
            try {
o4.o9(function() { try {
Promise.prototype.then.call();
}catch(e){} }, o10, "Promise.prototype.then throws when called with no this parameter", "Promise.prototype.then: 'this' is not a Promise object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.prototype.then.call(undefined);
}catch(e){} }, o10, "Promise.prototype.then throws when called with undefined this parameter", "Promise.prototype.then: 'this' is not a Promise object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.prototype.then.call(null);
}catch(e){} }, o10, "Promise.prototype.then throws when called with null this parameter", "Promise.prototype.then: 'this' is not a Promise object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.prototype.then.call({});
}catch(e){} }, o10, "Promise.prototype.then throws when called with non-promise this parameter", "Promise.prototype.then: 'this' is not a Promise object");
}catch(e){}
        }
    },
    {
        name: "Promise.prototype.catch throwing behavior",
        o3: function () {
            try {
o4.o9(function() { try {
Promise.prototype.catch.call();
}catch(e){} }, o10, "Promise.prototype.catch throws when called with no this parameter", "Promise.prototype.catch: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.prototype.catch.call(undefined);
}catch(e){} }, o10, "Promise.prototype.catch throws when called with undefined this parameter", "Promise.prototype.catch: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.prototype.catch.call(null);
}catch(e){} }, o10, "Promise.prototype.catch throws when called with null this parameter", "Promise.prototype.catch: 'this' is not an Object");
}catch(e){}

            try {
o4.o9(function() { try {
Promise.prototype.catch.call({});
}catch(e){} }, o10, "Promise.prototype.catch throws when called with a this parameter which doesn't have a then property", "Promise.prototype.catch: argument is not a Function object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.prototype.catch.call({ then: undefined });
}catch(e){} }, o10, "Promise.prototype.catch throws when called with a this parameter which has a then property with undefined value", "Promise.prototype.catch: argument is not a Function object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.prototype.catch.call({ then: null });
}catch(e){} }, o10, "Promise.prototype.catch throws when called with a this parameter which has a then property with null value", "Promise.prototype.catch: argument is not a Function object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.prototype.catch.call({ then: {} });
}catch(e){} }, o10, "Promise.prototype.catch throws when called with a this parameter which has a then property with non-function value", "Promise.prototype.catch: argument is not a Function object");
}catch(e){}

            try {
o4.o9(function() { try {
Promise.prototype.catch.call({ get then() { try {
throw new o10('error!');
}catch(e){} } });
}catch(e){} }, o10, "Promise.prototype.catch throws if the then property of the this argument throws", "error!");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.prototype.catch.call({ then: function() { try {
throw new o10('error!');
}catch(e){} } });
}catch(e){} }, o10, "Promise.prototype.catch throws if the then property of the this argument throws", "error!");
}catch(e){}
        }
    },
    {
        name: "Promise.resolve throwing behavior",
        o3: function () {
            try {
o4.o9(function() { try {
Promise.resolve.call();
}catch(e){} }, o10, "Promise.resolve throws when called with no this parameter", "Promise.resolve: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.resolve.call(undefined);
}catch(e){} }, o10, "Promise.resolve throws when this parameter is undefined", "Promise.resolve: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.resolve.call(null);
}catch(e){} }, o10, "Promise.resolve throws when this parameter is null", "Promise.resolve: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.resolve.call({});
}catch(e){} }, o10, "Promise.resolve throws when this parameter is non-callable", "Function expected");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.resolve.call(Math.sin);
}catch(e){} }, o10, "Promise.resolve throws when this parameter is a non-constructor", "Function expected");
}catch(e){}
        }
    },
    {
        name: "Promise.reject throwing behavior",
        o3: function () {
            try {
o4.o9(function() { try {
Promise.reject.call();
}catch(e){} }, o10, "Promise.reject throws when called with no this parameter", "Promise.reject: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.reject.call(undefined);
}catch(e){} }, o10, "Promise.reject throws when called when this parameter is undefined", "Promise.reject: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.reject.call(null);
}catch(e){} }, o10, "Promise.reject throws when called when this parameter is null", "Promise.reject: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.reject.call({});
}catch(e){} }, o10, "Promise.reject throws when called when this parameter is non-callable", "Function expected");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.reject.call(Math.sin);
}catch(e){} }, o10, "Promise.reject throws when this parameter is a non-constructor", "Function expected");
}catch(e){}
        }
    },
    {
        name: "Promise.race throwing behavior",
        o3: function () {
            try {
o4.o9(function() { try {
Promise.race.call();
}catch(e){} }, o10, "Promise.race throws when called with no this parameter", "Promise.race: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.race.call(undefined);
}catch(e){} }, o10, "Promise.race throws when called when this parameter is undefined", "Promise.race: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.race.call(null);
}catch(e){} }, o10, "Promise.race throws when called when this parameter is null", "Promise.race: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.race.call({});
}catch(e){} }, o10, "Promise.race throws when called when this parameter is non-callable", "Function expected");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.race.call(Math.sin);
}catch(e){} }, o10, "Promise.race throws when this parameter is a non-constructor", "Function expected");
}catch(e){}
        }
    },
    {
        name: "Promise.all throwing behavior",
        o3: function () {
            try {
o4.o9(function() { try {
Promise.all.call();
}catch(e){} }, o10, "Promise.all throws when called with no this parameter", "Promise.all: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.all.call(undefined);
}catch(e){} }, o10, "Promise.all throws when called when this parameter is undefined", "Promise.all: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.all.call(null);
}catch(e){} }, o10, "Promise.all throws when called when this parameter is null", "Promise.all: 'this' is not an Object");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.all.call({});
}catch(e){} }, o10, "Promise.all throws when called when this parameter is non-callable", "Function expected");
}catch(e){}
            try {
o4.o9(function() { try {
Promise.all.call(Math.sin);
}catch(e){} }, o10, "Promise.all throws when this parameter is a non-constructor", "Function expected");
}catch(e){}
        }
    },
    {
        name: "Promise.prototype.then to access constructor through [@@species]",
        o3: function () {
            var o11 = new Promise(function(resolve, reject) { });
            try {
o11.constructor = undefined;
}catch(e){}
            try {
o4.o12(function() { try {
o11.then(function(o13) {}, function(o14) {});
}catch(e){} }, "");
}catch(e){}
        }
    },
    {
        name: "Promise.resolve checks the 'constructor' property of the argument if it's a promise",
        o3: function () {
            let o15 = new Promise(function(resolve, reject) { });

            try {
o4.o5(o15 === Promise.resolve(o15), "Promise.resolve called with a promise object, x, returns that promise if 'this' === x.constructor");
}catch(e){}

            let o16 = {o17: 'my constructor'};
            try {
o15.constructor = o16;
}catch(e){}

            try {
o4.o5(o15 === Promise.resolve.call(o16, o15), "Promise.resolve called with a promise object, x, returns that promise if 'this' === x.constructor");
}catch(e){}

            try {
o4.o8(o15 === Promise.resolve(o15), "Promise.resolve called with a promise object, x, returns a new promise if 'this' !== x.constructor");
}catch(e){}
        }
    },
    {
        name: "Promise resolve / reject functions handed to the executor function",
        o3: function () {
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
        }
    },
    {
        name: "Promise.all resolve / reject functions",
        o3: function () {
            let o20 = false;
            let o11 = new Promise(function(resolve, reject) { try {
resolve();
}catch(e){} });
            try {
o11.then = function(resolve, reject) {
                try {
o4.o6(1, resolve.length, "Resolve function should have length 1");
}catch(e){}
                try {
o4.o6('function', typeof resolve, "Resolve function is a function type");
}catch(e){}
                try {
o4.o6(1, reject.length, "Reject function should have length 1");
}catch(e){}
                try {
o4.o6('function', typeof reject, "Reject function is a function type");
}catch(e){}
                try {
o20 = true;
}catch(e){}
            };
}catch(e){}

            try {
Promise.all([o11]);
}catch(e){}

            try {
o4.o5(o20, "The then function was actually called");
}catch(e){}
        }
    },
    {
        name: "Executor function passed to Promise constructor via NewPromiseCapability",
        o3: function () {
            let o20 = false;
            let o11 = new Promise(function(resolve, reject) { try {
resolve();
}catch(e){} });
            let o21 = function(o22) {
                try {
o4.o5(this instanceof o21, "The 'this' argument is an instance of the ctor function");
}catch(e){}
                try {
o4.o6(2, o22.length, "Executor function should have length 2");
}catch(e){}
                try {
o4.o6('function', typeof o22, "Executor function is a function type");
}catch(e){}
                try {
o20 = true;
}catch(e){}
                try {
o22(function(){}, function(){});
}catch(e){}
            }

            try {
Promise.resolve.call(o21, o11);
}catch(e){}

            try {
o4.o5(o20, "The constructor function was actually called");
}catch(e){}
        }
    },
    {
        name: "Promise.all calls thenable.then with correct resolve / reject handlers",
        o3: function () {
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
        }
    },
    {
        name: "Shape of executor function passed to Promise constructor",
        o3: function () {
            var o31 = undefined;
            function o32(o22) {
                try {
o31 = o22;
}catch(e){}
                try {
o22(() => {}, () => {});
}catch(e){}
                
            }
            try {
Promise.resolve.call(o32);
}catch(e){}
            try {
o4.o8(o31 === undefined, "Promise.resolve should have tried to new NotPromise2");
}catch(e){}

            try {
o4.o6(2, o31.length, "Executor function should have length 1");
}catch(e){}
            try {
o4.o6('function', typeof o31, "Executor function is a function type");
}catch(e){}
            try {
o4.o5(Object.isExtensible(o31), "Executor function is an extensible object");
}catch(e){}
            try {
o4.o6(Object.getPrototypeOf(o31), Function.prototype, "Executor function has __proto__ set to Function.prototype");
}catch(e){}
            try {
o4.o9(() => { try {
new o31();
}catch(e){} }, o10, "Executor function is an anonymous built-in but not a constructor", "Function is not a constructor");
}catch(e){}
            try {
o4.o8(Object.prototype.hasOwnProperty.call(o31, "prototype"), "Executor function does not have 'prototype' own property");
}catch(e){}
            try {
o4.o8(Object.prototype.hasOwnProperty.call(o31, "name"), "Executor function does not have 'name' own property");
}catch(e){}
        }
    },
    {
        name: "Test calling capabilities executor function with different arguments",
        o3: function () {
            try {
o4.o9(() => {
                try {
Promise.resolve.call(function(o22) {
                });
}catch(e){}
            }, o10, "We didn't set the resolve callback, Promise.resolve tried to call it which should throw", "'Promise' is not a function");
}catch(e){}
            try {
o4.o9(() => {
                try {
Promise.resolve.call(function(o22) {
                    try {
o4.o12(() => { try {
o22();
}catch(e){} }, "Calling executor with no arguments will set the promise capability resolve and reject callbacks to undefined");
}catch(e){}
                    try {
o4.o12(() => { try {
o22();
}catch(e){} }, "Calling executor with no arguments again works because the promise capability resolve and reject callbacks are still undefined");
}catch(e){}
                });
}catch(e){}
            }, o10, "We set the resolve callback to undefined, Promise.resolve tried to call it which should throw", "'Promise' is not a function");
}catch(e){}
            try {
o4.o9(() => {
                try {
Promise.resolve.call(function(o22) {
                    try {
o4.o12(() => { try {
o22('string', 12345);
}catch(e){} }, "Calling executor with non-function arguments will set the promise capability resolve and reject callbacks");
}catch(e){}
                    try {
o4.o9(() => { try {
o22();
}catch(e){} }, o10, "Callbacks of promise capability are already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
}catch(e){}
                });
}catch(e){}
            }, o10, "We set the resolve and reject callbacks to non-functions, Promise.resolve tried to call resolve which should throw", "'Promise' is not a function");
}catch(e){}
            try {
o4.o9(() => {
                try {
Promise.resolve.call(function(o22) {
                    try {
o4.o12(() => { try {
o22(undefined, () => {});
}catch(e){} }, "Calling executor with only a reject callback function works but Promise.resolve will throw");
}catch(e){}
                    try {
o4.o9(() => { try {
o22();
}catch(e){} }, o10, "Reject handler of promise capability is already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
}catch(e){}
                });
}catch(e){}
            }, o10, "We set the reject callback to a real function but didn't set the resolve callback which Promise.resolve tries to call", "'Promise' is not a function");
}catch(e){}
            try {
o4.o9(() => {
                try {
Promise.resolve.call(function(o22) {
                    try {
o4.o12(() => { try {
o22(() => {}, undefined);
}catch(e){} }, "Calling executor with only a resolve callback function works but Promise.resolve will throw");
}catch(e){}
                    try {
o4.o9(() => { try {
o22();
}catch(e){} }, o10, "Resolve handler of promise capability is already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
}catch(e){}
                });
}catch(e){}
            }, o10, "We set the resolve callback to a real function but didn't set the reject callback which NewPromiseCapability checks to see if callable", "'Promise' is not a function");
}catch(e){}
            try {
o4.o12(() => {
                var o20 = false;
                try {
Promise.resolve.call(function(o22) {
                    try {
o4.o12(() => { try {
o22(() => { try {
o20 = true;
}catch(e){} },() => { try {
throw 'not called';
}catch(e){} });
}catch(e){} }, "Calling executor with callback functions works");
}catch(e){}
                    try {
o4.o9(() => { try {
o22();
}catch(e){} }, o10, "Callbacks of promise capability are already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
}catch(e){}
                });
}catch(e){}
                try {
o4.o5(o20, "We actually called the resolve callback handler");
}catch(e){}
            }, "We set the resolve callback to a real function which is called by Promise.resolve");
}catch(e){}
        }
    },
    {
        name: "Promise.prototype.then constructs return value via this.constructor[@@species]",
        o3: function () {
            var promise = new Promise(function(resolve) { try {
resolve(42);
}catch(e){} });
            var o33 = function(exec) { try {
exec(function(){}, function(){});
}catch(e){} };
            try {
promise.constructor = o33;
}catch(e){}
            var o34 = function(exec) { try {
exec(function(){}, function(){});
}catch(e){} };

            try {
Object.defineProperty(o33, Symbol.species, { value: o34 });
}catch(e){}

            try {
o4.o5(promise.then(function(){}) instanceof o34, "Promise.prototype.then uses this.constructor[Symbol.species] to construct the object it returns");
}catch(e){}
        }
    },
    {
        name: "Subclass of Promise should return instances of the subclass from Promise methods",
        o3: function () {
            class o35 extends Promise { }
            
            var o36 = new o35(function(resolve, reject) { try {
resolve(42);
}catch(e){} });
            var o37 = o36.then(function() {});
            var o38 = o36.catch(function() {});
            
            try {
o4.o5(o37 instanceof o35, "Subclass of Promise is returned from Promise.prototype.then called with subclass of Promise object as this");
}catch(e){}
            try {
o4.o5(o38 instanceof o35, "Subclass of Promise is returned from Promise.prototype.catch called with subclass of Promise object as this");
}catch(e){}
            try {
o4.o5(o35.race([]) instanceof o35, "Subclass of Promise inherits Promise.race which uses 'this' argument as constructor for return object");
}catch(e){}
            try {
o4.o5(o35.all([]) instanceof o35, "Subclass of Promise inherits Promise.all which uses 'this' argument as constructor for return object");
}catch(e){}
            try {
o4.o5(o35.resolve(42) instanceof o35, "Subclass of Promise inherits Promise.resolve which uses 'this' argument as constructor for return object");
}catch(e){}
            try {
o4.o5(o35.reject(42) instanceof o35, "Subclass of Promise inherits Promise.reject which uses 'this' argument as constructor for return object");
}catch(e){}
        }
    },
];

try {
o39.o40(o2, new o489.o496(o352.o357));
}catch(e){}
