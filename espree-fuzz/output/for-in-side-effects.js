// Regression test for bug 179212

var o0 = { "a": {} };

var o1 = 0;
var o2 = [];
var o3 = [];

var o4 = new Proxy({o1:42}, {o6: "return", o7: [o1, o2, o3, o4]});

o0.__proto__ = o4;

function o8()
{
    o1 = 0;
    o2 = [1.1, 2.2, 3.3];
    o3 = [];
}

function o9(o10)
{
    o8();

    for (var o11 = 0; o11 < 0x10000; o11++)
        o10();

    o1 = 1;
    o10();

    if (o3[0].o12 != "I changed")
        throw "Expected updated value for copy[0]";
}

function o13()
{
    function o14()
    {
        o2[0] = 2.2;
        for(var o15 in o0) {
            o3[0] = o2[0];
            o3[1] = o2[1];
            o3[2] = o2[2];
        }
    }

    noFTL(o14);

    o9(o14);
}

function o17()
{
    function o14()
    {
        o2[0] = 2.2;
        for(var o15 in o0) {
            o3[0] = o2[0];
            o3[1] = o2[1];
            o3[2] = o2[2];
        }
    }

    o9(o14);
}

o13();
o17();
