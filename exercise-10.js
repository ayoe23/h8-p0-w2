
function bandingkanAngka(angka1, angka2)
{
    if (angka1 > angka2){
        return false;
    }
     else if (angka1 < angka2){
         return true;
     }
        else{
            return -1;
     }
}

var angka1 = 5  ;
var angka2 = 8 ;

var hasilbanding = bandingkanAngka(angka1, angka2);

console.log(hasilbanding);

