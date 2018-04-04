//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//only flag needed -ForceArrayBTree
function o0()
{
    var o1 = [];
    var o2 = {};
    var o3 = Array();
    o3[5] = 1;
    var o5 = 0;
    do {
        o5++;
        Object.defineProperty(o2, '5', {
            get: function () {
                o1.push('getter');
                o10.o11("Inside getter FAILED");
                return 5;
            },configurable: true
        });
        o3[10] = 1;
        o3.slice();
        o2 = Object.prototype;
    } while (o5 < 2);
    delete o2['5'];
    delete Object.prototype['5'];
}

function o15()
{
    var Debug = true;
    var o17 = new Array(10);
    Object.defineProperty(Object.prototype, '5', {
            get: function () {
                if(Debug) o10.o11("Inside getter Object 1");
                return 3;
            }
     });
    Object.defineProperty(Array.prototype, '5', {
            get: function () {
                if(Debug) o10.o11("Inside getter Array 1");
                return 4;
            }
     });
    o18 = o17.slice();
    if(o17[5] != 4)
    {
       o10.o11("FAIL ary1[5] = ",o17[5]);
       o10.o11("src  Array: ",o17);
       o10.o11("dest Array: ",o18);
    }
}
o0();
o15();
