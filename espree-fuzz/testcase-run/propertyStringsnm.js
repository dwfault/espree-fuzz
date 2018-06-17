//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o51 = "15";
var o12 = {
                        get __proto__() { try {
return "proto";
}catch(e){} },
                        set __proto__(value) { try {
this.o17 = value;
}catch(e){} }
                    }

try {
o1();
}catch(e){}

try {
o4();
}catch(e){}

try {
for (var index = 0; index < o0.length; index++)
{
    try {
o5.o6(o0[index]);
}catch(e){}
}
}catch(e){}
