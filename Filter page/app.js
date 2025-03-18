let value= document.getElementById("live-value");
let price=document.getElementById("price");
value.innerHTML=price.value;
price.addEventListener("input",function(){
    value.innerHTML=price.value;
});