//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = {};
    o2 = Object.create(o1);

    var o5 = o6.o7('function setUp(obj0, obj1) { obj1.foo0 = 1; Object.setPrototypeOf(obj0, {}); Object.defineProperty(Object.getPrototypeOf(obj0), "foo1", {writable: false, value: "bar"}); }', 'samethread');
    o5.o8(o1, o2);

    o2.o9 = 'bar';
}

o0();

o6.o10('Pass');
