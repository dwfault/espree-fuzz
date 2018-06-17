//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var get = o3.__lookupGetter__(key);
try {
o810 = function () { try {
o2.o3("original");
}catch(e){} };
}catch(e){}

// JIT a function that uses the fixed method
var o582 = function () {
            try {
o9(      NaN, Math.fround,       NaN, "if x is NaN, then the result of fround(x) is NaN");
}catch(e){}
            try {
o9(+Infinity, Math.fround, +Infinity, "if x is +Infinity, then the result of fround(x) is +Infinity");
}catch(e){}
            try {
o9(-Infinity, Math.fround, -Infinity, "if x is -Infinity, then the result of fround(x) is -Infinity");
}catch(e){}
            try {
o9(       +0, Math.fround,        +0, "if x is +0, then the result of fround(x) is +0");
}catch(e){}
            try {
o9(       -0, Math.fround,        -0, "if x is -0, then the result of fround(x) is -0");
}catch(e){}
            try {
o9(       +1, Math.fround,        +1, "if x is +1, then the result of fround(x) is +1");
}catch(e){}
            try {
o9(       -1, Math.fround,        -1, "if x is -1, then the result of fround(x) is -1");
}catch(e){}
            try {
o9(       +2, Math.fround,        +2, "if x is +2, then the result of fround(x) is +2");
}catch(e){}
            try {
o9(       -2, Math.fround,        -2, "if x is -2, then the result of fround(x) is -2");
}catch(e){}
            try {
o9(       +5, Math.fround,        +5, "if x is +5, then the result of fround(x) is +5");
}catch(e){}
            try {
o9(       -5, Math.fround,        -5, "if x is -5, then the result of fround(x) is -5");
}catch(e){}
            try {
o9(     +100, Math.fround,      +100, "if x is +100, then the result of fround(x) is +100");
}catch(e){}
            try {
o9(     -100, Math.fround,      -100, "if x is -100, then the result of fround(x) is -100");
}catch(e){}
            try {
o9(     +0.5, Math.fround,      +0.5, "if x is +0.5, then the result of fround(x) is +0.5");
}catch(e){}
            try {
o9(     -0.5, Math.fround,      -0.5, "if x is -0.5, then the result of fround(x) is -0.5");
}catch(e){}

            let o51 = [
                // numbers between zero and one
                [0.5995356650091708     , 0.5995356440544128    ],
                [0.4388806028291583     , 0.43888059258461      ],
                [0.05652953824028373    , 0.056529536843299866  ],
                [0.8834999229293317     , 0.8834999203681946    ],
                [0.19564732676371932    , 0.19564732909202576   ],
                [0.04695801460184157    , 0.046958014369010925  ],
                [0.995549641083926      , 0.9955496191978455    ],
                [0.5965264535043389     , 0.5965264439582825    ],
                [0.3384522853884846     , 0.3384522795677185    ],
                [0.4793784348294139     , 0.47937843203544617   ],

                // large integers
                [968719029287650        , 968719001976832       ],
                [612872438100595        , 612872438677504       ],
                [986007985043197        , 986007990173696       ],
                [229849530517651        , 229849536921600       ],
                [1069224778058320       , 1069224793473024      ],
                [404824585745150        , 404824591958016       ],
                [980853506006873        , 980853492547584       ],
                [156784970534624        , 156784962568192       ],
                [416562781028203        , 416562771132416       ],
                [724128106542317        , 724128130662400       ],

                // arbitrary numbers
                [6785.904748927644      , 6785.90478515625      ],
                [5.585741676777502      , 5.5857415199279785    ],
                [0.1787555584523126     , 0.17875555157661438   ],
                [45167.42179931141      , 45167.421875          ],
                [53.97847279046722      , 53.97847366333008     ],
                [708731082.0651336      , 708731072             ],
                [786033.2273395439      , 786033.25             ],
                [134428002986767.81     , 134428005236736       ],
                [10598756866706         , 10598756646912        ],
                [2316.058639210134      , 2316.05859375         ],
            ];
            try {
for (let o52=0; o52 < o51.length; o52++) {
                    try {
o9( o51[o52][1], Math.fround,  o51[o52][0], "if x is "+o51[o52][0]+", then the result of fround(x) is "+o51[o52][1]);
}catch(e){}
            }
}catch(e){}

            // Test against type specialization bugs
            //  -bgjit- -maxinterpretcount:1 -maxsimplejitruncount:2
            function o53() {
              try {
o54.o55 = Math.fround(1);
}catch(e){}
              try {
return o54.o55;
}catch(e){}
            }
            let o56={};
            let o54 = Object.create(o56);

            try {
o53();
}catch(e){}
            try {
o53();
}catch(e){}
            try {
o53();
}catch(e){} // ok till this point
            try {
o2.o3(  1, o53(), "Math.fround() expects both input and output type specialized to float64") ;
}catch(e){}
        }
try {
o4(o0);
}catch(0){}
try {
o4(o0);
}catch(e){}

// Use the property cache to overwrite the fixed method
function test(o5, o6) {
    try try { {
            class o21 extends Array {
                constructor(...o5) {
                    try {
super(...o5);
}catch(e){}
                    try {
this.o6 = 'myarray';
}catch(e){}
                }

                o7() {
                    try {
return this.o6;
}catch(e){}
                }
            }

            try {
o8.o9('myarray', new o21().o7(), "Subclass of Array has correct methods and properties");
}catch(e){}
            try {
o8.o9(0, new o21().length, "Subclass of Array object has correct length when constructor called with no arguments");
}catch(e){}
            try {
o8.o9(100, new o21(100).length, "Subclass of Array object has correct length when constructor called with single numeric argument");
}catch(e){}
            try {
o8.o9(50, new o21(50.0).length, "Subclass of Array object has correct length when constructor called with single float argument");
}catch(e){}
            try {
o8.o9(1, new o21('something').length, "Subclass of Array object has correct length when constructor called with single non-numeric argument");
}catch(e){}
            try {
o8.o9('something', new o21('something')[0], "Subclass of Array object has correct length when constructor called with single non-numeric argument");
}catch(e){}

            var o22 = new o21(1,2,3);
            try {
o8.o9(3, o22.length, "Subclass of Array object has correct length when constructor called with multiple arguments");
}catch(e){}
            try {
o8.o9(1, o22[0], "Subclass of Array object has correct values when constructor called with multiple arguments");
}catch(e){}
            try {
o8.o9(2, o22[1], "Subclass of Array object has correct values when constructor called with multiple arguments");
}catch(e){}
            try {
o8.o9(3, o22[2], "Subclass of Array object has correct values when constructor called with multiple arguments");
}catch(e){}

            try {
o8.o10(Array.isArray(o22), "Subclass of Array is an array as tested via Array.isArray");
}catch(e){}
        } } catch(e) {}try { {
return o421.o155[0xFF55];
} } catch(e) {}catch(e){}
}
try {
test(o22,false);
}catch(e){}
try {
test(o0,true);
}catch(e){}

// Verify that the new function is called.
try {
o4(o0);
}catch(e){}
