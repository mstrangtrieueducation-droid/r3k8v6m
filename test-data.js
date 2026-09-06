const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });

const sections = [
  {
    "key": "A",
    "label": "A",
    "title": "Listen and circle the correct answer.",
    "note": "Play the audio and choose True or False.",
    "points": 4,
    "audio": "assets/audio/Listening-A.mp3",
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 1 True.",
        "image": "",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 2 True.",
        "image": "",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "F"
        ],
        "explanation": "The official answer key marks statement 3 False.",
        "image": "",
        "points": 1
      },
      {
        "id": "A4",
        "type": "choice",
        "prompt": "4.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "F"
        ],
        "explanation": "The official answer key marks statement 4 False.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "B",
    "label": "B",
    "title": "Look and complete the sentences.",
    "note": "Use each picture to complete the original sentence.",
    "points": 3,
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. He is the ___.",
        "answers": [
          "winner"
        ],
        "explanation": "The runner crossing the finish line first is the winner.",
        "image": "assets/images/b1-winner.png",
        "points": 1
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. There are many people running in the big ___ today.",
        "answers": [
          "race"
        ],
        "explanation": "The picture shows runners competing in a race.",
        "image": "assets/images/b2-race.png",
        "points": 1
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. The ___ is 4-2.",
        "answers": [
          "score"
        ],
        "explanation": "The numbers 4-2 show the score of the game.",
        "image": "assets/images/b3-score.png",
        "points": 1
      }
    ]
  },
  {
    "key": "C",
    "label": "C",
    "title": "Unscramble the words and match.",
    "note": "Write the word correctly, then choose its matching definition. The letters a, b, and c are the original definition labels.",
    "points": 6,
    "questions": [
      {
        "id": "C1",
        "type": "paired",
        "points": 2,
        "prompt": "1. f i l y a m - r e i o n u n",
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "family reunion",
              "family-reunion"
            ],
            "explanation": "The letters form family reunion."
          },
          {
            "key": "match",
            "label": "Definition label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c"
            ],
            "answers": [
              "b"
            ],
            "explanation": "Definition b describes a family reunion: a day when many family members get together."
          }
        ]
      },
      {
        "id": "C2",
        "type": "paired",
        "points": 2,
        "prompt": "2. f i r a",
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "fair"
            ],
            "explanation": "The letters form fair."
          },
          {
            "key": "match",
            "label": "Definition label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c"
            ],
            "answers": [
              "a"
            ],
            "explanation": "Definition a describes a fair: an outdoor event with food, games, and rides."
          }
        ]
      },
      {
        "id": "C3",
        "type": "paired",
        "points": 2,
        "prompt": "3. f l o k - d a c e n",
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "folk dance",
              "folk-dance"
            ],
            "explanation": "The letters form folk dance."
          },
          {
            "key": "match",
            "label": "Definition label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c"
            ],
            "answers": [
              "c"
            ],
            "explanation": "Definition c describes a folk dance: a famous traditional dance from a country."
          }
        ]
      }
    ]
  },
  {
    "key": "D",
    "label": "D",
    "title": "Check the correct answer.",
    "note": "Choose the adjective that describes the person or thing correctly.",
    "points": 3,
    "questions": [
      {
        "id": "D1",
        "type": "choice",
        "prompt": "1. I did not know there was a festival today! I'm totally ___.",
        "options": [
          "surprised",
          "surprising"
        ],
        "answers": [
          "surprised"
        ],
        "explanation": "Surprised describes how the speaker feels.",
        "image": "",
        "points": 1
      },
      {
        "id": "D2",
        "type": "choice",
        "prompt": "2. Wow! Your English is ___.",
        "options": [
          "amazed",
          "amazing"
        ],
        "answers": [
          "amazing"
        ],
        "explanation": "Amazing describes the English that causes the feeling.",
        "image": "",
        "points": 1
      },
      {
        "id": "D3",
        "type": "choice",
        "prompt": "3. Sarah is very sleepy. She's ___.",
        "options": [
          "tired",
          "tiring"
        ],
        "answers": [
          "tired"
        ],
        "explanation": "Tired describes Sarah's feeling or condition.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "E",
    "label": "E",
    "title": "Complete the sentences.",
    "note": "Use excited, exciting, bored, or boring.",
    "points": 3,
    "wordBank": [
      "excited",
      "exciting",
      "bored",
      "boring"
    ],
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. This tennis game is so ___. We want to know who will win!",
        "answers": [
          "exciting"
        ],
        "explanation": "The game causes excitement, so use exciting.",
        "image": "",
        "points": 1
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. The movie was really ___. I fell asleep after only fifteen minutes.",
        "answers": [
          "boring"
        ],
        "explanation": "The movie caused boredom, so use boring.",
        "image": "",
        "points": 1
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. The children are ___ to go to the festival tomorrow.",
        "answers": [
          "excited"
        ],
        "explanation": "Excited describes how the children feel.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "F",
    "label": "F",
    "title": "Write the words in the correct order. Then match the pictures.",
    "note": "Make a complete sentence, then choose the original picture number.",
    "points": 6,
    "questions": [
      {
        "id": "F1",
        "type": "pictureWord",
        "points": 2,
        "prompt": "1. These students / tired / are",
        "pictures": [
          {
            "value": "1",
            "image": "assets/images/f-picture-1.png"
          },
          {
            "value": "2",
            "image": "assets/images/f-picture-2.png"
          },
          {
            "value": "3",
            "image": "assets/images/f-picture-3.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Picture number",
            "type": "pictureChoice",
            "answers": [
              "3"
            ],
            "explanation": "Picture 3 shows tired students."
          },
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "These students are tired.",
              "These students are tired"
            ],
            "explanation": "Use subject + be + adjective: These students are tired."
          }
        ]
      },
      {
        "id": "F2",
        "type": "pictureWord",
        "points": 2,
        "prompt": "2. Laila / is / in / soccer / interested",
        "pictures": [
          {
            "value": "1",
            "image": "assets/images/f-picture-1.png"
          },
          {
            "value": "2",
            "image": "assets/images/f-picture-2.png"
          },
          {
            "value": "3",
            "image": "assets/images/f-picture-3.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Picture number",
            "type": "pictureChoice",
            "answers": [
              "2"
            ],
            "explanation": "Picture 2 shows Laila interested in the soccer game."
          },
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "Laila is interested in soccer.",
              "Laila is interested in soccer"
            ],
            "explanation": "Interested is followed by in: Laila is interested in soccer."
          }
        ]
      },
      {
        "id": "F3",
        "type": "pictureWord",
        "points": 2,
        "prompt": "3. She / an amazing / is / dancer",
        "pictures": [
          {
            "value": "1",
            "image": "assets/images/f-picture-1.png"
          },
          {
            "value": "2",
            "image": "assets/images/f-picture-2.png"
          },
          {
            "value": "3",
            "image": "assets/images/f-picture-3.png"
          }
        ],
        "parts": [
          {
            "key": "picture",
            "label": "Picture number",
            "type": "pictureChoice",
            "answers": [
              "1"
            ],
            "explanation": "Picture 1 shows an amazing dancer."
          },
          {
            "key": "sentence",
            "label": "Complete sentence",
            "type": "input",
            "answers": [
              "She is an amazing dancer.",
              "She is an amazing dancer"
            ],
            "explanation": "Use subject + be + article + adjective + noun: She is an amazing dancer."
          }
        ]
      }
    ]
  },
  {
    "key": "G",
    "label": "G",
    "title": "Listen and circle the correct answer.",
    "note": "Play the audio and choose True or False.",
    "points": 4,
    "audio": "assets/audio/Listening-G.mp3",
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "F"
        ],
        "explanation": "The official answer key marks statement 1 False.",
        "image": "",
        "points": 1
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "F"
        ],
        "explanation": "The official answer key marks statement 2 False.",
        "image": "",
        "points": 1
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 3 True.",
        "image": "",
        "points": 1
      },
      {
        "id": "G4",
        "type": "choice",
        "prompt": "4.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "The official answer key marks statement 4 True.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "H",
    "label": "H",
    "title": "Complete the sentences.",
    "note": "Write the word that completes each sentence correctly.",
    "points": 4,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. A river runs through the ___ with steep cliffs on both sides.",
        "answers": [
          "canyon"
        ],
        "explanation": "A canyon is a deep valley with steep sides.",
        "image": "",
        "points": 1
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. We can drink water from the mountain ___.",
        "answers": [
          "stream"
        ],
        "explanation": "A stream is a small, narrow flow of water.",
        "image": "",
        "points": 1
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. Be careful! You don't want to ___ your phone in the water!",
        "answers": [
          "drop"
        ],
        "explanation": "Drop means to let something fall.",
        "image": "",
        "points": 1
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. The children love to run, ___, and play outside.",
        "answers": [
          "skip"
        ],
        "explanation": "Skip is an outdoor movement that fits the list of activities.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "I",
    "label": "I",
    "title": "Look and complete the sentences.",
    "note": "Use the picture to identify the missing word.",
    "points": 4,
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "1. Small fish are swimming in the ___.",
        "answers": [
          "lake"
        ],
        "explanation": "The picture shows a lake, a body of water surrounded by land.",
        "image": "assets/images/i1-lake.png",
        "points": 1
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "2. We can see lots of animals on the ___.",
        "answers": [
          "plain",
          "plains"
        ],
        "explanation": "A plain is a large, flat area of land. The official key accepts plain or plains.",
        "image": "assets/images/i2-plain.png",
        "points": 1
      },
      {
        "id": "I3",
        "type": "input",
        "prompt": "3. She is going to ___ you! Watch out!",
        "answers": [
          "catch"
        ],
        "explanation": "The girl behind is trying to catch the other girl.",
        "image": "assets/images/i3-catch.png",
        "points": 1
      },
      {
        "id": "I4",
        "type": "input",
        "prompt": "4. I love to ___ the ball.",
        "answers": [
          "kick"
        ],
        "explanation": "The picture shows a foot kicking a ball.",
        "image": "assets/images/i4-kick.png",
        "points": 1
      }
    ]
  },
  {
    "key": "J",
    "label": "J",
    "title": "Rewrite the sentences.",
    "note": "Use the correct -ing form of the word in parentheses.",
    "points": 4,
    "questions": [
      {
        "id": "J1",
        "type": "input",
        "prompt": "1. (Swim) is easy.",
        "answers": [
          "Swimming is easy.",
          "Swimming is easy"
        ],
        "explanation": "A verb used as the subject takes the -ing form: Swimming is easy.",
        "image": "",
        "points": 1
      },
      {
        "id": "J2",
        "type": "input",
        "prompt": "2. The children love (dance).",
        "answers": [
          "The children love dancing.",
          "The children love dancing"
        ],
        "explanation": "Love can be followed by a verb in the -ing form: love dancing.",
        "image": "",
        "points": 1
      },
      {
        "id": "J3",
        "type": "input",
        "prompt": "3. I think (ski) is fun.",
        "answers": [
          "I think skiing is fun.",
          "I think skiing is fun"
        ],
        "explanation": "Add -ing to ski: skiing. The activity is the subject of is fun.",
        "image": "",
        "points": 1
      },
      {
        "id": "J4",
        "type": "input",
        "prompt": "4. John likes to go (fish).",
        "answers": [
          "John likes to go fishing.",
          "John likes to go fishing"
        ],
        "explanation": "Use go + activity in the -ing form: go fishing.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "K",
    "label": "K",
    "title": "Write the words in the correct order to make sentences.",
    "note": "Write each complete sentence with correct word order.",
    "points": 5,
    "questions": [
      {
        "id": "K1",
        "type": "input",
        "prompt": "1. I / reading / think / easy / is",
        "answers": [
          "I think reading is easy.",
          "I think reading is easy"
        ],
        "explanation": "Place I think first, then the clause reading is easy.",
        "image": "",
        "points": 1
      },
      {
        "id": "K2",
        "type": "input",
        "prompt": "2. Playing / in / game / is / football / a / fun",
        "answers": [
          "Playing in a football game is fun.",
          "Playing in a football game is fun"
        ],
        "explanation": "Playing in a football game is the subject; is fun completes the sentence.",
        "image": "",
        "points": 1
      },
      {
        "id": "K3",
        "type": "input",
        "prompt": "3. like / They / eating / ice cream",
        "answers": [
          "They like eating ice cream.",
          "They like eating ice cream"
        ],
        "explanation": "Use subject + like + -ing activity: They like eating ice cream.",
        "image": "",
        "points": 1
      },
      {
        "id": "K4",
        "type": "input",
        "prompt": "4. mother / singing / hard / is / My / thinks",
        "answers": [
          "My mother thinks singing is hard.",
          "My mother thinks singing is hard"
        ],
        "explanation": "My mother thinks introduces the idea singing is hard.",
        "image": "",
        "points": 1
      },
      {
        "id": "K5",
        "type": "input",
        "prompt": "5. hard / work / Cooking / is",
        "answers": [
          "Cooking is hard work.",
          "Cooking is hard work"
        ],
        "explanation": "Cooking is the subject; hard work is the complement.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "L",
    "label": "L",
    "title": "Look and complete the sentences.",
    "note": "Use the correct activity from the word box.",
    "points": 4,
    "wordBank": [
      "playing piano",
      "studying English",
      "jumping rope",
      "swimming",
      "running"
    ],
    "questions": [
      {
        "id": "L1",
        "type": "input",
        "prompt": "1. She loves ___.",
        "answers": [
          "running"
        ],
        "explanation": "The picture shows a woman running.",
        "image": "assets/images/l1-running.png",
        "points": 1
      },
      {
        "id": "L2",
        "type": "input",
        "prompt": "2. ___ is a lot of fun.",
        "answers": [
          "Playing piano"
        ],
        "explanation": "The picture shows a child playing piano.",
        "image": "assets/images/l2-piano.png",
        "points": 1
      },
      {
        "id": "L3",
        "type": "input",
        "prompt": "3. Andy likes ___.",
        "answers": [
          "studying English"
        ],
        "explanation": "Andy is studying English in the picture.",
        "image": "assets/images/l3-studying.png",
        "points": 1
      },
      {
        "id": "L4",
        "type": "input",
        "prompt": "4. ___ is good exercise.",
        "answers": [
          "Jumping rope"
        ],
        "explanation": "The picture shows a girl jumping rope.",
        "image": "assets/images/l4-rope.png",
        "points": 1
      }
    ]
  }
];
