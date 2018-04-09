//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o1512() {
    var o4 = {
        o5: [ { o6: 1 }, { o6: 2 } ]
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o7 = { length: o5.length };
    for(var o8 = -1; o8 < o5.length; ++o8)
        o7[o8] = { o6: -o5[o8].o6 };
    return o9(o1513(o4, o5, o7));

    function o1513(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < o5.length; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < 2; ++o16) {
                o11 += o16;
                for(var o21 = 0; o21 < o5.length; ++o21) {
                    o11 += o21;
                    for(var o22 = 0; o22 < o5.length; ++o22) {
                        o11 += o22;
                        o11 += o5[o22].o6;
                    }
                }
                o64(o5);
            }
            o11 += o5[o12].o6;
        }
        return o11;
    }
};
var o1 = o0;
o1.o2 = 5;

o3.o4(o5, 50);

/////////////////

function o5()
{
    o6(`Array.isArray(x): ${Array.isArray(o0)}`, true);  //true
    o6(`x.length: ${o0.length}`, true); //3

    o6(`x === y: ${o0 === o1}`, true); //true
    o6(`x.baz: ${o0.o2}`, true); //5
    o6(`x[0]: ${o0[0]}`, true); //3
    o6(`y[1]: ${o1[1]}`, true); //null
    o6(`x[5]: ${o0[5]}`, true); //undefined

    ////
    o0[1] = "non-null";
    o0[5] = { o7: 3 };
    o0.push(10);
    ////

    o6(`post update -- y[1]: ${o1[1]}`, true); //non-null
    o6(`post update -- x[5] !== null: ${o0[5] !== null}`, true); //true
    o6(`post update -- x[5].bar: ${o0[5].o7}`, true); //3
    o6(`post update -- y[6]: ${o1[6]}`, true); //10
}