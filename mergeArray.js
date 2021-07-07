let array1 = ['a','b','c']
let array2 = ['c','c','d','e'];
let array3 = array1.concat(array2);
array3 = array3.filter((item,index)=>{
   return (array3.indexOf(item) == index)
})