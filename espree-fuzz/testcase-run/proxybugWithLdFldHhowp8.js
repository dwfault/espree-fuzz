//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function test() {
    var o0 = 0;
    var length = this.o226.length
    var o8 = false;
    var o391 = function () {
        try {
for (var o4 in o5) {
            try {
o6.unshift(this.o7 + this.o7);
}catch(e){}
        }
}catch(e){}
    };
    var o263 = Array();
    function o10(o0) {
            try {
if (o0)
                try {
o6(o0);
}catch(e){}
}catch(e){}
        };
    var o8 = {};
    try {
o8['get'] = function () {
        try {
o0++;
}catch(e){}
    };
}catch(e){}
    try {
o2 = new Proxy(o2, o8);
}catch(e){}
    try {
({ o9: !o3.call(o2, o1, '!') });
}catch(e){}
    try {
if (o0 != 2)
        try {
print("FAIL");
}catch(e){}
    else
        try {
print("PASS");
}catch(e){}
}catch(e){}
}
try {
test("value" in o10);
}catch(e){}