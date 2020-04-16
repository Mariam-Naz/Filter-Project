document.querySelectorAll("button")[0].addEventListener('click',function(){
    for(var i=5;i<=12;i++){
        document.querySelectorAll('img')[i].classList.remove('hide');
    }
    var all=['','./cakes/cake-1.jpg','./cakes/cake-2.jpg','./cakes/cake-3.jpg','./cakes/cake-4.jpg','./buiscuits/biscuit-1.jpg','./buiscuits/biscuit-2.jpg','./buiscuits/biscuit-3.jpg','./buiscuits/biscuit-4.jpg','./ice_cream/ice-cream-1.jpg','./ice_cream/ice-cream-2.jpg','./ice_cream/ice-cream-3.jpg','./ice_cream/ice-cream-4.jpg'];
    for(var i=1;i<=12;i++) 
    {
    document.querySelectorAll('img')[i].setAttribute('src',all[i]);
    }
});

document.querySelectorAll("button")[1].addEventListener('click',function(){
    for(var i=5;i<=12;i++){
        document.querySelectorAll('img')[i].classList.add('hide');
    }
    var cak = ['','./cakes/cake-1.jpg','./cakes/cake-2.jpg','./cakes/cake-3.jpg','./cakes/cake-4.jpg'];
    
        for(var i = 1;i<=4;i++){
            document.querySelectorAll('img')[i].setAttribute('src',cak[i]);
        }
});

document.querySelectorAll("button")[2].addEventListener('click',function(){
    for(var i=5;i<=12;i++){
        document.querySelectorAll('img')[i].classList.add('hide');
    }
    var bis = ['','./buiscuits/biscuit-1.jpg','./buiscuits/biscuit-2.jpg','./buiscuits/biscuit-3.jpg','./buiscuits/biscuit-4.jpg'];
    setTimeout(function(){ 
        for(var i = 1;i<=4;i++){
            document.querySelectorAll('img')[i].setAttribute('src',bis[i]);
        }},400);
});

document.querySelectorAll("button")[3].addEventListener('click',function(){
    for(var i=5;i<=12;i++){
        document.querySelectorAll('img')[i].classList.add('hide');
    }
    var ice = ['','./ice_cream/ice-cream-1.jpg','./ice_cream/ice-cream-2.jpg','./ice_cream/ice-cream-3.jpg','./ice_cream/ice-cream-4.jpg'];
    setTimeout(function(){ 
    for(var i = 1;i<=4;i++){
        document.querySelectorAll('img')[i].setAttribute('src',ice[i]);
    }},400);
});
