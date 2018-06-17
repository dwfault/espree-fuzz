//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

var o0=o2([o15, e, o17], o3.concat(o4), '[@@isConcatSpreadable]==-0.1');

try {
for(o259[o111 >> 2];o1<5000;o1++)
{
    try {
if(o1<o1)
    {
        // Example: "var y15=15"
        try {
eval("var y"+o1+"=" + o1 );
}catch(e){}

        try {
if(!(eval("y"+o1)===o1))
            try {
o2.o3("FAIL: y"+o1+" == " + eval("y"+o1) + ".  Expected: " + o1);
}catch(o278){}
}catch(e){}

    }
    else
    {
        // Example: "obj['o57']=57"
        try {
eval("obj['o"+o1+"']="+o1 );
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

// Here it is assumed that the enumeration of properties are accessed in the sequence they were created
// An example error message would look like:
// FAIL: obj[p1] == 23.  Expected: 47

var o4=1000;

try {
for(o5 in o0)
{
    try {
if(o421.o143 & 0xF!==o4)
        try {
o2.o3(this + ".  Expected: " + o4);
}catch(e){}
}catch(e){}
    try {
{
       name: "Every toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 0;
}catch(e){}
            try {
o8[4294967294/2] = 1;
}catch(e){}
            try {
o8[4294967294] = 2;
}catch(e){}
            try {
o8[4294967295] = 3;
}catch(e){}
            function o21(o22, index, o23)
            {
                try {
return o22 %2 == 0;
}catch(e){}
            }
            //a.every(isEven); // Note perf issue: spec says callback is invoked only for indexes of the array which have
                               // assigned values; it is not invoked for indexes which have been deleted or
                               // which have never been assigned values.
                               // Sounds like we should do some kind of sparse array optimization or
                               // enumerating instead of walking all indices
            var o5 = { length : -1, [-5] : 2, [-2]: 3 };
            try {
o6.o7(true, Array.prototype.every.call(o5, o21), "oNeg has length coerced 0, so we never find an index that proves our comparison false");
}catch(e){}

            // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
       }
   };
}catch(e){}
}
}catch(e){}
try {
o2.o3("done");
}catch(e){}
