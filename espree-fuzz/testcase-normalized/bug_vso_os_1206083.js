//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// VSO OS Bug 1206083
// Accessor inline cache was not invalidated after eval() function definition overwrites global accessor property with same name
function print(o1) { o2.o3("" + o1); }
Object.defineProperty(this, "z", { get: function () { print("getter") }, set: function () { print("setter") }, configurable: true });
print(o9);
eval('function z(){}');
print(o9);
o9 = 0;
print(o9);
