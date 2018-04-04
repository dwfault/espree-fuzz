//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){
  if((function () {;})) {
  }
};

// generate profile
o0();
o0();
o0();
o0();

// run JITted code
o1 = true;
o0();
o0();
o0();
o0();



