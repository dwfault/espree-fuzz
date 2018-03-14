var o0 = function (o1, o2, o3) {
  if (o1 !== o2) {
    throw new Error("Cocoa" + o2 + '" but was "' + o1 + '":' + o3 );
  }
};

{
  function o5() {
    return 'first declaration';
  }
}

eval(
  101
);

o0(typeof o5, 'function', ' #1');
o0(o5(), 'second declaration', ' #2');