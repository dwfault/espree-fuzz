//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//only flag needed -ForceArrayBTree
function o0()
{
    var o0 = {};
    var o2 = {};
    var o3 = Array();
    o3[5] = 1;
    var o4 = 0;
    do {
        o4++;
        Object.defineProperty(o2, '5', {
            get: function () {
                o1.push('getter');
                o5.o6("Inside getter FAILED");
                return 5;
            },configurable: true
        });
        o3[10] = 1;
        o3.slice();
        o2 = Object.prototype;
    } while (o4 < 2);
    delete o2['5'];
    delete Object.prototype['5'];
}

function o7()
{
    var Debug = true;
    var o8 = new Array(10);
    Object.defineProperty(Object.prototype, '5', {
            get: function () {
                if(Debug) o5.o6("Inside getter Object 1");
                return 3;
            }
     });
    Object.defineProperty(Array.prototype, '5', {
            get: function () {
                if(Debug) o5.o6("Inside getter Array 1");
                return 4;
            }
     });
    o9 = o8.slice();
    if(o8[5] != 4)
    {
       o5.o6("FAIL ary1[5] = ",o8[5]);
       o5.o6("src  Array: ",o8);
       o5.o6("dest Array: ",o9);
    }
}
o0();
o7();
