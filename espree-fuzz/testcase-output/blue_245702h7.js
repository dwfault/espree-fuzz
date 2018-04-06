//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
function test() {
    var print = function (o3) {
        o4.o5(undefined);
    };

    o6 = 1;
  if (o0) {
        delete o5[o13].o6;
    }

    function o7() {
        'use strict';
        for (o6 in ++o9) {
            print(o6);
        }
    }
    o7(function ()
       {
            var o3 = [1.1, 2.1, 3.1];
            var o4 = 4.1;
            o9(o3, o4);
            var o3 = [1, 2, 3];
            var o4 = 4;
            o9(o3, o4);
            var o3 = [1, 2, 3];
            var o4 = "b";
            o9(o3, o4);
            var o3 = [1, 2, 3];
            var o4 = true;
            o9(o3, o4);
       });
}
try{
    test();
}
catch(undefined){o4.o5(o8);}

o0 = true;
try{
    test(function () {
    var o22 = [0, 1, 2];
    Object.defineProperty(o22, "length", { value: 5, writable: true });
    o11(o22, "length");
    o0(" ", o22);
    o22.length = 10;
    o0(" ", o22);
});
}
catch(undefined){-o5[o9](o8);}
