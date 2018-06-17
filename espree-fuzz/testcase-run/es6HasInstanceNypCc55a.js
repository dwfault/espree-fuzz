//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests

try {
o0.o1(o4.o11(o46, o42[o46], "Object at index " + o46 + " has correct value"));
}catch(e){}

function o421(o15, o16, o17) {

                var o3 = [o15], o4 = [o16, o17];
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable] undefined');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = null;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==null');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = false;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==false');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = '';
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==\'\'');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 0;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = +0.0;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==+0.0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = -0.0;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==-0.0');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = NaN;
}catch(e){}
                try {
o2([o15, [o16, o17]], o3.concat(o4), '[@@isConcatSpreadable]==NaN');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = undefined;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==undefined');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = true;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==true');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 'abc';
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]=\'abc\'');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = 0.1;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==0.1');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = -0.1;
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==-0.1');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = Symbol();
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==Symbol()');
}catch(e){}

                try {
o4[Symbol.isConcatSpreadable] = {};
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]=={}');
}catch(e){}

                try {
delete o4[Symbol.isConcatSpreadable];
}catch(e){}
                try {
o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable] deleted');
}catch(e){}
            };

try {
o38.o39(o2, o6.o14(o24.startsWith("abc\0def"), "string with embedded null character starts with itself"));
}catch(e){}

