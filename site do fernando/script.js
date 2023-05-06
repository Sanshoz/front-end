

document.addEventListener("scroll", function() {
    var posicaoy = window.pageYOffset;
    let menu = document.getElementById("lateral");
    let foto = document.getElementById("foto");
    let buttons = document.getElementsByClassName("button");
    if (screen.width < 640 || screen.height < 480) {
       if(posicaoy > 15){
            menu.style.position = "fixed";
            menu.style.top = "0"
            menu.style.overflow = "hidden"
            menu.style.height = "16vh";
            menu.style.transition = "height .5s ease-out";
            foto.style.width = "25vw";
            foto.style.margin = "2vh auto 2vh auto";
            menu.style.padding = "0";
            for(button of buttons){
               button.style.visibility = "hidden";
            }
        }
    }

  });
function myPhoto(){

    let contact = document.getElementById("Contato");
    let approach = document.getElementById('Abordagem');
    let formation = document.getElementById('Formação');
    let boutme = document.getElementById('me');
    if (screen.width < 640 || screen.height < 480) {
        let menu = document.getElementById("lateral")
        let foto = document.getElementById("foto");
        let buttons = document.getElementsByClassName("button");
       
        window.scrollTo(0,0);
        menu.style.position = "static";
        menu.style.height = "100vh";
        menu.style.transition = "height .5s ease-out";  
        foto.style.width = "75%";
        foto.style.margin = "2vh auto 2vh auto";
        for(button of buttons){
           button.style.visibility = "visible";
        }  
        

    } else if (screen.width < 1024 || screen.height < 768) {
        // talvez seja uma boa usar versão pra tablet
    } else {
        // sirva a versão normal
        contact.style.opacity = '0';
        contact.style.visibility = 'hidden';
        contact.style.height = "0";

        formation.style.opacity = '0';
        formation.style.height = "0";
        formation.style.visibility = 'hidden';

        approach.style.opacity = '0';
        approach.style.height = "0";
        approach.style.visibility = 'hidden';

        boutme.style.opacity = '1';
        boutme.style.transition = "opacity 1s ease-out";
        boutme.style.visibility = 'visible';
        boutme.style.height = 'auto';
    }
}

function aboutMe(){

    let contact = document.getElementById("Contato");
    let approach = document.getElementById('Abordagem');
    let formation = document.getElementById('Formação');
    let boutme = document.getElementById('me');
    if (screen.width < 640 || screen.height < 480) {
        window.location.href = "#me"
    } else if (screen.width < 1024 || screen.height < 768) {
        // talvez seja uma boa usar versão pra tablet
    } else {
        // sirva a versão normal
        

        contact.style.opacity = '0';
        contact.style.visibility = 'hidden';
        contact.style.height = "0";

        formation.style.opacity = '0';
        formation.style.height = "0";
        formation.style.visibility = 'hidden';

        approach.style.opacity = '0';
        approach.style.height = "0";
        approach.style.visibility = 'hidden';

        boutme.style.opacity = '1';
        boutme.style.transition = "opacity 1s ease-out";
        boutme.style.visibility = 'visible';
        boutme.style.height = 'auto';
    }
}

function abordagem(){

    let contact = document.getElementById("Contato");
    let approach = document.getElementById('Abordagem');
    let formation = document.getElementById('Formação');
    let boutme = document.getElementById('me');
    if (screen.width < 640 || screen.height < 480) {
        // sirva a versão pra celular
        window.location.href = "#Abordagem"
    } else if (screen.width < 1024 || screen.height < 768) {
        // talvez seja uma boa usar versão pra tablet
    } else {
        contact.style.opacity = '0';
        contact.style.height = "0";
        contact.style.visibility = 'hidden';


        formation.style.opacity = '0';
        formation.style.height = "0";
        formation.style.visibility = 'hidden';


        boutme.style.opacity = '0';
        boutme.style.height = "0";
        boutme.style.visibility = 'hidden';

        approach.style.opacity = '1';
        approach.style.transition = "opacity 1s ease-out";
        approach.style.height = 'auto'
        approach.style.visibility = 'visible';
    }
}

function formacion(){

    let contact = document.getElementById("Contato");
    let approach = document.getElementById('Abordagem');
    let formation = document.getElementById('Formação');
    let boutme = document.getElementById('me');
    if (screen.width < 640 || screen.height < 480) {
        // sirva a versão pra celular
        window.location.href = "#Formação"
    } else if (screen.width < 1024 || screen.height < 768) {
        // talvez seja uma boa usar versão pra tablet
    } else {
        contact.style.opacity = '0';
        contact.style.height = "0";
        contact.style.visibility = 'hidden';

        formation.style.opacity = '1';
        formation.style.transition = "opacity 1s ease-out";
        formation.style.visibility = 'visible';
        formation.style.height = 'auto';

        boutme.style.opacity = '0';
        boutme.style.height = "0";
        boutme.style.visibility = 'hidden';

        approach.style.opacity = '0';
        approach.style.height = "0";
        approach.style.visibility = 'hidden';
    }

}

function contato(){

    let contact = document.getElementById("Contato");
    let approach = document.getElementById('Abordagem');
    let formation = document.getElementById('Formação');
    let boutme = document.getElementById('me');

    if (screen.width < 640 || screen.height < 480) {
        // sirva a versão pra celular
        window.location.href = "#Contato"
    } else if (screen.width < 1024 || screen.height < 768) {
        // talvez seja uma boa usar versão pra tablet
    } else {
        

        boutme.style.opacity = '0';
        boutme.style.height = "0";
        boutme.style.visibility = 'hidden';
        

        contact.style.opacity = '1';
        contact.style.transition = "opacity 1s ease-out";
        contact.style.visibility = 'visible';
        contact.style.height = 'auto';


        approach.style.opacity = '0';
        approach.style.height = "0";
        approach.style.visibility = 'hidden';

        
        formation.style.opacity = '0';
        formation.style.height = "0";
        formation.style.visibility = 'hidden';

    }
}
