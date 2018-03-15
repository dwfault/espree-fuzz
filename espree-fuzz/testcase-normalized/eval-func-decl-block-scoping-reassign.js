var o0 = function (o1, o2, o3) {
  if (o1 !== o2) {
    throw new Error('Error in assert. Expected "' + o2 + '" but was "' + o1 + '":' + o3 );
  }
};

{
  function o5() {
    return 'first declaration';
  }
}

eval(
  '{ function f() { return "second declaration"; } }'
);

o0(typeof o5, 'function', ' #1');
o0(o5(), 'second declaration', ' #2');