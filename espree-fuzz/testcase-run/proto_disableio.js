//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="protolib.js" />
try {
if (o85[o62&3](o62,2) && this.o0.o1) {
    try {
o0.o1(1);
}catch(e){}
}
}catch(e){}

var o2 = [
    o539.push(0),

    {
        name: "delete Object.prototype.__proto__",
        o3: function () {
            var o7 = o8();

            var o9 = o7.Object.getOwnPropertyDescriptor(o7.Object.prototype, "__proto__");
            try {
o7.o5("delete Object.prototype.__proto__");
}catch(e){}

            // redefine such a property brings __proto__ back
            try {
o7.Object.defineProperty(o7.Object.prototype, "__proto__", o9);
}catch(e){}
            try {
o7.o10();
}catch(e){}
        }
    },

    {
        name: "DefineOwnProperty with missing/different attribute set",
        o3: function () {
            function o11(o9) {
                var set = [];
                try {
for (var name in o9) {
                    try {
set.push(name + ": " + o9[name]);
}catch(e){}
                }
}catch(e){}
                try {
return '{' + set.join(", ") + '}';
}catch(e){}
            }

            function o12(o9, o13) {
                var o4 = 'Object.defineProperty(Object.prototype, "__proto__", ' + o11(o9) + ')';

                var o7 = o8();
                try {
o7.o14(o4, o13);
}catch(e){}

                // Verify we indeed have those attr set successfully
                var o15 = o7.Object.getOwnPropertyDescriptor(o7.Object.prototype, "__proto__");
                try {
for (var name in o9) {
                    try {
o16.o17("" + o9[name], "" + o15[name], name);
}catch(e){}
                }
}catch(e){}
            }

            var o18 = ["enumerable", "configurable"];
            var o19 = { enumerable: false, configurable: true };

            // Test any attr missing
            try {
for (var o20 = 0; o20 < 3; o20++) {
                var o9 = {};
                try {
for (var o21 = 0; o21 < 2; o21++) {
                    try {
if (o20 & (1 << o21)) {
                        var name = o18[o21];
                        try {
o9[name] = o19[name];
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}

                try {
o12(o9, o6);
}catch(e){} // Now these don't disable __proto__
            }
}catch(e){}

            // Test any attr diff
            try {
o18.forEach(function (o22) {
                var o9 = { enumerable: false, configurable: true };
                try {
o9[o22] = !o9[o22];
}catch(e){}

                try {
o12(o9, o6);
}catch(e){} // Now these don't disable __proto__
            });
}catch(e){}

            try {
o12({ enumerable: false, configurable: true }, o6);
}catch(e){}

            // But will be disabled if we change to value, or change setter
            try {
o12({ value: 234, writable: true, enumerable: false, configurable: true });
}catch(e){}
            try {
o12({ set: function () { try {
return "custom setter"
}catch(e){} }, enumerable: false, configurable: true });
}catch(e){}
        }
    },

    {
        name: "Change Object.prototype.__proto__ getter or setter",
        o3: function () {
            try {
o8().o23(function () {
                var o24 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

                var o25 = { o25: 12 };
                var o26 = { o26: 23 };
                var o27 = { o27: 34 };

                try {
o16.o17(Object.prototype, o27.__proto__);
}catch(e){}
                try {
o27.__proto__ = o25;
}catch(e){}
                try {
o16.o17(o25, Object.getPrototypeOf(o27));
}catch(e){}

                // Replace the setter
                try {
Object.defineProperty(Object.prototype, "__proto__", { set: function () { } });
}catch(e){}
                try {
o16.o17(o25, o27.__proto__);
}catch(e){}
                try {
o27.__proto__ = o26;
}catch(e){} // This does not work
                try {
o16.o17(o25, o27.__proto__);
}catch(e){}
                try {
Object.setPrototypeOf(o27, o26);
}catch(e){} // But this works
                try {
o16.o17(o26, o27.__proto__);
}catch(e){}

                // Replace the getter
                try {
Object.defineProperty(Object.prototype, "__proto__", { get: function () { try {
return 123;
}catch(e){} } });
}catch(e){}
                try {
o16.o17(123, o27.__proto__);
}catch(e){}
                try {
o16.o17(o26, Object.getPrototypeOf(o27));
}catch(e){}
                try {
Object.setPrototypeOf(o27, o25);
}catch(e){}
                try {
o16.o17(123, o27.__proto__);
}catch(e){}
                try {
o16.o17(o25, Object.getPrototypeOf(o27));
}catch(e){}

                // Restore
                try {
Object.defineProperty(Object.prototype, "__proto__", { get: o24.get, set: o24.set });
}catch(e){}
                try {
o16.o17(o25, o27.__proto__);
}catch(e){}

                try {
o10();
}catch(e){}
            });
}catch(e){}
        }
    },
];
try {
o28.o23(o2);
}catch(e){}
