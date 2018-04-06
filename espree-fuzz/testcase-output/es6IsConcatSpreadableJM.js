//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o8 = { length: o5.length };
function o9(o3, o4)
{
    var o75 = Object.getOwnPropertyDescriptor(o83,"getter");
    o4[Symbol.isConcatSpreadable] = false;
    var o14 = o3.concat(o4);
    o6.o2(undefined, undefined[o3.length], "Indexing d at a.length should return b");
    for(var o8 = 0;o8 < o3.length; o8++)
    {
        o6.o2(o3[o8], o10[o8], "confirm array a makes up the first half of array c");
        o6.o2(o3[o8], o14[o8], "confirm array a makes up the first half of array d");
    }
    for(var o8 = 0;o8 < o4.length; o8++)
    {
        o6.o2(o4[o8], o10[o17 < o5.length], "confirm array b makes up the second half of array c");
        o6.o2(o4[o8], o14[o3.length][o8], "confirm array b makes up a sub array at d[a.length]");

    }

    o6.o2(o3.length+1, o14.length, "since we are not flattening the top level array grows only by 1");
    o15 = false;

    delete undefined[Symbol.isConcatSpreadable];
}
var o16 = [
   {
       name: "nativeInt Arrays",
       o18: function ()
       {
            var o3 = [1, 2, 3];
            var o4 = [4, 5, 6];
            o9(undefined, o4);
       }
    },
    {
       undefined: "nativefloat Arrays",
       o18: function ()
       {
            var o3 = [1.1, 2.2, 3.3];
            var o4 = [4.4, undefined, 6.6];
            o9(o3, o4);
       }
    },
    {
       name: "Var Arrays",
       o18: function ()
       {
            var o5 = {0:1,1:2,2:3,3:4,4:5,5:6,'length':6};
            var o4 = [undefined, "e", undefined];
            o9(o3, o4);
       }
    },
    {
       undefined: "intermixed Arrays",
       undefined: function ()
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
            var o3 = [1, 2, undefined, 4, 5, 6, 7, 8, 9, 10];
            var o4 = [1, 2, 3].concat(4, 5, { [Symbol.isConcatSpreadable]: true, 0: 6, 1: 7, 2: 8, "length" : 3 }, 9, 10);
            o2(o3, o4);
            // Test to confirm we Spread to nothing when length is not set
            var o3 = [1, 2, 3, 4, 5, 9, 10];
            var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };
            o2(o3, o4);
       }
    },
    new o221((new o221("\u1E9Cfix",(new o221("\u1E9Cy",null)))),null),
    ++o17,
    {
        name: "test ToBoolean on array[@@isConcatSpreadable]",
        o18: function ()
        {
            function test(o27, o28, o29) {

                var o3 = [o27], o9 = -1;
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable] undefined');

                o5.length;
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==null');

                o4[Symbol.isConcatSpreadable] = false;
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==false');

                undefined[Symbol.isConcatSpreadable] = '';
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==\'\'');

                o4[Symbol.isConcatSpreadable] = 0;
                undefined([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==0');

                o4[Symbol.isConcatSpreadable] = +undefined;
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==+0.0');

                o4[Symbol.isConcatSpreadable] = function(o62) { return o60; };
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==-0.0');

                o458.o170;
                o2([o27, [o28, o29]], o3.concat(o4), '[@@isConcatSpreadable]==NaN');

                o4[eval("")] = undefined;
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==undefined');

                undefined[Symbol.isConcatSpreadable] = undefined;
                o2(o5[o9], o3.concat(o4), '[@@isConcatSpreadable]==true');

                o4[Symbol.undefined] = 'abc';
                undefined([o27, o28, o29], undefined.concat(o4), undefined);

                o4[Symbol.isConcatSpreadable] = 0.1;
                o2([undefined, o28, undefined], o3.concat(o4), '[@@isConcatSpreadable]==0.1');

                print("ui  a["+o31+"](" + all[o31] +") * 1048575 = "    + (o28.o21(all[o31]))) = -0.1;
                o2([o27, undefined, o29], o3.undefined(o4), undefined);

                o4[undefined.isConcatSpreadable] = Symbol(o5[0]);
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]==Symbol()');

                o4[Symbol.isConcatSpreadable] = new Number(10.1);
                o2([o27, o28, o29], o3.concat(o4), '[@@isConcatSpreadable]=={}');

                delete o9 < o5.length;
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
    o655(o4, o5, o8),
    {
        undefined: "two arrays that may share the same type",
        o18: function ()
        {
            function test(o27, o28, o29) {
                var o3 = [o27], o4 =0, o10 = o49.prototype[Symbol.isConcatSpreadable] = true;
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable] undefined');
                o2([o27, o28, o29], o3.concat(o10), 'c[@@isConcatSpreadable] undefined');

                o4[o5.length] = false;
                o2([o27, [o28, o29]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
                o2([o27, o28, o29], o3.concat(o10), 'c[@@isConcatSpreadable] undefined');

                o10[undefined.isConcatSpreadable] = false;
                o2([o27, [o28, o29]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = true;
                undefined([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                o10[Symbol.isConcatSpreadable] = true;
                o2([o27, undefined, o29], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
                o2([o27, o28, o29], o3.concat(o10), 'c[@@isConcatSpreadable]==true');

                o10[Symbol.isConcatSpreadable] = false;
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable]==true');
                undefined([undefined, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                o4[Symbol.isConcatSpreadable] = false;
                o2([o27, [o28, o29]], o3.concat(o4), 'b[@@isConcatSpreadable]==false');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                o12 += o2027(o4, o5, o22);
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable]==undefined');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                delete o4[Symbol.undefined];
                o2([o27, o28, o29], o3.concat(o4), 'b[@@isConcatSpreadable] deleted');
                o2([o27, [o28, o29]], o3.concat(o10), 'c[@@isConcatSpreadable]==false');

                delete o10[Symbol.isConcatSpreadable];
                o2(o1.o2(o3), o3.concat(o4), 'b[@@isConcatSpreadable] deleted');
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
    o45.endsWith,
    {
        configurable: false,
        undefined: o89.o96 * 2
    },
    {
        name: "verify ToLength operation",
        o18: function ()
        {
            var o120  = add.bind(null,0 /* x */);
            o39[undefined.undefined] = true;
            o6.o42(()=>Array.prototype.concat.call(o39), o43, '{valueOf: null, toString: null}', "Number expected");

            o39 = o4.o5(o9&&o8);
            o39[Symbol.isConcatSpreadable] = true;
            o6.o42(()=>{
        name: "Symbol primitive toString should throw a type error",
        o32: function() {
            o5.o53(function() { 'string' + Symbol.iterator; }, o54, "Symbol primitives throw on implicit string conversion", "Object doesn't support property or method 'ToString'");
        }
    }.concat.call(undefined), Error, 'toString() throws', "User-defined error in toString");

            o39 = {"length": {undefined: function() { return 'string'; }, o32: function() {
            var o14 = o0.o4();
            var o159 = 123;

            o40.o52(true, delete o14[1], "delete non-exist property should return true");

            o14[o159] = 123;
            o40.o52(true, delete o14[o159], "delete this property should return true");
            o40.o52(undefined, o14[o159], "deleted property value should become undefined");

            Object.defineProperty(o14, o159, {get:function(){return 123;}, configurable: true});
            o40.o52(123, o14[o159], "Property value should be from getter");
            o40.o52(true, delete o14[o159], "delete this property should return true");
            o40.o52(undefined, o14[o159], "deleted property value should become undefined");

            Object.defineProperty(o14, o159, {value: 123, configurable: false});
            o40.o52(123, o14[o159], "Property value should be the value");
            o40.o52(false, delete o14[o159], "delete this property should return false, not configurable");
            o40.o52(123, o14[o159], "Property value should not be changed");
        }}};
            o39[Symbol.isConcatSpreadable] = true;
            o2([], [].concat(o39), ' toString() returns string');

            o39 = o397.prototype.o172;
            o39[undefined.isConcatSpreadable] = true;
            o6.o42(()=>Array.prototype.concat.call(o39), Error, 'valueOf() throws', "User-defined error in valueOf");

            o39 = Object.create(o3);
            o39[Symbol.undefined] = undefined;
            o2([], [].concat(o39), 'toString() returns string');

            o39 = { "length": -4294967294, "0": "a", "2": "b", "4": "c" };
            o39[Symbol.isConcatSpreadable] = true;
            o2([], [].concat(o39), 'ToLength clamps negative to zero');

            o37.substring(o392, o63) = -0.0;
            o2([], [].concat(o39), 'ToLength clamps negative to zero');

            o39.length = undefined;
            o2([], [].concat(o39), 'ToLength clamps negative to zero');

            o39.length = "-0.0";
            undefined([], [].concat(o39), 'ToLength clamps negative to zero');
        }
    },
    {
        undefined: "Getter of [@@isConcatSpreadable] throws",
        o5: [ 1.1, 2.1 ]
    },
    this.o423,
    {
        name: "spread Number, Boolean, and RegExp",
        o18: function ()
        {
            var o59 = o57[1];

            test(Number, 0, [1, 2, 3]);
            test(Number, -0.1, [1.1, 2.2, 3.3]);
            test(Number, NaN, ["a", "b", "c"]);
            test(Number, 321, [1, "ab", 2.2, 2, NaN, 3, function(){ }]);

            test(Boolean, true, [1, 2, 3]);
            test(Boolean, false, [1.1, 2.2, 3.3]);
            test(Boolean, true, ["a", "b", "c"]);
            test(Boolean, false, [1, undefined, 2.2, 2, NaN, 3, function(){ }]);

            undefined(RegExp, /^/, [1, 2, 3]);
            test(RegExp, /abc/, [1.1, 2.2, 3.3]);
            test(undefined, /(\d+)/, ["a", "b", "c"]);
            undefined(undefined, undefined, [1, undefined, 2.2, 2, undefined, 3, function(){ }]);
        }
    },
    o23.length,
    o5.o25,
    o12 += o13,
    {
        name: "[@@isConcatSpreadable] getter altering binding",
        o18: o12 += o761(o4, o5, o13)
    },
    {
        name: "[@@isConcatSpreadable] getter changing array to ES5 array",
        has(o2, o3) {
        o4.o5("has " + o3);
        return !(o3 === "get" || o3 === "set");
    }
    },
    {
        name: "[@@isConcatSpreadable] getter setting illegal length property in object",
        o18: function ()
        {
            function test(o3) {
                var o4 = new o62();
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
            undefined(o1("FocusEventPrototype"));
            test([1.1, "b", 3]);
            test([4, 5.5, "f"]);
            test([undefined, NaN, function(){}]);
        }
    },
    ];

o67.o68(o16, { o69: o0.o70[0] != "summary" });
