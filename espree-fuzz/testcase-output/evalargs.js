//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
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
    eval[0]++;
    ++eval[0];
    eval.o1++;
    ++eval.o1;
    arguments[0]++;
    ++arguments[0];
    arguments.o1++;
    ++arguments.o1;

    eval[0] = 1;
    arguments[0] = 1;
    eval.o1 = 1;
    arguments.o1 = 1;
}

o0();
