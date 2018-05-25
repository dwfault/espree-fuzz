arr1 = ['a', 'b', 'c'];
arr2 = ['1', '2', '3'];

/*
arr1.splice(2, 0, arr2);
console.log(arr1);                                  // ['a', 'b', ['1', '2', '3'], 'c']
*/

/*
arr2.unshift(2, 0);                                 // [ 2, 0, '1', '2', '3' ]
console.log(arr2);

//Array.prototype.splice.apply(arr1, [2, 0, '1', '2', '3']);
//Array.prototype.splice.call(arr1, 2, 0, '1', '2', '3');
Array.prototype.splice.apply(arr1, arr2);
console.log(arr1);                                  // [ 'a', 'b', '1', '2', '3', 'c' ]
*/


arr1.splice(2, 0, ...arr2);
console.log(arr1);                                  // [ 'a', 'b', '1', '2', '3', 'c' ]