//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function Object(o0)
{
    try {
o308 + 4;
}catch(e){}
}
var e = [];
function o2() { try {
this.o5this[1]new Boolean(true)[1] = 2;
}catch(e){} }try {
;
}catch(e){}
try {
Object.defineProperty(o1, "0", { name: "acosh computes the inverse hyperbolic cosine and follows spec on special boundary values", writable: false });
}catch(e){}
var o1066 = new o2();
try {
function () {
            class o21 extends Array
            {
                constructor(...o23) { try {
super(...o23);
}catch(e){} }
                o24() { try {
return this.length > 0 ? this[0] : undefined;
}catch(e){} }
                o25() { try {
return this.length > 0 ? this[this.length-1] : undefined;
}catch(e){} }
            }
            class o26 extends o21
            {
                constructor(...o23) { try {
super(...o23);
}catch(e){} }
                o27() { try {
return this.length;
}catch(e){} }
            }

            function o28(o29, length, o30, o31)
            {
                try {
o8.o9(false, o29 instanceof Function, "Subclass of Array is not a function object");
}catch(e){}
                try {
o8.o9(true, o29 instanceof Array, "Subclass of Array is an Array");
}catch(e){}
                try {
o8.o9(true, o29 instanceof o21, "Subclass of Array is a 'MyArray' instance");
}catch(e){}
                try {
o8.o9(true, o29 instanceof o26, "Subclass of Array is a 'OurArray' instance");
}catch(e){}

                try {
o8.o9(o26.prototype, o29.__proto__, "obj's [[Prototype]] slot points to OurArray.prototype");
}catch(e){}
                try {
o8.o9(o21.prototype, o29.__proto__.__proto__, "obj's 2nd-order [[Prototype]] points to MyArray.prototype");
}catch(e){}
                try {
o8.o9(Array.prototype, o29.__proto__.__proto__.__proto__, "obj's 3rd-order [[Prototype]] chain points to Array.prototype");
}catch(e){}

                try {
o8.o9(length, o29.length, "Subclass of Array is a 'OurArray' instance");
}catch(e){}
                try {
o29[length] = o30;
}catch(e){}
                try {
o8.o9(length + 1, o29.length, "Subclass of Array is a 'OurArray' instance");
}catch(e){}

                try {
o8.o9(length + 1, o29.o27(), "obj.getLength() returns "+ (length + 1));
}catch(e){}
                try {
o8.o9(o31, o29.o24(), "obj.getFirstElement() returns "+ o31);
}catch(e){}
                try {
o8.o9(o30, o29.o25(), "obj.getLastElement() returns "+ o30);
}catch(e){}
            }

            try {
o8.o9(o21, o26.__proto__, "OurArray's [[Prototype]] slot points to MyArray");
}catch(e){}
            try {
o8.o9(Array, o21.__proto__, "MyArray's [[Prototype]] slot points to Array");
}catch(e){}

            try {
o28(new o26(), 0, 1, 1);
}catch(e){}
            try {
o28(new o26('e'), 1, 'element', 'e');
}catch(e){}
            try {
o28(new o26('xyz',2), 2, function(){}, 'xyz');
}catch(e){}
            try {
o28(new o26(1,2,3), 3, 4, 1);
}catch(e){}
            try {
o28(new o26('a','b','c','d'), 4, 'e', 'a');
}catch(e){}
            try {
o28(new o26(100), 100, 'element', undefined);
}catch(e){}
        }.o390;
}catch(e){}
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
var o0 = new o2();
try {
o421.o149;
}catch(e){}
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
