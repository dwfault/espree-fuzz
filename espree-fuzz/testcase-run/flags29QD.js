//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o26 = o23.o26

function o3(o4)
{
    //write(str);
    try {
write(o4 + " : " + eval(o4));
}catch(e){}
}


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
write("Global object builtin properties");
}catch(e){}

var o6 = [ "NaN", "Infinity", "undefined"];

try {
for(var o7=0;o7<o6.length;o7++)
{
   try {
o3("delete " +  o6[o7]);
}catch(e){}
   try {
o3(o6[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var o7=0;o7<o6.length;o7++)
{
   try {
o3(o6[o7] + "= \"hello\";");
}catch(e){}
   try {
o3(o6[o7]);
}catch(e){}
}
}catch(e){}

try {
write("Math Object builtin properties");
}catch(e){}

var o8 = ["PI", "E", "LN10", "LN2", "LOG2E", "LOG10E", "SQRT1_2", "SQRT2"];


try {
for(var o7=0;o7<o8.length;o7++)
{
   try {
o3("Math." + o8[o7] + " = overwrite");
}catch(e){}
   try {
o3("Math." + o8[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var o7=0;o7<o8.length;o7++)
{
   try {
o3("delete Math." +  o8[o7]);
}catch(e){}
   try {
o3("Math." + o8[o7]);
}catch(e){}
}
}catch(e){}

try {
write("Number Object builtin properties");
}catch(e){}

var o9 = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"];


try {
for(var o7=0;o7<o9.length;o7++)
{
   try {
o3("Number." + o9[o7] + " = overwrite");
}catch(e){}
   try {
o3("Number." + o9[o7]);
}catch(e){}
}
}catch(e){}

try {
for(var o7=0;o7<o8.length;o7++)
{
   try {
o3("delete Number." +  o9[o7]);
}catch(e){}
   try {
o3("Number." + o9[o7]);
}catch(e){}
}
}catch(e){}
