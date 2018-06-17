//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 super chain tests

try {
o90[o88&3](o62,2.1)("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    {
       name: "Reverse toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 0;
}catch(e){}
            try {
o8[4294967294] = 1;
}catch(e){}
            try {
o8.reverse();
}catch(e){}
            try {
o8[4294967295] = 2;
}catch(e){}
            try {
o8[4294967296] = 3;
}catch(e){}
            try {
o6.o7(1, o8[0], " confirm reverse still happens on the bounds of an array");
}catch(e){}
            try {
o6.o7(0, o8[4294967294], " confirm reverse still happens on the bounds of an array");
}catch(e){}

            try {
o8.reverse();
}catch(e){}
            try {
o6.o7(0, o8[0]," confirm reverse still happens on the bounds of an array");
}catch(e){}
            try {
o6.o7(1, o8[4294967294], " confirm reverse still happens on the bounds of an array");
}catch(e){}
            try {
o6.o7(2, o8[4294967295], "index 4294967295 is beyond the bounds of an array so it does not reverse");
}catch(e){}
            try {
o6.o7(3, o8[4294967296], "index 4294967296 is beyond the bounds of an array so it does not reverse");
}catch(e){}

            var o9 = { length : -1, 4294967294 : 1, 0: 0 };
            try {
Array.prototype.reverse.call(o9);
}catch(e){}
            try {
o6.o7(0, o9[0], "confirm length does not get converted to 4294967295");
}catch(e){}
            try {
o6.o7(1, o9[4294967294],"confirm length does not get converted to 4294967295");
}catch(e){}
            try {
o6.o7(-1,o9.length, "length returns -1");
}catch(e){}

            // Note it is not practical to reverse an object length 4294967295 or larger since we will hit an
            // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
            // but at the moment it is not a real world scenario.
       }
   },
    {
        name: "Simple base class object construction which uses a lambda to access this",
        o3: function () {
            class o4 {
                constructor(o6) {
                    let o12 = () => {
                        try {
this.o6 = o6;
}catch(e){}
                        try {
this.o7 = "Simple";
}catch(e){}
                    };
                    try {
o12();
}catch(e){}
                }
            }try {
;
}catch(e){}

            let o8 = new o4('val');

            try {
o9.o10("Simple", o8.o7, "'this' is valid to use in Simple.constructor");
}catch(e){}
            try {
o9.o10("val", o8.o6, "Arguments passed to Simple.constructor pass through correctly");
}catch(e){}
            try {
o9.o11(o8 instanceof o4, "new Simple(); uses new.target as 'Simple' itself which creates instanceof Simple class");
}catch(e){}
        }
    },
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
