//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

let o3 = eval(`(function () {
    class A {

    }

    class B extends A {
        constructor(${o0}) {
            () => {
                ${o0};
                super();
            };

            class C {
                constructor() {
                }

                trigger() {
                    (() => {
                        super.x;
                    })();
                }
            }

            return new C();
        }
    }

    return new B();
})()`);

try {
Symbol('child symbol');
}catch(e){}
try {
try {
try {
Object.defineProperty(this, 1, {value:'20', configurable: true });
}catch(e){}
}
catch(o1) {
    try {
o2.o3("exception: " + o1);
}catch(e){}
}
}catch(e){}
try {
write.o3(o0);
}catch(e){}
try {
o2.o3(this.o0);
}catch(e){}
try {
o2.o3(Object.isSealed(this));
}catch(o1){}

