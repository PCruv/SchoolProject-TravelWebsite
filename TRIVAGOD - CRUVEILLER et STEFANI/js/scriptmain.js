class Destination {
    constructor(nom, prix, p1, img1, img2, id) {
        this._nom = nom;
        this._prix = prix;
        this._p1 = p1;
        this._img1 = img1;
        this._img2 = img2;
        this._id = id;
    }
    get nom() { return this._nom; }
    get prix() { return this._prix; }
    get p1() { return this._p1; }
    get img1() { return this._img1; }
    get img2() { return this._img2; }
    get id() { return this._id; }
}



var pnepal = "Le Népal est un pays situé entre l'Inde et le Tibet, réputé pour ses temples et ses montagnes de l'Himalaya, notamment l'Everest. Katmandou, la capitale, comprend un vieux quartier labyrinthique rempli de sanctuaires hindous et bouddhistes. Autour de la vallée de Katmandou se trouvent Swayambhunath, un temple bouddhiste abritant des singes, Bohnath, un grand stupa bouddhiste, des temples hindous et des lieux de crémation à Pashupatinath, ainsi que la ville médiévale de Bhaktapur."
var nepalimg1 = '../images/nepal1.jpg'
var nepalimg2 = "../images/nepal2.jpg"


var ppapouasie = "La Papouasie-Nouvelle-Guinée est située au sud-ouest de l'océan Pacifique et comprend la moitié orientale de la Nouvelle-Guinée et ses îles au large. Ce pays d'une grande diversité culturelle et biologique est réputé pour ses plages et ses récifs coralliens. À l'intérieur des terres se trouvent des volcans en activité, le mont Wilhelm en granite, une forêt tropicale dense et des sentiers de randonnée tels que la Kokoda Track. Le pays abrite également des villages tribaux traditionnels, dont beaucoup possèdent leur propre langue."
var papouasieimg1 = "../images/papouasie1.jpeg"
var papouasieimg2 = "../images/papouasie2.jpeg"

var pdubai = "Dubaï est une ville et un émirat des Émirats arabes unis réputé pour son shopping de luxe, son architecture ultramoderne et sa vie nocturne animée. La Burj Khalifa, tour de 830 mètres de haut, domine le paysage urbain parsemé de gratte-ciel. À son pied, la fontaine de Dubaï présente des jets et des lumières synchronisés avec de la musique. Atlantis, The Palm est un hôtel comprenant parcs aquatiques avec animaux marins situé au large, sur des îles artificielles."
var dubaiimg1= "../images/dubai1.jpg"
var dubaiimg2= "../images/dubai2.jpg"

var plasvegas = "Las Vegas, dans le désert de Mojave dans le Nevada, est une ville réputée pour sa vie nocturne animée, ses casinos ouverts 24 h/24 et autres divertissements. Le point central de la ville correspond à sa rue principale, The Strip, longue d'un peu plus de 4 miles. Ce boulevard abrite des hôtels à thème et des créations élaborées comme les fontaines synchronisées avec la musique ainsi que des répliques de monuments connus : pyramide égyptienne, Grand Canal de Venise, et Tour Eiffel."
var lasvegasimg1 = "../images/lasvegas1.jpg"
var lasvegasimg2 = "../images/lasvegas2.jpg"

var posaka = "Osaka est une grande ville portuaire et un centre commerçant de l'île japonaise d'Honshū. Elle est connue pour son architecture moderne, sa vie nocturne et la qualité de sa street food. Principal monument historique de la ville, le château d'Osaka, construit au XVIe siècle lors du shogunat, a subi plusieurs restaurations. Il est entouré de douves ainsi que d'un parc planté de pruniers, de pêchers et de cerisiers à fleurs. Le Sumiyoshi-taisha est l'un des plus anciens sanctuaires shinto du pays."
var osakaimg1 = "../images/osaka1.jpg"
var osakaimg2 = "../images/osaka2.jpg"

var pmoscou="Moscou, sur la Moskva à l'ouest de la Russie, est la capitale cosmopolite du pays. Son centre historique est le Kremlin, résidence du Président et complexe abritant les trésors des tsars dans l'Armurerie. À l'extérieur, la place Rouge est le centre symbolique de la Russie. Le mausolée de Lénine, le Musée historique d'État et sa vaste collection, et la cathédrale Saint-Basile-le-Bienheureux, célèbre pour ses clochers à bulbe colorés, y sont implantés."
var moscouimg1="../images/moscou1.jpg"
var moscouimg2="../images/moscou2.jpg"


