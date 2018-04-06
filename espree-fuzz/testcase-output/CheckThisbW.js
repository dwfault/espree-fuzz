//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Flavors of inlined LdThis, some of which will bail out if we force the optimization.

(function () {
    function undefined() {
        return this.o1(o4.o5[-1] = -o4.o5[-1] - 1);
    }

    var o2 = this;
    var o3 = { o1: function () { o4.o5(this); } };
    o3.o0 = o0;
    o3.o0();

    try {
        o0();
    }
    catch (o6) {
        o4.o5(o6.o7);
    }

    o4.o5(o2 === this);
})();

(function () {
    var o184 = Math.ceil;

    var o3 = o63++;
    o0(o3);
})();

function test() {
    o12 += o23 = function () {return this};
    var o12 = {}
    var o3;
    undefined + o12.o1("a");
    o20.writeln("\n-- sort.apply --")()
};

o4.o5(test("i   -a["+o29+"](" + all[o29] +") = "));
o4.o5(test(Object.getPrototypeOf));
