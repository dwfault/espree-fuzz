var a = 10;
var obj = {
    a: 20,
    fn() {
        console.log(this.a);
    }
}
obj.fn();

 // 'a: 20' as a member expression could be substitute with 'fn(){...}' ? 
 // is 'fn(){...}' also a member expression ?