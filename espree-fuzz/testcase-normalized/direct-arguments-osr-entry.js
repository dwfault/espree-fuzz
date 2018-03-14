// This tests that arguments elimination works with OSR entry.
// We need to have an inner call so that arguments elimination
// sees there are potential candidates.

var o0;

function o1(o2)
{
    o0 = arguments;
    var o4 = 0;
    for (var o5 = 0; o5 < 1000000; ++o5) {
        (function() {
            return arguments[0];
        })(42);
        o4 += o2;
    }
    return o4;
}

noInline(o1);

o1(42);
