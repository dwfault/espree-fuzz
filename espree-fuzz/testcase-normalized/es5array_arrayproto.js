//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
  o2.o3(o1);
}
write("test 1");
function test()
{
    o5[0] = 1;
    write(o5[0]);
}

var o5 = [];
Object.defineProperty(Array.prototype, "0", { value:"blah", writable: false });
test();
test();

write("test 2");
function o12(){
  var o13 = [];
  o13[4] = 1; 
  Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){ return 30;}});
    
  o2.o3(o13.slice(0, 10));
};
// generate profile
o12(); 
