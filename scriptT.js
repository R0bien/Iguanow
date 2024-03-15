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

            //Compte total des cases cochées
            var checkedCount = 0;
            if (checkedSiteCount >= 1) {
                checkedCount++;
            } if (checkedNatureCount >= 1) {
                checkedCount++;
            } if (checkedLangueCount >= 1) {
                checkedCount++;
            }

        //site
        var loca = "Location_"
        if (document.getElementById("site-blanzat").checked) {
            loca += "CAM/BLAAC~";
        }
        if (document.getElementById("site-neyrat").checked) {
            loca += "CAM/CFJR~";
        }
        if (document.getElementById("site-gerzat").checked) {
            loca += "CAM/GERAD~";
        }


    			// Si un seul filtre est coché
                var res1 = ""
                if (checkedCount >= 1){
                res1 += "&Restriction1="
                        // Si une case Site est cochée
                        if (checkedSiteCount >= 1) {
                            res1 += loca;
                        } else if (checkedNatureCount >= 1) {
                            res1 += "PublicationType_";
                        } else if (checkedLangueCount >= 1) {
                            res1 += "Language_";
                        }
                        console.log(searchUrl + res1);
                    }

        //Supprimer ~ superflue
        if (searchUrl.endsWith("~")) {
            searchUrl = searchUrl.slice(0, -1);
        }
		
		// Si deux filtres sont cochés
        if (checkedCount >= 2){
            searchUrl += "&Restriction2="
        }

                // Si une case Nature est cochée
                if (checkedNatureCount >= 1) {
                    searchUrl += "PublicationType_";
                }

		//nature d'ouvrage
		if (document.getElementById("nature-livre").checked) {
			searchUrl += "LIV~LIVCP~";
		}
		if (document.getElementById("nature-cd").checked) {
			searchUrl += "CDMUS~CDMUSCP~";
		}
		if (document.getElementById("nature-vinyl").checked) {
		searchUrl += "VIN~VINCP~";
		}
		if (document.getElementById("nature-dvd").checked) {
			searchUrl += "FILM~FILMCP~FILM12~FILM12CP~FILM16~FILM16CP~FILM18~FILM18CP~";
		}
		if (document.getElementById("nature-ebook").checked) {
			searchUrl += "EBOOK~";
		}
		if (document.getElementById("nature-perio").checked) {
			searchUrl += "PERIO~PERIOCP~PERIOISO~PERIOISOCP~";
		}
		if (document.getElementById("nature-part").checked) {
			searchUrl += "PARTIMP~PARTIMPCP~PARTMANCP~";
		}
		if (document.getElementById("nature-audio").checked) {
			searchUrl += "TXTLUS~TXTLUSCP~";
		}
		if (document.getElementById("nature-plan").checked) {
			searchUrl += "CA~CACP~";
		}
		if (document.getElementById("nature-liseuse").checked) {
			searchUrl += "LIS~";
		}
		
		        //Supprimer ~ superflue
        if (searchUrl.endsWith("~")) {
            searchUrl = searchUrl.slice(0, -1);
        }
		
				// Si trois filtres sont cochés
        if (checkedCount >= 3){
            searchUrl += "&Restriction3="
        }

                // Si une case Nature est cochée
                if (checkedLangueCount >= 1) {
                    searchUrl += "Language_";
                }
    
    //Retirer ~ finale
    if (searchUrl.endsWith("~")) {
        searchUrl = searchUrl.slice(0, -1);
    }

    //faire apparaitre l'url
    document.getElementById("search-url").innerHTML = '<a id="lien" href="' + searchUrl +'" target="_blank">' + searchUrl + '</a>';
}