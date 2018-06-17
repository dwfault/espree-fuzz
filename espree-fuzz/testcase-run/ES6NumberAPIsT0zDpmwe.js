//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Number API extensions tests -- verifies the API shape and basic functionality

try {
o0.o1("getElementsByName");
}catch(e){}

var o2 = o1.filter(o0,this);

try {
this(o2, { value: 0 });
}catch(e){}
