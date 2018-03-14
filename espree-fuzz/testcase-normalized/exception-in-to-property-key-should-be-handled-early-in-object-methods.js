
var o0 = {
    toString() {
        throw new Error("propertyKey.toString is called.");
    }
};

function o3(o4, o5) {
    var o6 = null;
    try {
        o4();
    } catch (o7) {
        o6 = o7;
    }
    if (!o6)
        throw new Error("not thrown.");
    if (String(o6) !== o5)
        throw new Error("bad error: " + String(o6));
}

var o9 = {};

o3(function () {
    o9.hasOwnProperty(o0);
}, "Error: propertyKey.toString is called.");

o3(function () {
    Object.prototype.hasOwnProperty.call(null, o0);
}, "Error: propertyKey.toString is called.");

o3(function () {
    Object.prototype.hasOwnProperty.call(null, 'ok');
}, "TypeError: null is not an object (evaluating 'Object.prototype.hasOwnProperty.call(null, 'ok')')");

o3(function () {
    o9.propertyIsEnumerable(o0);
}, "Error: propertyKey.toString is called.");

// ToPropertyKey is first, ToObject is following.
o3(function () {
    Object.prototype.propertyIsEnumerable.call(null, o0);
}, "Error: propertyKey.toString is called.");

o3(function () {
    // ToPropertyKey is first, ToObject is following.
    Object.prototype.propertyIsEnumerable.call(null, 'ok');
}, "TypeError: null is not an object (evaluating 'Object.prototype.propertyIsEnumerable.call(null, 'ok')')");

o3(function () {
    o9.__defineGetter__(o0, function () {
        return 'NG';
    });
}, "Error: propertyKey.toString is called.");

if (Object.getOwnPropertyDescriptor(o9, ''))
    throw new Error("bad descriptor");

o3(function () {
    o9.__defineSetter__(o0, function () {
        return 'NG';
    });
}, "Error: propertyKey.toString is called.");

if (Object.getOwnPropertyDescriptor(o9, ''))
    throw new Error("bad descriptor");

o3(function () {
    o9.__lookupGetter__(o0);
}, "Error: propertyKey.toString is called.");

o3(function () {
    o9.__lookupSetter__(o0);
}, "Error: propertyKey.toString is called.");
