function mostrarMenu (){
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")){
        menuMobile.classList.remove("open");

        document.querySelector(".icon").src= "imagens/Menu-icon.svg";
        document.querySelector(".escrito-banner").style.marginTop= "0%"
    }
    else{
        menuMobile.classList.add("open");
        document.querySelector(".icon").src= "imagens/Close-icon.svg";
        document.querySelector(".escrito-banner").style.marginTop= "80%"
        
        
    }
}