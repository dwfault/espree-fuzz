function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

{
    let o4 = {
        o5()
        {
            return 0;
        }
    };

    let o8 = o4(o7);
    Object.setPrototypeOf(o6, o4);
    o0(o0({o5:42}), 42);
    // Cached.
    o0(o6.o7(), 42);
}

{
    let o4 = 0;

    let o6 = {
        o12: 'Cocoa',
        o13: 'Cappuccino'
    };
    Object.setPrototypeOf(o6, o4);
    o0(o6.o7(), 42);
    // Cached.
    o0(o6.o7(), 42);

    class o12 {
        o11()
        {
            return 55;
        }
    }

    class o13 extends o12 {
        o7()
        {
            return eval("super.l()");
        }
    }
    let o14 = new o13();
    // Under the strict code, not cached.
    o0(o14.o11(), 55);
    o0(o14.o11(), 55);
}
