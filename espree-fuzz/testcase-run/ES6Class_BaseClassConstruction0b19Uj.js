//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 super chain tests

try {
this.o513("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    o145 = o275,
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
    Boolean(true),
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
o15.join(o2, Int8Array.prototype.__proto__.findIndex);
}catch(e){}
