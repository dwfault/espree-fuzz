//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3, o4, o5)
{
    o6.o2(o3.length, o4.length, o5);
    for(var o8 = 0;o8 < o3.length; o8++)
    {
        o6.o2(o3[o8], o4[o8], o5);
    }
}
function o9(o3, o4)
{
    var o10 = o3.concat(o4);
    o4[Symbol.isConcatSpreadable] = false;
    var o14 = o3.concat(o4);
    o6.o2(o4, o14[o3.length], "Indexing d at a.length should return b");
    for(var o8 = 0;o8 < o3.length; o8++)
    {
        o6.o2(o3[o8], o10[o8], "confirm array a makes up the first half of array c");
        o6.o2(o3[o8], o14[o8], "confirm array a makes up the first half of array d");
    }
    for(var o8 = 0;o8 < o4.length; o8++)
    {
        o6.o2(o4[o8], o10[o3.length+o8], "confirm array b makes up the second half of array c");
        o6.o2(o4[o8], o14[o3.length][o8], "confirm array b makes up a sub array at d[a.length]");

    }

    o6.o2(o3.length+1, o14.length, "since we are not flattening the top level array grows only by 1");
    o15 = false;

    delete o4[Symbol.isConcatSpreadable];
}
var o16 = [
   {
       name: "nativeInt Arrays",
       o18: function ()
       {
            var o3 = [1, 2, 3];
            var o4 = [4, 5, 6];
            o9(o3, o4);
       }
    },
    {
       name: "nativefloat Arrays",
       o18: function ()
       {
            var o3 = [1.1, 2.2, 3.3];
            var o4 = [4.4, 5.5, 6.6];
            o9(o3, o4);
       }
    },
    {
       name: "Var Arrays",
       o18: function ()
       {
            var o3 = ["a", "b", "c"];
            var o4 = ["d", "e", "f"];
            o9(o3, o4);
       }
    },
    {
       name: "intermixed Arrays",
       o18: function ()
       {
            var o3 = [1.1, "b", 3];
            var o4 = [4, 5.5, "f"];
            o9(o3, o4);
       }
    },
    {
       name: "concating spreadable objects",
       o18: function ()
       {
            var o3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var o4 = [1, 2, 3].concat(4, 5, { [Symbol.isConcatSpreadable]: true, 0: 6, 1: 7, 2: 8, "length" : 3 }, 9, 10);
            o2(o3, o4);
            // Test to confirm we Spread to nothing when length is not set
            var o3 = [1, 2, 3, 4, 5, 9, 10];
            var o4 = [1, 2, 3].concat(4, 5, { [Symbol.isConcatSpreadable]: true, 0: 6, 1: 7, 2: 8}, 9, 10);
            o2(o3, o4);
       }
    },
    {
       name: " concat with non-arrays",
       o18: function ()
       {
            var o3 = [1.1, 2.1, 3.1];
            var o4 = 4.1;
            o9(o3, o4);
            var o3 = [1, 2, 3];
            var o4 = 4;
            o9(o3, o4);
            var o3 = [1, 2, 3];
            var o4 = "b";
            o9(o3, o4);
            var o3 = [1, 2, 3];
            var o4 = true;
            o9(o3, o4);
       }
    },
    {
       name: "override with constructors",
       o18: function ()
       {
            var o3 = [1, 2, 3];
            var o4 = [4.4, 5.5, 6.6];
            var o10 = [Object, {}, undefined, Math.sin];
            for(var o8 = 0; o8 < o10.length;o8++)
            {
                o3['constructor'] = o10[o8];
                o9(o3, o4);
            }
            var o23  = [];
            o23.constructor = function()
            {
                var o3 = new Array(100);
                o3[0] = 10;
                return o3;
            }
            o2([1, 2, 3], o23.concat([1, 2, 3]));
       }
    },
    {
        name: "test ToBoolean on array[@@isConcatSpreadable]",
        o18: function ()
        {
            function test(o27, o28, o29) {

                var o3 = [o27], o4 = [o28, o29];
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable] undefined');

                o4[Symbol.isConcatSpreadable] = null;
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==null');

                o4[Symbol.isConcatSpreadable] = false;
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = '';
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==\'\'');

                o4[Symbol.isConcatSpreadable] = 0;
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==0');

                o4[Symbol.isConcatSpreadable] = +0.0;
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==+0.0');

                o4[Symbol.isConcatSpreadable] = -0.0;
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==-0.0');

                o4[Symbol.isConcatSpreadable] = NaN;
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==NaN');

                o4[Symbol.isConcatSpreadable] = undefined;
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==undefined');

                o4[Symbol.isConcatSpreadable] = true;
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==true');

                o4[Symbol.isConcatSpreadable] = 'abc';
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]=\'abc\'');

                o4[Symbol.isConcatSpreadable] = 0.1;
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==0.1');

                o4[Symbol.isConcatSpreadable] = -0.1;
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==-0.1');

                o4[Symbol.isConcatSpreadable] = Symbol();
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==Symbol()');

                o4[Symbol.isConcatSpreadable] = {};
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]=={}');

                delete o4[Symbol.isConcatSpreadable];
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable] deleted');
            }

            test(1, 2, 3);
            test(1.1, 2.2, 3.3);
            test("a", "b", "c");
            test(1.1, "b", 3);
            test(4, 5.5, "f");
            test(undefined, NaN, function(){});
        }
    },
    {
        name: "test ToBoolean on object[@@isConcatSpreadable]",
        o18: function ()
        {
            function test(o27, o28, o29) {

                var o3 = [o27], o4 = {'0':o28, '1':o29, 'length':2};
                o2([o27, o4], o3.concat(o4), '[@@isConcatSpreadable] undefined');

                o4[Symbol.isConcatSpreadable] = null;
                o2([o27, o4], o3.concat(o4), '[@@isConcatSpreadable]==null');

                o4[Symbol.isConcatSpreadable] = false;
                o2([o27, o4], o3.concat(o4), '[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = '';
                o2([o27, o4], o3.concat(o4), '[@@isConcatSpreadable]==\'\'');

                o4[Symbol.isConcatSpreadable] = 0;
                o2([o27, o4], o3.concat(o4), '[@@isConcatSpreadable]==0');

                o4[Symbol.isConcatSpreadable] = +0.0;
                o2([o27, o4], o3.concat(o4), '[@@isConcatSpreadable]==+0.0');

                o4[Symbol.isConcatSpreadable] = -0.0;
                o2([o27, o4], o3.concat(o4), '[@@isConcatSpreadable]==-0.0');

                o4[Symbol.isConcatSpreadable] = NaN;
                o2([o27, o4], o3.concat(o4), '[@@isConcatSpreadable]==NaN');

                o4[Symbol.isConcatSpreadable] = undefined;
                o2([o27, o4], o3.concat(o4), '[@@isConcatSpreadable]==undefined');

                o4[Symbol.isConcatSpreadable] = true;
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==true');

                o4[Symbol.isConcatSpreadable] = 'abc';
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==\'abc\'');

                o4[Symbol.isConcatSpreadable] = 0.1;
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==0.1');

                o4[Symbol.isConcatSpreadable] = -0.1;
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==-0.1');

                o4[Symbol.isConcatSpreadable] = Symbol();
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==Symbol()');

                o4[Symbol.isConcatSpreadable] = {};
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]=={}');

                delete o4[Symbol.isConcatSpreadable];
                o2([o27, o4], o3.concat(o4), '[@@isConcatSpreadable] deleted');
            }

            test(1, 2, 3);
            test(1.1, 2.2, 3.3);
            test("a", "b", "c");
            test(1.1, "b", 3);
            test(4, 5.5, "f");
            test(undefined, NaN, function(){});
        }
    },
    {
        name: "two arrays that may share the same type",
        o18: function ()
        {
            function test(o27, o28, o29) {
                var o3 = [o27], o4 = [o28, o29], o10 = [o28, o29];
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable] undefined');
                o2([o27, o28, o29], o3.concat(o10), 'c[@@isConcatSpreadable] undefined');

                o4[Symbol.isConcatSpreadable] = false;
                o2([o27, [o28, o29]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
                o2([o27, o28, o29], o3.concat(o10), 'c[@@isConcatSpreadable] undefined');

                o10[Symbol.isConcatSpreadable] = false;
                o2([o27, [o28, o29]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = true;
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                o10[Symbol.isConcatSpreadable] = true;
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
                o2([o27, o28, o29], o3.concat(o10), 'c[@@isConcatSpreadable]==true');

                o10[Symbol.isConcatSpreadable] = false;
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = false;
                o2([o27, [o28, o29]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = undefined;
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable]==undefined');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                delete o4[Symbol.isConcatSpreadable];
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable] deleted');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                delete o10[Symbol.isConcatSpreadable];
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable] deleted');
                o2([o27, o28, o29], o3.concat(o10), 'c[@@isConcatSpreadable] deleted');
            }

            test(1, 2, 3);
            test(1.1, 2.2, 3.3);
            test("a", "b", "c");
            test(1.1, "b", 3);
            test(4, 5.5, "f");
            test(undefined, NaN, function(){});
        }
    },
    {
        name: "user-defined length",
        o18: function ()
        {
            function test(o3, o4, o10) {
                var o31 = (function() { return arguments; })(o3, o4, o10);
                o31[Symbol.isConcatSpreadable] = true;
                o2([o3, o4, o10, o3, o4, o10], [].concat(o31, o31), '['+o3+', '+o4+', '+o10+', '+o3+', '+o4+', '+o10+']');
                Object.defineProperty(o31, "length", { value: 6 });
                o2([o3, o4, o10, undefined, undefined, undefined], [].concat(o31), '['+o3+', '+o4+', '+o10+', undefined, undefined, undefined]');
            }

            test(1, 2, 3);
            test(1.1, 2.2, 3.3);
            test("a", "b", "c");
            test(1.1, "b", 3);
            test(4, 5.5, "f");
            test(undefined, NaN, function(){});
        }
    },
    {
        name: "concat a mix of user-constructed objects and arrays",
        o18: function ()
        {
            class o35 extends Object {}
            var o3 = new o35;
            o3.length = 5;
            o3[0] = 'a';
            o3[2] = 'b';
            o3[4] = 'c';

            var o4 = { length: 3, "0": "a", "1": "b", "2": "c" };

            class o36 extends Array {}
            var o10 = new o36("a", "b", "c");
            var o14 = ['e', 'f', 'g'];

            o3[Symbol.isConcatSpreadable] = true;
            o14[Symbol.isConcatSpreadable] = false;

            o2(['a', undefined, 'b', undefined, 'c', o4, 'a', 'b', 'c', ['e', 'f', 'g']], Array.prototype.concat.call(o3, o4, o10, o14));
        }
    },
    {
        name: "verify ToLength operation",
        o18: function ()
        {
            var o39 = {"length": {valueOf: null, toString: null}};
            o39[Symbol.isConcatSpreadable] = true;
            o6.o42(()=>Array.prototype.concat.call(o39), o43, '{valueOf: null, toString: null}', "Number expected");

            o39 = {"length": {toString: function() { throw new Error('User-defined error in toString'); }, valueOf: null}};
            o39[Symbol.isConcatSpreadable] = true;
            o6.o42(()=>Array.prototype.concat.call(o39), Error, 'toString() throws', "User-defined error in toString");

            o39 = {"length": {toString: function() { return 'string'; }, valueOf: null}};
            o39[Symbol.isConcatSpreadable] = true;
            o2([], [].concat(o39), ' toString() returns string');

            o39 = {"length": {valueOf: function() { throw new Error('User-defined error in valueOf'); }, toString: null}};
            o39[Symbol.isConcatSpreadable] = true;
            o6.o42(()=>Array.prototype.concat.call(o39), Error, 'valueOf() throws', "User-defined error in valueOf");

            o39 = {"length": {valueOf: function() { return 'string'; }, toString: null}};
            o39[Symbol.isConcatSpreadable] = true;
            o2([], [].concat(o39), 'toString() returns string');

            o39 = { "length": -4294967294, "0": "a", "2": "b", "4": "c" };
            o39[Symbol.isConcatSpreadable] = true;
            o2([], [].concat(o39), 'ToLength clamps negative to zero');

            o39.length = -0.0;
            o2([], [].concat(o39), 'ToLength clamps negative to zero');

            o39.length = "-4294967294";
            o2([], [].concat(o39), 'ToLength clamps negative to zero');

            o39.length = "-0.0";
            o2([], [].concat(o39), 'ToLength clamps negative to zero');
        }
    },
    {
        name: "Getter of [@@isConcatSpreadable] throws",
        o18: function ()
        {
            var o39 = {};
            Object.defineProperty(o39, Symbol.isConcatSpreadable, {
                get: function() { throw Error('User-defined error in @@isConcatSpreadable getter'); }
            });
            o6.o42(()=>[].concat(o39), Error, '[].concat(obj)', "User-defined error in @@isConcatSpreadable getter");
            o6.o42(()=>Array.prototype.concat.call(o39), Error, 'Array.prototype.concat.call(obj)', "User-defined error in @@isConcatSpreadable getter");
        }
    },
    {
        name: "spread Function object",
        o18: function ()
        {
            function test(o46) {
                var o47 = function(o27, o28, o29){};
                o2([o47], [].concat(o47), 'Function object');

                o47[Symbol.isConcatSpreadable] = true;
                o2([undefined, undefined, undefined], [].concat(o47), 'func[Symbol.isConcatSpreadable] == true');

                o47[Symbol.isConcatSpreadable] = false;
                o2([o47], [].concat(o47), 'func[Symbol.isConcatSpreadable] == false');

                o47[Symbol.isConcatSpreadable] = true;
                o2([undefined, undefined, undefined], [].concat(o47), 'func[Symbol.isConcatSpreadable] == true');

                o47[0] = o46[0];
                o47[1] = o46[1];
                o47[2] = o46[2];
                o2(o46, [].concat(o47), 'func[0..2] assigned');

                delete o47[0];
                delete o47[1];
                delete o47[2];
                o2([undefined, undefined, undefined], [].concat(o47), 'func[0..2] deleted');

                delete o47[Symbol.isConcatSpreadable];
                o2([o47], [].concat(o47), 'func[Symbol.isConcatSpreadable] deleted');

                Function.prototype[Symbol.isConcatSpreadable] = true;
                o2([undefined, undefined, undefined], [].concat(o47), 'Function.prototype[Symbol.isConcatSpreadable] == true');

                Function.prototype[Symbol.isConcatSpreadable] = false;
                o2([o47], [].concat(o47), 'Function.prototype[Symbol.isConcatSpreadable] == false');

                Function.prototype[0] = o46[0];
                Function.prototype[1] = o46[1];
                Function.prototype[2] = o46[2];
                o2([o47], [].concat(o47), 'Function.prototype[0..2] assigned');

                Function.prototype[Symbol.isConcatSpreadable] = true;
                o2(o46, [].concat(o47), 'Function.prototype[Symbol.isConcatSpreadable] == true');

                delete Function.prototype[0];
                delete Function.prototype[1];
                delete Function.prototype[2];
                o2([undefined, undefined, undefined], [].concat(o47), 'Function.prototype[0..2] deleted');

                delete Function.prototype[Symbol.isConcatSpreadable];
                o2([o47], [].concat(o47), 'Function.prototype[Symbol.isConcatSpreadable] deleted');
            }

            test([1, 2, 3]);
            test([1.1, 2.2, 3.3]);
            test(["a", "b", "c"]);
            test([2, NaN, function(){}]);
        }
    },
    {
        name: "spread Number, Boolean, and RegExp",
        o18: function ()
        {
            function test(o49, o50, o46) {
                var o39 = new o49(o50);
                o2([o39], [].concat(o39), o49.name+' obj');

                o39[Symbol.isConcatSpreadable] = true;
                o2([], [].concat(o39), o49.name+' obj[Symbol.isConcatSpreadable] == true');

                o39.length = o46.length;
                o2(new Array(o46.length), [].concat(o39), o49.name+' obj[length] assigned');

                for (var o8 = 0; o8 < o46.length; o8++) {
                    o39[o8] = o46[o8];
                }
                o2(o46, [].concat(o39), o49.name+' obj[0..length] assigned');

                o39[Symbol.isConcatSpreadable] = false;
                o2([o39], [].concat(o39), o49.name+' obj[Symbol.isConcatSpreadable] == false');

                o39[Symbol.isConcatSpreadable] = true;
                o2(o46, [].concat(o39), o49.name+' obj[Symbol.isConcatSpreadable] == true');

                for (var o8 = 0; o8 < o46.length; o8++) {
                    delete o39[o8];
                }
                o2(new Array(o46.length), [].concat(o39), o49.name+' obj[0..length] deleted');

                delete o39.length;
                o2([], [].concat(o39), o49.name+' obj[length] deleted');

                delete o39[Symbol.isConcatSpreadable];
                o2([o39], [].concat(o39), o49.name+' obj[Symbol.isConcatSpreadable] deleted');

                o49.prototype[Symbol.isConcatSpreadable] = true;
                o2([], [].concat(o39), o49.name+'.prototype[Symbol.isConcatSpreadable] == true');

                o49.prototype.length = o46.length;
                o2(new Array(o46.length), [].concat(o39), o49.name+'.prototype[length] assigned');

                for (var o8 = 0; o8 < o46.length; o8++) {
                    o49.prototype[o8] = o46[o8];
                }
                o2(o46, [].concat(o39), o49.name+'.prototype[0..length] assigned');

                o49.prototype[Symbol.isConcatSpreadable] = false;
                o2([o39], [].concat(o39), o49.name+'.prototype[Symbol.isConcatSpreadable] == false');

                o49.prototype[Symbol.isConcatSpreadable] = true;
                o2(o46, [].concat(o39), o49.name+'.prototype[Symbol.isConcatSpreadable] == true');

                for (var o8 = 0; o8 < o46.length; o8++) {
                    delete o49.prototype[o8];
                }
                o2(new Array(o46.length), [].concat(o39), o49.name+'.prototype[0..length] deleted');

                delete o49.prototype.length;
                o2([], [].concat(o39), o49.name+'.prototype[length] deleted');

                delete o49.prototype[Symbol.isConcatSpreadable];
                o2([o39], [].concat(o39), o49.name+'.prototype[Symbol.isConcatSpreadable] deleted');
            }

            test(Number, 0, [1, 2, 3]);
            test(Number, -0.1, [1.1, 2.2, 3.3]);
            test(Number, NaN, ["a", "b", "c"]);
            test(Number, 321, [1, "ab", 2.2, 2, NaN, 3, function(){ }]);

            test(Boolean, true, [1, 2, 3]);
            test(Boolean, false, [1.1, 2.2, 3.3]);
            test(Boolean, true, ["a", "b", "c"]);
            test(Boolean, false, [1, "ab", 2.2, 2, NaN, 3, function(){ }]);

            test(RegExp, /^/, [1, 2, 3]);
            test(RegExp, /abc/, [1.1, 2.2, 3.3]);
            test(RegExp, /(\d+)/, ["a", "b", "c"]);
            test(RegExp, /^\s*\S+\s*$/, [1, "ab", 2.2, 2, NaN, 3, function(){ }]);
        }
    },
    {
        name: "spread String object",
        o18: function ()
        {
            function test() {
                var o54 = new String("abc");
                o2([o54], [].concat(o54), "string");

                o54[Symbol.isConcatSpreadable] = true;
                o2(['a', 'b', 'c'], [].concat(o54), "string s[Symbol.isConcatSpreadable] == true");

                o54[Symbol.isConcatSpreadable] = false;
                o2([o54], [].concat(o54), "string s[Symbol.isConcatSpreadable] == false");

                o54[Symbol.isConcatSpreadable] = true;
                o2(['a', 'b', 'c'], [].concat(o54), "string s[Symbol.isConcatSpreadable] == true");

                delete o54[Symbol.isConcatSpreadable];
                o2([o54], [].concat(o54), "string s[Symbol.isConcatSpreadable] deleted");

                String.prototype[Symbol.isConcatSpreadable] = true;
                o2(['a', 'b', 'c'], [].concat(o54), "string.prototype[Symbol.isConcatSpreadable] == true");

                String.prototype[Symbol.isConcatSpreadable] = false;
                o2([o54], [].concat(o54), "string.prototype[Symbol.isConcatSpreadable] == false");

                String.prototype[Symbol.isConcatSpreadable] = true;
                o2(['a', 'b', 'c'], [].concat(o54), "string.prototype[Symbol.isConcatSpreadable] == true");

                delete String.prototype[Symbol.isConcatSpreadable];
                o2([o54], [].concat(o54), "string.prototype[Symbol.isConcatSpreadable] deleted");
            }

            test();
        }
    },
    {
        name: "Revokable proxy revoked when retrieving [@@isConcatSpreadable]",
        o18: function ()
        {
            // proxy revoked
            var o39 = {};
            var o56 = Proxy.revocable(o39, {
                get: function(target, o60) {
                    if (o60 === Symbol.isConcatSpreadable) { o56.o61(); }
                    return o39[o60];
                }
            });
            o6.o42(()=>[].concat(o56.o62), o43, 'proxy revoked', 'method  is called on a revoked Proxy object');
        }
    },
    {
        name: "[@@isConcatSpreadable] getter altering array type",
        o18: function ()
        {
            function test(o46, o63, o64) {
                var o65 = o46.slice(0);
                o65[o63] = o64;
                Object.defineProperty(o46, Symbol.isConcatSpreadable, {
                        get: function() {
                            o46[o63] = o64;
                            return true;
                        }
                    })
                o2(o65, [].concat(o46), 'expecting ['+o65+']');
            }

            test([1, 2, 3], 1, 'abc');
            test([1.1, 2.2, 3.3], 0, {});
        }
    },
    {
        name: "[@@isConcatSpreadable] getter altering binding",
        o18: function ()
        {
            function test(o46, o65) {
                Object.defineProperty(o46, Symbol.isConcatSpreadable, {
                        get: function() {
                            o46 = [];
                            return true;
                        }
                    })
                o2(o65, Array.prototype.concat.call(o46, o46), 'expecting ['+o65+']');
                o2([], Array.prototype.concat.call(o46, o46), 'expecting []');
            }

            test([1, 2, 3], [1, 2, 3, 1, 2, 3]);
            test([1.1, 2.2, 3.3], [1.1, 2.2, 3.3, 1.1, 2.2, 3.3]);
            test(["a", "b", "c"], ["a", "b", "c", "a", "b", "c"]);
            test([1.1, "b", 3], [1.1, "b", 3, 1.1, "b", 3]);
            test([4, 5.5, "f"], [4, 5.5, "f", 4, 5.5, "f"]);
            var o47 = function() {};
            test([undefined, NaN, o47], [undefined, NaN, o47, undefined, NaN, o47]);
        }
    },
    {
        name: "[@@isConcatSpreadable] getter changing array to ES5 array",
        o18: function ()
        {
            function test(o46, o63, o64) {
                var o65 = o46.slice(0);
                o65[o63] = o64;
                Object.defineProperty(o46, Symbol.isConcatSpreadable, {
                        get: function() {
                            Object.defineProperty(o46, o63, { 'get': function(){ return o64; } });
                            return true;
                        }
                    })
                o2(o65, Array.prototype.concat.call(o46), 'expecting ['+o46+']');
            }

            test([1, 2, 3], 1, 'abc');
            test([1.1, 2.2, 3.3], 0, {});
        }
    },
    {
        name: "[@@isConcatSpreadable] getter setting illegal length property in object",
        o18: function ()
        {
            function test(o3) {
                var o4 = {"0":1, "1":2, "length": 2};
                Object.defineProperty(o4, Symbol.isConcatSpreadable, {
                        get: function() {
                            o4.length = 9007199254740989;
                            return true;
                        }
                    });
                o6.o42(()=>o3.concat(o4), o43, o3, "Illegal length and size specified for the array");
            }

            test([1, 2, 3]);
            test([1.1, 2.2, 3.3]);
            test(["a", "b", "c"]);
            test([1.1, "b", 3]);
            test([4, 5.5, "f"]);
            test([undefined, NaN, function(){}]);
        }
    },
    ];

o67.o68(o16, { o69: o0.o70[0] != "summary" });
