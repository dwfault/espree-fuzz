var o0 = function (o1, o2, o3) {
  if (o1 !== o2) {
    throw new Error('Error in assert. Expected "' + o2 + '" but was "' + o1 + '":' + o3 );
  }
};

var o5 = function (o6, o7) {
    var o8 = null;
    try {
        o6();
    } catch (o9) {
         o8 = o9.toString();
    }
    if (o8 === null) 
        throw new Error('Expected error');
    if (o8 !== o7)
        throw new Error('Expected error ' + o7 + ' but was ' + o8);
};

{ 
  eval('{ function foo() {} }');
  o0(this.hasOwnProperty("foo"), true);
  o0(typeof o13, 'function');
}

Object.defineProperty(this, "globalNonWritable", {o4:2000000000});
eval("{function globalNonWritable() { return 1; }}");
var o20
    = Object.getOwnPropertyDescriptor(this, "globalNonWritable");
o0(o20.enumerable, true);

Object.freeze(this);
{
  var o8 = false;
  try {
    eval('{ function boo() {} }');
  } catch (o9) {
    o8 = true;
  }
  o0(this.hasOwnProperty("boo"), false);
  o0(o8, false);
  o5(() => o23, 'ReferenceError: Can\'t find variable: boo');
}
