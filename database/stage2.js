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
      "message": "placeholder"
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
      "message": "placeholder"
    },    {
      "id": "2-3",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/3.jpg",
      "coords": {
        "lat": 51.07163310476768,
        "long":  3.76885520142914
      },
      "message": "placeholder"
    },    {
      "id": "2-4",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/4.jpg",
      "coords": {
        "lat": 51.07735953394975,
        "long": 3.766665202354416
      },
             "message": "placeholder"
    },    {
      "id": "2-5",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/5.jpg",
      "coords": {
        "lat": 51.07252702189583,
        "long":  3.766031285785109
      },
             "message": "placeholder"
    },    {
      "id": "2-6",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/6.jpg",
      "coords": {
        "lat": 51.07366957276086,
        "long": 3.7687873946555586
      },
             "message": "placeholder"
    },    {
      "id": "2-7",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/7.jpg",
      "coords": {
        "lat": 51.07115977771878,
        "long": 3.767738061987642
      },
             "message": "placeholder"
    },    {
      "id": "2-8",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/8.jpg",
      "coords": {
        "lat": 51.07496919231733,
        "long": 3.7675497412049057
      },
             "message": "placeholder"
    },    {
      "id": "2-9",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/9.jpg",
      "coords": {
        "lat": 51.071898890596486,
        "long":  3.7644290411768195
      },
             "message": "placeholder"
    }
  ];

var accuracy = 0.0004;
var stageId = "fase2";
var locations = JSON.parse(window.localStorage.getItem(stageId));

if(!locations){
    locations = locationsNew;
}