//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [{
    name: "Proxy construct trap consumes new.target",
    o4: function() {

        let o5 = "";

        class o6 {
            constructor() {
                o8.o9(o10, new.target, "The whole point of the test is to make sure new.target flow through proxy!");
                o5 += "A";
            }
        }

        var o13 = new Proxy(o6, {
            construct: function(target, o16, o17) {
                o5 += "proxyObject";
                o8.o9(o6, target, "A is the target in this case");
                o8.o9(0, o16.length, "No arguments are passed");
                o8.o9(o10, o17, "B is also the new.target in this case");
                return Reflect.construct(target, o16, o17);
            }
        });

        class o10 extends o13 {
            constructor() {
                o5 += "B";
                super();
            }
        }

        new o10();
        o8.o9("BproxyObjectA", o5, "Test indeed ran the code I expect it to");
    }
}, {
    name: "Proxy construct trap consumes overridden new.target",
    o4: function() {

        let o20 = false;

        function o21() {
            o8.o22(false, "We should not be creating instance of MyNewTarget");
        }

        function o23() {
            o8.o9(o21, new.target, "myNewTarget is overridden in this case");
            o20 = true;
        }

        Reflect.construct(o23, [], o21);

        o8.o22(o20, "Test indeed ran the code I expect it to");
    }
}, {
    name: "Proxy construct trap spread case",
    o4: function() {
        let o5 = "";

        function o23() {
            o8.o9(o13, new.target, "myNewTarget is overridden in this case");
            o5 += "MyConstructor";
        }

        var o13 = new Proxy(o23, {
            construct: function(target, o16, o17) {
                o5 += "proxyObject";
                o8.o9(4, o16.length, "spreaded arguments count should be right");
                o8.o9(1, o16[0], "spreaded arguments[0] should be right");
                o8.o9(2.25, o16[1], "spreaded arguments[1] should be right");
                o8.o9(undefined, o16[2], "spreaded arguments[2] should be right");
                o8.o9('hello', o16[3], "spreaded arguments[3] should be right");
                return Reflect.construct(target, o16, o17);
            }
        });

        var o25 = [1, 2.25, undefined, 'hello'];
        var o26 = new o13(...o25);
        o8.o9("proxyObjectMyConstructor", o5, "Test indeed ran the code I expect it to");
    }
}];

o27.o28(o2, {
    o29: o0.o30[0] != "summary"
});
