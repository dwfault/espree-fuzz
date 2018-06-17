//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test function names showed in stack trace.
//

var o693 = (o82 === o249.length - 1)

try {
if (this.o2 && this.o2.o5) {
    try {
this.o2.o5("TrimStackTracePath.js");
}catch(e){}
}
}catch(e){}

try {
try {
    var o67 = function() {
        try {
throw new Error("My Error!");
}catch(e){}
    };

    function o7(){
        try {
o6();
}catch(e){}
    }

    var o8 = new Function("func();");

    function o9(){
        try {
(function(){
            try {
eval("constructed();");
}catch(e){}
        })(function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    try {
resolve('chain:success1');
}catch(e){}
                }
            );
            
            try {
promise.then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #1 called with result = ' + o10);
}catch(e){}
                    
                    try {
return new Promise(
                        function(resolve,reject) {
                            try {
resolve('chain:success2');
}catch(e){}
                        }
                    );
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                }
            ).then(
                function(o10) {
                    try {
o0('Test #' + index + ' - Success handler #2 called with result = ' + o10);
}catch(e){}
                },
                function(o11) {
                    try {
o0('Test #' + index + ' - Error handler #2 called with err = ' + o11);
}catch(e){}
                }
            );
}catch(e){}
        });
}catch(e){}
    }

    try {
o9();
}catch(e){}

} catch(o10) {
    try {
o0(o11(o10.o12));
}catch(e){}
}
}catch(e){}
