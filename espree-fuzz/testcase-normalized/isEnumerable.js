//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0= { o1: function() { return "hello"; } }
o2.o3(o0.propertyIsEnumerable("f"));
o2.o3(o0.propertyIsEnumerable("g"));
var o5=new Array();
o2.o3(Array.propertyIsEnumerable("length"));
o2.o3(o5.propertyIsEnumerable("length"));


