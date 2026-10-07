const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan Nilai:", function(Nilai) {
    Nilai = parseInt(Nilai);
    if (isNaN(Nilai)) {
        console.log("Input tidak valid. Masukkan angka.");
    } else if (Nilai >= 85) {
        console.log("Nilai : A");
    } else if (Nilai >= 70 && Nilai < 85) {
        console.log("Nilai : B");
    } else if (Nilai >= 55 && Nilai < 70) {
        console.log("Nilai : C");
    } else if (Nilai >= 40 && Nilai < 55) {
        console.log("Nilai : D");
    } else if (Nilai < 40) {
        console.log("Nilai : E");
    }
    rl.close();
});
