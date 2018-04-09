//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Promise tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Promise constructor has correct shape",
        o3: function () {
            o4.o5(Promise !== undefined, "Promise named global exists");
            o4.o6('function', typeof Promise, "Type of Promise global is 'function'");
            o4.o6("[object Promise]", Object.prototype.toString.call(new Promise(() => {})),
                                                "toString of Promise is '[object Promise]'");

            var o7 = Object.getOwnPropertyDescriptor(Promise, 'prototype');
            o4.o8(o7.writable, "Promise.length.writable === false");
            o4.o8(o7.enumerable, "Promise.length.enumerable === false");
            o4.o8(o7.configurable, "Promise.length.configurable === false");
            o4.o6('object', typeof o7.value, "typeof Promise.length === 'object'");

            var o7 = Object.getOwnPropertyDescriptor(Promise, 'length');
            o4.o8(o7.writable, "Promise.length.writable === false");
            o4.o8(o7.enumerable, "Promise.length.enumerable === false");
            o4.o8(o7.configurable, "Promise.length.configurable === false");
            o4.o6('number', typeof o7.value, "typeof Promise.length === 'number'");
            o4.o6(1, Promise.length, "Promise.length === 1");

            var o7 = Object.getOwnPropertyDescriptor(Promise, 'all');
            o4.o5(o7.writable, "Promise.all.writable === true");
            o4.o8(o7.enumerable, "Promise.all.enumerable === false");
            o4.o5(o7.configurable, "Promise.all.configurable === true");
            o4.o6('function', typeof o7.value, "typeof Promise.all === 'function'");
            o4.o6(1, Promise.all.length, "Promise.all.length === 1");

            var o7 = Object.getOwnPropertyDescriptor(Promise, 'race');
            o4.o5(o7.writable, "Promise.race.writable === true");
            o4.o8(o7.enumerable, "Promise.race.enumerable === false");
            o4.o5(o7.configurable, "Promise.race.configurable === true");
            o4.o6('function', typeof o7.value, "typeof Promise.race === 'function'");
            o4.o6(1, Promise.race.length, "Promise.race.length === 1");

            var o7 = Object.getOwnPropertyDescriptor(Promise, 'reject');
            o4.o5(o7.writable, "Promise.reject.writable === true");
            o4.o8(o7.enumerable, "Promise.reject.enumerable === false");
            o4.o5(o7.configurable, "Promise.reject.configurable === true");
            o4.o6('function', typeof o7.value, "typeof Promise.reject === 'function'");
            o4.o6(1, Promise.reject.length, "Promise.reject.length === 1");

            var o7 = Object.getOwnPropertyDescriptor(Promise, 'resolve');
            o4.o5(o7.writable, "Promise.resolve.writable === true");
            o4.o8(o7.enumerable, "Promise.resolve.enumerable === false");
            o4.o5(o7.configurable, "Promise.resolve.configurable === true");
            o4.o6('function', typeof o7.value, "typeof Promise.resolve === 'function'");
            o4.o6(1, Promise.resolve.length, "Promise.resolve.length === 1");
        }
    },
    {
        name: "Promise prototype has correct shape",
        o3: function () {
            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, 'constructor');
            o4.o5(o7.writable, "Promise.prototype.constructor.writable === true");
            o4.o8(o7.enumerable, "Promise.prototype.constructor.enumerable === false");
            o4.o5(o7.configurable, "Promise.prototype.constructor.configurable === true");
            o4.o6('function', typeof o7.value, "typeof Promise.prototype.constructor === 'function'");
            o4.o6(1, Promise.prototype.constructor.length, "Promise.prototype.constructor.length === 1");

            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, 'catch');
            o4.o5(o7.writable, "Promise.prototype.catch.writable === true");
            o4.o8(o7.enumerable, "Promise.prototype.catch.enumerable === false");
            o4.o5(o7.configurable, "Promise.prototype.catch.configurable === true");
            o4.o6('function', typeof o7.value, "typeof Promise.prototype.catch === 'function'");
            o4.o6(1, Promise.prototype.catch.length, "Promise.prototype.catch.length === 1");

            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, 'then');
            o4.o5(o7.writable, "Promise.prototype.then.writable === true");
            o4.o8(o7.enumerable, "Promise.prototype.then.enumerable === false");
            o4.o5(o7.configurable, "Promise.prototype.then.configurable === true");
            o4.o6('function', typeof o7.value, "typeof Promise.prototype.then === 'function'");
            o4.o6(2, Promise.prototype.then.length, "Promise.prototype.then.length === 2");

            var o7 = Object.getOwnPropertyDescriptor(Promise.prototype, Symbol.toStringTag);
            o4.o8(o7.writable, "Promise.prototype[@@toStringTag].writable === false");
            o4.o8(o7.enumerable, "Promise.prototype[@@toStringTag].enumerable === false");
            o4.o5(o7.configurable, "Promise.prototype[@@toStringTag].configurable === true");
            o4.o6('string', typeof o7.value, "typeof Promise.prototype[@@toStringTag] === 'string'");
            o4.o6('Promise', Promise.prototype[Symbol.toStringTag], "Promise.prototype[@@toStringTag] === 'Promise'");
        }
    },
    {
        name: "Promise constructor throwing behavior",
        o3: function () {
            o4.o9(function() { Promise.call(); }, o10, "Promise throws when not called as a new expression with no this parameter", "Promise: cannot be called without the new keyword");
            o4.o9(function() { Promise.call(undefined); }, o10, "Promise throws when not called as a new expression if the this parameter is undefined", "Promise: cannot be called without the new keyword");
            o4.o9(function() { Promise.call(null); }, o10, "Promise throws when not called as a new expression if the this parameter is null", "Promise: cannot be called without the new keyword");
            o4.o9(function() { Promise.call({}); }, o10, "Promise throws when not called as a new expression if the this parameter is not a promise", "Promise: cannot be called without the new keyword");

            o4.o9(function() { new Promise(); }, o10, "new Promise throws when called with no parameter", "Promise: argument is not a Function object");
            o4.o9(function() { new Promise(undefined); }, o10, "new Promise throws when called with an undefined parameter", "Promise: argument is not a Function object");
            o4.o9(function() { new Promise(null); }, o10, "new Promise throws when called with a null parameter", "Promise: argument is not a Function object");
            o4.o9(function() { new Promise({}); }, o10, "new Promise throws when called with a non-function parameter", "Promise: argument is not a Function object");

            var promise = new Promise(function() { } );

            o4.o9(function() { Promise.call(promise); }, o10, "Promise throws when not called as a new expression if the executor argument is not passed", "Promise: cannot be called without the new keyword");
            o4.o9(function() { Promise.call(promise, undefined); }, o10, "Promise throws when not called as a new expression if the executor argument is undefined", "Promise: cannot be called without the new keyword");
            o4.o9(function() { Promise.call(promise, null); }, o10, "Promise throws when not called as a new expression if the executor argument is null", "Promise: cannot be called without the new keyword");
            o4.o9(function() { Promise.call(promise, {}); }, o10, "Promise throws when not called as a new expression if the executor argument is non-callable", "Promise: cannot be called without the new keyword");

            o4.o9(function() { Promise.call(promise, function() { }); }, o10, "Promise throws when not called as a new expression if the this parameter is an initialized promise object", "Promise: cannot be called without the new keyword");
        }
    },
    {
        name: "Promise.prototype.then throwing behavior",
        o3: function () {
            o4.o9(function() { Promise.prototype.then.call(); }, o10, "Promise.prototype.then throws when called with no this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            o4.o9(function() { Promise.prototype.then.call(undefined); }, o10, "Promise.prototype.then throws when called with undefined this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            o4.o9(function() { Promise.prototype.then.call(null); }, o10, "Promise.prototype.then throws when called with null this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            o4.o9(function() { Promise.prototype.then.call({}); }, o10, "Promise.prototype.then throws when called with non-promise this parameter", "Promise.prototype.then: 'this' is not a Promise object");
        }
    },
    {
        name: "Promise.prototype.catch throwing behavior",
        o3: function () {
            o4.o9(function() { Promise.prototype.catch.call(); }, o10, "Promise.prototype.catch throws when called with no this parameter", "Promise.prototype.catch: 'this' is not an Object");
            o4.o9(function() { Promise.prototype.catch.call(undefined); }, o10, "Promise.prototype.catch throws when called with undefined this parameter", "Promise.prototype.catch: 'this' is not an Object");
            o4.o9(function() { Promise.prototype.catch.call(null); }, o10, "Promise.prototype.catch throws when called with null this parameter", "Promise.prototype.catch: 'this' is not an Object");

            o4.o9(function() { Promise.prototype.catch.call({}); }, o10, "Promise.prototype.catch throws when called with a this parameter which doesn't have a then property", "Promise.prototype.catch: argument is not a Function object");
            o4.o9(function() { Promise.prototype.catch.call({ then: undefined }); }, o10, "Promise.prototype.catch throws when called with a this parameter which has a then property with undefined value", "Promise.prototype.catch: argument is not a Function object");
            o4.o9(function() { Promise.prototype.catch.call({ then: null }); }, o10, "Promise.prototype.catch throws when called with a this parameter which has a then property with null value", "Promise.prototype.catch: argument is not a Function object");
            o4.o9(function() { Promise.prototype.catch.call({ then: {} }); }, o10, "Promise.prototype.catch throws when called with a this parameter which has a then property with non-function value", "Promise.prototype.catch: argument is not a Function object");

            o4.o9(function() { Promise.prototype.catch.call({ get then() { throw new o10('error!'); } }); }, o10, "Promise.prototype.catch throws if the then property of the this argument throws", "error!");
            o4.o9(function() { Promise.prototype.catch.call({ then: function() { throw new o10('error!'); } }); }, o10, "Promise.prototype.catch throws if the then property of the this argument throws", "error!");
        }
    },
    {
        name: "Promise.resolve throwing behavior",
        o3: function () {
            o4.o9(function() { Promise.resolve.call(); }, o10, "Promise.resolve throws when called with no this parameter", "Promise.resolve: 'this' is not an Object");
            o4.o9(function() { Promise.resolve.call(undefined); }, o10, "Promise.resolve throws when this parameter is undefined", "Promise.resolve: 'this' is not an Object");
            o4.o9(function() { Promise.resolve.call(null); }, o10, "Promise.resolve throws when this parameter is null", "Promise.resolve: 'this' is not an Object");
            o4.o9(function() { Promise.resolve.call({}); }, o10, "Promise.resolve throws when this parameter is non-callable", "Function expected");
            o4.o9(function() { Promise.resolve.call(Math.sin); }, o10, "Promise.resolve throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.reject throwing behavior",
        o3: function () {
            o4.o9(function() { Promise.reject.call(); }, o10, "Promise.reject throws when called with no this parameter", "Promise.reject: 'this' is not an Object");
            o4.o9(function() { Promise.reject.call(undefined); }, o10, "Promise.reject throws when called when this parameter is undefined", "Promise.reject: 'this' is not an Object");
            o4.o9(function() { Promise.reject.call(null); }, o10, "Promise.reject throws when called when this parameter is null", "Promise.reject: 'this' is not an Object");
            o4.o9(function() { Promise.reject.call({}); }, o10, "Promise.reject throws when called when this parameter is non-callable", "Function expected");
            o4.o9(function() { Promise.reject.call(Math.sin); }, o10, "Promise.reject throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.race throwing behavior",
        o3: function () {
            o4.o9(function() { Promise.race.call(); }, o10, "Promise.race throws when called with no this parameter", "Promise.race: 'this' is not an Object");
            o4.o9(function() { Promise.race.call(undefined); }, o10, "Promise.race throws when called when this parameter is undefined", "Promise.race: 'this' is not an Object");
            o4.o9(function() { Promise.race.call(null); }, o10, "Promise.race throws when called when this parameter is null", "Promise.race: 'this' is not an Object");
            o4.o9(function() { Promise.race.call({}); }, o10, "Promise.race throws when called when this parameter is non-callable", "Function expected");
            o4.o9(function() { Promise.race.call(Math.sin); }, o10, "Promise.race throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.all throwing behavior",
        o3: function () {
            o4.o9(function() { Promise.all.call(); }, o10, "Promise.all throws when called with no this parameter", "Promise.all: 'this' is not an Object");
            o4.o9(function() { Promise.all.call(undefined); }, o10, "Promise.all throws when called when this parameter is undefined", "Promise.all: 'this' is not an Object");
            o4.o9(function() { Promise.all.call(null); }, o10, "Promise.all throws when called when this parameter is null", "Promise.all: 'this' is not an Object");
            o4.o9(function() { Promise.all.call({}); }, o10, "Promise.all throws when called when this parameter is non-callable", "Function expected");
            o4.o9(function() { Promise.all.call(Math.sin); }, o10, "Promise.all throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.prototype.then to access constructor through [@@species]",
        o3: function () {
            var o11 = new Promise(function(resolve, reject) { });
            o11.constructor = undefined;
            o4.o12(function() { o11.then(function(o13) {}, function(o14) {}); }, "");
        }
    },
    {
        name: "Promise.resolve checks the 'constructor' property of the argument if it's a promise",
        o3: function () {
            let o15 = new Promise(function(resolve, reject) { });

            o4.o5(o15 === Promise.resolve(o15), "Promise.resolve called with a promise object, x, returns that promise if 'this' === x.constructor");

            let o16 = {o17: 'my constructor'};
            o15.constructor = o16;

            o4.o5(o15 === Promise.resolve.call(o16, o15), "Promise.resolve called with a promise object, x, returns that promise if 'this' === x.constructor");

            o4.o8(o15 === Promise.resolve(o15), "Promise.resolve called with a promise object, x, returns a new promise if 'this' !== x.constructor");
        }
    },
    {
        name: "Promise resolve / reject functions handed to the executor function",
        o3: function () {
            var o18 = undefined;
            var o19 = undefined;  
            new Promise(function(resolve, reject) {  
                o18 = resolve;
                o19 = reject;  
            });  
            o4.o8(o18 === undefined, "new Promise should provide a resolve function");
            o4.o8(o19 === undefined, "new Promise should provide a reject function");

            o4.o6(1, o18.length, "Resolve function should have length 1");
            o4.o6('function', typeof o18, "Resolve function is a function type");
            o4.o5(Object.isExtensible(o18), "Resolve function is an extensible object");
            o4.o6(Object.getPrototypeOf(o18), Function.prototype, "Resolve function has __proto__ set to Function.prototype");
            o4.o9(() => { new o18(); }, o10, "Resolve function is an anonymous built-in but not a constructor", "Function is not a constructor");
            o4.o8(Object.prototype.hasOwnProperty.call(o18, "prototype"), "Resolve function does not have 'prototype' own property");
            o4.o8(Object.prototype.hasOwnProperty.call(o18, "name"), "Resolve function does not have 'name' own property");
            
            o4.o6(1, o19.length, "Reject function should have length 1");
            o4.o6('function', typeof o19, "Reject function is a function type");
            o4.o5(Object.isExtensible(o19), "Reject function is an extensible object");
            o4.o6(Object.getPrototypeOf(o19), Function.prototype, "Reject function has __proto__ set to Function.prototype");
            o4.o9(() => { new o19(); }, o10, "Reject function is an anonymous built-in but not a constructor", "Function is not a constructor");
            o4.o8(Object.prototype.hasOwnProperty.call(o19, "prototype"), "Reject function does not have 'prototype' own property");
            o4.o8(Object.prototype.hasOwnProperty.call(o19, "name"), "Reject function does not have 'name' own property");
        }
    },
    {
        name: "Promise.all resolve / reject functions",
        o3: function () {
            let o20 = false;
            let o11 = new Promise(function(resolve, reject) { resolve(); });
            o11.then = function(resolve, reject) {
                o4.o6(1, resolve.length, "Resolve function should have length 1");
                o4.o6('function', typeof resolve, "Resolve function is a function type");
                o4.o6(1, reject.length, "Reject function should have length 1");
                o4.o6('function', typeof reject, "Reject function is a function type");
                o20 = true;
            };

            Promise.all([o11]);

            o4.o5(o20, "The then function was actually called");
        }
    },
    {
        name: "Executor function passed to Promise constructor via NewPromiseCapability",
        o3: function () {
            let o20 = false;
            let o11 = new Promise(function(resolve, reject) { resolve(); });
            let o21 = function(o22) {
                o4.o5(this instanceof o21, "The 'this' argument is an instance of the ctor function");
                o4.o6(2, o22.length, "Executor function should have length 2");
                o4.o6('function', typeof o22, "Executor function is a function type");
                o20 = true;
                o22(function(){}, function(){});
            }

            Promise.resolve.call(o21, o11);

            o4.o5(o20, "The constructor function was actually called");
        }
    },
    {
        name: "Promise.all calls thenable.then with correct resolve / reject handlers",
        o3: function () {
            var o23 = undefined;
            var o24 = undefined;
            var o25 = {  
                then: function(o26, reject) {  
                    o23 = o26;
                    o24 = reject;
                }
            };
            function o27() {
                throw 'should not call this function';
            }
            function o28() {
                throw 'should not call this function';
            }
            function o29(o22) {  
                o22(o27, o28);  
            }
            o29.resolve = function(o30) { return o30; };  
            Promise.all.call(o29, [o25]);
            o4.o8(o23 === undefined, "Promise.all should have called thenable.then with a resolve callback");
            o4.o8(o24 === undefined, "Promise.all should have called thenable.then with a reject callback");
            
            o4.o8(o27 === o23, "Resolve function should not be the one we passed to the promise executor");
            o4.o6(o28, o24, "Promise.all should call thenable.then with a PromiseAllResolve function and the reject handler we initialized the promise with");
            
            o4.o6(1, o23.length, "Resolve function should have length 1");
            o4.o6('function', typeof o23, "Resolve function is a function type");
            o4.o5(Object.isExtensible(o23), "Resolve function is an extensible object");
            o4.o6(Object.getPrototypeOf(o23), Function.prototype, "Resolve function has __proto__ set to Function.prototype");
            o4.o9(() => { new o23(); }, o10, "Resolve function is an anonymous built-in but not a constructor", "Function is not a constructor");
            o4.o8(Object.prototype.hasOwnProperty.call(o23, "prototype"), "Resolve function does not have 'prototype' own property");
            o4.o8(Object.prototype.hasOwnProperty.call(o23, "name"), "Resolve function does not have 'name' own property");
        }
    },
    {
        name: "Shape of executor function passed to Promise constructor",
        o3: function () {
            var o31 = undefined;
            function o32(o22) {
                o31 = o22;
                o22(() => {}, () => {});
                
            }
            Promise.resolve.call(o32);
            o4.o8(o31 === undefined, "Promise.resolve should have tried to new NotPromise2");

            o4.o6(2, o31.length, "Executor function should have length 1");
            o4.o6('function', typeof o31, "Executor function is a function type");
            o4.o5(Object.isExtensible(o31), "Executor function is an extensible object");
            o4.o6(Object.getPrototypeOf(o31), Function.prototype, "Executor function has __proto__ set to Function.prototype");
            o4.o9(() => { new o31(); }, o10, "Executor function is an anonymous built-in but not a constructor", "Function is not a constructor");
            o4.o8(Object.prototype.hasOwnProperty.call(o31, "prototype"), "Executor function does not have 'prototype' own property");
            o4.o8(Object.prototype.hasOwnProperty.call(o31, "name"), "Executor function does not have 'name' own property");
        }
    },
    {
        name: "Test calling capabilities executor function with different arguments",
        o3: function () {
            o4.o9(() => {
                Promise.resolve.call(function(o22) {
                });
            }, o10, "We didn't set the resolve callback, Promise.resolve tried to call it which should throw", "'Promise' is not a function");
            o4.o9(() => {
                Promise.resolve.call(function(o22) {
                    o4.o12(() => { o22(); }, "Calling executor with no arguments will set the promise capability resolve and reject callbacks to undefined");
                    o4.o12(() => { o22(); }, "Calling executor with no arguments again works because the promise capability resolve and reject callbacks are still undefined");
                });
            }, o10, "We set the resolve callback to undefined, Promise.resolve tried to call it which should throw", "'Promise' is not a function");
            o4.o9(() => {
                Promise.resolve.call(function(o22) {
                    o4.o12(() => { o22('string', 12345); }, "Calling executor with non-function arguments will set the promise capability resolve and reject callbacks");
                    o4.o9(() => { o22(); }, o10, "Callbacks of promise capability are already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
            }, o10, "We set the resolve and reject callbacks to non-functions, Promise.resolve tried to call resolve which should throw", "'Promise' is not a function");
            o4.o9(() => {
                Promise.resolve.call(function(o22) {
                    o4.o12(() => { o22(undefined, () => {}); }, "Calling executor with only a reject callback function works but Promise.resolve will throw");
                    o4.o9(() => { o22(); }, o10, "Reject handler of promise capability is already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
            }, o10, "We set the reject callback to a real function but didn't set the resolve callback which Promise.resolve tries to call", "'Promise' is not a function");
            o4.o9(() => {
                Promise.resolve.call(function(o22) {
                    o4.o12(() => { o22(() => {}, undefined); }, "Calling executor with only a resolve callback function works but Promise.resolve will throw");
                    o4.o9(() => { o22(); }, o10, "Resolve handler of promise capability is already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
            }, o10, "We set the resolve callback to a real function but didn't set the reject callback which NewPromiseCapability checks to see if callable", "'Promise' is not a function");
            o4.o12(() => {
                var o20 = false;
                Promise.resolve.call(function(o22) {
                    o4.o12(() => { o22(() => { o20 = true; },() => { throw 'not called'; }); }, "Calling executor with callback functions works");
                    o4.o9(() => { o22(); }, o10, "Callbacks of promise capability are already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
                o4.o5(o20, "We actually called the resolve callback handler");
            }, "We set the resolve callback to a real function which is called by Promise.resolve");
        }
    },
    {
        name: "Promise.prototype.then constructs return value via this.constructor[@@species]",
        o3: function () {
            var promise = new Promise(function(resolve) { resolve(42); });
            var o33 = function(exec) { exec(function(){}, function(){}); };
            promise.constructor = o33;
            var o34 = function(exec) { exec(function(){}, function(){}); };

            Object.defineProperty(o33, Symbol.species, { value: o34 });

            o4.o5(promise.then(function(){}) instanceof o34, "Promise.prototype.then uses this.constructor[Symbol.species] to construct the object it returns");
        }
    },
    {
        name: "Subclass of Promise should return instances of the subclass from Promise methods",
        o3: function () {
            class o35 extends Promise { }
            
            var o36 = new o35(function(resolve, reject) { resolve(42); });
            var o37 = o36.then(function() {});
            var o38 = o36.catch(function() {});
            
            o4.o5(o37 instanceof o35, "Subclass of Promise is returned from Promise.prototype.then called with subclass of Promise object as this");
            o4.o5(o38 instanceof o35, "Subclass of Promise is returned from Promise.prototype.catch called with subclass of Promise object as this");
            o4.o5(o35.race([]) instanceof o35, "Subclass of Promise inherits Promise.race which uses 'this' argument as constructor for return object");
            o4.o5(o35.all([]) instanceof o35, "Subclass of Promise inherits Promise.all which uses 'this' argument as constructor for return object");
            o4.o5(o35.resolve(42) instanceof o35, "Subclass of Promise inherits Promise.resolve which uses 'this' argument as constructor for return object");
            o4.o5(o35.reject(42) instanceof o35, "Subclass of Promise inherits Promise.reject which uses 'this' argument as constructor for return object");
        }
    },
];

o39.o40(o2, { o41: o0.o42[0] != "summary" });
