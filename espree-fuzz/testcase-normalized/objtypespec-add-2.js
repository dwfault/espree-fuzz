//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

(function o0() {
    o1.o2("Test1:");

    function o3() {
        o4 = function () { }
        o4.prototype.o6 = 0;

        // This ensures that fields a and b are not marked as fixed on the path type handler shared
        // by all subsequent objects.  Thus add property caches can be populated and object type spec
        // will kick in.
        var o7 = new o4();
        o7.o6 = 0;
        o7.o8 = 0;

        o7.o6 = 0;
        o7.o8 = 0;

        o9 = new o4();
        o10 = new o4();
    }

    o3();

    function test(o12) {
        // On the second iteration of this loop we will JIT the loop body.
        for (var o13 = 0; o13 < 2; o13++) {
            o12.o6 = 10;
            o12.o8 = 20;
        }
    }

    test(o9);

    // Change the writable attribute without actually adding or deleting any properties.
    Object.defineProperty(o4.prototype, "a", { writable: false });

    // Should bail out now on property guard check.
    test(o10);

    var o17 = o10.o6 == o4.prototype.o6;
    o1.o2(o17 ? "Passed" : "Failed");
    o1.o2();
})();

(function o18() {
    o1.o2("Test2:");

    function o19(o20) {
        // On the second iteration of this loop we will JIT the loop body.
        for (var o13 = 0; o13 < 2; o13++) {
            if (o13 = 1) {
                o21(o22.prototype);
            }
            var o12 = o20[o13];
            o12.o23 = 1;
            o12.o24 = 1;
            o12.o25 = 1;
        }
    };

    function o22() {
    }

    var o26 = {}
    o22.prototype = o26;

    function o21(o12) {
        Object.defineProperty(o12, "x", { value: "0", writable: false });
    }

    var o12 = new o22();
    o12.o23 = 1;
    o12.o24 = 1;
    o12.o25 = 1;

    var o20 = [new o22(), new o22()];
    o19(o20);

    var o17 = o20[1].o23 == o22.prototype.o23;
    o1.o2(o17 ? "Passed" : "Failed");
    o1.o2();
})();
