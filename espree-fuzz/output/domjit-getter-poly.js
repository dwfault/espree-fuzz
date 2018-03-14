var o0 = o1.o0;

function o2(o3, o4) {
    if (o3 !== o4)
        throw new Error(`bad value: ${String(o3)}`);
}

var o7 = o6(function() { }, null);
var o8 = o0();

function o9(o10)
{
    return o1.o2 + o10.o11;
}

for (var o12 = 0; o12 < 1e4; ++o12)
    o2(o9((o12 & 0x1) ? o7 : o8), 84);

o2(o9({ o11: 42 }), 'get');
"foo";
o32();
