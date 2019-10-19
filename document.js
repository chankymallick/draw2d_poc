var jsonDocument = 
[
  {
    "type": "TableShape",
    "id": "63c0f27a-716e-804c-6873-cd99b945b63f",
    "x": 80,
    "y": 59,
    "width": 133.515625,
    "height": 95.984375,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "TableShape",
    "bgColor": "#296adb",
    "color": "#D7D7D7",
    "stroke": 1,
    "radius": 3,
    "dasharray": null,
    "gap": 0,
    "name": "Group",
    "entities": [
      {
        "text": "id",
        "id": "49be7d78-4dcf-38ab-3733-b4108701f1"
      },
      {
        "text": "employee_fk",
        "id": "49be7d78-4dcf-38ab-3733-b4108701fce4"
      }
    ]
  },
  {
    "type": "TableShape",
    "id": "wewe",
    "x": 190,
    "y": 170,
    "width": 133.515625,
    "height": 95.984375,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "TableShape",
    "bgColor": "#296adb",
    "color": "#D7D7D7",
    "stroke": 1,
    "radius": 3,
    "dasharray": null,
    "gap": 0,
    "name": "Group",
    "entities": [
      {
        "text": "id",
        "id": "123"
      },
      {
        "text": "employee_fk",
        "id": "asas"
      }
    ]
  },
  {
    "type": "TableShape",
    "id": "3253ff2a-a920-09d5-f033-ca759a778e19",
    "x": 605,
    "y": 311,
    "width": 129.0625,
    "height": 147.171875,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "TableShape",
    "bgColor": "#DBDDDE",
    "color": "#D7D7D7",
    "stroke": 1,
    "radius": 3,
    "dasharray": null,
    "gap": 0,
    "name": "Employee",
    "entities": [
      {
        "text": "id",
        "id": "e97f6f8a-4306-0667-3a95-0a5310a2c15c"
      },
      {
        "text": "firstName",
        "id": "357e132c-aa47-978f-a1fa-d13da6736989"
      },
      {
        "text": "lastName",
        "id": "a2156a71-f868-1f8f-e9a1-b185dbdfc3de"
      },
      {
        "text": "company_fk",
        "id": "8d410fef-5c6e-286d-c9c3-c152d5bd9c52"
      }
    ]
  },
  {
    "type": "TableShape",
    "id": "2810494b-931f-da59-fd9d-6deba4385fe0",
    "x": 901,
    "y": 198,
    "width": 101.625,
    "height": 69.59375,
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "TableShape",
    "bgColor": "#DBDDDE",
    "color": "#D7D7D7",
    "stroke": 1,
    "radius": 3,
    "dasharray": null,
    "gap": 0,
    "name": "Company",
    "entities": [
      {
        "text": "id",
        "id": "e04ebb27-43c9-1afa-a7d0-e55bf2aa62d5"
      }
    ]
  },
  {
    "type": "draw2d.Connection",
    "id": "19acf411-a02f-557a-7451-f3a741676c7b",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#4CAF50",
    "outlineStroke": 1,
    "outlineColor": "#FFFFFF",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 734.0625,
        "y": 443.9765625
      },
      {
        "x": 817.53125,
        "y": 443.9765625
      },
      {
        "x": 817.53125,
        "y": 253.796875
      },
      {
        "x": 901,
        "y": 253.796875
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 2,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "3253ff2a-a920-09d5-f033-ca759a778e19",
      "port": "output_8d410fef-5c6e-286d-c9c3-c152d5bd9c52"
    },
    "target": {
      "node": "2810494b-931f-da59-fd9d-6deba4385fe0",
      "port": "input_e04ebb27-43c9-1afa-a7d0-e55bf2aa62d5"
    }
  },
  {
    "type": "draw2d.Connection",
    "id": "81cb3b59-66d1-ffc4-3cb7-0bad52ace43b",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#4CAF50",
    "outlineStroke": 1,
    "outlineColor": "#FFFFFF",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 213.515625,
        "y": 140.7890625
      },
      {
        "x": 409.2578125,
        "y": 140.7890625
      },
      {
        "x": 409.2578125,
        "y": 366.796875
      },
      {
        "x": 605,
        "y": 366.796875
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 2,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "63c0f27a-716e-804c-6873-cd99b945b63f",
      "port": "output_49be7d78-4dcf-38ab-3733-b4108701fce4"
    },
    "target": {
      "node": "3253ff2a-a920-09d5-f033-ca759a778e19",
      "port": "input_e97f6f8a-4306-0667-3a95-0a5310a2c15c"
    }
  }
  ,
  {
    "type": "draw2d.Connection",
    "id": "81cb3b59-66d1-ffc4-3cb7-0bad52acrtretrt",
    "alpha": 1,
    "angle": 0,
    "userData": {},
    "cssClass": "draw2d_Connection",
    "stroke": 2,
    "color": "#4CAF50",
    "outlineStroke": 1,
    "outlineColor": "#FFFFFF",
    "policy": "draw2d.policy.line.OrthogonalSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 600.0625,
        "y": 445.9765625
      },
      {
        "x": 885.53125,
        "y": 456.9765625
      },
      {
        "x": 877.53125,
        "y": 233.796875
      },
      {
        "x": 970,
        "y": 260.796875
      }
    ],
    "router": "draw2d.layout.connection.InteractiveManhattanConnectionRouter",
    "radius": 2,
    "routingMetaData": {
      "routedByUserInteraction": false,
      "fromDir": 1,
      "toDir": 3
    },
    "source": {
      "node": "wewe",
      "port": "123"
    },
    "target": {
      "node": "3253ff2a-a920-09d5-f033-ca759a778e19",
      "port": "input_e97f6f8a-4306-0667-3a95-0a5310a2c15c"
    }
  }
];