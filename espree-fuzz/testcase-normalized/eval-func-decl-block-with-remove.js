var o0 = function (o1, o2, o3) {
  if (o1 !== o2) {
    throw new Error('Error in assert. Expected "' + o2 + '" but was "' + o1 + '":' + o3 );
  }
};

function o5() {
    function o6() { 
        return typeof o7; 
    }
    eval("{ assert(boo(), 'undefined'); delete a; assert(boo(), 'undefined'); function a() { return 'text-a'; } assert(boo(), 'function');} ");
}
o5(); 

for (let o9 = 0; o9 < 10000; o9++) {
    o5();
}