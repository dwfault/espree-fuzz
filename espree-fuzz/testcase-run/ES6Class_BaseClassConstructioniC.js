//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 super chain tests

try {
o0.o1(set.values());
}catch(write){}

var o2 = [
    {
        name: "Simple base class object construction",
        o3: function () {
            class o4 {
                o5() {
                    try {
return o62;
}catch(e){}
                }
                constructor(o6) {
                    try {
this.o6 = o6;
}catch(e){}
                    try {
o585 = "Simple";
}catch(e){}
                }
            }try {
;
}catch(e){}

            let o8 = new o4('val');

            try {
o9.o10("Simple", o8.o7, o789);
}catch(e){}
            try {
o9.o10("val", Math.cosh.o6, "Arguments passed to Simple.constructor pass through correctly");
}catch(e){}
            try {
o9.o10("bar", o8.o5(), "Result object can call class members");
}catch(e){}
            try {
o9.o11(o8 instanceof o4, "new Simple(); uses new.target as 'Simple' itself which creates instanceof Simple class");
}catch(e){}
        }
    },
    o1071 = o1072,
    {
        name: "Base class constructors return 'this' if they explicitly return a non-object",
        o3: function () {
            class o13 {
                constructor(o6) {
                    try {
this.o7 = 'ReturnArgumentBaseClass';
}catch(e){}
                    try {
return o6;
}catch(e){}
                }
            }try {
;
}catch(e){}

            let o8 = new o13(null);
            try {
o9.o10("ReturnArgumentBaseClass", o8.o7, "new ReturnArgumentBaseClass(null); returns 'this'");
}catch(e){}
            try {
o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass(null); returns an instance of ReturnArgumentBaseClass");
}catch(e){}

            try {
o8 = new o13(undefined);
}catch(e){}
            try {
o9.o10("ReturnArgumentBaseClass", o8.o7, "new ReturnArgumentBaseClass(undefined); returns 'this'");
}catch(e){}
            try {
o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass(undefined); returns an instance of ReturnArgumentBaseClass");
}catch(e){}

            try {
o8 = new o13();
}catch(e){}
            try {
o9.o10("ReturnArgumentBaseClass", o8.o7, "new ReturnArgumentBaseClass(); returns 'this'");
}catch(e){}
            try {
o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass(); returns an instance of ReturnArgumentBaseClass");
}catch(e){}

            try {
o8 = new o13('string');
}catch(e){}
            try {
o9.o10("ReturnArgumentBaseClass", o8.o7, "new ReturnArgumentBaseClass('string'); returns 'this'");
}catch(e){}
            try {
o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass('string'); returns an instance of ReturnArgumentBaseClass");
}catch(e){}

            try {
o8 = new o13(5);
}catch(e){}
            try {
o9.o10("ReturnArgumentBaseClass", o8.o7, "new ReturnArgumentBaseClass(5); returns 'this'");
}catch(e){}
            try {
o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass(5); returns an instance of ReturnArgumentBaseClass");
}catch(e){}
        }
    },
    {
        name: "Base class constructors which return an object override return of 'this'",
        o3: function () {
            class o13 {
                constructor(o6) {
                    try {
this.o7 = 'ReturnArgumentBaseClass';
}catch(e){}
                    try {
return o6;
}catch(e){}
                }
            }try {
;
}catch(e){}

            let o8 = new o13({o7:'test'});
            try {
o9.o10("test", o8.o7, "new ReturnArgumentBaseClass({foo:'test'}); returns {foo:'test'}");
}catch(e){}
            try {
o9.o14(o8 instanceof o13, "new ReturnArgumentBaseClass({foo:'test'}); doesn't return an instance of ReturnArgumentBaseClass");
}catch(e){}

            try {
o8 = new o13(new Boolean(false));
}catch(e){}
            try {
o9.o10(new Boolean(false), o8, "new ReturnArgumentBaseClass(new Boolean(false)); returns new Boolean(false)");
}catch(e){}
            try {
o9.o11(o8 instanceof Boolean, "new ReturnArgumentBaseClass(new Boolean(false)); returns an instance of Boolean");
}catch(e){}
        }
    },
];

try {
o15.o16(o2, { o17: o0.o18[0] != "summary" });
}catch(e){}
