class Cart{
  //What is the first part of every class? Type it below.
constructor (item, quantity){
  this.itemList = item; // An array that contains pre-made item-objects.
  this.itemQuatity = quantity; // An array that stores how many of each corresponding item you have in the cart.
}
  //Type the instance functions below this comment.
additem(i,q){
  this.itemList.push(i);
  this.itemQuantity.push(q);

  }
totalcart(){
  let total=0
  for (a=0; a<this.itemList[].length;a++){
  let total =let total+this.itemList[a].price*this.itemQuantity[a];
    }
  return totalcart;
  }
subcart(days){
  this.days = days
  for()
  return subcart;
  }
}   
