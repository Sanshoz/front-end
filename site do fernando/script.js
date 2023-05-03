function aboutMe(){
 document.getElementById("Contato").style.display = "none"
 document.getElementById('Abordagem').style.display='none'
 document.getElementById('Formação').style.display='none'
 document.getElementById('me').style.display='block'
}

function abordagem(){
 document.getElementById("Contato").style.display = "none"
 document.getElementById('Abordagem').style.display='block'
 document.getElementById('Formação').style.display='none'
 document.getElementById('me').style.display='none'
}

function formacion(){
 document.getElementById("Contato").style.display = "none"
 document.getElementById('Abordagem').style.display='none'
 document.getElementById('Formação').style.display='block'
 document.getElementById('me').style.display='none'
}

function contato(){
 document.getElementById("Contato").style.display = "block"
 document.getElementById('Abordagem').style.display='none'
 document.getElementById('Formação').style.display='none'
 document.getElementById('me').style.display='none'
}
