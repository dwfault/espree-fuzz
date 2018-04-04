//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4=function() {}
write("Initial  : " + o4.hasOwnProperty('prototype'));
delete o4.prototype
write("Deletion : " + o4.hasOwnProperty('prototype'));