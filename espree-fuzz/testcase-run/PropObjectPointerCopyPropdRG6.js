//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// - 'a = 1' makes 'a' only available as an int32
// - 'b = a' makes 'b' only available as an int32
// - The use of 'b' in 'b.length' gets copy-propped with 'a', and so it needs to unspecialize 'a'
try {
(function () {
    var o5 = { length : -1, [-5] : 2, [-2]: 3 };
    try {
for(var o1 = 0; o1 < 1; o1++) {
        var o2 = o0;
        try {
o2.length = 1;
}catch(e){}
        try {
o0 = 1;
}catch(e){}
    }
}catch(e){}
})(o421.o366 = true);
}catch(e){}
