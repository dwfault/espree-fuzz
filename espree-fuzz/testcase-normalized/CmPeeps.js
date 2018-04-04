//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1,o2)
{
    if (o1==10 && o2++,o1)
    {
    }
    else
    {
        o3.o4("FAILED");
    }
}
o0(9, 0);

// - At 'o.p && 1', 'BrTrue 1' is const-folded to 'Br' to the loop exit block with the 'break'
// - 'a' becomes live as a float on the right side of '||' and is only live as an int on the left side
// - Since both of those blocks are predecessors to the loop exit block with the 'break', 'a' is kept live as a float on exit
//   out of the loop
// - When compensating in the 'BrTrue 1' block, we don't need an airlock block to convert 'a' to a float only on exit out of the
//   loop because that branch was already const-folded into 'Br' and always flows into the exit block
function o5() {
    var o1 = { o6: 0 };
    var o7 = 0;
    for(var o2 = 0; o2 < 2; ++o2) {
        o7 = 1;
        if(o1.o6 && 1 || (o7 /= 2))
            break;
    }
}
o5();
o5();

function o8(){
  var o9 = new Array(10);
  var o11 = -1;
  var o12 = 1;
  var o13 = 1;
  o9[o9.length-1] = 1;
  o9.length = 100;
  o13 =((o12 < o11)||(o13 < o11));
  if(o13)
        o11=((o12 < o11));
  o11 =((o12 < o11)) + o13;
  o9[o9.length-1];
};

o8();
o8();
o8();

o3.o4("Passed");
