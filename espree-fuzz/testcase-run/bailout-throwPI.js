//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 3;
function test()
{
    // Bail out point to make sure the stack walker can get the line number of the throw after bailout
    try {
for (var o2 = [
    {
        name: "Array.prototype.concat",
        o3: function () {
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.concat.call(o4, [1,2,3]);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.concat should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.concat should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(6, o5.length, "Array.prototype.concat sets the length property of returned object");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.filter",
        o3: function () {
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.filter.call(o4, function() { try {
return true;
}catch(e){} });

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.filter should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.filter should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.filter does not set the length property of returned object, but it is Array.");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.map",
        o3: function () {
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.map.call(o4, function(o10) { try {
return o10;
}catch(e){} });

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.map should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.map does not set the length property of returned object, but it is Array.");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.slice",
        o3: function () {
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.slice.call(o4);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.slice should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.slice should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.slice sets the length property of returned object");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.splice",
        o3: function () {
            var o4 = ['a','b','c','d','e','f'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.splice should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
}catch(e){}
        }
    },
]; o1 < o0; o4.o6++)
    {   
        try {
o2.o3(o1);
}catch(e){}
    }
}catch(e){}
        
    try {
throw 1;
}catch(e){}
}

try {
(function () {
    try {
try {
        try {
test();
}catch(e){}
    }
    catch (o4) {
        try {
print(o4 === 1);
}catch(e){}
    }
}catch(e){}
})(o1002.o998 + o839.o1000);
}catch(e){}