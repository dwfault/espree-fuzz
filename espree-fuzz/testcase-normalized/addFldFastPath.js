//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = 10;
    var o2 = new Array(o1);
    for (var o4 = 0; o4 < o1; o4++) {
        // This object will have 4 inlined slots
        var o5 = { o2: 0 };
        o6.o7("...");
        // This is the field add we want the fast path for.
        o5.o8 = 1;
        o6.o7("...");
        // Use o to verify the type got written correctly to the object.
        o5.o9 = -1;
        o2[o4] = o5;
    }
    for (var o4 = 0; o4 < o1; o4++) {
        o6.o7("{ a: " + o2[o4].o2 + ", p: " + o2[o4].o8 + ", z: " + o2[o4].o9 + "}");
    }
}

o6.o7("testMonoInlineSlots: ");
o0();
o0();
o6.o7();


function o10() {
    var o1 = 10;
    var o2 = new Array(o1);
    for (var o4 = 0; o4 < o1; o4++) {
        // This object will have 4 inlined slots
        var o5 = { o2: 0 };
        // This adds a property ahead of time for every other object, so the profile indicates we either set or add a property.
        if (o4 % 2 == 0) {
            o5.o8 = 1;
        }
        o6.o7("...");
        // This is the field add we want the fast path for.
        o5.o8 = 1;
        o6.o7("...");
        // Use o to verify the type got written correctly to the object.
        o5.o9 = -1;
        o2[o4] = o5;
    }
    for (var o4 = 0; o4 < o1; o4++) {
        o6.o7("{ a: " + o2[o4].o2 + ", p: " + o2[o4].o8 + ", z: " + o2[o4].o9 + "}");
    }
}

o6.o7("testMonoInlineSlotsSetOrAdd: ");
o10();
o10();
o6.o7();


function o11() {
    var o1 = 10;
    var o2 = new Array(o1);
    for (var o4 = 0; o4 < o1; o4++) {
        // This object will have 0 inlined slots.
        var o5 = {};
        // This will add aux slot array.
        o5.o2 = 1;
        o6.o7("...");
        // This is the field add we want the fast path for.
        // Adding property now will stick it into an aux slot but won't require slot array re-allocation.
        o5.o8 = 1;
        o6.o7("...");
        // Use o to verify the type got written correctly to the object.
        o5.o9 = -1;
        o2[o4] = o5;
    }
    for (var o4 = 0; o4 < o1; o4++) {
        o6.o7("{ a: " + o2[o4].o2 + ", p: " + o2[o4].o8 + ", z: " + o2[o4].o9 + "}");
    }
}

o6.o7("testMonoAuxSlots: ");
o11();
o11();
o6.o7();


function o12() {
    var o1 = 10;
    var o2 = new Array(o1);
    for (var o4 = 0; o4 < o1; o4++) {
        // This object will have 0 inlined slots.
        var o5 = {};
        o6.o7("...");
        // This is the field add we want the fast path for.
        // Adding property now will require slot array allocation and then will stick it into an aux slot.
        o5.o8 = 1;
        o6.o7("...");
        // Use o to verify the type got written correctly to the object.
        o5.o9 = -1;
        o2[o4] = o5;
    }
    for (var o4 = 0; o4 < o1; o4++) {
        o6.o7("{ p: " + o2[o4].o8 + ", z: " + o2[o4].o9 + "}");
    }
}

o6.o7("testMonoAuxSlotsAdjustmentRequired1: ");
o12();
o12();
o6.o7();


function o13() {
    var o1 = 10;
    var o2 = new Array(o1);
    for (var o4 = 0; o4 < o1; o4++) {
        // This object will have 0 inlined slots.
        var o5 = {};
        // This will add aux slot array of size 4, but it will fill every slot.
        o5.o2 = 0;
        o5.o14 = 1;
        o5.o15 = 2;
        o5.o16 = 3;
        o6.o7("...");
        // This is the field add we want the fast path for.
        // Adding property now will require slot array allocation and then will stick it into an aux slot.
        o5.o8 = 1;
        o6.o7("...");
        // Use o to verify the type got written correctly to the object.
        o5.o9 = -1;
        o2[o4] = o5;
    }
    for (var o4 = 0; o4 < o1; o4++) {
        o6.o7("{ a: " + o2[o4].o2 + ", b: " + o2[o4].o14 + ", c: " + o2[o4].o15 + ", d: " + o2[o4].o16 + ", p: " + o2[o4].o8 + ", z: " + o2[o4].o9 + "}");
    }
}

