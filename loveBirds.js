let loveBirds = 6969  // Jumlah awal loveBirds
let day = 441 / 21  // Pergitungan Hari Untuk Lahir
let total = loveBirds

for (let i = day ; i >= 0 ; i--){ // perhitungan kelhairan/21hari lovebird
    let mati = loveBirds * 0.111 // Perhitungan mati sebelum lahir
    let ubah = Number(mati.toFixed()) // Mengubah perhitungan mati menjadi number dan membulatkan angka
    loveBirds = (loveBirds - ubah) * 2 // penambahan burung lovebird
}
console.log("  total jumlah lovebird adalah =  " +  loveBirds) // memunculkan total jumlah lovebird