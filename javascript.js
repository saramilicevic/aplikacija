let vreme = document.getElementById("trenutno-vreme");
setInterval (() => {
    let d = new Date();
    vreme.innerHTML = d.toLocaleTimeString();
}, 1000)



var imeGreska=document.getElementById('ime-greska');
var prezimeGreska=document.getElementById('prezime-greska');
var emailGreska=document.getElementById('email-greska');
var telGreska=document.getElementById('tel-greska');
var porukaGreska=document.getElementById('poruka-greska');
var dugmeGreska=document.getElementById("dugme-greska");
var popup=document.getElementById("popup");

function validateIme() {
    var ime = document.getElementById('ime').value;
    
    if(ime.length == 0) {
        imeGreska.innerHTML = 'Ime je obavezno';
        alert("Polje ime je obavezno")
        return false;
    }
    
    imeGreska.innerHTML= 'popunjeno'
    return true;
}

function validatePrezime() {
    var prezime = document.getElementById('prezime').value;
    
    if(prezime.length == 0) {
        prezimeGreska.innerHTML = 'Prezime je obavezno';
        alert("Polje prezime je obavezno")
        return false;
    }
    
    prezimeGreska.innerHTML= 'valid'
    return true;
}

function validateTelefon() {
    var telefon = document.getElementById('telefon').value;
    
    if(telefon.length == 0) {
        telGreska.innerHTML = 'Telefon je obavezan'
        alert("Polje telefon je obavezno")
        return false;
    }

    telGreska.innerHTML= 'valid';
    return true;
}
function validateEmail() {
    var email = document.getElementById('email').value;
    
    if(email.length == 0) {
        emailGreska.innerHTML = 'Email je obavezan';
        alert("Polje email je obavezno")
        return false;
    }
    
    emailGreska.innerHTML= 'valid'
    return true;
}
function validatePoruka() {
    var poruka = document.getElementById('poruka').value;
    var obavezno = 30;
    var preostalo = obavezno - poruka.length;

    
    if (preostalo > 0) {
        porukaGreska.innerHTML =  'Morate uneti jos najmanje ' + preostalo + ' karaktera';
        return false;
    }
    porukaGreska.innerHTML= 'valid';
    return true;
}



 function validateForm() {
    if(!validateIme() || !validatePrezime() || !validateEmail() || !validateTelefon() || !validatePoruka()) {
        //dugmeGreska.style.display = 'block';
        //dugmeGreska.innerHTML = 'Unesite ispravne podatke'
        //setTimeout(function(){dugmeGreska.style.display = 'none';}, 3000);
        return false;
    }
    popup.classList.add("active-popup");
} 

/* function closePopup(){
    popup.classList.remove("active-popup");
} */

/* $("input").on("focus", function(){
    $(this).css("background-color","red");
});
 */


$(document).ready(function(){
    $("#hide").click(function(){
      $("#uvod").hide();
    });
$("#show").click(function(){
      $("#uvod").show();
    });
});

// pokušaj sakrivanja teksta kod fotografa
/* $("button").click(function(){
    $(".p").hide();
  }); */