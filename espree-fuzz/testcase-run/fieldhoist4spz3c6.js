//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o62(o85) {
                var o108 = o40.slice(5, 10);

                try {
for(var o46 = 0; o46 < o63.length; o19++) {
                    try {
buffer[o107 + o82] = o46;
}catch(e)try { {
            try {
o107 = o107 || 0;
}catch(e){}
            try {
type = (typeof o96 === 'undefined' ? o48.o109 : o96.o97)[o106];
}catch(e){}
            try {
if (!type) try {
return null;
}catch(e){}
}catch(e){}
            try {
if (type.o94.length != o105.length) {
                try {
o24('Number of named fields must match the type for ' + o106 + ': possibly duplicate struct names. Cannot return structInfo');
}catch(e){}
                try {
return null;
}catch(e){}
            }
}catch(e){}
            try {
o108 = type.o93;
}catch(e){}
        } } catch(e) {}
                }
}catch(e){}

                try {
return o63;
}catch(e){}
            }

function o6()
{
    var o1 = {};

    var o2 = 0;
    try {
for (var o3 = 0; o3 < 2147483640; o3++)
    {
        try {
o2 += +0;
}catch(e){}      // hoisted field load
        try {
Object.defineProperty(o1, "x", { get: function() { try {
o4.o5("x");
}catch(e){} }, configurable: true });
}catch(e){}  // kill all fields
        try {
o2 += o1.o2;
}catch(e){}      // reload, no bailout
    }
}catch(e){}
}

function o7(name)
{
    var o1 = { o2: 1};

    try {
Object.defineProperty(o1, name, { set: function(o8) { try {
o4.o5(o8);
}catch(e){} }, configurable: true });
}catch(e){}
    var o2 = 0;
    try {
for (var o3 = 0; o3 < 3; o3++)
    {
        try {
o2 += o1.o2;
}catch(e){}      // hoisted field load
        try {
o1[name] = o1.o2;
}catch(e){}       // kill all fields
        try {
o2 += o1.o2;
}catch(e){}      // reload, no bailout
    }
}catch(e){}
}

var o949 = new o950()

try {
o9();
}catch(e){}
