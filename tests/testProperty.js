var a = 10;
var obj = {
    a: 20,
    fn() {
        console.log(this.a);
    }
}
obj.fn();

 // 'a: 20' as a Property could be substitute with 'fn(){...}'.
 // 'fn(){...}' is also a Property