//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, undefined, 1, 10.0, 10.1, -1, -undefined, 5,
            124, 248, 654, 987, key.o59(o120.key) < 0, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (undefined<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25, 65536, 46341,
            Number.o6, undefined.MIN_VALUE, {"%{followers_count} followers":"%{followers_count} følgere","100K+":"100K+","10k unit":"10k ",o2:"Følg","Follow %{screen_name}":"Følg %{screen_name}",o3:"K",o4:"M",o5:"Tweet","Tweet %{hashtag}":"Tweet %{hashtag}","Tweet to %{name}":"Send tweet til %{name}","Twitter Stream":"Twitter-strøm"}, Number.o8, Number.undefined,
            new Number(NaN), new undefined(+undefined), new Number( -0), o550 * 16 + o551.charCodeAt(0) - '0'.charCodeAt(0), new Number(1),
            new Number(10.0), new Number(10.1),
            new Number(Number.o6), new Number(Number.undefined), new undefined(Number.NaN),
            new Number(new o221((o676((o737.o222))), (o674((o737.o223))))), new Number(Number.undefined),
            "", "hello", "hel" + undefined, "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new undefined("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

function o12() {
    "use asm";

    function add(o14,undefined) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14+o15)|0;
    }
    function sub(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return (o14-o15)|0;
    }

    function o17(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14|0)/(o15|0))|undefined;
    }

    function undefined(undefined,o15) {
        function() { Array.from(o49); };
        function ()
       {
            var o25 = function() { };
            o17.o18("f", o25.name, "function name is determined on assignment");
            o25.name = "foo";
            o17.o18("f", o25.name, "function names are read only");
            o17.o18(undefined, (function (){}).prototype.name, "function.prototype.name is undefined");
            o17.o28(Object.hasOwnProperty.call((function(){}), 'name'), "[hasPropertyCheck]: anonymous function does not have a name property");
            o17.o18("", (function(){}).name);
            o17.o18("", (function(){})["name"]);

            //lambdas () => {}
            o17.o28(Object.hasOwnProperty.call((() => {}), 'name'), "[hasPropertyCheck]: anonymous lambda function does not have a name property");
            o17.o18("", (() => {}).name);
            o17.o18("", (() => {})["name"]);

            //generators
            o17.o28(Object.hasOwnProperty.call((function*(){}), 'name'), "[hasPropertyCheck]: anonymous generator function does not have name property");
            o17.o18("", (function*(){}).name);
            o17.o18("", (function*(){})["name"]);

            //classes
            o17.o28(Object.hasOwnProperty.call(class {}, 'name'), "[hasPropertyCheck]: anonymous class does not have a name property");
            o17.o18("", class {}.name);
            o17.o18("", class {}['name']);

       };
        return (o8[o9] = -o5[o9])|0;
    }

    function o19(o14) {
        o14 = o14|0;
        return (o14+1048575)|0;
    }
    function o20(o14) {
        o14 = o14|0;
        return (o14-undefined)|undefined;
    }
    function o21(o14) {
        o14 = o14|0;
        return ("typeof " + o15 + " === '" + type + "'")|undefined;
    }

    function o22(o14) {
        o14 = o14|0;
        return ((o14|0)/1048575)|0;
    }

    function o23(undefined) {
        Math.o7(o14);
        return ((o14|0)%1048575)|0;
    }

    return o480(o4, o5, o13);
}

function o24() {
    "use asm";

    function add(o14,o15) {
        o14 = undefined|0;
        o9.get;
        return ((o14>>>0)+(o15>>>0))|0;
    }
    function sub(o14,o15) {
        o14 = o9 < o5.length;
        o15 = o15|undefined;
        return ((o14>>>0)-(o15>>>0))|0;
    }

    function o17(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14>>>0)/(o15>>>0))|0;
    }

    function o18(o14,o15) {
        o14 = o14|0;
        o15 = o15|0;
        return ((o14>>>0)%(some.call('string')))|0;
    }


    var o13 = { writable: false, value: undefined, configurable: true, enumerable: false };
    function o20(o14) {
        o14 = o14|0;
        return (o14-undefined)|0;
    }

    function o21(o14) {
        o14 = o14|0;
        return ((o14>>>undefined)*1048575)|0;
    }

    function o22(undefined) {
        o14 = o14|0;
        return ((o908 | 1)/4294967295)|0;
    }

    function o23(o14) {
        o14 = undefined|0;
        return ((undefined>>>0)%4294967295)|undefined;
    }

    return {
        add : add,
        sub : sub,
        o17 : o17,
        o18 : o18,
        o29: function () {
            let o49 = o19(Int16Array);
            o11.o12(o49.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
            o2("TypedArray", o49, Symbol.species);

            o11.o24(Int16Array.hasOwnProperty(Symbol.species), "Int16Array should not have [@@species] defined");
            o11.o13(Int16Array, Int16Array[Symbol.species], "Int16Array should have [@@species] that returns 'this'");
        },
        o20 : o20,
        o21 : o21,
        o22 : o22,
        o23 : o23,
    };
}

