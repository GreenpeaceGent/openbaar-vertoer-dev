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
      "message": "Wist je dat er op Vlaams niveau beslist is om meer dan 5000 bushaltes te schrappen?<br><br>Niet te geloven!"
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
      "message": ""
    },    {
      "id": "1-3",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/3.jpg",
      "coords": {
        "lat": 51.05077,
        "long": 3.73713
      },
      "message": ""
    },    {
      "id": "1-4",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/4.jpg",
      "coords": {
        "lat": 51.05020,
        "long": 3.73772
      },
             "message": ""
    },    {
      "id": "1-5",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/5.jpg",
      "coords": {
        "lat": 51.07256,
        "long": 3.76124
      },
             "message": ""
    },    {
      "id": "1-6",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/6.jpg",
      "coords": {
        "lat": 51.05076,
        "long": 3.74060
      },
             "message": ""
    },    {
      "id": "1-7",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/7.jpg",
      "coords": {
        "lat": 51.05407,
        "long": 3.73981
      },
             "message": ""
    },    {
      "id": "1-8",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/8.jpg",
      "coords": {
        "lat": 51.07120,
        "long": 3.75673
      },
             "message": ""
    },    {
      "id": "1-9",
      "found": false,
      "unlocked": false,
      "image":"images/stage1/9.jpg",
      "coords": {
        "lat": 51.05916,
        "long": 3.74520
      },
             "message": ""
    }
  ];

var accuracy = 0.001;
var stageId = "fase1";
var locations = JSON.parse(window.localStorage.getItem(stageId));

if(!locations){
    locations = locationsNew;
}