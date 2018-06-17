//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/// <reference path="protolib.js" />
try {
if (this.o0 && this.~o696.o1) {
    try {
o0.o1("protolib.js");
}catch(e){}
}
}catch(e){}

var o2 = [
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
        o678: [],
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

    o851 | o847[o842 | 6],

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
