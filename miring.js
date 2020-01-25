const drawline =  (text) => {
    let space = '' // pengaturan jarak
    for (var i = 0 ; i < text.length; i++){
        if(text[i] != undefined){
        space += '   ' //kalo kurang miring tambah spasi :D
        console.log(space + text[i])
        }
    }
    
}

console.log(drawline('DUMBWAYS'))
console.log(drawline('DUMBWAYS'))