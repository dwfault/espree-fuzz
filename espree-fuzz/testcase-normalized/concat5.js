//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//implicit calls

var o0 = 1;
var o1 = 2;
var o2 = {toString: function(){ o0=3; return "Hello World";}};
o0 = o1;
Object.prototype.concat = String.prototype.concat;
var o8 = o2.concat("abc");
o9.o10 (o0); 