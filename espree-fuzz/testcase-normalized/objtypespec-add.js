//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Make sure that objtypespec add-property optimization
// is correct when different properties are added on different paths.

// Each test runs in two flavors:
//   a) without field pre-initialization, such that fields added in test code may be marked as fixed and
//      caches remain unpopulated until JIT time.
//   a) with field pre-initialization, such that fields added in test code have populated caches.
function o0() {
}

function o1() {
    return new o0();
}

function o2(o3, o4) {
    o3.o5 = 100; // t1->t2
    if (!o4) {
        o3.o6 = 200; // t2->t3
    }
    o3.o7 = 300; // t3->t4
    var o8 = 0;
    for (var o9 in o3) {
        o10.o11(o9 + ": " + o3[o9]);
        o8 += o3[o9];
    }
    return o8;
}
o10.o11(o2(o1(), false));
o10.o11(o2(o1(), true));

function o12() {
    var o3 = new o0();
    o3.o5 = 0;
    o3.o6 = 0;
    o3.o7 = 0;
    return new o0();
}

function o2(o3, o4) {
    o3.o5 = 100; // t1->t2
    if (!o4) {
        o3.o6 = 200; // t2->t3
    }
    o3.o7 = 300; // t3->t4
    var o8 = 0;
    for (var o9 in o3) {
        o10.o11(o9 + ": " + o3[o9]);
        o8 += o3[o9];
    }
    return o8;
}
o10.o11(o2(o12(), false));
o10.o11(o2(o12(), true));


function o13() {
}

function o14() {
    return new o13();
}

function o15(o3, o4) {
    o3.o5 = 100; // t1->t2
    if (!o4) {
        o3.o6 = 200; // t2->t3
    }
    o3.o7 = 300; // t3->t4
    o3.o6 = 500;
    var o8 = 0;
    for (var o9 in o3) {
        o10.o11(o9 + ": " + o3[o9]);
        o8 += o3[o9];
    }
    return o8;
}
o10.o11(o15(o14(), false));
o10.o11(o15(o14(), true));


function o16() {
    var o3 = new o13();
    o3.o5 = 0;
    o3.o6 = 0;
    o3.o7 = 0;
    return new o13();
}

function o17(o3, o4) {
    o3.o5 = 100; // t1->t2
    if (!o4) {
        o3.o6 = 200; // t2->t3
    }
    o3.o7 = 300; // t3->t4
    o3.o6 = 500;
    var o8 = 0;
    for (var o9 in o3) {
        o10.o11(o9 + ": " + o3[o9]);
        o8 += o3[o9];
    }
    return o8;
}
o10.o11(o17(o16(), false));
o10.o11(o17(o16(), true));


function o18() {
}

function o19() {
    return new o18();
}

function o20(o3, o21)
{
    o3.o22 = 1;
    o3.o23 = (!o21 ? (o3.o24 = 100):100);
    if (o21)
    {
        o3.o25 = 2;
    }
    o3.o26 = 3;
    for (var o27 in o3)
    {
        o10.o11(o27 + ":" + o3[o27]);
    }
    o10.o11("END");
    o10.o11("");
}
o20(o19(), true);
o20(o19(), false)

function o28() {
    var o3 = new o18();
    o3.o22 = 0;
    o3.o23 = 0;
    o3.o25 = 0;
    o3.o26 = 0;
    return new o18();
}

function o20(o3, o21)
{
    o3.o22 = 1;
    o3.o23 = (!o21 ? (o3.o24 = 100):100);
    if (o21)
    {
        o3.o25 = 2;
    }
    o3.o26 = 3;
    for (var o27 in o3)
    {
        o10.o11(o27 + ":" + o3[o27]);
    }
    o10.o11("END");
    o10.o11("");
}
o20(o19(), true);
o20(o19(), false)

function o29() {
  var o30 = function () {
  };
  o7 = {
    o7: Math.o32(),
    set o33(o34) {
    },
    o33: 4277,
    o7: o30
  };
}
o29();
o29();
o29();
o29();
o29();
function o35(o36, o37) {
  for (var o38 in o37)
    o35(o36, o37[o38]);
}
o35('this', this);
