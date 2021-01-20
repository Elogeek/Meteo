let changerDeVille = document.querySelector('#meteo');

function donneTemperature(ville) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            } else {
                alert('un problème est survenu');
            }
        }
    }
}
changerDeVille.addEventListener('click', () => {
    let villeChoisie = document.getElementById('ville-input');
    donneTemperature(villeChoisie.value);
})

//make overlay//
let over = document.getElementById("overlay");
document.querySelector("#button-open").addEventListener("click", function(e) {
    let monDiv = document.createElement('div');
    monDiv.style.position = "absolute";
    monDiv.style.top ="0";
    monDiv.style.left = "0";
    monDiv.style.zIndex = "10";
    monDiv.style.backgroundColor = "rgba(27,4,4,0.44)";
    monDiv.style.width = "100%";
    monDiv.style.height = "100vh";
    over.appendChild(monDiv)

    let div2 = document.createElement("div");
    div2.id = "window";
    div2.style.backgroundColor = "#6DD5FA";
    div2.style.visibility = 0.5;
    div2.style.position = "absolute";
    div2.style.zIndex = "15";
    div2.style.left = "30%";
    div2.style.height = "50vh";
    div2.style.width = "50%";
    div2.innerHTML = "Bienvenue, sur mon application météo!\n" + " Clique sur le bouton pour changer de ville.\n" + "La grenouille te donnera la température de ta ville! ";
    div2.style.fontWeight = "bold";
    over.appendChild(div2);

    /*my button*/
    let closed = document.createElement("button");
    closed.id = "button-close";
    closed.innerHTML = "Fermer";
    closed.style.zIndex = "15";
    div2.appendChild(closed);

    /*closed my window*/
    closed.addEventListener("click", function (event) {
        monDiv.remove();
        div2.remove();
    });
});

