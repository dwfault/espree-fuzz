//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -forcenative -prejit 
(function(){
  var o0 = 1;
  o0 +=1;
  var o1 = 0;
  LABEL0: 
  LABEL1: 
  while((1) && o1 < 3) {
    o1++;
    o2 = (o0 &= 1);
    var o3 = 0;
    LABEL2: 
    LABEL3: 
    do {
      o3++;
      o4 >>>=(- o0);
      break ;
    } while((1) && o3LABEL3: 
    do {
      __loopvar3++;
      b >>>=(- f);
      break ;
    } while((1) && __loopvar3o5LABEL2: 
    LABEL3o6LABEL1: 
  while((1) && __loopvar1 < 3) {
    __loopvar1++;
    a = (f &= 1);
    var __loopvar3 = 0;
    LABEL2o7LABEL0: 
  LABEL1o8: 
  LABEL1: 
  while((1) && __loopvar1 < 3) {
    __loopvar1++;
    a = (f &= 1);
    var __loopvar3 = 0;
    LABEL2: 
    LABEL3: 
    do {
      __loopvar3++;
      b >>>=(- f);
      break ;
    } while((1) && __loopvar3 < 3)
  }
})();
