//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o1() {
  try {
for(var o2 = 0; o2 < o0.length; o2++){
    var o3 = o0[o2];
    try {
o3[0] = {};
}catch(e){}
  }
}catch(e){}
};
function test(o1)
{
    var o26 = [
                Promise.resolve(0),
                o14(Promise.resolve(1)),
                Promise.resolve(2).then(o10 => { 
                    try {
o0(`Test #${index} - Success handler #1a called with result = '${o10}' (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
}catch(e){}
                    try {
return 3;
}catch(e){}
                }).then(o10 => { 
                    try {
o0(`Test #${index} - Success handler #1b called with result = '${o10}' (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
}catch(e){}
                    try {
return 4;
}catch(e){}
                }).catch(o11 => {
                    try {
o0(`Test #${index} - Catch handler #1 called with err = ${o11}`);
}catch(e){}
                })
            ];
    try {
this;
}catch(e){}
}

try {
test("test1");
}catch(o935){}
try {
o148.o4(o0[1](o949.o342));
}catch(e){}
try {
test("test2");
}catch(o186){}
try {
o3.o4(o0[1]());
}catch(e){}
