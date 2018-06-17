//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var function (index) {
            var o26 = [
                new Promise(function() {}),
                Promise.resolve('first promise'),
                Promise.resolve('second promise'),
                Promise.reject('third promise')
            ];
            
            var o8 = Promise.race(o26);
            try {
o8.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        } = 1;
try {
switch(Math.o29()(1)) {
    case Math.cos(1):
        try {
o19 = 0;
}catch(e){}
        try {
break;
}catch(e){}
}
}catch(e){}

try {
o1.o2(o0);
}catch(e){}
