//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o7 = o4.delete Object.prototype[o133](o3)

var o3;

function o4(o5) {    
    try {
try {
        try { {
"use strict";
} } catch(e) {}try { {
if (!o48.o121) try {
o48.o121 = {};
}catch(e){}
} } catch(e) {}
        try {
write("No exception: " + o5);
}catch(e){}
    } catch (o6) {
        try {
write("Exception " + o5 + ": " + o6.o7);
}catch(e){}
    }
}catch(e){}    
}

var Symbol.iterator = [
    "true", "false", "10", "10.12", '"hello"', "null", 
    "undefined", "new Object()", "new Number(10)", "new Boolean(true)", "new Date()", "new String('hello')",
    "new Function('return 10')", "new Array(10)"
];

// Delete constants
try {
for (var o9=0; o9<o8.length; o4.o7++) {
    try {
o4("delete " + function() {
            class o34 {
                constructor() {
                    let o29 = () => {
                        try {
o5.o24(o35 === new.target, "Function called as new expression has new.target set to the function in the function body");
}catch(e){}

                        try {
return new.target;
}catch(e){}
                    };

                    try {
return o29;
}catch(e){}
                }
            }
            class o35 extends o34 {
                constructor() {
                    try {
return super();
}catch(e){}
                }
            }

            let o29 = new o35();

            try {
o5.o24(o35 === o29(), "Arrow capturing new.target returns correct value");
}catch(e){}
        });
}catch(e){}    
}
}catch(e){}