function menuShow(){
    var bar = document.getElementById('menu')
    var item = document.getElementById('items-mob')
     if(item.style.display == 'block'){
         item.style.display ='none'
         bar.style.color = 'white'
     }else{
        item.style.display = 'block'
        bar.style.color = 'red'
     }
}

var  img1 = "ferrari2.jpg";
var img2 = "ferrari3.jpg";
var img3 = "california.jpg";

//slide show//
var images = ["ferrari2.jpg","ferrari3.jpg", "california.jpg"]
var figu = document.getElementById("figuras");
var i = 0

function slideShow(){
    figu.src = images[i];
    if(i < images.length - 1){
        i++
    }else{
        i = 0
    }
    setTimeout(slideShow,2000)
}
slideShow()
//
function seta(){
    document.getElementById("figuras").src = img1;
    var aux = img1;
     img1 = img2;
     img2 = aux;
      img2 =  img3 ;
      img3 = aux;
      
}
//Botao  de rolar a pagina //
var bot = document.getElementById('botão')

bot.addEventListener('click', () => {
    window.scroll({top: innerWidth,behavior:"smooth"})
})

 function passar(){
    var fbox = document.getElementById('flex-box2')
    var box = document.getElementById('flex-box')
    var voltar = document.getElementById('seta-box2')
    if(fbox.style.display = 'block'){
        voltar.style.display = 'block'
        box.style.display  = 'none'
    }
 }
 

var lojaimg = ["loja.png"]
var loja = document.getElementById('background-ferrari')
var p = 0

function lojapass(){
     loja.src = lojaimg[p]
    if(p < lojaimg.length - 1){
        p++
    }else{
        p = 0
    }
    setTimeout(lojapass,1000)
}
lojapass()

function mais(){
    var links = document.getElementById('auto-items')
    var b = document.getElementById('fechar')
    if(links.style.display =='block'){
        links.style.display = 'none'
        b.innerHTML = '<i class="fa-solid fa-plus"></i>'
    }else{
        links.style.display = 'block'
        b.innerHTML = '<i class="fa-solid fa-x"></i>'
    }
}

function mais2(){
    var links = document.getElementById('coll-items')
    var b2 = document.getElementById('fechar2')
    if(links.style.display =='block'){
        links.style.display = 'none'
        b2.innerHTML = '<i class="fa-solid fa-plus"></i>'
    }else{
        links.style.display = 'block'
        b2.innerHTML = '<i class="fa-solid fa-x"></i>'
    }
}

function mais3(){
    var links = document.getElementById('race-items')
    var b3 = document.getElementById('fechar3')
    if(links.style.display =='block'){
        links.style.display = 'none'
        b3.innerHTML = '<i class="fa-solid fa-plus"></i>'
    }else{
        links.style.display = 'block'
        b3.innerHTML = '<i class="fa-solid fa-x"></i>'
    }
}

function mais4(){
    var links = document.getElementById('uni-items')
    var b3 = document.getElementById('fechar4')
    if(links.style.display =='block'){
        links.style.display = 'none'
        b3.innerHTML = '<i class="fa-solid fa-plus"></i>'
    }else{
        links.style.display = 'block'
        b3.innerHTML = '<i class="fa-solid fa-x"></i>'
    }
}

/*function seta(){
    var img = document.getElementById('imagem1')
    var img2 = document.getElementById('imagem2')
    var img3 = document.getElementById('imagem3')
    var cont = 1
    if(img2.style.display = 'block'){
          img.style.display  = 'none'
          setInterval(() =>{
          passar()
          },2000)
        }
        function passar(){
            cont++;
            if(cont > 3){
                 cont = 1
            }
        }
}*/

