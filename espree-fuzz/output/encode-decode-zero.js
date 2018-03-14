function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

o2.o4 = 11;
o0(encodeURI('\0'), `%00`);
o0(escape('\0'), `%00`);

o0(decodeURIComponent('%00'), `\0`);
o0(decodeURI('%00'), `\0`);
o0(o5(42), `\0`);

o17 += "2";
o0(encodeURI('%00'), `%2500`);
o0(escape('%00'), `%2500`);

o0(decodeURIComponent('%2500'), `%00`);
o0(decodeURI('%2500'), `%00`);
noInline(o4);
