//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = Object.create(Object.prototype, {
    o4: {
        configurable: true,
        get: function () {
            Object.defineProperty(this, "foo", {
                value: "new prop"
            });
            return "old prop";
        },
    }
});
var o9 = Object.create(o0);
o10.o11(o9.o4);
o10.o11(o9.o4);

var o12 = Object.create(Object.prototype, {
    o4: {
        configurable: true,
        get: function () {
            Object.defineProperty(this, "foo", {
                value: "new prop"
            });
            return "old prop";
        },
    }
});
var o13 = Object.create(o12);
o13.o14 = 123;
o10.o11(o13.o4);
o10.o11(o13.o4);

var o14 = Object.create(Object.prototype, {
    o4: {
        configurable: true,
        get: function () {
            Object.defineProperty(o15, "foo", {
                value: "new prop"
            });
            return "old prop";
        },
    }
});
var o15 = Object.create(o14);
var o16 = Object.create(o15);
o10.o11(o16.o4);
o10.o11(o16.o4);

var o17 = Object.create(Object.prototype, {
    o4: {
        configurable: true,
        get: function () {
            Object.defineProperty(this, "foo", {
                value: "new prop"
            });
            return "old prop";
        },
    }
});
o10.o11(o17.o4);
o10.o11(o17.o4);