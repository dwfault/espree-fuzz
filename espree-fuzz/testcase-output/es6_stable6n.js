//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// uses es6 default parameter values as validation for ES6 'stable' features

var o34 = new Proxy(o32, {
                get : function (target, o38){
                    o33.push(o38.toString());
                    return Reflect.get(target, o38);
                }
            });
o0(o12 += (o4.o5[-1] = -o4.o5[-1] - 1, o4.o5[-1]));
