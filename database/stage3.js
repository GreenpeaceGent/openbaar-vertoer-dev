var locationsNew = [
    {
      "id": "3-1",
      "found": false,
      "unlocked": false,
      "image":"images/stage3/1.jpg",
      "coords": {
         "lat": 51.05708255975067,
         "long": 3.751097008181898
      },
      "message": "placeholder"
    },
    {
      "id": "3-2",
      "found": false,
      "unlocked": false,
      "image":"images/stage3/2.jpg",
      "coords": {
        "lat": 51.061654434497285,
        "long": 3.7489456766963514
      },
      "message": "placeholder"
    },    {
      "id": "3-3",
      "found": false,
      "unlocked": false,
      "image":"images/stage3/3.jpg",
      "coords": {
        "lat": 51.0475475538537,
        "long": 3.7398914790735187
      },
      "message": "placeholder"
    },    {
      "id": "3-4",
      "found": false,
      "unlocked": false,
      "image":"images/stage3/4.jpg",
      "coords": {
        "lat": 51.05012067466999,
        "long":  3.7527886367628445
      },
             "message": "placeholder"
    },    {
      "id": "3-5",
      "found": false,
      "unlocked": false,
      "image":"images/stage3/5.jpg",
      "coords": {
        "lat": 51.05903626999114,
        "long": 3.749408896428171
      },
             "message": "placeholder"
    },    {
      "id": "3-6",
      "found": false,
      "unlocked": false,
      "image":"images/stage3/6.jpg",
      "coords": {
        "lat": 51.06823618278698,
        "long": 3.7623967072454962
      },
             "message": "placeholder"
    },    {
      "id": "3-7",
      "found": false,
      "unlocked": false,
      "image":"images/stage3/7.jpg",
      "coords": {
        "lat": 51.0546506432428,
        "long": 3.753590606326049
      },
             "message": "placeholder"
    },    {
      "id": "3-8",
      "found": false,
      "unlocked": false,
      "image":"images/stage3/8.jpg",
      "coords": {
        "lat": 51.04698785649376,
        "long": 3.7524932434058402
      },
             "message": "placeholder"
    },    {
      "id": "3-9",
      "found": false,
      "unlocked": false,
      "image":"images/stage3/9.jpg",
      "coords": {
        "lat": 51.04773578821672,
        "long": 3.7476702553088272
      },
             "message": "placeholder"
    }
  ];

var accuracy = 0.001;
var stageId = "fase3";
var locations = JSON.parse(window.localStorage.getItem(stageId));

if(!locations){
    locations = locationsNew;
}