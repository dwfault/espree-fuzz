//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//Switches: -maxinterpretCount:2 -off:simplejit -off:dynamicProfile
// Exercises IRBuilder::BuildCallIExtendedFlags()

function o0() {
    eval("");
};

o0();
o0();
o0();
print("pass");
