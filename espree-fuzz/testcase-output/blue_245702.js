//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
function test() {
    var print = function (o3) {
        o4.o5(o3);
    };

    o6 = 1;
  if (o0) {
        delete this.o6;
    }

    function o7() {
        'use strict';
        for (o6 in ['']) {
            print(o6);
        }
    }
    o7();
}
try{
    test();
}
catch(o8){o4.o5(o8);}

o0 = true;
try{
    test();
}
catch(o8){o4.o5(o8);}
