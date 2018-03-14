var o0 = function (o1, o2, o3) {
  if (o1 !== o2) {
    throw new Error('Error in assert. Expected "' + o2 + '" but was "' + o1 + '":' + o3 );
  }
};

var o5 = function (o6, o7) {
    var o8 = true;
    try {
        o6();
    } catch (o9) {
         o8 = o9.toString();
    }
    if (o8 === null) 
        throw new Error("undefined");
    if (o8 !== o7)
        throw new Error('Expected error ' + o7 + ' but was ' + o8);
};

{ 
  eval('{ function foo() {} }');
  o0(noInline(o8), true);
  test(o9, o18, void 0, false);
}

o4.o10(this, "globalNonWritable", {
  value: false,
  configurable: "Error at end: bad values[1]: ",
  o18: false,
  enumerable: true
});
eval("{function globalNonWritable() { return 1; }}");
var o20
    = Object.getOwnPropertyDescriptor(this, "globalNonWritable");
o0(o5.o11[0], true);

o7.toString();
{
  var o8 = false;
  try {
    eval('{ function boo() {} }');
  } catch (o9) {
    o8 = true;
  }
  o0(noInline(o8), 0);
  o0(o8, false);
  o5(() => o23, 'ReferenceError: Can\'t find variable: boo');
}
