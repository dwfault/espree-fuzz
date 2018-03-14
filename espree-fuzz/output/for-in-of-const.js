// Check that const variables can't be assigned to from for-in/for-of.
// https://bugs.webkit.org/show_bug.cgi?id=156673

o0 = function(o1, o2) {
    o2();
}

o3 = function(o1, o2) {
    o4 = false;
    try {
        o2();
    } catch (o5) {
    if (o5.toString() != "TypeError: Attempted to assign to readonly property.")
        throw Error("expected a TypeError, got " + o5.toString());
        o4 = true;
    }
    if (!o4)
        throw Error("expected to throw");
}

// for-in

o0("regular for-in",              function() { for (o8 in [1,2,3]) o8; });
o0("var for-in",                  function() { for (var o8 in [1,2,3]) o8; });
o0("let for-in",                  function() { for (let o8 in [1,2,3]) o8; });
o0("for-in with const variable",  function() { for (const o8 in [1,2,3]) o8; });
o0("for-in which never iterates", function() { const o8 = 20; for (o8 in []) o8; });

o3("for-in on const from func's scope", function() { const o8 = 20; for (o8 in [1,2,3]) o8; });
o3("same, with intervening capture",    function() { const o8 = 20; o9 = function() { o8; }; for (o8 in [1,2,3]) o8; });
o3("same, iterating in capture",        function() { const o8 = 20; o9 = function() { for (o8 in [1,2,3]) o8; }; o9(); });

// for-of

o0("regular for-of",              function() { for (o8 of [1,2,3]) o8; });
o0("var for-of",                  function() { for (var o8 of [1,2,3]) o8; });
o0("let for-of",                  function() { for (let o8 of [1,2,3]) o8; });
o0("for-of with const variable",  function() { for (const o8 of [1,2,3]) o8; });
o0("for-of which never iterates", function() { const o8 = 20; for (o8 of []) o8; });

o3("for-of on const from func's scope", function() { const o8 = 20; for (o8 of [1,2,3]) o8; });
o3("same, with intervening capture",    function() { const o8 = 20; o9 = function() { o8; }; for (o8 of [1,2,3]) o8; });
o3("same, iterating in capture",        function() { const o8 = 20; o9 = function() { for (o8 of [1,2,3]) o8; }; o9(); });

o3("bad destructuring",          function() { let o10 = [{o8:20}]; const o8 = 50; for ({o8xo8} of o10) o8; });
o0("good destructuring",       function() { let o10 = [{o8:20}]; const o8 = 50; for ({o8 : o11} of o10) o8; });
o0("const good destructuring", function() { let o10 = [{o9: {o9: {o9: {o9: o7}}}}]; const o8 = 50; for (const {o8xo8} of o10) o8; });
o0("let good destructuring",   function() { let o10 = [{o8:20}]; const o8 = 50; for (let {o8xo8} of o10) o8; });
// Note: `var {x}` would shadow `const x` and therefore fail.
