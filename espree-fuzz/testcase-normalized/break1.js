//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// nested for loop with break
function o0() {
    "use asm";
    var o1 = 10;
    function o2(o3,o4){
        o3 = o3|0;
        o4 = +o4;
        var o5 = 1000;
        var o6 = 10;
        var o7 = 11;

        a: for(o5 = 0; (o5|0) < 50 ; o5 = (o5+1)|0)
        {
            o3 = (o3+1)|0
            if((o3|0) > 10)
            {
                for(o6 = 0; (o6|0) < 100 ; o6 = (o6+1)|0)
                {
                    if((o6|0)< 50)
                        break o8;
                    o3 = (o3+1)|0;
                    o7 = (o7a: for(m = 0; (m|0) < 50 ; m = (m+1)|0)
        {
            x = (x+1)|0
            if((x|0) > 10)
            {
                for(n = 0; (n|0) < 100 ; n = (n+1)|0)
                {
                    if((n|0)< 50)
                        break a;
                    x = (x+1)|0;
                    z = (zo8: for(m = 0; (m|0) < 50 ; m = (m+1)|0)
        {
            x = (x+1)|0
            if((x|0) > 10)
            {
                for(n = 0; (n|0) < 100 ; n = (n+1)|0)
                {
                    if((n|0)< 50)
                        break a;
                    x = (x+1)|0;
                    z = (z+1)|0;
                }
            }
        }
        return (o3 + o7)|0;
    }

    return o2
}

var o2 = o0();
print(o2(1,1.5))
print(o2(1,1.5))
