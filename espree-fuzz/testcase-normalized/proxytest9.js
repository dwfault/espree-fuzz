//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o0() {
    print('test0 : Object.keys with symbols');
    var o2 = Symbol();
    var o4 = {};
    o4[o2] = "blah";

    var o5 = new Proxy(o4, {});
    o7.o8(Object.keys(o5).length);
}

function o12() {
    print('test1: Object.prototype.propertyIsEnumerable');
    var o2 = Symbol();
    var o4 = {};
    Object.defineProperty(o4, o2, { value: 5, enumerable: true });
    print(o4.propertyIsEnumerable(o2));
}

function o17() {
    print('test2: Object.getOwnPropertyDescriptor');
    var o18 = { value: new Proxy({}, {}), writable: true, enumerable: true, configurable: true};

    var o21 =
    {
        getOwnPropertyDescriptor: function () { o7.o8("getown"); return o18; }
    };

    var o5 = new Proxy({}, o21);
    o7.o8(Object.getOwnPropertyDescriptor(o5).value);

    o21.getOwnPropertyDescriptor = function () {
        o7.o8("proxy getown");
        o18.get = function () { return 5; };
        return new Proxy(o18, {  });
    }

    try {
        Object.getOwnPropertyDescriptor(o5);
        print('Expected to throw TypeError');
    } catch (o24) {
        if (o24 instanceof o25) {
            if (o24.o26 !== "Invalid property descriptor: cannot both specify accessors and a 'value' attribute") {
                print('FAIL');
            }
        } else {
            print('FAIL');
        }
    }
}

function o27(){
    var o21 = {
        has: function (target, o30) {
            print('has trap for prop :' + o30);
            return Reflect.has(target, o30);
        },

        getOwnPropertyDescriptor: function (target, o30) {
            print('getOwnPropertyDescriptor trap for prop: ' + o30);
            return new Proxy(o18, o21);
        }
    };

    var o18 = { value: 1, writable: true, configurable : true };
    o18.o32 = 1;
    var o5 = new Proxy(o18, o21);
    Object.getOwnPropertyDescriptor(o5,"a");
}

function o33() {
    var keys = ["a"];
    var o21 =
    {
        ownKeys : function() { o7.o8("plain key trap!"); return keys; },
        getOwnPropertyDescriptor: function (target, o30) {
            o7.o8("getOwn");
            return { enumerable: true, configurable: true }
        }
    };
    var o5 = new Proxy({}, o21);
    o7.o8(Object.keys(o5).length);
    o21.ownKeys = function (target, o30)
    {
        o7.o8("proxy key trap!");
        return new Proxy(keys, {});
    }
    o7.o8(Object.keys(o5).length);
}

function o35() {
    var keys = ["a"];
    var o21 =
    {
        ownKeys: function () { o7.o8("plain key trap!"); return keys; },
        getOwnPropertyDescriptor: function (target, o30) {
            o7.o8("getOwn :" + o30);
            return { enumerable: true, configurable: true }
        }
    };
    var o5 = new Proxy({}, o21);
    //WScript.Echo(Object.keys(p).length);
    o21.ownKeys = function (target, o30) {
        o7.o8("proxy key trap!");
        return { 0: "a",  2: "3", length : 2 }
    }
    o7.o8(Object.keys(o5).length);
}

function o36() {
    var o37 = [1, 2, 3];
    Math.o39.apply(null, new Proxy(o37, {
        get: function (target, o30) {
            print('get trap : ' + o30);
            if (o30 == 'length') {
                return target.length;
            }
        }
    }));
}

