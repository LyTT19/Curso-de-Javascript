class Pizza{
   constructor(fatia){
      this.fatia = fatia;
   }
}

var pizza = new Pizza(10);

function comerFatia(){
   pizza.fatia -= 1
}

function temFatia(){
   if(pizza.fatia > 0){
      return true
   }else{
      return false
   }
}

//Da maneira abaixo, caso o numero de fatias seja muito grande ou seja alterado tem que ser alterado 
//o codigo todo da função.

/*
function comerPizza(){
   comerFatia()
   comerFatia()
   comerFatia()
   comerFatia()
   comerFatia()
   comerFatia()
   comerFatia()
   comerFatia()
   comerFatia()
}
*/

//Na maneira abaixo, ao contrário da maneira acima independente da quantidade de fatias que a pizza tenha 
//e mesmo que seja alterada a quantidade de fatias a função consegue se adaptar a essa alteração.

/*
function comerPizza(){
   while(temFatia(true)){
      comerFatia()
   }
}
*/

comerPizza()

console.log(pizza.fatia)