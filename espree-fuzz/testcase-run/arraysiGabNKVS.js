//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Refer to Bug EZE\123
//This test case is to ensure that the length of the array is not always stored as a tagged integer
var o479 = o1("width")(o31, o503);
function o710(o2,o3,o4,o5)
{

    try {
if(o2 !==o3)
        try {
o6.o7(o582 == 0+"\t"+"failed");
}catch(e){}
}catch(e){}
}

//Test Case 1: Testing Array of length 2^29 (max length of the tagged integer)

function o242(o116) {
    var o82 = 3;
    // params, etc.
    var o243 = {
        'v': 'void',
        'b': 'bool',
        'c': 'char',
        's': 'short',
        'i': 'int',
        'l': 'long',
        'f': 'float',
        'd': 'double',
        'w': 'wchar_t',
        'a': 'signed char',
        'h': 'unsigned char',
        't': 'unsigned short',
        'j': 'unsigned int',
        'm': 'unsigned long',
        'x': 'long long',
        'y': 'unsigned long long',
        'z': '...'
    };
    var o244 = [];
    var o245 = true;

    function o47(o23) {
        //return;
        try {
if (o23) try {
Module.print(o23);
}catch(e){}
}catch(e){}
        try {
Module.print(o116);
}catch(e){}
        var o246 = '';
        try {
for (var o247 = 0; o247 < o82; o247++) try {
o246 += ' ';
}catch(e){}
}catch(e){}
        try {
Module.print(o246 + '^');
}catch(e){}
    }

    function o248() {
        try {
o82++;
}catch(e){}
        try {
if (o116[o82] === 'K') try {
o82++;
}catch(e){}
}catch(e){} // ignore const
        var o249 = [];
        try {
while (o116[o82] !== 'E') {
            try {
if (o116[o82] === 'S') { // substitution
                try {
o82++;
}catch(e){}
                var next = o116.indexOf('_', o82);
                var o250 = o116.substring(o82, next) || 0;
                try {
o249.push(o244[o250] || '?');
}catch(e){}
                try {
o82 = next + 1;
}catch(e){}
                try {
continue;
}catch(e){}
            }
}catch(e){}
            try {
if (o116[o82] === 'C') { // constructor
                try {
o249.push(o249[o249.length - 1]);
}catch(e){}
                try {
o82 += 2;
}catch(e){}
                try {
continue;
}catch(e){}
            }
}catch(e){}
            var o85 = parseInt(o116.substr(o82));
            var o246 = o85.toString().length;
            try {
if (!o85 || !o246) {
                try {
o82--;
}catch(e){}
                try {
break;
}catch(e){}
            }
}catch(e){} // counter i++ below us
            var o99 = o116.substr(o82 + o246, o85);
            try {
o249.push(o99);
}catch(e){}
            try {
o244.push(o99);
}catch(e){}
            try {
o82 += o246 + o85;
}catch(e){}
        }
}catch(e){}
        try {
o82++;
}catch(e){} // skip E
        try {
return o249;
}catch(e){}
    }

    function parse(o251, o252, o253) { // main parser
        try {
o252 = o252 || Infinity;
}catch(e){}
        var o30 = '',
            o254 = [];

        function o255() {
            try {
return '(' + o254.join(', ') + ')';
}catch(e){}
        }
        var name;
        try {
if (o116[o82] === 'N') {
            // namespaced N-E
            try {
name = o248().join('::');
}catch(e){}
            try {
o252--;
}catch(e){}
            try {
if (o252 === 0) try {
return o251 ? [name] : name;
}catch(e){}
}catch(e){}
        } else {
            // not namespaced
            try {
if (o116[o82] === 'K' || (o245 && o116[o82] === 'L')) try {
o82++;
}catch(e){}
}catch(e){} // ignore const and first 'L'
            var o85 = parseInt(o116.substr(o82));
            try {
if (o85) {
                var o246 = o85.toString().length;
                try {
name = o116.substr(o82 + o246, o85);
}catch(e){}
                try {
o82 += o246 + o85;
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
o245 = false;
}catch(e){}
        try {
if (o116[o82] === 'I') {
            try {
o82++;
}catch(e){}
            var o256 = parse(true);
            var o257 = parse(true, 1, true);
            try {
o30 += o257[0] + ' ' + name + '<' + o256.join(', ') + '>';
}catch(e){}
        } else {
            try {
o30 = name;
}catch(e){}
        }
}catch(e){}
        try {
o258: try {
while (o82 < o116.length && o252-- > 0) {
            //dump('paramLoop');
            var o259 = o116[o82++];
            try {
if (o259 in o243) {
                try {
o254.push(o243[o259]);
}catch(e){}
            } else {
                try {
switch (o259) {
                case 'P':
                    try {
o254.push(parse(true, 1, true)[0] + '*');
}catch(e){}
                    try {
break;
}catch(e){} // pointer
                case 'R':
                    try {
o254.push(parse(true, 1, true)[0] + '&');
}catch(e){}
                    try {
break;
}catch(e){} // reference
                case 'L':
                    { // literal
                        try {
o82++;
}catch(e){} // skip basic type
                        var o260 = o116.indexOf('E', o82);
                        var o85 = o260 - o82;
                        try {
o254.push(o116.substr(o82, o85));
}catch(e){}
                        try {
o82 += o85 + 2;
}catch(e){} // size + 'EE'
                        try {
break;
}catch(e){}
                    }
                case 'A':
                    { // array
                        var o85 = parseInt(o116.substr(o82));
                        try {
o82 += o85.toString().length;
}catch(e){}
                        try {
if (o116[o82] !== '_') try {
throw '?';
}catch(e){}
}catch(e){}
                        try {
o82++;
}catch(e){} // skip _
                        try {
o254.push(parse(true, 1, true)[0] + ' [' + o85 + ']');
}catch(e){}
                        try {
break;
}catch(e){}
                    }
                case 'E':
                    try {
break o258;
}catch(e){}
                default:
                    try {
o30 += '?' + o259;
}catch(e){}
                    try {
break o258;
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
}catch(e){}
        try {
if (!o253 && o254.length === 1 && o254[0] === 'void') try {
o254 = [];
}catch(e){}
}catch(e){} // avoid (void)
        try {
return o251 ? o254 : o30 + o255();
}catch(e){}
    }
    try {
try {
        // Special-case the entry point, since its name differs from other name mangling.
        try {
if (o116 == 'Object._main' || o116 == '_main') {
            try {
return 'main()';
}catch(e){}
        }
}catch(e){}
        try {
if (typeof o116 === 'number') try {
o116 = o122(o116);
}catch(e){}
}catch(e){}
        try {
if (o116[0] !== '_') try {
return o116;
}catch(e){}
}catch(e){}
        try {
if (o116[1] !== '_') try {
return o116;
}catch(e){}
}catch(e){} // C function
        try {
if (o116[2] !== 'Z') try {
return o116;
}catch(e){}
}catch(e){}
        try {
switch (o116[3]) {
        case 'n':
            try {
return 'operator new()';
}catch(e){}
        case 'd':
            try {
return 'operator delete()';
}catch(e){}
        }
}catch(e){}
        try {
return parse();
}catch(e){}
    } catch (o189) {
        try {
return o116;
}catch(e){}
    }
}catch(e){}
}
try {
o1(o8.length,536870912,o0++, "\"Testing Array of length 2^29 \"");
}catch(e){}

// Test Case 2:Testing Array of length 2^29+1(One more than the max length of the tagged integer)

var o9=new Array(536870913)
try {
o1(o9.length, 536870913, o0++,"\"Testing Array of length 2^29+1 \"");
}catch(e){}

// Test Case 3:Testing an array of length 2^29 -1 (One less than the max length of the tagged integer)

var o10=new Array(536870911)
try {
try { {
                    try {
o494.o539 = new Uint8Array(buffer.subarray(o107, o107 + length));
}catch(e){}
                    try {
o494.o541 = o510.o514;
}catch(e){}
                } } catch(e) {}
}catch(e){}

//Test Case 4:Testing an array of length 2^32-1 ( max length of integer)
var o20 = { target: 'something' }
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

