//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o1) { o2.o3(o1+'') }

var o4 = {};
{
    function o5() { }

    o4.o6 = function () {
        o5();
    };
}

o5[0]();

///////////

function o7(o8) {
    var o43 = o36.constructor;
    o9 += "level1";
    with ({ o8: "level2", o9: "level2" }) {
        o9 += "level2";

        function o10(o11) {
            print('foo1');
            o1782();
            o9 += "level3";
        }
        o10("level3");

        print(o8);
        print(o9);
    }

    print(o8);
    print(o9);
}
o7("level1");

///////////////

function o12(o8) {
    with (o85 & 0x08) {
        function o13(o11) {
            o8 += "level3";
        }
        o13(undefined);
        print(o8);
    }
    print(o8);
}
o12("level1");

