//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="protolib.js" />
try {
if (this.o0 && this.o0.o1) {
    try {
o0.o1("Object(Symbol.iterator).toString() === 'Symbol(Symbol.iterator)'");
}catch(e){}
}
}catch(e){}

var prototype = [
    {
        name: "seal/freeze Object.prototype",
        o3: function () {
            try {
["Object.seal(Object.prototype)", "Object.freeze(Object.prototype)"].forEach(function (o4) {
                try {
o5(o4, o6);
}catch(e){} // These no longer disables __proto__
            });
}catch(e){}
        }
    },

    {
        name: "delete Object.prototype.__proto__",
        o3: function () {
            var o7 = o8();

            var o609;
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
        o58: {
        "i1": 0,
        "i8": 0,
        "i16": 0,
        "i32": 0,
        "i64": 0
    }
    },

    {
        name: "Change Object.prototype.__proto__ getter or setter",
        o3: function () {
            try {
o8().o23(function () {
                var o24 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

                var o0 = { o25: 12 };
                var o26 = { o26: 23 };
                var o4 = {};

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
