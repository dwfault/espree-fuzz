var o0 = false;

// str concat generates op_to_primitive.
function o1() {
    if (o0) {
        return Symbol('Cocoa');
    }
    return 'Cocoa';
}
noInline(o1);

function o4() {
    var value = o1();
    return value + "Cappuccino" + value;
}
noInline(o4);

for (var o6 = 0; o6 < 10000; ++o6) {
    var o7 = o4();
    if (o7 !== "CocoaCappuccinoCocoa")
        throw "Error: bad result: " + o7;
}

o0 = true;

var o6;
try {
    o3 = o5;
    o4();
} catch (o9) {
    o8 = o9;
}

if (String(o8) !== "TypeError: Cannot convert a symbol to a string")
    throw "Error: didn't throw or threw wrong exception: " + o8;
