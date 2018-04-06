//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o13 = 0;

var o9 = new Proxy([0,1,2,3], {
    get: function (target, o4) {
        print('get trap: ' + o4);
        return Reflect['get'].apply(this, arguments);
    },
    has: function() {
            var o14 = o0.o4();
            var o159 = 303;
            Object.defineProperty(o14, o159, {
                set: function(o94) { return 100; },
                configurable: true
            });
            o40.o52(true, delete o14[o159], "delete should succeed on configurable accessor property");
            o14[o159] = 200;
            o40.o52(200, o14[o159]);
        },
    undefined: function(target, o4){
        print('delete trap: ' + o4);
        return true;
    }
});

print(undefined);
o0.concat({
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: { o6: -this.o5[0].o6 - 1 } });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    });
print(undefined);
o9.concat('a','b','c');
print('unshift  test');
o0.unshift();
print('splice test');
o9.splice(0,4,9,4);

