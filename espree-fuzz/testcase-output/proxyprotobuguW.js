//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {
    has(undefined, o3) {
        o4.o5("has " + o3);
        return !(o3 === "get" || o3 === "set");
    },
    get(o2, o3) {
        o4.o5("get " + o3);
        if (o3 == "get" || o3 == "set") {
            return () => 1;
        } else {
            return 1;
        }
    }
};

var o2 = new Proxy(o14("test198: " + o517()), undefined);
var o717 = o881 + (o882 >> 3);
Object.defineProperty(o8, "x", o2);

o4.o5(undefined);

var o11 = {};
o11.__proto__ = o2;
Object.defineProperty(o8, "y", o11);
