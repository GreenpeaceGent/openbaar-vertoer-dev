var locationsNew = [
    {
      "id": "1-1",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/1.jpg",
      "coords": {
         "lat": 51.06582,
         "long": 3.75357
      },
      "message": "placeholder"
    },
    {
      "id": "1-2",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/2.jpg",
      "coords": {
        "lat": 51.07329,
        "long": 3.76783
      },
      "message": "Voorbij deze brug bevindt zich het Centrum voor Volwassenenonderwijs van Artevelde. De halte aan deze school wordt intensief gebruikt door de studenten, maar deze halte is één van de zes haltes die in deze wijk zullen verdwijnen. "
    },    {
      "id": "1-3",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/3.jpg",
      "coords": {
        "lat": 51.052012016588165,
        "long": 3.7362334075831285
      },
      "message": "Deze schildering is te zien aan de muur van het lokaal dienstencentrum De Horizon. Een halte voor de deur hier zou evident moeten zijn, gezien de vele activiteiten, en vooral de activiteiten gericht op ouderen en mensen die niet goed te been zijn.<br><br>Desondanks was men van plan om deze halte te schrappen door besparingen op De Lijn. Ondertussen is deze halte gered nadat de buurt van zich heeft laten horen en stad Gent hier voor wil betalen."
    },    {
      "id": "1-4",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/4.jpg",
      "coords": {
        "lat": 51.05020,
        "long": 3.73772
      },
             "message": "placeholder"
    },    {
      "id": "1-5",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/5.jpg",
      "coords": {
        "lat": 51.07256,
        "long": 3.76124
      },
             "message": "Halte Sint-Amandsberg Gevaertstraat<br><br> Dit is een van de 6 te schrappen haltes op het traject van huidige lijnen 38/39. In deze wijk, tussen het Snellaertplein en ruwweg Oostakker Lourdes, wonen meer dan 5000 mensen. Deze lijnenbundel is de enige die doorheen de wijk rijdt, sommige haltes kennen een gemiddeld aantal gebruikers van meer dan 100 per dag."
    },    {
      "id": "1-6",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/6.jpg",
      "coords": {
        "lat": 51.05076,
        "long": 3.74060
      },
             "message": "placeholder"
    },    {
      "id": "1-7",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/7.jpg",
      "coords": {
        "lat": 51.05407,
        "long": 3.73981
      },
             "message": "Het Openbaar Vervoer is een belangrijke schakel in stedelijke mobiliteit. Ook voor (binnenlandse) toeristen is het gemakkelijk met het OV naar Gent te gaan om alle bezienswaardigheden vlot en goedkoop te kunnen bezoeken."
    },    {
      "id": "1-8",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/8.jpg",
      "coords": {
        "lat": 51.07120,
        "long": 3.75673
      },
             "message": "Deze halte wordt de nieuwe eindhalte van huidige lijnen 38/39, wanneer het decreet Basisbereikbaarheid in voege treedt in 2023. Alle haltes hierna worden afgeschaft, vanaf ruwweg de middelbare school Edugo in Oostakker zullen de haltes opnieuw bediend worden door een nieuwe lijn. Daardoor valt de volledige wijk tussen Oostakker Lourdes en dit Snellaertplein zonder ontsluitende busverbinding."
    },    {
      "id": "1-9",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/9.jpg",
      "coords": {
        "lat": 51.05916,
        "long": 3.74520
      },
             "message": "placeholder"
    }
  ];

var accuracy = 0.001;
var stageId = "fase1";
var locations = JSON.parse(window.localStorage.getItem(stageId));

if(!locations){
    locations = locationsNew;
}