//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = Symbol('child symbol');
var o1 = write(0 >= new Number(Number.o4));

try {
o1[o0] = 'child value';
}catch(e){}