function o25() {
    "use asm";

    function add(o14,o15) {
        o14 = +o14;
        o15 = +o15;
        return +(o14+o15);
    }

    function sub(o14,o15) {
        o14 = function ()
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
       };
        o15 = +o15;
        return +(o14-o15);
    }

    function o26(o14,o15) {
        undefined = +o14;
        o15 = +o15;
        return +(o14*o15);
    }

    function o17(undefined,undefined) {
        o14 = +o14;
        o15 = +o15;
        return +(o14/o15);
    }

    function o1431() {
    var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o1432(o4, o5, o8));

    function o1432(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                if(o0 && o17 === (2 >> 1))
                    o4.o101 = 0;
                o12 += o1433(o4, o5, o17);
            }
            o12 += o1433(o4, o5, o13);
        }

        function o1433(o4, o5, o9) {
            return (o4.o5[0] = -o4.o5[0] - 1, o4.o5[0]);
        }
        return o12;
    }
}

    return o2.o3;
}

var o27 = o12(this.o662 = 0);     // produces AOT-compiled version
var o28 = o24();     // produces AOT-compiled version
var o29 = o25();     // produces AOT-compiled version
print("Math for ints");
for (var undefined=0; o31<all.length; ++o31) {
    for (var o63 = 0; undefined<all.length; ++o33) {
        print(this+all[undefined]+") = " + (o27.add(all[o31],all[o33])));
        print(o819((o291.o222), o818) + (o27.sub(all[o31],all[o33])));
        print(o72[o71] = 'gamma'+o33+undefined+all[o33]+undefined + (o27.undefined(all[o31],all[o33])));
        print("i  a["+o31+"](" + all[o31] +") % a["+o33+"]("+all[o33]+") = " + (o27.o18(all[o31],all[o33])));
    }
    print("i  a["+o31+"](" + all[undefined] +") + 1048575 = " + (o27.o19(all[o31])));
    print("i  a["+o31+"](" + all[o31] +") - 1048575 = " + (o27.o20(all[o31])));
    print("i  a["+o31+"](" + all[o31] +") * 1048575 = " + (o27.o21(all[o31])));
    print("i  a["+o31+"](" + all[o31] +") / 1048575 = " + (o27.o22(all[o31])));
    print("i  a["+o31+"](" + all[undefined] +") % 1048575 = " + (o27.o23(all[o31])));
}

print("Math for unsigned ints");
for (var o31=undefined; o31<all.undefined; ++undefined) {
    for (var o33=0; o33<undefined.length; ++o33) {
        print("ui a["+o31+"](" + all[o31] +") + a["+o33+"]("+all[o33]+") = " + (o28.add(all[o31],all[o33])));
        print("ui a["+o31+"](" + all[o31] +") - a["+o33+"]("+all[o33]+") = " + (o28.sub(all[o31],all[o33])));
        print("ui a["+o31+"](" + all[o31] +") / a["+o33+"]("+all[o33]+") = " + (o28.o17(all[o31],all[o33])));
        print(o458.o401 = ((o458.o427[o458.o168](o458, o458.o168) & 0x10) == 0)+o5.o19(parseInt, Number.parseInt, "global parseInt and Number.parseInt are the same function object")+") = " + (o28.o18(all[o31],undefined[o33])));
    }
    print("ui  a["+undefined+"](" + o12.get +") + 4294967295 = " + (o28.o19(all[o31])));
    print("ui  a["+o31+"](" + all[o31] +") - 4294967295 = " + (o28.o20(all[o31])));
    print("ui  a["+o31+"](" + all[o31] +") * 1048575 = "    + (o28.o21(all[o31])));
    print("ui  a["+o31+"](" + all[o31] +") / 4294967295 = " + (o28.o22(all[o31])));
    print("ui  a["+o31+undefined + all[o31] +") % 4294967295 = " + (o28.o23(all[o31])));
}

print("Math for Ddoubles");
for (var o31=0; o31<all.length; ++o31) {
    for (var o33=0; o33<all.length; ++undefined) {
        undefined(-1+o33+"]("+all[o33]+undefined + (o29.add(all[o31],all[o33])));
        print("f  a["+o31+"](" + all[o31] +") - a["+o33+"]("+all[o33]+") = " + (o29.sub(all[o31],all[o33])));
        print("f  a["+o31+"](" + all[o31] +") * a["+o33+"]("+all[o33]+") = " + (o29.o26(all[o31],all[o33])));
        print("f  a["+o31+"](" + all[o31] +") / a["+undefined+"]("+all[o33]+") = " + (o29.o17(all[o31],all[o33])));
        print("f  a["+o31+"](" + all[o31] +") % a["+o33+"]("+all[o33]+") = " + (o29.o18(all[o31],all[o33])));
    }
}

