var o7 = null;

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
