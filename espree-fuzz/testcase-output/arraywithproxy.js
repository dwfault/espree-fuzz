//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Proxy([], {
    get: function (target, o4) {
        print('get trap: ' + o4);
        return Reflect['get'].apply(this, arguments);
    }
});

var o9 = new Proxy([0,1,2,3], {
    get: function (target, o4) {
        print('get trap: ' + o4);
        return Reflect['get'].apply(this, arguments);
    },
    has: function(target, o4){
        print('has trap: ' + o4);
        return Reflect.has(target, o4);
    },
    deleteProperty: function(target, o4){
        print('delete trap: ' + o4);
        return true;
    }
});

print('concat test#1');
o0.concat();
print('concat test#2');
o9.concat('a','b','c');
print('unshift  test');
o0.unshift();
print('splice test');
o9.splice(0,4,9,4);

