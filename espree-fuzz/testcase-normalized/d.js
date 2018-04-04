//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {

  function o1() {
    
    const o2 = {o3: 1, o4: 2, o5: 3, };  //extra ,
    return ( o2.o3 === 1 && o2.o4 === 2 && o2.o5 === 3 );
  }
  try {
    return o1(); 
  }
  catch (o6) {
    return false;
  }
}


o7.o8(o0());
