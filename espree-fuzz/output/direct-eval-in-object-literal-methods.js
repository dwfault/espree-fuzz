function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

{
    let o4 = {
        o5()
        {
            return 42;
        }
    };

    let o6 = {
        o7()
        {
            return eval("super.n()");
        }
    };
    Object.setPrototypeOf(o6, o4);
    o0(o6.o7(), 42);
    // Cached.
    o0(o6.o7(), 42);
}

{
    let o4 = { valueOf() { return 5 } };

    let o6 = {o6: "return", o7: [o1, o2, o3, o4]};
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
