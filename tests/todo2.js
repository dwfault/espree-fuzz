class MyArray extends Array{
    static get [Symbol.species](){return Array;}
}

var a = new MyArray(1,2,3);

var mapped = a.map(x => x*x);

mapped instanceof MyArray;
mapped instanceof Array;