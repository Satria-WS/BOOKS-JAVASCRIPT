
const item = [0,1];
const zero = 0;

function fibonacciGenerator(n) {
   for(var i = 0; i < n ; i++) {
       const x = item[item.length - 1];
       const y = item[item.length - 2];
       const sum = x + y ;
       item.push(sum);
       return item;
       
   }    
}


