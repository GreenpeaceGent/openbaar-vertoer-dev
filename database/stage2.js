var locationsNew = [
    {
      "id": "2-1",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/1.jpg",
      "coords": {
         "lat": 51.06582,
         "long": 3.75357
      },
      "message": "Wist je dat er op Vlaams niveau beslist is om meer dan 5000 bushaltes te schrappen?<br><br>Niet te geloven!"
    },
    {
      "id": "2-2",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/2.jpg",
      "coords": {
        "lat": 51.07329,
        "long": 3.76783
      },
      "message": ""
    },    {
      "id": "2-3",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/3.jpg",
      "coords": {
        "lat": 51.05077,
        "long": 3.73713
      },
      "message": ""
    },    {
      "id": "2-4",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/4.jpg",
      "coords": {
        "lat": 51.05020,
        "long": 3.73772
      },
             "message": ""
    },    {
      "id": "2-5",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/5.jpg",
      "coords": {
        "lat": 51.07256,
        "long": 3.76124
      },
             "message": ""
    },    {
      "id": "2-6",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/6.jpg",
      "coords": {
        "lat": 51.05076,
        "long": 3.74060
      },
             "message": ""
    },    {
      "id": "2-7",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/7.jpg",
      "coords": {
        "lat": 51.05407,
        "long": 3.73981
      },
             "message": ""
    },    {
      "id": "2-8",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/8.jpg",
      "coords": {
        "lat": 51.07120,
        "long": 3.75673
      },
             "message": ""
    },    {
      "id": "2-9",
      "found": false,
      "unlocked": false,
      "image":"images/stage2/9.jpg",
      "coords": {
        "lat": 51.02671233989268,
        "long":  3.709910767454892
      },
             "message": ""
    }
  ];

var accuracy = 0.0004;
var stageId = "fase2";
var locations = JSON.parse(window.localStorage.getItem(stageId));

if(!locations){
    locations = locationsNew;
}