// 4000 Essential English Words Data Structure
const vocabularyData = {
    books: {}
};

// Book 3 data with real unit titles and complete word lists
const book3Data = {
  "title": "Book 3 - Pre-Intermediate Level",
  "units": {
    "1": {
      "title": "Unit 1: The Great Pyramids of Egypt",
      "words": [
        {
          "word": "acre",
          "partOfSpeech": "noun",
          "meaning": "a measure of land (about 4,000 square meters)",
          "example": "The farmer bought two acres of farmland."
        },
        {
          "word": "afterlife",
          "partOfSpeech": "noun",
          "meaning": "life that people believe continues after death",
          "example": "Ancient Egyptians believed strongly in the afterlife."
        },
        {
          "word": "archaeology",
          "partOfSpeech": "noun",
          "meaning": "the study of ancient history through objects and remains",
          "example": "She studied archaeology to understand past cultures."
        },
        {
          "word": "chamber",
          "partOfSpeech": "noun",
          "meaning": "a large or special room",
          "example": "The king met his visitors in the grand chamber."
        },
        {
          "word": "channel",
          "partOfSpeech": "noun",
          "meaning": "a passage for water; also a television station",
          "example": "The canal is a channel that connects two rivers."
        },
        {
          "word": "core",
          "partOfSpeech": "noun",
          "meaning": "the central or most important part",
          "example": "Honesty is the core of a good friendship."
        },
        {
          "word": "corridor",
          "partOfSpeech": "noun",
          "meaning": "a hallway or passage in a building",
          "example": "The students walked quietly down the corridor."
        },
        {
          "word": "distinct",
          "partOfSpeech": "adjective",
          "meaning": "clearly different or separate",
          "example": "The twins have distinct personalities."
        },
        {
          "word": "elite",
          "partOfSpeech": "adjective/noun",
          "meaning": "the best, most powerful, or most skilled group",
          "example": "Only the elite soldiers were chosen for the mission."
        },
        {
          "word": "engineer",
          "partOfSpeech": "noun",
          "meaning": "a person trained to design and build machines or structures",
          "example": "The engineer designed a new type of bridge."
        },
        {
          "word": "found",
          "partOfSpeech": "verb",
          "meaning": "to establish or create something",
          "example": "They founded a new school in the city."
        },
        {
          "word": "gap",
          "partOfSpeech": "noun",
          "meaning": "an empty space between things",
          "example": "There is a small gap under the door."
        },
        {
          "word": "glory",
          "partOfSpeech": "noun",
          "meaning": "honor, fame, or great beauty",
          "example": "The athlete enjoyed the glory of winning a medal."
        },
        {
          "word": "interior",
          "partOfSpeech": "noun",
          "meaning": "the inside part of something",
          "example": "The car’s interior is very comfortable."
        },
        {
          "word": "lion",
          "partOfSpeech": "noun",
          "meaning": "a large wild cat known as the “king of the jungle",
          "example": "”The lion roared loudly across the plain."
        },
        {
          "word": "role",
          "partOfSpeech": "noun",
          "meaning": "a function, part, or duty someone has",
          "example": "She played an important role in the project."
        },
        {
          "word": "royal",
          "partOfSpeech": "adjective",
          "meaning": "related to a king, queen, or their family",
          "example": "The royal palace was visited by many tourists."
        },
        {
          "word": "sole",
          "partOfSpeech": "adjective",
          "meaning": "only; single",
          "example": "He was the sole survivor of the accident."
        },
        {
          "word": "stairs",
          "partOfSpeech": "noun",
          "meaning": "steps used for going up and down between levels",
          "example": "She ran quickly up the stairs to her room."
        },
        {
          "word": "surface",
          "partOfSpeech": "noun",
          "meaning": "the outside or top layer of something",
          "example": "Ice covered the surface of the lake."
        }
      ]
    },
    "2": {
      "title": "Unit 2: The Real Saint Nick",
      "words": [
        {
          "word": "agreement",
          "partOfSpeech": "noun",
          "meaning": "a decision or arrangement made by two or more people",
          "example": "They made an agreement to share the rent."
        },
        {
          "word": "arise",
          "partOfSpeech": "verb",
          "meaning": "to happen or begin to exist",
          "example": "Problems may arise if you don’t plan carefully."
        },
        {
          "word": "benefactor",
          "partOfSpeech": "noun",
          "meaning": "a person who gives money or help",
          "example": "The hospital was built thanks to a rich benefactor."
        },
        {
          "word": "blacksmith",
          "partOfSpeech": "noun",
          "meaning": "a person who makes and repairs things with iron",
          "example": "The blacksmith forged a new horseshoe."
        },
        {
          "word": "chimney",
          "partOfSpeech": "noun",
          "meaning": "a pipe or structure that lets smoke escape from a building",
          "example": "Smoke rose from the cottage’s chimney."
        },
        {
          "word": "compensate",
          "partOfSpeech": "verb",
          "meaning": "to pay someone for loss or damage; to make up for something",
          "example": "The company will compensate the worker for his injury."
        },
        {
          "word": "encounter",
          "partOfSpeech": "verb/noun",
          "meaning": "to meet unexpectedly; an unexpected meeting",
          "example": "We encountered a bear on the hiking trail."
        },
        {
          "word": "exceed",
          "partOfSpeech": "verb",
          "meaning": "to go beyond a limit",
          "example": "His score exceeded everyone’s expectations."
        },
        {
          "word": "forge",
          "partOfSpeech": "verb",
          "meaning": "to shape metal by heating; to create something strong",
          "example": "The artist forged a beautiful sword."
        },
        {
          "word": "humble",
          "partOfSpeech": "adjective",
          "meaning": "modest; not proud",
          "example": "Despite his success, he stayed humble."
        },
        {
          "word": "iron",
          "partOfSpeech": "noun",
          "meaning": "a strong, hard metal",
          "example": "The gate was made of iron."
        },
        {
          "word": "ladder",
          "partOfSpeech": "noun",
          "meaning": "a tool with steps used for climbing",
          "example": "He climbed a ladder to fix the roof."
        },
        {
          "word": "modest",
          "partOfSpeech": "adjective",
          "meaning": "simple; not showing off",
          "example": "They live in a modest apartment."
        },
        {
          "word": "occupy",
          "partOfSpeech": "verb",
          "meaning": "to take or use a place",
          "example": "The family occupies the house by the river."
        },
        {
          "word": "penny",
          "partOfSpeech": "noun",
          "meaning": "a small coin worth one cent",
          "example": "She found a penny on the ground."
        },
        {
          "word": "preach",
          "partOfSpeech": "verb",
          "meaning": "to give a religious talk or strongly advise something",
          "example": "The priest preached about kindness and forgiveness."
        },
        {
          "word": "prosper",
          "partOfSpeech": "verb",
          "meaning": "to succeed or do well, especially financially",
          "example": "The small business began to prosper quickly."
        },
        {
          "word": "province",
          "partOfSpeech": "noun",
          "meaning": "a region or area within a country",
          "example": "They traveled to a remote province in China."
        },
        {
          "word": "satisfaction",
          "partOfSpeech": "noun",
          "meaning": "a feeling of happiness when needs are met",
          "example": "She felt satisfaction after completing the project."
        },
        {
          "word": "sustain",
          "partOfSpeech": "verb",
          "meaning": "to support, keep alive, or maintain",
          "example": "The villagers worked together to sustain their crops."
        }
      ]
    },
    "3": {
      "title": "Unit 3: The Shepherd and the Wild Sheep",
      "words": [
        {
          "word": "acquire",
          "partOfSpeech": "verb",
          "meaning": "to get something by effort or purchase",
          "example": "She acquired good communication skills through practice."
        },
        {
          "word": "awkward",
          "partOfSpeech": "adjective",
          "meaning": "clumsy; uncomfortable",
          "example": "He felt awkward when he forgot her name."
        },
        {
          "word": "caretaker",
          "partOfSpeech": "noun",
          "meaning": "a person who takes care of something or someone",
          "example": "The caretaker fed the animals at the zoo."
        },
        {
          "word": "deceive",
          "partOfSpeech": "verb",
          "meaning": "to trick or mislead",
          "example": "He deceived everyone with his story."
        },
        {
          "word": "discourage",
          "partOfSpeech": "verb",
          "meaning": "to make someone lose confidence",
          "example": "The rain discouraged us from going outside."
        },
        {
          "word": "fake",
          "partOfSpeech": "adjective/noun",
          "meaning": "not real; made to look genuine",
          "example": "The watch was fake, not gold."
        },
        {
          "word": "hatred",
          "partOfSpeech": "noun",
          "meaning": "strong dislike",
          "example": "There was hatred between the two enemies."
        },
        {
          "word": "hut",
          "partOfSpeech": "noun",
          "meaning": "a small simple shelter",
          "example": "The travelers slept in a wooden hut."
        },
        {
          "word": "inferior",
          "partOfSpeech": "adjective",
          "meaning": "lower in quality or value",
          "example": "This product is inferior to the original."
        },
        {
          "word": "lodge",
          "partOfSpeech": "noun/verb",
          "meaning": "a small cabin; to stay somewhere",
          "example": "We stayed in a mountain lodge."
        },
        {
          "word": "neglect",
          "partOfSpeech": "verb",
          "meaning": "to fail to care for something",
          "example": "He neglected his homework."
        },
        {
          "word": "newcomer",
          "partOfSpeech": "noun",
          "meaning": "someone new in a place",
          "example": "The newcomers were welcomed warmly."
        },
        {
          "word": "offense",
          "partOfSpeech": "noun",
          "meaning": "a crime or violation",
          "example": "Stealing is a serious offense."
        },
        {
          "word": "overlook",
          "partOfSpeech": "verb",
          "meaning": "to fail to notice",
          "example": "He overlooked an important detail."
        },
        {
          "word": "repay",
          "partOfSpeech": "verb",
          "meaning": "to give back money or kindness",
          "example": "She repaid his help with a gift."
        },
        {
          "word": "ridiculous",
          "partOfSpeech": "adjective",
          "meaning": "silly, laughable",
          "example": "That idea is ridiculous."
        },
        {
          "word": "satisfactory",
          "partOfSpeech": "adjective",
          "meaning": "good enough; acceptable",
          "example": "His work was satisfactory."
        },
        {
          "word": "shepherd",
          "partOfSpeech": "noun",
          "meaning": "a person who looks after sheep",
          "example": "The shepherd led his flock to the field."
        },
        {
          "word": "venture",
          "partOfSpeech": "noun/verb",
          "meaning": "a risky journey or project",
          "example": "They started a new business venture."
        },
        {
          "word": "wheat",
          "partOfSpeech": "noun",
          "meaning": "a type of grain used to make bread",
          "example": "The farmer grows wheat every year."
        }
      ]
    },
    "4": {
      "title": "Unit 4: The Boy and His Sled",
      "words": [
        {
          "word": "alley",
          "partOfSpeech": "noun",
          "meaning": "a narrow street between buildings",
          "example": "The cat ran down the alley."
        },
        {
          "word": "ax",
          "partOfSpeech": "noun",
          "meaning": "a tool for chopping wood",
          "example": "He used an ax to cut firewood."
        },
        {
          "word": "bunch",
          "partOfSpeech": "noun",
          "meaning": "a group of the same things",
          "example": "She bought a bunch of bananas."
        },
        {
          "word": "chore",
          "partOfSpeech": "noun",
          "meaning": "a routine task",
          "example": "Washing dishes is a daily chore."
        },
        {
          "word": "decent",
          "partOfSpeech": "adjective",
          "meaning": "acceptable; fairly good",
          "example": "He found a decent job in town."
        },
        {
          "word": "disgraceful",
          "partOfSpeech": "adjective",
          "meaning": "very bad; shameful",
          "example": "His rude behavior was disgraceful."
        },
        {
          "word": "elbow",
          "partOfSpeech": "noun",
          "meaning": "the joint between the arm bones",
          "example": "He hurt his elbow in the game."
        },
        {
          "word": "grateful",
          "partOfSpeech": "adjective",
          "meaning": "thankful",
          "example": "I am grateful for your support."
        },
        {
          "word": "irritate",
          "partOfSpeech": "verb",
          "meaning": "to annoy",
          "example": "Loud noises irritate me."
        },
        {
          "word": "kid",
          "partOfSpeech": "noun",
          "meaning": "a child",
          "example": "The kid played in the park."
        },
        {
          "word": "loose",
          "partOfSpeech": "adjective",
          "meaning": "not tight",
          "example": "The shirt is too loose for him."
        },
        {
          "word": "offend",
          "partOfSpeech": "verb",
          "meaning": "to make someone upset",
          "example": "His comment offended her."
        },
        {
          "word": "overnight",
          "partOfSpeech": "adverb",
          "meaning": "during the night",
          "example": "We stayed overnight at a hotel."
        },
        {
          "word": "persist",
          "partOfSpeech": "verb",
          "meaning": "to continue firmly",
          "example": "She persisted in her studies despite difficulty."
        },
        {
          "word": "pine",
          "partOfSpeech": "noun",
          "meaning": "a type of evergreen tree",
          "example": "The forest was full of pine trees."
        },
        {
          "word": "scar",
          "partOfSpeech": "noun",
          "meaning": "a mark left after a wound heals",
          "example": "He has a scar on his hand."
        },
        {
          "word": "sensation",
          "partOfSpeech": "noun",
          "meaning": "a strong feeling",
          "example": "The medicine gave him a warm sensation."
        },
        {
          "word": "sled",
          "partOfSpeech": "noun",
          "meaning": "a small vehicle for snow",
          "example": "The children rode their sled down the hill."
        },
        {
          "word": "tease",
          "partOfSpeech": "verb",
          "meaning": "to make fun of playfully or meanly",
          "example": "They teased him about his accent."
        },
        {
          "word": "valentine",
          "partOfSpeech": "noun",
          "meaning": "a gift or card for someone on Valentine’s Day",
          "example": "She sent him a valentine with a heart."
        }
      ]
    },
    "5": {
      "title": "Unit 5: Trick or Treat!",
      "words": [
        {
          "word": "acquaint",
          "partOfSpeech": "verb",
          "meaning": "to introduce or make familiar",
          "example": "Let me acquaint you with our new manager."
        },
        {
          "word": "cemetery",
          "partOfSpeech": "noun",
          "meaning": "a place where people are buried",
          "example": "They visited the cemetery on Sunday."
        },
        {
          "word": "creature",
          "partOfSpeech": "noun",
          "meaning": "a living being, especially an animal",
          "example": "Strange creatures live in the ocean."
        },
        {
          "word": "curse",
          "partOfSpeech": "noun/verb",
          "meaning": "evil magic words; to put bad luck on someone",
          "example": "The witch put a curse on the village."
        },
        {
          "word": "disguise",
          "partOfSpeech": "noun/verb",
          "meaning": "clothing or appearance to hide identity",
          "example": "He wore a disguise at the party."
        },
        {
          "word": "fancy",
          "partOfSpeech": "adjective",
          "meaning": "elaborate or expensive",
          "example": "They stayed at a fancy hotel."
        },
        {
          "word": "flashlight",
          "partOfSpeech": "noun",
          "meaning": "a small electric light carried in the hand",
          "example": "She used a flashlight during the power cut."
        },
        {
          "word": "hood",
          "partOfSpeech": "noun",
          "meaning": "a covering for the head and neck",
          "example": "He pulled his hood over his head."
        },
        {
          "word": "inhabitant",
          "partOfSpeech": "noun",
          "meaning": "someone who lives in a place",
          "example": "The cave’s only inhabitants were bats."
        },
        {
          "word": "nourish",
          "partOfSpeech": "verb",
          "meaning": "to provide with food or what is needed",
          "example": "The mother nourishes her baby."
        },
        {
          "word": "pirate",
          "partOfSpeech": "noun",
          "meaning": "a criminal who attacks ships",
          "example": "Pirates stole treasure from the ship."
        },
        {
          "word": "publication",
          "partOfSpeech": "noun",
          "meaning": "printed work like a book or magazine",
          "example": "He read a science publication."
        },
        {
          "word": "riddle",
          "partOfSpeech": "noun",
          "meaning": "a puzzling question",
          "example": "Can you solve this riddle?"
        },
        {
          "word": "rot",
          "partOfSpeech": "verb",
          "meaning": "to decay or break down",
          "example": "The fruit began to rot in the heat."
        },
        {
          "word": "shortly",
          "partOfSpeech": "adverb",
          "meaning": "soon",
          "example": "The train will arrive shortly."
        },
        {
          "word": "skeleton",
          "partOfSpeech": "noun",
          "meaning": "the bones of a body",
          "example": "They found a dinosaur skeleton."
        },
        {
          "word": "spoil",
          "partOfSpeech": "verb",
          "meaning": "to ruin; to overindulge",
          "example": "The rain spoiled our picnic."
        },
        {
          "word": "starve",
          "partOfSpeech": "verb",
          "meaning": "to suffer from hunger",
          "example": "The animals would starve without food."
        },
        {
          "word": "thrill",
          "partOfSpeech": "noun/verb",
          "meaning": "a strong excitement; to excite",
          "example": "The rollercoaster ride was a thrill."
        },
        {
          "word": "wicked",
          "partOfSpeech": "adjective",
          "meaning": "very bad; evil",
          "example": "The wicked queen cast a spell."
        }
      ]
    },
    "6": {
      "title": "Unit 6: The Senator and the Worm",
      "words": [
        {
          "word": "alert",
          "partOfSpeech": "adjective",
          "meaning": "watchful, quick to notice",
          "example": "The guard was alert all night."
        },
        {
          "word": "broadcast",
          "partOfSpeech": "verb",
          "meaning": "to send out on TV or radio",
          "example": "The station broadcast the match live."
        },
        {
          "word": "bulletin",
          "partOfSpeech": "noun",
          "meaning": "a short news report",
          "example": "A weather bulletin warned of storms."
        },
        {
          "word": "bump",
          "partOfSpeech": "verb/noun",
          "meaning": "to hit lightly; a small raised area",
          "example": "She bumped into the chair."
        },
        {
          "word": "chop",
          "partOfSpeech": "verb",
          "meaning": "to cut into pieces",
          "example": "He chopped wood for the fire."
        },
        {
          "word": "closet",
          "partOfSpeech": "noun",
          "meaning": "a small room or cupboard for storage",
          "example": "The shoes are in the closet."
        },
        {
          "word": "console",
          "partOfSpeech": "verb",
          "meaning": "to comfort someone",
          "example": "She consoled her friend after the loss."
        },
        {
          "word": "district",
          "partOfSpeech": "noun",
          "meaning": "an area of a city or country",
          "example": "They live in the business district."
        },
        {
          "word": "drawer",
          "partOfSpeech": "noun",
          "meaning": "a sliding box in furniture",
          "example": "The forks are in the top drawer."
        },
        {
          "word": "endure",
          "partOfSpeech": "verb",
          "meaning": "to suffer patiently",
          "example": "They endured the long journey."
        },
        {
          "word": "execute",
          "partOfSpeech": "verb",
          "meaning": "to carry out or perform",
          "example": "The team executed the plan well."
        },
        {
          "word": "grasp",
          "partOfSpeech": "verb",
          "meaning": "to hold tightly",
          "example": "He grasped the rope firmly."
        },
        {
          "word": "rear",
          "partOfSpeech": "noun/verb",
          "meaning": "the back part; to raise children",
          "example": "The car’s rear lights were broken."
        },
        {
          "word": "senator",
          "partOfSpeech": "noun",
          "meaning": "a member of a senate",
          "example": "The senator gave a speech."
        },
        {
          "word": "skull",
          "partOfSpeech": "noun",
          "meaning": "the bones of the head",
          "example": "The skull protects the brain."
        },
        {
          "word": "stir",
          "partOfSpeech": "verb",
          "meaning": "to mix gently",
          "example": "She stirred sugar into her tea."
        },
        {
          "word": "tap",
          "partOfSpeech": "verb/noun",
          "meaning": "to touch lightly; a device controlling liquid",
          "example": "He tapped the window with his finger."
        },
        {
          "word": "tremendous",
          "partOfSpeech": "adjective",
          "meaning": "very large or great",
          "example": "They made tremendous progress."
        },
        {
          "word": "underneath",
          "partOfSpeech": "preposition/adverb",
          "meaning": "below something",
          "example": "The shoes were hidden underneath the bed."
        },
        {
          "word": "worm",
          "partOfSpeech": "noun",
          "meaning": "a small animal with a soft, long body",
          "example": "Birds eat worms in the soil."
        }
      ]
    },
    "7": {
      "title": "Unit 7: Patsy Ann",
      "words": [
        {
          "word": "abandon",
          "partOfSpeech": "verb",
          "meaning": "to leave behind",
          "example": "They abandoned the old house."
        },
        {
          "word": "ambitious",
          "partOfSpeech": "adjective",
          "meaning": "having strong desire to succeed",
          "example": "She is ambitious and works hard."
        },
        {
          "word": "bark",
          "partOfSpeech": "verb/noun",
          "meaning": "the sound of a dog; tree covering",
          "example": "The dog barked loudly."
        },
        {
          "word": "bay",
          "partOfSpeech": "noun",
          "meaning": "part of the sea partly enclosed by land",
          "example": "The ship sailed into the bay."
        },
        {
          "word": "brilliant",
          "partOfSpeech": "adjective",
          "meaning": "very bright or very smart",
          "example": "The student had a brilliant idea."
        },
        {
          "word": "chin",
          "partOfSpeech": "noun",
          "meaning": "the bottom part of the face",
          "example": "He rested his chin on his hand."
        },
        {
          "word": "complaint",
          "partOfSpeech": "noun",
          "meaning": "an expression of dissatisfaction",
          "example": "She filed a complaint about the noise."
        },
        {
          "word": "deaf",
          "partOfSpeech": "adjective",
          "meaning": "unable to hear",
          "example": "He communicates in sign language because he is deaf."
        },
        {
          "word": "enthusiastic",
          "partOfSpeech": "adjective",
          "meaning": "full of excitement",
          "example": "They were enthusiastic about the trip."
        },
        {
          "word": "expedition",
          "partOfSpeech": "noun",
          "meaning": "a journey for exploration",
          "example": "The team went on an expedition to the Arctic."
        },
        {
          "word": "horizon",
          "partOfSpeech": "noun",
          "meaning": "where earth and sky meet",
          "example": "The sun set on the horizon."
        },
        {
          "word": "loyal",
          "partOfSpeech": "adjective",
          "meaning": "faithful to someone or something",
          "example": "Dogs are very loyal animals."
        },
        {
          "word": "mayor",
          "partOfSpeech": "noun",
          "meaning": "the elected leader of a city",
          "example": "The mayor gave a public speech."
        },
        {
          "word": "mutual",
          "partOfSpeech": "adjective",
          "meaning": "shared between two or more",
          "example": "They developed mutual trust."
        },
        {
          "word": "overweight",
          "partOfSpeech": "adjective",
          "meaning": "heavier than normal",
          "example": "The doctor said he is overweight."
        },
        {
          "word": "refuge",
          "partOfSpeech": "noun",
          "meaning": "shelter or safety",
          "example": "The cave gave them refuge."
        },
        {
          "word": "restore",
          "partOfSpeech": "verb",
          "meaning": "to bring back",
          "example": "They restored the old painting."
        },
        {
          "word": "rub",
          "partOfSpeech": "verb",
          "meaning": "to move something over a surface with pressure",
          "example": "She rubbed cream on her hands."
        },
        {
          "word": "senses",
          "partOfSpeech": "noun",
          "meaning": "abilities to see, hear, smell, taste, and touch",
          "example": "She lost her sense of smell."
        },
        {
          "word": "veterinarian",
          "partOfSpeech": "noun",
          "meaning": "an animal doctor",
          "example": "The veterinarian treated the sick dog."
        }
      ]
    },
    "8": {
      "title": "Unit 8: The Anniversary Gift",
      "words": [
        {
          "word": "anniversary",
          "partOfSpeech": "noun",
          "meaning": "the yearly date of an event",
          "example": "They celebrated their wedding anniversary."
        },
        {
          "word": "arithmetic",
          "partOfSpeech": "noun",
          "meaning": "basic math with numbers",
          "example": "He is good at arithmetic."
        },
        {
          "word": "ashamed",
          "partOfSpeech": "adjective",
          "meaning": "feeling guilty or embarrassed",
          "example": "She felt ashamed after lying."
        },
        {
          "word": "burst",
          "partOfSpeech": "verb",
          "meaning": "to break suddenly",
          "example": "The balloon burst when it touched the grass."
        },
        {
          "word": "carpenter",
          "partOfSpeech": "noun",
          "meaning": "a person who works with wood",
          "example": "The carpenter built a wooden table."
        },
        {
          "word": "coal",
          "partOfSpeech": "noun",
          "meaning": "a black rock used as fuel",
          "example": "They used coal to heat the house."
        },
        {
          "word": "couch",
          "partOfSpeech": "noun",
          "meaning": "a piece of furniture to sit on",
          "example": "They bought a new couch for the living room."
        },
        {
          "word": "drip",
          "partOfSpeech": "verb",
          "meaning": "to fall in drops",
          "example": "Water dripped from the tap."
        },
        {
          "word": "elegant",
          "partOfSpeech": "adjective",
          "meaning": "stylish and graceful",
          "example": "She wore an elegant dress to the party."
        },
        {
          "word": "fabric",
          "partOfSpeech": "noun",
          "meaning": "cloth material",
          "example": "The tailor bought silk fabric."
        },
        {
          "word": "highlands",
          "partOfSpeech": "noun",
          "meaning": "elevated land, usually hills or mountains",
          "example": "The sheep graze in the highlands."
        },
        {
          "word": "ivory",
          "partOfSpeech": "noun",
          "meaning": "hard white material from elephant tusks",
          "example": "The statue was made of ivory."
        },
        {
          "word": "mill",
          "partOfSpeech": "noun",
          "meaning": "a place that grinds grain",
          "example": "The farmer took his wheat to the mill."
        },
        {
          "word": "needle",
          "partOfSpeech": "noun",
          "meaning": "a thin tool for sewing",
          "example": "She used a needle and thread to repair the shirt."
        },
        {
          "word": "polish",
          "partOfSpeech": "verb",
          "meaning": "to make something shine",
          "example": "He polished his shoes before the meeting."
        },
        {
          "word": "sew",
          "partOfSpeech": "verb",
          "meaning": "to join fabric with thread",
          "example": "She sewed a button on her coat."
        },
        {
          "word": "shed",
          "partOfSpeech": "noun",
          "meaning": "a small building for storage",
          "example": "The tools are kept in the shed."
        },
        {
          "word": "thread",
          "partOfSpeech": "noun",
          "meaning": "thin string used for sewing",
          "example": "She used red thread to mend the cloth."
        },
        {
          "word": "trim",
          "partOfSpeech": "verb",
          "meaning": "to cut a little off something",
          "example": "He trimmed the hedge in the garden."
        },
        {
          "word": "upwards",
          "partOfSpeech": "adverb",
          "meaning": "toward a higher place",
          "example": "The bird flew upwards into the sky."
        }
      ]
    },
    "9": {
      "title": "Unit 9: Dalton vs. the Bully",
      "words": [
        {
          "word": "ally",
          "partOfSpeech": "noun",
          "meaning": "a friend or supporter",
          "example": "The two countries are allies."
        },
        {
          "word": "boast",
          "partOfSpeech": "verb",
          "meaning": "to talk with pride",
          "example": "He boasted about his success."
        },
        {
          "word": "bounce",
          "partOfSpeech": "verb",
          "meaning": "to spring back after hitting something",
          "example": "The ball bounced on the floor."
        },
        {
          "word": "bully",
          "partOfSpeech": "noun",
          "meaning": "a person who is mean to weaker people",
          "example": "The bully took his lunch money."
        },
        {
          "word": "carbohydrate",
          "partOfSpeech": "noun",
          "meaning": "a nutrient found in food that gives energy",
          "example": "Rice is high in carbohydrates."
        },
        {
          "word": "crawl",
          "partOfSpeech": "verb",
          "meaning": "to move slowly on hands and knees",
          "example": "The baby crawled across the floor."
        },
        {
          "word": "defeat",
          "partOfSpeech": "verb/noun",
          "meaning": "to win against someone",
          "example": "Our team defeated the champions."
        },
        {
          "word": "dial",
          "partOfSpeech": "verb/noun",
          "meaning": "to press numbers on a phone; a round instrument face",
          "example": "She dialed her friend’s number."
        },
        {
          "word": "dominant",
          "partOfSpeech": "adjective",
          "meaning": "most powerful",
          "example": "The dominant team won easily."
        },
        {
          "word": "entire",
          "partOfSpeech": "adjective",
          "meaning": "whole; complete",
          "example": "He read the entire book."
        },
        {
          "word": "mercy",
          "partOfSpeech": "noun",
          "meaning": "kindness shown to someone in power",
          "example": "The king showed mercy to the prisoner."
        },
        {
          "word": "nod",
          "partOfSpeech": "verb",
          "meaning": "to move the head up and down",
          "example": "She nodded in agreement."
        },
        {
          "word": "opponent",
          "partOfSpeech": "noun",
          "meaning": "someone you compete against",
          "example": "Her opponent was very strong."
        },
        {
          "word": "quarrel",
          "partOfSpeech": "noun/verb",
          "meaning": "an angry argument",
          "example": "The brothers quarreled over a toy."
        },
        {
          "word": "rival",
          "partOfSpeech": "noun",
          "meaning": "a competitor",
          "example": "Their rivals in the contest were very skilled."
        },
        {
          "word": "sore",
          "partOfSpeech": "adjective",
          "meaning": "painful",
          "example": "Her legs were sore after running."
        },
        {
          "word": "sting",
          "partOfSpeech": "verb/noun",
          "meaning": "to hurt with a sharp object; the pain from it",
          "example": "The bee stung his hand."
        },
        {
          "word": "strain",
          "partOfSpeech": "verb/noun",
          "meaning": "to injure or overuse; a type or variety",
          "example": "He strained his back lifting boxes."
        },
        {
          "word": "torture",
          "partOfSpeech": "verb/noun",
          "meaning": "to cause severe pain",
          "example": "The prisoner suffered torture."
        },
        {
          "word": "wrestle",
          "partOfSpeech": "verb",
          "meaning": "to fight by holding and throwing",
          "example": "The boys wrestled in the yard."
        }
      ]
    },
    "10": {
      "title": "Unit 10: Anna the Babysitter",
      "words": [
        {
          "word": "absence",
          "partOfSpeech": "noun",
          "meaning": "the state of being away",
          "example": "Her absence from class was noticed."
        },
        {
          "word": "aloud",
          "partOfSpeech": "adverb",
          "meaning": "spoken so others can hear",
          "example": "He read the story aloud."
        },
        {
          "word": "bald",
          "partOfSpeech": "adjective",
          "meaning": "having no hair",
          "example": "His father is bald."
        },
        {
          "word": "blanket",
          "partOfSpeech": "noun",
          "meaning": "a thick covering for warmth",
          "example": "She pulled a blanket over herself."
        },
        {
          "word": "creep",
          "partOfSpeech": "verb",
          "meaning": "to move quietly and slowly",
          "example": "The cat crept toward the bird."
        },
        {
          "word": "divorce",
          "partOfSpeech": "noun",
          "meaning": "the end of a marriage",
          "example": "They got a divorce last year."
        },
        {
          "word": "imitate",
          "partOfSpeech": "verb",
          "meaning": "to copy",
          "example": "The child imitated his teacher’s voice."
        },
        {
          "word": "infant",
          "partOfSpeech": "noun",
          "meaning": "a very young baby",
          "example": "The infant cried loudly."
        },
        {
          "word": "kidnap",
          "partOfSpeech": "verb",
          "meaning": "to take someone by force",
          "example": "The criminals kidnapped the boy."
        },
        {
          "word": "nap",
          "partOfSpeech": "noun/verb",
          "meaning": "a short sleep",
          "example": "She took a nap after lunch."
        },
        {
          "word": "nowhere",
          "partOfSpeech": "adverb",
          "meaning": "no place",
          "example": "There is nowhere to sit here."
        },
        {
          "word": "pat",
          "partOfSpeech": "verb/noun",
          "meaning": "to touch lightly",
          "example": "She patted the dog’s head."
        },
        {
          "word": "relief",
          "partOfSpeech": "noun",
          "meaning": "comfort after worry",
          "example": "He sighed with relief after the test."
        },
        {
          "word": "reproduce",
          "partOfSpeech": "verb",
          "meaning": "to make copies; to produce children",
          "example": "The machine reproduces documents."
        },
        {
          "word": "rhyme",
          "partOfSpeech": "noun/verb",
          "meaning": "words ending with the same sound",
          "example": "“Cat” and “hat” rhyme."
        },
        {
          "word": "suck",
          "partOfSpeech": "verb",
          "meaning": "to draw in liquid with the mouth",
          "example": "The baby sucked on a bottle."
        },
        {
          "word": "urgent",
          "partOfSpeech": "adjective",
          "meaning": "requiring quick action",
          "example": "It is urgent that you call back."
        },
        {
          "word": "vanish",
          "partOfSpeech": "verb",
          "meaning": "to disappear suddenly",
          "example": "The magician made the rabbit vanish."
        },
        {
          "word": "wagon",
          "partOfSpeech": "noun",
          "meaning": "a vehicle for carrying goods",
          "example": "The farmer loaded hay onto the wagon."
        },
        {
          "word": "wrinkle",
          "partOfSpeech": "noun",
          "meaning": "a line in skin or cloth",
          "example": "His shirt was full of wrinkles."
        }
      ]
    },
    "11": {
      "title": "Unit 11: Peter and the Dwarf",
      "words": [
        {
          "word": "architecture",
          "partOfSpeech": "noun",
          "meaning": "the art of designing buildings",
          "example": "Greek architecture is famous worldwide."
        },
        {
          "word": "basket",
          "partOfSpeech": "noun",
          "meaning": "a container for carrying things",
          "example": "She carried apples in a basket."
        },
        {
          "word": "bloom",
          "partOfSpeech": "verb/noun",
          "meaning": "to produce flowers; a flower itself",
          "example": "The roses are in full bloom."
        },
        {
          "word": "canoe",
          "partOfSpeech": "noun",
          "meaning": "a light, narrow boat",
          "example": "They paddled a canoe across the lake."
        },
        {
          "word": "carpet",
          "partOfSpeech": "noun",
          "meaning": "thick material for covering floors",
          "example": "The living room has a red carpet."
        },
        {
          "word": "cousin",
          "partOfSpeech": "noun",
          "meaning": "the child of your aunt or uncle",
          "example": "I have three cousins in Canada."
        },
        {
          "word": "desk",
          "partOfSpeech": "noun",
          "meaning": "a piece of furniture to write on",
          "example": "The books are on the desk."
        },
        {
          "word": "gallery",
          "partOfSpeech": "noun",
          "meaning": "a place where art is shown",
          "example": "The gallery displayed new paintings."
        },
        {
          "word": "guest",
          "partOfSpeech": "noun",
          "meaning": "a visitor",
          "example": "We had three guests for dinner."
        },
        {
          "word": "host",
          "partOfSpeech": "noun",
          "meaning": "a person who receives guests",
          "example": "The host welcomed everyone warmly."
        },
        {
          "word": "July",
          "partOfSpeech": "noun",
          "meaning": "the seventh month of the year",
          "example": "School is closed in July."
        },
        {
          "word": "modern",
          "partOfSpeech": "adjective",
          "meaning": "recent; up-to-date",
          "example": "The building has a modern design."
        },
        {
          "word": "museum",
          "partOfSpeech": "noun",
          "meaning": "a place where objects are displayed for learning",
          "example": "We visited a history museum."
        },
        {
          "word": "pink",
          "partOfSpeech": "adjective/noun",
          "meaning": "a light red color",
          "example": "She wore a pink dress."
        },
        {
          "word": "plane",
          "partOfSpeech": "noun",
          "meaning": "a vehicle that flies in the sky",
          "example": "The plane landed safely."
        },
        {
          "word": "refrigerator",
          "partOfSpeech": "noun",
          "meaning": "a machine to keep food cold",
          "example": "The milk is in the refrigerator."
        },
        {
          "word": "temperature",
          "partOfSpeech": "noun",
          "meaning": "the degree of heat or cold",
          "example": "The temperature dropped at night."
        },
        {
          "word": "theater",
          "partOfSpeech": "noun",
          "meaning": "a place where plays or movies are shown",
          "example": "They went to the movie theater."
        },
        {
          "word": "upper",
          "partOfSpeech": "adjective",
          "meaning": "higher in position",
          "example": "The bedroom is on the upper floor."
        },
        {
          "word": "welcome",
          "partOfSpeech": "verb/noun",
          "meaning": "to greet kindly",
          "example": "They welcomed us to their home."
        }
      ]
    },
    "12": {
      "title": "Unit 12: The Ice Cream Cone Explosion",
      "words": [
        {
          "word": "anticipate",
          "partOfSpeech": "verb",
          "meaning": "to expect something",
          "example": "We anticipate good results."
        },
        {
          "word": "barrel",
          "partOfSpeech": "noun",
          "meaning": "a large round container",
          "example": "The wine was kept in barrels."
        },
        {
          "word": "beam",
          "partOfSpeech": "noun/verb",
          "meaning": "a long piece of wood/metal; to shine",
          "example": "The flashlight beamed in the dark."
        },
        {
          "word": "casual",
          "partOfSpeech": "adjective",
          "meaning": "relaxed, not formal",
          "example": "He wore casual clothes to the party."
        },
        {
          "word": "caution",
          "partOfSpeech": "noun",
          "meaning": "care to avoid danger",
          "example": "The sign gave a warning of caution."
        },
        {
          "word": "contrary",
          "partOfSpeech": "adjective",
          "meaning": "opposite",
          "example": "Contrary opinions were discussed."
        },
        {
          "word": "deliberate",
          "partOfSpeech": "adjective",
          "meaning": "done on purpose",
          "example": "It was a deliberate choice."
        },
        {
          "word": "dissolve",
          "partOfSpeech": "verb",
          "meaning": "to melt or disappear in liquid",
          "example": "Sugar dissolves in hot tea."
        },
        {
          "word": "explode",
          "partOfSpeech": "verb",
          "meaning": "to burst with force",
          "example": "The bomb exploded suddenly."
        },
        {
          "word": "fasten",
          "partOfSpeech": "verb",
          "meaning": "to close or tie firmly",
          "example": "Fasten your seatbelt before driving."
        },
        {
          "word": "germ",
          "partOfSpeech": "noun",
          "meaning": "a tiny organism that causes disease",
          "example": "Washing hands helps kill germs."
        },
        {
          "word": "kit",
          "partOfSpeech": "noun",
          "meaning": "a set of tools or materials",
          "example": "She bought a sewing kit."
        },
        {
          "word": "puff",
          "partOfSpeech": "noun/verb",
          "meaning": "a small burst of air or smoke; to blow out air",
          "example": "Smoke rose in a puff."
        },
        {
          "word": "rag",
          "partOfSpeech": "noun",
          "meaning": "an old piece of cloth",
          "example": "He cleaned the car with a rag."
        },
        {
          "word": "scatter",
          "partOfSpeech": "verb",
          "meaning": "to spread in many directions",
          "example": "The wind scattered the leaves."
        },
        {
          "word": "scent",
          "partOfSpeech": "noun",
          "meaning": "a smell, often pleasant",
          "example": "The flowers had a sweet scent."
        },
        {
          "word": "steel",
          "partOfSpeech": "noun",
          "meaning": "a strong metal",
          "example": "The building frame was made of steel."
        },
        {
          "word": "swift",
          "partOfSpeech": "adjective",
          "meaning": "fast and quick",
          "example": "The bird made a swift movement."
        },
        {
          "word": "toss",
          "partOfSpeech": "verb",
          "meaning": "to throw lightly",
          "example": "He tossed the ball to his friend."
        },
        {
          "word": "triumph",
          "partOfSpeech": "noun",
          "meaning": "great success or victory",
          "example": "Winning the championship was a triumph."
        }
      ]
    },
    "13": {
      "title": "Unit 13: Sheriff Dan",
      "words": [
        {
          "word": "aboard",
          "partOfSpeech": "adverb/preposition",
          "meaning": "on or into a ship, plane, or train",
          "example": "The passengers went aboard the plane."
        },
        {
          "word": "bitter",
          "partOfSpeech": "adjective",
          "meaning": "having a sharp, unpleasant taste; angry",
          "example": "The coffee tasted bitter."
        },
        {
          "word": "bullet",
          "partOfSpeech": "noun",
          "meaning": "a small piece of metal fired from a gun",
          "example": "The police found a bullet at the scene."
        },
        {
          "word": "devil",
          "partOfSpeech": "noun",
          "meaning": "an evil spirit",
          "example": "The story was about fighting the devil."
        },
        {
          "word": "drift",
          "partOfSpeech": "verb",
          "meaning": "to move slowly without direction",
          "example": "The boat drifted down the river."
        },
        {
          "word": "enforce",
          "partOfSpeech": "verb",
          "meaning": "to make sure laws or rules are followed",
          "example": "Police enforce traffic laws."
        },
        {
          "word": "fountain",
          "partOfSpeech": "noun",
          "meaning": "a structure that sprays water",
          "example": "The fountain in the park is beautiful."
        },
        {
          "word": "harbor",
          "partOfSpeech": "noun",
          "meaning": "a safe place where ships stop",
          "example": "The boat sailed into the harbor."
        },
        {
          "word": "inhabit",
          "partOfSpeech": "verb",
          "meaning": "to live in a place",
          "example": "Polar bears inhabit the Arctic."
        },
        {
          "word": "march",
          "partOfSpeech": "verb",
          "meaning": "to walk in step, like soldiers",
          "example": "The soldiers marched down the street."
        },
        {
          "word": "millionaire",
          "partOfSpeech": "noun",
          "meaning": "a person with a million dollars or more",
          "example": "The millionaire donated money to schools."
        },
        {
          "word": "port",
          "partOfSpeech": "noun",
          "meaning": "a town where ships come in",
          "example": "The ship arrived at the port."
        },
        {
          "word": "sheriff",
          "partOfSpeech": "noun",
          "meaning": "a law officer in a county",
          "example": "The sheriff arrested the thief."
        },
        {
          "word": "startle",
          "partOfSpeech": "verb",
          "meaning": "to surprise suddenly",
          "example": "The loud sound startled the baby."
        },
        {
          "word": "sweat",
          "partOfSpeech": "verb/noun",
          "meaning": "to produce liquid on the skin when hot",
          "example": "He sweated during the workout."
        },
        {
          "word": "trigger",
          "partOfSpeech": "noun/verb",
          "meaning": "the part of a gun you pull to shoot; to cause",
          "example": "He pulled the trigger of the gun."
        },
        {
          "word": "unify",
          "partOfSpeech": "verb",
          "meaning": "to bring together",
          "example": "The leader worked to unify the nation."
        },
        {
          "word": "vessel",
          "partOfSpeech": "noun",
          "meaning": "a ship; also a tube in the body",
          "example": "The fishing vessel went to sea."
        },
        {
          "word": "voyage",
          "partOfSpeech": "noun",
          "meaning": "a long journey by sea or space",
          "example": "The voyage across the ocean took weeks."
        },
        {
          "word": "worship",
          "partOfSpeech": "verb/noun",
          "meaning": "to show respect to a god",
          "example": "They worship at the temple every week."
        }
      ]
    },
    "14": {
      "title": "Unit 14: The Helpful Apprentice",
      "words": [
        {
          "word": "apprentice",
          "partOfSpeech": "noun",
          "meaning": "a person learning a trade from a skilled worker",
          "example": "The apprentice worked under a master carpenter."
        },
        {
          "word": "assure",
          "partOfSpeech": "verb",
          "meaning": "to promise or guarantee",
          "example": "He assured me everything was fine."
        },
        {
          "word": "bandage",
          "partOfSpeech": "noun",
          "meaning": "cloth used to cover a wound",
          "example": "She put a bandage on her cut."
        },
        {
          "word": "bleed",
          "partOfSpeech": "verb",
          "meaning": "to lose blood",
          "example": "His nose began to bleed."
        },
        {
          "word": "bond",
          "partOfSpeech": "noun",
          "meaning": "a strong connection",
          "example": "The bond between mother and child is special."
        },
        {
          "word": "chef",
          "partOfSpeech": "noun",
          "meaning": "a professional cook",
          "example": "The chef prepared an excellent meal."
        },
        {
          "word": "crown",
          "partOfSpeech": "noun",
          "meaning": "a headpiece worn by a king or queen",
          "example": "The king wore a golden crown."
        },
        {
          "word": "departure",
          "partOfSpeech": "noun",
          "meaning": "the act of leaving",
          "example": "Her departure was delayed by snow."
        },
        {
          "word": "diligent",
          "partOfSpeech": "adjective",
          "meaning": "hardworking and careful",
          "example": "She is a diligent student."
        },
        {
          "word": "emperor",
          "partOfSpeech": "noun",
          "meaning": "the ruler of an empire",
          "example": "The emperor had a vast palace."
        },
        {
          "word": "fiber",
          "partOfSpeech": "noun",
          "meaning": "a threadlike material in plants or fabric",
          "example": "Cotton fiber is used to make clothes."
        },
        {
          "word": "horrible",
          "partOfSpeech": "adjective",
          "meaning": "very bad",
          "example": "The food tasted horrible."
        },
        {
          "word": "impolite",
          "partOfSpeech": "adjective",
          "meaning": "rude",
          "example": "It’s impolite to interrupt someone."
        },
        {
          "word": "kneel",
          "partOfSpeech": "verb",
          "meaning": "to go down on the knees",
          "example": "They knelt to pray."
        },
        {
          "word": "luxury",
          "partOfSpeech": "noun",
          "meaning": "something expensive or special",
          "example": "A big house is a luxury."
        },
        {
          "word": "massive",
          "partOfSpeech": "adjective",
          "meaning": "very large",
          "example": "The massive truck blocked the road."
        },
        {
          "word": "panic",
          "partOfSpeech": "noun/verb",
          "meaning": "sudden fear",
          "example": "He panicked during the fire drill."
        },
        {
          "word": "priority",
          "partOfSpeech": "noun",
          "meaning": "something more important",
          "example": "Safety is our top priority."
        },
        {
          "word": "robe",
          "partOfSpeech": "noun",
          "meaning": "a long, loose piece of clothing",
          "example": "The judge wore a black robe."
        },
        {
          "word": "scold",
          "partOfSpeech": "verb",
          "meaning": "to angrily criticize",
          "example": "The teacher scolded the late student."
        }
      ]
    },
    "15": {
      "title": "Unit 15: Why Monkey Has No Home",
      "words": [
        {
          "word": "affair",
          "partOfSpeech": "noun",
          "meaning": "an event or situation",
          "example": "The wedding was a grand affair."
        },
        {
          "word": "assembly",
          "partOfSpeech": "noun",
          "meaning": "a group of people meeting",
          "example": "The students gathered for an assembly."
        },
        {
          "word": "bless",
          "partOfSpeech": "verb",
          "meaning": "to ask for God’s favor",
          "example": "The priest blessed the baby."
        },
        {
          "word": "cereal",
          "partOfSpeech": "noun",
          "meaning": "a grain eaten for breakfast",
          "example": "She had cereal with milk."
        },
        {
          "word": "cheerful",
          "partOfSpeech": "adjective",
          "meaning": "happy",
          "example": "She was cheerful despite the rain."
        },
        {
          "word": "diameter",
          "partOfSpeech": "noun",
          "meaning": "a straight line across a circle",
          "example": "The diameter of the circle was 10 cm."
        },
        {
          "word": "exploit",
          "partOfSpeech": "verb",
          "meaning": "to use unfairly for benefit",
          "example": "The boss exploited the workers."
        },
        {
          "word": "famine",
          "partOfSpeech": "noun",
          "meaning": "lack of food",
          "example": "The famine lasted for years."
        },
        {
          "word": "harvest",
          "partOfSpeech": "noun/verb",
          "meaning": "gathering crops",
          "example": "They celebrated the wheat harvest."
        },
        {
          "word": "merry",
          "partOfSpeech": "adjective",
          "meaning": "happy, joyful",
          "example": "They sang merry songs."
        },
        {
          "word": "nut",
          "partOfSpeech": "noun",
          "meaning": "a hard fruit with a seed",
          "example": "Squirrels collect nuts in winter."
        },
        {
          "word": "pardon",
          "partOfSpeech": "verb/noun",
          "meaning": "to forgive",
          "example": "The king pardoned the prisoner."
        },
        {
          "word": "pharaoh",
          "partOfSpeech": "noun",
          "meaning": "a ruler of ancient Egypt",
          "example": "The pharaoh built pyramids."
        },
        {
          "word": "ripe",
          "partOfSpeech": "adjective",
          "meaning": "ready to eat",
          "example": "The bananas are ripe."
        },
        {
          "word": "roast",
          "partOfSpeech": "verb/noun",
          "meaning": "to cook with dry heat",
          "example": "She roasted the chicken."
        },
        {
          "word": "routine",
          "partOfSpeech": "noun",
          "meaning": "a regular way of doing things",
          "example": "Exercise is part of his routine."
        },
        {
          "word": "scheme",
          "partOfSpeech": "noun",
          "meaning": "a plan, often dishonest",
          "example": "The thieves made a scheme to rob the bank."
        },
        {
          "word": "slim",
          "partOfSpeech": "adjective",
          "meaning": "thin",
          "example": "She has a slim figure."
        },
        {
          "word": "stove",
          "partOfSpeech": "noun",
          "meaning": "a device for cooking",
          "example": "He cooked soup on the stove."
        },
        {
          "word": "theft",
          "partOfSpeech": "noun",
          "meaning": "the crime of stealing",
          "example": "The police investigated the theft."
        }
      ]
    },
    "16": {
      "title": "Unit 16: Matthew Learns a Lesson",
      "words": [
        {
          "word": "adolescent",
          "partOfSpeech": "noun/adjective",
          "meaning": "a teenager",
          "example": "The adolescent is growing fast."
        },
        {
          "word": "aptitude",
          "partOfSpeech": "noun",
          "meaning": "natural ability",
          "example": "She has an aptitude for music."
        },
        {
          "word": "compliment",
          "partOfSpeech": "noun/verb",
          "meaning": "praise",
          "example": "He complimented her dress."
        },
        {
          "word": "hinder",
          "partOfSpeech": "verb",
          "meaning": "to make difficult",
          "example": "The rain hindered our work."
        },
        {
          "word": "journalism",
          "partOfSpeech": "noun",
          "meaning": "the job of reporting news",
          "example": "He studied journalism at university."
        },
        {
          "word": "jury",
          "partOfSpeech": "noun",
          "meaning": "a group who decide in court",
          "example": "The jury found him guilty."
        },
        {
          "word": "justice",
          "partOfSpeech": "noun",
          "meaning": "fairness, law",
          "example": "They want justice for the victim."
        },
        {
          "word": "liberty",
          "partOfSpeech": "noun",
          "meaning": "freedom",
          "example": "They fought for liberty."
        },
        {
          "word": "literary",
          "partOfSpeech": "adjective",
          "meaning": "related to literature",
          "example": "She joined a literary club."
        },
        {
          "word": "pharmacy",
          "partOfSpeech": "noun",
          "meaning": "a store for medicines",
          "example": "He bought medicine at the pharmacy."
        },
        {
          "word": "pill",
          "partOfSpeech": "noun",
          "meaning": "a small piece of medicine",
          "example": "Take one pill twice a day."
        },
        {
          "word": "presume",
          "partOfSpeech": "verb",
          "meaning": "to suppose something is true",
          "example": "I presume you’re tired after work."
        },
        {
          "word": "privacy",
          "partOfSpeech": "noun",
          "meaning": "the state of being alone",
          "example": "She wanted privacy in her room."
        },
        {
          "word": "punishment",
          "partOfSpeech": "noun",
          "meaning": "penalty for a wrong",
          "example": "His punishment was to clean the class."
        },
        {
          "word": "sensible",
          "partOfSpeech": "adjective",
          "meaning": "showing good judgment",
          "example": "It was sensible to bring an umbrella."
        },
        {
          "word": "slice",
          "partOfSpeech": "noun/verb",
          "meaning": "a thin piece; to cut",
          "example": "She cut a slice of bread."
        },
        {
          "word": "sorrow",
          "partOfSpeech": "noun",
          "meaning": "great sadness",
          "example": "He felt sorrow after the loss."
        },
        {
          "word": "straw",
          "partOfSpeech": "noun",
          "meaning": "dried stalks of grain; also a drinking tube",
          "example": "The cow ate straw from the barn."
        },
        {
          "word": "swell",
          "partOfSpeech": "verb",
          "meaning": "to grow bigger",
          "example": "Her ankle swelled after the fall."
        },
        {
          "word": "tidy",
          "partOfSpeech": "adjective/verb",
          "meaning": "clean and organized",
          "example": "She tidied her desk."
        }
      ]
    },
    "17": {
      "title": "Unit 17: The Magic Cup",
      "words": [
        {
          "word": "affection",
          "partOfSpeech": "noun",
          "meaning": "love or warm feeling",
          "example": "She showed affection to her dog."
        },
        {
          "word": "agency",
          "partOfSpeech": "noun",
          "meaning": "an organization or company",
          "example": "She works at a travel agency."
        },
        {
          "word": "ash",
          "partOfSpeech": "noun",
          "meaning": "the powder left after burning",
          "example": "The fire left piles of ash."
        },
        {
          "word": "confine",
          "partOfSpeech": "verb",
          "meaning": "to keep within limits",
          "example": "The sick man was confined to bed."
        },
        {
          "word": "dismiss",
          "partOfSpeech": "verb",
          "meaning": "to send away; to reject",
          "example": "The teacher dismissed the class early."
        },
        {
          "word": "erupt",
          "partOfSpeech": "verb",
          "meaning": "to explode suddenly",
          "example": "The volcano erupted with lava."
        },
        {
          "word": "fate",
          "partOfSpeech": "noun",
          "meaning": "destiny; what happens beyond control",
          "example": "They believed it was fate that they met."
        },
        {
          "word": "lava",
          "partOfSpeech": "noun",
          "meaning": "hot melted rock from a volcano",
          "example": "Lava flowed down the mountain."
        },
        {
          "word": "miserable",
          "partOfSpeech": "adjective",
          "meaning": "very unhappy",
          "example": "He felt miserable in the cold."
        },
        {
          "word": "navigate",
          "partOfSpeech": "verb",
          "meaning": "to find a way or guide",
          "example": "Sailors navigated the ship with stars."
        },
        {
          "word": "originate",
          "partOfSpeech": "verb",
          "meaning": "to begin or come from",
          "example": "The idea originated in Japan."
        },
        {
          "word": "remainder",
          "partOfSpeech": "noun",
          "meaning": "what is left",
          "example": "She ate the remainder of the cake."
        },
        {
          "word": "retrieve",
          "partOfSpeech": "verb",
          "meaning": "to get back",
          "example": "The dog retrieved the ball."
        },
        {
          "word": "shallow",
          "partOfSpeech": "adjective",
          "meaning": "not deep",
          "example": "The water is shallow near the shore."
        },
        {
          "word": "slope",
          "partOfSpeech": "noun",
          "meaning": "a surface that slants",
          "example": "They skied down the slope."
        },
        {
          "word": "span",
          "partOfSpeech": "verb/noun",
          "meaning": "to extend across; the length between",
          "example": "The bridge spans the river."
        },
        {
          "word": "superstition",
          "partOfSpeech": "noun",
          "meaning": "belief not based on reason",
          "example": "Breaking a mirror is a superstition."
        },
        {
          "word": "sympathy",
          "partOfSpeech": "noun",
          "meaning": "care or sorrow for someone",
          "example": "She felt sympathy for the sick child."
        },
        {
          "word": "vibrate",
          "partOfSpeech": "verb",
          "meaning": "to shake quickly",
          "example": "The phone vibrated on the table."
        },
        {
          "word": "wander",
          "partOfSpeech": "verb",
          "meaning": "to walk without purpose",
          "example": "He wandered around the city streets."
        }
      ]
    },
    "18": {
      "title": "Unit 18: The Knight’s Plan",
      "words": [
        {
          "word": "armor",
          "partOfSpeech": "noun",
          "meaning": "protective metal clothing worn in battle",
          "example": "The knight wore heavy armor."
        },
        {
          "word": "blaze",
          "partOfSpeech": "noun/verb",
          "meaning": "a very strong fire; to burn brightly",
          "example": "The blaze destroyed the building."
        },
        {
          "word": "boom",
          "partOfSpeech": "verb/noun",
          "meaning": "a loud sound; to grow quickly",
          "example": "Thunder boomed across the sky."
        },
        {
          "word": "cliff",
          "partOfSpeech": "noun",
          "meaning": "a steep high rock face",
          "example": "They stood on the edge of the cliff."
        },
        {
          "word": "flame",
          "partOfSpeech": "noun",
          "meaning": "the visible part of fire",
          "example": "The candle flame flickered."
        },
        {
          "word": "independence",
          "partOfSpeech": "noun",
          "meaning": "freedom from control",
          "example": "The country celebrated its independence."
        },
        {
          "word": "invasion",
          "partOfSpeech": "noun",
          "meaning": "an attack to enter by force",
          "example": "The army prepared for invasion."
        },
        {
          "word": "knight",
          "partOfSpeech": "noun",
          "meaning": "a soldier of high rank in the past",
          "example": "The knight served the king."
        },
        {
          "word": "lightning",
          "partOfSpeech": "noun",
          "meaning": "a sudden flash of light in the sky",
          "example": "Lightning lit up the night."
        },
        {
          "word": "rebel",
          "partOfSpeech": "noun/verb",
          "meaning": "someone who fights authority; to fight authority",
          "example": "The rebels refused to obey."
        },
        {
          "word": "retreat",
          "partOfSpeech": "verb/noun",
          "meaning": "to move back; a safe place",
          "example": "The soldiers retreated from battle."
        },
        {
          "word": "revolution",
          "partOfSpeech": "noun",
          "meaning": "a fight to change government",
          "example": "The revolution changed the nation."
        },
        {
          "word": "spear",
          "partOfSpeech": "noun",
          "meaning": "a long weapon with a pointed end",
          "example": "The hunter carried a spear."
        },
        {
          "word": "steep",
          "partOfSpeech": "adjective",
          "meaning": "rising sharply",
          "example": "They climbed a steep hill."
        },
        {
          "word": "summit",
          "partOfSpeech": "noun",
          "meaning": "the top of a mountain",
          "example": "They reached the summit at noon."
        },
        {
          "word": "thunder",
          "partOfSpeech": "noun",
          "meaning": "the loud sound after lightning",
          "example": "We heard thunder in the distance."
        },
        {
          "word": "troops",
          "partOfSpeech": "noun",
          "meaning": "groups of soldiers",
          "example": "The troops marched into the city."
        },
        {
          "word": "warrior",
          "partOfSpeech": "noun",
          "meaning": "a brave fighter",
          "example": "The warrior fought with courage."
        },
        {
          "word": "withdraw",
          "partOfSpeech": "verb",
          "meaning": "to move back or take out",
          "example": "He withdrew money from the bank."
        },
        {
          "word": "yield",
          "partOfSpeech": "verb",
          "meaning": "to give up or produce",
          "example": "The farmer’s field yields wheat."
        }
      ]
    },
    "19": {
      "title": "Unit 19: The Magic Pear Tree",
      "words": [
        {
          "word": "bench",
          "partOfSpeech": "noun",
          "meaning": "a long seat for several people",
          "example": "We sat on a park bench."
        },
        {
          "word": "confront",
          "partOfSpeech": "verb",
          "meaning": "to face something difficult",
          "example": "She confronted her fear of heights."
        },
        {
          "word": "daisy",
          "partOfSpeech": "noun",
          "meaning": "a small white flower",
          "example": "A daisy grew in the field."
        },
        {
          "word": "dispute",
          "partOfSpeech": "noun/verb",
          "meaning": "a disagreement",
          "example": "They had a dispute over money."
        },
        {
          "word": "horror",
          "partOfSpeech": "noun",
          "meaning": "great fear or shock",
          "example": "The movie was full of horror."
        },
        {
          "word": "incident",
          "partOfSpeech": "noun",
          "meaning": "an event, often bad",
          "example": "The police reported the incident."
        },
        {
          "word": "mist",
          "partOfSpeech": "noun",
          "meaning": "light fog",
          "example": "The valley was covered in mist."
        },
        {
          "word": "object",
          "partOfSpeech": "noun",
          "meaning": "a thing you can see or touch",
          "example": "That shiny object is a coin."
        },
        {
          "word": "orphan",
          "partOfSpeech": "noun",
          "meaning": "a child without parents",
          "example": "The orphan lived with his uncle."
        },
        {
          "word": "plot",
          "partOfSpeech": "noun",
          "meaning": "the main events of a story",
          "example": "The book’s plot was exciting."
        },
        {
          "word": "pregnant",
          "partOfSpeech": "adjective",
          "meaning": "having a baby inside",
          "example": "The woman is pregnant with twins."
        },
        {
          "word": "rage",
          "partOfSpeech": "noun",
          "meaning": "strong uncontrolled anger",
          "example": "He was filled with rage."
        },
        {
          "word": "revenge",
          "partOfSpeech": "noun",
          "meaning": "punishment against someone for harm",
          "example": "He wanted revenge on his enemy."
        },
        {
          "word": "shame",
          "partOfSpeech": "noun",
          "meaning": "the feeling of guilt or embarrassment",
          "example": "He felt shame after lying."
        },
        {
          "word": "sigh",
          "partOfSpeech": "verb/noun",
          "meaning": "to breathe out in relief or sadness",
          "example": "She sighed with relief."
        },
        {
          "word": "sneak",
          "partOfSpeech": "verb",
          "meaning": "to move quietly",
          "example": "The boy sneaked into the kitchen."
        },
        {
          "word": "spare",
          "partOfSpeech": "verb",
          "meaning": "to give extra; to avoid harming",
          "example": "Can you spare me a pen?"
        },
        {
          "word": "stem",
          "partOfSpeech": "noun",
          "meaning": "the main stalk of a plant",
          "example": "The flower stem was long."
        },
        {
          "word": "supper",
          "partOfSpeech": "noun",
          "meaning": "the evening meal",
          "example": "We had soup for supper."
        },
        {
          "word": "tender",
          "partOfSpeech": "adjective",
          "meaning": "soft and gentle",
          "example": "The meat was tender and tasty."
        }
      ]
    },
    "20": {
      "title": "Unit 20: Little Wolf and Mother Wolf",
      "words": [
        {
          "word": "beneath",
          "partOfSpeech": "preposition/adverb",
          "meaning": "under",
          "example": "The shoes are beneath the bed."
        },
        {
          "word": "cub",
          "partOfSpeech": "noun",
          "meaning": "a young animal like a bear or wolf",
          "example": "The lion cub played with its mother."
        },
        {
          "word": "dawn",
          "partOfSpeech": "noun",
          "meaning": "the first light of day",
          "example": "We left at dawn."
        },
        {
          "word": "dissatisfied",
          "partOfSpeech": "adjective",
          "meaning": "not pleased",
          "example": "She was dissatisfied with the meal."
        },
        {
          "word": "ease",
          "partOfSpeech": "noun",
          "meaning": "freedom from difficulty or worry",
          "example": "He passed the test with ease."
        },
        {
          "word": "evident",
          "partOfSpeech": "adjective",
          "meaning": "clear and obvious",
          "example": "It is evident he worked hard."
        },
        {
          "word": "hail",
          "partOfSpeech": "noun/verb",
          "meaning": "frozen rain; to call out",
          "example": "Hail damaged the crops."
        },
        {
          "word": "howl",
          "partOfSpeech": "verb/noun",
          "meaning": "to cry loudly like a wolf",
          "example": "Wolves howled at night."
        },
        {
          "word": "leap",
          "partOfSpeech": "verb/noun",
          "meaning": "to jump far",
          "example": "The deer leaped over the fence."
        },
        {
          "word": "magnificent",
          "partOfSpeech": "adjective",
          "meaning": "very beautiful or impressive",
          "example": "The palace was magnificent."
        },
        {
          "word": "necessity",
          "partOfSpeech": "noun",
          "meaning": "something needed",
          "example": "Food is a necessity of life."
        },
        {
          "word": "outcome",
          "partOfSpeech": "noun",
          "meaning": "the result",
          "example": "The outcome of the game was surprising."
        },
        {
          "word": "pile",
          "partOfSpeech": "noun",
          "meaning": "a group of things put together",
          "example": "There was a pile of books."
        },
        {
          "word": "profound",
          "partOfSpeech": "adjective",
          "meaning": "deep or important",
          "example": "She made a profound statement."
        },
        {
          "word": "seize",
          "partOfSpeech": "verb",
          "meaning": "to take by force",
          "example": "The police seized the stolen goods."
        },
        {
          "word": "squeeze",
          "partOfSpeech": "verb",
          "meaning": "to press tightly",
          "example": "He squeezed the orange for juice."
        },
        {
          "word": "supreme",
          "partOfSpeech": "adjective",
          "meaning": "highest in rank or quality",
          "example": "The court has supreme authority."
        },
        {
          "word": "terrific",
          "partOfSpeech": "adjective",
          "meaning": "excellent",
          "example": "The concert was terrific."
        },
        {
          "word": "trait",
          "partOfSpeech": "noun",
          "meaning": "a quality of someone’s character",
          "example": "Honesty is an important trait."
        },
        {
          "word": "vital",
          "partOfSpeech": "adjective",
          "meaning": "very important",
          "example": "Water is vital for survival."
        }
      ]
    },
    "21": {
      "title": "Unit 21: Genes and Cancer",
      "words": [
        {
          "word": "attack",
          "partOfSpeech": "verb/noun",
          "meaning": "to try to hurt; an aggressive act",
          "example": "The dog attacked the intruder."
        },
        {
          "word": "breast",
          "partOfSpeech": "noun",
          "meaning": "the chest area of the human body (especially women)",
          "example": "The baby drank milk from its mother’s breast."
        },
        {
          "word": "cancer",
          "partOfSpeech": "noun",
          "meaning": "a serious disease where cells grow uncontrollably",
          "example": "She is being treated for lung cancer."
        },
        {
          "word": "cancerous",
          "partOfSpeech": "adjective",
          "meaning": "relating to or affected by cancer",
          "example": "The doctor found a cancerous lump."
        },
        {
          "word": "cell",
          "partOfSpeech": "noun",
          "meaning": "the smallest unit of life",
          "example": "The scientist studied blood cells under a microscope."
        },
        {
          "word": "cigarette",
          "partOfSpeech": "noun",
          "meaning": "a small roll of paper filled with tobacco for smoking",
          "example": "He lit a cigarette after dinner."
        },
        {
          "word": "code",
          "partOfSpeech": "noun",
          "meaning": "a system of rules, signals, or symbols",
          "example": "They used a secret code to send messages."
        },
        {
          "word": "cure",
          "partOfSpeech": "verb/noun",
          "meaning": "to heal; a treatment that ends a disease",
          "example": "Scientists are searching for a cure for cancer."
        },
        {
          "word": "destruction",
          "partOfSpeech": "noun",
          "meaning": "great damage or ruin",
          "example": "The storm caused massive destruction."
        },
        {
          "word": "DNA",
          "partOfSpeech": "noun",
          "meaning": "the material in cells that carries genetic information",
          "example": "DNA determines our physical traits."
        },
        {
          "word": "extensive",
          "partOfSpeech": "adjective",
          "meaning": "large in size or amount",
          "example": "The fire caused extensive damage to the city."
        },
        {
          "word": "female",
          "partOfSpeech": "noun/adjective",
          "meaning": "relating to women or girls",
          "example": "The female lion cares for her cubs."
        },
        {
          "word": "furthermore",
          "partOfSpeech": "adverb",
          "meaning": "in addition; also",
          "example": "He is kind and, furthermore, very hardworking."
        },
        {
          "word": "gene",
          "partOfSpeech": "noun",
          "meaning": "part of DNA that controls traits",
          "example": "Eye color is decided by genes."
        },
        {
          "word": "inherit",
          "partOfSpeech": "verb",
          "meaning": "to receive from parents or ancestors",
          "example": "She inherited her mother’s blue eyes."
        },
        {
          "word": "link",
          "partOfSpeech": "noun/verb",
          "meaning": "a connection between things",
          "example": "There is a link between diet and health."
        },
        {
          "word": "male",
          "partOfSpeech": "noun/adjective",
          "meaning": "relating to men or boys",
          "example": "The male birds are brightly colored."
        },
        {
          "word": "population",
          "partOfSpeech": "noun",
          "meaning": "the number of people living in an area",
          "example": "The population of the city is growing fast."
        },
        {
          "word": "result",
          "partOfSpeech": "noun/verb",
          "meaning": "an outcome; to happen because of something",
          "example": "The test results were surprising."
        },
        {
          "word": "sugar",
          "partOfSpeech": "noun",
          "meaning": "a sweet substance used in food",
          "example": "She put sugar in her coffee"
        }
      ]
    },
    "22": {
      "title": "Unit 22: The Circus",
      "words": [
        {
          "word": "accommodate",
          "partOfSpeech": "verb",
          "meaning": "to provide space for",
          "example": "The hotel accommodates 200 guests."
        },
        {
          "word": "circus",
          "partOfSpeech": "noun",
          "meaning": "a show with clowns and animals",
          "example": "We saw lions at the circus."
        },
        {
          "word": "coincide",
          "partOfSpeech": "verb",
          "meaning": "to happen at the same time",
          "example": "The party coincides with my birthday."
        },
        {
          "word": "commission",
          "partOfSpeech": "noun",
          "meaning": "money paid for selling something",
          "example": "He earns commission on sales."
        },
        {
          "word": "dose",
          "partOfSpeech": "noun",
          "meaning": "a measured amount of medicine",
          "example": "Take one dose of the medicine daily."
        },
        {
          "word": "dye",
          "partOfSpeech": "noun/verb",
          "meaning": "substance used to color; to color",
          "example": "She dyed her hair red."
        },
        {
          "word": "extent",
          "partOfSpeech": "noun",
          "meaning": "how large something is",
          "example": "He explained the extent of the damage."
        },
        {
          "word": "gender",
          "partOfSpeech": "noun",
          "meaning": "being male or female",
          "example": "Please write your gender on the form."
        },
        {
          "word": "headline",
          "partOfSpeech": "noun",
          "meaning": "the title of a newspaper article",
          "example": "The headline was about the election."
        },
        {
          "word": "informal",
          "partOfSpeech": "adjective",
          "meaning": "casual, not official",
          "example": "They had an informal meeting at the café."
        },
        {
          "word": "inquire",
          "partOfSpeech": "verb",
          "meaning": "to ask about",
          "example": "She inquired about the train schedule."
        },
        {
          "word": "messenger",
          "partOfSpeech": "noun",
          "meaning": "a person who delivers messages",
          "example": "The messenger brought a letter."
        },
        {
          "word": "peer",
          "partOfSpeech": "noun",
          "meaning": "someone equal in age or status",
          "example": "He works well with his peers."
        },
        {
          "word": "portrait",
          "partOfSpeech": "noun",
          "meaning": "a picture of a person’s face",
          "example": "The portrait of the queen hangs in the museum."
        },
        {
          "word": "pose",
          "partOfSpeech": "verb/noun",
          "meaning": "to sit or stand for a picture",
          "example": "She posed for the camera."
        },
        {
          "word": "ranch",
          "partOfSpeech": "noun",
          "meaning": "a farm with cattle or horses",
          "example": "The cowboy worked on a ranch."
        },
        {
          "word": "steer",
          "partOfSpeech": "verb",
          "meaning": "to control a vehicle",
          "example": "He steered the car carefully."
        },
        {
          "word": "stripe",
          "partOfSpeech": "noun",
          "meaning": "a line of color",
          "example": "The zebra has black and white stripes."
        },
        {
          "word": "tame",
          "partOfSpeech": "verb/adjective",
          "meaning": "to train an animal; not wild",
          "example": "They tamed the wild horse."
        },
        {
          "word": "tempt",
          "partOfSpeech": "verb",
          "meaning": "to attract someone to do wrong",
          "example": "The smell of cake tempted me."
        }
      ]
    },
    "23": {
      "title": "Unit 23: Lazy Hans",
      "words": [
        {
          "word": "ban",
          "partOfSpeech": "verb/noun",
          "meaning": "to forbid officially",
          "example": "Smoking is banned in the restaurant."
        },
        {
          "word": "cautious",
          "partOfSpeech": "adjective",
          "meaning": "careful",
          "example": "Be cautious when crossing the road."
        },
        {
          "word": "confess",
          "partOfSpeech": "verb",
          "meaning": "to admit something",
          "example": "He confessed his mistake."
        },
        {
          "word": "cottage",
          "partOfSpeech": "noun",
          "meaning": "a small simple house",
          "example": "They stayed in a country cottage."
        },
        {
          "word": "daytime",
          "partOfSpeech": "noun",
          "meaning": "the hours when it is light outside",
          "example": "She works in the daytime."
        },
        {
          "word": "desperate",
          "partOfSpeech": "adjective",
          "meaning": "feeling hopeless",
          "example": "They were desperate for food."
        },
        {
          "word": "exhausting",
          "partOfSpeech": "adjective",
          "meaning": "very tiring",
          "example": "The exhausting work left him weak."
        },
        {
          "word": "fade",
          "partOfSpeech": "verb",
          "meaning": "to lose color or strength",
          "example": "The photo faded over time."
        },
        {
          "word": "fierce",
          "partOfSpeech": "adjective",
          "meaning": "very strong, violent",
          "example": "The fierce storm destroyed houses."
        },
        {
          "word": "gamble",
          "partOfSpeech": "verb/noun",
          "meaning": "to risk money on a game or chance",
          "example": "He gambled at the casino."
        },
        {
          "word": "lawn",
          "partOfSpeech": "noun",
          "meaning": "grass area near a house",
          "example": "Children played on the lawn."
        },
        {
          "word": "mow",
          "partOfSpeech": "verb",
          "meaning": "to cut grass",
          "example": "He mowed the lawn on Saturday."
        },
        {
          "word": "outlaw",
          "partOfSpeech": "noun",
          "meaning": "a criminal living outside the law",
          "example": "The outlaw hid in the hills."
        },
        {
          "word": "prospect",
          "partOfSpeech": "noun",
          "meaning": "a chance for something to happen",
          "example": "There is a prospect of rain."
        },
        {
          "word": "purse",
          "partOfSpeech": "noun",
          "meaning": "a small bag for money",
          "example": "She carried coins in her purse."
        },
        {
          "word": "rod",
          "partOfSpeech": "noun",
          "meaning": "a thin straight stick or pole",
          "example": "He caught a fish with a rod."
        },
        {
          "word": "seldom",
          "partOfSpeech": "adverb",
          "meaning": "not often",
          "example": "She seldom visits her relatives."
        },
        {
          "word": "shave",
          "partOfSpeech": "verb",
          "meaning": "to cut hair off the face or body",
          "example": "He shaved his beard."
        },
        {
          "word": "terrified",
          "partOfSpeech": "adjective",
          "meaning": "very afraid",
          "example": "The child was terrified of the dark."
        },
        {
          "word": "wizard",
          "partOfSpeech": "noun",
          "meaning": "a man with magical powers",
          "example": "The wizard cast a spell."
        }
      ]
    },
    "24": {
      "title": "Unit 24: The Bremen Town Musicians",
      "words": [
        {
          "word": "abroad",
          "partOfSpeech": "adverb",
          "meaning": "in or to another country",
          "example": "She studied abroad in Canada."
        },
        {
          "word": "airline",
          "partOfSpeech": "noun",
          "meaning": "a company that carries people by plane",
          "example": "The airline offers cheap flights."
        },
        {
          "word": "audience",
          "partOfSpeech": "noun",
          "meaning": "the group of people watching",
          "example": "The audience clapped loudly."
        },
        {
          "word": "bargain",
          "partOfSpeech": "noun",
          "meaning": "a good deal",
          "example": "She bought the dress at a bargain."
        },
        {
          "word": "brief",
          "partOfSpeech": "adjective",
          "meaning": "short in time",
          "example": "He gave a brief speech."
        },
        {
          "word": "currency",
          "partOfSpeech": "noun",
          "meaning": "the money of a country",
          "example": "The dollar is the currency of the US."
        },
        {
          "word": "data",
          "partOfSpeech": "noun",
          "meaning": "facts and information",
          "example": "The scientist collected data for research."
        },
        {
          "word": "domestic",
          "partOfSpeech": "adjective",
          "meaning": "related to the home or country",
          "example": "They bought a domestic flight ticket."
        },
        {
          "word": "draft",
          "partOfSpeech": "noun/verb",
          "meaning": "an early version of writing; to prepare",
          "example": "She wrote the first draft of her essay."
        },
        {
          "word": "gather",
          "partOfSpeech": "verb",
          "meaning": "to collect together",
          "example": "They gathered around the fire."
        },
        {
          "word": "hobby",
          "partOfSpeech": "noun",
          "meaning": "an activity for fun",
          "example": "Reading is my favorite hobby."
        },
        {
          "word": "income",
          "partOfSpeech": "noun",
          "meaning": "money earned",
          "example": "Her income is enough to live on."
        },
        {
          "word": "jet",
          "partOfSpeech": "noun",
          "meaning": "a fast airplane",
          "example": "The jet flew across the sky."
        },
        {
          "word": "maximum",
          "partOfSpeech": "noun/adjective",
          "meaning": "the greatest possible",
          "example": "The car’s maximum speed is 200 km/h."
        },
        {
          "word": "official",
          "partOfSpeech": "noun/adjective",
          "meaning": "a person in authority; formal",
          "example": "The official announced the new law."
        },
        {
          "word": "recommend",
          "partOfSpeech": "verb",
          "meaning": "to suggest",
          "example": "He recommended a good restaurant."
        },
        {
          "word": "refer",
          "partOfSpeech": "verb",
          "meaning": "to mention",
          "example": "She referred to her notes."
        },
        {
          "word": "remote",
          "partOfSpeech": "adjective",
          "meaning": "far away",
          "example": "They live in a remote village."
        },
        {
          "word": "sleepless",
          "partOfSpeech": "adjective",
          "meaning": "without sleep",
          "example": "He spent a sleepless night before the exam."
        },
        {
          "word": "volume",
          "partOfSpeech": "noun",
          "meaning": "the level of sound; a book in a series",
          "example": "Turn down the volume, please."
        }
      ]
    },
    "25": {
      "title": "Unit 25: How Did Greenland Get Its Name?",
      "words": [
        {
          "word": "circulate",
          "partOfSpeech": "verb",
          "meaning": "to move around freely",
          "example": "Air circulates through the room."
        },
        {
          "word": "consequent",
          "partOfSpeech": "adjective",
          "meaning": "happening as a result",
          "example": "Flooding was consequent to the heavy rain."
        },
        {
          "word": "derive",
          "partOfSpeech": "verb",
          "meaning": "to come from",
          "example": "The word derives from Latin."
        },
        {
          "word": "drown",
          "partOfSpeech": "verb",
          "meaning": "to die under water",
          "example": "The swimmer nearly drowned."
        },
        {
          "word": "dynasty",
          "partOfSpeech": "noun",
          "meaning": "a family of rulers",
          "example": "The Ming dynasty ruled China for centuries."
        },
        {
          "word": "fraction",
          "partOfSpeech": "noun",
          "meaning": "a small part of a whole",
          "example": "Only a fraction of students passed."
        },
        {
          "word": "frost",
          "partOfSpeech": "noun",
          "meaning": "thin ice on surfaces in cold weather",
          "example": "The grass was covered in frost."
        },
        {
          "word": "illusion",
          "partOfSpeech": "noun",
          "meaning": "something that looks real but is not",
          "example": "The magician created an illusion of flying."
        },
        {
          "word": "invade",
          "partOfSpeech": "verb",
          "meaning": "to enter by force",
          "example": "The army invaded the city."
        },
        {
          "word": "lieutenant",
          "partOfSpeech": "noun",
          "meaning": "a middle-ranking officer",
          "example": "The lieutenant led the soldiers."
        },
        {
          "word": "marine",
          "partOfSpeech": "adjective",
          "meaning": "related to the sea",
          "example": "They study marine animals."
        },
        {
          "word": "merit",
          "partOfSpeech": "noun",
          "meaning": "a good quality",
          "example": "Hard work has merit."
        },
        {
          "word": "navy",
          "partOfSpeech": "noun",
          "meaning": "a country’s military ships",
          "example": "He joined the navy at 18."
        },
        {
          "word": "polar",
          "partOfSpeech": "adjective",
          "meaning": "relating to the Arctic or Antarctic",
          "example": "Polar bears live in the Arctic."
        },
        {
          "word": "ray",
          "partOfSpeech": "noun",
          "meaning": "a line of light",
          "example": "A ray of sunlight came through the window."
        },
        {
          "word": "resign",
          "partOfSpeech": "verb",
          "meaning": "to leave a job",
          "example": "He resigned from his position."
        },
        {
          "word": "suicide",
          "partOfSpeech": "noun",
          "meaning": "killing oneself",
          "example": "The novel ends with a suicide."
        },
        {
          "word": "tremble",
          "partOfSpeech": "verb",
          "meaning": "to shake slightly",
          "example": "She trembled with fear."
        },
        {
          "word": "underlying",
          "partOfSpeech": "adjective",
          "meaning": "hidden but important",
          "example": "The underlying cause of the problem is stress."
        },
        {
          "word": "via",
          "partOfSpeech": "preposition",
          "meaning": "through, by way of",
          "example": "We traveled to Rome via Paris."
        }
      ]
    },
    "26": {
      "title": "Unit 26: Everyone is Special",
      "words": [
        {
          "word": "alter",
          "partOfSpeech": "verb",
          "meaning": "to change",
          "example": "She altered her dress to fit."
        },
        {
          "word": "aside",
          "partOfSpeech": "adverb/preposition",
          "meaning": "to the side",
          "example": "She stepped aside to let him pass."
        },
        {
          "word": "autumn",
          "partOfSpeech": "noun",
          "meaning": "the season between summer and winter",
          "example": "Leaves fall in autumn."
        },
        {
          "word": "blend",
          "partOfSpeech": "verb",
          "meaning": "to mix together",
          "example": "He blended fruit for juice."
        },
        {
          "word": "collapse",
          "partOfSpeech": "verb",
          "meaning": "to fall down suddenly",
          "example": "The bridge collapsed."
        },
        {
          "word": "crush",
          "partOfSpeech": "verb",
          "meaning": "to press until it breaks",
          "example": "He crushed the can."
        },
        {
          "word": "curve",
          "partOfSpeech": "noun/verb",
          "meaning": "a bent line; to bend",
          "example": "The road curves to the left."
        },
        {
          "word": "disgusting",
          "partOfSpeech": "adjective",
          "meaning": "very unpleasant",
          "example": "The food smelled disgusting."
        },
        {
          "word": "drain",
          "partOfSpeech": "verb",
          "meaning": "to remove liquid",
          "example": "Drain the water from the sink."
        },
        {
          "word": "embrace",
          "partOfSpeech": "verb",
          "meaning": "to hug or accept",
          "example": "They embraced each other warmly."
        },
        {
          "word": "envy",
          "partOfSpeech": "noun/verb",
          "meaning": "jealousy",
          "example": "She felt envy of her friend’s success."
        },
        {
          "word": "fireworks",
          "partOfSpeech": "noun",
          "meaning": "bright lights that explode in the sky",
          "example": "We watched fireworks on New Year’s Eve."
        },
        {
          "word": "flour",
          "partOfSpeech": "noun",
          "meaning": "powder used for baking",
          "example": "She baked bread with flour."
        },
        {
          "word": "fuse",
          "partOfSpeech": "noun",
          "meaning": "a small wire that stops too much electricity",
          "example": "The fuse blew during the storm."
        },
        {
          "word": "ginger",
          "partOfSpeech": "noun",
          "meaning": "a spice from a root",
          "example": "She made tea with ginger."
        },
        {
          "word": "jealous",
          "partOfSpeech": "adjective",
          "meaning": "unhappy because of another’s success",
          "example": "He was jealous of his brother."
        },
        {
          "word": "paste",
          "partOfSpeech": "noun/verb",
          "meaning": "a soft thick substance; to stick",
          "example": "She used glue paste for the paper."
        },
        {
          "word": "receipt",
          "partOfSpeech": "noun",
          "meaning": "paper proof of payment",
          "example": "Keep your receipt for a refund."
        },
        {
          "word": "wipe",
          "partOfSpeech": "verb",
          "meaning": "to clean by rubbing",
          "example": "He wiped the table with a cloth."
        },
        {
          "word": "wire",
          "partOfSpeech": "noun",
          "meaning": "thin metal string",
          "example": "The lamp is connected by wire."
        }
      ]
    },
    "27": {
      "title": "Unit 27: Pizarro and the Inca Gold",
      "words": [
        {
          "word": "acknowledge",
          "partOfSpeech": "verb",
          "meaning": "to admit or accept",
          "example": "She acknowledged her mistake."
        },
        {
          "word": "ambassador",
          "partOfSpeech": "noun",
          "meaning": "a government representative to another country",
          "example": "The ambassador met with the president."
        },
        {
          "word": "blonde",
          "partOfSpeech": "adjective/noun",
          "meaning": "light yellow hair; a person with it",
          "example": "The blonde girl smiled."
        },
        {
          "word": "conquer",
          "partOfSpeech": "verb",
          "meaning": "to take control by force",
          "example": "The empire conquered many lands."
        },
        {
          "word": "drag",
          "partOfSpeech": "verb",
          "meaning": "to pull with effort",
          "example": "He dragged the heavy bag."
        },
        {
          "word": "exaggerate",
          "partOfSpeech": "verb",
          "meaning": "to make something seem bigger than it is",
          "example": "He exaggerated the story."
        },
        {
          "word": "heritage",
          "partOfSpeech": "noun",
          "meaning": "cultural traditions from the past",
          "example": "They are proud of their heritage."
        },
        {
          "word": "insult",
          "partOfSpeech": "verb/noun",
          "meaning": "to say something rude",
          "example": "He insulted her cooking."
        },
        {
          "word": "meanwhile",
          "partOfSpeech": "adverb",
          "meaning": "at the same time",
          "example": "Meanwhile, she was preparing dinner."
        },
        {
          "word": "necklace",
          "partOfSpeech": "noun",
          "meaning": "jewelry worn around the neck",
          "example": "She wore a gold necklace."
        },
        {
          "word": "noble",
          "partOfSpeech": "adjective",
          "meaning": "having high moral qualities; of high birth",
          "example": "He made a noble sacrifice."
        },
        {
          "word": "precious",
          "partOfSpeech": "adjective",
          "meaning": "very valuable",
          "example": "Diamonds are precious stones."
        },
        {
          "word": "prejudice",
          "partOfSpeech": "noun",
          "meaning": "unfair dislike of others",
          "example": "They fought against racial prejudice."
        },
        {
          "word": "rumor",
          "partOfSpeech": "noun",
          "meaning": "an unproven story",
          "example": "There was a rumor about the new teacher."
        },
        {
          "word": "sin",
          "partOfSpeech": "noun",
          "meaning": "an act against moral law",
          "example": "Stealing is considered a sin."
        },
        {
          "word": "spectacle",
          "partOfSpeech": "noun",
          "meaning": "a grand show or display",
          "example": "The fireworks were a great spectacle."
        },
        {
          "word": "stack",
          "partOfSpeech": "noun/verb",
          "meaning": "a pile; to arrange in a pile",
          "example": "He stacked the books on the desk."
        },
        {
          "word": "suspicious",
          "partOfSpeech": "adjective",
          "meaning": "not trusting; feeling something is wrong",
          "example": "The police were suspicious of his story."
        },
        {
          "word": "tin",
          "partOfSpeech": "noun",
          "meaning": "a light metal",
          "example": "The can was made of tin."
        },
        {
          "word": "vase",
          "partOfSpeech": "noun",
          "meaning": "a container for flowers",
          "example": "She put roses in a vase."
        }
      ]
    },
    "28": {
      "title": "Unit 28: The Boy Who Saved the Town",
      "words": [
        {
          "word": "ache",
          "partOfSpeech": "verb/noun",
          "meaning": "a steady pain",
          "example": "He had a toothache."
        },
        {
          "word": "arctic",
          "partOfSpeech": "adjective",
          "meaning": "relating to the North Pole",
          "example": "Polar bears live in the Arctic."
        },
        {
          "word": "canal",
          "partOfSpeech": "noun",
          "meaning": "a man-made water passage",
          "example": "The boat moved through the canal."
        },
        {
          "word": "chemist",
          "partOfSpeech": "noun",
          "meaning": "a person who prepares medicines",
          "example": "The chemist gave me pills."
        },
        {
          "word": "chill",
          "partOfSpeech": "noun/verb",
          "meaning": "coldness; to make cold",
          "example": "There was a chill in the air."
        },
        {
          "word": "congress",
          "partOfSpeech": "noun",
          "meaning": "a formal meeting of representatives",
          "example": "The law was passed by Congress."
        },
        {
          "word": "dairy",
          "partOfSpeech": "noun",
          "meaning": "food made from milk",
          "example": "He avoids dairy products."
        },
        {
          "word": "descend",
          "partOfSpeech": "verb",
          "meaning": "to go down",
          "example": "The plane descended slowly."
        },
        {
          "word": "grocer",
          "partOfSpeech": "noun",
          "meaning": "a person who sells food",
          "example": "The grocer sells fresh fruit."
        },
        {
          "word": "hesitate",
          "partOfSpeech": "verb",
          "meaning": "to pause before acting",
          "example": "She hesitated before speaking."
        },
        {
          "word": "institution",
          "partOfSpeech": "noun",
          "meaning": "an established organization",
          "example": "The university is a famous institution."
        },
        {
          "word": "jog",
          "partOfSpeech": "verb",
          "meaning": "to run slowly",
          "example": "He jogs every morning."
        },
        {
          "word": "merchant",
          "partOfSpeech": "noun",
          "meaning": "a person who buys and sells goods",
          "example": "The merchant traded spices."
        },
        {
          "word": "poke",
          "partOfSpeech": "verb",
          "meaning": "to push lightly with something sharp",
          "example": "She poked the fire with a stick."
        },
        {
          "word": "postpone",
          "partOfSpeech": "verb",
          "meaning": "to delay",
          "example": "The meeting was postponed."
        },
        {
          "word": "splash",
          "partOfSpeech": "verb/noun",
          "meaning": "to scatter liquid; the sound of it",
          "example": "She splashed water in the pool."
        },
        {
          "word": "stubborn",
          "partOfSpeech": "adjective",
          "meaning": "not willing to change",
          "example": "He is too stubborn to apologize."
        },
        {
          "word": "suburb",
          "partOfSpeech": "noun",
          "meaning": "an area outside a city",
          "example": "They moved to the suburbs."
        },
        {
          "word": "tide",
          "partOfSpeech": "noun",
          "meaning": "the rise and fall of sea level",
          "example": "The tide is high in the morning."
        },
        {
          "word": "tragedy",
          "partOfSpeech": "noun",
          "meaning": "a very sad event",
          "example": "The play ends in tragedy."
        }
      ]
    },
    "29": {
      "title": "Unit 29: An Interesting Life",
      "words": [
        {
          "word": "bomb",
          "partOfSpeech": "noun",
          "meaning": "an explosive weapon",
          "example": "The bomb destroyed the building."
        },
        {
          "word": "certificate",
          "partOfSpeech": "noun",
          "meaning": "an official paper",
          "example": "She got a certificate for finishing the course."
        },
        {
          "word": "circumstance",
          "partOfSpeech": "noun",
          "meaning": "a condition or situation",
          "example": "He explained the circumstances of the event."
        },
        {
          "word": "coffin",
          "partOfSpeech": "noun",
          "meaning": "a box for a dead body",
          "example": "The coffin was carried to the cemetery."
        },
        {
          "word": "cope",
          "partOfSpeech": "verb",
          "meaning": "to manage difficulties",
          "example": "She coped with stress well."
        },
        {
          "word": "criticism",
          "partOfSpeech": "noun",
          "meaning": "finding fault with something",
          "example": "The book got good criticism."
        },
        {
          "word": "devastate",
          "partOfSpeech": "verb",
          "meaning": "to destroy badly",
          "example": "The storm devastated the village."
        },
        {
          "word": "frown",
          "partOfSpeech": "verb/noun",
          "meaning": "to make an unhappy face",
          "example": "She frowned when she was angry."
        },
        {
          "word": "gaze",
          "partOfSpeech": "verb/noun",
          "meaning": "to look steadily",
          "example": "He gazed at the stars."
        },
        {
          "word": "glance",
          "partOfSpeech": "verb/noun",
          "meaning": "to look quickly",
          "example": "She glanced at her watch."
        },
        {
          "word": "grief",
          "partOfSpeech": "noun",
          "meaning": "deep sadness",
          "example": "He felt grief after his loss."
        },
        {
          "word": "groom",
          "partOfSpeech": "verb/noun",
          "meaning": "to clean and prepare; a man about to marry",
          "example": "The horse was groomed daily."
        },
        {
          "word": "license",
          "partOfSpeech": "noun",
          "meaning": "official permission",
          "example": "You need a driver’s license."
        },
        {
          "word": "microscope",
          "partOfSpeech": "noun",
          "meaning": "a tool for looking at tiny things",
          "example": "They used a microscope to study cells."
        },
        {
          "word": "nuclear",
          "partOfSpeech": "adjective",
          "meaning": "relating to atomic energy",
          "example": "The country built a nuclear plant."
        },
        {
          "word": "portray",
          "partOfSpeech": "verb",
          "meaning": "to show in a picture or play",
          "example": "The actor portrayed the hero."
        },
        {
          "word": "rotate",
          "partOfSpeech": "verb",
          "meaning": "to turn around",
          "example": "The earth rotates once every 24 hours."
        },
        {
          "word": "souvenir",
          "partOfSpeech": "noun",
          "meaning": "an object kept as a reminder",
          "example": "She bought a souvenir from Paris."
        },
        {
          "word": "submarine",
          "partOfSpeech": "noun",
          "meaning": "a ship that travels under water",
          "example": "The submarine explored the ocean."
        },
        {
          "word": "trace",
          "partOfSpeech": "verb/noun",
          "meaning": "to follow or find; a small sign",
          "example": "They traced his steps back home."
        }
      ]
    },
    "30": {
      "title": "Unit 30: The Kitten and the Caterpillar",
      "words": [
        {
          "word": "coastline",
          "partOfSpeech": "noun",
          "meaning": "the edge of land by the sea",
          "example": "The coastline was rocky and long."
        },
        {
          "word": "deter",
          "partOfSpeech": "verb",
          "meaning": "to prevent by making afraid",
          "example": "The guard dog deters thieves."
        },
        {
          "word": "devise",
          "partOfSpeech": "verb",
          "meaning": "to plan or invent",
          "example": "They devised a clever solution."
        },
        {
          "word": "distance",
          "partOfSpeech": "noun",
          "meaning": "the space between things",
          "example": "The distance from here to school is 2 km."
        },
        {
          "word": "expertise",
          "partOfSpeech": "noun",
          "meaning": "special skill or knowledge",
          "example": "He has expertise in computers."
        },
        {
          "word": "fracture",
          "partOfSpeech": "noun/verb",
          "meaning": "a broken bone; to break",
          "example": "She fractured her arm in the fall."
        },
        {
          "word": "headache",
          "partOfSpeech": "noun",
          "meaning": "pain in the head",
          "example": "I have a bad headache."
        },
        {
          "word": "implement",
          "partOfSpeech": "verb",
          "meaning": "to put into action",
          "example": "The company implemented new rules."
        },
        {
          "word": "insight",
          "partOfSpeech": "noun",
          "meaning": "deep understanding",
          "example": "She gave valuable insight into the problem."
        },
        {
          "word": "limb",
          "partOfSpeech": "noun",
          "meaning": "an arm or leg",
          "example": "He injured a limb while climbing."
        },
        {
          "word": "might",
          "partOfSpeech": "noun",
          "meaning": "great strength or power",
          "example": "The army fought with all its might."
        },
        {
          "word": "optimism",
          "partOfSpeech": "noun",
          "meaning": "a hopeful attitude",
          "example": "She faces life with optimism."
        },
        {
          "word": "proficient",
          "partOfSpeech": "adjective",
          "meaning": "skilled at something",
          "example": "He is proficient in English."
        },
        {
          "word": "raft",
          "partOfSpeech": "noun",
          "meaning": "a flat floating platform",
          "example": "They crossed the river on a raft."
        },
        {
          "word": "ridge",
          "partOfSpeech": "noun",
          "meaning": "the top of a line of hills",
          "example": "They walked along the ridge of the mountain."
        },
        {
          "word": "shoulder",
          "partOfSpeech": "noun",
          "meaning": "the body part between neck and arm",
          "example": "He carried the bag on his shoulder."
        },
        {
          "word": "shove",
          "partOfSpeech": "verb/noun",
          "meaning": "to push roughly",
          "example": "He shoved the box into the corner."
        },
        {
          "word": "spouse",
          "partOfSpeech": "noun",
          "meaning": "a husband or wife",
          "example": "She introduced her spouse to the group."
        },
        {
          "word": "thrust",
          "partOfSpeech": "verb",
          "meaning": "to push strongly",
          "example": "He thrust the sword forward."
        },
        {
          "word": "tolerate",
          "partOfSpeech": "verb",
          "meaning": "to accept without protest",
          "example": "She cannot tolerate rude behavior."
        }
      ]
    }
  }
};

