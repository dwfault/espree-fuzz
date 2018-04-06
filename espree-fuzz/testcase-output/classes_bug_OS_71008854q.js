//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// OS 7100885: With -maxsimplejitruncount:4 -maxinterpretcount:4, crashes due to incorrect profile data

class o0 { }
for (var o1 = 0; o1 < 10; o1++) {
  class o2 extends o0 {
    constructor() {
      super(this.o607);
      o0 = Boolean;
    }
  }
  new o2()
  new o2()
}

print('pass');
