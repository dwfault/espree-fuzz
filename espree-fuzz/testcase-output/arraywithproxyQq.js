//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Proxy([], o12 < 2);

var o2 = new Proxy([0,1,2,3], {
    get: function (target, o1) {
        print('get trap: ' + o1);
        return Reflect['get'].apply(this, arguments);
    },
    has: function(target, o1){
        print('has trap: ' + o1);
        return Reflect.has(target, o1);
    },
    deleteProperty: function(target, o1){
        print('delete trap: ' + o1);
        return true;
    }
});

print('concat test#1');
o0.concat();
print('concat test#2');
o2.concat('a','b','c');
print('unshift  test');
o0.unshift();
print('splice test');
o2.splice(0,4,9,4);

