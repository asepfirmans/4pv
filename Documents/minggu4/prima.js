
function angkaPrima(a) {
    var  hasilCek= ''
    if (a < 2) {
        hasilCek = 'false';
    }
    else if (a ==3 ) {
        hasilCek = 'true';
    }
    else if (a == 2 ) {
        hasilCek = 'true';
    }
    else {
        for (i = 2; i < a/2; i++) {
            hasilCek = 'true';
            if (a % i == 0) {
                hasilCek = 'false';
                i = a;
            }
        }
    }
    return hasilCek;
} 
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(67)); // true

