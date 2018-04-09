//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Flags: -version:5 -ForceDeferParse
function test()
{
    function o0() {
        // Bar is a let variable being used here before it's been assigned to
        o1;
    }

    o0();
    let o1 = this;
}

test();