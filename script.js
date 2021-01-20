$('button').click(function(){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + $('input:text').val() + "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

    $.getJSON(url, function (response) {
        $('#temperature_label').text(response.main.temp);
        $('#ville').text(response.name);
    })
});

$("#button").click(function() {
    $('<div id="overlay"></div>').appendTo($('#overlay')).css(`
        'position' : 'absolute', 'top': '0', 'left': '0', 'zIndex': '10', 'backgroundColor': 'rgba(204,204,204,0.72)',
        'width': '100%', 'height': '100vh'
    `);

    $(` <div id="window">
          <p>Bienvenue, sur mon application météo!</p> 
          <p>Clique sur le bouton pour changer de ville</p>
          <p>La grenouille te donnera la température de ta ville!</p>
        </div>`
    ).appendTo($('#overlay')
    ).css(`'backgroundColor': 'lightblue', 'position': 'absolute', 'zIndex': '15', 'left': '30%', 'width': '50%', 'fontWeight': 'bold'`);

    $('<button id="button-close">Fermer</button>').appendTo($('#window')).css('zIndex', '15').click(() => $("#overlay, #window").remove());
});