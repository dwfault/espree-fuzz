//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {
    has(o1, o2) {
        o3.o4("has " + o2);
        return !(o2 === "get" || o2 === "set");
    },
    get(o1, o2) {
        o3.o4("get " + o2);
        if (o2 == "get" || o2 == "set") {
            return () => 1;
        } else {
            return 1;
        }
    }
};

var o1 = new Proxy({}, o0);
var o5 = {};
Object.defineProperty(o5, "x", o1);

o3.o4("======================");

var o6 = {};
o6.__proto__ = o1;
Object.defineProperty(o5, "y", o6);
