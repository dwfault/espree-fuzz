//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

if (typeof (o0) != "undefined") {
  o0.o1("..\\UnitTestFramework\\UnitTestFramework.js", "self");
}

function o845(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < o5.length; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < 2; ++o23) {
                        o12 += o23;
                        if(o0 && o23 === (2 >> 1))
                            o4.o101 = 0;
                        o12 += o4.o5[-1];
                    }
                }
            }
            o12 += o4.o5[-1];
        }
        return o12;
    }

o19.undefined(o2);
