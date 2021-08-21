
//  value assigning-------------
 
function inputValues(product,memory,value){
     const memoryValue = document.getElementById(memory);
     const memoryText = memoryValue.innerText;
     memoryValue.innerText = value;
     return value;
}
//  value calculation------------------
function totalAmount(man){
   const mains = document.getElementById("total-"+man)
   const mainsText =parseInt(mains.innerText);
   return mainsText;
}

function amount(){
   const memory = totalAmount("memory");
   const storageValue = totalAmount("storage");
   const deliveyValue =totalAmount("delivery");
    
   const bestPrice = document.getElementById('best-price');
   const bestPriceText = parseInt(bestPrice.innerText);
   const totalProductMony = bestPriceText+memory+storageValue+deliveyValue;
    
    
   const total = document.getElementById('total');
   const totalText = parseInt(total.innerText);
    
   total.innerText = totalProductMony;
   const promo = document.getElementById('last-total');
   const promoCode = promo.innerText;
   promo.innerText = totalProductMony
   return totalProductMony ;
   
    

}
// promo fuction---------------------------------
function promoCode(){

   const discount =amount()*0.2;
   const discountAmount = amount()-discount;
   const promo = document.getElementById('last-total');
   const promoCode = promo.innerText;
   promo.innerText = discountAmount;



}

//  event handler add------------------------------

document.getElementById('8gp-input').addEventListener('click',function(){
const value = inputValues('8gp-input','total-memory',0);
amount();
})
document.getElementById('16gp-input').addEventListener('click',function(){
   const value = inputValues('16gp-input','total-memory',180);
   amount();
})

// storage-----------------------------------
document.getElementById('ssd1-storage').addEventListener('click',function(){
   const value = inputValues('ssd1-storage','total-storage',0);
   amount();
   
})
// 512gp storage
document.getElementById('ssd2-storage').addEventListener('click',function(){
   const value = inputValues('ssd2-storage','total-storage',100);
   amount();
  
})
// 1tb ssd storage
document.getElementById('ssd3-storage').addEventListener('click',function(){
   const value =  inputValues('ssd3-storage','total-storage',180);
   amount();
   })

// delivery-----------------------
document.getElementById('delivery-free').addEventListener('click',function(){
   const value =  inputValues('delivery-free','total-delivery',0);
   amount();
   
})
document.getElementById('delivery-payment').addEventListener('click',function(){
   const value = inputValues('delivery-payment','total-delivery',20);
   amount();
   })

// promo and button handler
document.getElementById('button-btn').addEventListener('click',function(){
   
   const inputField = document.getElementById('button-input');
   const input = inputField.value;
   if(input=="stevekaku"){
      promoCode();
      
    

   }
   
   inputField.value="";

})