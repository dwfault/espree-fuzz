//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Array sort testing for Object type
var o0 = new Object();
o0 = [8,41, 25, 7];
o0.o1 = Array.prototype.sort;
o2.o3(o0.o1(function(o4,o5){return o4 - o5}));

o6 = [9, 8, 4, 10, 190, 12, 20];
o6.o1 = Array.prototype.sort;
o2.o3(o6.o1());

// Test sort on generic object
var o7 = {
    "empty array": function () {
        return [];
    },

    "array with one undefined": function () {
        return [undefined];
    },

    "array with one null": function () {
        var o8 = [0];
        delete o8[0];
        return o8;
    },

    "array with two undefined": function () {
        return [undefined, undefined];
    },

    "array with multiple undefined": function () {
        var o8 = [undefined,,undefined,undefined,,,,undefined];
        return o8;
    },

    "array with multiple null": function () {
        var o8 = [7,,5,2,,,6];
        for (var o9 = 0; o9 < o8.length; o9++) {
            delete o8[o9];
        }
        return o8;
    },

    "array with mixed undefined and null": function () {
        var o8 = [undefined,1,,9,,3,8,undefined];
        delete o8[0];
        return o8;
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

function o10(name) {
    var o11 = o7[name]();
    o11.sort = Array.prototype.sort;
    o11.join = Array.prototype.join;
    o11.toString = Array.prototype.toString;
    return o11;
}

var o12 = o2.o3;
o12();
for (var name in o7) {
    o12("Test " + name);
    o12(o10(name).sort());
    o12(o10(name).sort(function(o4,o5){return o5 - o4;}));
    o12();
}
