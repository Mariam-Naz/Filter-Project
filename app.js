var All=['./cakes/cake-1.jpg','./cakes/cake-2.jpg','./cakes/cake-3.jpg','./cakes/cake-4.jpg','./buiscuits/biscuit-1.jpg','./buiscuits/biscuit-2.jpg','./buiscuits/biscuit-3.jpg','./buiscuits/biscuit-4.jpg','./ice_cream/ice-cream-1.jpg','./ice_cream/ice-cream-2.jpg','./ice_cream/ice-cream-3.jpg','./ice_cream/ice-cream-4.jpg'];
 
for(var i=1;i<=12;i++){
document.querySelectorAll('img')[i].addEventListener('click',function (){
  console.log(All.indexOf(this.getAttribute('src')));
    // document.querySelector('body').classList.add('hide-scroll');
    document.querySelector('.model-img').classList.remove('pop-hide');
  document.querySelector(".pop").setAttribute('src',this.getAttribute('src'));
  document.querySelectorAll('section')[0].classList.add('dark');
  document.querySelectorAll('section')[1].classList.add('dark');
  const str = All.indexOf(this.getAttribute('src')); 
  var count = str;
 
  document.querySelectorAll('button')[4].addEventListener('click',function(){
    if(count==11){
      count=-1;
    }
    document.querySelector(".pop").setAttribute('src',All[count+1]);
    count++;
  });

});
}



// for(i=0;i<=11;i++){
//   if(All[i]==str){
//     var cur = i;
//   }
// }


// document.addEventListener('click',()=>{
//     document.querySelector('body').classList.remove('hide');
//     document.querySelector('.model-img').classList.add('pop-hide');
// });