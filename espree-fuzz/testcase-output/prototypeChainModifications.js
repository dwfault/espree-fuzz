//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = Object.create(Object.prototype, {
    o1: {
        configurable: true,
        get: function () {
            Object.defineProperty(this, "foo", {
                value: "new prop"
            });
            return "old prop";
        },
    }
});
var o2 = Object.create(o0);
o3.o4(o2.o1);
o3.o4(o2.o1);

var o5 = Object.create(Object.prototype, {
    o1: {
        configurable: true,
        get: function () {
            Object.defineProperty(this, "foo", {
                value: "new prop"
            });
            return "old prop";
        },
    }
});
var o6 = Object.create(o5);
o6.o7 = 123;
o3.o4(o6.o1);
o3.o4(o6.o1);

var o7 = Object.create(Object.prototype, {
    o1: {
        configurable: true,
        get: function () {
            Object.defineProperty(o8, "foo", {
                value: "new prop"
            });
            return "old prop";
        },
    }
});
var o8 = Object.create(o7);
var o9 = Object.create(o8);
o3.o4(o9.o1);
o3.o4(o9.o1);

var o10 = Object.create(Object.prototype, {
    o1: {
        configurable: true,
        get: function () {
            Object.defineProperty(this, "foo", {
                value: "new prop"
            });
            return "old prop";
        },
    }
});
o3.o4(o10.o1);
o3.o4(o10.o1);