var nepal = new Destination("Népal", 120, pnepal, nepalimg1, nepalimg2, 0)
var papouasie = new Destination("Papouasie-Nouvelle-Guinée", 100, ppapouasie, papouasieimg1, papouasieimg2, 1)
var dubai = new Destination("Dubaï",725,pdubai,dubaiimg1,dubaiimg2,2)
var lasvegas = new Destination("Las Vegas", 650, plasvegas, lasvegasimg1, lasvegasimg2,3)
var osaka = new Destination("Osaka",230,posaka,osakaimg1,osakaimg2,4)
var moscou = new Destination("Moscou",600,pmoscou,moscouimg1,moscouimg2,5)

var tabdestinations = [nepal, papouasie, dubai, lasvegas,osaka,moscou]


function maj() {
    let sejour_id = new URLSearchParams(window.location.search).get("id")
    changetxt(tabdestinations[sejour_id].nom, tabdestinations[sejour_id].p1, tabdestinations[sejour_id].img1, tabdestinations[sejour_id].img2,sejour_id)
}

function changetxt(nom, p1, img1, img2, id) {
    document.getElementById("titre").innerHTML = nom ;
    document.getElementById("pgf1").innerHTML = p1;
    document.getElementById("pic1").src = img1;
    document.getElementById("pic2").src = img2;
    document.getElementById("lien").href = "reserv.html?id="+id;
}

function recap() {
    let prenom = new URLSearchParams(window.location.search).get("prenom");
    let nom = new URLSearchParams(window.location.search).get("nom");
    let mail = new URLSearchParams(window.location.search).get("mail");
    let tel = new URLSearchParams(window.location.search).get("tel");
    let dateD = new URLSearchParams(window.location.search).get("dateD");
    let dateR = new URLSearchParams(window.location.search).get("dateR");
    let nombreA = new URLSearchParams(window.location.search).get("nombreA");
    let nombreE = new URLSearchParams(window.location.search).get("nombreE");
    let dej = new URLSearchParams(window.location.search).get("dej");
    let asavoir = new URLSearchParams(window.location.search).get("asavoir");
    let prix= new URLSearchParams(window.location.search).get("prix");
    document.getElementById("prenom").innerHTML="Prénom : "+prenom;
    document.getElementById("nom").innerHTML="Nom : "+nom;
    document.getElementById("mail").innerHTML="Mail : "+mail;
    document.getElementById("tel").innerHTML="Numéro de téléphone : "+tel;
    document.getElementById("dateD").innerHTML="Date de départ : "+dateD;
    document.getElementById("dateR").innerHTML="Date de retour : "+dateR;
    document.getElementById("nombreA").innerHTML="Nombre d'adultes : "+nombreA;
    document.getElementById("nombreE").innerHTML="Nombre d'enfants : "+nombreE;
    document.getElementById("dej").innerHTML="Petit déjeuner : "+dej;
    document.getElementById("asavoir").innerHTML="A savoir : "+asavoir;
    document.getElementById("prix").innerHTML=prix+ "€"
    NumReserv=Math.floor(Math.random()*1000000000000)
    while (NumReserv in localStorage.key){
        NumReserv=Math.floor(Math.random()*1000000000000)
    }
    document.getElementById("NumRes").innerHTML=NumReserv
}


function filtrePrix() {
    prixDest={120:'Népal',100:'Papouasie',725:'Dubaï',650:'Las Vegas',230:'Osaka',600:'Moscou'}
    for (const i in prixDest) {
        if (document.getElementById('PrixMax').value >= parseInt(i) ){
            if (document.getElementById('PrixMin').value <= parseInt(i) )
            document.getElementById(prixDest[i]).style.display = "block";
        }
        if (( document.getElementById('PrixMax').value < parseInt(i))||(document.getElementById('PrixMin').value > parseInt(i))){
            document.getElementById(prixDest[i]).style.display = "none";
        }
    }
}






function Meth(){
let DMeteo={
    'Las Vegas':5506956,
    'Dubai':292223,
    'Népal':1283240,
    'Papouasie':2088122,
}
}
//console.log(fetch('https://api.openweathermap.org/data/2.5/weather?id='+
//DMeteo['Dubai']+'&appid='+
//'c16e1672b36c0029c3d6cdb93276e335'))
//.then(function(resp) {return resp.json()}) //convertit en json
//.then(function(data){
  //  celcius=
//Math.round(parseFloat(data.main.temp) -273.15);
//})
//}
//fetch('https://api.openweathermap.org/data/2.5/weather?id='+
//listeHotel.hotel[numDest].idMeteo+'&appid='+
//'c16e1672b36c0029c3d6cdb93276e335')
//.then(function(resp) {return resp.json()}) //convertit en json
//.then(function(data){
 //   celcius=
//Math.round(parseFloat(data.main.temp) -273.15);
  //  lMeteo=
//document.getElementsByClassName('meteo')
  //  lMeteo[compteurMeteo].innerHTML=celcius+' °';
//})


