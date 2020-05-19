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

  document.querySelectorAll('button')[5].addEventListener('click',function(){
    if(count==0){
      count=12;
    }
    document.querySelector(".pop").setAttribute('src',All[count-1]);
    count--;
  });

  document.querySelectorAll('button')[6].addEventListener('click',function(){ 
    document.querySelector('.model-img').classList.add('pop-hide');
    document.querySelectorAll('section')[0].classList.remove('dark');
    document.querySelectorAll('section')[1].classList.remove('dark');
});
});
}
