//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    "use asm";

    function o1(o2) {
        o2 = o2|0;
        o2=(o2|0)==1;
        if(o2){
            o2 = 10;
        }
        return o2|0;
    }
    return {
        o1:o1
    }
}

var o3 = o0();
print(o3.o1(2));
print(o3.o1(2));
