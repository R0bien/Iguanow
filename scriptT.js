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
        var checkboxesSite = [
            { id: "site-blanzat", value: "CAM/BLAAC~" },
            { id: "site-pdc", value: "CAM/PDCAR~" },
            { id: "site-aubiere", value: "CAM/AUBAV~" },
            { id: "site-gerzat", value: "CAM/GERAD~" },
            { id: "site-cham", value: "CAM/CHAAM~" },
            { id: "site-roma", value: "CAM/ROMAB~" },
            { id: "site-cournon", value: "CAM/COUHP~" },
            { id: "site-neyrat", value: "CAM/CFJR~" },
            { id: "site-lempdes", value: "CAM/LEMJP~" },
            { id: "site-jaude", value: "CAM/CFJAU~" },
            { id: "site-ceyrat", value: "CAM/CEYPT~" },
            { id: "site-orcines", value: "CAM/ORCEJ~" },
            { id: "site-sgc", value: "CAM/SGCNC~" },
            { id: "site-beaumont", value: "CAM/BEARGC~" },
            { id: "site-aulnat", value: "CAM/AULRS~" },
            { id: "site-aaf", value: "CAM/CFJAUAF~" },
            { id: "site-ajz", value: "CAM/CFJAUJZ~" },
            { id: "site-cendre", value: "CAM/LECHP~" },
            { id: "site-b1", value: "CAM/BUS1~" },
            { id: "site-b2", value: "CAM/BUS2~" },
            { id: "site-conser", value: "CAM/CFCEH~" },
            { id: "site-art", value: "CAM/CFESACM~" },
            { id: "site-jetee", value: "CAM/CFJET~" },
            { id: "site-marq", value: "CAM/CFMARQ~" },
            { id: "site-bargoin", value: "CAM/CFMB~" },
            { id: "site-resist", value: "CAM/CHAMR~" },
            { id: "site-lecoq", value: "CAM/CFMHL~" },
            { id: "site-patri", value: "CAM/CFPAT~" },
            { id: "site-music", value: "CAM/MUSICME~" },
            { id: "site-pel", value: "CAM/PEL~" },
            { id: "site-skill", value: "CAM/SKIL~" },
            { id: "site-vod", value: "CAM/ARTEVOD~" },
            { id: "site-yeux", value: "CAM/YEUXDOC~" },
        ];

        var loca = "Location_";

        checkboxesSite.forEach(function(checkboxSite) {
            if (document.getElementById(checkboxSite.id).checked) {
                loca += checkboxSite.value;
            }
        });

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
            { id: "nature-plan", value: "CA~CACP~"},
            { id: "nature-carte", value: "CAPO~CAPOCP~" },
            { id: "nature-cdrom", value: "CDR~CDRCP~" },
            { id: "nature-enreg", value: "SONCP~" },
            { id: "nature-estampe", value: "GRACP~" },
            { id: "nature-jeuv", value: "JV~JVCP~" },
            { id: "nature-kami", value: "KAM~KAMCP~" },
            { id: "nature-liseuse", value: "LIS~" },
            { id: "nature-manu", value: "MANCP~" },
            { id: "nature-method", value: "METHO~METHOCP~" },
            { id: "nature-microf", value: "MICP~" },
            { id: "nature-objet", value: "OBJ~OBJCP~" },
            { id: "nature-part", value: "PARTIMP~PARTIMPCP~PARTMANCP~" },
            { id: "nature-photo", value: "PHOTOCP~" },
            { id: "nature-recueil", value: "RECCP~" },
            { id: "nature-elec", value: "RESSEL~RESSELCP~" },
            { id: "nature-tablette", value: "TAB~TABCP~" },
            { id: "nature-vinyl", value: "VIN~VINCP~" },
        ];
        
        var natu = "PublicationType_";
        
        checkboxesNature.forEach(function(checkboxNature) {
            if (document.getElementById(checkboxNature.id).checked) {
                natu += checkboxNature.value;
            }
        });

        //langue
        var checkboxesLangue = [
            { id: "langue-allemand", value: "ger~" },
            { id: "langue-anglais", value: "eng~" },
            { id: "langue-anglo", value: "ang~" },
            { id: "langue-arabe", value: "ara~" },
            { id: "langue-breton", value: "bre~" },
            { id: "langue-chinois", value: "chi~" },
            { id: "langue-coreen", value: "kor~" },
            { id: "langue-creole", value: "cpe~" },
            { id: "langue-danois", value: "dan~" },
            { id: "langue-espagnol", value: "spa~" },
            { id: "langue-esperanto", value: "esp~" },
            { id: "langue-finnois", value: "fin~" },
            { id: "langue-francais", value: "fre~" },
            { id: "langue-fancien", value: "fro~" },
            { id: "langue-fmoyen", value: "frm~" },
            { id: "langue-gancien", value: "grc~" },
            { id: "langue-grec", value: "gre~" },
            { id: "langue-hebreu", value: "heb~" },
            { id: "langue-hindi", value: "hin~" },
            { id: "langue-hongrois", value: "hun~" },
            { id: "langue-italien", value: "ita~" },
            { id: "langue-japonais", value: "jpn~" },
            { id: "langue-latin", value: "lat~" },
            { id: "langue-neerlandais", value: "dut~" },
            { id: "langue-nilo", value: "ssa~" },
            { id: "langue-norvegien", value: "nor~" },
            { id: "langue-occitan", value: "oci~" },
            { id: "langue-persan", value: "per~" },
            { id: "langue-polonais", value: "pol~" },
            { id: "langue-portugais", value: "por~" },
            { id: "langue-roumain", value: "rum~" },
            { id: "langue-russe", value: "rus~" },
            { id: "langue-suedois", value: "swe~" },
            { id: "langue-tcheque", value: "cze~" },
            { id: "langue-turc", value: "tur~" },
            { id: "langue-wallon", value: "wln~" },
            { id: "langue-multi", value: "mul~" },
        ];

        var lang = "Language_";
        
        checkboxesLangue.forEach(function(checkboxLangue) {
            if (document.getElementById(checkboxLangue.id).checked) {
                lang += checkboxLangue.value;
            }
        });

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