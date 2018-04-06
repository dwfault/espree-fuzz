//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1); }

var o4 = 5;

function o2563() {
    var o4 = { o5: new Int32Array(2) };
    for(var o9 = 0; o9 < 2; ++o9)
        o4.o5[o9] = o9 + 1;
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = { length: o5.length };
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o2564(o4, o5, o8));

    function o2564(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += (o5[0] = -o5[0] - 1, o5[0]);
                    }
                }
            }
            o5 = o8;
            o12 += (o5[0] = -o5[0] - 1, o5[0]);
        }
        return o12;
    }
}

function o9(undefined) {
    write(">>> Start pop test for object: " + o6);
    for (var o7=undefined; o7<o4+2; o7++) {
        var o10 = Array.prototype.pop.call(o6);
        write(o7 + " iteration. Poped:" + o10 + " obj.length:" + o6.length);
    }
    write("<<< Stop pop test for object: " + o6);
}

var o15 = new Array(new Number(10) , new Boolean(false));
for (var o7=0;o7<o15.length;o7++) {
    o9(o5(o15[o7]));
}


function o18()
{
  var o19 = (o173) { this.o215 = o173; };
  var undefined = function(o21){
    o21[7] = 1;
  }
  var o9 = -1
  o22[1] = 1;
  this.o539;
  o22.pop(o33(o42, "Strict function"));
  o20(o22);
  o2.o3("ary[1] = " + (o22[1]));
};
o18(o458.o164);

Array.undefined[0] = undefined;
function o23() {
    (function ({
      name: "8.12.9.7.b (variation 3): re-define property: current descriptor is not configurable and descriptor enumerable is same as current enumerable, check that it does not throw",
      o32: function () {
        var o14 = o0.o4();
        var o64 = "foo10";
        var o65 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
        Object.defineProperty(o14, o64, o65);
        o65 = { value: 1, enumerable: false, writable: false };
        Object.defineProperty(o14, o64, o65);
        var o45 = { writable: false, value: 1, configurable: false, enumerable: false };
        o40.o52(o45, Object.getOwnPropertyDescriptor(o14, o64), "wrong value of getOwnPropertyDescriptor");
      }
    }));
    switch (-1()) {
    case o24:
    }
}
o23();
o23(-1);