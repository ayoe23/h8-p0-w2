console.log('-------------------------------');
console.log('No.1 - Soal WHILE'); 
console.log('-------------------------------');


console.log('LOOPING PERTAMA');

var deret = 2;

while(deret <= 20) 
{ 
  console.log(deret + ' - I Love Coding' )
  deret += 2;   
}


console.log('LOOPING KEDUA');

var deret = 20;

while(deret >= 2) 
{ 
  console.log(deret + ' - I will become fullstack developer');
  deret -= 2;   
}


console.log('');
console.log('');

console.log('----------------------------');
console.log('No.2 - Soal FOR');
console.log('----------------------------');


console.log('LOOPING PERTAMA');

for(var deret = 1; deret <= 20; deret++) 
{  
  console.log(deret + ' - I Love Coding');
}


console.log('LOOPING KEDUA');

for(var deret = 20; deret > 0; deret--)
{
  console.log(deret + ' - I will become fullstack developer'); 
}


console.log('');
console.log('');

console.log('------------------------------------------------------------');
console.log('No.3 - Soal Ganjil/Genep (Perulangan Ganjil Genap)');
console.log('------------------------------------------------------------');


var counter = 1;
   		var akhir = 100;
       while( counter <= akhir ){
   		if(counter % 2 == 0)
   		{
   			console.log(counter + ' adalah bilangan GENAP');
      } 
       else
   		{
   			console.log(counter + ' adalah bilangan GANJIL');
   		}
   		counter++;
   	}


console.log('');
console.log('');     


console.log('------------------------------------------------------------');
console.log('No.3 - Soal Ganjil/Genep (PERULANGAN KELIPATAN 3, 6, 9)');
console.log('------------------------------------------------------------');


for (var i=1; i<=100; i+=2) 
{
  if(i % 3 == 0){
    console.log(i +' Kelipatan 3 ' );
  }  
}

for (var i=1; i<=100; i+=5) 
{
  if(i % 6 == 0){
    console.log(i +' Kelipatan 6 ' );
  }  
}

for (var i=1; i<=100; i+=9) 
{
  if(i % 10 == 0){
    console.log(i +' Kelipatan 10 ' );
  }  
}