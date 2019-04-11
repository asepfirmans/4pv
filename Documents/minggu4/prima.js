
function angkaPrima(a) {
    var  hasil= ''
    if (a < 2) {
        hasil = 'false';
    }
    else if (a ==3 ) {
        hasil= 'true';
    }
    else if (a == 2 ) {
        hasil = 'true';
    }
    else {
        for (i = 2; i < a/2; i++) {
            hasil = 'true';
            if (a % i == 0) {
                hasil= 'false';
                i = a;
            }
        }
    }
    return hasil;
} 
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(67)); // true

