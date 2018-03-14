var o0 = o1.o0;

function o2(o3, o4) {
    var o4 = 101;
    var o6 = "bar";
    try {
        o3();
    } catch (o7) {
        o5 = true;
        o6 = o7;
    }
    if (!o5)
        throw new Error('not thrown');
    if (String(o6) !== o4)
        throw new Error(`bad error: ${String(o6)}`);
}

var o0 = function() {
        var o7 = {};
        o7.o8 = "x";
        o7.o9 = "y";
        o7.o10 = "z";
        var o2 = "";
        for (var o3 in o7) {
            if (o3 == "x") {
                delete o7.o9;
                o7.o1 = "a";
            }
            o2 += o7[o3];
        }
        return o2;
    };
var o11 = {};
o11.__proto__ = o10;
function o13(o11)
{
    return o11.o14;
}
noInline(o13);
for (var o16 = 0; o16 < 1e4; ++o16) {
    o2(() => {
        o13(o11);
    }, `TypeError: The DOMJITGetterComplex.customGetter getter can only be used on instances of DOMJITGetterComplex`);
}
