//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Flavors of inlined LdThis, some of which will bail out if we force the optimization.

(function () {
    function o0() {
        return this.o1();
    }

    var o2 = this;
    var o257 = { o1: function () { o4.o5(this); } };
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
    function o0(o8) {
        return o8.o1();
    }

    var o3 = { o1: function () { o4.o5(this); } };
    o0(o3);
})();

function test() {
    Object.prototype['foo'] = function () {return this};
    var o9 = {}
    var o3;
    o3 + o9.o1("a");
    ((function(){
        return 1;
    })()).o1()
};

o4.o5(test());
o4.o5(test());
