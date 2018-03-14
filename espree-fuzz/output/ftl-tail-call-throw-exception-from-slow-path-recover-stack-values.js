var o0 = function () { };

function o1() {
    var o2 = class o3 extends o0 {
        static o4() {
            let o5 = (o6,o7,o8) => super.o9(o6,o7,o8);
            return o5(1,1,1);
        }
    };

    for (let o10 = 0; o10 < 10000; o10++) {
        try { o2.o4()  } catch (o11) {}
        try { o2.o4()  } catch (o11) {}
    }
}
o1();

function o12() {
    var o2 = class o3 extends o0 {
        static o4() {
            let o5 = () => super.o9();
            return o5();
        }
    };

    for (let o10 = 0; o10 < 10000; o10++) {
        try { o2.o4()  } catch (o11) {}
        try { o2.o4()  } catch (o11) {}
    }
}
o12();
