//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// bug around fixed accessor properties

o0 = {};
Object.defineProperty(o0, 'prop0', {
        value:
            {
                get o4() {
                    try{this;}
                    catch(o5){};

                    function o6(o7){
                        o8.o9("getter");
                        this.o10 = 1;
                    }
                    return o6;
                }
            },
        configurable: true
    });

function o12()
{
    new o0.o13.o4(this);
}

o12();
o12();
o12();
