var o0 = function (o1, o2, o3) {
    if (o1 !== o2) {
        throw new Error('Error in assert. Expected "' + o2 + '" but was "' + o1 + '":' + o3 );
    }
};

var o5 = function (o6, o2) {
    let o7 = null;
    try {
        o6();
    } catch(o8) {
        o7 = o8;  
    }
    if (o7 === null) {
        throw new Error('Error is expected. Expected "' + o2 + '" but error was not thrown."');
    }
    if (o7.toString() !== o2) {
        throw new Error('Error is expected. Expected "' + o2 + '" but error was "' + o7 + '"');
    }
};

var o10 = 'foo';
var o11 = false;
// FIXME: According to spec foo should have value 'undefined', 
// but possible it would be changed https://github.com/tc39/ecma262/issues/753 
eval("success = foo === 'foo'; { function foo(){} }");

o0(o11, true);

o11 = false;

let o13 = 'boo';
eval("success = boo === 'boo'; { function boo(){} } success = success && boo === 'boo';");

o11 = o11 && o13 === 'boo';

o0(o11, true);
