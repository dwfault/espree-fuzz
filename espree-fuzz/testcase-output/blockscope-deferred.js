//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o0) { o1.o2(o0+'') }

var o3 = {};
{
    function o4() { }

    o3.o5 = function () {
        o4();
    };
}

o3.o5();

///////////

function o6(o7) {
    var o8 = "level1";
    o8 += "level1";
    with ({ o7: "level2", o8: "level2" }) {
        o8 += "level2";

        function o9(o10) {
            print('foo1');
            o7 += "level3";
            o8 += "level3";
        }
        o9("level3");

        print(o7);
        print(o8);
    }

    print(o7);
    print(o8);
}
o6("level1");

///////////////

function o11(o7) {
    with ({ o7: "level2" }) {
        function o12(o10) {
            o7 += "level3";
        }
        o12("level3");
        print(o7);
    }
    print(o7);
}
o11("level1");

