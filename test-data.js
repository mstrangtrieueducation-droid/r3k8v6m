const A = "assets/images/";
const TOTAL_POINTS = 50;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });

const sections = [
  { key: "A", label: "A", title: "Listen and circle the correct answer.", note: "Play the audio and choose True or False.", points: 4, audio: "assets/audio/Listening-A.mp3", questions: [
    choice("A1", "1.", ["T", "F"], "T", "The official answer key marks statement 1 True."),
    choice("A2", "2.", ["T", "F"], "T", "The official answer key marks statement 2 True."),
    choice("A3", "3.", ["T", "F"], "F", "The official answer key marks statement 3 False."),
    choice("A4", "4.", ["T", "F"], "F", "The official answer key marks statement 4 False.")
  ]},
  { key: "B", label: "B", title: "Look and complete the sentences.", note: "Use each picture to complete the original sentence.", points: 3, questions: [
    input("B1", "1. He is the ___.", ["winner"], "The runner crossing the finish line first is the winner.", A + "b1-winner.png"),
    input("B2", "2. There are many people running in the big ___ today.", ["race"], "The picture shows runners competing in a race.", A + "b2-race.png"),
    input("B3", "3. The ___ is 4-2.", ["score"], "The numbers 4-2 show the score of the game.", A + "b3-score.png")
  ]},
  { key: "C", label: "C", title: "Unscramble the words and match.", note: "Write the word correctly, then choose its matching definition. The letters a, b, and c are the original definition labels.", points: 6, questions: [
    { id: "C1", type: "paired", points: 2, prompt: "1. f i l y a m - r e i o n u n", parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["family reunion", "family-reunion"], explanation: "The letters form family reunion." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["b"], explanation: "Definition b describes a family reunion: a day when many family members get together." }
    ]},
    { id: "C2", type: "paired", points: 2, prompt: "2. f i r a", parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["fair"], explanation: "The letters form fair." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["a"], explanation: "Definition a describes a fair: an outdoor event with food, games, and rides." }
    ]},
    { id: "C3", type: "paired", points: 2, prompt: "3. f l o k - d a c e n", parts: [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["folk dance", "folk-dance"], explanation: "The letters form folk dance." },
      { key: "match", label: "Definition label", type: "choice", options: ["a", "b", "c"], answers: ["c"], explanation: "Definition c describes a folk dance: a famous traditional dance from a country." }
    ]}
  ]},
  { key: "D", label: "D", title: "Check the correct answer.", note: "Choose the adjective that describes the person or thing correctly.", points: 3, questions: [
    choice("D1", "1. I did not know there was a festival today! I'm totally ___.", ["surprised", "surprising"], "surprised", "Surprised describes how the speaker feels."),
    choice("D2", "2. Wow! Your English is ___.", ["amazed", "amazing"], "amazing", "Amazing describes the English that causes the feeling."),
    choice("D3", "3. Sarah is very sleepy. She's ___.", ["tired", "tiring"], "tired", "Tired describes Sarah's feeling or condition.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences.", note: "Use excited, exciting, bored, or boring.", points: 3, wordBank: ["excited", "exciting", "bored", "boring"], questions: [
    input("E1", "1. This tennis game is so ___. We want to know who will win!", ["exciting"], "The game causes excitement, so use exciting."),
    input("E2", "2. The movie was really ___. I fell asleep after only fifteen minutes.", ["boring"], "The movie caused boredom, so use boring."),
    input("E3", "3. The children are ___ to go to the festival tomorrow.", ["excited"], "Excited describes how the children feel.")
  ]},
  { key: "F", label: "F", title: "Write the words in the correct order. Then match the pictures.", note: "Make a complete sentence, then choose the original picture number.", points: 6, questions: [
    { id: "F1", type: "pictureWord", points: 2, prompt: "1. These students / tired / are", pictures: [
      { value: "1", image: A + "f-picture-1.png" }, { value: "2", image: A + "f-picture-2.png" }, { value: "3", image: A + "f-picture-3.png" }
    ], parts: [
      { key: "picture", label: "Picture number", type: "pictureChoice", answers: ["3"], explanation: "Picture 3 shows tired students." },
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["These students are tired.", "These students are tired"], explanation: "Use subject + be + adjective: These students are tired." }
    ]},
    { id: "F2", type: "pictureWord", points: 2, prompt: "2. Laila / is / in / soccer / interested", pictures: [
      { value: "1", image: A + "f-picture-1.png" }, { value: "2", image: A + "f-picture-2.png" }, { value: "3", image: A + "f-picture-3.png" }
    ], parts: [
      { key: "picture", label: "Picture number", type: "pictureChoice", answers: ["2"], explanation: "Picture 2 shows Laila interested in the soccer game." },
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["Laila is interested in soccer.", "Laila is interested in soccer"], explanation: "Interested is followed by in: Laila is interested in soccer." }
    ]},
    { id: "F3", type: "pictureWord", points: 2, prompt: "3. She / an amazing / is / dancer", pictures: [
      { value: "1", image: A + "f-picture-1.png" }, { value: "2", image: A + "f-picture-2.png" }, { value: "3", image: A + "f-picture-3.png" }
    ], parts: [
      { key: "picture", label: "Picture number", type: "pictureChoice", answers: ["1"], explanation: "Picture 1 shows an amazing dancer." },
      { key: "sentence", label: "Complete sentence", type: "input", answers: ["She is an amazing dancer.", "She is an amazing dancer"], explanation: "Use subject + be + article + adjective + noun: She is an amazing dancer." }
    ]}
  ]},
  { key: "G", label: "G", title: "Listen and circle the correct answer.", note: "Play the audio and choose True or False.", points: 4, audio: "assets/audio/Listening-G.mp3", questions: [
    choice("G1", "1.", ["T", "F"], "F", "The official answer key marks statement 1 False."),
    choice("G2", "2.", ["T", "F"], "F", "The official answer key marks statement 2 False."),
    choice("G3", "3.", ["T", "F"], "T", "The official answer key marks statement 3 True."),
    choice("G4", "4.", ["T", "F"], "T", "The official answer key marks statement 4 True.")
  ]},
  { key: "H", label: "H", title: "Complete the sentences.", note: "Write the word that completes each sentence correctly.", points: 4, questions: [
    input("H1", "1. A river runs through the ___ with steep cliffs on both sides.", ["canyon"], "A canyon is a deep valley with steep sides."),
    input("H2", "2. We can drink water from the mountain ___.", ["stream"], "A stream is a small, narrow flow of water."),
    input("H3", "3. Be careful! You don't want to ___ your phone in the water!", ["drop"], "Drop means to let something fall."),
    input("H4", "4. The children love to run, ___, and play outside.", ["skip"], "Skip is an outdoor movement that fits the list of activities.")
  ]},
  { key: "I", label: "I", title: "Look and complete the sentences.", note: "Use the picture to identify the missing word.", points: 4, questions: [
    input("I1", "1. Small fish are swimming in the ___.", ["lake"], "The picture shows a lake, a body of water surrounded by land.", A + "i1-lake.png"),
    input("I2", "2. We can see lots of animals on the ___.", ["plain", "plains"], "A plain is a large, flat area of land. The official key accepts plain or plains.", A + "i2-plain.png"),
    input("I3", "3. She is going to ___ you! Watch out!", ["catch"], "The girl behind is trying to catch the other girl.", A + "i3-catch.png"),
    input("I4", "4. I love to ___ the ball.", ["kick"], "The picture shows a foot kicking a ball.", A + "i4-kick.png")
  ]},
  { key: "J", label: "J", title: "Rewrite the sentences.", note: "Use the correct -ing form of the word in parentheses.", points: 4, questions: [
    input("J1", "1. (Swim) is easy.", ["Swimming is easy.", "Swimming is easy"], "A verb used as the subject takes the -ing form: Swimming is easy."),
    input("J2", "2. The children love (dance).", ["The children love dancing.", "The children love dancing"], "Love can be followed by a verb in the -ing form: love dancing."),
    input("J3", "3. I think (ski) is fun.", ["I think skiing is fun.", "I think skiing is fun"], "Add -ing to ski: skiing. The activity is the subject of is fun."),
    input("J4", "4. John likes to go (fish).", ["John likes to go fishing.", "John likes to go fishing"], "Use go + activity in the -ing form: go fishing.")
  ]},
  { key: "K", label: "K", title: "Write the words in the correct order to make sentences.", note: "Write each complete sentence with correct word order.", points: 5, questions: [
    input("K1", "1. I / reading / think / easy / is", ["I think reading is easy.", "I think reading is easy"], "Place I think first, then the clause reading is easy."),
    input("K2", "2. Playing / in / game / is / football / a / fun", ["Playing in a football game is fun.", "Playing in a football game is fun"], "Playing in a football game is the subject; is fun completes the sentence."),
    input("K3", "3. like / They / eating / ice cream", ["They like eating ice cream.", "They like eating ice cream"], "Use subject + like + -ing activity: They like eating ice cream."),
    input("K4", "4. mother / singing / hard / is / My / thinks", ["My mother thinks singing is hard.", "My mother thinks singing is hard"], "My mother thinks introduces the idea singing is hard."),
    input("K5", "5. hard / work / Cooking / is", ["Cooking is hard work.", "Cooking is hard work"], "Cooking is the subject; hard work is the complement.")
  ]},
  { key: "L", label: "L", title: "Look and complete the sentences.", note: "Use the correct activity from the word box.", points: 4, wordBank: ["playing piano", "studying English", "jumping rope", "swimming", "running"], questions: [
    input("L1", "1. She loves ___.", ["running"], "The picture shows a woman running.", A + "l1-running.png"),
    input("L2", "2. ___ is a lot of fun.", ["Playing piano"], "The picture shows a child playing piano.", A + "l2-piano.png"),
    input("L3", "3. Andy likes ___.", ["studying English"], "Andy is studying English in the picture.", A + "l3-studying.png"),
    input("L4", "4. ___ is good exercise.", ["Jumping rope"], "The picture shows a girl jumping rope.", A + "l4-rope.png")
  ]}
];
