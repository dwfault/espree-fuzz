//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o1) { o2.o3(o1+""); }

let arguments = 'global let arguments';
print(arguments);

function o5() {
    {
        let arguments = 'let arguments block scoped';
        print(arguments);
    }
    print(arguments);
}
o5();

function o6() {
    {
        const arguments = 'const arguments block scoped';
        print(arguments);
    }
    print(arguments);
}
o6();

eval("let arguments = 'eval global let arguments'; print(arguments);");
eval("const arguments = 'eval global const arguments'; print(arguments);");


function o8() {
    let arguments = 'let arguments function scope';
    print(arguments);
}
o8();

function o9() {
    const arguments = 'const arguments function scope';
    print(arguments);
}
o9();

// OS 206284
function test() {
  (function() { /*sStart*/ ;
  {
     let o11 = arguments;
     for (let o12 = 0, arguments; o12 < 12; ++o12) {}
  };; /*sEnd*/
  })();
}
test();



