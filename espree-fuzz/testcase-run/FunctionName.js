//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test function names showed in stack trace.
//

function o0(o1) {
    try {
if (this.o2) {
        try {
o2.o3(o1);
}catch(e){}
    } else {
        try {
o4(o1);
}catch(e){}
    }
}catch(e){}
}

try {
if (this.o2 && this.o2.o5) {
    try {
this.o2.o5("TrimStackTracePath.js");
}catch(e){}
}
}catch(e){}

try {
try {
    var o6 = function() {
        try {
throw new Error("My Error!");
}catch(e){}
    };

    function o7(){
        try {
o6();
}catch(e){}
    }

    var o8 = new Function("func();");

    function o9(){
        try {
(function(){
            try {
eval("constructed();");
}catch(e){}
        })();
}catch(e){}
    }

    try {
o9();
}catch(e){}

} catch(o10) {
    try {
o0(o11(o10.o12));
}catch(e){}
}
}catch(e){}
