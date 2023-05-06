

function aboutMe(){
    let contact = document.getElementById("Contato");
    let approach = document.getElementById('Abordagem');
    let formation = document.getElementById('Formação');
    let boutme = document.getElementById('me');

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

function abordagem(){
    let contact = document.getElementById("Contato");
    let approach = document.getElementById('Abordagem');
    let formation = document.getElementById('Formação');
    let boutme = document.getElementById('me');
    
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

function formacion(){
    let contact = document.getElementById("Contato");
    let approach = document.getElementById('Abordagem');
    let formation = document.getElementById('Formação');
    let boutme = document.getElementById('me');

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

function contato(){
    let contact = document.getElementById("Contato");
    let approach = document.getElementById('Abordagem');
    let formation = document.getElementById('Formação');
    let boutme = document.getElementById('me');

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
