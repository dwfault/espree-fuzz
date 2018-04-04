//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//OS 279376 : CheckinID:1304100:Exprgen:CAS:ARM::FRE:fatal error
//LowerCallArgs will handle the extraArgs. We only need to specify the position of the first argument
// i.e 1 and not 1 + extraArgs as done in other archs

var o0 = {};
o0.o1= function(){  };
o2 = {__proto__ : o0}

o2.o4 = function() {
    this.o1.apply(this, arguments);
}

o2.o4.prototype = {
        o1 : function(){
    },
}
o2.o1.apply(new o2.o4(...[1]));
o8.o9("pass");
