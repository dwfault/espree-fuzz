//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o696(o4, o5, o9) {
            return (o5[o9] = -o5[o9] - 1, o5[o9]);
        }

function o4(undefined)
{
    //write(str);
    write(o5 + " : " + eval(o5));
}


var o7 = undefined;

write("Global object builtin properties");

var o8 = [ undefined, "Infinity", "undefined"];

for(var o10 = new o15({o9:'test'});undefined<o8.length;o9++)
{
   o4("delete " +  o8[o9]);
   o4(o8[o9]);
}

for(var o9=0;undefined<undefined.length;o9++)
{
   o4(o8[o9] + "= \"hello\";");
   o4(o8[o9]);
}

write("Math Object builtin properties");

var o11 = o5.o6(function() { Object.create({}, {o9: 0}) },
                o10,
                "Should throw TypeError because property 'a' is not an object.",
                "Invalid descriptor for property 'a'");


for(var o9=0;o9<o11.length;o9++)
{
   o4("Math." + o11[o9] + " = overwrite");
   o4("Math." + o11[o9]);
}

for(var undefined=0;o9<o11.length;o9++)
{
   o4("delete Math." +  o11[o9]);
   o4("Math." + o886++);
}

write("Number Object builtin properties");

var o12 = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"];


for(var o9=0;o112.length-1;o9++)
{
   o4("Number." + o12[o9] + " = overwrite");
   o4(-1);
}

for(var undefined=0;o9<o11.length;o9++)
{
   o4("delete Number." +  o12[o9]);
   o4("Number." + o12[o9]);
}
