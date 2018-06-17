//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

class o23 {
                constructor() {
                    var o29 = () => {
                        try {
o5.o24(new.target === o23, "new.target === SimpleBaseClass");
}catch(e){}

                        try {
o22 = true;
}catch(e){}
                    }

                    try {
o29();
}catch(e){}
                }
            };  
var o1 = o0.then((o2) => { try {
return o2 + 1;
}catch(e){} }); // 5  

var o3 = new Promise((resolve, reject) => resolve(10));

var o331 = undefined;
var o5 = e;
var o99;

function o7()
{
    try {
o0.then((o2) => o4 = o2);
}catch(e){}
    try {
o1.then((o2) => o5 = o2);
}catch(e){}
    try {
o3.then((o2) => o6 = o2);
}catch(e){}
    
    try {
o8.o9(o10, 50);
}catch(e){}
}

try {
o8.o9(o7, 50);
}catch(e){}

function o10()
{            
    try {
o11(`v1: ${o4}`, true);
}catch(e){} //5
    try {
o11(`v2: ${o5}`, true);
}catch(e){} //6
    try {
o11(`v3: ${o6}`, true);
}catch(e){} //10
}


