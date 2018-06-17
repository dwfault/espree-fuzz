//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3, o4, o5)
{
    o6.o2(o3.length, o4.length, o5);
    for(var o7 = 0;o7 < o3.length; o7++)
    {
        o6.o2(o3[o7], o4[o7], o5);
    }
}
function o8(o3, o4)
{
    var o9 = o3.concat(o4);
    o4[Symbol.isConcatSpreadable] = false;
    var o10 = o3.concat(o4);
    o6.o2(o4, o10[o3.length], "Indexing d at a.length should return b");
    for(var o7 = 0;o7 < o3.length; o7++)
    {
        o6.o2(o3[o7], o9[o7], "confirm array a makes up the first half of array c");
        o6.o2(o3[o7], o10[o7], "confirm array a makes up the first half of array d");
    }
    for(var o7 = 0;o7 < o4.length; o7++)
    {
        o6.o2(o4[o7], o9[o3.length+o7], "confirm array b makes up the second half of array c");
        o6.o2(o4[o7], o10[o3.length][o7], "confirm array b makes up a sub array at d[a.length]");

    }

    o6.o2(o3.length+1, o10.length, "since we are not flattening the top level array grows only by 1");
    o11 = false;

    delete o4[Symbol.isConcatSpreadable];
}
var o12 = [
   {
       name: "nativeInt Arrays",
       o13: function ()
       {
            var o3 = [1, 2, 3];
            var o4 = [4, 5, 6];
            o8(o3, o4);
       }
    },
    {
       name: "nativefloat Arrays",
       o13: function ()
       {
            var o3 = [1.1, 2.2, 3.3];
            var o4 = [4.4, 5.5, 6.6];
            o8(o3, o4);
       }
    },
    {
       name: "Var Arrays",
       o13: function ()
       {
            var o3 = ["a", "b", "c"];
            var o4 = ["d", "e", "f"];
            o8(o3, o4);
       }
    },
    {
       name: "intermixed Arrays",
       o13: function ()
       {
            var o3 = [1.1, "b", 3];
            var o4 = [4, 5.5, "f"];
            o8(o3, o4);
       }
    },
    {
       name: "concating spreadable objects",
       o13: function ()
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
       o13: function ()
       {
            var o3 = [1.1, 2.1, 3.1];
            var o4 = 4.1;
            o8(o3, o4);
            var o3 = [1, 2, 3];
            var o4 = 4;
            o8(o3, o4);
            var o3 = [1, 2, 3];
            var o4 = "b";
            o8(o3, o4);
            var o3 = [1, 2, 3];
            var o4 = true;
            o8(o3, o4);
       }
    },
    {
       name: "override with constructors",
       o13: function ()
       {
            var o3 = [1, 2, 3];
            var o4 = [4.4, 5.5, 6.6];
            var o9 = [Object, {}, undefined, Math.sin];
            for(var o7 = 0; o7 < o9.length;o7++)
            {
                o3['constructor'] = o9[o7];
                o8(o3, o4);
            }
            var o14  = [];
            o14.constructor = function()
            {
                var o3 = new Array(100);
                o3[0] = 10;
                return o3;
            }
            o2([1, 2, 3], o14.concat([1, 2, 3]));
       }
    },
    {
        name: "test ToBoolean on array[@@isConcatSpreadable]",
        o13: function ()
        {
            function test(o15, o16, o17) {

                var o3 = [o15], o4 = [o16, o17];
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable] undefined');

                o4[Symbol.isConcatSpreadable] = null;
                o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==null');

                o4[Symbol.isConcatSpreadable] = false;
                o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = '';
                o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==\'\'');

                o4[Symbol.isConcatSpreadable] = 0;
                o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==0');

                o4[Symbol.isConcatSpreadable] = +0.0;
                o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==+0.0');

                o4[Symbol.isConcatSpreadable] = -0.0;
                o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==-0.0');

                o4[Symbol.isConcatSpreadable] = NaN;
                o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==NaN');

                o4[Symbol.isConcatSpreadable] = undefined;
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==undefined');

                o4[Symbol.isConcatSpreadable] = true;
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==true');

                o4[Symbol.isConcatSpreadable] = 'abc';
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]=\'abc\'');

                o4[Symbol.isConcatSpreadable] = 0.1;
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==0.1');

                o4[Symbol.isConcatSpreadable] = -0.1;
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==-0.1');

                o4[Symbol.isConcatSpreadable] = Symbol();
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==Symbol()');

                o4[Symbol.isConcatSpreadable] = {};
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]=={}');

                delete o4[Symbol.isConcatSpreadable];
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable] deleted');
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
        o13: function ()
        {
            function test(o15, o16, o17) {

                var o3 = [o15], o4 = {'0':o16, '1':o17, 'length':2};
                o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable] undefined');

                o4[Symbol.isConcatSpreadable] = null;
                o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==null');

                o4[Symbol.isConcatSpreadable] = false;
                o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = '';
                o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==\'\'');

                o4[Symbol.isConcatSpreadable] = 0;
                o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==0');

                o4[Symbol.isConcatSpreadable] = +0.0;
                o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==+0.0');

                o4[Symbol.isConcatSpreadable] = -0.0;
                o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==-0.0');

                o4[Symbol.isConcatSpreadable] = NaN;
                o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==NaN');

                o4[Symbol.isConcatSpreadable] = undefined;
                o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable]==undefined');

                o4[Symbol.isConcatSpreadable] = true;
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==true');

                o4[Symbol.isConcatSpreadable] = 'abc';
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==\'abc\'');

                o4[Symbol.isConcatSpreadable] = 0.1;
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==0.1');

                o4[Symbol.isConcatSpreadable] = -0.1;
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==-0.1');

                o4[Symbol.isConcatSpreadable] = Symbol();
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==Symbol()');

                o4[Symbol.isConcatSpreadable] = {};
                o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]=={}');

                delete o4[Symbol.isConcatSpreadable];
                o2([o15, o4], o3.concat(o4), '[@@isConcatSpreadable] deleted');
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
        o13: function ()
        {
            function test(o15, o16, o17) {
                var o3 = [o15], o4 = [o16, o17], o9 = [o16, o17];
                o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable] undefined');
                o2([o15, o16, o17], o3.concat(o9), 'c[@@isConcatSpreadable] undefined');

                o4[Symbol.isConcatSpreadable] = false;
                o2([o15, [o16, o17]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
                o2([o15, o16, o17], o3.concat(o9), 'c[@@isConcatSpreadable] undefined');

                o9[Symbol.isConcatSpreadable] = false;
                o2([o15, [o16, o17]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
                o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = true;
                o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
                o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');

                o9[Symbol.isConcatSpreadable] = true;
                o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
                o2([o15, o16, o17], o3.concat(o9), 'c[@@isConcatSpreadable]==true');

                o9[Symbol.isConcatSpreadable] = false;
                o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
                o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = false;
                o2([o15, [o16, o17]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
                o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = undefined;
                o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable]==undefined');
                o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');

                delete o4[Symbol.isConcatSpreadable];
                o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable] deleted');
                o2([o15, [o16, o17]], o3.concat(o9), 'c[@@isConcatSpreadable]==false');

                delete o9[Symbol.isConcatSpreadable];
                o2([o15, o16, o17], o3.concat(o4), 'b[@@isConcatSpreadable] deleted');
                o2([o15, o16, o17], o3.concat(o9), 'c[@@isConcatSpreadable] deleted');
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
        o13: function ()
        {
            function test(o3, o4, o9) {
                var o18 = (function() { return arguments; })(o3, o4, o9);
                o18[Symbol.isConcatSpreadable] = true;
                o2([o3, o4, o9, o3, o4, o9], [].concat(o18, o18), '['+o3+', '+o4+', '+o9+', '+o3+', '+o4+', '+o9+']');
                Object.defineProperty(o18, "length", { value: 6 });
                o2([o3, o4, o9, undefined, undefined, undefined], [].concat(o18), '['+o3+', '+o4+', '+o9+', undefined, undefined, undefined]');
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
        o13: function ()
        {
            class o19 extends Object {}
            var o3 = new o19;
            o3.length = 5;
            o3[0] = 'a';
            o3[2] = 'b';
            o3[4] = 'c';

            var o4 = { length: 3, "0": "a", "1": "b", "2": "c" };

            class o20 extends Array {}
            var o9 = new o20("a", "b", "c");
            var o10 = ['e', 'f', 'g'];

            o3[Symbol.isConcatSpreadable] = true;
            o10[Symbol.isConcatSpreadable] = false;

            o2(['a', undefined, 'b', undefined, 'c', o4, 'a', 'b', 'c', ['e', 'f', 'g']], Array.prototype.concat.call(o3, o4, o9, o10));
        }
    },
    {
        name: "verify ToLength operation",
        o13: function ()
        {
            var o21 = {"length": {valueOf: null, toString: null}};
            o21[Symbol.isConcatSpreadable] = true;
            o6.o22(()=>Array.prototype.concat.call(o21), o23, '{valueOf: null, toString: null}', "Number expected");

            o21 = {"length": {toString: function() { throw new Error('User-defined error in toString'); }, valueOf: null}};
            o21[Symbol.isConcatSpreadable] = true;
            o6.o22(()=>Array.prototype.concat.call(o21), Error, 'toString() throws', "User-defined error in toString");

            o21 = {"length": {toString: function() { return 'string'; }, valueOf: null}};
            o21[Symbol.isConcatSpreadable] = true;
            o2([], [].concat(o21), ' toString() returns string');

            o21 = {"length": {valueOf: function() { throw new Error('User-defined error in valueOf'); }, toString: null}};
            o21[Symbol.isConcatSpreadable] = true;
            o6.o22(()=>Array.prototype.concat.call(o21), Error, 'valueOf() throws', "User-defined error in valueOf");

            o21 = {"length": {valueOf: function() { return 'string'; }, toString: null}};
            o21[Symbol.isConcatSpreadable] = true;
            o2([], [].concat(o21), 'toString() returns string');

            o21 = { "length": -4294967294, "0": "a", "2": "b", "4": "c" };
            o21[Symbol.isConcatSpreadable] = true;
            o2([], [].concat(o21), 'ToLength clamps negative to zero');

            o21.length = -0.0;
            o2([], [].concat(o21), 'ToLength clamps negative to zero');

            o21.length = "-4294967294";
            o2([], [].concat(o21), 'ToLength clamps negative to zero');

            o21.length = "-0.0";
            o2([], [].concat(o21), 'ToLength clamps negative to zero');
        }
    },
    {
        name: "Getter of [@@isConcatSpreadable] throws",
        o13: function ()
        {
            var o21 = {};
            Object.defineProperty(o21, Symbol.isConcatSpreadable, {
                get: function() { throw Error('User-defined error in @@isConcatSpreadable getter'); }
            });
            o6.o22(()=>[].concat(o21), Error, '[].concat(obj)', "User-defined error in @@isConcatSpreadable getter");
            o6.o22(()=>Array.prototype.concat.call(o21), Error, 'Array.prototype.concat.call(obj)', "User-defined error in @@isConcatSpreadable getter");
        }
    },
    {
        name: "spread Function object",
        o13: function ()
        {
            function test(o24) {
                var o25 = function(o15, o16, o17){};
                o2([o25], [].concat(o25), 'Function object');

                o25[Symbol.isConcatSpreadable] = true;
                o2([undefined, undefined, undefined], [].concat(o25), 'func[Symbol.isConcatSpreadable] == true');

                o25[Symbol.isConcatSpreadable] = false;
                o2([o25], [].concat(o25), 'func[Symbol.isConcatSpreadable] == false');

                o25[Symbol.isConcatSpreadable] = true;
                o2([undefined, undefined, undefined], [].concat(o25), 'func[Symbol.isConcatSpreadable] == true');

                o25[0] = o24[0];
                o25[1] = o24[1];
                o25[2] = o24[2];
                o2(o24, [].concat(o25), 'func[0..2] assigned');

                delete o25[0];
                delete o25[1];
                delete o25[2];
                o2([undefined, undefined, undefined], [].concat(o25), 'func[0..2] deleted');

                delete o25[Symbol.isConcatSpreadable];
                o2([o25], [].concat(o25), 'func[Symbol.isConcatSpreadable] deleted');

                Function.prototype[Symbol.isConcatSpreadable] = true;
                o2([undefined, undefined, undefined], [].concat(o25), 'Function.prototype[Symbol.isConcatSpreadable] == true');

                Function.prototype[Symbol.isConcatSpreadable] = false;
                o2([o25], [].concat(o25), 'Function.prototype[Symbol.isConcatSpreadable] == false');

                Function.prototype[0] = o24[0];
                Function.prototype[1] = o24[1];
                Function.prototype[2] = o24[2];
                o2([o25], [].concat(o25), 'Function.prototype[0..2] assigned');

                Function.prototype[Symbol.isConcatSpreadable] = true;
                o2(o24, [].concat(o25), 'Function.prototype[Symbol.isConcatSpreadable] == true');

                delete Function.prototype[0];
                delete Function.prototype[1];
                delete Function.prototype[2];
                o2([undefined, undefined, undefined], [].concat(o25), 'Function.prototype[0..2] deleted');

                delete Function.prototype[Symbol.isConcatSpreadable];
                o2([o25], [].concat(o25), 'Function.prototype[Symbol.isConcatSpreadable] deleted');
            }

            test([1, 2, 3]);
            test([1.1, 2.2, 3.3]);
            test(["a", "b", "c"]);
            test([2, NaN, function(){}]);
        }
    },
    {
        name: "spread Number, Boolean, and RegExp",
        o13: function ()
        {
            function test(o26, o27, o24) {
                var o21 = new o26(o27);
                o2([o21], [].concat(o21), o26.name+' obj');

                o21[Symbol.isConcatSpreadable] = true;
                o2([], [].concat(o21), o26.name+' obj[Symbol.isConcatSpreadable] == true');

                o21.length = o24.length;
                o2(new Array(o24.length), [].concat(o21), o26.name+' obj[length] assigned');

                for (var o7 = 0; o7 < o24.length; o7++) {
                    o21[o7] = o24[o7];
                }
                o2(o24, [].concat(o21), o26.name+' obj[0..length] assigned');

                o21[Symbol.isConcatSpreadable] = false;
                o2([o21], [].concat(o21), o26.name+' obj[Symbol.isConcatSpreadable] == false');

                o21[Symbol.isConcatSpreadable] = true;
                o2(o24, [].concat(o21), o26.name+' obj[Symbol.isConcatSpreadable] == true');

                for (var o7 = 0; o7 < o24.length; o7++) {
                    delete o21[o7];
                }
                o2(new Array(o24.length), [].concat(o21), o26.name+' obj[0..length] deleted');

                delete o21.length;
                o2([], [].concat(o21), o26.name+' obj[length] deleted');

                delete o21[Symbol.isConcatSpreadable];
                o2([o21], [].concat(o21), o26.name+' obj[Symbol.isConcatSpreadable] deleted');

                o26.prototype[Symbol.isConcatSpreadable] = true;
                o2([], [].concat(o21), o26.name+'.prototype[Symbol.isConcatSpreadable] == true');

                o26.prototype.length = o24.length;
                o2(new Array(o24.length), [].concat(o21), o26.name+'.prototype[length] assigned');

                for (var o7 = 0; o7 < o24.length; o7++) {
                    o26.prototype[o7] = o24[o7];
                }
                o2(o24, [].concat(o21), o26.name+'.prototype[0..length] assigned');

                o26.prototype[Symbol.isConcatSpreadable] = false;
                o2([o21], [].concat(o21), o26.name+'.prototype[Symbol.isConcatSpreadable] == false');

                o26.prototype[Symbol.isConcatSpreadable] = true;
                o2(o24, [].concat(o21), o26.name+'.prototype[Symbol.isConcatSpreadable] == true');

                for (var o7 = 0; o7 < o24.length; o7++) {
                    delete o26.prototype[o7];
                }
                o2(new Array(o24.length), [].concat(o21), o26.name+'.prototype[0..length] deleted');

                delete o26.prototype.length;
                o2([], [].concat(o21), o26.name+'.prototype[length] deleted');

                delete o26.prototype[Symbol.isConcatSpreadable];
                o2([o21], [].concat(o21), o26.name+'.prototype[Symbol.isConcatSpreadable] deleted');
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
        o13: function ()
        {
            function test() {
                var o28 = new String("abc");
                o2([o28], [].concat(o28), "string");

                o28[Symbol.isConcatSpreadable] = true;
                o2(['a', 'b', 'c'], [].concat(o28), "string s[Symbol.isConcatSpreadable] == true");

                o28[Symbol.isConcatSpreadable] = false;
                o2([o28], [].concat(o28), "string s[Symbol.isConcatSpreadable] == false");

                o28[Symbol.isConcatSpreadable] = true;
                o2(['a', 'b', 'c'], [].concat(o28), "string s[Symbol.isConcatSpreadable] == true");

                delete o28[Symbol.isConcatSpreadable];
                o2([o28], [].concat(o28), "string s[Symbol.isConcatSpreadable] deleted");

                String.prototype[Symbol.isConcatSpreadable] = true;
                o2(['a', 'b', 'c'], [].concat(o28), "string.prototype[Symbol.isConcatSpreadable] == true");

                String.prototype[Symbol.isConcatSpreadable] = false;
                o2([o28], [].concat(o28), "string.prototype[Symbol.isConcatSpreadable] == false");

                String.prototype[Symbol.isConcatSpreadable] = true;
                o2(['a', 'b', 'c'], [].concat(o28), "string.prototype[Symbol.isConcatSpreadable] == true");

                delete String.prototype[Symbol.isConcatSpreadable];
                o2([o28], [].concat(o28), "string.prototype[Symbol.isConcatSpreadable] deleted");
            }

            test();
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
                    if (o30 === Symbol.isConcatSpreadable) { o29.o31(); }
                    return o21[o30];
                }
            });
            o6.o22(()=>[].concat(o29.o32), o23, 'proxy revoked', 'method  is called on a revoked Proxy object');
        }
    },
    {
        name: "[@@isConcatSpreadable] getter altering array type",
        o13: function ()
        {
            function test(o24, o33, o34) {
                var o35 = o24.slice(0);
                o35[o33] = o34;
                Object.defineProperty(o24, Symbol.isConcatSpreadable, {
                        get: function() {
                            o24[o33] = o34;
                            return true;
                        }
                    })
                o2(o35, [].concat(o24), 'expecting ['+o35+']');
            }

            test([1, 2, 3], 1, 'abc');
            test([1.1, 2.2, 3.3], 0, {});
        }
    },
    {
        name: "[@@isConcatSpreadable] getter altering binding",
        o13: function ()
        {
            function test(o24, o35) {
                Object.defineProperty(o24, Symbol.isConcatSpreadable, {
                        get: function() {
                            o24 = [];
                            return true;
                        }
                    })
                o2(o35, Array.prototype.concat.call(o24, o24), 'expecting ['+o35+']');
                o2([], Array.prototype.concat.call(o24, o24), 'expecting []');
            }

            test([1, 2, 3], [1, 2, 3, 1, 2, 3]);
            test([1.1, 2.2, 3.3], [1.1, 2.2, 3.3, 1.1, 2.2, 3.3]);
            test(["a", "b", "c"], ["a", "b", "c", "a", "b", "c"]);
            test([1.1, "b", 3], [1.1, "b", 3, 1.1, "b", 3]);
            test([4, 5.5, "f"], [4, 5.5, "f", 4, 5.5, "f"]);
            var o25 = function() {};
            test([undefined, NaN, o25], [undefined, NaN, o25, undefined, NaN, o25]);
        }
    },
    {
        name: "[@@isConcatSpreadable] getter changing array to ES5 array",
        o13: function ()
        {
            function test(o24, o33, o34) {
                var o35 = o24.slice(0);
                o35[o33] = o34;
                Object.defineProperty(o24, Symbol.isConcatSpreadable, {
                        get: function() {
                            Object.defineProperty(o24, o33, { 'get': function(){ return o34; } });
                            return true;
                        }
                    })
                o2(o35, Array.prototype.concat.call(o24), 'expecting ['+o24+']');
            }

            test([1, 2, 3], 1, 'abc');
            test([1.1, 2.2, 3.3], 0, {});
        }
    },
    {
        name: "[@@isConcatSpreadable] getter setting illegal length property in object",
        o13: function ()
        {
            function test(o3) {
                var o4 = {"0":1, "1":2, "length": 2};
                Object.defineProperty(o4, Symbol.isConcatSpreadable, {
                        get: function() {
                            o4.length = 9007199254740989;
                            return true;
                        }
                    });
                o6.o22(()=>o3.concat(o4), o23, o3, "Illegal length and size specified for the array");
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

o36.o37(o12, { o38: o0.o39[0] != "summary" });
