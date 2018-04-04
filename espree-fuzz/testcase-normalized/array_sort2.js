//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Array sort testing for Object type
var o0 = new Object();
o0 = [8,41, 25, 7];
o0.o2 = Array.prototype.sort;
o6.o7(o0.o2(function(o8,o9){return o8 - o9}));

o10 = [9, 8, 4, 10, 190, 12, 20];
o10.o2 = Array.prototype.sort;
o6.o7(o10.o2());

// Test sort on generic object
var o11 = {
    "empty array": function () {
        return [];
    },

    "array with one undefined": function () {
        return [undefined];
    },

    "array with one null": function () {
        var o13 = [0];
        delete o13[0];
        return o13;
    },

    "array with two undefined": function () {
        return [undefined, undefined];
    },

    "array with multiple undefined": function () {
        var o13 = [undefined,,undefined,undefined,,,,undefined];
        return o13;
    },

    "array with multiple null": function () {
        var o13 = [7,,5,2,,,6];
        for (var o14 = 0; o14 < o13.length; o14++) {
            delete o13[o14];
        }
        return o13;
    },

    "array with mixed undefined and null": function () {
        var o13 = [undefined,1,,9,,3,8,undefined];
        delete o13[0];
        return o13;
    },

    "empty object": function () {
        return {
            length: 0
        };
    },

    "object with one undefined": function () {
        return {
            0: undefined,
            length: 1
        };
    },

    "object with one missing": function () {
        return {
            length: 1
        };
    },

    "object with undefined, missing": function () {
        return {
            0: undefined,
            length: 2
        };
    },

    "object with multiple undefined": function () {
        return {
            0: undefined,
            3: undefined,
            7: undefined,
            8: undefined,
            length: 10
        };
    },

    "adhoc object": function () {
        return {
            0: 7,
            2: 5,
            3: 2,
            6: 6,
            length: 10
        };
    },
};

function o16(name) {
    var o18 = o11[name]();
    o18.sort = Array.prototype.sort;
    o18.join = Array.prototype.join;
    o18.toString = Array.prototype.toString;
    return o18;
}

var o21 = o6.o7;
o21();
for (var name in o11) {
    o21("Test " + name);
    o21(o16(name).sort());
    o21(o16(name).sort(function(o8,o9){return o9 - o8;}));
    o21();
}
