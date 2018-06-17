//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

function o69(o18,o63) {
        try {
o12 = +o62;
}catch(o4){}
        try {
function(o30) { try {
return o30;
}catch(e){} };
}catch(o421){}
        try { write(Boolean(true) >= Number.NaN); } catch(e) {}
    }
function o8(o3, o4)
{
    var o9 = o3.concat(o4);
    try {
o7.o9 = false;
}catch(e){}
    function o1106(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1065 = o247
}catch(e){}
    };
    try {
o6.o2(o4, o10[o3.length], "Indexing d at a.length should return b");
}catch(e){}
    try {
for(var o7 = 0;o7 < o3.length; o7++)
    {
        try {
o6.o2(o3[o7], o9[o7], "confirm array a makes up the first half of array c");
}catch(e){}
        try {
o6.o2(o3[o7], o10[o7], "confirm array a makes up the first half of array d");
}catch(e){}
    }
}catch(e){}
    try {
for(var o7 = 0;o7 < o4.length; o7++)
    {
        try {
o6.o2(o4[o7], o9[o3.length+o7], "confirm array b makes up the second half of array c");
}catch(e){}
        try {
o6.o2(o4[o7], o10[o3.length][o7], "confirm array b makes up a sub array at d[a.length]");
}catch(e){}

    }
}catch(e){}

    try {
o6.o2(o3.length+1, o10.length, "since we are not flattening the top level array grows only by 1");
}catch(e){}
    try {
o11 = false;
}catch(e){}

    try {
delete o4[Symbol.isConcatSpreadable];
}catch(e){}
}
var o12 = [
   {
       name: "nativeInt Arrays",
       o13: function ()
       {
            var o3 = [1, 2, 3];
            var o4 = [4, 5, 6];
            try {
o8(o3, o4);
}catch(e){}
       }
    },
    {
       name: "nativefloat Arrays",
       o13: function ()
       {
            var o3 = [1.1, 2.2, 3.3];
            var o4 = [4.4, 5.5, 6.6];
            try {
o8(o3, o4);
}catch(e){}
       }
    },
    {
       name: "Var Arrays",
       o13: function ()
       {
            var o3 = ["a", "b", "c"];
            var o4 = ["d", "e", "f"];
            try {
o8(o3, o4);
}catch(e){}
       }
    },
    {
       name: "intermixed Arrays",
       o13: function ()
       {
            var o3 = [1.1, "b", 3];
            var o4 = [4, 5.5, "f"];
            try {
o8(o3, o4);
}catch(e){}
       }
    },
    {
       name: "concating spreadable objects",
       o13: function ()
       {
            var o3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var o4 = [1, 2, 3].concat(4, 5, { [Symbol.isConcatSpreadable]: true, 0: 6, 1: 7, 2: 8, "length" : 3 }, 9, 10);
            try {
o2(o3, o4);
}catch(e){}
            // Test to confirm we Spread to nothing when length is not set
            var o3 = [1, 2, 3, 4, 5, 9, 10];
            var o4 = [1, 2, 3].concat(4, 5, { [Symbol.isConcatSpreadable]: true, 0: 6, 1: 7, 2: 8}, 9, 10);
            try {
o2(o3, o4);
}catch(e){}
       }
    },
    {
       name: " concat with non-arrays",
       o13: function ()
       {
            var o3 = [1.1, 2.1, 3.1];
            var o4 = 4.1;
            try {
o8(o3, o4);
}catch(e){}
            var o3 = [1, 2, 3];
            var o4 = 4;
            try {
o8(o3, o4);
}catch(e){}
            var o3 = [1, 2, 3];
            var o4 = "b";
            try {
o8(o3, o4);
}catch(e){}
            var o3 = [1, 2, 3];
            var o4 = true;
            try {
o8(o3, o4);
}catch(e){}
       }
    },
    {
       name: "override with constructors",
       o13: function ()
       {
            var o3 = [1, 2, 3];
            var o4 = [4.4, 5.5, 6.6];
            var o9 = [Object, {}, undefined, Math.sin];
            try {
for(var o7 = 0; o7 < o9.length;o7++)
            {
                try {
o3['constructor'] = o9[o7];
}catch(e){}
                try {
o8(o3, o4);
}catch(e){}
            }
}catch(e){}
            var o14  = [];
            try {
o14.constructor = function()
            {
                var o3 = new Array(100);
                try {
o3[0] = 10;
}catch(e){}
                try {
return o3;
}catch(e){}
            }
}catch(e){}
            try {
o2([1, 2, 3], o14.concat([1, 2, 3]));
}catch(e){}
       }
    },
    {
        name: "test ToBoolean on array[@@isConcatSpreadable]",
        o13: function ()
        {
            function test(o15, o16, o17) {

                var o3 = [o15], o4 = [o16, o17];
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable] undefined');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = null;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==null');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==false');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = '';
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==\'\'');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 0;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = +0.0;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==+0.0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = -0.0;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==-0.0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = NaN;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==NaN');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = undefined;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==undefined');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==true');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 'abc';
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]=\'abc\'');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 0.1;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==0.1');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = -0.1;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==-0.1');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = Symbol();
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==Symbol()');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = {};
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]=={}');
}catch(e){}

                try {
delete o4[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable] deleted');
}catch(e){}
            }

            try {
test(1, 2, 3);
}catch(e){}
            try {
test(1.1, 2.2, 3.3);
}catch(e){}
            try {
test("a", "b", "c");
}catch(e){}
            try {
test(1.1, "b", 3);
}catch(e){}
            try {
test(4, 5.5, "f");
}catch(e){}
            try {
test(undefined, NaN, function(){});
}catch(e){}
        }
    },
    {
        name: "test ToBoolean on object[@@isConcatSpreadable]",
        o13: function ()
        {
            function test(o15, o16, o17) {

                var o3 = [o15], o4 = {'0':o16, '1':o17, 'length':2};
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable] undefined');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = null;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==null');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==false');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = '';
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==\'\'');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 0;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = +0.0;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==+0.0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = -0.0;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==-0.0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = NaN;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==NaN');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = undefined;
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==undefined');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==true');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 'abc';
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==\'abc\'');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 0.1;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==0.1');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = -0.1;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==-0.1');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = Symbol();
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==Symbol()');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = {};
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]=={}');
}catch(e){}

                try {
delete o4[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable] deleted');
}catch(e){}
            }

            try {
test(1, 2, 3);
}catch(e){}
            try {
test(1.1, 2.2, 3.3);
}catch(e){}
            try {
test("a", "b", "c");
}catch(e){}
            try {
test(1.1, "b", 3);
}catch(e){}
            try {
test(4, 5.5, "f");
}catch(e){}
            try {
test(undefined, NaN, function(){});
}catch(e){}
        }
    },
    {
        name: "two arrays that may share the same type",
        o13: function ()
        {
            function test(o15, o16, o17) {
                var o3 = [o15], o4 = [o16, o17], o9 = [o16, o17];
                try {
o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable] undefined');
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o9), 'c[@@isConcatSpreadable] undefined');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o9), 'c[@@isConcatSpreadable] undefined');
}catch(e){}

                try {
o9[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');
}catch(e){}

                try {
o9[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o9), 'c[@@isConcatSpreadable]==true');
}catch(e){}

                try {
o9[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = undefined;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable]==undefined');
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');
}catch(e){}

                try {
delete o4[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable] deleted');
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');
}catch(e){}

                try {
delete o9[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable] deleted');
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o9), 'c[@@isConcatSpreadable] deleted');
}catch(e){}
            }

            try {
test(1, 2, 3);
}catch(e){}
            try {
test(1.1, 2.2, 3.3);
}catch(e){}
            try {
test("a", "b", "c");
}catch(e){}
            try {
test(1.1, "b", 3);
}catch(e){}
            try {
test(4, 5.5, "f");
}catch(e){}
            try {
test(undefined, NaN, function(){});
}catch(e){}
        }
    },
    {
        name: "user-defined length",
        o13: function ()
        {
            function test(o3, o4, o9) {
                var o18 = (function() { try {
return arguments;
}catch(e){} })(o3, o4, o9);
                try {
o18[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([o3, o4, o9, o3, o4, o9], [].concat(o18, o18), '['+o3+', '+o4+', '+o9+', '+o3+', '+o4+', '+o9+']');
}catch(e){}
                try {
Object.defineProperty(o18, "length", { value: 6 });
}catch(e){}
                try {
o2([o3, o4, o9, undefined, undefined, undefined], [].concat(o18), '['+o3+', '+o4+', '+o9+', undefined, undefined, undefined]');
}catch(e){}
            }

            try {
test(1, 2, 3);
}catch(e){}
            try {
test(1.1, 2.2, 3.3);
}catch(e){}
            try {
test("a", "b", "c");
}catch(e){}
            try {
test(1.1, "b", 3);
}catch(e){}
            try {
test(4, 5.5, "f");
}catch(e){}
            try {
test(undefined, NaN, function(){});
}catch(e){}
        }
    },
    {
        name: "concat a mix of user-constructed objects and arrays",
        o13: function ()
        {
            class o19 extends Object {}
            var o3 = new o19;
            try {
o3.length = 5;
}catch(e){}
            try {
o3[0] = 'a';
}catch(e){}
            try {
o3[2] = 'b';
}catch(e){}
            try {
o3[4] = 'c';
}catch(e){}

            var o4 = { length: 3, "0": "a", "1": "b", "2": "c" };

            class o20 extends Array {}
            var o9 = new o20("a", "b", "c");
            var o10 = ['e', 'f', 'g'];

            try {
o3[Symbol.isConcatSpreadable] = true;
}catch(e){}
            try {
o10[Symbol.isConcatSpreadable] = false;
}catch(e){}

            try {
o2(['a', undefined, 'b', undefined, 'c', o4, 'a', 'b', 'c', ['e', 'f', 'g']], Array.prototype.concat.call(o3, o4, o9, o10));
}catch(e){}
        }
    },
    {
        name: "verify ToLength operation",
        o13: function ()
        {
            var o21 = {"length": {valueOf: null, toString: null}};
            try {
o21[Symbol.isConcatSpreadable] = true;
}catch(e){}
            try {
o6.o22(()=>Array.prototype.concat.call(o21), o23, '{valueOf: null, toString: null}', "Number expected");
}catch(e){}

            try {
o21 = {"length": {toString: function() { try {
throw new Error('User-defined error in toString');
}catch(e){} }, valueOf: null}};
}catch(e){}
            try {
o21[Symbol.isConcatSpreadable] = true;
}catch(e){}
            try {
o6.o22(()=>Array.prototype.concat.call(o21), Error, 'toString() throws', "User-defined error in toString");
}catch(e){}

            try {
o21 = {"length": {toString: function() { try {
return 'string';
}catch(e){} }, valueOf: null}};
}catch(e){}
            try {
o21[Symbol.isConcatSpreadable] = true;
}catch(e){}
            try {
o2([], [].concat(o21), ' toString() returns string');
}catch(e){}

            try {
o21 = {"length": {valueOf: function() { try {
throw new Error('User-defined error in valueOf');
}catch(e){} }, toString: null}};
}catch(e){}
            try {
o21[Symbol.isConcatSpreadable] = true;
}catch(e){}
            try {
o6.o22(()=>Array.prototype.concat.call(o21), Error, 'valueOf() throws', "User-defined error in valueOf");
}catch(e){}

            try {
o21 = {"length": {valueOf: function() { try {
return 'string';
}catch(e){} }, toString: null}};
}catch(e){}
            try {
o21[Symbol.isConcatSpreadable] = true;
}catch(e){}
            try {
o2([], [].concat(o21), 'toString() returns string');
}catch(e){}

            try {
o21 = { "length": -4294967294, "0": "a", "2": "b", "4": "c" };
}catch(e){}
            try {
o21[Symbol.isConcatSpreadable] = true;
}catch(e){}
            try {
o2([], [].concat(o21), 'ToLength clamps negative to zero');
}catch(e){}

            try {
o21.length = -0.0;
}catch(e){}
            try {
o2([], [].concat(o21), 'ToLength clamps negative to zero');
}catch(e){}

            try {
o21.length = "-4294967294";
}catch(e){}
            try {
o2([], [].concat(o21), 'ToLength clamps negative to zero');
}catch(e){}

            try {
o21.length = "-0.0";
}catch(e){}
            try {
o2([], [].concat(o21), 'ToLength clamps negative to zero');
}catch(e){}
        }
    },
    {
        name: "Getter of [@@isConcatSpreadable] throws",
        o13: function ()
        {
            var o21 = {};
            try {
Object.defineProperty(o21, Symbol.isConcatSpreadable, {
                get: function() { try {
throw Error('User-defined error in @@isConcatSpreadable getter');
}catch(e){} }
            });
}catch(e){}
            try {
o6.o22(()=>[].concat(o21), Error, '[].concat(obj)', "User-defined error in @@isConcatSpreadable getter");
}catch(e){}
            try {
o6.o22(()=>Array.prototype.concat.call(o21), Error, 'Array.prototype.concat.call(obj)', "User-defined error in @@isConcatSpreadable getter");
}catch(e){}
        }
    },
    {
        name: "spread Function object",
        o13: function ()
        {
            function test(o24) {
                var o25 = function(o15, o16, o17){};
                try {
o2([o25], [].concat(o25), 'Function object');
}catch(e){}

                try {
o25[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([undefined, undefined, undefined], [].concat(o25), 'func[Symbol.isConcatSpreadable] == true');
}catch(e){}

                try {
o25[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o25], [].concat(o25), 'func[Symbol.isConcatSpreadable] == false');
}catch(e){}

                try {
o25[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([undefined, undefined, undefined], [].concat(o25), 'func[Symbol.isConcatSpreadable] == true');
}catch(e){}

                try {
o25[0] = o24[0];
}catch(e){}
                try {
o25[1] = o24[1];
}catch(e){}
                try {
o25[2] = o24[2];
}catch(e){}
                try {
o2(o24, [].concat(o25), 'func[0..2] assigned');
}catch(e){}

                try {
delete o25[0];
}catch(e){}
                try {
delete o25[1];
}catch(e){}
                try {
delete o25[2];
}catch(e){}
                try {
o2([undefined, undefined, undefined], [].concat(o25), 'func[0..2] deleted');
}catch(e){}

                try {
delete o25[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o25], [].concat(o25), 'func[Symbol.isConcatSpreadable] deleted');
}catch(e){}

                try {
Function.prototype[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([undefined, undefined, undefined], [].concat(o25), 'Function.prototype[Symbol.isConcatSpreadable] == true');
}catch(e){}

                try {
Function.prototype[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o25], [].concat(o25), 'Function.prototype[Symbol.isConcatSpreadable] == false');
}catch(e){}

                try {
Function.prototype[0] = o24[0];
}catch(e){}
                try {
Function.prototype[1] = o24[1];
}catch(e){}
                try {
Function.prototype[2] = o24[2];
}catch(e){}
                try {
o2([o25], [].concat(o25), 'Function.prototype[0..2] assigned');
}catch(e){}

                try {
Function.prototype[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2(o24, [].concat(o25), 'Function.prototype[Symbol.isConcatSpreadable] == true');
}catch(e){}

                try {
delete Function.prototype[0];
}catch(e){}
                try {
delete Function.prototype[1];
}catch(e){}
                try {
delete Function.prototype[2];
}catch(e){}
                try {
o2([undefined, undefined, undefined], [].concat(o25), 'Function.prototype[0..2] deleted');
}catch(e){}

                try {
delete Function.prototype[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o25], [].concat(o25), 'Function.prototype[Symbol.isConcatSpreadable] deleted');
}catch(e){}
            }

            try {
test([1, 2, 3]);
}catch(e){}
            try {
test([1.1, 2.2, 3.3]);
}catch(e){}
            try {
test(["a", "b", "c"]);
}catch(e){}
            try {
test([2, NaN, function(){}]);
}catch(e){}
        }
    },
    {
        name: "spread Number, Boolean, and RegExp",
        o13: function ()
        {
            function test(o26, o27, o24) {
                var o21 = new o26(o27);
                try {
o2([o21], [].concat(o21), o26.name+' obj');
}catch(e){}

                try {
o21[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([], [].concat(o21), o26.name+' obj[Symbol.isConcatSpreadable] == true');
}catch(e){}

                try {
o21.length = o24.length;
}catch(e){}
                try {
o2(new Array(o24.length), [].concat(o21), o26.name+' obj[length] assigned');
}catch(e){}

                try {
for (var o7 = 0; o7 < o24.length; o7++) {
                    try {
o21[o7] = o24[o7];
}catch(e){}
                }
}catch(e){}
                try {
o2(o24, [].concat(o21), o26.name+' obj[0..length] assigned');
}catch(e){}

                try {
o21[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o21], [].concat(o21), o26.name+' obj[Symbol.isConcatSpreadable] == false');
}catch(e){}

                try {
o21[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2(o24, [].concat(o21), o26.name+' obj[Symbol.isConcatSpreadable] == true');
}catch(e){}

                try {
for (var o7 = 0; o7 < o24.length; o7++) {
                    try {
delete o21[o7];
}catch(e){}
                }
}catch(e){}
                try {
o2(new Array(o24.length), [].concat(o21), o26.name+' obj[0..length] deleted');
}catch(e){}

                try {
delete o21.length;
}catch(e){}
                try {
o2([], [].concat(o21), o26.name+' obj[length] deleted');
}catch(e){}

                try {
delete o21[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o21], [].concat(o21), o26.name+' obj[Symbol.isConcatSpreadable] deleted');
}catch(e){}

                try {
o26.prototype[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([], [].concat(o21), o26.name+'.prototype[Symbol.isConcatSpreadable] == true');
}catch(e){}

                try {
o26.prototype.length = o24.length;
}catch(e){}
                try {
o2(new Array(o24.length), [].concat(o21), o26.name+'.prototype[length] assigned');
}catch(e){}

                try {
for (var o7 = 0; o7 < o24.length; o7++) {
                    try {
o26.prototype[o7] = o24[o7];
}catch(e){}
                }
}catch(e){}
                try {
o2(o24, [].concat(o21), o26.name+'.prototype[0..length] assigned');
}catch(e){}

                try {
o26.prototype[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o21], [].concat(o21), o26.name+'.prototype[Symbol.isConcatSpreadable] == false');
}catch(e){}

                try {
o26.prototype[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2(o24, [].concat(o21), o26.name+'.prototype[Symbol.isConcatSpreadable] == true');
}catch(e){}

                try {
for (var o7 = 0; o7 < o24.length; o7++) {
                    try {
delete o26.prototype[o7];
}catch(e){}
                }
}catch(e){}
                try {
o2(new Array(o24.length), [].concat(o21), o26.name+'.prototype[0..length] deleted');
}catch(e){}

                try {
delete o26.prototype.length;
}catch(e){}
                try {
o2([], [].concat(o21), o26.name+'.prototype[length] deleted');
}catch(e){}

                try {
delete o26.prototype[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o21], [].concat(o21), o26.name+'.prototype[Symbol.isConcatSpreadable] deleted');
}catch(e){}
            }

            try {
test(Number, 0, [1, 2, 3]);
}catch(e){}
            try {
test(Number, -0.1, [1.1, 2.2, 3.3]);
}catch(e){}
            try {
test(Number, NaN, ["a", "b", "c"]);
}catch(e){}
            try {
test(Number, 321, [1, "ab", 2.2, 2, NaN, 3, function(){ }]);
}catch(e){}

            try {
test(Boolean, true, [1, 2, 3]);
}catch(e){}
            try {
test(Boolean, false, [1.1, 2.2, 3.3]);
}catch(e){}
            try {
test(Boolean, true, ["a", "b", "c"]);
}catch(e){}
            try {
test(Boolean, false, [1, "ab", 2.2, 2, NaN, 3, function(){ }]);
}catch(e){}

            try {
test(RegExp, /^/, [1, 2, 3]);
}catch(e){}
            try {
test(RegExp, /abc/, [1.1, 2.2, 3.3]);
}catch(e){}
            try {
test(RegExp, /(\d+)/, ["a", "b", "c"]);
}catch(e){}
            try {
test(RegExp, /^\s*\S+\s*$/, [1, "ab", 2.2, 2, NaN, 3, function(){ }]);
}catch(e){}
        }
    },
    {
        name: "spread String object",
        o13: function ()
        {
            function test() {
                var o28 = new String("abc");
                try {
o2([o28], [].concat(o28), "string");
}catch(e){}

                try {
o28[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2(['a', 'b', 'c'], [].concat(o28), "string s[Symbol.isConcatSpreadable] == true");
}catch(e){}

                try {
o28[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o28], [].concat(o28), "string s[Symbol.isConcatSpreadable] == false");
}catch(e){}

                try {
o28[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2(['a', 'b', 'c'], [].concat(o28), "string s[Symbol.isConcatSpreadable] == true");
}catch(e){}

                try {
delete o28[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o28], [].concat(o28), "string s[Symbol.isConcatSpreadable] deleted");
}catch(e){}

                try {
String.prototype[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2(['a', 'b', 'c'], [].concat(o28), "string.prototype[Symbol.isConcatSpreadable] == true");
}catch(e){}

                try {
String.prototype[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o28], [].concat(o28), "string.prototype[Symbol.isConcatSpreadable] == false");
}catch(e){}

                try {
String.prototype[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2(['a', 'b', 'c'], [].concat(o28), "string.prototype[Symbol.isConcatSpreadable] == true");
}catch(e){}

                try {
delete String.prototype[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o28], [].concat(o28), "string.prototype[Symbol.isConcatSpreadable] deleted");
}catch(e){}
            }

            try {
test();
}catch(e){}
        }
    },
    {
        name: "Revokable proxy revoked when retrieving [@@isConcatSpreadable]",
        o13: function ()
        {
            // proxy revoked
            var o21 = {};
            var o29 = Proxy.revocable(o21, {
                get: function(target, o30) {
                    try {
if (o30 === Symbol.isConcatSpreadable) { try {
o29.o31();
}catch(e){} }
}catch(e){}
                    try {
return o21[o30];
}catch(e){}
                }
            });
            try {
o6.o22(()=>[].concat(o29.o32), o23, 'proxy revoked', 'method  is called on a revoked Proxy object');
}catch(e){}
        }
    },
    {
        name: "[@@isConcatSpreadable] getter altering array type",
        o13: function ()
        {
            function test(o24, o33, o34) {
                var o35 = o24.slice(0);
                try {
o35[o33] = o34;
}catch(e){}
                try {
Object.defineProperty(o24, Symbol.isConcatSpreadable, {
                        get: function() {
                            try {
o24[o33] = o34;
}catch(e){}
                            try {
return true;
}catch(e){}
                        }
                    })
}catch(e){}
                try {
o2(o35, [].concat(o24), 'expecting ['+o35+']');
}catch(e){}
            }

            try {
test([1, 2, 3], 1, 'abc');
}catch(e){}
            try {
test([1.1, 2.2, 3.3], 0, {});
}catch(e){}
        }
    },
    {
        name: "[@@isConcatSpreadable] getter altering binding",
        o13: function ()
        {
            function test(o24, o35) {
                try {
Object.defineProperty(o24, Symbol.isConcatSpreadable, {
                        get: function() {
                            try {
o24 = [];
}catch(e){}
                            try {
return true;
}catch(e){}
                        }
                    })
}catch(e){}
                try {
o2(o35, Array.prototype.concat.call(o24, o24), 'expecting ['+o35+']');
}catch(e){}
                try {
o2([], Array.prototype.concat.call(o24, o24), 'expecting []');
}catch(e){}
            }

            try {
test([1, 2, 3], [1, 2, 3, 1, 2, 3]);
}catch(e){}
            try {
test([1.1, 2.2, 3.3], [1.1, 2.2, 3.3, 1.1, 2.2, 3.3]);
}catch(e){}
            try {
test(["a", "b", "c"], ["a", "b", "c", "a", "b", "c"]);
}catch(e){}
            try {
test([1.1, "b", 3], [1.1, "b", 3, 1.1, "b", 3]);
}catch(e){}
            try {
test([4, 5.5, "f"], [4, 5.5, "f", 4, 5.5, "f"]);
}catch(e){}
            var o25 = function() {};
            try {
test([undefined, NaN, o25], [undefined, NaN, o25, undefined, NaN, o25]);
}catch(e){}
        }
    },
    {
        name: "[@@isConcatSpreadable] getter changing array to ES5 array",
        o13: function ()
        {
            function test(o24, o33, o34) {
                var o35 = o24.slice(0);
                try {
o35[o33] = o34;
}catch(e){}
                try {
Object.defineProperty(o24, Symbol.isConcatSpreadable, {
                        get: function() {
                            try {
Object.defineProperty(o24, o33, { 'get': function(){ try {
return o34;
}catch(e){} } });
}catch(e){}
                            try {
return true;
}catch(e){}
                        }
                    })
}catch(e){}
                try {
o2(o35, Array.prototype.concat.call(o24), 'expecting ['+o24+']');
}catch(e){}
            }

            try {
test([1, 2, 3], 1, 'abc');
}catch(e){}
            try {
test([1.1, 2.2, 3.3], 0, {});
}catch(e){}
        }
    },
    {
        name: "[@@isConcatSpreadable] getter setting illegal length property in object",
        o13: function ()
        {
            function test(o3) {
                var o4 = {"0":1, "1":2, "length": 2};
                try {
Object.defineProperty(o4, Symbol.isConcatSpreadable, {
                        get: function() {
                            try {
o4.length = 9007199254740989;
}catch(e){}
                            try {
return true;
}catch(e){}
                        }
                    });
}catch(e){}
                try {
o6.o22(()=>o3.concat(o4), o23, o3, "Illegal length and size specified for the array");
}catch(e){}
            }

            try {
test([1, 2, 3]);
}catch(e){}
            try {
test([1.1, 2.2, 3.3]);
}catch(e){}
            try {
test(["a", "b", "c"]);
}catch(e){}
            try {
test([1.1, "b", 3]);
}catch(e){}
            try {
test([4, 5.5, "f"]);
}catch(e){}
            try {
test([undefined, NaN, function(){}]);
}catch(e){}
        }
    },
    ];

try {
o36.o37(o12, { o38: o0.o39[0] != "summary" });
}catch(e){}
