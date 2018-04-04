o0 = {
    o1: o2,
    o3: o4,
    o5: print,
    o7: o8,
    o9 : function(o10)
    {
        return o10.replace(/\\/g, "/");
    },
    o12 : [ "summary" ],
    o13 : function()
    {
        o0.o5.apply(this, arguments);
    },
    o16 : function(o17)
    {
        o0.o3(o0.o9(o17));
    },
    o18 : function()
    {
        o0.o7();
    },
};

function o19()
{
    o0.o1();
}

function o20(o21)
{
}
