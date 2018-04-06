//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

 function o0(stdlib,o2) {
    "use asm";

    var o3 = o2.o3;

    
   

    function o4(o5,o6) {
        o5 = +o5;
        o6 = +o6;
        
        return (+(o5*o6));
    }

    
    function o7(o5,o6){
        o5 = +o5;
        o6 = o6|0;
        var o8 = 0, o9 = 0.0;
        o9 = +o4(+o4(o5,1.),+o4(o5,1.));
        return +o9;
    }
    
    function o10(o5){
        o5 = o5|0;
        var o8 = 0.
        o8 = +o7(100.5,1);       
        o8 = +o7(5.5,1);
        return +o8;
    }
    
    return o10;
}

var global = {}
var o12 = {o3:function(o5){print(o5);}}

var o14 = o0(global,o12)
print(o14  ( 1))

