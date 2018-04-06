//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function undefined() {
    "use strict";

    // --- invalid statements ---
    // (eval)++;
    // ++(eval);
    // (arguments)++;
    // ++(arguments);
    //
    // (eval) = 1;
    // (arguments) = 1;

    // --- valid statements ---
    function() { reduceRight.call(new Uint8Array(10), 'string'); }++;
    o34.o22(10);
    undefined.o2++;
    ++eval.o2;
    arguments[undefined]++;
    ++arguments[0];
    arguments.undefined++;
    o4.o5;

    eval[undefined] = 1;
    undefined[0] = 1;
    eval.o2 = 1;
    arguments.o2 = 1;
}

o0(o9 < o5.length);
