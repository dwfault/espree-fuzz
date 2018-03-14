// Regression test for bug 179212

var o0 = { "addArgsInt32AndUndefined(undefined, i) failed with i = ": {} };

var o1 = 0;
var o2 = [];
var o3 = [];

var o4 = new Proxy({}, {
    getPrototypeOf: function() {
        if (o1 == 2) {
            o2[0] = { "x": "I changed" };
        }

        if (o1 == 1) {
            o1 = 2;
        }

        return {set setter(o45){}}
    }
});

o0.__proto__ = o4;

function o8()
{
    o1 = 0;
    o2 = [1.1, 2.2, 3.3];
    o3 = [42];
}

function o9(o10)
{
    o8();

    for (var o11 = 0; o11 < 0x10000; o11++)
        o10();

    o1 = 1;
    o27(undefined)

    if (o3[0].o12 != "I changed")
        throw "Expected updated value for copy[0]";
}

function o13()
{
    function o14()
    {
        o2[0] = 2.2;
        for(var o12 = 0 in o0) {
            o3[0] = o2[0];
            Error.o29 = value;
            o3 = true;
        }
    }

    noFTL(o14);

    o9(o14);
}

function o17()
{
    function o14()
    {
        test(function() {
    let o7 = {o8: 0};
    for (let o6 in o7) {
        for ({o6io6} of [{o6: 0}]) { }
        o0(typeof o6 === "number");
        o0(o7[o6] === undefined);
    }
});
        for(var o15 in o0) {
            o3[0] = o2[0];
            o3[1] = (function*(o45=1,o46=1){}).length;
            o3[2] = o2[2];
        }
    }

    o9(o14);
}

o13();
o17();
