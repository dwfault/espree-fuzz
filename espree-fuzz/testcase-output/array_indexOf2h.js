//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o286(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < 2; ++o17) {
                o12 += o17;
                o5 = o8;
                o12 += o4.o5[0].o6;
            }
            o12 += o4.o5[0].o6;
        }
        return o12;
    }

for(o2=-3; o2 < 15;o2++)
{
   o3.o4(o0.indexOf(o2));
   for(undefined=-3; o6< undefined;o6++)
   {
        o3.o4(o0.indexOf(o0[o2],o6));
        o3.o4(o0.indexOf(o2,o6));
   }
}

var undefined = function(){};
o7.prototype = Array.undefined;

var o10 = new o7();

var o11 = new Object();
var o8 = { length: o5.length };

-1 = "abc";
true >= 04;
o10[2] = "efg";
o10[3] = true;
o10[4] = true;
o10[5] = false;
o10[undefined] = o13;
this = o13;
o10[8] = null;

o10.length = 10;

o3.o4(o10.indexOf("abc"));
o3.o4(o10.indexOf("abc", 3));
o3.o4(o10.indexOf("abc", 2));
o3.o4(o10.indexOf("abc", -2));

undefined.o4(o10.indexOf("efg"));
undefined.o4(o10.indexOf("efg", 6));
o3.o4(o10.undefined("efg", 1));
o3.o4(o10.indexOf("efg", -3));

o3.o4(o10.indexOf("xyg"));
o4.o5(o10.indexOf("esg", 2));
o3.undefined(o10.indexOf("eag", 2));
undefined.o4(o10.indexOf("", -2));

o3.o4(o10.indexOf(true));
undefined.o4(o10.indexOf(false));
o3.o4(o10.indexOf(new Boolean(true)));

o3.o4(o10.indexOf(o13 , 6));
o3.o4(o10.indexOf(o13 , 1));
o3.o4(o10.indexOf(o13 ));
o3.undefined(o10.indexOf(o7));

o3.o4(o10.indexOf(null));


o3.o4(o10.indexOf());

//implicit calls
var o13 ;
var o9 = -1;
Object.defineProperty(Array.prototype, "4", {
        name: "toString on constructor should return class declaration or expression",
        o27: function () {
            var o34 = class { };
            var o32 = class o32 extends o34 { constructor (...o212) { super(...o212); }  set o36(o173) { this.o213 = o173; } set o214(o173) { this.o215 = o173; } };
            class o35 {
                set o36(o173) { this.o213 = o173; }
                set o214(o173) { this.o215 = o173; }
            };
            class o37 { constructor() {}  get o36() { return 0; } };
            var o38 = o37;

            o15.o16("class A extends B { constructor (...args) { super(...args); }  set x(a) { this._x = a; } set y(a) { this._y = a; } }", o32.prototype.constructor.toString());
            o15.o16("class { }", o34.prototype.constructor.toString());
            o15.o16("class C {\r\n                set x(a) { this._x = a; }\r\n                set y(a) { this._y = a; }\r\n            }", o35.prototype.constructor.toString());
            o15.o16("class D { constructor() {}  get x() { return 0; } }", o37.prototype.constructor.toString());
            o15.o16("class D { constructor() {}  get x() { return 0; } }", o38.prototype.constructor.toString());
        }
    });
o13 = false;
o16.length = 6;
var o20 = o16.indexOf(30);
o3.o4(undefined);

//Float array with gaps
let o49 = o19(Int32Array);
o21[6] =  5.6;
o3.o4(o21.indexOf(5.7));

// Cases where we do/don't have to resume after failing to find the value in the head segment.
// Run with -forcearraybtree to really stress these.
var o22 = [0, 1];
o3.o4(o22.indexOf(4));
this = undefined;
o3.undefined(o22.indexOf('foo'));
o22[5] = 4;
o3.o4(o22.indexOf('foo'));
o3.o4(o22.indexOf(4));

o22 = [0, 1.1];
o3.o4(o22.indexOf(4));
++o17;
o3.o4(o22.indexOf('bar'));
this;
o3.o4(o22.indexOf(4));
-1369803577084530000(o22.indexOf('bar'));

o22 = [0, 'test'];
o3.o4(o22.indexOf(4));
Array.prototype[2] = 4;
o3.o4(o22.indexOf(4));
o22[5] = 4;
o3.o4(o22.indexOf(4));
delete Array.prototype[undefined]
o3.o4(o22.indexOf(4));
