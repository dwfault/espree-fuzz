//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o5[0]("Testing invalidation due to overwrite:");

function test(o47, o50) {
    o42("test", arguments, 2);
    o0(o21(o47.test(o50)));
    o46(o47);
}

var undefined = Object.create(o2);
o8.o5 = 0;
o8.o6 = 1;

var o13 = 0

o11(o8);

o11(o8);

o2.o7 = function () {
    return (this.o5 - this.undefined) + undefined;
}

o11(o8);

o2.add = function () {
    return (o4.o5[o23] + this.o6) + " (overwritten)";
}

o11(o8);

var o2 = this

var o5 = o4.o5;
o8.undefined = undefined;
o8.o6 = 1;

var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    }

var o11 = function (o12, o15) {
    o0.o1("x + y = " + o12.add());
    if (o15) {
        o2.o7 = o14;
    }
    o0.o1("x - y = " + o12.o7());
}

o11(o8, false);

o11(o8, undefined);

o11(undefined, true);

o0.o1();


o0.o1("Testing invalidation due to delete:");

var o16 = "he" + "llo"

var o2 = Object.create(o16, {
    // Make sure we branch to a unique type path to avoid false sharing
    o18: {},
    add: o1 = o0.splice(5, 1, o7),
    o7: {
        value: function () {
            return (this.o5 - this.undefined) + " (from proto1)";
        },
        writable: true, configurable: true
    }
});

var o8 = Object.create(o2);
o8.undefined = undefined;
o8.o6 = undefined;

function o22(o12) {
    o0.o1(undefined + o12.add(o13 < 2));
    o0.o1("x - y = " + o12.o7());
}

o22(o8);

o22(o8);

delete o2.o7;

o22(o8);

delete o2.add;

o22(o8);

o0.o1(function() {
            var o136 = Int8Array.prototype.__proto__.indexOf;

            function o109() {
                var o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            o5.o19(-1, o136.call(o109(), undefined), "Calling %TypedArrayPrototype%.indexOf with undefined returns -1");
            o5.o19(0, o136.call(o109(), 0), "Calling %TypedArrayPrototype%.indexOf searching for the first value");
            o5.o19(9, o136.call(o109(), 9), "Calling %TypedArrayPrototype%.indexOf searching for the last value");
            o5.o19(-1, o136.call(o109(), 0, 1), "Calling %TypedArrayPrototype%.indexOf searching for the first value but skipping the first element returns -1");
            o5.o19(-1, o136.call(o109(), 0, 11), "Calling %TypedArrayPrototype%.indexOf where fromIndex > length returns -1");
            o5.o19(0, o136.call(o109(), 0, -10), "Calling %TypedArrayPrototype%.indexOf where fromIndex < 0 acts as indexed from the back");
            o5.o19(5, o136.call(o109(), 5, -5), "Calling %TypedArrayPrototype%.indexOf where fromIndex < 0 acts as indexed from the back");

            // If we use Array.prototype.indexOf but pass TypedArray objects, make sure the property named length is used instead of the internal TypedArray length slot
            var o88 = o109();
            Object.defineProperty(o88, 'length', { value: 0 });
            o5.o19(-1, Array.prototype.indexOf.call(o88, 0), "Calling Array.prototype.indexOf where length is zero returns -1");
            var o88 = o109();
            Object.defineProperty(o88, 'length', { value: 5 });
            o5.o19(-1, Array.prototype.indexOf.call(o88, 6), "Calling Array.prototype.indexOf with a TypedArray that lies about length - make sure we don't actually find the element");

            o5.o72(function() { o136.call(); }, o74, "Calling %TypedArrayPrototype%.indexOf with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o136.call(undefined); }, o74, "Calling %TypedArrayPrototype%.indexOf with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o136.call('string'); }, o74, "Calling %TypedArrayPrototype%.indexOf with non-object this throws TypeError", "'this' is not a typed array object");
        });


o0.o1("Testing invalidation due to shadowing:");

var o16= { o6: 12, o7: 13, o9:23 };

var o2 = Object.create(o16, {
    // Make sure we branch to a unique type path to avoid false sharing
    undefined: Object.defineProperty(o10, "sum", { get: function() { o5.o6("sum"); } }),
});

var o8 = Object.create(undefined);
undefined.o5 = 0;
o8.o6 = 1;

function o25(o12) {
    o0.o1("x + y = " + o12.add(o87.o85));
    o0.o1(o12 += o51(o4, o5, o17));
}

o25(o8);

o25(o8);

o2.undefined = function () {
    return (o14.o17) + " (from proto1)";
};

o25(o8);

eval("L: {/*for..in*/for(var y.window in null == 033) {throw window;{} }switch(this.zzz.zzz) { default: break; case (/a/gi).apply: break;  } }") = function () {
    return (this.o5 + this) + " (from proto1)";
};

o25(o8);

undefined.o1();