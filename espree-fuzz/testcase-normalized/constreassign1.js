//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

const o0 = 1;

with({o0:2}) {
    o0++;
    print(o0);  // 3
}

try {
    with({o2:2}) {
        o0++;
        print(o0);
    }
}
catch(o3) {
    print(o3);  // TypeError: Assignment to const
}

let o4 = new Function(
    "with({a:2}) {" + 
    "    a++;" +
    "    print(a);" +
    "}");

o4();   // 3

let o6 = new Function(
    "with({b:2}) {" + 
    "    a++;" +
    "    print(a);" +
    "}");

try {
    o6();
}
catch(o3) {
    print(o3);  // TypeError: Assignment to const
}

try {
    eval('let b = 3');
    o0++;
    print(o0);
}
catch(o3) {
    print(o3);  // TypeError: Assignment to const
}

(function() {
    const o0 = 1;
    with({o0:2}) {
        o0++;
        print(o0);  // 3
    }

    try {
        with({o2:2}) {
            o0++;
            print(o0);
        }
    }
    catch(o3) {
        print(o3);  // TypeError: Assignment to const
    }

    try {
        eval('let b = 3');
        o0++;
        print(o0);
    }
    catch(o3) {
        print(o3);  // TypeError: Assignment to const
    }
})();

function print(o8) { o9.o10(o8) }

