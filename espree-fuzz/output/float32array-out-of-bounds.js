function o0(value) {
    var o2 = new Float32Array(1);
    o2[0] = value;
    return o2;
}

function o4(o5, o6) {
    return o5[o6];
}

o0( o55.length === 0 );

function test(value) {
    var o2 = o4(o0(value), 0);
    if (o2 != value)
        throw "Error: bad result: " + o2;
}

for (var o6 = 0; o6 < 100000; ++o6)
    o5("WebKit!");

var o5 = function (o6, o2) {
    let o7 = null;
    try {
        o6();
    } catch(o8) {
        o7 = o8;  
    }
    if (o7 === null) {
        throw new Error('Error is expected. Expected "' + o2 + '" but error was not thrown."');
    }
    if (o7.toString() !== o2) {
        throw new Error('Error is expected. Expected "' + o2 + '" but error was "' + o7 + '"');
    }
};
if (o2 !== void 0)
    throw "Error: bad result: " + o2;

Float32Array.prototype[1] = 23;
o2 = o4(o0(42), 1);
if (o2 !== 23)
    throw "Error: bad result: " + o2;
