function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5)
{
    return o5 >= 0xDC00 && o5 <= 0xDFFF;
}

function o6(o5)
{
    return o5 >= 0xD800 && o5 <= 0xDBFF;
}

function o7(o5)
{
    return o4(o5) || o6(o5);
}

for (var o8 = 256; o8 < 0xffff; ++o8) {
    if (o7(o8))
        continue;
    var o9 = String.fromCharCode(o8);
    o0(decodeURIComponent(encodeURIComponent(o9)), o9);
    o0(decodeURI(encodeURI(o9)), o9);
    o0(unescape(escape(o9)), o9);
}
