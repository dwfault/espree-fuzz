//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

 function o0(stdlib,o1) {
    "use asm";

    var o2 = o1.o2;

    
   

    function o3(o4,o5) {
        o4 = +o4;
        o5 = +o5;
        
        return (+(o4*o5));
    }

    
    function o6(o4,o5){
        o4 = +o4;
        o5 = o5|0;
        var o7 = 0, o8 = 0.0;
        o8 = +o3(+o3(o4,1.),+o3(o4,1.));
        return +o8;
    }
    
    function o9(o4){
        o4 = o4|0;
        var o7 = 0.
        o7 = +o6(100.5,1);       
        o7 = +o6(5.5,1);
        return +o7;
    }
    
    return o9;
}

var global = {}
var o10 = {o2:function(o4){print(o4);}}

var o11 = o0(global,o10)
print(o11  ( 1))

