var o0 = function (o1, o2, o3) {
    if (o1 !== o2) {
        throw new Error('Error in assert. Expected-' + o2 + ' but was' + o1 + ':' + o3 );
    }
};

var o5;

(function() {
  eval(
    '{\
      function f() {\
        return "first declaration";\
      }\
    }if (true) function f() { return "second declaration"; } else function _f() {}updated = f;'
  );
}());

o0(typeof o5, 'function', "#1");
o0(o5(), 'second declaration', "#2");
