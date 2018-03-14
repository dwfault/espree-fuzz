function o0(o1) {
    if (!o1)
        throw new Error("Bad");
}

{
    let o3;
    try {
        let o4 = {0:1, 1:2, o5:4, o6:3};
        o4.o5("/abc\)*/");
    } catch(o6) {
        o3 = o6;
    }
    o0(o3);
    o0(o3.o7 ===  "undefined is not a function (near '...foo.bar(\"/abc\\)*/\")...')");
}

{
    let o3;
    try {
        let o8 = {};
        let o9, o10;
        o8("(((");
    } catch(o6) {
        o3 = o6;
    }

    // This is less than ideal, but let's be aware if we ever fix it.
    o0(o3.o7 === "blah(\"(( is not a function. (In 'blah(\"(((\")', 'blah(\"((' is an instance of Object)");
}
