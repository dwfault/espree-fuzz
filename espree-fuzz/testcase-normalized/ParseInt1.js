//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Parse Int Test cases
var o0=0;
function o1(o2,o3,o0,o4)
{
    if(isNaN(o2) && isNaN(o3))
    {
        return;
    }
    if(o2 !==o3)
            o6.o7(o0+":"+o4+"\t"+"failed Actual:" + o2 + " Excpected:" + o3);
}

//White space at the begining

o1(parseInt("     123",10),123,o0++,"\"Testing WhiteSpace at the begining of the string\"")

//Escape characters at the begining

o1(parseInt("\t\n\f\r123",10),123,o0++,"\"Testing WhiteSpace with escape at the begining of the string\"")

// only white spaces

o1(parseInt("\t\n\f\r",10), NaN,o0++,"\"Only whitespaces\"")

// embedded null
o1(parseInt("32\032",10), 32,o0++,"\"Embedded null\"")

//White Spaces in the End

o1(parseInt("123     ",10),123,o0++,"\"Testing WhiteSpace at the End of the string\"")

//Escape characters at the end

o1(parseInt("123\t\n\f\r",10),123,o0++,"\"Testing WhiteSpace with escape at the end of the string\"")

//Space in between Strings

o1(parseInt("12  3",10),12,o0++,"\"Testing WhiteSpace in between strings\"")

//Escape Characters in between Strings

o1(parseInt("12\n\t\r\f3",10),12,o0++,"\"Testing Escape Characters in between of the strings\"")

//Default Radix Testing: Null

o1(parseInt("123",null),123,o0++,"\"Default Radix Null\"")

//Default Radix Testing: NaN

o1(parseInt("123",NaN),123,o0++,"\"Default Radix NaN\"")

//Default Radix Testing: Undefined

o1(parseInt("123",undefined),123,o0++,"\"Default Radix Undefined\"")

//Default Radix Testing: 0

o1(parseInt("123",0),123,o0++,"\"Default Radix 0\"")

//Default Radix Testing with 0X String :Basic

o1(parseInt("0x19",16),25,o0++,"\"Default Radix With 0x String: Basic\"")

//Default Radix Testing With 0x String: Null

o1(parseInt("0xFF",null),255,o0++,"\"Default Radix With 0x String: Null\"")

//Default Radix Testing With 0x: NaN

o1(parseInt("0xFF",NaN),255,o0++,"\"Default Radix With 0x String:NaN\"")

//Default Radix Testing With 0x: Undefined

o1(parseInt("0xFF",undefined),255,o0++,"\"Default Radix With 0x String: undefined\"")

//Default Radix Testing With 0x: 0

o1(parseInt("0xFF",0),255,o0++,"\"Default Radix With 0x String: 0\"")

//Default Radix Testing With 0X String: Null

o1(parseInt("0XFF",null),255,o0++,"\"Default Radix With 0X String: Null\"")

//Default Radix Testing With 0X: NaN

o1(parseInt("0XFF",NaN),255,o0++,"\"Default Radix With 0X String:NaN\"")

//Default Radix Testing With 0X: Undefined

o1(parseInt("0XFF",undefined),255,o0++,"\"Default Radix With 0X String: undefined\"")

//Default Radix Testing With 0X: 0

o1(parseInt("0XFF",0),255,o0++,"\"Default Radix With 0X String: 0\"")

//Default Radix Negative Testing: Out of bound Strings: Null

var o11=parseInt("A123",null)

o1(isNaN(o11),true,o0++,"\"Default Radix:null  Negative Testing Null\"")

//Default Radix Negative Testing : Out of bound Strings: NaN

var o11=parseInt("A123",NaN)

o1(isNaN(o11),true,o0++,"\"Default Radix Negative Testing NaN\"")

//Default Radix Negative Testing : Out of bound Strings: undefined

var o11=parseInt("A123",undefined)

o1(isNaN(o11),true,o0++,"\"Default Radix Negative Testing undefined\"")

//Default Radix Negative Testing : Out of bound Strings: 0

var o11=parseInt("A123",0)

o1(isNaN(o11),true,o0++,"\"Default Radix Negative Testing 0\"")

//Default Radix Negative Testing: Out of bound Strings with 0x: Null

var o11=parseInt("0xG123",null)

o1(isNaN(o11),true,o0++,"\"Default Radix with 0x String  Negative Testing Null\"")

//Default Radix Negative Testing: Out of bound Strings with 0x: NaN

var o11=parseInt("0xG123",NaN)

o1(isNaN(o11),true,o0++,"\"Default Radix with 0x String  Negative Testing NaN\"")

//Default Radix Negative Testing: Out of bound Strings with 0x: undefined

var o11=parseInt("0xG123",undefined)

o1(isNaN(o11),true,o0++,"\"Default Radix with 0x String  Negative Testing undefined\"")

//Default Radix Negative Testing: Out of bound Strings with 0x: 0

var o11=parseInt("0xG123",0)

o1(isNaN(o11),true,o0++,"\"Default Radix with 0x String  Negative Testing 0\"")

//Default Radix Negative Testing: Out of bound Strings with 0X: Null

var o11=parseInt("0XG123",null)

o1(isNaN(o11),true,o0++,"\"Default Radix with 0X String  Negative Testing Null\"")

//Default Radix Negative Testing: Out of bound Strings with 0X: NaN

var o11=parseInt("0XG123",NaN)

o1(isNaN(o11),true,o0++,"\"Default Radix with 0X String  Negative Testing NaN\"")

//Default Radix Negative Testing: Out of bound Strings with 0X: undefined

var o11=parseInt("0XG123",undefined)

o1(isNaN(o11),true,o0++,"\"Default Radix with 0X String  Negative Testing undefined\"")

