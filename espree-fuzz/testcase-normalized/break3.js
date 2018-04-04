//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// do while and while loops and break
function o0() {
    "use asm";
    var o1 = 10;
    function o2(o3,o4){
        o3 = o3|0;
        o4 = +o4;
        var o5 = 1000;
        var o6 = 10;
        var o7 = 1.1;

        a: while((o3|0) < 30)
        {
            o3 = (o3+1)|0
            if((o3|0) > 10)
            {
                o6 = 0;
                do
                {
                    if((o6|0) > 50)
                        break o8;
                    o3 = (o3+1)|0;
                    o4 = +(o4 * o7)
                    o6 = (o6 + 1)|0
                }while((o6a: while((x|0) < 30)
        {
            x = (x+1)|0
            if((x|0) > 10)
            {
                n = 0;
                do
                {
                    if((n|0) > 50)
                        break a;
                    x = (x+1)|0;
                    y = +(y * z)
                    n = (n + 1)|0
                }while((no8: while((x|0) < 30)
        {
            x = (x+1)|0
            if((x|0) > 10)
            {
                n = 0;
                do
                {
                    if((n|0) > 50)
                        break a;
                    x = (x+1)|0;
                    y = +(y * z)
                    n = (n + 1)|0
                }while((n|0) < 100)
            }
        }
        return +o4;
    }

    return o2
}

var o2 = o0();
print(o2(1,1.5))
print(o2(1,1.5))
