//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// - 'a = 1' makes 'a' only available as an int32
// - 'b = a' makes 'b' only available as an int32
// - The use of 'b' in 'b.length' gets copy-propped with 'a', and so it needs to unspecialize 'a'
try {
(function () {
    var o3 = eval(o2);
    try {
for(var o1 = 0; o1 < 1; o421++) {
        var o39 = o0;
        try {
o2.length = 1;
}catch(e){}
        try {
o10.o11 = 1;
}catch(e){}
    }
}catch(e){}
})(o9.o10);
}catch(e){}
