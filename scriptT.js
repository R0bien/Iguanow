// Copie du texte
function copySearchUrl() {
    var searchUrl = document.getElementById("search-url").firstChild.href;
    navigator.clipboard.writeText(searchUrl)
        .then(alert("Hyperlien permanent Iguana copié dans le presse-papier!"))
        .catch(error => console.error("Erreur de copie: " + error));
}

function recherche() {
    document.getElementById("lien").click();
}

// déclaration des variables
function updateSearchUrl() {
    var searchTerm = document.getElementById("search-box").value;
    var searchUrl = "https://www.bibliotheques-clermontmetropole.eu/iguana/www.main.cls?sUrl=search#searchTerm=" + encodeURIComponent(searchTerm);

// Accès aux résultats de recherche en pressant Entrée
var input = document.getElementById("search-box");
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter"){
    event.preventDefault();
    document.getElementById("lien").click();
  }
}, {once : true});

    // Index
    var indexValue = document.getElementById("index").value;
    if (indexValue == "titre") {
        searchUrl += "&Index1=Texact";
      } else if (indexValue === "auteur") {
        searchUrl += "&Index1=Iguanaauteurs$";
      } else if (indexValue === "multi") {
        searchUrl += "&Index1=Iguanamulticritere";
      } else if (indexValue === "cote") {
        searchUrl += "&Index1=Iguanacote";
      } else if (indexValue === "isbn") {
        searchUrl += "&Index1=Uindex07";
        };

        // Compte des cases Site cochées
        var checkSite = document.getElementsByClassName('site');
        var checkedSiteCount = false;
        for (var i = 0; i < checkSite.length; i++) {
            if (checkSite[i].checked) {
                checkedSiteCount = true;
            }
        }

		// Compte des cases Nature cochées
		var checkNature = document.getElementsByClassName('nature');
		var checkedNatureCount = false;
		for (var i = 0; i < checkNature.length; i++) {
			if (checkNature[i].checked) {
				checkedNatureCount = true;
			}
		}
		
		// Compte des cases Langue cochées
		var checkLangue = document.getElementsByClassName('langue');
		var checkedLangueCount = false;
		for (var i = 0; i < checkLangue.length; i++) {
			if (checkLangue[i].checked) {
				checkedLangueCount = true;
			}
		}    

        //dates
        var dateDebut = document.getElementById("date1").value;
        var dateFin = document.getElementById("date2").value;
        var date = "Date_" + encodeURIComponent(dateDebut) + "-" + encodeURIComponent(dateFin);

        function contientNombre(str) {
            var compte = /\d/;
            return compte.test(str);
          }


            //Compte total des cases cochées
            var checkedCount = 0;
            if (checkedSiteCount >= 1) {
                checkedCount++;
            } if (checkedNatureCount >= 1) {
                checkedCount++;
            } if (checkedLangueCount >= 1) {
                checkedCount++;
            } if (contientNombre(date)) {
                checkedCount++;
            }

        //site
        var loca = "Location_"
        if (document.getElementById("site-blanzat").checked) {
            loca += "CAM/BLAAC~";
        } if (document.getElementById("site-neyrat").checked) {
            loca += "CAM/CFJR~";
        } if (document.getElementById("site-gerzat").checked) {
            loca += "CAM/GERAD~";
        }
		//nature d'ouvrage
        var checkboxesNature = [
            { id: "nature-livre", value: "LIV~LIVCP~" },
            { id: "nature-cd", value: "CDMUS~CDMUSCP~" },
            { id: "nature-dvd", value: "FILM~FILMCP~FILM12~FILM12CP~FILM16~FILM16CP~FILM18~FILM18CP~" },
            { id: "nature-perio", value: "PERIO~PERIOCP~PERIOISO~PERIOISOCP~" },
            { id: "nature-audio", value: "TXTLUS~TXTLUSCP~" },
            { id: "nature-ebook", value: "EBOOK~" },
            { id: "nature-affiche", value: "AFFCP~"},
            { id: "nature-archive", value: "ARCCP~"},
            { id: "nature-boite", value: "BH~BHCP~"},
            { id: "nature-jeu", value: "BJ~BJCP~"},
            { id: "nature-liseuse", value: "LIS~" },
            { id: "nature-plan", value: "CA~CACP~" },
            
            { id: "nature-part", value: "PARTIMP~PARTIMPCP~PARTMANCP~" },
            
            
            { id: "nature-vinyl", value: "VIN~VINCP~" },
        ];
        
        var natu = "PublicationType_";
        
        checkboxesNature.forEach(function(checkboxNature) {
            if (document.getElementById(checkboxNature.id).checked) {
                natu += checkboxNature.value;
            }
        });

        //langue
        var lang = "Language_"
        if (document.getElementById("langue-francais").checked) {
            lang += "fre~";
        } if (document.getElementById("langue-anglais").checked) {
            lang += "eng~";
        } if (document.getElementById("langue-allemand").checked) {
            lang += "ger~";
        }

 //Supprimer ~ superflue
 if (loca.endsWith("~")) {
    loca = loca.slice(0, -1);
} if (natu.endsWith("~")) {
    natu = natu.slice(0, -1);
} if (lang.endsWith("~")) {
    lang = lang.slice(0, -1);
} if (date.endsWith("-")) {
    date = date.slice(0, -1);
}

var res = "";
var usedLoca = false;
var usedNatu = false;
var usedLang = false;

for (var i = 1; i <= checkedCount; i++) {
  res += "&Restriction" + i + "=";
  if (checkedSiteCount >= 1 && !usedLoca) {
    res += loca;
    usedLoca = true;
  } else if (checkedNatureCount >= 1 && !usedNatu) {
    res += natu;
    usedNatu = true;
  } else if (checkedLangueCount >= 1 && !usedLang) {
    res += lang;
    usedLang = true;
  } else if (contientNombre(date)) {
    res += date;
  }
}

    //faire apparaitre l'url
    document.getElementById("search-url").innerHTML = '<a id="lien" href="' + searchUrl + res + '" target="_blank">' + searchUrl + res + '</a>';
}

function newTheme() {
    var theme = document.getElementsByTagName('link')[0];
    // passer en mode simple
    if (theme.getAttribute('href') == 'styleModerne.css') { 
        theme.setAttribute('href', 'styleSimple.css');
    
    // repasser en mode moderne
    } else { 
        theme.setAttribute('href', 'styleModerne.css'); 
    } 
} 
