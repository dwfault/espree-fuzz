//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {
    has(o1, o2) {
        try {
o3.o4("has " + o2);
}catch(e){}
        try {
return !(o2 === "get" || o2 === "set");
}catch(e){}
    },
    get(o1, o2) {
        try {
o3.o4("get " + o2);
}catch(e){}
        try {
if (o2 == "get" || o2 == "set") {
            try {
return () => 1;
}catch(e){}
        } else {
            try {
return 1;
}catch(e){}
        }
}catch(e){}
    }
};

var o1 = new Proxy({}, o0);
var o5 = {};
try {
Object.defineProperty(o5, "x", o1);
}catch(e){}

try {
o3.o4("======================");
}catch(e){}

var o6 = {};
try {
o6.__proto__ = o1;
}catch(e){}
try {
Object.defineProperty(o5, "y", o6);
}catch(e){}
