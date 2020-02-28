console.log('-------------------------------');
console.log('No.1 - Penggunaan Function');
console.log('-------------------------------');

function shoutOut ()
{
    console.log('Halo Function!');
}
    shoutOut();

console.log('');
console.log('');


console.log('-------------------------------');
console.log('No.2 - Penggunaan Function');
console.log('-------------------------------');

var num1 = 5;
var num2 = 6;

function calculateMultiply(num1, num2)
{
    return num1 * num2;
}
    const hasilPerkalian = calculateMultiply (num1, num2);
    console.log(hasilPerkalian);


console.log('');
console.log('');


console.log('-------------------------------');
console.log('No.3 - Penggunaan Function');
console.log('-------------------------------');

var name = 'Ayu';
var age = 3;
var address = 'Jln.Manggala II - Makassar';
var hobby = 'Dengar Musik';

function processSentence(name, age, address, hobby)
{
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, '+ 'alamat saya di '+ address + ' ,dan saya punya hobby yaitu '+ hobby + '!';
}
    var fullSentences = processSentence (name,age,address,hobby);
    console.log(fullSentences);
