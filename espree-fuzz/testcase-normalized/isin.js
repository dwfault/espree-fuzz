//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o1) { o2.o3(o1) }

// Verify that side-effects happen in the right order w.r.t. evaluation of operands.
(function () {
    //CHECK#1 
    var o4 = 0;
    if ((o4 = Number, "MAX_VALUE") in o4 !== true) {
        print('#1: var NUMBER = 0; (NUMBER = Number, "MAX_VALUE") in NUMBER === true');
    }

    //CHECK#2
    var o6 = "MAX_VALUE";
    if (o6 in (o6 = "none", Number) !== true) {
        print('#2: var max_value = "MAX_VALUE"; max_value in (max_value = "none", Number) === true');
    }
})();

print('Passed');