function Storage() {
    let infoRes = {
        Destination: document.getElementById("titre").innerHTML,
        Prix: document.getElementById("prix").innerHTML,
        Reservation: document.getElementById("NumRes").innerHTML
    }
    let ListeSstr = localStorage.getItem("ListeS");
    let ListeS = JSON.parse(ListeSstr);
    ListeS.push(document.getElementById("NumRes").innerHTML);
    localStorage.removeItem("ListeS");
    let ListeSstr2 = JSON.stringify(ListeS);
    localStorage.setItem("ListeS", ListeSstr2);
    let infoRestr = JSON.stringify(infoRes);
    localStorage.setItem(document.getElementById("NumRes").innerHTML, infoRestr);
    console.log(localStorage)
}

function ContrlLocalStorage() {
    if ("ListeS" in localStorage) {
        console.log("ok")
    } else {
        localStorage.setItem("ListeS", "[]");
    }
}


function addElement() {
    let ListeSstr = localStorage.getItem("ListeS");
    let ListeS = JSON.parse(ListeSstr);
    for (i of ListeS) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", i);
        let infoRestr = localStorage.getItem(i);
        let infoRes = JSON.parse(infoRestr);
        console.log(ListeS)
        console.log(localStorage)
        let newContent = document.createTextNode("Destination : "+infoRes.Destination + " - Prix du voyage : " + infoRes.Prix + " - Numéro de réservation :  ");
        let newContent2 = document.createTextNode(infoRes.Reservation);
        newDiv.appendChild(newContent);
        newDiv.appendChild(newContent2);
        let newButton = document.createElement("div");
        newButton.innerHTML = '<button class="buttonR" onclick="deldiv(' + infoRes.Reservation + ')">Retirer du panier</button>';
        newDiv.appendChild(newButton);
        document.getElementById("body").appendChild(newDiv)
    }
}

function deldiv(idDiv) {
    let ListeSstr = localStorage.getItem("ListeS");
    let ListeS = JSON.parse(ListeSstr);
    var body = document.getElementById("body");
    var pos = ListeS.indexOf(idDiv);
    ListeS.splice(pos, 1);
    let ListeSstr2 = JSON.stringify(ListeS);
    localStorage.setItem("ListeS", ListeSstr2);
    localStorage.removeItem("idDiv");
    console.log(idDiv);
    console.log(localStorage.removeItem(idDiv));
    body.removeChild(document.getElementById(idDiv));
}

function ConfPanier() {
    document.getElementById("confPanier").innerHTML = "Votre séjour a bien été ajouté au panier";
    document.getElementById("bouton").style.display = "none";
    document.getElementById("confPanier").className="buttonR"
}

function VerifCreaDiv() {
    if (localStorage.length >= 2) {
        let ListeSstr = localStorage.getItem("ListeS");
        let ListeS = JSON.parse(ListeSstr);
        for (i of ListeS) {
            if (document.getElementById(ListeS[ListeS.length - 1]) == null) {
                addElement()
            }
        }
    }
}




function modal(){
    document.getElementById("connexion").addEventListener('click', function(){
    document.querySelector('.background').style.display = 'flex';
    });
    document.querySelector('.fermer').addEventListener('click' , function(){
    document.querySelector('.background').style.display= 'none';
    
    
    });
    }
    var objpers=[
        [
            pseudo="romain",
            mdp="stefani"
    ],
        [
            pseudo="pierre",
            mdp="cruveiller"
    ]
        
    ];
    function Info() {
        var pseudo= document.getElementById("pseudo").value
        var mdp= document.getElementById("mdp").value
        for(i=0; i < objpers.length; i++){
            if (pseudo==objpers[i][0] && mdp==objpers[i][1]){
            document.getElementById("connexion").innerHTML="Bonjour "+pseudo;
            return
        
    
        }
        }alert("mauvais mot de passe ou pseudonyme")
    };


    function hashtag() {
        let sejour_id = new URLSearchParams(window.location.search).get("id")
        window.location.href="../html/preview.html?id="+sejour_id+"&#"

    }

    function meteo(dest) {
        window.fetch('https://api.openweathermap.org/data/2.5/weather?id='+DMeteo[dest]+"&units=metric&lang=fr&appid=d8b86ae9ed7a3fa7290f357eecd1bb5c")
        .then(res=>res.json())
        .then(resJson=>resultatMeteo(resJson,dest))
    }

    function resultatMeteo(resJson,dest) {
        var temperature=resJson.main.temp;
        document.getElementById("meteo").innerHTML=temperature=" °C";
     //   var div =document.getElementById(dest).childNodes[1];
       // div.innerHTML=temperature+" °C";
       document.getElementById("meteo").div.style.color="blue";
        var temps=document.getElementById(dest).childNodes[2];
        temps.innerHTML=resJson.weather[0].description;
        temps.style.color="green";
        console.log("")


    }