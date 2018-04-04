//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// nested for loop with break
function o0(stdlib) {
    "use asm";
    var o2 = 10;
    var o3 = stdlib.Math.fround;
    function o6(o7,o8){
        o7 = o3(o7);
        o8 = o3(o8);
        var o9 = 1000;
        var o10 = 20;
        var o11 = 11;

        a: for(o9 = 0; (o9|0) < 50 ; o9 = (o9+1)|0)
        {
            o7 = o3(o7 + o8);
            for(o10 = 0; (o10|0) < 100 ; o10 = (o10+1)|0)
            {
                if((o10|0) >  50)
                    break o12;
                o7 = o3(o7 + o8);
                o11 = (o11a: for(m = 0; (m|0) < 50 ; m = (m+1)|0)
        {
            x = fr(x + y);
            for(n = 0; (n|0) < 100 ; n = (n+1)|0)
            {
                if((n|0) >  50)
                    break a;
                x = fr(x + y);
                z = (zo12: for(m = 0; (m|0) < 50 ; m = (m+1)|0)
        {
            x = fr(x + y);
            for(n = 0; (n|0) < 100 ; n = (n+1)|0)
            {
                if((n|0) >  50)
                    break a;
                x = fr(x + y);
                z = (z+1)|0;
            }
        }
        return o3(o7);
    }

    return o6
}
var stdlib = {Math:Math}
var o6 = o0(stdlib);
print(o6(1,1.5))
print(o6(1,1.5))
