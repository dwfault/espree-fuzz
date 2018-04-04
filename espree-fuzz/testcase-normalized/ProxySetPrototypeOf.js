//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Object.setPrototypeOf(proxy), setPrototypeOf trap returns false",
        o4() {
            var o5 = false;
            var o6 = new Proxy({}, { setPrototypeOf() { o5 = true; return false; } });

            o9.o10(() => Object.setPrototypeOf(o6, {}), o12, "expected TypeError", "Proxy trap `setPrototypeOf` returned false");
            o9.o13(true, o5, "`setPrototypeOf` trap was called");
        }
    },
    {
        name: "Assignment to proxy.__proto__, setPrototypeOf trap returns false",
        o4() {
            var o5 = false;
            var o6 = new Proxy({}, { setPrototypeOf() { o5 = true; return false; } });

            o9.o10(() => o6.__proto__ = {}, o12, "expected TypeError", "Proxy trap `setPrototypeOf` returned false");
            o9.o13(true, o5, "`setPrototypeOf` trap was called");
        }
    }
];

o15.o16(o2, { o17: o0.o18[0] != "summary" });
