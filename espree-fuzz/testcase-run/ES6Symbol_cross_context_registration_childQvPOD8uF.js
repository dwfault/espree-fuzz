//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o211 = 1;
var o27 = {
                then: function(resolve, reject) {
                    try {
o0('Test #' + index + ' - Promise.resolve calls thenable.then');
}catch(e){}
                    
                    try {
Promise.resolve('nested Promise.resolve call').then(
                        function(o10) {
                            try {
o0('Test #' + index + ' - Promise.resolve call nested within thenable.then = ' + o10);
}catch(e){}
                        }
                    );
}catch(e){}
                }
            };
var o108 = o40.slice(15);