function o0(o1) {
    if (o2.dfgTrue())
        o1 = o4;
    return o1().o1;
}

noInline(o0);

var o6;
function o4() {
    return o6;
}

function o7() { return {o1:42}; };

o6 = {o1:42};
for (var o8 = 0; o8 < 1000; ++o8)
    o0((o8 & 1) ? o4 : o7);

o6 = {o8: "return", o9: [o1, o5, o3, o4]};
var o10 = o0(o4);
if (o10 != 2)
    throw "Error: bad result: " + o10;