// Book 4 data with real unit titles and complete word lists
const book4Data = {
  "title": "Book 4 - Intermediate Level",
  "units": {}
};

// Generate books with actual data (Books 3-4) and empty structure (Books 5-6)
function generateSampleData() {
    // Add Book 3 with actual data
    vocabularyData.books[3] = book3Data;
    
    // Add Book 4 with actual data
    vocabularyData.books[4] = book4Data;
    
    // Add empty Books 5-6 (waiting for file uploads)
    for (let book = 5; book <= 6; book++) {
        vocabularyData.books[book] = {
            title: `Book ${book} - ${getBookLevel(book)}`,
            units: {}
        };
        
        // Create 30 units for each book with empty word slots
        for (let unit = 1; unit <= 30; unit++) {
            vocabularyData.books[book].units[unit] = {
                title: `Unit ${unit}: ${getUnitTheme(unit)}`,
                words: Array(20).fill().map(() => ({ word: "", partOfSpeech: "", meaning: "", example: "" }))
            };
        }
    }
}

function getBookLevel(book) {
    const levels = [
        "Beginner Level",
        "Elementary Level", 
        "Pre-Intermediate Level",
        "Intermediate Level",
        "Upper-Intermediate Level",
        "Advanced Level"
    ];
    return levels[book - 1] || "Advanced Level";
}

function getUnitTheme(unit) {
    const themes = [
        "Basic Words", "Family and Home", "Daily Activities", "Food and Cooking",
        "Clothing and Fashion", "Transportation", "Work and Jobs", "Education",
        "Health and Medicine", "Sports and Exercise", "Entertainment", "Technology",
        "Nature and Environment", "Travel and Tourism", "Business and Money",
        "Emotions and Feelings", "Time and Calendar", "Weather and Seasons",
        "Shopping and Services", "Communication", "Hobbies and Interests",
        "Social Life", "Culture and Arts", "Science and Discovery",
        "History and Politics", "Religion and Philosophy", "Law and Justice",
        "Media and News", "Relationships", "Personal Development"
    ];
    return themes[(unit - 1) % themes.length];
}

// Initialize the data
generateSampleData();

// Export the data
window.vocabularyData = vocabularyData;