o6.o7("testMonoAuxSlotsAdjustmentRequired2: ");
o13();
o13();
o6.o7();


function o17() {
    var o1 = 25;
    var o2 = new Array(o1);
    for (var o4 = 0; o4 < o1; o4++) {
        var o5;
        switch (o4 % 3) {
            case 0:
                o5 = {};
                break;
            case 1:
                o5 = { o2: 0 };
                break;
            case 2:
                o5 = { o14: 0 };
                break;
        }
        if (o4 % 6 >= 3) {
            o5.o8 = 0;
        }
        o6.o7("...");
        // This is the field add we want the fast path for.
        o5.o8 = 1;
        o6.o7("...");
        o5.o9 = -1;
        o2[o4] = o5;
    }
    for (var o4 = 0; o4 < o1; o4++) {
        o6.o7("{ a: " + o2[o4].o2 + ", b: " + o2[o4].o14 + ", p: " + o2[o4].o8 + ", z: " + o2[o4].o9 + "}");
    }
}

o6.o7("testPoly: ");
o17();
o17();
o6.o7();

(function () {
    var o18 = function () {
    }

    o18.prototype = { o2: 0, o14: 0, o15: 0 }

    function o20() {
        // Make sure properties a, b, and c are not marked as fixed on Blank's type handler, so that
        // add property inline caches can be populated.
        var o5 = new o18();
        o5.o2 = 1;
        o5.o14 = 2;
        o5.o15 = 3;

        var o5 = new o18();
        o5.o2 = 1;
        o5.o14 = 2;
        o5.o15 = 3;
    }

    function o21(o5, o22) {
        // Do this only for the JIT-ed iteration to be sure caches aren't populated and we don't do
        // object type spec.
        if (o22) {
            o5.o2 = 1;
            o5.o14 = 2;
            o5.o15 = 3;
        }
    }

    o6.o7("testMonoStoreFieldCacheInvalidation: ");

    o20();

    var o5 = new o18();
    o21(o5, false);
    o6.o7("{ a: " + o5.o2 + ", b: " + o5.o14 + ", c: " + o5.o15 + "}");

    var o5 = new o18();
    o21(o5, true);
    o6.o7("{ a: " + o5.o2 + ", b: " + o5.o14 + ", c: " + o5.o15 + "}");

    // Change the writable attribute without actually adding or deleting any properties.
    // This should invalidate all inline caches for property b.
    Object.defineProperty(o18.prototype, "b", { writable: false });

    var o5 = new o18();
    o21(o5, true);
    o6.o7("{ a: " + o5.o2 + ", b: " + o5.o14 + ", c: " + o5.o15 + "}");
})();

o6.o7();

(function () {
    var o18 = function () {
    }

    o18.prototype = { o2: 0, o14: 0, o15: 0 }

    function o26() {
        // Make sure properties a, b, and c are not marked as fixed on Blank's type handler, so that
        // add property inline caches can be populated.
        var o5 = new o18();
        o5.o2 = 1;
        o5.o14 = 2;
        o5.o15 = 3;
        o5.o16 = 4;

        var o5 = new o18();
        o5.o2 = 1;
        o5.o14 = 2;
        o5.o15 = 3;
        o5.o16 = 4;
    }

    function o27(o28, o22) {
        // This loop ensures that inline caches for a and b become polymorphic on the second iteration.
        // That's because the type encountered the second time around is the final type with all properties present.
        var o5;
        for (var o4 = 0; o4 < 2; o4++) {
            o5 = o28[o4];
            o5.o2 = 1;
            o5.o14 = 2;
            o5.o15 = 3;
        }
    }

    function o29(o28) {
        for (var o4 = 0; o4 < 2; o4++) {
            var o5 = o28[o4];
            o6.o7("{ a: " + o5.o2 + ", b: " + o5.o14 + ", c: " + o5.o15 + "}");
        }
    }

    o6.o7("testPolyStoreFieldCacheInvalidation: ");

    o26();

    var o30 = new Array(2);
    o30[0] = new o18();
    var o5 = new o18();
    o5.o2 = 1;
    o5.o14 = 2;
    o5.o15 = 3;
    o30[1] = o5;
    o27(o30, false);
    o29(o30);

    // Change the writable attribute without actually adding or deleting any properties.
    // This should invalidate all inline caches for property b, including those that are part of a
    // polymorphic inline cache - provided they got registered for invalidation properly.
    Object.defineProperty(o18.prototype, "b", { writable: false });

    var o31 = new Array(2);
    o31[0] = new o18();
    o31[1] = new o18();
    o27(o31, true);
    o29(o31);

})();