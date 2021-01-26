submit = document.getElementById("submit").innerHTML;

let sejour_id = new URLSearchParams(window.location.search).get("id")
var dateR = document.getElementById("dateR").innerHTML;
var dateD = document.getElementById("dateD").innerHTML;
var dateA = new Date();
dateA = dateA.getTime();
dateR = dateR.value
dateD = dateD.value
dateR = new Date(dateR)
dateD = new Date(dateD)
dateR = dateR.parse()
dateD = dateD.parse()
duree = dateR - dateD
duree = Math.floor(duree / 8640000)

var test;

if (duree <= 0) {
    test = 1
} else {
    test = 0
}

function cachebouton() {
    console.log("message")
    submit = document.getElementById("submit").innerHTML;
    let sejour_id = new URLSearchParams(window.location.search).get("id")
    var nombreA=document.getElementById("nombreA").value;
    var nombreE=document.getElementById("nombreE").value;
    var dateR = document.getElementById("dateR").value;
    var dateD = document.getElementById("dateD").value;
    var dateA = new Date();
    dateA = dateA.getTime();
    dateR = new Date(dateR)
    dateD = new Date(dateD)
    duree = dateR - dateD
    duree = Math.floor(duree / 8640000)
    console.log(duree)
    console.log(dateA)
    var test;

    if ((duree <= 0) || (dateD <= dateA)) {
        test = 1
    } else {
        test = 0
    }
    if (test == 1) {

        document.getElementById("BoutonRez").style.display = "none";
        document.getElementById("Cprix").style.display = "none";
            //  document.getElementById("submit").parentNode.removeChild(document.getElementById("submit"));
    } else {
        document.getElementById("BoutonRez").style.display = "block";
        document.getElementById("Cprix").style.display = "block";
    }
}

function prix() {
    let sejour_id = new URLSearchParams(window.location.search).get("id")
    let nbadultes=document.getElementById("nombreA").value;
    let nbenfants=document.getElementById("nombreE").value;
    var dateR = document.getElementById("dateR").value;
    var dateD = document.getElementById("dateD").value;
    dateR = new Date(dateR)
    dateD = new Date(dateD)
    duree = dateR - dateD
    duree = Math.floor(duree / 86400000)
    let prixsejour=(tabdestinations[sejour_id].prix*nbadultes+tabdestinations[sejour_id].prix*0.4*nbenfants)*duree;
    if (document.getElementById("dej").checked){
         prixsejour=prixsejour+12*duree*nbadultes+12*duree*nbenfants};
    document.getElementById("prix").innerHTML= prixsejour
}

function recapRes() {
var prenom=document.getElementById("prenom").value
var nom=document.getElementById("nom").value
var mail=document.getElementById("email").value
var tel=document.getElementById("tel").value
var dateD=document.getElementById("dateD").value
var dateR=document.getElementById("dateR").value
var nbadultes=document.getElementById("nombreA").value
var nbenfants=document.getElementById("nombreE").value
var asavoir="Rien de particulier"
if (document.getElementById("asavoir").value!='') {
    asavoir=document.getElementById("asavoir").value
}
if (document.getElementById("dej").checked) {
    var dej="Oui"
}
else {
    var dej="Non"
}
var prix=document.getElementById("prix").innerHTML
var recap=[prenom,nom,mail,tel,dateD,dateR,nbadultes,nbenfants,dej,asavoir,prix]
return recap

}

function urlRecap() {
    event.preventDefault();
    recap=recapRes()
    let sejour_id = new URLSearchParams(window.location.search).get("id")
    window.location.href="recap.html?id="+sejour_id+"&prenom="+recap[0]+"&nom="+recap[1]+"&mail="+recap[2]+"&tel="+recap[3]+"&dateD="+recap[4]+"&dateR="+recap[5]+"&nombreA="+recap[6]+"&nombreE="+recap[7]+"&dej="+recap[8]+"&asavoir="+recap[9]+"&prix="+recap[10]
}