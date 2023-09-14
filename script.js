let card=document.getElementsByClassName("card");
let p=document.querySelector("p");
 console.log(card);
 let colors=[];
 let random=Math.floor(Math.random()*9);
 var randomcolor=[] 

for(let i=0;i<28;i++){
  randomcolor[i]=Math.floor(Math.random()*256); 
}

let j=0;
for(let i=0;i<card.length;i++){
 
    card[i].style.backgroundColor = 'rgb(' + randomcolor[j] + ',' + randomcolor[j + 1] + ',' + randomcolor[j + 2] + ')';
    colors[i]= card[i].style.backgroundColor;
    j = j + 3;
   
}
//  console.log(randomcolor);
//  console.log(random);
p.textContent=colors[random];
console.log(colors);
 for(let i=0;i<card.length;i++){
card[i].addEventListener('click',function(){
  // alert("efef");
  // console.log(card[i]);
   console.log(card[random]);
  if(card[i].style.backgroundColor==p.textContent){
    alert("you won");
    window.location.reload();
  }else{
    alert("you loose");
  }
})
}

