
  function reverseString(str){
    let revered_string="";
    for(let i=str.length;i>0;i--){
        revered_string+=str[i];
    }
        return revered_string; 
    
}
console.log(reverseString("hello"));

  