function o41() {
    var o21 = {
        get: function (target, o30) {
            print('get trap :' + o30);
            return Reflect.get(target, o30);
        },
        ownKeys: function (target) {
            print('ownKeys trap : ');
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor: function (target, o30) {
            print('getOwnPropertyDescriptor trap : ' + o30.toString());
            return Reflect.getOwnPropertyDescriptor(target, o30);
        }
    };

    var o43 = { o44: "blah" };
    var o45 = Object.create(o43);
    var o47 = Symbol();

    Object.defineProperty(o45, "a", { value: 5 });
    Object.defineProperty(o45, "b", { value: 5 });
    Object.defineProperty(o45, o47, { value: 5 });

    var o48 = new Proxy(o45, o21)
    var o49 = Object.create(o43, o48);
    var o50 = Object.defineProperties({}, o48);
}

function o52() {
    var test = function () { print('test') };
    var o5 = new Proxy(test, {
        has: function (target, o30) {
            print('has');
        },

        get: function (target, o30) {
            print('get : ' + o30);
            return Reflect.get(target, o30);
        }
    })
    o5.bind({});
}

function o55() {
    var test = function () { print('test'); }
    var o5 = new Proxy(test, {
        apply: function (target) {
            print('apply');
        }
    });
    o5.call();
}


// Function.bind with proxy
function o57() {
    function test() { print('test called'); }
    var o5 = new Proxy(test, {});
    var o58 = o5.bind({}, 1, 2);
    var o59 = new Proxy(o58, {});
    print(o58.name);
    print(o59.name);
    print(o5.name);
    o5();
    o58();
    o59();
}

function o61() {
    var o62 = {
        get: function (target, o63) {
            print('get trap: ' + o63);
            return Reflect.get(target, o63);
        },

        getPrototypeOf: function (target) {
            print('getPrototypeOf trap');
            return { o32: "a" };
        },

        getOwnPropertyDescriptor: function (target, o63) {
            print('getOwnPropertyDescriptor trap: ' + o63);
            return Reflect.getOwnPropertyDescriptor(target, o63);
        }
    }
    function test(o32, o65) {
    }

    var o66 = test.bind({}, 1);
    var o5 = new Proxy(test, o62);
    var o58 = o5.bind({}, 1);
    var o59 = new Proxy(o58, {});
    print(Object.getPrototypeOf(o59).o32 === "a");
    print(Object.getPrototypeOf(o58).o32 === "a");
}

function o67() {
    var o4 = {};
    Object.defineProperty(o4, "A", { get: function () { return 5; }, set: function (o69) { } });
    var o5 = new Proxy(o4, {
        getOwnPropertyDescriptor: function (target, o63) {
            print('getOwnPropertyDescriptor trap :' + o63);
            return Reflect.getOwnPropertyDescriptor(target, o63);
        },
        get: function (target, o63) {
            print('get trap :' + o63);
            return Reflect.get(target, o63);
        }
    })

    o5.__lookupGetter__("A");
    o5.__lookupSetter__("A");
}

function o72() {
    function o73() { }

    Object.defineProperty(o73, 'length', { value: 123, enumerable: true, configurable: false });
    print(o73.length);

    var o58 = new Proxy(o73, {
        ownKeys: function (target) {
            print("my proxy ownKeys");
            return Reflect.ownKeys(target);
        }
    });
    print(Object.keys(o58));
}

function o74() {
    var o58 = function() {
        this.o75 = "f1";
        this.o76 = "f2";
    }

    var o77 = new Proxy(o58, {
        construct: function (target, o79) {
            print('construct x');
            return Reflect.construct(target, o79);
        }
    });

    var o5 = new Proxy(o77, {
        construct: function (target, o79) {
            print('construct x1');
            return Reflect.construct(target, o79);
        }
    });
    var o32 = new o5();
    print(o32.o75 + ":" + o32.o76);
}


var o80 = 
{
    get  : function(target, o63) {
        print('get trap ' + o63);
        var o58 = Reflect.get(target, o63);
        if(o63 == 'constructor') 
        {
            o58 = new Proxy(o58, o80);
        }
        return o58;
    },
    construct: function(target, o81) {
        print('constructor trap');
        return Reflect.construct(target, o81);
    },
    apply : function(target, o82, o83) {
        print('apply trap'  );
        return Reflect.apply(target, o82, o83) 
    }
};
    
function o84() 
{
    var o32 = [1,2,3];
    var  o5 = new Proxy(Array, o80);
    o5.of = Array.of;
    print(o5.of(1,2));
}

function o87() 
{
    var o32 = [1,2,3];
    var o5 = new Proxy(Array, o80);
    o5.from = Array.from;
    print(o5.from([1,2]));
    
}

function o89() 
{
    function o75() { this.o58 = 1};
    // proxy of foo
    var o90 = new Proxy(o75, o80);
    
    // proxy of proxy of foo
    var o91 = new Proxy(o90, o80);
    
    // bind
    var o58 = o91.bind(1);
    
    // proxy of bound function
    var o92 = new Proxy(o58, o80);
    
    print((new o92()).o58 == 1);
}

function o93()
{
    var o94 = { o32: 'foo', o95: function () { } };
    var o5 = new Proxy(o94, o80);
    o5.o95 = o94.o95;
    // Here p.m should not be copy-prop'd from Obj.m
    o5.o95();
}

// Verify if targetFunction of bound function is a proxy to function
function o96() 
{
    function o75(o32) {
       this.o97 = o32;
     };
    var o98 = new Proxy(o75, {});
    var o5 = o98.bind();
    var o58 = new o5('def');
    print(o58.o97);
}

// Verify if targetFunction passed to Reflect.construct is a proxy to function
function o99() 
{
    function o75(o32) {this.o97 = o32;};
    var o98 = new Proxy(o75, {});
    var o5 = o98.bind();
    var o58 = Reflect.construct(o5, ["ade"]);
    print(o58.o97);
}

// Verify that constructor do return an object.
function o100() 
{
    function o75() {
        this.o32 = "b";
    }
    var o58 = new Proxy(o75, {});
    var o92 = new o58();
    print(o92.o32);
}

// some basic test262 test cases
function o101(){
    
    //1. Proxy.length is configurable
    var o58 = Object.getOwnPropertyDescriptor(Proxy, 'length');
    print('value : ' + o58.value);
    print('configurable : ' + o58.configurable);
    print('writable : ' + o58.writable);
    print('enumerable : ' + o58.enumerable);
    
    var revocable = Proxy.revocable({}, {});
    var o103 = revocable.o104;
        
    //2. Revoke function's properties
    print(Object.prototype.hasOwnProperty.call(o103, "prototype"));
    print(Object.prototype.hasOwnProperty.call(o103, "name"));
        
     //3. Revoked proxy passed as target/handler
    revocable.o104();
    try {
        var o58 = new Proxy({}, revocable.o107);
    } catch(o24) {
        print('expected :' + o24.o26);
    }

    try{
        var o58 = new Proxy(revocable.o107,{});
    } catch(o24) {
        print('expected :' + o24.o26);
    }

    //4. Proxy doesn't have prototype
    print('Proxy.prototype = ' + Object.hasOwnProperty.call(Proxy, 'prototype'));

    //5. Reflect.defineProperty should not throw if target already has a property
    Reflect.defineProperty(Object.defineProperty({},"x", {value:1}), "x", {value : 2});
        
        
    
    print('done test22');
}

// Verify that Object.setPrototype takes null as newPrototype value
function o108() 
{
   var o107 = new Proxy(function() {}, {});
   Object.setPrototypeOf(o107, null);
   print('test23 done.');
}

// Verifies ownPropertyNames, ownPropertySymbols
function o110()
{
    var o4 = {};
    var o111 = Symbol('b');
    var o112 = Symbol('c');
    Object.defineProperty(o4, 'a', { value: 5, enumerable : true });
    Object.defineProperty(o4, o111, { value: 5, enumerable: true });
    Object.defineProperty(o4, o112, { value: 5, enumerable: false });
    var o107 = new Proxy(o4, {});
    var o113 = Object.getOwnPropertyNames(o107);
    var o115 = Object.o116(o107);
    var o117 = Reflect.ownKeys(o107);
    
    print('*** ownPropertyNames');
    for (var o5 in o113) {
        print(o113[o5].toString());
    }
    
    print('*** ownPropertySymbols');
    for (var o5 in o115) {
        print(o115[o5].toString());
    }
    
    print('*** ownKeys');
    for (var o5 in o117) {
        print(o117[o5].toString());
    }
}

function o118() {
    // CreateDynamicFunction -> GetPrototypeFromConstructor -> Get -> [[Get]]
    var get = [];
    var o5 = new Proxy(Function, { get: function(o4, o120) { get.push(o120); return o4[o120]; }});
    new o5;
    for (var o58 in get) {
        print(get[o58].toString());
    }
    print(get.length);
    print(get);
}

function o122(){
    // SerializeJSONObject -> EnumerableOwnNames -> [[OwnPropertyKeys]]
    var o123 = 0;
    var o5 = new Proxy({}, { ownKeys: function(o4) { o123++; return Object.keys(o4); }});
    JSON.stringify({ o32: o5, o65: o5 });
    print(o123);
    print(o123 === 2);
}

// has, deleteproperty, methodhelper
function o126() 
{   
    var o80 = {
        get: function(target, o63){
            print('getTrap, property : ' + o63);       
            if(o63 == 'foo123'){
                return function() {print('foo called'); return 23;}
            }
            return Reflect.get(target, o63);
        },
        has: function(target, o63){
            print('hasTrap, property : ' + o63);
            return Reflect.has(target, o63);
        },
        deleteProperty: function (target, o63) {
            print('deleteTrap, property : ' + o63);
            return Reflect.deleteProperty(target, o63);
        }

    };
    
    // try to have different properties for below test cases
        
        var o58 = 'foo123';
        var o92 = 'bar123';
        var o4 = {};
        var o5 = new Proxy(o4, o80);
        Reflect.has(o5, 'p1');
        'p2' in o5;
        Reflect.deleteProperty(o5, 'p3');
        typeof o5[o92];
        o5[o58]();
}

// Set property problem
function o128(){
     var o50 = { o5: 43 };
    var o129 = { o5: 44 };
    var o130 = Reflect.set(o50, 'p', 42, o129);
    print(o50.o5);
    print(o129.o5);
}

function o131() {
    // CreateDynamicFunction -> GetPrototypeFromConstructor -> Get -> [[Get]]
    var get = [];
    var o5 = new Proxy(Function, {});
    var o132 = new o5('b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', "return 1;");
    if (o132.length != 9)
    {
        print('FAIL');
    }  
}

function o133() {
    var o4 = Proxy.revocable([], {});
    o4.o104();
    try {
        Array.prototype.concat.call(o4.o107);
    } catch(o24) {
        print('expected :' + o24.o26);
    }
    
    try {
        Array.prototype.join.call(o4.o107, o4.o107);
    } catch(o24) {
        print('expected :' + o24.o26);
    }

    try {
        Object.prototype.toString.call(o4.o107);
    } catch(o24) {
        print('expected :' + o24.o26);
    }

    try {
        function o75() {return this;}
        var o5 = Proxy.revocable(o75, {});
        o5.o104();
        var o136 = new o5.o107();
    } catch(o24) {
        print('expected :' + o24.o26);
    }
}
o0();
o12();
o17();
o27();
o33(); 
o35();
o36();
o41();
o52();
o55();
o57();
o61();
o67();
o72();
o74();
o84();
o87();
o89();
o93();
o96();
o99();
o100();
o101();
o108();
o110();
o118();
o122();
o126();
o128();
o131();
o133();
