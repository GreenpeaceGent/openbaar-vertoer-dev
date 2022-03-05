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
      "message": "De kernnet-lijnen die hier passeren (70 – 78) zullen geen verhoogde frequentie krijgen. Men verwacht hier wel een stijging in reizigersaantallen, wanneer de ontsluitende bus in de woonwijk afgeschaft wordt."
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
      "message": "De halte voorbij deze brug wordt intensief gebruikt door de studenten van het volwassenonderwijs, maar is één van de zes haltes die in deze wijk zullen verdwijnen. "
    },    {
      "id": "1-3",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/3.jpg",
      "coords": {
        "lat": 51.052012016588165,
        "long": 3.7362334075831285
      },
      "message": "Deze schildering is te zien aan de muur van het lokaal dienstencentrum De Horizon. Een halte voor de deur hier zou evident moeten zijn, gezien de vele activiteiten, vooral gericht op ouderen en mensen die niet goed te been zijn.<br><br>Desondanks was men van plan om deze halte te schrappen door besparingen op De Lijn. Ondertussen is deze halte gered nadat de buurt van zich heeft laten horen en stad Gent hier voor wil betalen.<br><img style='width:100%' src='images/stage1/actieBus6Horizon.JPG'>"
    },    {
      "id": "1-4",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/4.jpg",
      "coords": {
        "lat": 51.05020,
        "long": 3.73772
      },
             "message": "Het decreet basisbereikbaarheid wil dat het openbaar vervoer efficiënter wordt. Bussen moeten frequenter rijden op de drukste lijnen en minder halte houden, vaak ten koste van woonwijken of dorpskernen."
    },    {
      "id": "1-5",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/5.jpg",
      "coords": {
        "lat": 51.07256,
        "long": 3.76124
      },
             "message": "Halte Sint-Amandsberg Gevaertstraat<br><br> Dit is een van de 6 te schrappen haltes op het traject van huidige lijnen 38/39. Sommige haltes hier hebben meer dan 100 gebruikers per dag. Door werken worden de haltes aan de overkant niet meer bediend."
    },    {
      "id": "1-6",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/6.jpg",
      "coords": {
        "lat": 51.05076,
        "long": 3.74060
      },
             "message": "Omdat het decreet basisbereikbaarheid ook geen extra budget voorziet, moet elke investering die ergens gedaan wordt in het bus- en tramnet elders worden gecompenseerd. Er kunnen nieuwe buslijnen ontstaan, of de frequentie kan aanzienlijk verhoogd worden op een bepaalde lijn(enbundel), maar daarvoor moeten er ook offers gebracht worden op andere plaatsen."
    },    {
      "id": "1-7",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/7.jpg",
      "coords": {
        "lat": 51.05407,
        "long": 3.73981
      },
             "message": "Ook voor (binnenlandse) toeristen is het gemakkelijk met het OV naar Gent te gaan om alle bezienswaardigheden vlot en goedkoop te kunnen bezoeken."
    },    {
      "id": "1-8",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/8.jpg",
      "coords": {
        "lat": 51.07120,
        "long": 3.75673
      },
             "message": "Deze halte wordt de nieuwe eindhalte van huidige lijnen 38/39. Daardoor valt de volledige wijk tussen hier en Oostakker Lourdes zonder ontsluitende busverbinding. Dat zijn alle haltes die je nog tegenkomt, behalve de eindhalte Goedlevenstraat."
    },    {
      "id": "1-9",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/9.jpg",
      "coords": {
        "lat": 51.05916,
        "long": 3.74520
      },
             "message": "Welkom in Sint-Amandsberg! In deze deelgemeente is al veel reactie gekomen op de gevolgen van het decreet basisbereikbaarheid."
    }
  ];

var accuracy = 0.001;
var stageId = "fase1";
var locations = JSON.parse(window.localStorage.getItem(stageId));

if(!locations){
    locations = locationsNew;
}