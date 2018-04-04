//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Promise tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Promise constructor has correct shape",
        o4: function () {
            o5.o6(Promise !== undefined, "Promise named global exists");
            o5.o9('function', typeof Promise, "Type of Promise global is 'function'");
            o5.o9("[object Promise]", Object.prototype.toString.call(new Promise(() => {})),
                                                "toString of Promise is '[object Promise]'");

            var o14 = Object.getOwnPropertyDescriptor(Promise, 'prototype');
            o5.o16(o14.writable, "Promise.length.writable === false");
            o5.o16(o14.enumerable, "Promise.length.enumerable === false");
            o5.o16(o14.configurable, "Promise.length.configurable === false");
            o5.o9('object', typeof o14.value, "typeof Promise.length === 'object'");

            var o14 = Object.getOwnPropertyDescriptor(Promise, 'length');
            o5.o16(o14.writable, "Promise.length.writable === false");
            o5.o16(o14.enumerable, "Promise.length.enumerable === false");
            o5.o16(o14.configurable, "Promise.length.configurable === false");
            o5.o9('number', typeof o14.value, "typeof Promise.length === 'number'");
            o5.o9(1, Promise.length, "Promise.length === 1");

            var o14 = Object.getOwnPropertyDescriptor(Promise, 'all');
            o5.o6(o14.writable, "Promise.all.writable === true");
            o5.o16(o14.enumerable, "Promise.all.enumerable === false");
            o5.o6(o14.configurable, "Promise.all.configurable === true");
            o5.o9('function', typeof o14.value, "typeof Promise.all === 'function'");
            o5.o9(1, Promise.all.length, "Promise.all.length === 1");

            var o14 = Object.getOwnPropertyDescriptor(Promise, 'race');
            o5.o6(o14.writable, "Promise.race.writable === true");
            o5.o16(o14.enumerable, "Promise.race.enumerable === false");
            o5.o6(o14.configurable, "Promise.race.configurable === true");
            o5.o9('function', typeof o14.value, "typeof Promise.race === 'function'");
            o5.o9(1, Promise.race.length, "Promise.race.length === 1");

            var o14 = Object.getOwnPropertyDescriptor(Promise, 'reject');
            o5.o6(o14.writable, "Promise.reject.writable === true");
            o5.o16(o14.enumerable, "Promise.reject.enumerable === false");
            o5.o6(o14.configurable, "Promise.reject.configurable === true");
            o5.o9('function', typeof o14.value, "typeof Promise.reject === 'function'");
            o5.o9(1, Promise.reject.length, "Promise.reject.length === 1");

            var o14 = Object.getOwnPropertyDescriptor(Promise, 'resolve');
            o5.o6(o14.writable, "Promise.resolve.writable === true");
            o5.o16(o14.enumerable, "Promise.resolve.enumerable === false");
            o5.o6(o14.configurable, "Promise.resolve.configurable === true");
            o5.o9('function', typeof o14.value, "typeof Promise.resolve === 'function'");
            o5.o9(1, Promise.resolve.length, "Promise.resolve.length === 1");
        }
    },
    {
        name: "Promise prototype has correct shape",
        o4: function () {
            var o14 = Object.getOwnPropertyDescriptor(Promise.prototype, 'constructor');
            o5.o6(o14.writable, "Promise.prototype.constructor.writable === true");
            o5.o16(o14.enumerable, "Promise.prototype.constructor.enumerable === false");
            o5.o6(o14.configurable, "Promise.prototype.constructor.configurable === true");
            o5.o9('function', typeof o14.value, "typeof Promise.prototype.constructor === 'function'");
            o5.o9(1, Promise.prototype.constructor.length, "Promise.prototype.constructor.length === 1");

            var o14 = Object.getOwnPropertyDescriptor(Promise.prototype, 'catch');
            o5.o6(o14.writable, "Promise.prototype.catch.writable === true");
            o5.o16(o14.enumerable, "Promise.prototype.catch.enumerable === false");
            o5.o6(o14.configurable, "Promise.prototype.catch.configurable === true");
            o5.o9('function', typeof o14.value, "typeof Promise.prototype.catch === 'function'");
            o5.o9(1, Promise.prototype.catch.length, "Promise.prototype.catch.length === 1");

            var o14 = Object.getOwnPropertyDescriptor(Promise.prototype, 'then');
            o5.o6(o14.writable, "Promise.prototype.then.writable === true");
            o5.o16(o14.enumerable, "Promise.prototype.then.enumerable === false");
            o5.o6(o14.configurable, "Promise.prototype.then.configurable === true");
            o5.o9('function', typeof o14.value, "typeof Promise.prototype.then === 'function'");
            o5.o9(2, Promise.prototype.then.length, "Promise.prototype.then.length === 2");

            var o14 = Object.getOwnPropertyDescriptor(Promise.prototype, Symbol.toStringTag);
            o5.o16(o14.writable, "Promise.prototype[@@toStringTag].writable === false");
            o5.o16(o14.enumerable, "Promise.prototype[@@toStringTag].enumerable === false");
            o5.o6(o14.configurable, "Promise.prototype[@@toStringTag].configurable === true");
            o5.o9('string', typeof o14.value, "typeof Promise.prototype[@@toStringTag] === 'string'");
            o5.o9('Promise', Promise.prototype[Symbol.toStringTag], "Promise.prototype[@@toStringTag] === 'Promise'");
        }
    },
    {
        name: "Promise constructor throwing behavior",
        o4: function () {
            o5.o31(function() { Promise.call(); }, o32, "Promise throws when not called as a new expression with no this parameter", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call(undefined); }, o32, "Promise throws when not called as a new expression if the this parameter is undefined", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call(null); }, o32, "Promise throws when not called as a new expression if the this parameter is null", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call({}); }, o32, "Promise throws when not called as a new expression if the this parameter is not a promise", "Promise: cannot be called without the new keyword");

            o5.o31(function() { new Promise(); }, o32, "new Promise throws when called with no parameter", "Promise: argument is not a Function object");
            o5.o31(function() { new Promise(undefined); }, o32, "new Promise throws when called with an undefined parameter", "Promise: argument is not a Function object");
            o5.o31(function() { new Promise(null); }, o32, "new Promise throws when called with a null parameter", "Promise: argument is not a Function object");
            o5.o31(function() { new Promise({}); }, o32, "new Promise throws when called with a non-function parameter", "Promise: argument is not a Function object");

            var promise = new Promise(function() { } );

            o5.o31(function() { Promise.call(promise); }, o32, "Promise throws when not called as a new expression if the executor argument is not passed", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call(promise, undefined); }, o32, "Promise throws when not called as a new expression if the executor argument is undefined", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call(promise, null); }, o32, "Promise throws when not called as a new expression if the executor argument is null", "Promise: cannot be called without the new keyword");
            o5.o31(function() { Promise.call(promise, {}); }, o32, "Promise throws when not called as a new expression if the executor argument is non-callable", "Promise: cannot be called without the new keyword");

            o5.o31(function() { Promise.call(promise, function() { }); }, o32, "Promise throws when not called as a new expression if the this parameter is an initialized promise object", "Promise: cannot be called without the new keyword");
        }
    },
    {
        name: "Promise.prototype.then throwing behavior",
        o4: function () {
            o5.o31(function() { Promise.prototype.then.call(); }, o32, "Promise.prototype.then throws when called with no this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            o5.o31(function() { Promise.prototype.then.call(undefined); }, o32, "Promise.prototype.then throws when called with undefined this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            o5.o31(function() { Promise.prototype.then.call(null); }, o32, "Promise.prototype.then throws when called with null this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            o5.o31(function() { Promise.prototype.then.call({}); }, o32, "Promise.prototype.then throws when called with non-promise this parameter", "Promise.prototype.then: 'this' is not a Promise object");
        }
    },
    {
        name: "Promise.prototype.catch throwing behavior",
        o4: function () {
            o5.o31(function() { Promise.prototype.catch.call(); }, o32, "Promise.prototype.catch throws when called with no this parameter", "Promise.prototype.catch: 'this' is not an Object");
            o5.o31(function() { Promise.prototype.catch.call(undefined); }, o32, "Promise.prototype.catch throws when called with undefined this parameter", "Promise.prototype.catch: 'this' is not an Object");
            o5.o31(function() { Promise.prototype.catch.call(null); }, o32, "Promise.prototype.catch throws when called with null this parameter", "Promise.prototype.catch: 'this' is not an Object");

            o5.o31(function() { Promise.prototype.catch.call({}); }, o32, "Promise.prototype.catch throws when called with a this parameter which doesn't have a then property", "Promise.prototype.catch: argument is not a Function object");
            o5.o31(function() { Promise.prototype.catch.call({ then: undefined }); }, o32, "Promise.prototype.catch throws when called with a this parameter which has a then property with undefined value", "Promise.prototype.catch: argument is not a Function object");
            o5.o31(function() { Promise.prototype.catch.call({ then: null }); }, o32, "Promise.prototype.catch throws when called with a this parameter which has a then property with null value", "Promise.prototype.catch: argument is not a Function object");
            o5.o31(function() { Promise.prototype.catch.call({ then: {} }); }, o32, "Promise.prototype.catch throws when called with a this parameter which has a then property with non-function value", "Promise.prototype.catch: argument is not a Function object");

            o5.o31(function() { Promise.prototype.catch.call({ get then() { throw new o32('error!'); } }); }, o32, "Promise.prototype.catch throws if the then property of the this argument throws", "error!");
            o5.o31(function() { Promise.prototype.catch.call({ then: function() { throw new o32('error!'); } }); }, o32, "Promise.prototype.catch throws if the then property of the this argument throws", "error!");
        }
    },
    {
        name: "Promise.resolve throwing behavior",
        o4: function () {
            o5.o31(function() { Promise.resolve.call(); }, o32, "Promise.resolve throws when called with no this parameter", "Promise.resolve: 'this' is not an Object");
            o5.o31(function() { Promise.resolve.call(undefined); }, o32, "Promise.resolve throws when this parameter is undefined", "Promise.resolve: 'this' is not an Object");
            o5.o31(function() { Promise.resolve.call(null); }, o32, "Promise.resolve throws when this parameter is null", "Promise.resolve: 'this' is not an Object");
            o5.o31(function() { Promise.resolve.call({}); }, o32, "Promise.resolve throws when this parameter is non-callable", "Function expected");
            o5.o31(function() { Promise.resolve.call(Math.sin); }, o32, "Promise.resolve throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.reject throwing behavior",
        o4: function () {
            o5.o31(function() { Promise.reject.call(); }, o32, "Promise.reject throws when called with no this parameter", "Promise.reject: 'this' is not an Object");
            o5.o31(function() { Promise.reject.call(undefined); }, o32, "Promise.reject throws when called when this parameter is undefined", "Promise.reject: 'this' is not an Object");
            o5.o31(function() { Promise.reject.call(null); }, o32, "Promise.reject throws when called when this parameter is null", "Promise.reject: 'this' is not an Object");
            o5.o31(function() { Promise.reject.call({}); }, o32, "Promise.reject throws when called when this parameter is non-callable", "Function expected");
            o5.o31(function() { Promise.reject.call(Math.sin); }, o32, "Promise.reject throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.race throwing behavior",
        o4: function () {
            o5.o31(function() { Promise.race.call(); }, o32, "Promise.race throws when called with no this parameter", "Promise.race: 'this' is not an Object");
            o5.o31(function() { Promise.race.call(undefined); }, o32, "Promise.race throws when called when this parameter is undefined", "Promise.race: 'this' is not an Object");
            o5.o31(function() { Promise.race.call(null); }, o32, "Promise.race throws when called when this parameter is null", "Promise.race: 'this' is not an Object");
            o5.o31(function() { Promise.race.call({}); }, o32, "Promise.race throws when called when this parameter is non-callable", "Function expected");
            o5.o31(function() { Promise.race.call(Math.sin); }, o32, "Promise.race throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.all throwing behavior",
        o4: function () {
            o5.o31(function() { Promise.all.call(); }, o32, "Promise.all throws when called with no this parameter", "Promise.all: 'this' is not an Object");
            o5.o31(function() { Promise.all.call(undefined); }, o32, "Promise.all throws when called when this parameter is undefined", "Promise.all: 'this' is not an Object");
            o5.o31(function() { Promise.all.call(null); }, o32, "Promise.all throws when called when this parameter is null", "Promise.all: 'this' is not an Object");
            o5.o31(function() { Promise.all.call({}); }, o32, "Promise.all throws when called when this parameter is non-callable", "Function expected");
            o5.o31(function() { Promise.all.call(Math.sin); }, o32, "Promise.all throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.prototype.then to access constructor through [@@species]",
        o4: function () {
            var o36 = new Promise(function(resolve, reject) { });
            o36.constructor = undefined;
            o5.o37(function() { o36.then(function(o38) {}, function(o39) {}); }, "");
        }
    },
    {
        name: "Promise.resolve checks the 'constructor' property of the argument if it's a promise",
        o4: function () {
            let o40 = new Promise(function(resolve, reject) { });

            o5.o6(o40 === Promise.resolve(o40), "Promise.resolve called with a promise object, x, returns that promise if 'this' === x.constructor");

            let o41 = {o42: 'my constructor'};
            o40.constructor = o41;

            o5.o6(o40 === Promise.resolve.call(o41, o40), "Promise.resolve called with a promise object, x, returns that promise if 'this' === x.constructor");

            o5.o16(o40 === Promise.resolve(o40), "Promise.resolve called with a promise object, x, returns a new promise if 'this' !== x.constructor");
        }
    },
    {
        name: "Promise resolve / reject functions handed to the executor function",
        o4: function () {
            var o43 = undefined;
            var o44 = undefined;  
            new Promise(function(resolve, reject) {  
                o43 = resolve;
                o44 = reject;  
            });  
            o5.o16(o43 === undefined, "new Promise should provide a resolve function");
            o5.o16(o44 === undefined, "new Promise should provide a reject function");

            o5.o9(1, o43.length, "Resolve function should have length 1");
            o5.o9('function', typeof o43, "Resolve function is a function type");
            o5.o6(Object.isExtensible(o43), "Resolve function is an extensible object");
            o5.o9(Object.getPrototypeOf(o43), Function.prototype, "Resolve function has __proto__ set to Function.prototype");
            o5.o31(() => { new o43(); }, o32, "Resolve function is an anonymous built-in but not a constructor", "Function is not a constructor");
            o5.o16(Object.prototype.hasOwnProperty.call(o43, "prototype"), "Resolve function does not have 'prototype' own property");
            o5.o16(Object.prototype.hasOwnProperty.call(o43, "name"), "Resolve function does not have 'name' own property");
            
            o5.o9(1, o44.length, "Reject function should have length 1");
            o5.o9('function', typeof o44, "Reject function is a function type");
            o5.o6(Object.isExtensible(o44), "Reject function is an extensible object");
            o5.o9(Object.getPrototypeOf(o44), Function.prototype, "Reject function has __proto__ set to Function.prototype");
            o5.o31(() => { new o44(); }, o32, "Reject function is an anonymous built-in but not a constructor", "Function is not a constructor");
            o5.o16(Object.prototype.hasOwnProperty.call(o44, "prototype"), "Reject function does not have 'prototype' own property");
            o5.o16(Object.prototype.hasOwnProperty.call(o44, "name"), "Reject function does not have 'name' own property");
        }
    },
    {
        name: "Promise.all resolve / reject functions",
        o4: function () {
            let o49 = false;
            let o36 = new Promise(function(resolve, reject) { resolve(); });
            o36.then = function(resolve, reject) {
                o5.o9(1, resolve.length, "Resolve function should have length 1");
                o5.o9('function', typeof resolve, "Resolve function is a function type");
                o5.o9(1, reject.length, "Reject function should have length 1");
                o5.o9('function', typeof reject, "Reject function is a function type");
                o49 = true;
            };

            Promise.all([o36]);

            o5.o6(o49, "The then function was actually called");
        }
    },
    {
        name: "Executor function passed to Promise constructor via NewPromiseCapability",
        o4: function () {
            let o49 = false;
            let o36 = new Promise(function(resolve, reject) { resolve(); });
            let o50 = function(o51) {
                o5.o6(this instanceof o50, "The 'this' argument is an instance of the ctor function");
                o5.o9(2, o51.length, "Executor function should have length 2");
                o5.o9('function', typeof o51, "Executor function is a function type");
                o49 = true;
                o51(function(){}, function(){});
            }

            Promise.resolve.call(o50, o36);

            o5.o6(o49, "The constructor function was actually called");
        }
    },
    {
        name: "Promise.all calls thenable.then with correct resolve / reject handlers",
        o4: function () {
            var o52 = undefined;
            var o53 = undefined;
            var o54 = {  
                then: function(o55, reject) {  
                    o52 = o55;
                    o53 = reject;
                }
            };
            function o56() {
                throw 'should not call this function';
            }
            function o57() {
                throw 'should not call this function';
            }
            function o58(o51) {  
                o51(o56, o57);  
            }
            o58.resolve = function(o59) { return o59; };  
            Promise.all.call(o58, [o54]);
            o5.o16(o52 === undefined, "Promise.all should have called thenable.then with a resolve callback");
            o5.o16(o53 === undefined, "Promise.all should have called thenable.then with a reject callback");
            
            o5.o16(o56 === o52, "Resolve function should not be the one we passed to the promise executor");
            o5.o9(o57, o53, "Promise.all should call thenable.then with a PromiseAllResolve function and the reject handler we initialized the promise with");
            
            o5.o9(1, o52.length, "Resolve function should have length 1");
            o5.o9('function', typeof o52, "Resolve function is a function type");
            o5.o6(Object.isExtensible(o52), "Resolve function is an extensible object");
            o5.o9(Object.getPrototypeOf(o52), Function.prototype, "Resolve function has __proto__ set to Function.prototype");
            o5.o31(() => { new o52(); }, o32, "Resolve function is an anonymous built-in but not a constructor", "Function is not a constructor");
            o5.o16(Object.prototype.hasOwnProperty.call(o52, "prototype"), "Resolve function does not have 'prototype' own property");
            o5.o16(Object.prototype.hasOwnProperty.call(o52, "name"), "Resolve function does not have 'name' own property");
        }
    },
    {
        name: "Shape of executor function passed to Promise constructor",
        o4: function () {
            var o60 = undefined;
            function o61(o51) {
                o60 = o51;
                o51(() => {}, () => {});
                
            }
            Promise.resolve.call(o61);
            o5.o16(o60 === undefined, "Promise.resolve should have tried to new NotPromise2");

            o5.o9(2, o60.length, "Executor function should have length 1");
            o5.o9('function', typeof o60, "Executor function is a function type");
            o5.o6(Object.isExtensible(o60), "Executor function is an extensible object");
            o5.o9(Object.getPrototypeOf(o60), Function.prototype, "Executor function has __proto__ set to Function.prototype");
            o5.o31(() => { new o60(); }, o32, "Executor function is an anonymous built-in but not a constructor", "Function is not a constructor");
            o5.o16(Object.prototype.hasOwnProperty.call(o60, "prototype"), "Executor function does not have 'prototype' own property");
            o5.o16(Object.prototype.hasOwnProperty.call(o60, "name"), "Executor function does not have 'name' own property");
        }
    },
    {
        name: "Test calling capabilities executor function with different arguments",
        o4: function () {
            o5.o31(() => {
                Promise.resolve.call(function(o51) {
                });
            }, o32, "We didn't set the resolve callback, Promise.resolve tried to call it which should throw", "'Promise' is not a function");
            o5.o31(() => {
                Promise.resolve.call(function(o51) {
                    o5.o37(() => { o51(); }, "Calling executor with no arguments will set the promise capability resolve and reject callbacks to undefined");
                    o5.o37(() => { o51(); }, "Calling executor with no arguments again works because the promise capability resolve and reject callbacks are still undefined");
                });
            }, o32, "We set the resolve callback to undefined, Promise.resolve tried to call it which should throw", "'Promise' is not a function");
            o5.o31(() => {
                Promise.resolve.call(function(o51) {
                    o5.o37(() => { o51('string', 12345); }, "Calling executor with non-function arguments will set the promise capability resolve and reject callbacks");
                    o5.o31(() => { o51(); }, o32, "Callbacks of promise capability are already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
            }, o32, "We set the resolve and reject callbacks to non-functions, Promise.resolve tried to call resolve which should throw", "'Promise' is not a function");
            o5.o31(() => {
                Promise.resolve.call(function(o51) {
                    o5.o37(() => { o51(undefined, () => {}); }, "Calling executor with only a reject callback function works but Promise.resolve will throw");
                    o5.o31(() => { o51(); }, o32, "Reject handler of promise capability is already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
            }, o32, "We set the reject callback to a real function but didn't set the resolve callback which Promise.resolve tries to call", "'Promise' is not a function");
            o5.o31(() => {
                Promise.resolve.call(function(o51) {
                    o5.o37(() => { o51(() => {}, undefined); }, "Calling executor with only a resolve callback function works but Promise.resolve will throw");
                    o5.o31(() => { o51(); }, o32, "Resolve handler of promise capability is already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
            }, o32, "We set the resolve callback to a real function but didn't set the reject callback which NewPromiseCapability checks to see if callable", "'Promise' is not a function");
            o5.o37(() => {
                var o49 = false;
                Promise.resolve.call(function(o51) {
                    o5.o37(() => { o51(() => { o49 = true; },() => { throw 'not called'; }); }, "Calling executor with callback functions works");
                    o5.o31(() => { o51(); }, o32, "Callbacks of promise capability are already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
                o5.o6(o49, "We actually called the resolve callback handler");
            }, "We set the resolve callback to a real function which is called by Promise.resolve");
        }
    },
    {
        name: "Promise.prototype.then constructs return value via this.constructor[@@species]",
        o4: function () {
            var promise = new Promise(function(resolve) { resolve(42); });
            var o62 = function(exec) { exec(function(){}, function(){}); };
            promise.constructor = o62;
            var o64 = function(exec) { exec(function(){}, function(){}); };

            Object.defineProperty(o62, Symbol.species, { value: o64 });

            o5.o6(promise.then(function(){}) instanceof o64, "Promise.prototype.then uses this.constructor[Symbol.species] to construct the object it returns");
        }
    },
    {
        name: "Subclass of Promise should return instances of the subclass from Promise methods",
        o4: function () {
            class o67 extends Promise { }
            
            var o68 = new o67(function(resolve, reject) { resolve(42); });
            var o69 = o68.then(function() {});
            var o70 = o68.catch(function() {});
            
            o5.o6(o69 instanceof o67, "Subclass of Promise is returned from Promise.prototype.then called with subclass of Promise object as this");
            o5.o6(o70 instanceof o67, "Subclass of Promise is returned from Promise.prototype.catch called with subclass of Promise object as this");
            o5.o6(o67.race([]) instanceof o67, "Subclass of Promise inherits Promise.race which uses 'this' argument as constructor for return object");
            o5.o6(o67.all([]) instanceof o67, "Subclass of Promise inherits Promise.all which uses 'this' argument as constructor for return object");
            o5.o6(o67.resolve(42) instanceof o67, "Subclass of Promise inherits Promise.resolve which uses 'this' argument as constructor for return object");
            o5.o6(o67.reject(42) instanceof o67, "Subclass of Promise inherits Promise.reject which uses 'this' argument as constructor for return object");
        }
    },
];

o71.o72(o2, { o73: o0.o74[0] != "summary" });
