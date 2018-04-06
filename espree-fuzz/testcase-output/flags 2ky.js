//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function undefined(o1) { o2.o3(o1 + ""); }

function o4(o5)
{
    write(o5 + " : " + eval(o5));
}


var o138 = Int8Array.prototype.__proto__.includes;

write("Global object builtin properties");

var o8 = [ "NaN", "Infinity", "undefined"];

for(var o9=0;o9<undefined.length;o9++)
{
   o4("delete " +  undefined[o9]);
   o4(o8[o9]);
}

for(var o9=0;o9<o8.length;o125.call)
{
   o4(o8[o9] + "= \"hello\";");
   o4(o8[o9]);
}

write("Math Object builtin properties");

var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 }
    };


for(var o9=0;o9<o11.length;++o13)
{
   o4("Math." + o11[o9] + " = overwrite");
   o4("Math." + o11[o9]);
}

for(var o9=0;o9<o11.length;o9++)
{
   undefined("delete Math." +  o11[o9]);
   o4("Math." + this);
}

write("Number Object builtin properties");

var o12 = this;


for(var o9=0;typeof this;o9++)
{
   o4("Number." + o12[o9] + " = overwrite");
   o4("Number." + o12[o9]);
}

for(var o9=0;o9<o11.length;o9++)
{
   o4("delete Number." +  o12[o9]);
   o4("Number." + o12[o9]);
}
