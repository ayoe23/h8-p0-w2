console.log('-------------------------------');
console.log('No.1 - Menyusun Barisan Bintang');
console.log('-------------------------------');

var rows1;
for (rows1=1; rows1<=5; rows1++)
{
    console.log('*');
}


console.log('------------------------------------------------------');
console.log ('No.2 - Menyusun Barisan Bintang Dengan Nested Looping');
console.log('------------------------------------------------------');

    for (var a=1; a<=5; a++)
    {
      var bintang = '';

      for(b=1; b<=5; b++)
      {
        bintang += '*';
      }
		console.log(bintang);
	}
           

console.log('---------------------------------------------------------');
console.log ('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
console.log('---------------------------------------------------------');    

for (var a=0; a<5; a++)
    {
      var bintang = '';

      for(b=0; b<=a; b++)
      {
        bintang += '*';
      }
		console.log(bintang);
	}