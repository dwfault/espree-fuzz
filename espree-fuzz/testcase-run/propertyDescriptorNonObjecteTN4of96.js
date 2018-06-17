//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1(0xFF);
}catch(e){}

var e = [
    ArrayBuffer.isView(o79),
    {
        name: "Object.defineProperty with number for propertyDescriptor",
        o3: set.add('c')
    },
    {
        name: "Set iterator should continue enumeration indefinitely if items are repeatedly removed and re-added without end",
        o5: function () {
            var set = new Set();
            try {
set.add(1);
}catch(e){}
            try {
set.add(2);
}catch(e){}

            var o35 = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
            var o22 = 0;

            try {
for (var o31 of set.values()) {
                try {
if (o22 < 9) {
                    try {
if (o31 == 1) {
                        try {
set.o32(1);
}catch(e){}
                        try {
set.add(2);
}catch(e){}
                    } else try {
if (o31 == 2) {
                        try {
set.o32(2);
}catch(e){}
                        try {
set.add(1);
}catch(e){}
                    }
}catch(e){}
}catch(e){}
                }
}catch(e){}

                try {
o7.o8(o31 == o35[o22], "set.values() should enumerate 1, 2, 1, 2, 1, 2, 1, 2, 1, 2");
}catch(e){}

                try {
o22 += 1;
}catch(e){}
            }
}catch(e){}
            try {
o7.o8(o22 == 10, "set.values() should have called the callback 10 times");
}catch(e){}
        }
    },
    {
        name: "Object.create in sloppy mode with `this` as a propertyDescriptor when it contains non-object properties",
        o3: function() {
            try {
o6 = 0;
}catch(e){}
            try {
o4.o5(function() { try {
Object.create({}, this)
}catch(e){} },
                o7,
                "Should throw TypeError because property 'a' is defined on `this` and is a non-object.",
                "Invalid descriptor for property 'a'")
}catch(e){}
        }
    },
];

try {
o8.e(e, 0x80 | o421.o155[0xFF10]);
}catch(o39){}
