//@ if ($architecture != "x86-64") or $memoryLimited then skip else runDefault end

var o7 = 0;                                                                         
try
{
  for (o1=0; o1<25; o1++)                                                   
    o0 += o0;                                                            
                                                                         
  var o2=new Function(                                                   
    o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0,
    o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0,
    o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0, o0,
    o0, o0, o0, o0, o0, o0, o0, o0, o0, o0,                              
    "done"
    );
} catch(o4) {
}
