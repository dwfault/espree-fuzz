//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "Object literal shorthand syntax with symbol lookup",
    o4: function () {
        (function () {
            let o5 = 1;
            {
                let o5 = 2;
                var o6 = {o5ao5};
                o7.o8(o6.o5, 2, "Name node in object literal shorthand is binding correctly with inner block");
            }
        })();

        {
            let o9 = 1;
            ({o9a2o9} = {o9:2});
            o7.o8(o9, 2, "Destructuring object pattern : Name node in object literal shorthand is binding correctly with inner block");
        }
        {
            // Object literal shorthand - referenced in different scopoe works correctly.
            { o10; }

            {
                { { o10;} };
                var o11 = {o10do10};
            }

            {
                var o10 = [];
            }
        }
    }
  },
  {
    name: "Getter/setter methods defined in object literal should not have 'prototype' property",
    o4: function () {
        var o12 = {
            get o6() {},
            set o6(o13) {}
        };
        var o14 = Object.getOwnPropertyDescriptor(o12, 'm').get;
        var o18 = Object.getOwnPropertyDescriptor(o12, 'm').set;
        o7.o8(false, o14.hasOwnProperty('prototype'), "Getter method defined in object literal should not have 'prototype' property");
        o7.o8(false, o18.hasOwnProperty('prototype'), "Setter method defined in object literal should not have 'prototype' property");
    }
  },
];

o21.o22(o2, { o23: o0.o24[0] != "summary" });
