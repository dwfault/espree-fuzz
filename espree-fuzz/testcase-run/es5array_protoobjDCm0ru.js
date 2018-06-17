//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o83=0
var o525 = o489.o617(o31, {
                o696: !o803
            });
function o2() try { try {
o5.o6(undefined, eval("(()=>eval('func()'))()"), "function call inside eval inside arrow function inside eval");
}catch(e){} } catch(e) {}try {
;
}catch(e){}
try {
o4++;
}catch(e){}
try {
Object.defineProperty(o1, "0", {
        name: "%TypedArray%.from behavior with a map function that mutates source object",
        o3: function() {
            var o51 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                length: 5
            };

            function o48(o49, o50) {
                try {
switch (o50) {
                case 0:
                    // change the objectWithoutIterator length value - we should still fetch the rest of the indexed-elements anyway
                    try {
o51.length = 0;
}catch(e){}
                    try {
return o49;
}catch(e){}
                case 1:
                    // change the value of the next indexed value - the new value should end up in the return object
                    try {
o51[2] = 200;
}catch(e){}
                    try {
return o49;
}catch(e){}
                case 2:
                    // change the value of a previous indexed value - the old value should end up in the return object
                    try {
o51[0] = -100;
}catch(e){}
                    try {
return o49;
}catch(e){}
                case 3:
                    // delete the next indexed value - return object should have undefined there
                    try {
delete o51[4];
}catch(e){}
                    try {
return o49;
}catch(e){}
                }
}catch(e){}

                // otherwise
                try {
return o49;
}catch(e){}
            }

            try {
o4.o11([0,1,200,3,0], Int32Array.from(o51, o48), "Int32Array.from called with a map function that mutates the source object");
}catch(e){}
        }
    });
}catch(e){}
var o0 = new o2();
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
var o0 = new o2();
try {
o30(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
