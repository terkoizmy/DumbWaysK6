const minmax = (arr) => {
    let tampung
    let hasil = []
    let min = arr[0]
    // cari min
    for (let i = 0 ; i < arr.length; i++){
        if(i !== 0 ){
            if(min > arr[i]){
            min = arr[i]
            tampung = arr.slice(i)
            } 

        } else {
        min = arr[i]
        tampung = arr.slice(i)
        }  
    }
    //cari max
    let max = tampung[0]
    for(let j = 0 ; j < tampung.length ; j++){
        if(max < tampung[j]){
            max = tampung[j]
        }
    }
    hasil.push(min , max)
    console.log(tampung+ 'ini tampung')
    return hasil
}


console.log(minmax(['h','g','a','b','d','f']))
console.log(minmax(['a','b','c','d']))