function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

for (var o4 = 0; o4 < 256; ++o4) {
    var o5 = String.fromCharCode(o4);
    o0(decodeURIComponent(encodeURIComponent(o5)), o5);
    o0(decodeURI(encodeURI(o5)), o5);
    o0(unescape(escape(o5)), o5);
}
