var images = [

    "beidou.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "item3estrelas1.svg",
    "item3estrelas2.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "item3estrelas1.svg",
    "item3estrelas2.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "item3estrelas1.svg",
    "item3estrelas2.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "item3estrelas1.svg",
    "item3estrelas2.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "item3estrelas1.svg",
    "item3estrelas2.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "item3estrelas1.svg",
    "item3estrelas2.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "item3estrelas1.svg",
    "item3estrelas2.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "item3estrelas1.svg",
    "item3estrelas2.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "item3estrelas1.svg",
    "item3estrelas2.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "item3estrelas1.svg",
    "item3estrelas2.svg",
    "item3estrelas3.svg",   
    "item3estrelas4.svg",          
    "item3estrelas5.svg",   
    "item3estrelas6.svg",   
    "item3estrelas7.svg",   
    "item3estrelas8.svg",   
    "item3estrelas9.svg",   
    "item3estrelas10.svg",
    "zhongli.svg",
    "xinqiu.svg",
    
    
    
       
     
    ];
    
    var raros = [
    "/genshin_images/xinqiu.svg",
    "/genshin_images/beidou.svg",
    "/genshin_images/yanfei.svg",
    ];
    
    var lendarios = [
    "/genshin_images/zhongli.svg",
    
    ];
    
    let modal = document.getElementById("modal")
    let itens = document.getElementById("modal").querySelectorAll("#item")
    let item1 = document.getElementById("item1")
    let item2 = document.getElementById("item2")
    let item3 = document.getElementById("item3")
    let item4 = document.getElementById("item4")
    let item5 = document.getElementById("item5")
    let item6 = document.getElementById("item6")
    let item7 = document.getElementById("item7")
    let item8 = document.getElementById("item8")
    let item9 = document.getElementById("item9")
    let item10 = document.getElementById("item10")
    let div1 = document.getElementById("div1")
    let videoshot = document.getElementById("videoshot")
    let videoshot5 = document.getElementById("videoshot5")
    let videoshot3 = document.getElementById("videoshot3")
    let modalvideo = document.getElementById("modalvideo")
    let modalvideo2 = document.getElementById("modalvideo2")
    let modalvideo3 = document.getElementById("modalvideo3")
    let corpo = document.getElementById("body")
    let iframeAudio = document.getElementById("iframeAudio")
    let confirmar = document.getElementById("confirm")
    let popup = document.getElementById("dialog")
    let principal = document.getElementById("principal")
    let banneroption = document.getElementById("banneroption")
    let skip = document.getElementById("skip")
    let buttoneffect = document.getElementById("buttoneffect")
    let pushsound = document.getElementById("pushsound")
    
    
    
    var pity = 0
    var pity5 = 0
    
    
    confirmar.addEventListener("click", playaudio)
    banneroption.addEventListener("mouseenter", () =>{
        banneroption.src = "/genshin_images/zhongliimage.png"  
    })
    banneroption.addEventListener("mouseleave", () =>{
        banneroption.src = "/genshin_images/zhongliimage2.png" 
    })
    
        
     
    
    function pular(){
    
     videoshot5.load()  
     videoshot3.load()   
     videoshot.load()
     videoshot.style.visibility = "hidden"
     videoshot3.style.visibility = "hidden"
     videoshot5.style.visibility = "hidden"
     modalvideo2.style.visibility = "hidden"
     modalvideo.style.visibility = "hidden"
     modalvideo3.style.visibility = "hidden"
     
    
    }
    
    function playaudio(){
    
    buttoneffect.play()    
    iframeAudio.play()
    popup.style.visibility = "hidden"
    principal.style.filter = "none"
    
    
    
    
    }
    
    function epicitensbackground(){
    item1.style.backgroundImage = "url('/genshin_images/epicbackground.svg')"    
    
    
    }
    
    function push10(){
        pushsound.play()  
        iframeAudio.pause()   
    
     pity  += 10
     pity5 += 10
    
    
     item2.style.visibility = "visible" 
    item3.style.visibility = "visible" 
    item4.style.visibility = "visible" 
    item5.style.visibility = "visible" 
    item6.style.visibility = "visible" 
    item7.style.visibility = "visible" 
    item8.style.visibility = "visible" 
    item9.style.visibility = "visible" 
    item10.style.visibility = "visible" 
    modal.style.visibility = "visible"
    
    
    if(pity >= 10 & pity5 < 86 ){
    item1.src = "" + raros[Math.floor(Math.random() * raros.length)] + "";
    item2.src = "" + images[Math.floor(Math.random() * images.length  )] + "";
    item3.src = "" + images[Math.floor(Math.random() * images.length  )] + "";
    item4.src = "" + images[Math.floor(Math.random() * images.length   )] + "";
    item5.src = "" + images[Math.floor(Math.random() * images.length   )] + "";
    item6.src = "" + images[Math.floor(Math.random() * images.length  )] + "";
    item7.src = "" + images[Math.floor(Math.random() * images.length  )] + "";
    item8.src = "" + images[Math.floor(Math.random() * images.length   )] + "";
    item9.src = "" + images[Math.floor(Math.random() * images.length  )] + "";
    item10.src = "" + images[Math.floor(Math.random() * images.length   )] + "";
    
    
    
    item1.getAttribute('src') == "/genshin_images/beidou.svg" | item1.getAttribute('src') == "/genshin_images/xinqiu.svg" | item1.getAttribute('src') == "/genshin_images/yanfei.svg" ? epicitensbackground() : console.log("não é")
    item2.getAttribute('src') == "/genshin_images/beidou.svg" | item2.getAttribute('src') == "/genshin_images/xinqiu.svg" | item2.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item2.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item2.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item3.getAttribute('src') == "/genshin_images/beidou.svg" | item3.getAttribute('src') == "/genshin_images/xinqiu.svg" | item3.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item3.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item3.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item4.getAttribute('src') == "/genshin_images/beidou.svg" | item4.getAttribute('src') == "/genshin_images/xinqiu.svg" | item4.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item4.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item4.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item5.getAttribute('src') == "/genshin_images/beidou.svg" | item5.getAttribute('src') == "/genshin_images/xinqiu.svg" | item5.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item5.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item5.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item6.getAttribute('src') == "/genshin_images/beidou.svg" | item6.getAttribute('src') == "/genshin_images/xinqiu.svg" | item6.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item6.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item6.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item7.getAttribute('src') == "/genshin_images/beidou.svg" | item7.getAttribute('src') == "/genshin_images/xinqiu.svg" | item7.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item7.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item7.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item8.getAttribute('src') == "/genshin_images/beidou.svg" | item8.getAttribute('src') == "/genshin_images/xinqiu.svg" | item8.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item8.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item8.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item9.getAttribute('src') == "/genshin_images/beidou.svg" | item9.getAttribute('src') == "/genshin_images/xinqiu.svg" | item9.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item9.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item9.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item10.getAttribute('src') == "/genshin_images/beidou.svg" | item10.getAttribute('src') == "/genshin_images/xinqiu.svg" | item10.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item10.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item10.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    
    
    
    item1.getAttribute('src') == "/genshin_images/zhongli.svg" | item2.getAttribute('src') == "/genshin_images/zhongli.svg" | 
    item3.getAttribute('src') == "/genshin_images/zhongli.svg" | item4.getAttribute('src') == "/genshin_images/zhongli.svg" | 
    item5.getAttribute('src') == "/genshin_images/zhongli.svg" | item6.getAttribute('src') == "/genshin_images/zhongli.svg" | 
    item7.getAttribute('src') == "/genshin_images/zhongli.svg" | item8.getAttribute('src') == "/genshin_images/zhongli.svg" | 
    item9.getAttribute('src') == "/genshin_images/zhongli.svg" | item10.getAttribute('src') == "/genshin_images/zhongli.svg" ? play5starsshot() : play4starsshot()
    
    item1.getAttribute('src') == "/genshin_images/zhongli.svg" ? item1.style.backgroundImage = "url('/genshin_images/background5stars.svg')" : console.log("não é")
    item2.getAttribute('src') == "/genshin_images/zhongli.svg" ?  item2.style.backgroundImage = "url('/genshin_images/background5stars.svg')" : console.log("não é")
    item3.getAttribute('src') == "/genshin_images/zhongli.svg" ? item3.style.backgroundImage = "url('/genshin_images/background5stars.svg')" : console.log("não é")
    item4.getAttribute('src') == "/genshin_images/zhongli.svg" ? item4.style.backgroundImage = "url('/genshin_images/background5stars.svg')" : console.log("não é")
    item5.getAttribute('src') == "/genshin_images/zhongli.svg" ? item5.style.backgroundImage = "url('/genshin_images/background5stars.svg')": console.log("não é")
    item6.getAttribute('src') == "/genshin_images/zhongli.svg" ? item6.style.backgroundImage = "url('/genshin_images/background5stars.svg')" : console.log("não é")
    item7.getAttribute('src') == "/genshin_images/zhongli.svg" ? item7.style.backgroundImage = "url('/genshin_images/background5stars.svg')": console.log("não é")
    item8.getAttribute('src') == "/genshin_images/zhongli.svg" ? item8.style.backgroundImage = "url('/genshin_images/background5stars.svg')" : console.log("não é")
    item9.getAttribute('src') == "/genshin_images/zhongli.svg" ? item9.style.backgroundImage = "url('/genshin_images/background5stars.svg')" : console.log("não é")
    item10.getAttribute('src') == "/genshin_images/zhongli.svg" ? item10.style.backgroundImage = "url('/genshin_images/background5stars.svg')": console.log("não é")
    
    
    
    
    
    pity = 0
    
    
    } else if(pity5 >= 86){
    item1.src = "" + lendarios[Math.floor(Math.random() * lendarios.length)] + "";
    item2.src = "" + raros[Math.floor(Math.random() * raros.length  )] + "";
    item3.src = "" + images[Math.floor(Math.random() * images.length  )] + "";
    item4.src = "" + images[Math.floor(Math.random() * images.length   )] + "";
    item5.src = "" + images[Math.floor(Math.random() * images.length   )] + "";
    item6.src = "" + images[Math.floor(Math.random() * images.length  )] + "";
    item7.src = "" + images[Math.floor(Math.random() * images.length  )] + "";
    item8.src = "" + images[Math.floor(Math.random() * images.length   )] + "";
    item9.src = "" + images[Math.floor(Math.random() * images.length  )] + "";
    item10.src = "" + images[Math.floor(Math.random() * images.length   )] + "";
    
    play5starsshot()
    
    item1.style.backgroundImage = "url('/genshin_images/background5stars.svg')"
    item2.style.backgroundImage = "url('/genshin_images/epicbackground.svg')"
    
    item3.getAttribute('src') == "/genshin_images/beidou.svg" | item3.getAttribute('src') == "/genshin_images/xinqiu.svg" | item3.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item3.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item3.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item4.getAttribute('src') == "/genshin_images/beidou.svg" | item4.getAttribute('src') == "/genshin_images/xinqiu.svg" | item4.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item4.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item4.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item5.getAttribute('src') == "/genshin_images/beidou.svg" | item5.getAttribute('src') == "/genshin_images/xinqiu.svg" | item5.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item5.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item5.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item6.getAttribute('src') == "/genshin_images/beidou.svg" | item6.getAttribute('src') == "/genshin_images/xinqiu.svg" | item6.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item6.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item6.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item7.getAttribute('src') == "/genshin_images/beidou.svg" | item7.getAttribute('src') == "/genshin_images/xinqiu.svg" | item7.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item7.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item7.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item8.getAttribute('src') == "/genshin_images/beidou.svg" | item8.getAttribute('src') == "/genshin_images/xinqiu.svg" | item8.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item8.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item8.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item9.getAttribute('src') == "/genshin_images/beidou.svg" | item9.getAttribute('src') == "/genshin_images/xinqiu.svg" | item9.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item9.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item9.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    item10.getAttribute('src') == "/genshin_images/beidou.svg" | item10.getAttribute('src') == "/genshin_images/xinqiu.svg" | item10.getAttribute('src') == "/genshin_images/yanfei.svg" ?
    item10.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : item10.style.backgroundImage = "url('/genshin_images/itembackground.svg')"
    
     
    pity5 = 0
    
    }
    
    
    console.log(pity)
    console.log(pity5)
    }
    
    function push1(){
        pushsound.play() 
        iframeAudio.pause()   
    
    
        pity  += 1
        pity5 += 1
    
    let modal = document.getElementById("modal")
    let itens = document.getElementById("modal").querySelectorAll("#item")
    let item1 = document.getElementById("item1")
    
    
    
    
    
    item2.style.visibility = "hidden" 
    item3.style.visibility = "hidden" 
    item4.style.visibility = "hidden" 
    item5.style.visibility = "hidden" 
    item6.style.visibility = "hidden" 
    item7.style.visibility = "hidden" 
    item8.style.visibility = "hidden" 
    item9.style.visibility = "hidden" 
    item10.style.visibility = "hidden" 
    
    item1.src = "" + images[Math.floor(Math.random() * images.length  )] + "";
    
    
    
    if(pity == 10){
    
    play4starsshot()
    item1.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" 
    
    
    item1.src = "" + raros[Math.floor(Math.random() * raros.length)] + "";
    pity = 0
    
    }else if (pity < 10 & pity5 < 86){
    
        item1.getAttribute('src') == "/genshin_images/yanfei.svg" | item1.getAttribute('src') == "/genshin_images/xinqiu.svg" | item1.getAttribute('src') == "/genshin_images/beidou.svg" ? play4starsshot() : "batata"
        item1.getAttribute('src') == "/genshin_images/yanfei.svg" | item1.getAttribute('src') == "/genshin_images/xinqiu.svg" | item1.getAttribute('src') == "/genshin_images/beidou.svg" ? 
        item1.style.backgroundImage = "url('/genshin_images/epicbackground.svg')" : "batata"
    
        item1.getAttribute('src') == "/genshin_images/zhongli.svg"  ? play5starsshot() : "batata"
        item1.getAttribute('src') == "/genshin_images/zhongli.svg" ? 
        item1.style.backgroundImage = "url('/genshin_images/background5stars.svg')" : "batata"
        
        item1.getAttribute('src') == "/genshin_images/item3estrelas1.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas2.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas3.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas4.svg" 
        |item1.getAttribute('src') == "/genshin_images/item3estrelas5.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas6.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas7.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas8.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas9.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas10.svg" ? play3starsshot() : "batata"
        item1.getAttribute('src') == "/genshin_images/item3estrelas1.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas2.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas3.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas4.svg" 
        |item1.getAttribute('src') == "/genshin_images/item3estrelas5.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas6.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas7.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas8.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas9.svg" | item1.getAttribute('src') == "/genshin_images/item3estrelas10.svg" ? 
        item1.style.backgroundImage = "url('')" : "batata"
          
    }else if(pity5 >= 86){
    item1.src = "" + lendarios[Math.floor(Math.random() * lendarios.length)] + "";
    pity5 = 0
    play5starsshot()
    }
    
    modal.style.visibility = "visible"
    console.log(pity)
    console.log(pity5)
    
    }
    
    function fechar(){
    
        iframeAudio.play()       
    
       
    item2.style.visibility = "hidden" 
    item3.style.visibility = "hidden" 
    item4.style.visibility = "hidden" 
    item5.style.visibility = "hidden" 
    item6.style.visibility = "hidden" 
    item7.style.visibility = "hidden" 
    item8.style.visibility = "hidden" 
    item9.style.visibility = "hidden" 
    item10.style.visibility = "hidden" 
    item1.src = "";
    item2.src = "";
    item3.src = "";
    item4.src = "";
    item5.src = "";
    item6.src = "";
    item7.src = "";
    item8.src = "";
    item9.src = "";
    item10.src = "";
    
    
    
    
        let modal = document.getElementById("modal")
        modal.style.visibility = "hidden"
    
        
        
        
    }
    
    function play5starsshot(){
    
    
     let audio = document.getElementById("iframeAudio")
    
    
    
    modalvideo.style.visibility = "visible"
    videoshot5.style.visibility = "visible";
    
    
    
    
    videoshot5.play()
    
    videoshot5.addEventListener('ended', () => {
    
    videoshot.style.visibility = "hidden";
    videoshot5.style.visibility = "hidden";
    modalvideo.style.visibility = "hidden"
    pity5 = 0
    })
    
    }
    
    function play4starsshot(){
    
    
     
    
    modalvideo.style.visibility = "hidden"
    modalvideo2.style.visibility = "visible"
    videoshot.style.visibility = "visible";
    
    
    
    
    videoshot.play()
    
    videoshot.addEventListener('ended', () => {
    
    
    videoshot.style.visibility = "hidden";
    modalvideo2.style.visibility = "hidden"
    
    pity = 0
    
    })
    
    }
    
    function play3starsshot(){
    
    modalvideo.style.visibility = "hidden"
    modalvideo2.style.visibility = "hidden"
    modalvideo3.style.visibility = "visible"
    videoshot3.style.visibility = "visible";
    
    
    videoshot3.play()
    
    videoshot3.addEventListener('ended', () => {
    
    videoshot3.style.visibility = "hidden";
    modalvideo3.style.visibility = "hidden"
    
    
    
    })
    
    
    
    
    
    }
    

    
    
