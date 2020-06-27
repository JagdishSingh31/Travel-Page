/*--------NavMenu------------*/

document.querySelector(".fa-bars").addEventListener("click",menu);

function menu(){
    document.querySelector(".nav-bar").style.height="370px";
    document.querySelector(".fa-bars").style.display="none";
   document.querySelector(".fa-times").style.display="block";
   
}

document.querySelector(".fa-times").addEventListener("click",Close);

function Close(){
    document.querySelector(".nav-bar").style.height="70px";
    document.querySelector(".fa-bars").style.display="block";
   document.querySelector(".fa-times").style.display="none";
   
}


/*------------MAP-------------*/

//-------ImageSlider----------//
var database={
        "0":"image/Gallery1.jpg",
        "1":"image/Gallery2.jpg",
        "2":"image/Gallery3.jpg"
};
var img=document.createElement("img");
img.src=database[0]
document.querySelector(".gallery").appendChild(img);

function slider(){
   var index=0;
   document.querySelector(".gallery").appendChild(img);
   setInterval(function(){
   
document.getElementById(index).style.background="rgba(0,0,0,0.5)";
    img.src=database[index]
     document.querySelector(".gallery").appendChild(img);
      
         index++; 
       if(index>=3){
           slider();
           index=0
           var i,x
          x=document.querySelectorAll(".dot");
          for(i=0;i< x.length;i++){
           x[i].style.background="rgba(255,255,255,0.5)";
            
              }
          }
      
       
   },5000)
   var i,x
          x=document.querySelectorAll(".dot");
          for(i=0;i< x.length;i++){
           x[i].style.background="rgba(255,255,255,0.5)";
            
          }
}
slider()