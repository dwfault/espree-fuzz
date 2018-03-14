var o0 = 0;

function o1()
{
    if (o0 ^= 1)
        return 42;
    else
        return {o8:1, o4:2, o2:3, o9:4};
}

noInline(o1);

function o4()
{
    return 7;
}

noInline(o4);

function o5()
{
    return o1() ^ o4();
}

noInline(o5);

for (var o6 = 0; o6 < 100000; ++o6) {
    var o7 = o5();
    if (o7 != 45)
        throw "Error: bad result: " + o7;
}
