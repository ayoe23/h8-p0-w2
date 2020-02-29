function konversiMenit(menit)
{
    var sisaMenit = menit % 60; 
    var menitInput = menit - sisaMenit;
    var jam = menitInput / 60;

    if (String (sisaMenit).length === 1)
    {
        sisaMenit = '0' + sisaMenit;
    }
        var hasil = jam + ':' + sisaMenit;
        
        return String(hasil);        
}

console.log (konversiMenit(63));
console.log (konversiMenit(124));
console.log (konversiMenit(53));
console.log (konversiMenit(88));
console.log (konversiMenit(120));



//   TEST CASES
//   console.log(konversiMenit(63)); // 1:03
//   console.log(konversiMenit(124)); // 2:04
//   console.log(konversiMenit(53)); // 0:53
//   console.log(konversiMenit(88)); // 1:28
//   console.log(konversiMenit(120)); // 2:00