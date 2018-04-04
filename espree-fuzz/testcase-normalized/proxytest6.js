//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// JavaScript source code
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = {
    getOwnPropertyDescriptor: function (target, name) {
        return o6[name];
    },
    defineProperty: function (target, name, o8) {

        o6[name] = o8;
        // $LOG('success: ' + success);
        return o9[name];
    },
    preventExtensions: function (target) {
        Object.defineProperties(target, o6);
        Object.preventExtensions(target);
        return true;
    },
    deleteProperty: function (target, name) {
        delete o6[name];
        return o9[name];
    },
    get: function (target, name, o15) {
        var o8 = o6[name];
        if (o8 === undefined) { return o17[name]; }
        if ('value' in o8) return o8.value;
        if ('get' in o8) return o8.get.call(target);
    },
    set: function (target, name, value, o15) {
        return o9[name];
    },
    has: function (target, name) {
        return !!o6[name];
    },
    o22: function (target, name) {
        return !!o6[name];
    },
    ownKeys: function (target) {
        return Object.getOwnPropertyNames(o6);
    },
    o25: function (target) {
        return Object.getOwnPropertyNames(o6).filter(function (name) {
            return o6[name].enumerable;
        });
    }
};

var o28 = [
    {
        name: "non-configurable property can't be reported as non-existent",
        o29: function () {
            var target = {};
            o6 = {};
            o6.o30 = { value: 'test', configurable: false };

            Object.defineProperty(target, 'x', o6.o30);

            var o32 = new Proxy(target, o2); // Checkout handler code at the bottom
            var o8;
            delete o6.o30;

            o34.o35(function () { o8 = Object.getOwnPropertyDescriptor(o32, 'x'); }, o36, "Cannot return non-existent for a non-configurable property");
        },
    },
    {
        name: "existing property on non-extensible object cannot be reported as non-existent",
        o29: function(){
            var target = {};
            o6 = {};

            target.o30 = 20;
            Object.preventExtensions(target);
            var o8;
            var o32 = new Proxy(target, o2); // Checkout handler code at the bottom

            o34.o35(function () { o8 = Object.getOwnPropertyDescriptor(o32, 'x'); }, o36);
        }
    },
    {
        name: "non existing property on non-extensible object cannot be reported as existent",
        o29: function () {
            var target = {};
            o6 = {};
            o6.o30 = { value: 1, configurable: false };
            Object.preventExtensions(target);
            var o32 = new Proxy(target, o2);
            o34.o35(function () { Object.getOwnPropertyDescriptor(o32, 'x') }, o36);
        }
    },
    {
        name:'configurable property cannot be reported as non-configurable',
        o29: function () {
            var target = {};
            o6 = {};
            o6.o30 = { value: 1, configurable: false };
            Object.defineProperty(target, 'x', { value: 1, configurable: true });
            var o32 = new Proxy(target, o2);
            o34.o35(function () { o8 = Object.getOwnPropertyDescriptor(o32, 'x') }, o36, "configurable property cannot be reported as non-configurable");
        }
    },
    {
        name: "a non-existent property cannot be reported as non-configurable",
        o29: function() {
            o6 = {};
            var target = {};
            Object.defineProperty(o6, 'y', { value: 'test', configurable: 'false' });
            var o32 = new Proxy(target, o2);
            o34.o35(function () { var o8 = Object.getOwnPropertyDescriptor(o32, 'y') }, o36, "a non-existent property cannot be reported as non-configurable");
        }
    },
    {
        name: "can't add property on non-extensible object.",
        o29: function () {
            var target = {};
            Object.preventExtensions(target);
            o6 = {};
            o6.o30 = 5;
            var o32 = new Proxy(target, o6);
            o9 = function () { };
            o34.o35(function () { Object.defineProperty(o32, 'x', { value: 20 }) }, o36);
        },
    },
    {
        name: "target property must be non-configurable after set as such in proxy #1",
        o29: function () {
            var target = {};
            o6 = {};
            var o32 = new Proxy(target, o2);
            o9 = function () { };
            o9.o30 = 21;
            o34.o35(function () { Object.defineProperty(o32, 'x', { value: 20, configurable: false }) }, o36);
        },
    },
    {
        name: "target property must be non-configurable after set as such in proxy #2",
        o29: function () {
            var target = {};
            o6 = {};
            o6.o30 = 5;
            var o32 = new Proxy(target, o2);
            Object.defineProperty(target, 'x', { value: 41, configurable: true });
            o9 = function () { };
            o9.o30 = 21;

            o34.o35(function () { Object.defineProperty(o32, 'x', { value: 20, configurable: false }) }, o36);
        },
    },

];

o37.o38(o28, { o39: o0.o40[0] != "summary" });


