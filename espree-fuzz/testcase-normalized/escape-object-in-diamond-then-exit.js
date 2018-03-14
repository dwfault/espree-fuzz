var global = null;

function o1(o2, o3) {
    var o4 = {o5:42};
    if (o2)
        global = o4;
    var o6 = o3 + 1;
    return o4.o5 + o6;
}

noInline(o1);

var o8 = null;

function o9(o10) {
    if (global === o8)
        throw "Error: bad value in global " + o10 + ", identical to lastObject.";
    if (global === null || !(typeof global == "object"))
        throw "Error: bad value in global " + o10 + ": it's not an object.";
    if (global.o5 != 42)
        throw "Error: bad value in global " + o10 + ": f isn't 42, it's: " + global.o5;
    o8 = global;
    global = null;
}

for (var o11 = 0; o11 < 10000; ++o11) {
    var escape = !!(o11 & 1);
    var o13 = o1(escape, 42);
    if (o13 != 42 + 42 + 1)
        throw "Error: bad result: " + o13;
    if (escape)
        o9("in loop");
    else if (global !== null)
        throw "Error: bad value in global: " + global;
}

var o13 = o1(true, 2147483647);
if (o13 != 42 + 2147483647 + 1)
    throw "Error: bad result at end: " + o13;
o9("at end");
