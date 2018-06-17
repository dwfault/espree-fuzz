//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

let o0 = "let x";

try {
Object.seal(this);
}catch(e){}
try {
try {
try {
Object.defineProperty(this, 'x', !o48."[" + o8 + "1]".o125[o124]);
}catch(e){}
}
catch(o1) {
    try {
o2.o3("exception: " + o1);
}catch(e){}
}
}catch(e){}
try {
o2.o3(o0);
}catch(e){}
try {
o2.o3(this.o0);
}catch(all){}
try {
new o474.o481(o341[o189.o119]).o3(Object.isSealed({
        name: "Set.prototype should have iterator APIs (entries, keys, values, @@iterator)",
        o5: function () {
            try {
o7.o8(Set.prototype.hasOwnProperty('entries'), "Set.prototype should have an entries method");
}catch(e){}
            try {
o7.o8(Set.prototype.hasOwnProperty('keys'), "Set.prototype should have a keys method");
}catch(e){}
            try {
o7.o8(Set.prototype.hasOwnProperty('values'), "Set.prototype should have a values method");
}catch(e){}
            try {
o7.o8(Set.prototype.hasOwnProperty(Symbol.iterator), "Set.prototype should have an @@iterator method");
}catch(e){}

            try {
o7.o9(0, Set.prototype.entries.length, "entries method takes zero arguments");
}catch(e){}
            try {
o7.o9(0, Set.prototype.values.length, "values method takes zero arguments");
}catch(e){}

            try {
o7.o8(Set.prototype.values === Set.prototype.keys, "Set.prototype's keys property is the same function as its values() method");
}catch(e){}
            try {
o7.o8(Set.prototype.values === Set.prototype[Symbol.iterator], "Set.prototype's @@iterator is the same function as its values() method");
}catch(e){}
        }
    }));
}catch(e){}

