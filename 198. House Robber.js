function rob(n){
    const z = n.length
    if(!z) return 0
    if(z === 1) return n[0]
    const jz = Array(n+1).fill(0)
    jz[0]=n[0]
    jz[1]=Math.max(n[0], n[1])
    for(let ni=2;ni<z;ni++){
        jz[ni]=Math.max(n[ni]+jz[ni-2],jz[ni-1])
    }
    return jz[jz.length-1]
    
}