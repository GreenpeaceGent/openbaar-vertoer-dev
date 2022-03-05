var locationsNew = [
    {
      "id": "2-1",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/1.jpg",
      "coords": {
         "lat": 51.0703057283781,
         "long":  3.7624012330467242
      },
      "message": "Als u het spel op 6/3/2022 speelt, zult u hier een houten bus zien staan en enkele mensen van Zonder Bushalte Straat. Deze bus is ontstaan tijdens een actie met Zonder Bushalte Straat, Busje Blijft Zo en Greenpeace Gent. Wees welkom om een foto te nemen en deze te delen met #stopdehaltesloop."
    },
    {
      "id": "2-2",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/2.jpg",
      "coords": {
        "lat": 51.07157707607564,
        "long":  3.7669718286217626
      },
      "message": "Lokaal actiecomité Zonder Bushalte Straat hing begin 2020 overal in de wijk dergelijke bordjes op. Via via was men te weten gekomen dat zes bushaltes in de wijken Zingemkouter en Vogelzang zouden geschrapt worden, zonder enige burgerparticipatie. Een aantal bewoners van de wijk zijn daarop een petitie gestart en verzamelden al snel meer dan 1000 handtekeningen."
    },    {
      "id": "2-3",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/3.jpg",
      "coords": {
        "lat": 51.07163310476768,
        "long":  3.76885520142914
      },
      "message": "Wanneer de busverbinding in de wijk geschrapt wordt, is de kortste weg naar een andere bushalte door deze wegel. Het pad is onverhard en vol met putten (plassen als het regent) en er is geen straatverlichting. Voor mensen die minder mobiel zijn, is dit absoluut geen oplossing."
    },    {
      "id": "2-4",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/4.jpg",
      "coords": {
        "lat": 51.07735953394975,
        "long": 3.766665202354416
      },
             "message": "Het kruispunt waaraan deze basisschool zich bevindt, is een heel gevaarlijk kruispunt ’s morgens en ’s namiddags. De straat is erg smal, er moeten fietsers, auto’s en lijnbussen door. Door intensief gebruik van de bus zou de straat veiliger kunnen worden, maar de halte hier wordt afgeschaft binnen het decreet Basisbereikbaarheid."
    },    {
      "id": "2-5",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/5.jpg",
      "coords": {
        "lat": 51.07252702189583,
        "long":  3.766031285785109
      },
             "message": "Hier ziet u een aanrijdbare boordsteen. Het trottoir is hier even hoog als de vloer van een bus. Door een lichte kromming in de steen kunnen bussen heel dicht bij het voetpad aanrijden, wat de kloof tussen de deur en het voetpad aanzienlijk verkleint. Boordstenen als deze zorgen ervoor dat mensen met kinderwagens, boodschappentrolleys, rollators of rolstoelen gemakkelijker kunnen in- en uitstappen. Niet alle haltes zijn met dergelijke stenen uitgerust, ze kosten namelijk 4 keer meer dan gewone boordstenen. Is het niet vreemd dat zelfs haltes waar men deze investering voor gedaan heeft geschrapt worden? De halte die zich hier bevond, is reeds afgeschaft in 2016."
    },    {
      "id": "2-6",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/6.jpg",
      "coords": {
        "lat": 51.07366957276086,
        "long": 3.7687873946555586
      },
             "message": "Hier bevindt zich het Centrum voor Volwassenonderwijs CVO Groeipunt. Veel studenten maken gebruik van de bushalte voor de deur. Aan deze halte hebben een aantal protestacties plaatsgevonden van lokaal actiecomité Zonder Bushalte Straat, dat ijvert voor het behoud van de lijnbus in de wijk. In juni 2021 en op 6 maart 2022 laten we het symbolisch het doek vallen over de reeds afgeschafte halte aan de overkant<br><img style='width:100%' src='images/stage2/actieCVO.jpg'>"
    },    {
      "id": "2-7",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/7.jpg",
      "coords": {
        "lat": 51.07115977771878,
        "long": 3.767738061987642
      },
             "message": "De wijken die hier zonder busverbinding dreigen te vallen, tellen meer dan 5000 inwoners, waaronder veel gezinnen met kinderen. Buslijnen 38/39 bieden een uitstekende rechtstreekse verbinding met verschillende scholen in Gent en Oostakker: Edugo, Sint-Janscollege, Sint-Lievenscollege, enz."
    },    {
      "id": "2-8",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/8.jpg",
      "coords": {
        "lat": 51.07496919231733,
        "long": 3.7675497412049057
      },
             "message": "In 2016 werden reeds twee haltes geschrapt in de wijk, omdat de afstand tussen de haltes onderling te klein was. Het schuilhuisje staat er echter nog steeds, en wordt nu sinds een tijdje gebruikt als fietsenstalling."
    },    {
      "id": "2-9",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/9.jpg",
      "coords": {
        "lat": 51.071898890596486,
        "long":  3.7644290411768195
      },
             "message": "Op plaatsen waar geen reguliere bus meer zal rijden komt er 'Vervoer op Maat' met  flexbussen, deelfietsen, -steps en -auto’s. Een mooi idee, maar geen alternatief voor bestaande busverbindingen. Aangezien veel mensen niet kunnen of met de auto rijden, met nog meer vervoersarmoede als resultaat. Daarbij komen nieuwe drempels: je moet apart reserveren en zult er wellicht meer voor moeten betalen dan vandaag (het is een privatisering)."
    }
  ];

var accuracy = 0.0004;
var stageId = "fase2";
var locations = JSON.parse(window.localStorage.getItem(stageId));

if(!locations){
    locations = locationsNew;
}