//Default Radix Negative Testing: Out of bound Strings with 0X: 0

var o11=parseInt("0XG123",0)

o1(isNaN(o11),true,o0++,"\"Default Radix with 0X String  Negative Testing 0\"")

//Radix Testing Limits: Lower Limit 2

o1(parseInt("101",2),5,o0++,"\"Radix Testing Limits: Lower Limit 2\"");

//Radix Testing Limits: upper limit 36

o1(parseInt("aAzZ",36),480815,o0++,"\"Radix Testing Limits: Upper Limit 36\"");

//Radix Testing Limits:  +0

o1(parseInt("11",+0),11,o0++,"\"Radix Testing Limits: +0\"");

//Radix Testing Limits:  -0

o1(parseInt("11",-0),11,o0++,"\"Radix Testing Limits: -0\"");

//Radix Testing Limits:  -0.0

o1(parseInt("11",-0.0),11,o0++,"\"Radix Testing Limits: -0.0\"");

//Radix Testing Limits:  Infinity

o1(parseInt("11",Infinity),11,o0++,"\"Radix Testing Limits: Infinity\"");

//Radix Testing Limits: check for 1

var o11=parseInt("10",1)

o1(isNaN(o11),true,o0++,"\"Radix Testing Limits check for 1\"")

//Radix Testing Limits: check for -1

var o11=parseInt("10",-1)

o1(isNaN(o11),true,o0++,"\"Radix Testing Limits check for -1\"")

//Radix Testing Limits: check for 37

var o11=parseInt("10",37)

o1(isNaN(o11),true,o0++,"\"Radix Testing Limits check for 37\"")

//Radix Testing : Non Integer: String

o1(parseInt("11","+2"),3,o0++,"\"Radix Testing : Non Integer: String \"")

//Radix Testing : Non Integer : Boolean: true is replaced with a 1

var o11=parseInt("10",true)

o1(isNaN(o11),true,o0++,"\"Radix Testing : Non Integer : Boolean:true is replaced with a 1\"")

//Radix Testing : Non Integer : Boolean: false is replaced with a 0

o1(parseInt("11",false),11,o0++,"\"Radix Testing : Non Integer : Boolean: false is replaced with a 0 \"")

//Radix Testing : Output from a Constructor: Number

o1(parseInt("A",new Number(16)),10,o0++,"\"Radix testing: Constructor-Number \"");

//Radix Testing Output from a constructor : String

o1(parseInt("A",new String("16")),10,o0++,"\"Radix testing: Constructor-String \"");

//Radix Testing Output from a variable

var o15=36

o1(parseInt("aAzZ",o15.toString()),480815,o0++,"\"Radix testing: Variable \"");

//Radix Testing Function

function o17()
{
    return "35"
}

o1(parseInt("bY",o17()),419,o0++,"\"Radix testing:Function \"");

//String Testing : Null

o1(isNaN(parseInt("",10)),true,o0++,"\"String Testing :null\"");

//String Testing 2^32

o1(parseInt("4294967296",10),4294967296,o0++,"\"String Testing :2^32 \"");

//String Testing -2^32

o1(parseInt("-4294967296",10),-4294967296,o0++,"\"String Testing :2^32 \"");

o1(parseInt("999999999",10),999999999,o0++,"\"Large int :999999999 \"");

o1(parseInt("-FFFFFFFF",16),-0xFFFFFFFF,o0++,"\"Max Neg int (Base 16) :FFFFFFFF \"");

o1(parseInt("-0xFFFFFFFF",16),-0xFFFFFFFF,o0++,"\"Max Neg int (Base 16) :FFFFFFFF \"");

o1(parseInt("-0xABCDEF",16),-0xabcdef,o0++,"\"Base 16 number\"");

o1(parseInt("-0xabcdef",16),-0xabcdef,o0++,"\"Base 16 number\"");

o1(parseInt("abcdefghijklm",34), 24661871785383067000,o0++,"\" Base 34 number \"");

o1(parseInt("lmnXYZ",36), 1307858363,o0++,"\"Base 36 number - fast path \"");

o1(parseInt("lmnXYZabc",36), 61019439797496,o0++,"\"Base 36 number - slow path \"");
//String Testing : Unmatched numbers for the radix

o1(parseInt("AB",11),10,o0++,"\"String Testing: unmatched numbers for radix\"");

//String Testing :Expressions

o1(parseInt("A+5",11),10,o0++,"\"String Testing: Expressions\"");

//String Testing : floating point

o1(parseInt("5.67",10),5,o0++,"\"String Testing: Floating point numbers\"");

//String Testing : Octal Numbers

o1(parseInt("00789",008),7,o0++,"\"String Testing: Octal Numbers\"");

//Substring scenarios
var o18 = [
    { o19: "+0x32", o20: 0, length: 1, o22: NaN, o23: NaN },
    { o19: "+0x32", o20: 0, length: 1, o22: NaN, o23: NaN },
    { o19: "+0x32", o20: 0, length: 2, o22: 0, o23:0  },
    { o19: "+0x32", o20: 0, length: 3, o22: NaN, o23: 0 },
    { o19: "+0x32", o20: 0, length: 4, o22: 3, o23:0 }
    ];

for(var o24 =0; o24 < o18.length; o24++)
{
    var o25 = o18[o24];
    var substr = o25.o19.substring(o25.o20, o25.length);
    o1(parseInt(substr), o25.o22, o0++, "Substring testing base: implicit string:" + substr);
    o1(parseInt(substr, 10), o25.o23, o0++,  "Substring testing base: 10 string:" + substr);
    o1(parseInt(substr, 16), o25.o22, o0++, "Substring testing base: 16 string:" + substr);
}

o6.o7("Done")
