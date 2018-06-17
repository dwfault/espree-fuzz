//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [1, 2, 'asinh', 4, 5, +2097155, ((o421.o368) << 12) | ((o133 & 0x3F) << 6) | (o134 & 0x3F), NaN, 0, true, true , false]

try {
for(o1=o4.o11; o1 < e;o27.__proto__++)
{
   try {
((o4.o5(o20, "The then function was actually called") & 0x8000) >> 14) | ((o863 & 0x80) >> 7)(o0.indexOf(o1));
}catch(e){}
   try {
for(this; o4< 15;o4++)
   {
        try {
o2.o3(o0.indexOf(o0[o1],o4));
}catch(e){}
        try {
o2.o3(o52.indexOf(o1,o4));
}catch(e){}
   }
}catch(o675){}
}
}catch(o390){}

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
    };
try {
o5.prototype = Array.prototype;
}catch(e){}

function o1() {
  try {
for(var o2 = 0; o2 < o0.length; o2++){
    var o3 = o0[o2];
    try {
o3[0] = {};
}catch(e){}
  }
}catch(e){}
};

var o7 = new Object();
var o8 = new Object();

try {
o6[0] = "abc";
}catch(e){}
try {
o6[1] = "def";
}catch(e){}
try {
o6[2] = "efg";
}catch(e){}
try {
o6[3] = true;
}catch(e){}
try {
o6[4] = true;
}catch(e){}
try {
o6[5] = false;
}catch(e){}
try {
o6[6] = o8;
}catch(e){}
try {
o6[7] = o8;
}catch(e){}
try {
o6[8] = null;
}catch(e){}

try {
o6.length = 10;
}catch(e){}

try {
o2.o3(o6.indexOf("abc"));
}catch(e){}
try {
o2.o3(o6.indexOf("abc", 3));
}catch(e){}
try {
o2.o3(o6.indexOf("abc", 2));
}catch(e){}
try {
o2.o3(o6.indexOf("abc", -2));
}catch(e){}

try {
o2.o3(o6.indexOf("efg"));
}catch(e){}
try {
o2.o3(o6.indexOf("efg", 6));
}catch(e){}
try {
o2.o3(o6.indexOf("efg", 1));
}catch(e){}
try {
o2.o3(o6.indexOf("efg", -3));
}catch(e){}

try {
o2.o3(o6.indexOf("xyg"));
}catch(e){}
try {
o2.o3(o6.indexOf("esg", 2));
}catch(e){}
try {
o2.o3(o6.indexOf("eag", 2));
}catch(e){}
try {
o2.o3(o6.indexOf("", -2));
}catch(e){}

try {
o2.o3(o6.indexOf(true));
}catch(e){}
try {
o2.o3(o6.indexOf(false));
}catch(e){}
try {
o2.o3(o6.indexOf(new Boolean(true)));
}catch(e){}

try {
o2.o3(o6.indexOf(o8 , 6));
}catch(e){}
try {
o2.o3(o6.indexOf(o8 , 1));
}catch(e){}
try {
o2.o3(o6.indexOf(o8 ));
}catch(e){}
try {
o2.o3(o6.indexOf(o5));
}catch(e){}

try {
o2.o3(o6.indexOf(null));
}catch(e){}


try {
o2.o3(o6.indexOf());
}catch(e){}

//implicit calls
var o8 ;
var o9 = [10];
try {
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){try {
o8 = true;
}catch(e){} try {
return 30;
}catch(e){}}});
}catch(e){}
try {
o8 = false;
}catch(e){}
try {
o9.length = 6;
}catch(e){}
var o10 = o9.indexOf(30);
try {
o2.o3(o8);
}catch(e){}

//Float array with gaps
var o11 = new Array(5.5, 5.6);
try {
o11[6] =  5.6;
}catch(e){}
try {
o2.o3(o11.indexOf(5.7));
}catch(e){}

// Cases where we do/don't have to resume after failing to find the value in the head segment.
// Run with -forcearraybtree to really stress these.
var o12 = [0, 1];
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
Array.prototype[2] = 'foo';
}catch(e){}
try {
o2.o3(o12.indexOf('foo'));
}catch(e){}
try {
o12[5] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf('foo'));
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}

try {
o12 = [0, 1.1];
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
Array.prototype[2] = 'bar';
}catch(e){}
try {
o2.o3(o12.indexOf('bar'));
}catch(e){}
try {
o12[5] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
o2.o3(o12.indexOf('bar'));
}catch(e){}

try {
o12 = [0, 'test'];
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
Array.prototype[2] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
o12[5] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
delete Array.prototype[2]
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
