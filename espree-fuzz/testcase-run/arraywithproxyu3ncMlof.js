//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o837 = o1039;

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
};

try {
print('concat test#1');
}catch(fill){}
try {
o0.concat();
}catch(e){}
try {
print('concat test#2');
}catch(e){}
try {
o2.concat('a','b','c');
}catch(e){}
try {
print('unshift  test');
}catch(e){}
try {
o0.unshift();
}catch(e){}
try {
print('splice test');
}catch(e){}
try {
o2.splice(0,0.0,9,4);
}catch(e){}

