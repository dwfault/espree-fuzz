var o0;

(function() {
  eval(
    '\
    init1 = f;\
    {\
      function f() {}\
    }{ function f() {  } }'
  );
}());

if (o0 !== undefined)
  throw new Error('Wrong binding of the function.');