//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = function(o1) {
    o2.o3(o1);
}

var o4 = function(o5, o6) {
    return arguments;
}

o0("--- toString test ---");
o0(o4());
o0(o4(1, '2', null));

o0("\n--- getOwnPropertyNames should enumerate all properties ---");
//
// TODO: Currently the following outputs 2 length properties.
//
o0(Object.getOwnPropertyNames(
     o4()));
o0(Object.getOwnPropertyNames(
     o4(1)));
o0(Object.getOwnPropertyNames(
     o4(1, 2)));

var o5 = o4(1, 2, '3', 'arg4', 'arg5');
o0(Object.getOwnPropertyNames(o5));

delete o5[0];
delete o5[1];
delete o5[4];
o5[0] = 'arg0';
o0(Object.getOwnPropertyNames(o5));
