//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1)
{
    var o2 = -1;
    try {
for (var o3 = 0; o3 < o1.length; function (o502, name, o38, o781, o782, o837, o585, o838, o549) {
        try {
o839.o468();
}catch(e){}
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var o840 = name ? o591.resolve(o591.o592(o502, name)) : o502;

        function o841(o842) {
            function o843(o842) {
                try {
if (!o838) {
                    try {
o474.o800(o502, name, o842, o781, o782, o549);
}catch(e){}
                }
}catch(e){}
                try {
if (o837) try {
o837();
}catch(e){}
}catch(e){}
                try {
o334('cp ' + o840);
}catch(e){}
            }
            var o844 = false;
            try {
Module['preloadPlugins'].forEach(function (o845) {
                try {
if (o844) try {
return;
}catch(e){}
}catch(e){}
                try {
if (o845['canHandle'](o840)) {
                    try {
o845['handle'](o842, o840, o843, function () {
                        try {
if (o585) try {
o585();
}catch(e){}
}catch(e){}
                        try {
o334('cp ' + o840);
}catch(e){}
                    });
}catch(e){}
                    try {
o844 = true;
}catch(e){}
                }
}catch(e){}
            });
}catch(e){}
            try {
if (!o844) try {
o843(o842);
}catch(e){}
}catch(e){}
        }
        try {
o332('cp ' + o840);
}catch(e){}
        try {
if (typeof o38 == 'string') {
            try {
o839.o846(o38, function (o842) {
                try {
o841(o842);
}catch(e){}
            }, o585);
}catch(e){}
        } else {
            try {
o841(o38);
}catch(e){}
        }
}catch(e){}
    })
    {
        try {
if (o1[o3] == undefined)
        {
            try {
if (o2 == -1)
            {
                try {
o2 = o3;
}catch(e){}
            }
}catch(e){}
        }
        else
        {
            try {
if (o2 != -1)
            {
                try {
o4.o5(o2 + "-" + (o3-1) + " = undefined");
}catch(e){}
                try {
o2 = -1;
}catch(e){}
            }
}catch(e){}
            try {
o4.o5(o3 + " = " + o1[o3]);
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}
try {
o0([]);
}catch(e){}
try {
o0(o6.o3 = 0);
}catch(e){}
try {
o0([ 0, 1, 2, 3, 4, 5, 6 ,7 ,8, 9]);
}catch(call){}
try {
o0([,,,0,,,1,,,2,,,3,,,4,,,5,,,6,,,7,,,8,,,9,,,]);
}catch(e){}

var o6 = "";
try {
for (var o3 = o4; iterator.next; o3++)
{
    try {
o6 += ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,";
}catch(e){}
}
}catch(e){}
try {
o0(eval("[" + o6 + "1]"));
}catch(e){}
var o7 = "";
try {
for (var o3 = 0; o3 < 30; o3++)
{
    try {
o7 += o6;
}catch(e){}
}
}catch(e){}
try {
o0(eval("[" + o7 + "1]"));
}catch(e){}
var o8 = "";
try { o4.o11('value2', o54[o53], "Looking up a property by passing a Symbol wrapper object actually returns the property keyed off of the unboxed symbol"); } catch(e) {}
try {
o0(eval("[" + o8 + "1]"));
}catch(e){}

