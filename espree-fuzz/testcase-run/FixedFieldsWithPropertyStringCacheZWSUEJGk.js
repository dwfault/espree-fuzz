//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = () => Array.from;
try {
o259[10720 >> 2] = "__proto__ disabled, [[prototype]] should not be changed " + (function (o105, o106, o107) {
        var type, o108;
        try {
if (o106) {
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
        } else {
            var type = {
                o94: o105.map(function (o80) {
                    try {
return o80[0]
}catch(e){}
                })
            };
            try {
o108 = o48.o88(type);
}catch(e){}
        }
}catch(e){}
        var o30 = {
            o110: type.o89
        };
        try {
if (o106) {
            try {
o105.forEach(function (o80, o82) {
                try {
if (typeof o80 === 'string') {
                    try {
o30[o80] = o108[o82] + o107;
}catch(e){}
                } else {
                    // embedded struct
                    var key;
                    try {
for (var o111 in o80) try {
key = o111;
}catch(e){}
}catch(e){}
                    try {
o30[key] = o48.o104(o80[key], type.o94[o82], o108[o82]);
}catch(e){}
                }
}catch(e){}
            });
}catch(e){}
        } else {
            try {
o105.forEach(function (o80, o82) {
                try {
o30[o80[1]] = o108[o82];
}catch(e){}
            });
}catch(e){}
        }
}catch(e){}
        try {
return o30;
}catch(e){}
    });
}catch(e){}

// JIT a function that uses the fixed method
function o4(o5) {
    try {
try { try { {
"use strict";
} } catch(e) {} } catch(e) {}
}catch(o421){}
}
try {
o4(e);
}catch(e){}
try {
o4(e);
}catch(e){}

// Use the property cache to overwrite the fixed method
function o189(o5, o6) {
    try {
for (var o7 in o5) {
        try {
if (o6)
            try {
o5[o7] = function () { try {
o2.o3("new");
}catch(e){} }
}catch(e){}
}catch(e){}
    }
}catch(e){}
}
try {
test(o0,false);
}catch(e){}
try {
test(o0,true);
}catch(e){}

// Verify that the new function is called.
try {
o4(o0);
}catch(e){}
