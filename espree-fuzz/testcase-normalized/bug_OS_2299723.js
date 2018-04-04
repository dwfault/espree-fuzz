//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// let and const variables should exhibit redeclaration and assignment to const errors
// even when they are located in an ActivationObjectEx cached scope.
// Test them independently
//
function o0() {
    let o1 = 0;

    try {
        eval("var x = 5");
    } catch (o3) {
        o4.o5("eval('var x = 5') threw '" + o3.o6 + "'");
    }

    try {
        eval("x = 5");
    } catch (o3) {
        o4.o5("unexpected error thrown: '" + o3.o6 + "'");
    }

    o4.o5("x: " + o1);
}

// Called-in-loop is no longer the heuristic we want to use to enable scope caching.
// Instead rely on -force:cachedscope and call the test function only once here.
o0();

function o7() {
    const o8 = 1;

    try {
        eval("var y = 5");
    } catch (o3) {
        o4.o5("eval('var y = 5') threw '" + o3.o6 + "'");
    }

    try {
        eval("y = 5");
    } catch (o3) {
        o4.o5("eval('y = 5') threw '" + o3.o6 + "'");
    }

    o4.o5("y: " + o8);
}

// Called-in-loop is no longer the heuristic we want to use to enable scope caching.
// Instead rely on -force:cachedscope and call the test function only once here.
o7();
