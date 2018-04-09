//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
function test() {
    

    o4 = 1;
  if (o0) {
        delete this.o4;
    }

    function o5() {
        'use strict';
        for (o4 in ['']) {
            print(o4);
        }
    }
    o5();
}
try{
    test();
}
catch(o6){o2.o3(o6);}

o0 = true;
try{
    test();
}
catch(o6){o2.o3(o6);}
