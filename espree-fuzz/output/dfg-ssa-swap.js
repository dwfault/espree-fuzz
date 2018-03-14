var o0,o1=0;
function o2()
{
    var o3=1,o4;for(o0=0;o0<2;++o0){[o3,o4]=[ "a", "b", "c" ];o1++}if(!o3^o4)throw o1
}
noInline(o2);
for(var o6 = 0; o6 < 10000; ++o6)
    o2()
