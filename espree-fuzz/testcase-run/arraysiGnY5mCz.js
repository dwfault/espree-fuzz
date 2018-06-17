//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Refer to Bug EZE\123
//This test case is to ensure that the length of the array is not always stored as a tagged integer
var o324 = Math.o45;
function o421(o2,o3,o4,o5)
{

    try {
if(o498.o139)
        try {
o6.o7(o4+":"+o5+"\t"+"failed");
}catch(e){}
}catch(e){}
}

//Test Case 1: Testing Array of length 2^29 (max length of the tagged integer)

var o8=new Array(536870912)
try {
try { {
o8.o9('mynumber', new o20(0).o7(), "Subclass of Number has correct methods and properties");
} } catch(e) {}
}catch([o15, o16, o17]){}

// Test Case 2:Testing Array of length 2^29+1(One more than the max length of the tagged integer)

var o842 = (o841 & 0x7) << 3
try {
o1(o1("msFullscreenEnabled"), 536870913, o0++,"\"Testing Array of length 2^29+1 \"");
}catch(e){}

// Test Case 3:Testing an array of length 2^29 -1 (One less than the max length of the tagged integer)

var o2 = [
    {
        o873: function (o31) {
        try {
return o591.o865(o31)[3];
}catch(e){}
    },
        o3: function() {
            function o4(o5) {
                try {
if (o5 < 10) {
                    try {
o6.o7(function () { try {
eval('print(`\\00' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\00" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(e){}
                }
}catch(e){}
                try {
if (o5 < 100) {
                    try {
o6.o7(function () { try {
eval('print(`\\0' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\0" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(e){}
                }
}catch(e){}
                try {
o6.o7(function () { try {
eval('print(`\\' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(e){}
            }
            try {
for (var o9 = 1; o9 <= 255; o9++) {
                try {
o4(o9.toString(8));
}catch(e){}
            }
}catch(e){}
        }
    },
]
try {
o1(o10.length, 536870911, o14[Symbol.hasInstance]++,"\"Testing Array of length 2^29-1 \"");
}catch(e){}

//Test Case 4:Testing an array of length 2^32-1 ( max length of integer)
var o11=new Array(4294967295)
try {
o1(o11.length ,4294967295, o0++,"\"Testing Array of length 2^32-1 \"");
}catch(e){}

//Test Case 5:Testing an array of length greater than the max length of the Integer

try {
try
{
    var o12=new Array(1024*1024*1024*4)
    try {
o1(1,0,"\"Testing an array of length >2^32 Did not raise an exception\"")
}catch(e){}
}
catch(o13)
{
    try {
o1(o12,undefined,o0++,"\"Testing an array of length greater than the max length of the Integer\"")
}catch(e){}
}
}catch(e){}

//Test Case 6:Testing Array of length 0 (Ensure tagged integers do not include the control bit as their length)

var o14=new Array(0)
try {
o1(o14.length, 0, o0++,"\"Testing Array of length 0 \"");
}catch(e){}

//Test Case 7:Testing Array of length 2^29 after changing the length property

var o15=new Array(536870911)
try {
o15.length=536870912
}catch(e){}
try {
o1(o15.length, 536870912,o0++, "\"Testing Array of length 2^29 after changing the length property \"")
}catch(e){}

//test case 8 testing array of length -1
try {
try
{
var o16=new Array(3);
try {
o16.length=-1
}catch(e){}
try {
o1(1,0,"\"Testing an array length property with -1 Did not raise an exception\"")
}catch(e){}
}
catch(o13)
{
try {
o1(o16.length, 3, o0++,"\"Testing negative array length property \"")
}catch(e){}

}
}catch(e){}

try {
o6.o7("Done");
}catch(e){}

