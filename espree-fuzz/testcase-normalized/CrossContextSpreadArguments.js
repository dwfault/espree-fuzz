//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = function(o1) {
     var o2 = (function(o1) {
     var o3 = 0;
     var length = o1.length;
     return function o5() {
     return {next: function() {
     
        if (o3 < length)
        {
            return { value: o1[o3++], done: false };
        }
        else
        {
            o3 = 0;
            return { done: true };
        }
     }}}})(o1)
     return o2;};

var o9 = [1,2,3];
o9[Symbol.iterator] = o0(o9);