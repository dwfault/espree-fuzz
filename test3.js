var func = function(f){

    var o = {
        a: {},
        b: {
            ba:{baa:0,baba:[]},
            bb:{},
            bc:{bca:{bcaa:0, bcab :0, bcac: this}},
        }
    };
    o.b.bc.bca.bcab = 0;
    o.b.bb.bba = Object.toString(o.b.ba.bab);
}

while(true) func()