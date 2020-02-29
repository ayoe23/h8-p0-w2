function xo(str) {
    var jmlX = 0;
    var jmlO = 0;

    for (var i=0; i<str.length; i++)
    {
      if (str[i] === 'x')
      {
        jmlX++ ;
      }
        else
        {
          jmlX += 0;
        } 
    }    
        
    for (var j=0; j<str.length; j++)
    {
      if (str[j] === 'o')
      {
        jmlO++ ;
      }  
        else 
        {
          jmlO += 0;
        }
    }       
    
    if (jmlX === jmlO)
    {
      return true;
    }
    else
      {
        return false;
      }
}
  console.log(xo('xoxoxo'));
  console.log(xo('oxooxo'));
  console.log(xo('oxo'));
  console.log(xo('xxxooo'));
  console.log(xo('xoxooxxo'));
  
  
  
    
  
  
  
  
//   TEST CASES
//   console.log(xo('xoxoxo')); // true
//   console.log(xo('oxooxo')); // false
//   console.log(xo('oxo')); // false
//   console.log(xo('xxxooo')); // true
//   console.log(xo('xoxooxxo')); // true