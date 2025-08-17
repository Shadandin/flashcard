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
  "units": {
    "1": {
      "title": "Unit 1 - Social Media",
      "words": [
        {
          "word": "accountable",
          "partOfSpeech": "adjective",
          "meaning": "responsible for actions",
          "example": "Teachers are accountable for their students' progress."
        },
        {
          "word": "addictive",
          "partOfSpeech": "adjective",
          "meaning": "causing dependence",
          "example": "Video games can be addictive."
        },
        {
          "word": "agenda",
          "partOfSpeech": "noun",
          "meaning": "a list of things to do",
          "example": "The manager set the agenda for the meeting."
        },
        {
          "word": "coin",
          "partOfSpeech": "verb",
          "meaning": "to invent a word or phrase",
          "example": "He coined the term \"cloud computing.\""
        },
        {
          "word": "correlate",
          "partOfSpeech": "verb",
          "meaning": "to show a connection",
          "example": "Exercise and health strongly correlate."
        },
        {
          "word": "depression",
          "partOfSpeech": "noun",
          "meaning": "extreme sadness; also an economic downturn",
          "example": "She suffered from depression after losing her job."
        },
        {
          "word": "digital",
          "partOfSpeech": "adjective",
          "meaning": "using computer technology",
          "example": "I prefer digital books over printed ones."
        },
        {
          "word": "importance",
          "partOfSpeech": "noun",
          "meaning": "significance or value",
          "example": "Education has great importance for success."
        },
        {
          "word": "keyboard",
          "partOfSpeech": "noun",
          "meaning": "a device for typing on computers",
          "example": "He bought a new keyboard for his laptop."
        },
        {
          "word": "loneliness",
          "partOfSpeech": "noun",
          "meaning": "the feeling of being alone",
          "example": "Moving to a new city brought her loneliness."
        },
        {
          "word": "media",
          "partOfSpeech": "noun",
          "meaning": "newspapers, TV, internet, etc",
          "example": "The news was reported in all media outlets."
        },
        {
          "word": "platform",
          "partOfSpeech": "noun",
          "meaning": "stage or system for communication",
          "example": "Twitter is a social media platform."
        },
        {
          "word": "poor",
          "partOfSpeech": "adjective",
          "meaning": "lacking money or quality",
          "example": "The poor man asked for help."
        },
        {
          "word": "presence",
          "partOfSpeech": "noun",
          "meaning": "being in a place",
          "example": "Her presence made the room lively."
        },
        {
          "word": "subject",
          "partOfSpeech": "noun",
          "meaning": "topic or field of study",
          "example": "Math is his favorite subject."
        },
        {
          "word": "surge",
          "partOfSpeech": "noun",
          "meaning": "sudden increase",
          "example": "There was a surge in demand for masks."
        },
        {
          "word": "survey",
          "partOfSpeech": "noun",
          "meaning": "a set of questions for research",
          "example": "The survey showed most people like coffee."
        },
        {
          "word": "target",
          "partOfSpeech": "noun",
          "meaning": "a goal or aim",
          "example": "The company set a sales target for June."
        },
        {
          "word": "trend",
          "partOfSpeech": "noun",
          "meaning": "a general pattern",
          "example": "Short videos are the latest trend online."
        },
        {
          "word": "validate",
          "partOfSpeech": "verb",
          "meaning": "to confirm as true",
          "example": "The scientist validated her theory with data."
        }
      ]
    },
    "2": {
      "title": "Unit 2 - Enhanced Weathering",
      "words": [
        {
          "word": "carbon",
          "partOfSpeech": "noun",
          "meaning": "a chemical element found in all life",
          "example": "Diamonds are made of pure carbon."
        },
        {
          "word": "carbon dioxide",
          "partOfSpeech": "noun",
          "meaning": "a gas humans breathe out",
          "example": "Plants use carbon dioxide for photosynthesis."
        },
        {
          "word": "dust",
          "partOfSpeech": "noun",
          "meaning": "tiny particles of dirt",
          "example": "The shelf was covered in dust."
        },
        {
          "word": "emit",
          "partOfSpeech": "verb",
          "meaning": "to release or give off",
          "example": "Cars emit harmful gases."
        },
        {
          "word": "enable",
          "partOfSpeech": "verb",
          "meaning": "to make possible",
          "example": "The new law enables people to vote online."
        },
        {
          "word": "grind",
          "partOfSpeech": "verb",
          "meaning": "to crush into powder",
          "example": "She grinds coffee beans every morning."
        },
        {
          "word": "heal",
          "partOfSpeech": "verb",
          "meaning": "to recover from injury",
          "example": "The wound healed quickly."
        },
        {
          "word": "integrate",
          "partOfSpeech": "verb",
          "meaning": "to combine into one system",
          "example": "Immigrants integrate into society over time."
        },
        {
          "word": "leading",
          "partOfSpeech": "adjective",
          "meaning": "most important",
          "example": "She is a leading expert in biology."
        },
        {
          "word": "moreover",
          "partOfSpeech": "adverb",
          "meaning": "in addition",
          "example": "He is smart; moreover, he is hardworking."
        },
        {
          "word": "object",
          "partOfSpeech": "noun",
          "meaning": "a thing you can see or touch",
          "example": "The museum had rare objects on display."
        },
        {
          "word": "pollutant",
          "partOfSpeech": "noun",
          "meaning": "something that makes air, water, or soil dirty",
          "example": "Factories release pollutants into the river."
        },
        {
          "word": "powder",
          "partOfSpeech": "noun",
          "meaning": "fine dry particles",
          "example": "He spilled baby powder on the floor."
        },
        {
          "word": "prompt",
          "partOfSpeech": "verb",
          "meaning": "to cause or encourage",
          "example": "The teacher's question prompted a discussion."
        },
        {
          "word": "reject",
          "partOfSpeech": "verb",
          "meaning": "to refuse",
          "example": "She rejected his job offer."
        },
        {
          "word": "skeptic",
          "partOfSpeech": "noun",
          "meaning": "a person who doubts",
          "example": "The skeptic questioned the new theory."
        },
        {
          "word": "substance",
          "partOfSpeech": "noun",
          "meaning": "material with a certain makeup",
          "example": "Water is a clear substance."
        },
        {
          "word": "substantially",
          "partOfSpeech": "adverb",
          "meaning": "greatly, by a large amount",
          "example": "The cost increased substantially."
        },
        {
          "word": "ton",
          "partOfSpeech": "noun",
          "meaning": "a unit of weight (1000 kg)",
          "example": "The ship carried 10 tons of coal."
        },
        {
          "word": "transport",
          "partOfSpeech": "verb",
          "meaning": "to move from one place to another",
          "example": "Trucks transport goods across the country."
        }
      ]
    },
    "3": {
      "title": "Unit 3 - Le Chambonsur-Lignon",
      "words": [
        {
          "word": "align",
          "partOfSpeech": "verb",
          "meaning": "to line up",
          "example": "He aligned the text to the left."
        },
        {
          "word": "authority",
          "partOfSpeech": "noun",
          "meaning": "power to control",
          "example": "The police have authority to arrest people."
        },
        {
          "word": "barn",
          "partOfSpeech": "noun",
          "meaning": "a farm building",
          "example": "The cows are kept in the barn."
        },
        {
          "word": "betray",
          "partOfSpeech": "verb",
          "meaning": "to break trust",
          "example": "He betrayed his friend's secret."
        },
        {
          "word": "Bible",
          "partOfSpeech": "noun",
          "meaning": "the holy book of Christianity",
          "example": "She read a story from the Bible."
        },
        {
          "word": "Catholic",
          "partOfSpeech": "adjective/noun",
          "meaning": "relating to the Roman Catholic Church",
          "example": "He grew up in a Catholic family."
        },
        {
          "word": "cooperate",
          "partOfSpeech": "verb",
          "meaning": "to work together",
          "example": "The teams cooperated to finish the project."
        }
      ]
    },
    "4": {
      "title": "Unit 4 - Women in Tech",
      "words": [
        {
          "word": "comfortable",
          "partOfSpeech": "adjective",
          "meaning": "providing ease",
          "example": "This chair is very comfortable."
        },
        {
          "word": "education",
          "partOfSpeech": "noun",
          "meaning": "process of learning",
          "example": "Education is a human right."
        },
        {
          "word": "encouragement",
          "partOfSpeech": "noun",
          "meaning": "support",
          "example": "Her words gave him encouragement."
        },
        {
          "word": "endorse",
          "partOfSpeech": "verb",
          "meaning": "to publicly support",
          "example": "The athlete endorsed the new product."
        },
        {
          "word": "equal",
          "partOfSpeech": "adjective",
          "meaning": "the same in amount",
          "example": "All citizens are equal before the law."
        },
        {
          "word": "face",
          "partOfSpeech": "verb",
          "meaning": "to deal with",
          "example": "We must face challenges bravely."
        },
        {
          "word": "field",
          "partOfSpeech": "noun",
          "meaning": "area of land or study",
          "example": "She works in the medical field."
        },
        {
          "word": "foster",
          "partOfSpeech": "verb",
          "meaning": "to encourage growth",
          "example": "The teacher fostered creativity in class."
        },
        {
          "word": "guidance",
          "partOfSpeech": "noun",
          "meaning": "help or advice",
          "example": "She asked for guidance on her career."
        },
        {
          "word": "hold",
          "partOfSpeech": "verb",
          "meaning": "to grasp; to keep",
          "example": "He held the baby gently."
        },
        {
          "word": "inclusion",
          "partOfSpeech": "noun",
          "meaning": "the act of involving all",
          "example": "The school values inclusion of every student."
        },
        {
          "word": "inspire",
          "partOfSpeech": "verb",
          "meaning": "to motivate",
          "example": "The speech inspired the crowd."
        },
        {
          "word": "mere",
          "partOfSpeech": "adjective",
          "meaning": "only; nothing more",
          "example": "It was a mere suggestion."
        },
        {
          "word": "position",
          "partOfSpeech": "noun",
          "meaning": "place or job",
          "example": "She applied for a teaching position."
        },
        {
          "word": "power",
          "partOfSpeech": "noun",
          "meaning": "strength or authority",
          "example": "Knowledge is power."
        },
        {
          "word": "responsibility",
          "partOfSpeech": "noun",
          "meaning": "duty",
          "example": "Parents have responsibility for children."
        },
        {
          "word": "soar",
          "partOfSpeech": "verb",
          "meaning": "to fly high",
          "example": "The eagle soared above the mountains."
        },
        {
          "word": "tool",
          "partOfSpeech": "noun",
          "meaning": "an instrument for work",
          "example": "A hammer is a useful tool."
        },
        {
          "word": "vocal",
          "partOfSpeech": "adjective",
          "meaning": "related to voice; outspoken",
          "example": "She was vocal about her opinions."
        },
        {
          "word": "workplace",
          "partOfSpeech": "noun",
          "meaning": "a place of employment",
          "example": "The workplace has strict safety rules."
        }
      ]
    },
    "5": {
      "title": "Unit 5 - Impressionism",
      "words": [
        {
          "word": "academic",
          "partOfSpeech": "adjective",
          "meaning": "related to education",
          "example": "She has strong academic skills."
        },
        {
          "word": "acceptance",
          "partOfSpeech": "noun",
          "meaning": "approval",
          "example": "He gained acceptance into the club."
        },
        {
          "word": "array",
          "partOfSpeech": "noun",
          "meaning": "a wide variety",
          "example": "The store had an array of books."
        },
        {
          "word": "blur",
          "partOfSpeech": "verb/noun",
          "meaning": "to make unclear; unclear image",
          "example": "Tears blurred her vision."
        },
        {
          "word": "café",
          "partOfSpeech": "noun",
          "meaning": "a small restaurant",
          "example": "We had lunch at a café."
        },
        {
          "word": "canvas",
          "partOfSpeech": "noun",
          "meaning": "strong cloth for painting",
          "example": "He painted on a large canvas."
        },
        {
          "word": "cinema",
          "partOfSpeech": "noun",
          "meaning": "movie theater",
          "example": "We went to the cinema to watch a film."
        },
        {
          "word": "class",
          "partOfSpeech": "noun",
          "meaning": "group of students or type",
          "example": "The class studied history."
        },
        {
          "word": "distinctive",
          "partOfSpeech": "adjective",
          "meaning": "unique, easy to recognize",
          "example": "He has a distinctive accent."
        },
        {
          "word": "key",
          "partOfSpeech": "noun",
          "meaning": "important tool; also a small device",
          "example": "Honesty is the key to trust."
        },
        {
          "word": "movement",
          "partOfSpeech": "noun",
          "meaning": "act of moving or social group",
          "example": "The movement for equal rights grew."
        },
        {
          "word": "practice",
          "partOfSpeech": "noun/verb",
          "meaning": "repeated exercise; to rehearse",
          "example": "She practices piano daily."
        },
        {
          "word": "realistic",
          "partOfSpeech": "adjective",
          "meaning": "practical, true to life",
          "example": "That movie had realistic scenes."
        },
        {
          "word": "reflection",
          "partOfSpeech": "noun",
          "meaning": "image in a mirror or deep thought",
          "example": "She saw her reflection in the water."
        },
        {
          "word": "rule",
          "partOfSpeech": "noun/verb",
          "meaning": "law; to govern",
          "example": "The teacher set clear rules."
        },
        {
          "word": "stroke",
          "partOfSpeech": "noun/verb",
          "meaning": "a hit; to move smoothly",
          "example": "The swimmer made strong strokes."
        },
        {
          "word": "sunlight",
          "partOfSpeech": "noun",
          "meaning": "light from the sun",
          "example": "The room was full of sunlight."
        },
        {
          "word": "traditional",
          "partOfSpeech": "adjective",
          "meaning": "relating to customs",
          "example": "They wore traditional clothing at the festival."
        },
        {
          "word": "unlike",
          "partOfSpeech": "preposition/conjunction",
          "meaning": "different from",
          "example": "Unlike his brother, he loves sports."
        },
        {
          "word": "width",
          "partOfSpeech": "noun",
          "meaning": "how wide something is",
          "example": "The width of the table is 2 meters."
        }
      ]
    },
    "6": {
      "title": "Unit 6 - Anzac Day",
      "words": [
        {
          "word": "anthem",
          "partOfSpeech": "noun",
          "meaning": "a national song",
          "example": "They sang the national anthem."
        },
        {
          "word": "beyond",
          "partOfSpeech": "preposition/adverb",
          "meaning": "farther than",
          "example": "The park is beyond the river."
        },
        {
          "word": "determination",
          "partOfSpeech": "noun",
          "meaning": "strong will",
          "example": "She showed great determination in her work."
        },
        {
          "word": "fighting",
          "partOfSpeech": "noun/adjective",
          "meaning": "physical combat",
          "example": "The fighting lasted for hours."
        },
        {
          "word": "joint",
          "partOfSpeech": "noun",
          "meaning": "a connection of bones",
          "example": "My knee joint hurts."
        },
        {
          "word": "landing",
          "partOfSpeech": "noun",
          "meaning": "coming down from air",
          "example": "The plane made a smooth landing."
        },
        {
          "word": "mark",
          "partOfSpeech": "noun/verb",
          "meaning": "a sign; to indicate",
          "example": "He marked the wrong answer."
        },
        {
          "word": "mobilize",
          "partOfSpeech": "verb",
          "meaning": "to organize for action",
          "example": "The army mobilized quickly."
        },
        {
          "word": "nation",
          "partOfSpeech": "noun",
          "meaning": "a country",
          "example": "The nation celebrated Independence Day."
        },
        {
          "word": "originally",
          "partOfSpeech": "adverb",
          "meaning": "at first",
          "example": "The game was originally from China."
        },
        {
          "word": "outbreak",
          "partOfSpeech": "noun",
          "meaning": "sudden spread of disease or conflict",
          "example": "There was an outbreak of flu."
        },
        {
          "word": "pray",
          "partOfSpeech": "verb",
          "meaning": "to talk to God",
          "example": "They prayed for peace."
        },
        {
          "word": "prisoner",
          "partOfSpeech": "noun",
          "meaning": "a person kept in jail",
          "example": "The prisoner escaped at night."
        },
        {
          "word": "sacrifice",
          "partOfSpeech": "noun/verb",
          "meaning": "to give up for others",
          "example": "She sacrificed her free time for study."
        },
        {
          "word": "silence",
          "partOfSpeech": "noun",
          "meaning": "absence of sound",
          "example": "There was complete silence in the room."
        },
        {
          "word": "thus",
          "partOfSpeech": "adverb",
          "meaning": "as a result",
          "example": "He was late; thus, he missed the bus."
        },
        {
          "word": "tribute",
          "partOfSpeech": "noun",
          "meaning": "respect shown",
          "example": "They paid tribute to the hero."
        },
        {
          "word": "victory",
          "partOfSpeech": "noun",
          "meaning": "success in a contest",
          "example": "The team celebrated their victory."
        },
        {
          "word": "wild",
          "partOfSpeech": "adjective",
          "meaning": "not tamed",
          "example": "Wild animals live in the jungle."
        },
        {
          "word": "wound",
          "partOfSpeech": "noun/verb",
          "meaning": "injury; to injure",
          "example": "The soldier had a deep wound."
        }
      ]
    },
    "7": {
      "title": "Unit 7 - Endangered languages",
      "words": [
        {
          "word": "assimilate",
          "partOfSpeech": "verb",
          "meaning": "to absorb into a group",
          "example": "Immigrants assimilate into new cultures."
        },
        {
          "word": "attempt",
          "partOfSpeech": "noun/verb",
          "meaning": "a try; to try",
          "example": "He made an attempt to climb Everest."
        },
        {
          "word": "case",
          "partOfSpeech": "noun",
          "meaning": "an example or situation",
          "example": "This is a rare case of illness."
        },
        {
          "word": "cease",
          "partOfSpeech": "verb",
          "meaning": "to stop",
          "example": "The rain finally ceased."
        },
        {
          "word": "danger",
          "partOfSpeech": "noun",
          "meaning": "risk of harm",
          "example": "He was in great danger."
        },
        {
          "word": "devastating",
          "partOfSpeech": "adjective",
          "meaning": "very destructive",
          "example": "The hurricane was devastating."
        },
        {
          "word": "diversity",
          "partOfSpeech": "noun",
          "meaning": "variety",
          "example": "The city has cultural diversity."
        },
        {
          "word": "earthquake",
          "partOfSpeech": "noun",
          "meaning": "sudden shaking of the earth",
          "example": "A strong earthquake struck the town."
        },
        {
          "word": "endangered",
          "partOfSpeech": "adjective",
          "meaning": "at risk of extinction",
          "example": "Pandas are endangered animals."
        },
        {
          "word": "extinction",
          "partOfSpeech": "noun",
          "meaning": "dying out of a species",
          "example": "Dinosaurs faced extinction long ago."
        },
        {
          "word": "forever",
          "partOfSpeech": "adverb",
          "meaning": "for all time",
          "example": "I will love you forever."
        },
        {
          "word": "generally",
          "partOfSpeech": "adverb",
          "meaning": "usually",
          "example": "He generally wakes up early."
        },
        {
          "word": "genocide",
          "partOfSpeech": "noun",
          "meaning": "killing of a large group",
          "example": "The war led to genocide."
        },
        {
          "word": "hit",
          "partOfSpeech": "verb/noun",
          "meaning": "to strike; a blow",
          "example": "He hit the ball with the bat."
        },
        {
          "word": "lose",
          "partOfSpeech": "verb",
          "meaning": "to misplace or not win",
          "example": "They lost the game."
        },
        {
          "word": "native",
          "partOfSpeech": "adjective/noun",
          "meaning": "original to a place",
          "example": "She is a native speaker of English."
        },
        {
          "word": "percent",
          "partOfSpeech": "noun",
          "meaning": "one part in a hundred",
          "example": "Ten percent of students passed."
        },
        {
          "word": "reason",
          "partOfSpeech": "noun",
          "meaning": "cause or explanation",
          "example": "The reason for his absence was illness."
        },
        {
          "word": "reference",
          "partOfSpeech": "noun",
          "meaning": "mention or source",
          "example": "She gave a reference to her book."
        },
        {
          "word": "urban",
          "partOfSpeech": "adjective",
          "meaning": "related to cities",
          "example": "Urban areas are crowded."
        }
      ]
    },
    "8": {
      "title": "Unit 8 - The Ketogenic Diet",
      "words": [
        {
          "word": "burn",
          "partOfSpeech": "verb/noun",
          "meaning": "to be on fire; damage from heat",
          "example": "The paper burned quickly."
        },
        {
          "word": "check",
          "partOfSpeech": "verb/noun",
          "meaning": "to examine; a mark or test",
          "example": "Please check your answers."
        },
        {
          "word": "consume",
          "partOfSpeech": "verb",
          "meaning": "to eat or use up",
          "example": "The fire consumed the building."
        },
        {
          "word": "diet",
          "partOfSpeech": "noun",
          "meaning": "food and drink regularly consumed",
          "example": "A healthy diet includes vegetables."
        },
        {
          "word": "energy",
          "partOfSpeech": "noun",
          "meaning": "power or strength",
          "example": "The sun provides energy for plants."
        },
        {
          "word": "fat",
          "partOfSpeech": "noun/adjective",
          "meaning": "oily substance; overweight",
          "example": "Some fat is necessary for health."
        },
        {
          "word": "fuel",
          "partOfSpeech": "noun",
          "meaning": "material burned for energy",
          "example": "Gasoline is a type of fuel."
        },
        {
          "word": "glucose",
          "partOfSpeech": "noun",
          "meaning": "sugar used by the body",
          "example": "Glucose provides energy to cells."
        },
        {
          "word": "ketone",
          "partOfSpeech": "noun",
          "meaning": "chemical produced during fat breakdown",
          "example": "Ketones are used for energy."
        },
        {
          "word": "limit",
          "partOfSpeech": "noun/verb",
          "meaning": "boundary; to restrict",
          "example": "There is a limit to what we can do."
        },
        {
          "word": "metabolism",
          "partOfSpeech": "noun",
          "meaning": "chemical processes in the body",
          "example": "Exercise increases metabolism."
        },
        {
          "word": "protein",
          "partOfSpeech": "noun",
          "meaning": "nutrient for building muscles",
          "example": "Meat is high in protein."
        },
        {
          "word": "reduce",
          "partOfSpeech": "verb",
          "meaning": "to make smaller or less",
          "example": "We need to reduce waste."
        },
        {
          "word": "source",
          "partOfSpeech": "noun",
          "meaning": "where something comes from",
          "example": "The river is the source of water."
        },
        {
          "word": "store",
          "partOfSpeech": "verb/noun",
          "meaning": "to keep; a shop",
          "example": "The body stores fat for energy."
        },
        {
          "word": "supply",
          "partOfSpeech": "noun/verb",
          "meaning": "amount available; to provide",
          "example": "The supply of food was limited."
        },
        {
          "word": "switch",
          "partOfSpeech": "verb/noun",
          "meaning": "to change; a device",
          "example": "He switched to a new diet."
        },
        {
          "word": "target",
          "partOfSpeech": "noun/verb",
          "meaning": "goal; to aim at",
          "example": "The target was hit perfectly."
        },
        {
          "word": "weight",
          "partOfSpeech": "noun",
          "meaning": "how heavy something is",
          "example": "She lost weight on the diet."
        },
        {
          "word": "yield",
          "partOfSpeech": "verb/noun",
          "meaning": "to produce; amount produced",
          "example": "The farm yields good crops."
        }
      ]
    },
    "9": {
      "title": "Unit 9 - The Bachelor's lesson",
      "words": [
        {
          "word": "bachelor",
          "partOfSpeech": "noun",
          "meaning": "unmarried man",
          "example": "He is a bachelor who lives alone."
        },
        {
          "word": "cook",
          "partOfSpeech": "verb/noun",
          "meaning": "to prepare food; person who cooks",
          "example": "She loves to cook Italian food."
        },
        {
          "word": "dinner",
          "partOfSpeech": "noun",
          "meaning": "evening meal",
          "example": "We had dinner at 7 PM."
        },
        {
          "word": "experience",
          "partOfSpeech": "noun/verb",
          "meaning": "knowledge from doing; to go through",
          "example": "Travel gives you new experiences."
        },
        {
          "word": "fail",
          "partOfSpeech": "verb",
          "meaning": "to not succeed",
          "example": "Don't be afraid to fail."
        },
        {
          "word": "guest",
          "partOfSpeech": "noun",
          "meaning": "person invited to visit",
          "example": "We had guests for dinner."
        },
        {
          "word": "host",
          "partOfSpeech": "noun/verb",
          "meaning": "person who receives guests; to organize",
          "example": "She was a gracious host."
        },
        {
          "word": "invite",
          "partOfSpeech": "verb",
          "meaning": "to ask someone to come",
          "example": "I invite you to my party."
        },
        {
          "word": "kitchen",
          "partOfSpeech": "noun",
          "meaning": "room for cooking",
          "example": "The kitchen is the heart of the home."
        },
        {
          "word": "learn",
          "partOfSpeech": "verb",
          "meaning": "to gain knowledge",
          "example": "Children learn quickly."
        },
        {
          "word": "lesson",
          "partOfSpeech": "noun",
          "meaning": "teaching session",
          "example": "The lesson was very helpful."
        },
        {
          "word": "meal",
          "partOfSpeech": "noun",
          "meaning": "food eaten at one time",
          "example": "Breakfast is the most important meal."
        },
        {
          "word": "prepare",
          "partOfSpeech": "verb",
          "meaning": "to get ready",
          "example": "Prepare for the exam."
        },
        {
          "word": "recipe",
          "partOfSpeech": "noun",
          "meaning": "instructions for cooking",
          "example": "Follow the recipe carefully."
        },
        {
          "word": "serve",
          "partOfSpeech": "verb",
          "meaning": "to provide food or help",
          "example": "The waiter served the food."
        },
        {
          "word": "skill",
          "partOfSpeech": "noun",
          "meaning": "ability to do something well",
          "example": "Cooking is a useful skill."
        },
        {
          "word": "success",
          "partOfSpeech": "noun",
          "meaning": "achievement of goals",
          "example": "Hard work leads to success."
        },
        {
          "word": "teach",
          "partOfSpeech": "verb",
          "meaning": "to help someone learn",
          "example": "Teachers teach students."
        },
        {
          "word": "try",
          "partOfSpeech": "verb/noun",
          "meaning": "to attempt; an attempt",
          "example": "Try your best."
        },
        {
          "word": "welcome",
          "partOfSpeech": "verb/adjective",
          "meaning": "to greet warmly; gladly received",
          "example": "Welcome to our home."
        }
      ]
    },
    "10": {
      "title": "Unit 10 - The Corrupt Administrator",
      "words": [
        {
          "word": "administrator",
          "partOfSpeech": "noun",
          "meaning": "person who manages an organization",
          "example": "The administrator approved the budget."
        },
        {
          "word": "authority",
          "partOfSpeech": "noun",
          "meaning": "power to control or make decisions",
          "example": "The police have authority to arrest."
        },
        {
          "word": "bribe",
          "partOfSpeech": "noun/verb",
          "meaning": "money given to influence; to offer money",
          "example": "He refused to take a bribe."
        },
        {
          "word": "corrupt",
          "partOfSpeech": "adjective/verb",
          "meaning": "dishonest; to make dishonest",
          "example": "The corrupt official was arrested."
        },
        {
          "word": "crime",
          "partOfSpeech": "noun",
          "meaning": "illegal act",
          "example": "Stealing is a crime."
        },
        {
          "word": "evidence",
          "partOfSpeech": "noun",
          "meaning": "proof or indication",
          "example": "The evidence proved his guilt."
        },
        {
          "word": "government",
          "partOfSpeech": "noun",
          "meaning": "group that rules a country",
          "example": "The government passed new laws."
        },
        {
          "word": "investigate",
          "partOfSpeech": "verb",
          "meaning": "to examine carefully",
          "example": "Police investigate crimes."
        },
        {
          "word": "justice",
          "partOfSpeech": "noun",
          "meaning": "fair treatment under law",
          "example": "Everyone deserves justice."
        },
        {
          "word": "law",
          "partOfSpeech": "noun",
          "meaning": "rule made by government",
          "example": "It's against the law to speed."
        },
        {
          "word": "official",
          "partOfSpeech": "noun/adjective",
          "meaning": "person in government; formal",
          "example": "The official denied the charges."
        },
        {
          "word": "power",
          "partOfSpeech": "noun",
          "meaning": "ability to control or influence",
          "example": "Money gives people power."
        },
        {
          "word": "punish",
          "partOfSpeech": "verb",
          "meaning": "to penalize for wrongdoing",
          "example": "The court will punish the criminal."
        },
        {
          "word": "report",
          "partOfSpeech": "noun/verb",
          "meaning": "written account; to tell about",
          "example": "The report was published yesterday."
        },
        {
          "word": "scandal",
          "partOfSpeech": "noun",
          "meaning": "shocking or disgraceful event",
          "example": "The scandal ruined his career."
        },
        {
          "word": "secret",
          "partOfSpeech": "noun/adjective",
          "meaning": "information kept hidden; private",
          "example": "Keep this a secret."
        },
        {
          "word": "steal",
          "partOfSpeech": "verb",
          "meaning": "to take without permission",
          "example": "It's wrong to steal."
        },
        {
          "word": "suspect",
          "partOfSpeech": "noun/verb",
          "meaning": "person thought to be guilty; to think",
          "example": "The suspect was arrested."
        },
        {
          "word": "trust",
          "partOfSpeech": "noun/verb",
          "meaning": "belief in reliability; to believe",
          "example": "Trust is important in relationships."
        },
        {
          "word": "wrong",
          "partOfSpeech": "adjective/adverb",
          "meaning": "not correct; incorrectly",
          "example": "It's wrong to lie."
        }
      ]
    },
    "11": {
      "title": "Unit 11 - A Famous Accident",
      "words": [
        {
          "word": "accident",
          "partOfSpeech": "noun",
          "meaning": "unfortunate event",
          "example": "The car accident was serious."
        },
        {
          "word": "celebrity",
          "partOfSpeech": "noun",
          "meaning": "famous person",
          "example": "The celebrity signed autographs."
        },
        {
          "word": "crash",
          "partOfSpeech": "noun/verb",
          "meaning": "violent collision; to collide",
          "example": "The plane crash was tragic."
        },
        {
          "word": "damage",
          "partOfSpeech": "noun/verb",
          "meaning": "harm; to harm",
          "example": "The storm caused damage."
        },
        {
          "word": "famous",
          "partOfSpeech": "adjective",
          "meaning": "well-known",
          "example": "She is a famous actress."
        },
        {
          "word": "injury",
          "partOfSpeech": "noun",
          "meaning": "physical harm",
          "example": "He suffered a serious injury."
        },
        {
          "word": "media",
          "partOfSpeech": "noun",
          "meaning": "news and entertainment",
          "example": "The media covered the story."
        },
        {
          "word": "news",
          "partOfSpeech": "noun",
          "meaning": "information about events",
          "example": "The news was shocking."
        },
        {
          "word": "public",
          "partOfSpeech": "noun/adjective",
          "meaning": "people; open to everyone",
          "example": "The public was concerned."
        },
        {
          "word": "recovery",
          "partOfSpeech": "noun",
          "meaning": "return to health",
          "example": "Her recovery was quick."
        },
        {
          "word": "report",
          "partOfSpeech": "noun/verb",
          "meaning": "account; to tell",
          "example": "The report was accurate."
        },
        {
          "word": "safety",
          "partOfSpeech": "noun",
          "meaning": "protection from harm",
          "example": "Safety is our priority."
        },
        {
          "word": "scene",
          "partOfSpeech": "noun",
          "meaning": "place where something happens",
          "example": "Police arrived at the scene."
        },
        {
          "word": "serious",
          "partOfSpeech": "adjective",
          "meaning": "important or severe",
          "example": "This is a serious matter."
        },
        {
          "word": "survive",
          "partOfSpeech": "verb",
          "meaning": "to stay alive",
          "example": "He survived the accident."
        },
        {
          "word": "tragic",
          "partOfSpeech": "adjective",
          "meaning": "very sad",
          "example": "It was a tragic event."
        },
        {
          "word": "victim",
          "partOfSpeech": "noun",
          "meaning": "person harmed",
          "example": "The victim was hospitalized."
        },
        {
          "word": "witness",
          "partOfSpeech": "noun/verb",
          "meaning": "person who sees; to see",
          "example": "The witness testified in court."
        },
        {
          "word": "wound",
          "partOfSpeech": "noun/verb",
          "meaning": "injury; to injure",
          "example": "The wound was deep."
        },
        {
          "word": "wreck",
          "partOfSpeech": "noun/verb",
          "meaning": "destroyed vehicle; to destroy",
          "example": "The car was a total wreck."
        }
      ]
    },
    "12": {
      "title": "Unit 12 - Beethoven's Gift",
      "words": [
        {
          "word": "art",
          "partOfSpeech": "noun",
          "meaning": "creative expression",
          "example": "She loves modern art."
        },
        {
          "word": "artist",
          "partOfSpeech": "noun",
          "meaning": "person who creates art",
          "example": "The artist painted a masterpiece."
        },
        {
          "word": "beautiful",
          "partOfSpeech": "adjective",
          "meaning": "pleasing to look at",
          "example": "The sunset was beautiful."
        },
        {
          "word": "compose",
          "partOfSpeech": "verb",
          "meaning": "to create music",
          "example": "He composed a symphony."
        },
        {
          "word": "creative",
          "partOfSpeech": "adjective",
          "meaning": "imaginative",
          "example": "She is very creative."
        },
        {
          "word": "deaf",
          "partOfSpeech": "adjective",
          "meaning": "unable to hear",
          "example": "The musician was deaf."
        },
        {
          "word": "emotion",
          "partOfSpeech": "noun",
          "meaning": "feeling",
          "example": "The music expressed emotion."
        },
        {
          "word": "express",
          "partOfSpeech": "verb",
          "meaning": "to show feelings",
          "example": "Art helps express emotions."
        },
        {
          "word": "gift",
          "partOfSpeech": "noun",
          "meaning": "talent or present",
          "example": "He has a gift for music."
        },
        {
          "word": "inspire",
          "partOfSpeech": "verb",
          "meaning": "to motivate",
          "example": "The story inspired many."
        },
        {
          "word": "masterpiece",
          "partOfSpeech": "noun",
          "meaning": "great work of art",
          "example": "This painting is a masterpiece."
        },
        {
          "word": "music",
          "partOfSpeech": "noun",
          "meaning": "organized sound",
          "example": "I love classical music."
        },
        {
          "word": "musician",
          "partOfSpeech": "noun",
          "meaning": "person who plays music",
          "example": "The musician performed well."
        },
        {
          "word": "passion",
          "partOfSpeech": "noun",
          "meaning": "strong feeling",
          "example": "He has a passion for music."
        },
        {
          "word": "perform",
          "partOfSpeech": "verb",
          "meaning": "to present to audience",
          "example": "She performed beautifully."
        },
        {
          "word": "symphony",
          "partOfSpeech": "noun",
          "meaning": "long musical piece",
          "example": "The symphony was amazing."
        },
        {
          "word": "talent",
          "partOfSpeech": "noun",
          "meaning": "natural ability",
          "example": "She has great talent."
        },
        {
          "word": "touch",
          "partOfSpeech": "verb/noun",
          "meaning": "to feel; sense of feeling",
          "example": "The music touched my heart."
        },
        {
          "word": "vision",
          "partOfSpeech": "noun",
          "meaning": "ability to see or imagine",
          "example": "He had a clear vision."
        },
        {
          "word": "voice",
          "partOfSpeech": "noun",
          "meaning": "sound made when speaking",
          "example": "She has a beautiful voice."
        }
      ]
    },
    "13": {
      "title": "Unit 13 - The day Without Sight",
      "words": [
        {
          "word": "blind",
          "partOfSpeech": "adjective",
          "meaning": "unable to see",
          "example": "The blind man used a cane."
        },
        {
          "word": "challenge",
          "partOfSpeech": "noun/verb",
          "meaning": "difficult task; to test",
          "example": "This is a big challenge."
        },
        {
          "word": "dark",
          "partOfSpeech": "adjective/noun",
          "meaning": "without light; absence of light",
          "example": "The room was dark."
        },
        {
          "word": "difficulty",
          "partOfSpeech": "noun",
          "meaning": "problem or trouble",
          "example": "He faced many difficulties."
        },
        {
          "word": "experience",
          "partOfSpeech": "noun/verb",
          "meaning": "event; to go through",
          "example": "It was a new experience."
        },
        {
          "word": "feel",
          "partOfSpeech": "verb",
          "meaning": "to sense by touch",
          "example": "Feel the texture."
        },
        {
          "word": "guide",
          "partOfSpeech": "noun/verb",
          "meaning": "person who helps; to lead",
          "example": "The guide showed the way."
        },
        {
          "word": "help",
          "partOfSpeech": "verb/noun",
          "meaning": "to assist; assistance",
          "example": "Can you help me?"
        },
        {
          "word": "imagine",
          "partOfSpeech": "verb",
          "meaning": "to picture in mind",
          "example": "Imagine a world without sight."
        },
        {
          "word": "independence",
          "partOfSpeech": "noun",
          "meaning": "freedom from control",
          "example": "She values her independence."
        },
        {
          "word": "learn",
          "partOfSpeech": "verb",
          "meaning": "to gain knowledge",
          "example": "We learn from experience."
        },
        {
          "word": "light",
          "partOfSpeech": "noun/adjective",
          "meaning": "brightness; not heavy",
          "example": "The light was bright."
        },
        {
          "word": "sense",
          "partOfSpeech": "noun/verb",
          "meaning": "feeling; to perceive",
          "example": "Use your common sense."
        },
        {
          "word": "sight",
          "partOfSpeech": "noun",
          "meaning": "ability to see",
          "example": "He lost his sight."
        },
        {
          "word": "sound",
          "partOfSpeech": "noun/adjective",
          "meaning": "noise; healthy",
          "example": "The sound was loud."
        },
        {
          "word": "support",
          "partOfSpeech": "noun/verb",
          "meaning": "help; to help",
          "example": "Thank you for your support."
        },
        {
          "word": "touch",
          "partOfSpeech": "verb/noun",
          "meaning": "to feel; sense of feeling",
          "example": "The fabric felt soft to touch."
        },
        {
          "word": "understand",
          "partOfSpeech": "verb",
          "meaning": "to comprehend",
          "example": "I understand the problem."
        },
        {
          "word": "vision",
          "partOfSpeech": "noun",
          "meaning": "ability to see",
          "example": "Her vision was perfect."
        },
        {
          "word": "world",
          "partOfSpeech": "noun",
          "meaning": "the earth and everything on it",
          "example": "The world is beautiful."
        }
      ]
    },
    "14": {
      "title": "Unit 14 - The History of Parachutes",
      "words": [
        {
          "word": "air",
          "partOfSpeech": "noun",
          "meaning": "the atmosphere",
          "example": "The air was fresh."
        },
        {
          "word": "brave",
          "partOfSpeech": "adjective",
          "meaning": "courageous",
          "example": "The brave soldier fought."
        },
        {
          "word": "danger",
          "partOfSpeech": "noun",
          "meaning": "risk of harm",
          "example": "He faced great danger."
        },
        {
          "word": "design",
          "partOfSpeech": "noun/verb",
          "meaning": "plan; to plan",
          "example": "The design was clever."
        },
        {
          "word": "develop",
          "partOfSpeech": "verb",
          "meaning": "to grow or improve",
          "example": "Technology continues to develop."
        },
        {
          "word": "fall",
          "partOfSpeech": "verb/noun",
          "meaning": "to drop; autumn",
          "example": "The leaves fall in autumn."
        },
        {
          "word": "fly",
          "partOfSpeech": "verb",
          "meaning": "to move through air",
          "example": "Birds fly in the sky."
        },
        {
          "word": "height",
          "partOfSpeech": "noun",
          "meaning": "how high something is",
          "example": "The building has great height."
        },
        {
          "word": "history",
          "partOfSpeech": "noun",
          "meaning": "past events",
          "example": "History repeats itself."
        },
        {
          "word": "invent",
          "partOfSpeech": "verb",
          "meaning": "to create something new",
          "example": "He invented a new device."
        },
        {
          "word": "land",
          "partOfSpeech": "noun/verb",
          "meaning": "ground; to come down",
          "example": "The plane will land soon."
        },
        {
          "word": "military",
          "partOfSpeech": "adjective/noun",
          "meaning": "relating to armed forces",
          "example": "Military training is tough."
        },
        {
          "word": "parachute",
          "partOfSpeech": "noun",
          "meaning": "device for safe landing",
          "example": "The parachute opened safely."
        },
        {
          "word": "pilot",
          "partOfSpeech": "noun",
          "meaning": "person who flies aircraft",
          "example": "The pilot was experienced."
        },
        {
          "word": "safety",
          "partOfSpeech": "noun",
          "meaning": "protection from harm",
          "example": "Safety is important."
        },
        {
          "word": "sky",
          "partOfSpeech": "noun",
          "meaning": "space above earth",
          "example": "The sky was blue."
        },
        {
          "word": "soldier",
          "partOfSpeech": "noun",
          "meaning": "member of army",
          "example": "The soldier was brave."
        },
        {
          "word": "technology",
          "partOfSpeech": "noun",
          "meaning": "scientific knowledge",
          "example": "Modern technology is amazing."
        },
        {
          "word": "test",
          "partOfSpeech": "noun/verb",
          "meaning": "examination; to examine",
          "example": "The test was difficult."
        },
        {
          "word": "war",
          "partOfSpeech": "noun",
          "meaning": "armed conflict",
          "example": "War is terrible."
        }
      ]
    },
    "15": {
      "title": "Unit 15 - Microchips",
      "words": [
        {
          "word": "advance",
          "partOfSpeech": "noun/verb",
          "meaning": "progress; to move forward",
          "example": "Technology continues to advance."
        },
        {
          "word": "computer",
          "partOfSpeech": "noun",
          "meaning": "electronic device",
          "example": "The computer is fast."
        },
        {
          "word": "control",
          "partOfSpeech": "noun/verb",
          "meaning": "power over; to manage",
          "example": "He has control over the situation."
        },
        {
          "word": "device",
          "partOfSpeech": "noun",
          "meaning": "tool or machine",
          "example": "This device is useful."
        },
        {
          "word": "electronic",
          "partOfSpeech": "adjective",
          "meaning": "using electricity",
          "example": "Electronic devices are everywhere."
        },
        {
          "word": "function",
          "partOfSpeech": "noun/verb",
          "meaning": "purpose; to work",
          "example": "The function of this tool is clear."
        },
        {
          "word": "information",
          "partOfSpeech": "noun",
          "meaning": "facts or data",
          "example": "The information was helpful."
        },
        {
          "word": "integrate",
          "partOfSpeech": "verb",
          "meaning": "to combine",
          "example": "We need to integrate the systems."
        },
        {
          "word": "microchip",
          "partOfSpeech": "noun",
          "meaning": "small electronic circuit",
          "example": "The microchip is tiny."
        },
        {
          "word": "modern",
          "partOfSpeech": "adjective",
          "meaning": "current or recent",
          "example": "Modern technology is amazing."
        },
        {
          "word": "process",
          "partOfSpeech": "noun/verb",
          "meaning": "series of steps; to handle",
          "example": "The process takes time."
        },
        {
          "word": "program",
          "partOfSpeech": "noun/verb",
          "meaning": "set of instructions; to code",
          "example": "The program works well."
        },
        {
          "word": "revolution",
          "partOfSpeech": "noun",
          "meaning": "major change",
          "example": "The industrial revolution changed society."
        },
        {
          "word": "science",
          "partOfSpeech": "noun",
          "meaning": "systematic study",
          "example": "Science explains the world."
        },
        {
          "word": "size",
          "partOfSpeech": "noun",
          "meaning": "how big something is",
          "example": "The size is perfect."
        },
        {
          "word": "small",
          "partOfSpeech": "adjective",
          "meaning": "not large",
          "example": "The device is very small."
        },
        {
          "word": "speed",
          "partOfSpeech": "noun",
          "meaning": "how fast something moves",
          "example": "The speed was incredible."
        },
        {
          "word": "system",
          "partOfSpeech": "noun",
          "meaning": "organized set of parts",
          "example": "The system is efficient."
        },
        {
          "word": "tiny",
          "partOfSpeech": "adjective",
          "meaning": "very small",
          "example": "The chip is tiny."
        },
        {
          "word": "wire",
          "partOfSpeech": "noun",
          "meaning": "thin metal thread",
          "example": "The wire carries electricity."
        }
      ]
    },
    "16": {
      "title": "Unit 16 - The new Bioco",
      "words": [
        {
          "word": "business",
          "partOfSpeech": "noun",
          "meaning": "commercial activity",
          "example": "The business is successful."
        },
        {
          "word": "company",
          "partOfSpeech": "noun",
          "meaning": "organization for business",
          "example": "The company hired new employees."
        },
        {
          "word": "competition",
          "partOfSpeech": "noun",
          "meaning": "rivalry between businesses",
          "example": "There is strong competition."
        },
        {
          "word": "customer",
          "partOfSpeech": "noun",
          "meaning": "person who buys",
          "example": "The customer was satisfied."
        },
        {
          "word": "develop",
          "partOfSpeech": "verb",
          "meaning": "to grow or improve",
          "example": "They developed a new product."
        },
        {
          "word": "employee",
          "partOfSpeech": "noun",
          "meaning": "person who works",
          "example": "The employee was promoted."
        },
        {
          "word": "growth",
          "partOfSpeech": "noun",
          "meaning": "increase in size",
          "example": "The company showed growth."
        },
        {
          "word": "industry",
          "partOfSpeech": "noun",
          "meaning": "business sector",
          "example": "The industry is changing."
        },
        {
          "word": "innovation",
          "partOfSpeech": "noun",
          "meaning": "new idea or method",
          "example": "Innovation drives progress."
        },
        {
          "word": "market",
          "partOfSpeech": "noun",
          "meaning": "place to buy and sell",
          "example": "The market is competitive."
        },
        {
          "word": "product",
          "partOfSpeech": "noun",
          "meaning": "item made for sale",
          "example": "The product is popular."
        },
        {
          "word": "profit",
          "partOfSpeech": "noun",
          "meaning": "money earned",
          "example": "The business made a profit."
        },
        {
          "word": "service",
          "partOfSpeech": "noun",
          "meaning": "work done for others",
          "example": "The service was excellent."
        },
        {
          "word": "success",
          "partOfSpeech": "noun",
          "meaning": "achievement of goals",
          "example": "Success requires hard work."
        },
        {
          "word": "team",
          "partOfSpeech": "noun",
          "meaning": "group working together",
          "example": "The team worked well."
        },
        {
          "word": "technology",
          "partOfSpeech": "noun",
          "meaning": "scientific knowledge",
          "example": "Technology changes quickly."
        },
        {
          "word": "value",
          "partOfSpeech": "noun/verb",
          "meaning": "worth; to appreciate",
          "example": "The value increased."
        },
        {
          "word": "vision",
          "partOfSpeech": "noun",
          "meaning": "future plan",
          "example": "The company has a clear vision."
        },
        {
          "word": "work",
          "partOfSpeech": "noun/verb",
          "meaning": "job; to do tasks",
          "example": "The work is challenging."
        },
        {
          "word": "world",
          "partOfSpeech": "noun",
          "meaning": "the earth and everything on it",
          "example": "The world is connected."
        }
      ]
    },
    "17": {
      "title": "Unit 17 - The Resourceful Landlord",
      "words": [
        {
          "word": "apartment",
          "partOfSpeech": "noun",
          "meaning": "rented living space",
          "example": "The apartment is spacious."
        },
        {
          "word": "building",
          "partOfSpeech": "noun",
          "meaning": "structure with walls",
          "example": "The building is old."
        },
        {
          "word": "contract",
          "partOfSpeech": "noun",
          "meaning": "legal agreement",
          "example": "The contract was signed."
        },
        {
          "word": "cost",
          "partOfSpeech": "noun/verb",
          "meaning": "price; to require payment",
          "example": "The cost was high."
        },
        {
          "word": "fix",
          "partOfSpeech": "verb",
          "meaning": "to repair",
          "example": "He fixed the problem."
        },
        {
          "word": "home",
          "partOfSpeech": "noun",
          "meaning": "place where one lives",
          "example": "Home is where the heart is."
        },
        {
          "word": "house",
          "partOfSpeech": "noun",
          "meaning": "building for living",
          "example": "The house is beautiful."
        },
        {
          "word": "landlord",
          "partOfSpeech": "noun",
          "meaning": "owner of rental property",
          "example": "The landlord was helpful."
        },
        {
          "word": "maintain",
          "partOfSpeech": "verb",
          "meaning": "to keep in good condition",
          "example": "He maintains the property."
        },
        {
          "word": "money",
          "partOfSpeech": "noun",
          "meaning": "currency",
          "example": "Money is important."
        },
        {
          "word": "owner",
          "partOfSpeech": "noun",
          "meaning": "person who owns",
          "example": "The owner was responsible."
        },
        {
          "word": "pay",
          "partOfSpeech": "verb",
          "meaning": "to give money",
          "example": "He pays rent monthly."
        },
        {
          "word": "property",
          "partOfSpeech": "noun",
          "meaning": "land or buildings",
          "example": "The property is valuable."
        },
        {
          "word": "rent",
          "partOfSpeech": "noun/verb",
          "meaning": "payment for use; to lease",
          "example": "The rent is due."
        },
        {
          "word": "repair",
          "partOfSpeech": "verb/noun",
          "meaning": "to fix; fixing",
          "example": "The repair was quick."
        },
        {
          "word": "resourceful",
          "partOfSpeech": "adjective",
          "meaning": "good at solving problems",
          "example": "She is very resourceful."
        },
        {
          "word": "responsible",
          "partOfSpeech": "adjective",
          "meaning": "accountable",
          "example": "He is responsible."
        },
        {
          "word": "room",
          "partOfSpeech": "noun",
          "meaning": "space in a building",
          "example": "The room is clean."
        },
        {
          "word": "tenant",
          "partOfSpeech": "noun",
          "meaning": "person who rents",
          "example": "The tenant was happy."
        },
        {
          "word": "value",
          "partOfSpeech": "noun/verb",
          "meaning": "worth; to appreciate",
          "example": "The value increased."
        }
      ]
    },
    "18": {
      "title": "Unit 18 - The First Organ Transplant",
      "words": [
        {
          "word": "body",
          "partOfSpeech": "noun",
          "meaning": "physical structure",
          "example": "The body needs rest."
        },
        {
          "word": "doctor",
          "partOfSpeech": "noun",
          "meaning": "medical professional",
          "example": "The doctor was skilled."
        },
        {
          "word": "donor",
          "partOfSpeech": "noun",
          "meaning": "person who gives",
          "example": "The donor was generous."
        },
        {
          "word": "health",
          "partOfSpeech": "noun",
          "meaning": "physical condition",
          "example": "Health is important."
        },
        {
          "word": "heart",
          "partOfSpeech": "noun",
          "meaning": "organ that pumps blood",
          "example": "The heart beats regularly."
        },
        {
          "word": "hospital",
          "partOfSpeech": "noun",
          "meaning": "medical facility",
          "example": "The hospital is modern."
        },
        {
          "word": "life",
          "partOfSpeech": "noun",
          "meaning": "existence",
          "example": "Life is precious."
        },
        {
          "word": "medical",
          "partOfSpeech": "adjective",
          "meaning": "relating to medicine",
          "example": "Medical care is essential."
        },
        {
          "word": "medicine",
          "partOfSpeech": "noun",
          "meaning": "treatment for illness",
          "example": "The medicine helped."
        },
        {
          "word": "organ",
          "partOfSpeech": "noun",
          "meaning": "part of the body",
          "example": "The organ was healthy."
        },
        {
          "word": "patient",
          "partOfSpeech": "noun",
          "meaning": "person receiving treatment",
          "example": "The patient recovered."
        },
        {
          "word": "receive",
          "partOfSpeech": "verb",
          "meaning": "to get",
          "example": "He received the transplant."
        },
        {
          "word": "recovery",
          "partOfSpeech": "noun",
          "meaning": "return to health",
          "example": "The recovery was slow."
        },
        {
          "word": "surgery",
          "partOfSpeech": "noun",
          "meaning": "medical operation",
          "example": "The surgery was successful."
        },
        {
          "word": "survive",
          "partOfSpeech": "verb",
          "meaning": "to stay alive",
          "example": "He survived the operation."
        },
        {
          "word": "team",
          "partOfSpeech": "noun",
          "meaning": "group working together",
          "example": "The medical team was excellent."
        },
        {
          "word": "technology",
          "partOfSpeech": "noun",
          "meaning": "scientific knowledge",
          "example": "Medical technology advanced."
        },
        {
          "word": "transplant",
          "partOfSpeech": "noun/verb",
          "meaning": "organ transfer; to transfer",
          "example": "The transplant was successful."
        },
        {
          "word": "treatment",
          "partOfSpeech": "noun",
          "meaning": "medical care",
          "example": "The treatment was effective."
        },
        {
          "word": "wait",
          "partOfSpeech": "verb/noun",
          "meaning": "to stay; period of waiting",
          "example": "He had to wait for a donor."
        }
      ]
    },
    "19": {
      "title": "Unit 19 - The North Star",
      "words": [
        {
          "word": "astronomy",
          "partOfSpeech": "noun",
          "meaning": "study of stars",
          "example": "Astronomy is fascinating."
        },
        {
          "word": "bright",
          "partOfSpeech": "adjective",
          "meaning": "giving off light",
          "example": "The star was bright."
        },
        {
          "word": "constellation",
          "partOfSpeech": "noun",
          "meaning": "group of stars",
          "example": "The constellation was visible."
        },
        {
          "word": "direction",
          "partOfSpeech": "noun",
          "meaning": "way to go",
          "example": "The direction was north."
        },
        {
          "word": "distance",
          "partOfSpeech": "noun",
          "meaning": "space between things",
          "example": "The distance was great."
        },
        {
          "word": "earth",
          "partOfSpeech": "noun",
          "meaning": "our planet",
          "example": "The earth rotates."
        },
        {
          "word": "guide",
          "partOfSpeech": "noun/verb",
          "meaning": "person who helps; to lead",
          "example": "The star was a guide."
        },
        {
          "word": "light",
          "partOfSpeech": "noun/adjective",
          "meaning": "brightness; not heavy",
          "example": "The light was dim."
        },
        {
          "word": "night",
          "partOfSpeech": "noun",
          "meaning": "time of darkness",
          "example": "The night was clear."
        },
        {
          "word": "north",
          "partOfSpeech": "noun/adjective",
          "meaning": "direction toward pole",
          "example": "The north star guided them."
        },
        {
          "word": "planet",
          "partOfSpeech": "noun",
          "meaning": "celestial body",
          "example": "Earth is a planet."
        },
        {
          "word": "sky",
          "partOfSpeech": "noun",
          "meaning": "space above earth",
          "example": "The sky was clear."
        },
        {
          "word": "space",
          "partOfSpeech": "noun",
          "meaning": "area beyond earth",
          "example": "Space is vast."
        },
        {
          "word": "star",
          "partOfSpeech": "noun",
          "meaning": "bright object in sky",
          "example": "The star twinkled."
        },
        {
          "word": "system",
          "partOfSpeech": "noun",
          "meaning": "organized group",
          "example": "The solar system has planets."
        },
        {
          "word": "travel",
          "partOfSpeech": "verb/noun",
          "meaning": "to go; journey",
          "example": "They traveled by sea."
        },
        {
          "word": "universe",
          "partOfSpeech": "noun",
          "meaning": "all of space",
          "example": "The universe is infinite."
        },
        {
          "word": "visible",
          "partOfSpeech": "adjective",
          "meaning": "able to be seen",
          "example": "The star was visible."
        },
        {
          "word": "world",
          "partOfSpeech": "noun",
          "meaning": "the earth and everything on it",
          "example": "The world is beautiful."
        },
        {
          "word": "year",
          "partOfSpeech": "noun",
          "meaning": "period of 365 days",
          "example": "The year passed quickly."
        }
      ]
    },
    "20": {
      "title": "Unit 20 - Dressed to Excess",
      "words": [
        {
          "word": "appearance",
          "partOfSpeech": "noun",
          "meaning": "how someone looks",
          "example": "Her appearance was elegant."
        },
        {
          "word": "beautiful",
          "partOfSpeech": "adjective",
          "meaning": "pleasing to look at",
          "example": "She looked beautiful."
        },
        {
          "word": "clothing",
          "partOfSpeech": "noun",
          "meaning": "items worn on body",
          "example": "The clothing was expensive."
        },
        {
          "word": "dress",
          "partOfSpeech": "noun/verb",
          "meaning": "garment; to put on clothes",
          "example": "The dress was elegant."
        },
        {
          "word": "excess",
          "partOfSpeech": "noun/adjective",
          "meaning": "too much; extra",
          "example": "The excess was obvious."
        },
        {
          "word": "fashion",
          "partOfSpeech": "noun",
          "meaning": "popular style",
          "example": "Fashion changes quickly."
        },
        {
          "word": "look",
          "partOfSpeech": "verb/noun",
          "meaning": "to see; appearance",
          "example": "She looked stunning."
        },
        {
          "word": "material",
          "partOfSpeech": "noun",
          "meaning": "substance used to make things",
          "example": "The material was silk."
        },
        {
          "word": "money",
          "partOfSpeech": "noun",
          "meaning": "currency",
          "example": "She spent a lot of money."
        },
        {
          "word": "outfit",
          "partOfSpeech": "noun",
          "meaning": "set of clothes",
          "example": "The outfit was perfect."
        },
        {
          "word": "prefer",
          "partOfSpeech": "verb",
          "meaning": "to like better",
          "example": "She prefers simple clothes."
        },
        {
          "word": "price",
          "partOfSpeech": "noun",
          "meaning": "cost of something",
          "example": "The price was high."
        },
        {
          "word": "quality",
          "partOfSpeech": "noun",
          "meaning": "how good something is",
          "example": "The quality was excellent."
        },
        {
          "word": "simple",
          "partOfSpeech": "adjective",
          "meaning": "not complicated",
          "example": "The design was simple."
        },
        {
          "word": "style",
          "partOfSpeech": "noun",
          "meaning": "way of doing something",
          "example": "Her style was unique."
        },
        {
          "word": "taste",
          "partOfSpeech": "noun",
          "meaning": "preference or flavor",
          "example": "She has good taste."
        },
        {
          "word": "wear",
          "partOfSpeech": "verb",
          "meaning": "to have on body",
          "example": "She wore a beautiful dress."
        },
        {
          "word": "wealth",
          "partOfSpeech": "noun",
          "meaning": "large amount of money",
          "example": "Her wealth was obvious."
        },
        {
          "word": "wonderful",
          "partOfSpeech": "adjective",
          "meaning": "very good",
          "example": "The dress was wonderful."
        },
        {
          "word": "worth",
          "partOfSpeech": "noun/adjective",
          "meaning": "value; deserving",
          "example": "The dress was worth the price."
        }
      ]
    },
    "21": {
      "title": "Unit 21 - Amazing Komodo Dragons",
      "words": [
        {
          "word": "amazing",
          "partOfSpeech": "adjective",
          "meaning": "very surprising",
          "example": "The dragon was amazing."
        },
        {
          "word": "animal",
          "partOfSpeech": "noun",
          "meaning": "living creature",
          "example": "The animal was large."
        },
        {
          "word": "dangerous",
          "partOfSpeech": "adjective",
          "meaning": "likely to cause harm",
          "example": "The dragon was dangerous."
        },
        {
          "word": "dragon",
          "partOfSpeech": "noun",
          "meaning": "large lizard",
          "example": "The dragon was huge."
        },
        {
          "word": "hunt",
          "partOfSpeech": "verb/noun",
          "meaning": "to search for food; searching",
          "example": "The dragon hunts prey."
        },
        {
          "word": "island",
          "partOfSpeech": "noun",
          "meaning": "land surrounded by water",
          "example": "The island was remote."
        },
        {
          "word": "large",
          "partOfSpeech": "adjective",
          "meaning": "big in size",
          "example": "The dragon was large."
        },
        {
          "word": "nature",
          "partOfSpeech": "noun",
          "meaning": "natural world",
          "example": "Nature is beautiful."
        },
        {
          "word": "prey",
          "partOfSpeech": "noun",
          "meaning": "animal hunted for food",
          "example": "The prey was fast."
        },
        {
          "word": "reptile",
          "partOfSpeech": "noun",
          "meaning": "cold-blooded animal",
          "example": "The reptile was ancient."
        },
        {
          "word": "size",
          "partOfSpeech": "noun",
          "meaning": "how big something is",
          "example": "The size was impressive."
        },
        {
          "word": "species",
          "partOfSpeech": "noun",
          "meaning": "type of animal",
          "example": "The species was rare."
        },
        {
          "word": "strong",
          "partOfSpeech": "adjective",
          "meaning": "having power",
          "example": "The dragon was strong."
        },
        {
          "word": "survive",
          "partOfSpeech": "verb",
          "meaning": "to stay alive",
          "example": "The dragon survived."
        },
        {
          "word": "territory",
          "partOfSpeech": "noun",
          "meaning": "area controlled by animal",
          "example": "The territory was large."
        },
        {
          "word": "wild",
          "partOfSpeech": "adjective",
          "meaning": "not tamed",
          "example": "The dragon was wild."
        },
        {
          "word": "world",
          "partOfSpeech": "noun",
          "meaning": "the earth and everything on it",
          "example": "The world is diverse."
        },
        {
          "word": "zoo",
          "partOfSpeech": "noun",
          "meaning": "place with animals",
          "example": "The zoo was interesting."
        },
        {
          "word": "creature",
          "partOfSpeech": "noun",
          "meaning": "living being",
          "example": "The creature was fascinating."
        },
        {
          "word": "unique",
          "partOfSpeech": "adjective",
          "meaning": "one of a kind",
          "example": "The dragon was unique."
        }
      ]
    },
    "22": {
      "title": "Unit 22 - Greek Magical Papyri",
      "words": [
        {
          "word": "ancient",
          "partOfSpeech": "adjective",
          "meaning": "very old",
          "example": "The papyri were ancient."
        },
        {
          "word": "book",
          "partOfSpeech": "noun",
          "meaning": "written work",
          "example": "The book was old."
        },
        {
          "word": "culture",
          "partOfSpeech": "noun",
          "meaning": "way of life",
          "example": "The culture was rich."
        },
        {
          "word": "document",
          "partOfSpeech": "noun",
          "meaning": "written record",
          "example": "The document was valuable."
        },
        {
          "word": "greek",
          "partOfSpeech": "adjective/noun",
          "meaning": "from Greece; person from Greece",
          "example": "The Greek culture was ancient."
        },
        {
          "word": "history",
          "partOfSpeech": "noun",
          "meaning": "past events",
          "example": "The history was fascinating."
        },
        {
          "word": "knowledge",
          "partOfSpeech": "noun",
          "meaning": "information learned",
          "example": "The knowledge was valuable."
        },
        {
          "word": "magical",
          "partOfSpeech": "adjective",
          "meaning": "relating to magic",
          "example": "The papyri were magical."
        },
        {
          "word": "mystery",
          "partOfSpeech": "noun",
          "meaning": "something unexplained",
          "example": "The mystery was deep."
        },
        {
          "word": "papyri",
          "partOfSpeech": "noun",
          "meaning": "ancient paper",
          "example": "The papyri were fragile."
        },
        {
          "word": "preserve",
          "partOfSpeech": "verb",
          "meaning": "to keep safe",
          "example": "They preserved the papyri."
        },
        {
          "word": "read",
          "partOfSpeech": "verb",
          "meaning": "to look at words",
          "example": "He read the papyri."
        },
        {
          "word": "research",
          "partOfSpeech": "noun/verb",
          "meaning": "study; to study",
          "example": "The research was thorough."
        },
        {
          "word": "scholar",
          "partOfSpeech": "noun",
          "meaning": "educated person",
          "example": "The scholar studied the papyri."
        },
        {
          "word": "science",
          "partOfSpeech": "noun",
          "meaning": "systematic study",
          "example": "The science was advanced."
        },
        {
          "word": "study",
          "partOfSpeech": "noun/verb",
          "meaning": "learning; to learn",
          "example": "The study was important."
        },
        {
          "word": "text",
          "partOfSpeech": "noun",
          "meaning": "written words",
          "example": "The text was difficult."
        },
        {
          "word": "time",
          "partOfSpeech": "noun",
          "meaning": "period or moment",
          "example": "The time was long ago."
        },
        {
          "word": "understand",
          "partOfSpeech": "verb",
          "meaning": "to comprehend",
          "example": "He understood the text."
        },
        {
          "word": "write",
          "partOfSpeech": "verb",
          "meaning": "to put words on paper",
          "example": "They wrote the papyri."
        }
      ]
    },
    "23": {
      "title": "Unit 23 - Dangerous Bites",
      "words": [
        {
          "word": "bite",
          "partOfSpeech": "noun/verb",
          "meaning": "act of biting; to use teeth",
          "example": "The bite was painful."
        },
        {
          "word": "dangerous",
          "partOfSpeech": "adjective",
          "meaning": "likely to cause harm",
          "example": "The bite was dangerous."
        },
        {
          "word": "deadly",
          "partOfSpeech": "adjective",
          "meaning": "causing death",
          "example": "The venom was deadly."
        },
        {
          "word": "doctor",
          "partOfSpeech": "noun",
          "meaning": "medical professional",
          "example": "The doctor treated the bite."
        },
        {
          "word": "health",
          "partOfSpeech": "noun",
          "meaning": "physical condition",
          "example": "Health is important."
        },
        {
          "word": "hospital",
          "partOfSpeech": "noun",
          "meaning": "medical facility",
          "example": "The hospital was nearby."
        },
        {
          "word": "injury",
          "partOfSpeech": "noun",
          "meaning": "physical harm",
          "example": "The injury was serious."
        },
        {
          "word": "medicine",
          "partOfSpeech": "noun",
          "meaning": "treatment for illness",
          "example": "The medicine helped."
        },
        {
          "word": "pain",
          "partOfSpeech": "noun",
          "meaning": "unpleasant feeling",
          "example": "The pain was intense."
        },
        {
          "word": "poison",
          "partOfSpeech": "noun",
          "meaning": "harmful substance",
          "example": "The poison was deadly."
        },
        {
          "word": "safety",
          "partOfSpeech": "noun",
          "meaning": "protection from harm",
          "example": "Safety is important."
        },
        {
          "word": "snake",
          "partOfSpeech": "noun",
          "meaning": "reptile without legs",
          "example": "The snake was venomous."
        },
        {
          "word": "spider",
          "partOfSpeech": "noun",
          "meaning": "eight-legged creature",
          "example": "The spider was dangerous."
        },
        {
          "word": "survive",
          "partOfSpeech": "verb",
          "meaning": "to stay alive",
          "example": "He survived the bite."
        },
        {
          "word": "treatment",
          "partOfSpeech": "noun",
          "meaning": "medical care",
          "example": "The treatment was quick."
        },
        {
          "word": "venom",
          "partOfSpeech": "noun",
          "meaning": "poison from animal",
          "example": "The venom was deadly."
        },
        {
          "word": "victim",
          "partOfSpeech": "noun",
          "meaning": "person harmed",
          "example": "The victim was treated."
        },
        {
          "word": "warning",
          "partOfSpeech": "noun",
          "meaning": "notice of danger",
          "example": "The warning was clear."
        },
        {
          "word": "wound",
          "partOfSpeech": "noun/verb",
          "meaning": "injury; to injure",
          "example": "The wound was deep."
        },
        {
          "word": "serious",
          "partOfSpeech": "adjective",
          "meaning": "important or severe",
          "example": "The bite was serious."
        }
      ]
    },
    "24": {
      "title": "Unit 24 - The Lydian King",
      "words": [
        {
          "word": "ancient",
          "partOfSpeech": "adjective",
          "meaning": "very old",
          "example": "The kingdom was ancient."
        },
        {
          "word": "army",
          "partOfSpeech": "noun",
          "meaning": "military force",
          "example": "The army was strong."
        },
        {
          "word": "battle",
          "partOfSpeech": "noun/verb",
          "meaning": "fight; to fight",
          "example": "The battle was fierce."
        },
        {
          "word": "brave",
          "partOfSpeech": "adjective",
          "meaning": "courageous",
          "example": "The king was brave."
        },
        {
          "word": "conquer",
          "partOfSpeech": "verb",
          "meaning": "to defeat and control",
          "example": "He conquered the land."
        },
        {
          "word": "empire",
          "partOfSpeech": "noun",
          "meaning": "large territory ruled by one",
          "example": "The empire was vast."
        },
        {
          "word": "enemy",
          "partOfSpeech": "noun",
          "meaning": "opponent in war",
          "example": "The enemy was defeated."
        },
        {
          "word": "fight",
          "partOfSpeech": "verb/noun",
          "meaning": "to battle; conflict",
          "example": "They fought bravely."
        },
        {
          "word": "king",
          "partOfSpeech": "noun",
          "meaning": "male ruler",
          "example": "The king was powerful."
        },
        {
          "word": "kingdom",
          "partOfSpeech": "noun",
          "meaning": "land ruled by king",
          "example": "The kingdom was large."
        },
        {
          "word": "lead",
          "partOfSpeech": "verb/noun",
          "meaning": "to guide; metal",
          "example": "He led the army."
        },
        {
          "word": "military",
          "partOfSpeech": "adjective/noun",
          "meaning": "relating to armed forces",
          "example": "Military power was important."
        },
        {
          "word": "power",
          "partOfSpeech": "noun",
          "meaning": "ability to control",
          "example": "The power was great."
        },
        {
          "word": "rule",
          "partOfSpeech": "noun/verb",
          "meaning": "law; to govern",
          "example": "He ruled wisely."
        },
        {
          "word": "soldier",
          "partOfSpeech": "noun",
          "meaning": "member of army",
          "example": "The soldier was loyal."
        },
        {
          "word": "strength",
          "partOfSpeech": "noun",
          "meaning": "power or force",
          "example": "The strength was impressive."
        },
        {
          "word": "victory",
          "partOfSpeech": "noun",
          "meaning": "success in battle",
          "example": "The victory was complete."
        },
        {
          "word": "war",
          "partOfSpeech": "noun",
          "meaning": "armed conflict",
          "example": "The war was long."
        },
        {
          "word": "wealth",
          "partOfSpeech": "noun",
          "meaning": "large amount of money",
          "example": "The wealth was great."
        },
        {
          "word": "wise",
          "partOfSpeech": "adjective",
          "meaning": "having good judgment",
          "example": "The king was wise."
        }
      ]
    },
    "25": {
      "title": "Unit 25 - The End of Smallpox",
      "words": [
        {
          "word": "cure",
          "partOfSpeech": "noun/verb",
          "meaning": "treatment that heals; to heal",
          "example": "The cure was found."
        },
        {
          "word": "disease",
          "partOfSpeech": "noun",
          "meaning": "illness",
          "example": "The disease was deadly."
        },
        {
          "word": "doctor",
          "partOfSpeech": "noun",
          "meaning": "medical professional",
          "example": "The doctor helped."
        },
        {
          "word": "end",
          "partOfSpeech": "noun/verb",
          "meaning": "finish; to finish",
          "example": "The end was near."
        },
        {
          "word": "health",
          "partOfSpeech": "noun",
          "meaning": "physical condition",
          "example": "Health improved."
        },
        {
          "word": "hospital",
          "partOfSpeech": "noun",
          "meaning": "medical facility",
          "example": "The hospital treated patients."
        },
        {
          "word": "medicine",
          "partOfSpeech": "noun",
          "meaning": "treatment for illness",
          "example": "The medicine worked."
        },
        {
          "word": "patient",
          "partOfSpeech": "noun",
          "meaning": "person receiving treatment",
          "example": "The patient recovered."
        },
        {
          "word": "prevent",
          "partOfSpeech": "verb",
          "meaning": "to stop from happening",
          "example": "They prevented the disease."
        },
        {
          "word": "research",
          "partOfSpeech": "noun/verb",
          "meaning": "study; to study",
          "example": "The research was successful."
        },
        {
          "word": "science",
          "partOfSpeech": "noun",
          "meaning": "systematic study",
          "example": "Science found the cure."
        },
        {
          "word": "smallpox",
          "partOfSpeech": "noun",
          "meaning": "deadly disease",
          "example": "Smallpox was eliminated."
        },
        {
          "word": "suffer",
          "partOfSpeech": "verb",
          "meaning": "to experience pain",
          "example": "Many suffered from the disease."
        },
        {
          "word": "survive",
          "partOfSpeech": "verb",
          "meaning": "to stay alive",
          "example": "Some survived the disease."
        },
        {
          "word": "treatment",
          "partOfSpeech": "noun",
          "meaning": "medical care",
          "example": "The treatment was effective."
        },
        {
          "word": "vaccine",
          "partOfSpeech": "noun",
          "meaning": "medicine to prevent disease",
          "example": "The vaccine worked."
        },
        {
          "word": "victim",
          "partOfSpeech": "noun",
          "meaning": "person harmed",
          "example": "The victim was treated."
        },
        {
          "word": "world",
          "partOfSpeech": "noun",
          "meaning": "the earth and everything on it",
          "example": "The world was saved."
        },
        {
          "word": "success",
          "partOfSpeech": "noun",
          "meaning": "achievement of goals",
          "example": "The success was great."
        },
        {
          "word": "hope",
          "partOfSpeech": "noun/verb",
          "meaning": "feeling of expectation; to want",
          "example": "There was hope for a cure."
        }
      ]
    },
    "26": {
      "title": "Unit 26 - Epidemic in Zimbabwe",
      "words": [
        {
          "word": "africa",
          "partOfSpeech": "noun",
          "meaning": "continent",
          "example": "Africa is diverse."
        },
        {
          "word": "country",
          "partOfSpeech": "noun",
          "meaning": "nation",
          "example": "The country was affected."
        },
        {
          "word": "crisis",
          "partOfSpeech": "noun",
          "meaning": "serious problem",
          "example": "The crisis was severe."
        },
        {
          "word": "disease",
          "partOfSpeech": "noun",
          "meaning": "illness",
          "example": "The disease spread quickly."
        },
        {
          "word": "epidemic",
          "partOfSpeech": "noun",
          "meaning": "widespread disease",
          "example": "The epidemic was serious."
        },
        {
          "word": "government",
          "partOfSpeech": "noun",
          "meaning": "group that rules",
          "example": "The government responded."
        },
        {
          "word": "health",
          "partOfSpeech": "noun",
          "meaning": "physical condition",
          "example": "Health was threatened."
        },
        {
          "word": "help",
          "partOfSpeech": "verb/noun",
          "meaning": "to assist; assistance",
          "example": "Help was needed."
        },
        {
          "word": "international",
          "partOfSpeech": "adjective",
          "meaning": "between countries",
          "example": "International aid arrived."
        },
        {
          "word": "medical",
          "partOfSpeech": "adjective",
          "meaning": "relating to medicine",
          "example": "Medical care was provided."
        },
        {
          "word": "people",
          "partOfSpeech": "noun",
          "meaning": "human beings",
          "example": "People were affected."
        },
        {
          "word": "prevent",
          "partOfSpeech": "verb",
          "meaning": "to stop from happening",
          "example": "They prevented spread."
        },
        {
          "word": "problem",
          "partOfSpeech": "noun",
          "meaning": "difficulty",
          "example": "The problem was serious."
        },
        {
          "word": "public",
          "partOfSpeech": "noun/adjective",
          "meaning": "people; open to everyone",
          "example": "Public health was important."
        },
        {
          "word": "response",
          "partOfSpeech": "noun",
          "meaning": "reaction",
          "example": "The response was quick."
        },
        {
          "word": "spread",
          "partOfSpeech": "verb/noun",
          "meaning": "to extend; extension",
          "example": "The disease spread rapidly."
        },
        {
          "word": "support",
          "partOfSpeech": "noun/verb",
          "meaning": "help; to help",
          "example": "Support was provided."
        },
        {
          "word": "treatment",
          "partOfSpeech": "noun",
          "meaning": "medical care",
          "example": "Treatment was available."
        },
        {
          "word": "victim",
          "partOfSpeech": "noun",
          "meaning": "person harmed",
          "example": "Victims were treated."
        },
        {
          "word": "zimbabwe",
          "partOfSpeech": "noun",
          "meaning": "country in Africa",
          "example": "Zimbabwe was affected."
        }
      ]
    },
    "27": {
      "title": "Unit 27 - Seizures Then and Now",
      "words": [
        {
          "word": "attack",
          "partOfSpeech": "noun/verb",
          "meaning": "sudden illness; to assault",
          "example": "The attack was sudden."
        },
        {
          "word": "brain",
          "partOfSpeech": "noun",
          "meaning": "organ in head",
          "example": "The brain controls the body."
        },
        {
          "word": "condition",
          "partOfSpeech": "noun",
          "meaning": "medical state",
          "example": "The condition was serious."
        },
        {
          "word": "control",
          "partOfSpeech": "noun/verb",
          "meaning": "power over; to manage",
          "example": "He lost control."
        },
        {
          "word": "doctor",
          "partOfSpeech": "noun",
          "meaning": "medical professional",
          "example": "The doctor helped."
        },
        {
          "word": "epilepsy",
          "partOfSpeech": "noun",
          "meaning": "brain disorder",
          "example": "Epilepsy causes seizures."
        },
        {
          "word": "health",
          "partOfSpeech": "noun",
          "meaning": "physical condition",
          "example": "Health is important."
        },
        {
          "word": "medical",
          "partOfSpeech": "adjective",
          "meaning": "relating to medicine",
          "example": "Medical treatment helped."
        },
        {
          "word": "medicine",
          "partOfSpeech": "noun",
          "meaning": "treatment for illness",
          "example": "The medicine worked."
        },
        {
          "word": "modern",
          "partOfSpeech": "adjective",
          "meaning": "current or recent",
          "example": "Modern medicine is advanced."
        },
        {
          "word": "nervous",
          "partOfSpeech": "adjective",
          "meaning": "relating to nerves",
          "example": "The nervous system was affected."
        },
        {
          "word": "patient",
          "partOfSpeech": "noun",
          "meaning": "person receiving treatment",
          "example": "The patient improved."
        },
        {
          "word": "seizure",
          "partOfSpeech": "noun",
          "meaning": "sudden attack",
          "example": "The seizure was frightening."
        },
        {
          "word": "symptom",
          "partOfSpeech": "noun",
          "meaning": "sign of illness",
          "example": "The symptom was clear."
        },
        {
          "word": "system",
          "partOfSpeech": "noun",
          "meaning": "organized group",
          "example": "The nervous system was affected."
        },
        {
          "word": "technology",
          "partOfSpeech": "noun",
          "meaning": "scientific knowledge",
          "example": "Technology improved treatment."
        },
        {
          "word": "treatment",
          "partOfSpeech": "noun",
          "meaning": "medical care",
          "example": "The treatment was effective."
        },
        {
          "word": "understand",
          "partOfSpeech": "verb",
          "meaning": "to comprehend",
          "example": "They understood the condition."
        },
        {
          "word": "victim",
          "partOfSpeech": "noun",
          "meaning": "person harmed",
          "example": "The victim was treated."
        },
        {
          "word": "world",
          "partOfSpeech": "noun",
          "meaning": "the earth and everything on it",
          "example": "The world has changed."
        }
      ]
    },
    "28": {
      "title": "Unit 28 - The Ice House",
      "words": [
        {
          "word": "build",
          "partOfSpeech": "verb",
          "meaning": "to construct",
          "example": "They built the house."
        },
        {
          "word": "business",
          "partOfSpeech": "noun",
          "meaning": "commercial activity",
          "example": "The business was successful."
        },
        {
          "word": "cold",
          "partOfSpeech": "adjective",
          "meaning": "low temperature",
          "example": "The ice was cold."
        },
        {
          "word": "company",
          "partOfSpeech": "noun",
          "meaning": "organization for business",
          "example": "The company grew."
        },
        {
          "word": "customer",
          "partOfSpeech": "noun",
          "meaning": "person who buys",
          "example": "The customer was happy."
        },
        {
          "word": "freeze",
          "partOfSpeech": "verb",
          "meaning": "to turn to ice",
          "example": "Water freezes at zero."
        },
        {
          "word": "house",
          "partOfSpeech": "noun",
          "meaning": "building for living",
          "example": "The house was large."
        },
        {
          "word": "ice",
          "partOfSpeech": "noun",
          "meaning": "frozen water",
          "example": "The ice was clear."
        },
        {
          "word": "industry",
          "partOfSpeech": "noun",
          "meaning": "business sector",
          "example": "The industry developed."
        },
        {
          "word": "invent",
          "partOfSpeech": "verb",
          "meaning": "to create something new",
          "example": "He invented the process."
        },
        {
          "word": "machine",
          "partOfSpeech": "noun",
          "meaning": "mechanical device",
          "example": "The machine worked well."
        },
        {
          "word": "money",
          "partOfSpeech": "noun",
          "meaning": "currency",
          "example": "Money was made."
        },
        {
          "word": "product",
          "partOfSpeech": "noun",
          "meaning": "item made for sale",
          "example": "The product was popular."
        },
        {
          "word": "sell",
          "partOfSpeech": "verb",
          "meaning": "to exchange for money",
          "example": "They sold ice."
        },
        {
          "word": "service",
          "partOfSpeech": "noun",
          "meaning": "work done for others",
          "example": "The service was good."
        },
        {
          "word": "store",
          "partOfSpeech": "verb/noun",
          "meaning": "to keep; a shop",
          "example": "They stored the ice."
        },
        {
          "word": "technology",
          "partOfSpeech": "noun",
          "meaning": "scientific knowledge",
          "example": "Technology improved."
        },
        {
          "word": "temperature",
          "partOfSpeech": "noun",
          "meaning": "degree of heat",
          "example": "The temperature was low."
        },
        {
          "word": "work",
          "partOfSpeech": "noun/verb",
          "meaning": "job; to do tasks",
          "example": "The work was hard."
        },
        {
          "word": "world",
          "partOfSpeech": "noun",
          "meaning": "the earth and everything on it",
          "example": "The world changed."
        }
      ]
    },
    "29": {
      "title": "Unit 29 - Preparing for Future",
      "words": [
        {
          "word": "change",
          "partOfSpeech": "noun/verb",
          "meaning": "difference; to make different",
          "example": "Change is constant."
        },
        {
          "word": "develop",
          "partOfSpeech": "verb",
          "meaning": "to grow or improve",
          "example": "They developed skills."
        },
        {
          "word": "education",
          "partOfSpeech": "noun",
          "meaning": "process of learning",
          "example": "Education is important."
        },
        {
          "word": "future",
          "partOfSpeech": "noun",
          "meaning": "time to come",
          "example": "The future is uncertain."
        },
        {
          "word": "goal",
          "partOfSpeech": "noun",
          "meaning": "aim or target",
          "example": "The goal was clear."
        },
        {
          "word": "improve",
          "partOfSpeech": "verb",
          "meaning": "to make better",
          "example": "They improved skills."
        },
        {
          "word": "learn",
          "partOfSpeech": "verb",
          "meaning": "to gain knowledge",
          "example": "They learned quickly."
        },
        {
          "word": "life",
          "partOfSpeech": "noun",
          "meaning": "existence",
          "example": "Life is precious."
        },
        {
          "word": "opportunity",
          "partOfSpeech": "noun",
          "meaning": "chance for success",
          "example": "The opportunity was great."
        },
        {
          "word": "plan",
          "partOfSpeech": "noun/verb",
          "meaning": "strategy; to prepare",
          "example": "The plan was good."
        },
        {
          "word": "prepare",
          "partOfSpeech": "verb",
          "meaning": "to get ready",
          "example": "They prepared well."
        },
        {
          "word": "progress",
          "partOfSpeech": "noun",
          "meaning": "advancement",
          "example": "Progress was made."
        },
        {
          "word": "skill",
          "partOfSpeech": "noun",
          "meaning": "ability to do something well",
          "example": "The skill was useful."
        },
        {
          "word": "study",
          "partOfSpeech": "noun/verb",
          "meaning": "learning; to learn",
          "example": "The study was important."
        },
        {
          "word": "success",
          "partOfSpeech": "noun",
          "meaning": "achievement of goals",
          "example": "Success requires effort."
        },
        {
          "word": "technology",
          "partOfSpeech": "noun",
          "meaning": "scientific knowledge",
          "example": "Technology advances quickly."
        },
        {
          "word": "time",
          "partOfSpeech": "noun",
          "meaning": "period or moment",
          "example": "Time passes quickly."
        },
        {
          "word": "training",
          "partOfSpeech": "noun",
          "meaning": "instruction",
          "example": "The training was thorough."
        },
        {
          "word": "work",
          "partOfSpeech": "noun/verb",
          "meaning": "job; to do tasks",
          "example": "The work was challenging."
        },
        {
          "word": "world",
          "partOfSpeech": "noun",
          "meaning": "the earth and everything on it",
          "example": "The world is changing."
        }
      ]
    },
    "30": {
      "title": "Unit 30 - Hundred Plays",
      "words": [
        {
          "word": "act",
          "partOfSpeech": "noun/verb",
          "meaning": "part of play; to perform",
          "example": "The act was dramatic."
        },
        {
          "word": "actor",
          "partOfSpeech": "noun",
          "meaning": "person who performs",
          "example": "The actor was talented."
        },
        {
          "word": "art",
          "partOfSpeech": "noun",
          "meaning": "creative expression",
          "example": "Art is beautiful."
        },
        {
          "word": "audience",
          "partOfSpeech": "noun",
          "meaning": "people watching",
          "example": "The audience clapped."
        },
        {
          "word": "character",
          "partOfSpeech": "noun",
          "meaning": "person in story",
          "example": "The character was interesting."
        },
        {
          "word": "drama",
          "partOfSpeech": "noun",
          "meaning": "serious play",
          "example": "The drama was intense."
        },
        {
          "word": "entertain",
          "partOfSpeech": "verb",
          "meaning": "to amuse",
          "example": "They entertained the crowd."
        },
        {
          "word": "hundred",
          "partOfSpeech": "noun",
          "meaning": "number 100",
          "example": "A hundred plays were written."
        },
        {
          "word": "perform",
          "partOfSpeech": "verb",
          "meaning": "to present to audience",
          "example": "They performed well."
        },
        {
          "word": "performance",
          "partOfSpeech": "noun",
          "meaning": "presentation",
          "example": "The performance was excellent."
        },
        {
          "word": "play",
          "partOfSpeech": "noun/verb",
          "meaning": "dramatic work; to have fun",
          "example": "The play was successful."
        },
        {
          "word": "scene",
          "partOfSpeech": "noun",
          "meaning": "part of play",
          "example": "The scene was dramatic."
        },
        {
          "word": "stage",
          "partOfSpeech": "noun",
          "meaning": "platform for performance",
          "example": "The stage was large."
        },
        {
          "word": "story",
          "partOfSpeech": "noun",
          "meaning": "narrative",
          "example": "The story was engaging."
        },
        {
          "word": "theater",
          "partOfSpeech": "noun",
          "meaning": "place for performances",
          "example": "The theater was full."
        },
        {
          "word": "write",
          "partOfSpeech": "verb",
          "meaning": "to put words on paper",
          "example": "He wrote the play."
        },
        {
          "word": "writer",
          "partOfSpeech": "noun",
          "meaning": "person who writes",
          "example": "The writer was famous."
        },
        {
          "word": "show",
          "partOfSpeech": "noun/verb",
          "meaning": "performance; to display",
          "example": "The show was great."
        },
        {
          "word": "success",
          "partOfSpeech": "noun",
          "meaning": "achievement of goals",
          "example": "The success was great."
        },
        {
          "word": "world",
          "partOfSpeech": "noun",
          "meaning": "the earth and everything on it",
          "example": "The world of theater."
        }
      ]
    }
  }
};





// Book 5 data with real unit titles and complete word lists
const book5Data = {
  "title": "Book 5 - Upper-Intermediate Level",
  "units": {
    "1": {
      "title": "Unit 1 – The Big Match",
      "words": [
        {
          "word": "allot",
          "partOfSpeech": "verb",
          "meaning": "to assign or give a portion",
          "example": "The teacher allotted five minutes for each presentation."
        },
        {
          "word": "appall",
          "partOfSpeech": "verb",
          "meaning": "to shock or horrify",
          "example": "The crime scene appalled the investigators."
        },
        {
          "word": "cache",
          "partOfSpeech": "noun",
          "meaning": "a hidden storage of items",
          "example": "The pirates discovered a cache of gold coins."
        },
        {
          "word": "convenience",
          "partOfSpeech": "noun",
          "meaning": "ease or usefulness",
          "example": "Microwave ovens provide great convenience in cooking."
        },
        {
          "word": "dearth",
          "partOfSpeech": "noun",
          "meaning": "a lack of something",
          "example": "The village faced a dearth of clean drinking water."
        },
        {
          "word": "deliberate",
          "partOfSpeech": "adjective",
          "meaning": "intentional; planned",
          "example": "His insult was a deliberate attempt to start a fight."
        },
        {
          "word": "dire",
          "partOfSpeech": "adjective",
          "meaning": "extremely serious or urgent",
          "example": "The refugees were in dire need of food."
        },
        {
          "word": "elapse",
          "partOfSpeech": "verb",
          "meaning": "(of time) to pass",
          "example": "Hours elapsed before help arrived."
        },
        {
          "word": "empathy",
          "partOfSpeech": "noun",
          "meaning": "the ability to share feelings",
          "example": "Her empathy made her a good counselor."
        },
        {
          "word": "fanciful",
          "partOfSpeech": "adjective",
          "meaning": "imaginative but unrealistic",
          "example": "He had fanciful dreams of living on the moon."
        },
        {
          "word": "gripe",
          "partOfSpeech": "verb",
          "meaning": "to complain",
          "example": "The students griped about the heavy homework."
        },
        {
          "word": "grueling",
          "partOfSpeech": "adjective",
          "meaning": "extremely tiring",
          "example": "The marathon was grueling but rewarding."
        },
        {
          "word": "mundane",
          "partOfSpeech": "adjective",
          "meaning": "ordinary, dull",
          "example": "Filing papers is a mundane task."
        },
        {
          "word": "opt",
          "partOfSpeech": "verb",
          "meaning": "to choose",
          "example": "She opted to walk instead of taking the bus."
        },
        {
          "word": "outrage",
          "partOfSpeech": "noun",
          "meaning": "strong anger",
          "example": "The unfair decision caused public outrage."
        },
        {
          "word": "paltry",
          "partOfSpeech": "adjective",
          "meaning": "very small, insignificant",
          "example": "They received a paltry reward for their efforts."
        },
        {
          "word": "rectify",
          "partOfSpeech": "verb",
          "meaning": "to fix or correct",
          "example": "He rectified the error in the report."
        },
        {
          "word": "resourceful",
          "partOfSpeech": "adjective",
          "meaning": "skilled at problem-solving",
          "example": "The resourceful girl fixed the car with basic tools."
        },
        {
          "word": "sustenance",
          "partOfSpeech": "noun",
          "meaning": "nourishment or food",
          "example": "They carried bread and water for sustenance."
        },
        {
          "word": "tedious",
          "partOfSpeech": "adjective",
          "meaning": "boring, repetitive",
          "example": "Copying the data was a tedious task."
        }
      ]
    },
    "2": {
      "title": "Unit 2 – The Drought",
      "words": [
        {
          "word": "abbey",
          "partOfSpeech": "noun",
          "meaning": "a building for monks or nuns",
          "example": "The old abbey stood on a hilltop."
        },
        {
          "word": "abundant",
          "partOfSpeech": "adjective",
          "meaning": "plentiful",
          "example": "The garden produced abundant vegetables."
        },
        {
          "word": "adjoin",
          "partOfSpeech": "verb",
          "meaning": "to be next to something",
          "example": "Their land adjoins the river."
        },
        {
          "word": "ample",
          "partOfSpeech": "adjective",
          "meaning": "more than enough",
          "example": "The room provides ample space for meetings."
        },
        {
          "word": "arid",
          "partOfSpeech": "adjective",
          "meaning": "extremely dry",
          "example": "Camels survive in arid deserts."
        },
        {
          "word": "cathedral",
          "partOfSpeech": "noun",
          "meaning": "a large important church",
          "example": "Tourists visited the famous cathedral in Rome."
        },
        {
          "word": "deprive",
          "partOfSpeech": "verb",
          "meaning": "to take away from",
          "example": "The blackout deprived them of light."
        },
        {
          "word": "drought",
          "partOfSpeech": "noun",
          "meaning": "long period without rain",
          "example": "The crops died during the drought."
        },
        {
          "word": "eligible",
          "partOfSpeech": "adjective",
          "meaning": "qualified, allowed",
          "example": "Only adults are eligible to vote."
        },
        {
          "word": "fast",
          "partOfSpeech": "verb/noun",
          "meaning": "to go without food; a period of no eating",
          "example": "Muslims fast during Ramadan."
        },
        {
          "word": "grumble",
          "partOfSpeech": "verb",
          "meaning": "to complain quietly",
          "example": "The workers grumbled about low wages."
        },
        {
          "word": "inland",
          "partOfSpeech": "adj/adv",
          "meaning": "away from the coast",
          "example": "They traveled inland from the port."
        },
        {
          "word": "moisture",
          "partOfSpeech": "noun",
          "meaning": "small amount of water",
          "example": "The soil had enough moisture for growth."
        },
        {
          "word": "nonetheless",
          "partOfSpeech": "adverb",
          "meaning": "in spite of that",
          "example": "It rained, but they played nonetheless."
        },
        {
          "word": "oath",
          "partOfSpeech": "noun",
          "meaning": "a serious promise",
          "example": "He took an oath of loyalty."
        },
        {
          "word": "prairie",
          "partOfSpeech": "noun",
          "meaning": "a wide, flat grassland",
          "example": "Buffalo roamed across the prairie."
        },
        {
          "word": "ragged",
          "partOfSpeech": "adjective",
          "meaning": "torn, worn out",
          "example": "He wore ragged old clothes."
        },
        {
          "word": "rugged",
          "partOfSpeech": "adjective",
          "meaning": "rough, uneven",
          "example": "The hikers climbed the rugged terrain."
        },
        {
          "word": "scarce",
          "partOfSpeech": "adjective",
          "meaning": "rare, hard to find",
          "example": "Food was scarce in winter."
        },
        {
          "word": "speculate",
          "partOfSpeech": "verb",
          "meaning": "to guess or wonder",
          "example": "Scientists speculate about life on Mars."
        }
      ]
    },
    "3": {
      "title": "Unit 3 – A Great Scientist",
      "words": [
        {
          "word": "analytic",
          "partOfSpeech": "adjective",
          "meaning": "relating to logical analysis",
          "example": "He used analytic skills to solve the puzzle."
        },
        {
          "word": "assert",
          "partOfSpeech": "verb",
          "meaning": "to state firmly",
          "example": "She asserted her right to speak."
        },
        {
          "word": "bachelor",
          "partOfSpeech": "noun",
          "meaning": "an unmarried man or undergraduate degree holder",
          "example": "He remained a bachelor all his life."
        },
        {
          "word": "calculus",
          "partOfSpeech": "noun",
          "meaning": "a branch of mathematics",
          "example": "She studied calculus at university."
        },
        {
          "word": "celestial",
          "partOfSpeech": "adjective",
          "meaning": "relating to the sky or outer space",
          "example": "Astronomers study celestial bodies."
        },
        {
          "word": "cognitive",
          "partOfSpeech": "adjective",
          "meaning": "related to thinking",
          "example": "Sleep affects cognitive performance."
        },
        {
          "word": "collision",
          "partOfSpeech": "noun",
          "meaning": "crash",
          "example": "Two cars had a collision at the junction."
        },
        {
          "word": "competent",
          "partOfSpeech": "adjective",
          "meaning": "skilled enough",
          "example": "She is a competent pianist."
        },
        {
          "word": "diploma",
          "partOfSpeech": "noun",
          "meaning": "certificate of graduation",
          "example": "He received his diploma at the ceremony."
        },
        {
          "word": "excel",
          "partOfSpeech": "verb",
          "meaning": "to be very good at something",
          "example": "She excels in mathematics."
        },
        {
          "word": "geology",
          "partOfSpeech": "noun",
          "meaning": "study of the earth",
          "example": "He teaches geology at the university."
        },
        {
          "word": "harness",
          "partOfSpeech": "verb",
          "meaning": "to control and use",
          "example": "They harnessed solar power for electricity."
        },
        {
          "word": "intellect",
          "partOfSpeech": "noun",
          "meaning": "intelligence",
          "example": "Einstein had a brilliant intellect."
        },
        {
          "word": "keen",
          "partOfSpeech": "adjective",
          "meaning": "eager; sharp",
          "example": "She is keen to learn new skills."
        },
        {
          "word": "mythology",
          "partOfSpeech": "noun",
          "meaning": "traditional myths",
          "example": "Greek mythology is fascinating."
        },
        {
          "word": "physiology",
          "partOfSpeech": "noun",
          "meaning": "study of body functions",
          "example": "Physiology explains how organs work."
        },
        {
          "word": "radioactive",
          "partOfSpeech": "adjective",
          "meaning": "emitting radiation",
          "example": "Uranium is a radioactive element."
        },
        {
          "word": "relativity",
          "partOfSpeech": "noun",
          "meaning": "Einstein’s theory of space and time",
          "example": "Relativity changed modern physics."
        },
        {
          "word": "sociology",
          "partOfSpeech": "noun",
          "meaning": "study of society",
          "example": "He majors in sociology."
        },
        {
          "word": "theoretical",
          "partOfSpeech": "adjective",
          "meaning": "based on ideas, not practice",
          "example": "The plan is still theoretical."
        }
      ]
    },
    "4": {
      "title": "Unit 4 – The Auditor",
      "words": [
        {
          "word": "administrator",
          "partOfSpeech": "noun",
          "meaning": "a person who manages business",
          "example": "The school administrator hired new teachers."
        },
        {
          "word": "affluent",
          "partOfSpeech": "adjective",
          "meaning": "wealthy",
          "example": "They live in an affluent neighborhood."
        },
        {
          "word": "audit",
          "partOfSpeech": "noun/verb",
          "meaning": "formal examination of accounts",
          "example": "The company requested a financial audit."
        },
        {
          "word": "automate",
          "partOfSpeech": "verb",
          "meaning": "to make automatic",
          "example": "They automated the factory with machines."
        },
        {
          "word": "bribe",
          "partOfSpeech": "verb/noun",
          "meaning": "to give money illegally for influence",
          "example": "The officer was caught taking a bribe."
        },
        {
          "word": "corrupt",
          "partOfSpeech": "adjective",
          "meaning": "dishonest, immoral",
          "example": "The corrupt official was arrested."
        },
        {
          "word": "dispose",
          "partOfSpeech": "verb",
          "meaning": "to throw away",
          "example": "They disposed of the old furniture."
        },
        {
          "word": "headquarters",
          "partOfSpeech": "noun",
          "meaning": "main office",
          "example": "The company’s headquarters are in London."
        },
        {
          "word": "incentive",
          "partOfSpeech": "noun",
          "meaning": "something that motivates",
          "example": "The bonus was an incentive to work harder."
        },
        {
          "word": "infrastructure",
          "partOfSpeech": "noun",
          "meaning": "basic systems of society",
          "example": "The city improved its transport infrastructure."
        },
        {
          "word": "legislate",
          "partOfSpeech": "verb",
          "meaning": "to make laws",
          "example": "The government legislated new tax rules."
        },
        {
          "word": "legitimate",
          "partOfSpeech": "adjective",
          "meaning": "lawful, proper",
          "example": "He had a legitimate reason to be late."
        },
        {
          "word": "manipulate",
          "partOfSpeech": "verb",
          "meaning": "to control unfairly",
          "example": "He manipulated the data to his advantage."
        },
        {
          "word": "merchandise",
          "partOfSpeech": "noun",
          "meaning": "goods for sale",
          "example": "The shop sells sports merchandise."
        },
        {
          "word": "retail",
          "partOfSpeech": "noun",
          "meaning": "selling goods directly to consumers",
          "example": "The company operates in the retail sector."
        },
        {
          "word": "revenue",
          "partOfSpeech": "noun",
          "meaning": "income",
          "example": "Tourism generates revenue for the city."
        },
        {
          "word": "rubbish",
          "partOfSpeech": "noun",
          "meaning": "trash, garbage",
          "example": "The park was full of rubbish."
        },
        {
          "word": "subsidy",
          "partOfSpeech": "noun",
          "meaning": "money given by government to help costs",
          "example": "The farmer received a government subsidy."
        },
        {
          "word": "transaction",
          "partOfSpeech": "noun",
          "meaning": "business deal",
          "example": "The transaction was completed online."
        },
        {
          "word": "violate",
          "partOfSpeech": "verb",
          "meaning": "to break a law or rule",
          "example": "They violated the agreement."
        }
      ]
    },
    "5": {
      "title": "Unit 5 – The Pharmaceutical Company",
      "words": [
        {
          "word": "assess",
          "partOfSpeech": "verb",
          "meaning": "to evaluate",
          "example": "The teacher assessed the students’ work."
        },
        {
          "word": "astonish",
          "partOfSpeech": "verb",
          "meaning": "to surprise greatly",
          "example": "Her singing voice astonished the judges."
        },
        {
          "word": "commence",
          "partOfSpeech": "verb",
          "meaning": "to begin",
          "example": "The meeting will commence at 10 a.m."
        },
        {
          "word": "essence",
          "partOfSpeech": "noun",
          "meaning": "the most important quality",
          "example": "Freedom is the essence of democracy."
        },
        {
          "word": "extract",
          "partOfSpeech": "verb",
          "meaning": "to remove or take out",
          "example": "They extracted oil from the seeds."
        },
        {
          "word": "fabulous",
          "partOfSpeech": "adjective",
          "meaning": "wonderful, amazing",
          "example": "She wore a fabulous dress to the party."
        },
        {
          "word": "haste",
          "partOfSpeech": "noun",
          "meaning": "speed, hurry",
          "example": "He left in haste after the call."
        },
        {
          "word": "impulse",
          "partOfSpeech": "noun",
          "meaning": "sudden desire or urge",
          "example": "She bought the shoes on impulse."
        },
        {
          "word": "latter",
          "partOfSpeech": "noun/adj",
          "meaning": "the second of twoI prefer tea rather than the latter choice, coffee.",
          "example": "Example sentence not provided."
        },
        {
          "word": "molecule",
          "partOfSpeech": "noun",
          "meaning": "smallest unit of matter",
          "example": "Water is made of molecules of hydrogen and oxygen."
        },
        {
          "word": "ongoing",
          "partOfSpeech": "adjective",
          "meaning": "continuing",
          "example": "There is an ongoing investigation."
        },
        {
          "word": "pharmaceutical",
          "partOfSpeech": "adjective",
          "meaning": "related to medicine",
          "example": "He works for a pharmaceutical company."
        },
        {
          "word": "precise",
          "partOfSpeech": "adjective",
          "meaning": "exact",
          "example": "She gave a precise description of the thief."
        },
        {
          "word": "proximity",
          "partOfSpeech": "noun",
          "meaning": "closeness",
          "example": "The school’s proximity to my house is convenient."
        },
        {
          "word": "publicity",
          "partOfSpeech": "noun",
          "meaning": "public attention",
          "example": "The movie gained much publicity before release."
        },
        {
          "word": "remedy",
          "partOfSpeech": "noun",
          "meaning": "medicine or cure",
          "example": "Herbal tea is a remedy for colds."
        },
        {
          "word": "significance",
          "partOfSpeech": "noun",
          "meaning": "importance",
          "example": "This discovery has great significance."
        },
        {
          "word": "subsequent",
          "partOfSpeech": "adjective",
          "meaning": "coming after",
          "example": "The subsequent events were surprising."
        },
        {
          "word": "synthetic",
          "partOfSpeech": "adjective",
          "meaning": "artificial",
          "example": "The bag was made of synthetic leather."
        },
        {
          "word": "terminal",
          "partOfSpeech": "noun/adj",
          "meaning": "end point; fatal",
          "example": "He waited at the bus terminal."
        }
      ]
    },
    "6": {
      "title": "Unit 6 – The Mountain Rescue",
      "words": [
        {
          "word": "altitude",
          "partOfSpeech": "noun",
          "meaning": "height above sea level",
          "example": "The plane flew at a high altitude."
        },
        {
          "word": "coastline",
          "partOfSpeech": "noun",
          "meaning": "the edge of land by the sea",
          "example": "They walked along the rocky coastline."
        },
        {
          "word": "deter",
          "partOfSpeech": "verb",
          "meaning": "to discourage",
          "example": "The guard dog deterred the thief."
        },
        {
          "word": "devise",
          "partOfSpeech": "verb",
          "meaning": "to invent, plan",
          "example": "The engineers devised a new machine."
        },
        {
          "word": "expertise",
          "partOfSpeech": "noun",
          "meaning": "special skill or knowledge",
          "example": "She has expertise in finance."
        },
        {
          "word": "fracture",
          "partOfSpeech": "noun",
          "meaning": "a broken bone",
          "example": "He suffered a leg fracture."
        },
        {
          "word": "impair",
          "partOfSpeech": "verb",
          "meaning": "to damage or weaken",
          "example": "Loud music can impair your hearing."
        },
        {
          "word": "implement",
          "partOfSpeech": "verb",
          "meaning": "to put into effect",
          "example": "The company implemented new policies."
        },
        {
          "word": "indigenous",
          "partOfSpeech": "adjective",
          "meaning": "native, original",
          "example": "The kangaroo is indigenous to Australia."
        },
        {
          "word": "insight",
          "partOfSpeech": "noun",
          "meaning": "deep understanding",
          "example": "The book gave insight into human behavior."
        },
        {
          "word": "limb",
          "partOfSpeech": "noun",
          "meaning": "arm or leg",
          "example": "The monkey climbed with strong limbs."
        },
        {
          "word": "migraine",
          "partOfSpeech": "noun",
          "meaning": "severe headache",
          "example": "She stayed home due to a migraine."
        },
        {
          "word": "optimism",
          "partOfSpeech": "noun",
          "meaning": "hopefulness",
          "example": "He faced challenges with optimism."
        },
        {
          "word": "peculiar",
          "partOfSpeech": "adjective",
          "meaning": "strange, unusual",
          "example": "There was a peculiar smell in the room."
        },
        {
          "word": "proficient",
          "partOfSpeech": "adjective",
          "meaning": "skilled",
          "example": "She is proficient in French."
        },
        {
          "word": "quest",
          "partOfSpeech": "noun",
          "meaning": "search, pursuit",
          "example": "The knights went on a quest for treasure."
        },
        {
          "word": "ridge",
          "partOfSpeech": "noun",
          "meaning": "long narrow hilltop",
          "example": "They hiked along the mountain ridge."
        },
        {
          "word": "spouse",
          "partOfSpeech": "noun",
          "meaning": "husband or wife",
          "example": "She attended the event with her spouse."
        },
        {
          "word": "thrust",
          "partOfSpeech": "verb",
          "meaning": "to push strongly",
          "example": "He thrust the door open."
        },
        {
          "word": "tolerate",
          "partOfSpeech": "verb",
          "meaning": "to accept without protest",
          "example": "She couldn’t tolerate the noise."
        }
      ]
    },
    "7": {
      "title": "Unit 7 – The Wildlife Refuge",
      "words": [
        {
          "word": "aquatic",
          "partOfSpeech": "adjective",
          "meaning": "living in water",
          "example": "Dolphins are aquatic animals."
        },
        {
          "word": "biosphere",
          "partOfSpeech": "noun",
          "meaning": "part of earth with life",
          "example": "The biosphere includes all ecosystems."
        },
        {
          "word": "bizarre",
          "partOfSpeech": "adjective",
          "meaning": "strange, unusual",
          "example": "He told a bizarre story about aliens."
        },
        {
          "word": "Celsius",
          "partOfSpeech": "noun",
          "meaning": "temperature scale",
          "example": "Water freezes at 0 degrees Celsius."
        },
        {
          "word": "coarse",
          "partOfSpeech": "adjective",
          "meaning": "rough, not smooth",
          "example": "The fabric felt coarse."
        },
        {
          "word": "companion",
          "partOfSpeech": "noun",
          "meaning": "friend",
          "example": "The dog was his faithful companion."
        },
        {
          "word": "digest",
          "partOfSpeech": "verb",
          "meaning": "to break down food",
          "example": "It takes time to digest a meal."
        },
        {
          "word": "duration",
          "partOfSpeech": "noun",
          "meaning": "length of time",
          "example": "The meeting’s duration was two hours."
        },
        {
          "word": "ecology",
          "partOfSpeech": "noun",
          "meaning": "study of environment",
          "example": "She studies ecology at university."
        },
        {
          "word": "feat",
          "partOfSpeech": "noun",
          "meaning": "an impressive act",
          "example": "Climbing Everest is a great feat."
        },
        {
          "word": "infinite",
          "partOfSpeech": "adjective",
          "meaning": "without end",
          "example": "The universe seems infinite."
        },
        {
          "word": "nucleus",
          "partOfSpeech": "noun",
          "meaning": "central part of atom or cell",
          "example": "The nucleus controls cell activities."
        },
        {
          "word": "parasite",
          "partOfSpeech": "noun",
          "meaning": "organism living off another",
          "example": "Ticks are parasites on animals."
        },
        {
          "word": "prominent",
          "partOfSpeech": "adjective",
          "meaning": "important, well-known",
          "example": "She is a prominent scientist."
        },
        {
          "word": "repetitive",
          "partOfSpeech": "adjective",
          "meaning": "repeated, boring",
          "example": "The job involved repetitive tasks."
        },
        {
          "word": "reproductive",
          "partOfSpeech": "adjective",
          "meaning": "relating to producing offspring",
          "example": "They studied the reproductive system of frogs."
        },
        {
          "word": "temperate",
          "partOfSpeech": "adjective",
          "meaning": "mild, moderate climate",
          "example": "They live in a temperate zone."
        },
        {
          "word": "tolerance",
          "partOfSpeech": "noun",
          "meaning": "acceptance of differences",
          "example": "Tolerance is important in diverse societies."
        },
        {
          "word": "undergo",
          "partOfSpeech": "verb",
          "meaning": "to experience",
          "example": "She will undergo surgery next week."
        },
        {
          "word": "vulnerable",
          "partOfSpeech": "adjective",
          "meaning": "easily harmed",
          "example": "Young animals are vulnerable to predators."
        }
      ]
    },
    "8": {
      "title": "Unit 8 – The Healthy Village",
      "words": [
        {
          "word": "adept",
          "partOfSpeech": "adjective",
          "meaning": "very skilled",
          "example": "She is adept at solving math problems quickly."
        },
        {
          "word": "barren",
          "partOfSpeech": "adjective",
          "meaning": "unable to produce plants/children",
          "example": "The desert is a barren land."
        },
        {
          "word": "ceramic",
          "partOfSpeech": "adj/noun",
          "meaning": "made of clay and hardened by heat",
          "example": "She bought a ceramic vase."
        },
        {
          "word": "culinary",
          "partOfSpeech": "adjective",
          "meaning": "related to cooking",
          "example": "He went to culinary school to become a chef."
        },
        {
          "word": "dense",
          "partOfSpeech": "adjective",
          "meaning": "thick, packed closely",
          "example": "The forest was so dense that little sunlight entered."
        },
        {
          "word": "dignity",
          "partOfSpeech": "noun",
          "meaning": "self-respect, honor",
          "example": "She handled the criticism with dignity."
        },
        {
          "word": "dominate",
          "partOfSpeech": "verb",
          "meaning": "to control or have power over",
          "example": "The team dominated the match from start to finish."
        },
        {
          "word": "edible",
          "partOfSpeech": "adjective",
          "meaning": "safe to eat",
          "example": "The berries are edible, but not very tasty."
        },
        {
          "word": "hostile",
          "partOfSpeech": "adjective",
          "meaning": "unfriendly, aggressive",
          "example": "The soldiers entered hostile territory."
        },
        {
          "word": "intake",
          "partOfSpeech": "noun",
          "meaning": "amount consumed",
          "example": "Too much sugar intake is unhealthy."
        },
        {
          "word": "likewise",
          "partOfSpeech": "adverb",
          "meaning": "in the same way",
          "example": "She smiled, and he likewise returned the gesture."
        },
        {
          "word": "malnutrition",
          "partOfSpeech": "noun",
          "meaning": "poor health from lack of food",
          "example": "Children suffered from malnutrition during the famine."
        },
        {
          "word": "medication",
          "partOfSpeech": "noun",
          "meaning": "medicine for treatment",
          "example": "He takes daily medication for his blood pressure."
        },
        {
          "word": "misconception",
          "partOfSpeech": "noun",
          "meaning": "wrong idea",
          "example": "It’s a misconception that bats are blind."
        },
        {
          "word": "obscure",
          "partOfSpeech": "adjective",
          "meaning": "unclear, little known",
          "example": "The rules of the game were obscure."
        },
        {
          "word": "oppress",
          "partOfSpeech": "verb",
          "meaning": "to treat unfairly or cruelly",
          "example": "The regime oppressed its people."
        },
        {
          "word": "peel",
          "partOfSpeech": "verb/noun",
          "meaning": "to remove the skin; the skin itself",
          "example": "She peeled an orange."
        },
        {
          "word": "prescription",
          "partOfSpeech": "noun",
          "meaning": "doctor’s written order for medicine",
          "example": "The pharmacist filled her prescription."
        },
        {
          "word": "respirator",
          "partOfSpeech": "noun",
          "meaning": "device to help breathing",
          "example": "The patient was put on a respirator."
        },
        {
          "word": "strive",
          "partOfSpeech": "verb",
          "meaning": "to try hard",
          "example": "She strives for excellence in her studies."
        }
      ]
    },
    "9": {
      "title": "Unit 9 – The Medieval Castle",
      "words": [
        {
          "word": "archaic",
          "partOfSpeech": "adjective",
          "meaning": "very old, outdated",
          "example": "He used archaic words no one understood."
        },
        {
          "word": "benevolent",
          "partOfSpeech": "adjective",
          "meaning": "kind, generous",
          "example": "The benevolent man donated money to charity."
        },
        {
          "word": "brass",
          "partOfSpeech": "noun",
          "meaning": "a metal made of copper and zinc",
          "example": "The door handle was made of brass."
        },
        {
          "word": "capitalism",
          "partOfSpeech": "noun",
          "meaning": "economic system based on private ownership",
          "example": "Capitalism encourages competition."
        },
        {
          "word": "component",
          "partOfSpeech": "noun",
          "meaning": "part of somethingA CPU is a key component of a computer.",
          "example": "Example sentence not provided."
        },
        {
          "word": "dependence",
          "partOfSpeech": "noun",
          "meaning": "reliance on something",
          "example": "His dependence on coffee was unhealthy."
        },
        {
          "word": "diminish",
          "partOfSpeech": "verb",
          "meaning": "to reduce or make less",
          "example": "His influence diminished after retirement."
        },
        {
          "word": "drawback",
          "partOfSpeech": "noun",
          "meaning": "disadvantage",
          "example": "The only drawback of the plan was the cost."
        },
        {
          "word": "fad",
          "partOfSpeech": "noun",
          "meaning": "a temporary fashion or trend",
          "example": "Fidget spinners were a short-lived fad."
        },
        {
          "word": "impose",
          "partOfSpeech": "verb",
          "meaning": "to force something on others",
          "example": "The government imposed new taxes."
        },
        {
          "word": "managerial",
          "partOfSpeech": "adjective",
          "meaning": "relating to management",
          "example": "She got promoted to a managerial role."
        },
        {
          "word": "medieval",
          "partOfSpeech": "adjective",
          "meaning": "from the",
          "example": "Middle AgesThe castle was built in medieval times."
        },
        {
          "word": "obsolete",
          "partOfSpeech": "adjective",
          "meaning": "no longer in use",
          "example": "Typewriters are now obsolete."
        },
        {
          "word": "peninsula",
          "partOfSpeech": "noun",
          "meaning": "land almost surrounded by water",
          "example": "Italy is a peninsula."
        },
        {
          "word": "prestige",
          "partOfSpeech": "noun",
          "meaning": "respect, status",
          "example": "Winning the prize gave her prestige."
        },
        {
          "word": "proportion",
          "partOfSpeech": "noun",
          "meaning": "part compared to the wholeA large proportion of the budget goes to defense.",
          "example": "Example sentence not provided."
        },
        {
          "word": "radical",
          "partOfSpeech": "adjective",
          "meaning": "extreme, very new",
          "example": "They proposed radical changes to the law."
        },
        {
          "word": "refute",
          "partOfSpeech": "verb",
          "meaning": "to prove wrong",
          "example": "The lawyer refuted the accusations."
        },
        {
          "word": "spectacular",
          "partOfSpeech": "adjective",
          "meaning": "very impressive",
          "example": "The fireworks show was spectacular."
        },
        {
          "word": "weave",
          "partOfSpeech": "verb",
          "meaning": "to make by interlacing threads",
          "example": "She weaved a basket from reeds."
        }
      ]
    },
    "10": {
      "title": "Unit 10 – The Accountant",
      "words": [
        {
          "word": "accountant",
          "partOfSpeech": "noun",
          "meaning": "person who manages financial records",
          "example": "The accountant prepared the company’s taxes."
        },
        {
          "word": "capitalist",
          "partOfSpeech": "noun",
          "meaning": "supporter of capitalism",
          "example": "He became a wealthy capitalist through trade."
        },
        {
          "word": "contempt",
          "partOfSpeech": "noun",
          "meaning": "strong dislike, disrespect",
          "example": "She looked at him with contempt."
        },
        {
          "word": "dedicate",
          "partOfSpeech": "verb",
          "meaning": "to devote",
          "example": "He dedicated his life to science."
        },
        {
          "word": "ditch",
          "partOfSpeech": "noun",
          "meaning": "narrow channel dug in the ground",
          "example": "The car fell into a ditch."
        },
        {
          "word": "enterprise",
          "partOfSpeech": "noun",
          "meaning": "business or project",
          "example": "The new enterprise created jobs."
        },
        {
          "word": "exquisite",
          "partOfSpeech": "adjective",
          "meaning": "extremely beautiful",
          "example": "She wore an exquisite diamond necklace."
        },
        {
          "word": "finance",
          "partOfSpeech": "verb/noun",
          "meaning": "provide money; money management",
          "example": "The project was financed by investors."
        },
        {
          "word": "indifferent",
          "partOfSpeech": "adjective",
          "meaning": "not caring",
          "example": "He seemed indifferent to the results."
        },
        {
          "word": "irrigate",
          "partOfSpeech": "verb",
          "meaning": "to supply water to land",
          "example": "Farmers irrigated the fields."
        },
        {
          "word": "maximize",
          "partOfSpeech": "verb",
          "meaning": "to increase as much as possible",
          "example": "She maximized her study time before exams."
        },
        {
          "word": "monetary",
          "partOfSpeech": "adjective",
          "meaning": "related to money",
          "example": "The country faced monetary problems."
        },
        {
          "word": "precaution",
          "partOfSpeech": "noun",
          "meaning": "action taken to prevent harm",
          "example": "They wore helmets as a precaution."
        },
        {
          "word": "preliminary",
          "partOfSpeech": "adjective",
          "meaning": "happening before something important",
          "example": "They held a preliminary meeting."
        },
        {
          "word": "saturate",
          "partOfSpeech": "verb",
          "meaning": "to soak completely",
          "example": "The sponge was saturated with water."
        },
        {
          "word": "simplicity",
          "partOfSpeech": "noun",
          "meaning": "being simple",
          "example": "She admired the design’s simplicity."
        },
        {
          "word": "sow",
          "partOfSpeech": "verb",
          "meaning": "to plant seeds",
          "example": "Farmers sow wheat in spring."
        },
        {
          "word": "soy",
          "partOfSpeech": "noun",
          "meaning": "a plant used for food",
          "example": "Soy milk is a dairy alternative."
        },
        {
          "word": "spade",
          "partOfSpeech": "noun",
          "meaning": "tool for digging",
          "example": "He dug the soil with a spade."
        },
        {
          "word": "upcoming",
          "partOfSpeech": "adjective",
          "meaning": "happening soon",
          "example": "The upcoming concert was sold out."
        }
      ]
    },
    "11": {
      "title": "Unit 11 – The Banquet",
      "words": [
        {
          "word": "acute",
          "partOfSpeech": "adjective",
          "meaning": "severe, sharp",
          "example": "She suffered acute pain in her leg."
        },
        {
          "word": "aggression",
          "partOfSpeech": "noun",
          "meaning": "violent behavior",
          "example": "The dog showed aggression toward strangers."
        },
        {
          "word": "banquet",
          "partOfSpeech": "noun",
          "meaning": "large formal meal",
          "example": "They attended a wedding banquet."
        },
        {
          "word": "biography",
          "partOfSpeech": "noun",
          "meaning": "life story of a personI read a biography of",
          "example": "Nelson Mandela."
        },
        {
          "word": "boost",
          "partOfSpeech": "verb/noun",
          "meaning": "to increase; an increase",
          "example": "The new job boosted his confidence."
        },
        {
          "word": "clap",
          "partOfSpeech": "verb/noun",
          "meaning": "to strike hands together; applause",
          "example": "The audience clapped loudly."
        },
        {
          "word": "compel",
          "partOfSpeech": "verb",
          "meaning": "to force",
          "example": "The law compels citizens to pay taxes."
        },
        {
          "word": "dominance",
          "partOfSpeech": "noun",
          "meaning": "control, power",
          "example": "The company gained dominance in the market."
        },
        {
          "word": "gorgeous",
          "partOfSpeech": "adjective",
          "meaning": "very beautiful",
          "example": "The sunset was gorgeous."
        },
        {
          "word": "inevitable",
          "partOfSpeech": "adjective",
          "meaning": "certain to happen",
          "example": "Death is inevitable."
        },
        {
          "word": "legacy",
          "partOfSpeech": "noun",
          "meaning": "something left behind",
          "example": "His book is his legacy."
        },
        {
          "word": "masterpiece",
          "partOfSpeech": "noun",
          "meaning": "outstanding work of art",
          "example": "Mona Lisa is a masterpiece."
        },
        {
          "word": "multiple",
          "partOfSpeech": "adjective",
          "meaning": "many",
          "example": "She made multiple attempts."
        },
        {
          "word": "narrate",
          "partOfSpeech": "verb",
          "meaning": "to tell a story",
          "example": "The actor narrated the film."
        },
        {
          "word": "notorious",
          "partOfSpeech": "adjective",
          "meaning": "famous for something bad",
          "example": "The area is notorious for crime."
        },
        {
          "word": "outdated",
          "partOfSpeech": "adjective",
          "meaning": "old-fashioned",
          "example": "These rules are outdated."
        },
        {
          "word": "overall",
          "partOfSpeech": "adj/adv",
          "meaning": "in general",
          "example": "Overall, the trip was a success."
        },
        {
          "word": "partiality",
          "partOfSpeech": "noun",
          "meaning": "unfair preference",
          "example": "The judge showed partiality toward the rich."
        },
        {
          "word": "spontaneous",
          "partOfSpeech": "adjective",
          "meaning": "unplanned",
          "example": "They had a spontaneous celebration."
        },
        {
          "word": "virtue",
          "partOfSpeech": "noun",
          "meaning": "good quality",
          "example": "Honesty is a virtue."
        }
      ]
    },
    "12": {
      "title": "Unit 12 – The Anthropologist",
      "words": [
        {
          "word": "anthropology",
          "partOfSpeech": "noun",
          "meaning": "study of humans",
          "example": "She studied anthropology at university."
        },
        {
          "word": "applaud",
          "partOfSpeech": "verb",
          "meaning": "to clap, praise",
          "example": "The audience applauded the performance."
        },
        {
          "word": "appoint",
          "partOfSpeech": "verb",
          "meaning": "to officially choose",
          "example": "He was appointed manager."
        },
        {
          "word": "compatible",
          "partOfSpeech": "adjective",
          "meaning": "able to work together",
          "example": "These parts are compatible with the machine."
        },
        {
          "word": "competence",
          "partOfSpeech": "noun",
          "meaning": "ability, skill",
          "example": "She has competence in languages."
        },
        {
          "word": "confer",
          "partOfSpeech": "verb",
          "meaning": "to discuss, exchange opinions",
          "example": "The leaders conferred about the issue."
        },
        {
          "word": "consecutive",
          "partOfSpeech": "adjective",
          "meaning": "following one after another",
          "example": "They won three consecutive games."
        },
        {
          "word": "crude",
          "partOfSpeech": "adjective",
          "meaning": "rough, unrefined",
          "example": "He gave a crude drawing of the design."
        },
        {
          "word": "cube",
          "partOfSpeech": "noun",
          "meaning": "a solid shape with 6 equal sides",
          "example": "He cut the cheese into cubes."
        },
        {
          "word": "feedback",
          "partOfSpeech": "noun",
          "meaning": "response, opinion",
          "example": "The teacher gave feedback on essays."
        },
        {
          "word": "ignorance",
          "partOfSpeech": "noun",
          "meaning": "lack of knowledge",
          "example": "His ignorance of history was surprising."
        },
        {
          "word": "masculine",
          "partOfSpeech": "adjective",
          "meaning": "manly",
          "example": "The actor had a masculine voice."
        },
        {
          "word": "monument",
          "partOfSpeech": "noun",
          "meaning": "structure honoring someone",
          "example": "They visited the war monument."
        },
        {
          "word": "muscular",
          "partOfSpeech": "adjective",
          "meaning": "strong muscles",
          "example": "He is a muscular athlete."
        },
        {
          "word": "posture",
          "partOfSpeech": "noun",
          "meaning": "body position",
          "example": "Good posture prevents back pain."
        },
        {
          "word": "situate",
          "partOfSpeech": "verb",
          "meaning": "to place in position",
          "example": "The school is situated near the park."
        },
        {
          "word": "supervise",
          "partOfSpeech": "verb",
          "meaning": "to watch over work",
          "example": "The manager supervised the workers."
        },
        {
          "word": "symmetry",
          "partOfSpeech": "noun",
          "meaning": "balanced proportions",
          "example": "The building has perfect symmetry."
        },
        {
          "word": "tattoo",
          "partOfSpeech": "noun",
          "meaning": "permanent design on skin",
          "example": "He got a tattoo on his arm."
        },
        {
          "word": "undergraduate",
          "partOfSpeech": "noun",
          "meaning": "student before a degree",
          "example": "She is an undergraduate at Harvard."
        }
      ]
    },
    "13": {
      "title": "Unit 13 – The Sanctuary",
      "words": [
        {
          "word": "brook",
          "partOfSpeech": "noun",
          "meaning": "small stream",
          "example": "The brook flows through the forest."
        },
        {
          "word": "cater",
          "partOfSpeech": "verb",
          "meaning": "to provide food/service",
          "example": "The company catered the wedding."
        },
        {
          "word": "considerate",
          "partOfSpeech": "adjective",
          "meaning": "thoughtful of others",
          "example": "He is always considerate of his neighbors."
        },
        {
          "word": "consumption",
          "partOfSpeech": "noun",
          "meaning": "the use of something",
          "example": "Water consumption increased in summer."
        },
        {
          "word": "criteria",
          "partOfSpeech": "noun",
          "meaning": "standards for judgment",
          "example": "The school has criteria for admission."
        },
        {
          "word": "crust",
          "partOfSpeech": "noun",
          "meaning": "hard outer layer",
          "example": "He cut off the bread’s crust."
        },
        {
          "word": "degrade",
          "partOfSpeech": "verb",
          "meaning": "to lower in value",
          "example": "Pollution degrades the environment."
        },
        {
          "word": "entitle",
          "partOfSpeech": "verb",
          "meaning": "to give a right to",
          "example": "The ticket entitles you to entry."
        },
        {
          "word": "escort",
          "partOfSpeech": "verb/noun",
          "meaning": "to accompany, a guard",
          "example": "The police escorted the politician."
        },
        {
          "word": "external",
          "partOfSpeech": "adjective",
          "meaning": "outer",
          "example": "The building’s external walls are painted white."
        },
        {
          "word": "facility",
          "partOfSpeech": "noun",
          "meaning": "place or equipment for a purpose",
          "example": "The sports facility is new."
        },
        {
          "word": "faculty",
          "partOfSpeech": "noun",
          "meaning": "teaching staff of a school",
          "example": "She works on the law faculty."
        },
        {
          "word": "heap",
          "partOfSpeech": "noun",
          "meaning": "pile",
          "example": "There was a heap of clothes on the bed."
        },
        {
          "word": "hemisphere",
          "partOfSpeech": "noun",
          "meaning": "half of the",
          "example": "EarthAustralia is in the southern hemisphere."
        },
        {
          "word": "hound",
          "partOfSpeech": "noun",
          "meaning": "a hunting dog",
          "example": "The hound barked loudly."
        },
        {
          "word": "impersonal",
          "partOfSpeech": "adjective",
          "meaning": "without human warmth",
          "example": "The letter was impersonal in tone."
        },
        {
          "word": "ornament",
          "partOfSpeech": "noun",
          "meaning": "decoration",
          "example": "The Christmas tree was full of ornaments."
        },
        {
          "word": "pedestrian",
          "partOfSpeech": "noun",
          "meaning": "a person walking",
          "example": "The car nearly hit a pedestrian."
        },
        {
          "word": "sanctuary",
          "partOfSpeech": "noun",
          "meaning": "safe place",
          "example": "The refugees found sanctuary in the church."
        },
        {
          "word": "spectator",
          "partOfSpeech": "noun",
          "meaning": "person who watches",
          "example": "The spectators cheered at the match."
        }
      ]
    },
    "14": {
      "title": "Unit 14 – The Renaissance",
      "words": [
        {
          "word": "asset",
          "partOfSpeech": "noun",
          "meaning": "useful thing or person",
          "example": "Her language skills are an asset to the team."
        },
        {
          "word": "aspect",
          "partOfSpeech": "noun",
          "meaning": "a part or feature",
          "example": "We considered every aspect of the plan."
        },
        {
          "word": "Braille",
          "partOfSpeech": "noun",
          "meaning": "writing system for the blind",
          "example": "The book was printed in Braille."
        },
        {
          "word": "bud",
          "partOfSpeech": "noun",
          "meaning": "undeveloped plant shoot",
          "example": "The rosebud will bloom soon."
        },
        {
          "word": "coordinate",
          "partOfSpeech": "verb",
          "meaning": "to organize activities",
          "example": "They coordinated the rescue effort."
        },
        {
          "word": "disprove",
          "partOfSpeech": "verb",
          "meaning": "to show something is false",
          "example": "The scientist disproved the theory."
        },
        {
          "word": "humanitarian",
          "partOfSpeech": "adjective",
          "meaning": "concerned with human welfare",
          "example": "She worked in humanitarian aid."
        },
        {
          "word": "hypothesis",
          "partOfSpeech": "noun",
          "meaning": "an untested idea",
          "example": "The experiment tested the hypothesis."
        },
        {
          "word": "imprint",
          "partOfSpeech": "verb/noun",
          "meaning": "to leave a mark; a mark itself",
          "example": "His words left an imprint on her mind."
        },
        {
          "word": "informative",
          "partOfSpeech": "adjective",
          "meaning": "giving useful knowledge",
          "example": "The lecture was informative."
        },
        {
          "word": "optic",
          "partOfSpeech": "adjective",
          "meaning": "related to vision/eyes",
          "example": "The optic nerve connects the eye to the brain."
        },
        {
          "word": "premise",
          "partOfSpeech": "noun",
          "meaning": "basic idea, assumption",
          "example": "The book is based on the premise of equality."
        },
        {
          "word": "rack",
          "partOfSpeech": "noun",
          "meaning": "a frame for holding things",
          "example": "He put the magazines on the rack."
        },
        {
          "word": "Renaissance",
          "partOfSpeech": "noun",
          "meaning": "period of art/science rebirth",
          "example": "Da Vinci was a genius of the Renaissance."
        },
        {
          "word": "revere",
          "partOfSpeech": "verb",
          "meaning": "to deeply respect",
          "example": "The people revered their leader."
        },
        {
          "word": "simultaneous",
          "partOfSpeech": "adjective",
          "meaning": "happening at the same time",
          "example": "The attacks were simultaneous."
        },
        {
          "word": "skeptic",
          "partOfSpeech": "noun",
          "meaning": "person who doubts",
          "example": "He is a skeptic of UFO stories."
        },
        {
          "word": "spatial",
          "partOfSpeech": "adjective",
          "meaning": "related to space/position",
          "example": "The test measured spatial awareness."
        },
        {
          "word": "specify",
          "partOfSpeech": "verb",
          "meaning": "to state clearly",
          "example": "Please specify your address on the form."
        },
        {
          "word": "wax",
          "partOfSpeech": "noun/verb",
          "meaning": "substance from bees/candles; to polish",
          "example": "She melted wax to make candles."
        }
      ]
    },
    "15": {
      "title": "Unit 15 – The Flood",
      "words": [
        {
          "word": "accessory",
          "partOfSpeech": "noun",
          "meaning": "an extra item for use with something",
          "example": "She bought matching accessories for her outfit."
        },
        {
          "word": "acquisition",
          "partOfSpeech": "noun",
          "meaning": "the act of getting something",
          "example": "Language acquisition is easier in childhood."
        },
        {
          "word": "adequate",
          "partOfSpeech": "adjective",
          "meaning": "enough, sufficient",
          "example": "He received an adequate amount of food."
        },
        {
          "word": "cardboard",
          "partOfSpeech": "noun",
          "meaning": "thick, stiff paper",
          "example": "The box was made of cardboard."
        },
        {
          "word": "dilemma",
          "partOfSpeech": "noun",
          "meaning": "a difficult choice",
          "example": "She faced a dilemma about moving abroad."
        },
        {
          "word": "elaborate",
          "partOfSpeech": "adj/verb",
          "meaning": "detailed; to explain in detail",
          "example": "He gave an elaborate description of the plan."
        },
        {
          "word": "facilitate",
          "partOfSpeech": "verb",
          "meaning": "to make easier",
          "example": "The new system facilitates communication."
        },
        {
          "word": "fleet",
          "partOfSpeech": "noun",
          "meaning": "a group of ships or vehicles",
          "example": "The navy has a large fleet of warships."
        },
        {
          "word": "grid",
          "partOfSpeech": "noun",
          "meaning": "a pattern of squares or lines",
          "example": "The city was built on a grid of streets."
        },
        {
          "word": "import",
          "partOfSpeech": "verb/noun",
          "meaning": "to bring in goods; goods brought in",
          "example": "They import cars from Germany."
        },
        {
          "word": "infer",
          "partOfSpeech": "verb",
          "meaning": "to conclude from evidence",
          "example": "We inferred that he was tired from his tone."
        },
        {
          "word": "inflate",
          "partOfSpeech": "verb",
          "meaning": "to fill with air",
          "example": "She inflated the balloons."
        },
        {
          "word": "innate",
          "partOfSpeech": "adjective",
          "meaning": "natural, existing from birth",
          "example": "He has an innate talent for music."
        },
        {
          "word": "marble",
          "partOfSpeech": "noun",
          "meaning": "a type of stone",
          "example": "The statue was carved from marble."
        },
        {
          "word": "mast",
          "partOfSpeech": "noun",
          "meaning": "tall pole on a ship for sails",
          "example": "The mast of the ship was broken in the storm."
        },
        {
          "word": "nausea",
          "partOfSpeech": "noun",
          "meaning": "a sick feeling in the stomach",
          "example": "The medicine caused nausea."
        },
        {
          "word": "naval",
          "partOfSpeech": "adjective",
          "meaning": "related to a country’s navy",
          "example": "They built a new naval base."
        },
        {
          "word": "pouch",
          "partOfSpeech": "noun",
          "meaning": "a small bag or pocket",
          "example": "The kangaroo carries its baby in a pouch."
        },
        {
          "word": "saturated",
          "partOfSpeech": "adjective",
          "meaning": "completely soaked",
          "example": "The sponge was saturated with water."
        },
        {
          "word": "updated",
          "partOfSpeech": "adj/verb",
          "meaning": "made more modern or current",
          "example": "The app was updated with new features."
        }
      ]
    },
    "16": {
      "title": "Unit 16 – The Brainstorm",
      "words": [
        {
          "word": "addict",
          "partOfSpeech": "noun",
          "meaning": "person dependent on a substance",
          "example": "The addict sought help to stop using drugs."
        },
        {
          "word": "archeological",
          "partOfSpeech": "adjective",
          "meaning": "related to archaeology",
          "example": "They studied archeological remains."
        },
        {
          "word": "archeology",
          "partOfSpeech": "noun",
          "meaning": "study of past human life",
          "example": "Archeology reveals ancient civilizations."
        },
        {
          "word": "brainstorm",
          "partOfSpeech": "verb",
          "meaning": "to generate ideas freely",
          "example": "The team brainstormed solutions together."
        },
        {
          "word": "budget",
          "partOfSpeech": "noun",
          "meaning": "financial plan",
          "example": "We must stick to our budget this month."
        },
        {
          "word": "chaotic",
          "partOfSpeech": "adjective",
          "meaning": "completely disordered",
          "example": "The market was chaotic during the sale."
        },
        {
          "word": "cite",
          "partOfSpeech": "verb",
          "meaning": "to quote as evidence",
          "example": "He cited a famous scientist in his paper."
        },
        {
          "word": "correspond",
          "partOfSpeech": "verb",
          "meaning": "to match or communicate",
          "example": "The results correspond with our theory."
        },
        {
          "word": "courtyard",
          "partOfSpeech": "noun",
          "meaning": "open space surrounded by buildings",
          "example": "The children played in the courtyard."
        },
        {
          "word": "estate",
          "partOfSpeech": "noun",
          "meaning": "large property or land",
          "example": "The old estate was sold at auction."
        },
        {
          "word": "fraud",
          "partOfSpeech": "noun",
          "meaning": "deception for gain",
          "example": "The businessman was charged with fraud."
        },
        {
          "word": "hydrogen",
          "partOfSpeech": "noun",
          "meaning": "a chemical element (H)",
          "example": "Water is made of hydrogen and oxygen."
        },
        {
          "word": "integrity",
          "partOfSpeech": "noun",
          "meaning": "honesty, strong morals",
          "example": "Her integrity earned everyone’s trust."
        },
        {
          "word": "knit",
          "partOfSpeech": "verb",
          "meaning": "to make clothing by looping yarn",
          "example": "She knitted a sweater for winter."
        },
        {
          "word": "outlook",
          "partOfSpeech": "noun",
          "meaning": "attitude or perspective",
          "example": "He has a positive outlook on life."
        },
        {
          "word": "parachute",
          "partOfSpeech": "noun",
          "meaning": "device to slow a fall",
          "example": "The soldier jumped with a parachute."
        },
        {
          "word": "prehistoric",
          "partOfSpeech": "adjective",
          "meaning": "before written history",
          "example": "They found prehistoric cave paintings."
        },
        {
          "word": "proponent",
          "partOfSpeech": "noun",
          "meaning": "supporter of an idea",
          "example": "She is a proponent of renewable energy."
        },
        {
          "word": "refine",
          "partOfSpeech": "verb",
          "meaning": "to improve or purify",
          "example": "They refined the oil for use."
        },
        {
          "word": "restrict",
          "partOfSpeech": "verb",
          "meaning": "to limit",
          "example": "The rules restrict smoking indoors."
        }
      ]
    },
    "17": {
      "title": "Unit 17 – The Lawsuit",
      "words": [
        {
          "word": "attorney",
          "partOfSpeech": "noun",
          "meaning": "lawyer",
          "example": "The attorney defended her client in court."
        },
        {
          "word": "chronic",
          "partOfSpeech": "adjective",
          "meaning": "lasting for a long time",
          "example": "He suffers from chronic back pain."
        },
        {
          "word": "discipline",
          "partOfSpeech": "noun",
          "meaning": "training or control",
          "example": "Martial arts require discipline."
        },
        {
          "word": "donor",
          "partOfSpeech": "noun",
          "meaning": "giver, especially of blood or organs",
          "example": "The donor gave money to charity."
        },
        {
          "word": "fellow",
          "partOfSpeech": "noun",
          "meaning": "companion, colleague",
          "example": "She helped her fellow students."
        },
        {
          "word": "gossip",
          "partOfSpeech": "noun/verb",
          "meaning": "idle talk about others",
          "example": "They gossiped about their neighbors."
        },
        {
          "word": "graduate",
          "partOfSpeech": "noun/verb",
          "meaning": "person who finished school; to finish school",
          "example": "She graduated from university in 2020."
        },
        {
          "word": "graffiti",
          "partOfSpeech": "noun",
          "meaning": "drawings on public surfaces",
          "example": "The wall was covered in graffiti."
        },
        {
          "word": "guardian",
          "partOfSpeech": "noun",
          "meaning": "protector",
          "example": "Her aunt became her legal guardian."
        },
        {
          "word": "implicate",
          "partOfSpeech": "verb",
          "meaning": "to involve in wrongdoing",
          "example": "The report implicated him in the crime."
        },
        {
          "word": "kin",
          "partOfSpeech": "noun",
          "meaning": "family, relatives",
          "example": "She invited all her kin to the wedding."
        },
        {
          "word": "referee",
          "partOfSpeech": "noun",
          "meaning": "official in a sports game",
          "example": "The referee blew the whistle."
        },
        {
          "word": "sever",
          "partOfSpeech": "verb",
          "meaning": "to cut off",
          "example": "He severed the rope with a knife."
        },
        {
          "word": "shaft",
          "partOfSpeech": "noun",
          "meaning": "long, narrow part of something",
          "example": "Light came through a shaft in the roof."
        },
        {
          "word": "stab",
          "partOfSpeech": "verb",
          "meaning": "to pierce with a sharp object",
          "example": "The man stabbed the meat with a fork."
        },
        {
          "word": "stimulus",
          "partOfSpeech": "noun",
          "meaning": "something causing action or response",
          "example": "The loud noise was a stimulus to wake up."
        },
        {
          "word": "suspicion",
          "partOfSpeech": "noun",
          "meaning": "a feeling something is wrong",
          "example": "Police acted on suspicion of theft."
        },
        {
          "word": "terminate",
          "partOfSpeech": "verb",
          "meaning": "to end",
          "example": "The company terminated his contract."
        },
        {
          "word": "theme",
          "partOfSpeech": "noun",
          "meaning": "central idea",
          "example": "The theme of the book is friendship."
        },
        {
          "word": "tuition",
          "partOfSpeech": "noun",
          "meaning": "payment for instruction",
          "example": "University tuition fees are high."
        }
      ]
    },
    "18": {
      "title": "Unit 18 – The Combat",
      "words": [
        {
          "word": "aggressive",
          "partOfSpeech": "adjective",
          "meaning": "ready to attack",
          "example": "The dog became aggressive toward strangers."
        },
        {
          "word": "amnesty",
          "partOfSpeech": "noun",
          "meaning": "pardon for offenses",
          "example": "The prisoners were given amnesty."
        },
        {
          "word": "arena",
          "partOfSpeech": "noun",
          "meaning": "area for events",
          "example": "The concert took place in a large arena."
        },
        {
          "word": "auditorium",
          "partOfSpeech": "noun",
          "meaning": "large hall for audiences",
          "example": "The lecture was in the school auditorium."
        },
        {
          "word": "captive",
          "partOfSpeech": "noun",
          "meaning": "prisoner",
          "example": "The soldiers freed the captives."
        },
        {
          "word": "combat",
          "partOfSpeech": "noun/verb",
          "meaning": "fight, battle",
          "example": "They fought in hand-to-hand combat."
        },
        {
          "word": "commonplace",
          "partOfSpeech": "adjective",
          "meaning": "ordinary",
          "example": "Cell phones are commonplace today."
        },
        {
          "word": "compound",
          "partOfSpeech": "noun",
          "meaning": "enclosed area with buildings",
          "example": "They lived inside a military compound."
        },
        {
          "word": "corps",
          "partOfSpeech": "noun",
          "meaning": "organized group, especially military",
          "example": "He served in the medical corps."
        },
        {
          "word": "distract",
          "partOfSpeech": "verb",
          "meaning": "to draw attention away",
          "example": "Noise distracted the students during exams."
        },
        {
          "word": "dumb",
          "partOfSpeech": "adjective",
          "meaning": "unable to speak; very foolish",
          "example": "He felt dumb for making that mistake."
        },
        {
          "word": "foe",
          "partOfSpeech": "noun",
          "meaning": "enemy",
          "example": "The knight defeated his foe."
        },
        {
          "word": "hack",
          "partOfSpeech": "verb",
          "meaning": "to cut roughly; break into computers",
          "example": "He hacked the wood with an axe."
        },
        {
          "word": "meditate",
          "partOfSpeech": "verb",
          "meaning": "to focus the mind calmly",
          "example": "She meditates every morning."
        },
        {
          "word": "nick",
          "partOfSpeech": "verb/noun",
          "meaning": "to cut slightly; a small cut",
          "example": "He nicked his finger with the knife."
        },
        {
          "word": "provoke",
          "partOfSpeech": "verb",
          "meaning": "to anger deliberately",
          "example": "His rude remarks provoked her."
        },
        {
          "word": "realm",
          "partOfSpeech": "noun",
          "meaning": "kingdom, area",
          "example": "The king ruled over a vast realm."
        },
        {
          "word": "reign",
          "partOfSpeech": "verb/noun",
          "meaning": "period of rule",
          "example": "The queen’s reign lasted 50 years."
        },
        {
          "word": "rust",
          "partOfSpeech": "noun/verb",
          "meaning": "reddish corrosion on metal",
          "example": "The bike rusted in the rain."
        },
        {
          "word": "sacred",
          "partOfSpeech": "adjective",
          "meaning": "holy",
          "example": "The temple is a sacred place."
        }
      ]
    },
    "19": {
      "title": "Unit 19 – The Catastrophe",
      "words": [
        {
          "word": "accordingly",
          "partOfSpeech": "adverb",
          "meaning": "in a suitable way",
          "example": "He acted accordingly to the rules."
        },
        {
          "word": "anchor",
          "partOfSpeech": "noun/verb",
          "meaning": "heavy object to hold a ship; to secure",
          "example": "The ship dropped its anchor."
        },
        {
          "word": "buoy",
          "partOfSpeech": "noun",
          "meaning": "floating object on water",
          "example": "The buoy marked the swimming area."
        },
        {
          "word": "catastrophe",
          "partOfSpeech": "noun",
          "meaning": "disaster",
          "example": "The flood was a catastrophe for the town."
        },
        {
          "word": "context",
          "partOfSpeech": "noun",
          "meaning": "situation of something",
          "example": "The meaning changes in different contexts."
        },
        {
          "word": "designate",
          "partOfSpeech": "verb",
          "meaning": "to assign, point out",
          "example": "He was designated team leader."
        },
        {
          "word": "distort",
          "partOfSpeech": "verb",
          "meaning": "to twist out of shape or meaning",
          "example": "The funhouse mirror distorted his reflection."
        },
        {
          "word": "dock",
          "partOfSpeech": "noun/verb",
          "meaning": "platform for ships; to park a ship",
          "example": "The ship docked at the harbor."
        },
        {
          "word": "fore",
          "partOfSpeech": "adjective",
          "meaning": "situated in the front",
          "example": "The fore part of the ship was damaged."
        },
        {
          "word": "frequent",
          "partOfSpeech": "verb/adj",
          "meaning": "to visit often; happening often",
          "example": "They frequent the café daily."
        },
        {
          "word": "genuine",
          "partOfSpeech": "adjective",
          "meaning": "real, authentic",
          "example": "The signature was genuine."
        },
        {
          "word": "grease",
          "partOfSpeech": "noun/verb",
          "meaning": "oily substance; to oil",
          "example": "He greased the pan before cooking."
        },
        {
          "word": "intricate",
          "partOfSpeech": "adjective",
          "meaning": "complicated, detailed",
          "example": "The watch had an intricate design."
        },
        {
          "word": "offset",
          "partOfSpeech": "verb",
          "meaning": "to balance, compensate",
          "example": "The gains offset the losses."
        },
        {
          "word": "overlap",
          "partOfSpeech": "verb",
          "meaning": "to cover partly",
          "example": "The curtains overlap in the middle."
        },
        {
          "word": "precipitate",
          "partOfSpeech": "verb",
          "meaning": "to cause to happen quickly",
          "example": "The argument precipitated a fight."
        },
        {
          "word": "secondhand",
          "partOfSpeech": "adjective",
          "meaning": "used before; not new",
          "example": "He bought a secondhand car."
        },
        {
          "word": "slot",
          "partOfSpeech": "noun",
          "meaning": "narrow opening; scheduled time",
          "example": "She put the letter in the mail slot."
        },
        {
          "word": "submerge",
          "partOfSpeech": "verb",
          "meaning": "to put under water",
          "example": "The submarine submerged."
        },
        {
          "word": "tactic",
          "partOfSpeech": "noun",
          "meaning": "strategy, plan",
          "example": "The coach discussed game tactics."
        }
      ]
    },
    "20": {
      "title": "Unit 20 – The Scientist",
      "words": [
        {
          "word": "aggregate",
          "partOfSpeech": "noun",
          "meaning": "total, collection",
          "example": "The aggregate of votes decided the winner."
        },
        {
          "word": "antibiotic",
          "partOfSpeech": "noun",
          "meaning": "medicine that kills bacteria",
          "example": "The doctor prescribed an antibiotic."
        },
        {
          "word": "circuit",
          "partOfSpeech": "noun",
          "meaning": "path for electricity",
          "example": "The light didn’t work due to a broken circuit."
        },
        {
          "word": "complement",
          "partOfSpeech": "verb/noun",
          "meaning": "to complete; something that completes",
          "example": "Her red shoes complemented her dress."
        },
        {
          "word": "compress",
          "partOfSpeech": "verb",
          "meaning": "to press together",
          "example": "She compressed the file to save space."
        },
        {
          "word": "database",
          "partOfSpeech": "noun",
          "meaning": "organized collection of data",
          "example": "The company maintains a customer database."
        },
        {
          "word": "equivalent",
          "partOfSpeech": "adj/noun",
          "meaning": "equal in value",
          "example": "Ten dimes are equivalent to a dollar."
        },
        {
          "word": "immune",
          "partOfSpeech": "adjective",
          "meaning": "protected from disease",
          "example": "Some people are immune to the virus."
        },
        {
          "word": "input",
          "partOfSpeech": "noun/verb",
          "meaning": "contribution of ideas; to enter data",
          "example": "He valued her input in the discussion."
        },
        {
          "word": "intimate",
          "partOfSpeech": "adjective",
          "meaning": "very close, personal",
          "example": "They have an intimate friendship."
        },
        {
          "word": "magnet",
          "partOfSpeech": "noun",
          "meaning": "object that attracts metal",
          "example": "The magnet stuck to the fridge."
        },
        {
          "word": "metabolism",
          "partOfSpeech": "noun",
          "meaning": "body process of using energy",
          "example": "Exercise increases metabolism."
        },
        {
          "word": "microchip",
          "partOfSpeech": "noun",
          "meaning": "small electronic circuit",
          "example": "The pet has a microchip for identification."
        },
        {
          "word": "phase",
          "partOfSpeech": "noun",
          "meaning": "stage",
          "example": "The moon has different phases."
        },
        {
          "word": "pinch",
          "partOfSpeech": "verb/noun",
          "meaning": "to squeeze between fingers; a small amount",
          "example": "She pinched her nose shut."
        },
        {
          "word": "prevalent",
          "partOfSpeech": "adjective",
          "meaning": "common, widespread",
          "example": "Smartphones are prevalent today."
        },
        {
          "word": "quantum",
          "partOfSpeech": "noun/adj",
          "meaning": "smallest unit in physics",
          "example": "He studied quantum mechanics."
        },
        {
          "word": "ratio",
          "partOfSpeech": "noun",
          "meaning": "comparison of two numbers",
          "example": "The ratio of boys to girls is 2:1."
        },
        {
          "word": "spiral",
          "partOfSpeech": "noun/verb",
          "meaning": "winding curve; to wind around",
          "example": "Smoke rose in a spiral."
        },
        {
          "word": "viral",
          "partOfSpeech": "adjective",
          "meaning": "relating to a virus; spreading quickly",
          "example": "The video went viral online."
        }
      ]
    },
    "21": {
      "title": "Unit 21 – The Language Lab",
      "words": [
        {
          "word": "astounded",
          "partOfSpeech": "adjective",
          "meaning": "amazed, shocked",
          "example": "She was astounded by the news."
        },
        {
          "word": "attribute",
          "partOfSpeech": "verb/noun",
          "meaning": "to regard as caused by; quality",
          "example": "She attributed her success to hard work."
        },
        {
          "word": "bilingual",
          "partOfSpeech": "adjective",
          "meaning": "able to speak two languages",
          "example": "He is bilingual in English and French."
        },
        {
          "word": "clone",
          "partOfSpeech": "noun/verb",
          "meaning": "identical copy; to make a copy",
          "example": "Scientists cloned a sheep named Dolly."
        },
        {
          "word": "colloquial",
          "partOfSpeech": "adjective",
          "meaning": "informal language“",
          "example": "Gonna” is a colloquial word."
        },
        {
          "word": "cosmetics",
          "partOfSpeech": "noun",
          "meaning": "beauty products",
          "example": "She bought new cosmetics at the store."
        },
        {
          "word": "dash",
          "partOfSpeech": "verb/noun",
          "meaning": "to run quickly; a quick movement",
          "example": "He dashed across the street."
        },
        {
          "word": "disgust",
          "partOfSpeech": "noun/verb",
          "meaning": "strong dislike; to sicken",
          "example": "The rotten smell disgusted her."
        },
        {
          "word": "fluorescent",
          "partOfSpeech": "adjective",
          "meaning": "glowing brightly",
          "example": "The fluorescent lights lit the room."
        },
        {
          "word": "furious",
          "partOfSpeech": "adjective",
          "meaning": "extremely angry",
          "example": "He was furious at the mistake."
        },
        {
          "word": "gulf",
          "partOfSpeech": "noun",
          "meaning": "large difference or deep bay",
          "example": "There is a gulf between rich and poor."
        },
        {
          "word": "humanities",
          "partOfSpeech": "noun",
          "meaning": "studies of human culture",
          "example": "She majored in the humanities."
        },
        {
          "word": "knot",
          "partOfSpeech": "noun",
          "meaning": "tied loop",
          "example": "He tied a knot in the rope."
        },
        {
          "word": "linguist",
          "partOfSpeech": "noun",
          "meaning": "person who studies languages",
          "example": "The linguist speaks six languages."
        },
        {
          "word": "participant",
          "partOfSpeech": "noun",
          "meaning": "one who takes part",
          "example": "Each participant received a medal."
        },
        {
          "word": "plausible",
          "partOfSpeech": "adjective",
          "meaning": "believable",
          "example": "Her excuse sounded plausible."
        },
        {
          "word": "ritual",
          "partOfSpeech": "noun",
          "meaning": "ceremonial act",
          "example": "The tribe performs a ritual dance."
        },
        {
          "word": "sibling",
          "partOfSpeech": "noun",
          "meaning": "brother or sister",
          "example": "He has three siblings."
        },
        {
          "word": "skinny",
          "partOfSpeech": "adjective",
          "meaning": "very thin",
          "example": "The cat was skinny after being lost."
        },
        {
          "word": "vague",
          "partOfSpeech": "adjective",
          "meaning": "unclear, not specific",
          "example": "He gave a vague answer."
        }
      ]
    },
    "22": {
      "title": "Unit 22 – The Ethics Debate",
      "words": [
        {
          "word": "acid",
          "partOfSpeech": "noun",
          "meaning": "a sour liquid, often corrosive",
          "example": "Lemon juice contains citric acid."
        },
        {
          "word": "administration",
          "partOfSpeech": "noun",
          "meaning": "management of an organization",
          "example": "The school administration set new rules."
        },
        {
          "word": "administrative",
          "partOfSpeech": "adjective",
          "meaning": "related to management",
          "example": "She works in an administrative position."
        },
        {
          "word": "biotechnology",
          "partOfSpeech": "noun",
          "meaning": "technology using living systems",
          "example": "Biotechnology is used to create new medicines."
        },
        {
          "word": "cholesterol",
          "partOfSpeech": "noun",
          "meaning": "a fatty substance in the blood",
          "example": "High cholesterol can cause heart disease."
        },
        {
          "word": "coalition",
          "partOfSpeech": "noun",
          "meaning": "an alliance for joint action",
          "example": "The parties formed a coalition government."
        },
        {
          "word": "deceptive",
          "partOfSpeech": "adjective",
          "meaning": "misleading",
          "example": "The advertisement was deceptive."
        },
        {
          "word": "diabetes",
          "partOfSpeech": "noun",
          "meaning": "disease with high blood sugar",
          "example": "He takes insulin for his diabetes."
        },
        {
          "word": "eliminate",
          "partOfSpeech": "verb",
          "meaning": "to remove completely",
          "example": "They eliminated errors from the report."
        },
        {
          "word": "erosion",
          "partOfSpeech": "noun",
          "meaning": "gradual wearing away",
          "example": "Soil erosion damaged the farmland."
        },
        {
          "word": "ethics",
          "partOfSpeech": "noun",
          "meaning": "moral principles",
          "example": "Business ethics are important for trust."
        },
        {
          "word": "explicit",
          "partOfSpeech": "adjective",
          "meaning": "clear, exact",
          "example": "The teacher gave explicit instructions."
        },
        {
          "word": "framework",
          "partOfSpeech": "noun",
          "meaning": "basic structure",
          "example": "The law provides a framework for reforms."
        },
        {
          "word": "manufacture",
          "partOfSpeech": "verb",
          "meaning": "to produce in large numbers",
          "example": "The factory manufactures cars."
        },
        {
          "word": "mechanism",
          "partOfSpeech": "noun",
          "meaning": "a system of parts working together",
          "example": "The clock’s mechanism stopped working."
        },
        {
          "word": "minimize",
          "partOfSpeech": "verb",
          "meaning": "to reduce to the least amount",
          "example": "He minimized his expenses by cooking at home."
        },
        {
          "word": "nectar",
          "partOfSpeech": "noun",
          "meaning": "sweet liquid in flowers",
          "example": "Bees collect nectar to make honey."
        },
        {
          "word": "notion",
          "partOfSpeech": "noun",
          "meaning": "an idea or belief",
          "example": "She had a notion to start her own business."
        },
        {
          "word": "prone",
          "partOfSpeech": "adjective",
          "meaning": "likely to suffer or do something",
          "example": "He is prone to catching colds in winter."
        },
        {
          "word": "straightforward",
          "partOfSpeech": "adjective",
          "meaning": "simple, honest",
          "example": "The process was straightforward and quick."
        }
      ]
    },
    "23": {
      "title": "Unit 23 – The Cosmos",
      "words": [
        {
          "word": "astronomical",
          "partOfSpeech": "adjective",
          "meaning": "extremely large; relating to astronomy",
          "example": "They discovered an astronomical increase in costs."
        },
        {
          "word": "atom",
          "partOfSpeech": "noun",
          "meaning": "the smallest unit of matter",
          "example": "Atoms combine to form molecules."
        },
        {
          "word": "breadth",
          "partOfSpeech": "noun",
          "meaning": "width or extent",
          "example": "The breadth of his knowledge amazed me."
        },
        {
          "word": "circumference",
          "partOfSpeech": "noun",
          "meaning": "the distance around a circle",
          "example": "The circumference of the circle is 20 cm."
        },
        {
          "word": "comet",
          "partOfSpeech": "noun",
          "meaning": "an icy body in space with a tail",
          "example": "Halley’s Comet appears every 76 years."
        },
        {
          "word": "crater",
          "partOfSpeech": "noun",
          "meaning": "a large hole in the ground",
          "example": "The meteor left a crater on the surface."
        },
        {
          "word": "crescent",
          "partOfSpeech": "noun",
          "meaning": "a moon phase, curved shape",
          "example": "The crescent moon lit the sky."
        },
        {
          "word": "debris",
          "partOfSpeech": "noun",
          "meaning": "scattered remains",
          "example": "The explosion left debris everywhere."
        },
        {
          "word": "despair",
          "partOfSpeech": "noun",
          "meaning": "complete hopelessness",
          "example": "He was in despair after losing his job."
        },
        {
          "word": "embed",
          "partOfSpeech": "verb",
          "meaning": "to fix firmly inside",
          "example": "The jewel was embedded in gold."
        },
        {
          "word": "fragment",
          "partOfSpeech": "noun",
          "meaning": "a small broken piece",
          "example": "She found a fragment of glass."
        },
        {
          "word": "galaxy",
          "partOfSpeech": "noun",
          "meaning": "a system of stars",
          "example": "The Milky Way is our galaxy."
        },
        {
          "word": "gigantic",
          "partOfSpeech": "adjective",
          "meaning": "very large",
          "example": "They saw a gigantic elephant."
        },
        {
          "word": "gloom",
          "partOfSpeech": "noun",
          "meaning": "darkness, sadness",
          "example": "The room was filled with gloom."
        },
        {
          "word": "radiate",
          "partOfSpeech": "verb",
          "meaning": "to give off heat or energy",
          "example": "The sun radiates light and warmth."
        },
        {
          "word": "roam",
          "partOfSpeech": "verb",
          "meaning": "to wander without direction",
          "example": "The cows roamed across the field."
        },
        {
          "word": "solitary",
          "partOfSpeech": "adjective",
          "meaning": "alone",
          "example": "He lived a solitary life in the cabin."
        },
        {
          "word": "spectrum",
          "partOfSpeech": "noun",
          "meaning": "a wide range; band of colors",
          "example": "The rainbow shows the color spectrum."
        },
        {
          "word": "sphere",
          "partOfSpeech": "noun",
          "meaning": "round 3D shape",
          "example": "The Earth is a sphere."
        },
        {
          "word": "status",
          "partOfSpeech": "noun",
          "meaning": "position or rank",
          "example": "She gained social status after her success."
        }
      ]
    },
    "24": {
      "title": "Unit 24 – The Tenant",
      "words": [
        {
          "word": "bankrupt",
          "partOfSpeech": "adjective",
          "meaning": "without money",
          "example": "The company went bankrupt."
        },
        {
          "word": "conform",
          "partOfSpeech": "verb",
          "meaning": "to follow rules or norms",
          "example": "He refused to conform to tradition."
        },
        {
          "word": "employ",
          "partOfSpeech": "verb",
          "meaning": "to give someone work",
          "example": "The factory employs 300 workers."
        },
        {
          "word": "expel",
          "partOfSpeech": "verb",
          "meaning": "to force out",
          "example": "The student was expelled for cheating."
        },
        {
          "word": "extension",
          "partOfSpeech": "noun",
          "meaning": "additional part",
          "example": "They built an extension to the house."
        },
        {
          "word": "forthcoming",
          "partOfSpeech": "adjective",
          "meaning": "about to happen",
          "example": "Her forthcoming book will be released soon."
        },
        {
          "word": "furnish",
          "partOfSpeech": "verb",
          "meaning": "to provide furniture or equipment",
          "example": "They furnished the apartment with modern items."
        },
        {
          "word": "hygiene",
          "partOfSpeech": "noun",
          "meaning": "cleanliness",
          "example": "Good hygiene prevents disease."
        },
        {
          "word": "hygienic",
          "partOfSpeech": "adjective",
          "meaning": "clean, sanitary",
          "example": "The kitchen must remain hygienic."
        },
        {
          "word": "landlord",
          "partOfSpeech": "noun",
          "meaning": "owner who rents property",
          "example": "The landlord raised the rent."
        },
        {
          "word": "lease",
          "partOfSpeech": "noun",
          "meaning": "rental contract",
          "example": "He signed a one-year lease."
        },
        {
          "word": "mandatory",
          "partOfSpeech": "adjective",
          "meaning": "required by law",
          "example": "Wearing helmets is mandatory."
        },
        {
          "word": "mend",
          "partOfSpeech": "verb",
          "meaning": "to fix",
          "example": "She mended the broken chair."
        },
        {
          "word": "mortgage",
          "partOfSpeech": "noun",
          "meaning": "a loan for buying property",
          "example": "They pay a mortgage every month."
        },
        {
          "word": "personnel",
          "partOfSpeech": "noun",
          "meaning": "staff, employees",
          "example": "The company hired more personnel."
        },
        {
          "word": "plumbing",
          "partOfSpeech": "noun",
          "meaning": "water pipes system",
          "example": "The plumber repaired the plumbing."
        },
        {
          "word": "tenant",
          "partOfSpeech": "noun",
          "meaning": "person renting property",
          "example": "The tenant pays rent monthly."
        },
        {
          "word": "trendy",
          "partOfSpeech": "adjective",
          "meaning": "fashionable",
          "example": "She wore trendy clothes."
        },
        {
          "word": "utility",
          "partOfSpeech": "noun",
          "meaning": "service like water, gas, electricity",
          "example": "The rent includes utility bills."
        },
        {
          "word": "whereby",
          "partOfSpeech": "adverb",
          "meaning": "by which",
          "example": "They signed a contract whereby he agreed to pay."
        }
      ]
    },
    "25": {
      "title": "Unit 25 – The Stereotype",
      "words": [
        {
          "word": "aesthetic",
          "partOfSpeech": "adjective",
          "meaning": "concerned with beauty",
          "example": "The design is both practical and aesthetic."
        },
        {
          "word": "arrogant",
          "partOfSpeech": "adjective",
          "meaning": "too proud, self-important",
          "example": "The arrogant man ignored everyone else."
        },
        {
          "word": "bias",
          "partOfSpeech": "noun",
          "meaning": "unfair preference",
          "example": "The judge showed bias in the trial."
        },
        {
          "word": "canyon",
          "partOfSpeech": "noun",
          "meaning": "deep valley with steep sides",
          "example": "The Grand Canyon is famous worldwide."
        },
        {
          "word": "creek",
          "partOfSpeech": "noun",
          "meaning": "small stream",
          "example": "The children played near the creek."
        },
        {
          "word": "drill",
          "partOfSpeech": "noun/verb",
          "meaning": "tool for boring holes; practice",
          "example": "They practiced a fire drill at school."
        },
        {
          "word": "executive",
          "partOfSpeech": "noun",
          "meaning": "high-level manager",
          "example": "The executive made the final decision."
        },
        {
          "word": "fatigue",
          "partOfSpeech": "noun",
          "meaning": "extreme tiredness",
          "example": "He felt fatigue after the long hike."
        },
        {
          "word": "incline",
          "partOfSpeech": "noun/verb",
          "meaning": "slope; to lean toward",
          "example": "They walked up a steep incline."
        },
        {
          "word": "nasty",
          "partOfSpeech": "adjective",
          "meaning": "very unpleasant",
          "example": "He caught a nasty cold."
        },
        {
          "word": "perceive",
          "partOfSpeech": "verb",
          "meaning": "to notice or understand",
          "example": "She perceived a strange sound in the night."
        },
        {
          "word": "primate",
          "partOfSpeech": "noun",
          "meaning": "group of animals including monkeys",
          "example": "Humans are primates."
        },
        {
          "word": "primitive",
          "partOfSpeech": "adjective",
          "meaning": "very simple, early stage",
          "example": "They lived in primitive huts."
        },
        {
          "word": "stereotype",
          "partOfSpeech": "noun",
          "meaning": "oversimplified belief about a group",
          "example": "The stereotype about artists is not always true."
        },
        {
          "word": "sticky",
          "partOfSpeech": "adjective",
          "meaning": "tending to stick",
          "example": "The floor was sticky after the spill."
        },
        {
          "word": "termite",
          "partOfSpeech": "noun",
          "meaning": "insect that eats wood",
          "example": "Termites damaged the furniture."
        },
        {
          "word": "thereby",
          "partOfSpeech": "adverb",
          "meaning": "as a result",
          "example": "He improved his health, thereby living longer."
        },
        {
          "word": "trail",
          "partOfSpeech": "noun/verb",
          "meaning": "path; to follow behind",
          "example": "They hiked along the mountain trail."
        },
        {
          "word": "twig",
          "partOfSpeech": "noun",
          "meaning": "small branch",
          "example": "The bird built a nest with twigs."
        },
        {
          "word": "welfare",
          "partOfSpeech": "noun",
          "meaning": "health and well-being",
          "example": "The government cares about child welfare."
        }
      ]
    },
    "26": {
      "title": "Unit 26 – The Glacier",
      "words": [
        {
          "word": "behalf",
          "partOfSpeech": "noun",
          "meaning": "in the interest of someone",
          "example": "She spoke on behalf of the group."
        },
        {
          "word": "flap",
          "partOfSpeech": "verb/noun",
          "meaning": "to move up and down; a loose piece",
          "example": "The flag flapped in the wind."
        },
        {
          "word": "glacier",
          "partOfSpeech": "noun",
          "meaning": "large mass of moving ice",
          "example": "The glacier slowly melted over centuries."
        },
        {
          "word": "globe",
          "partOfSpeech": "noun",
          "meaning": "the",
          "example": "Earth; a spherical mapHe spun the globe to choose a destination."
        },
        {
          "word": "horizontal",
          "partOfSpeech": "adjective",
          "meaning": "flat, level",
          "example": "Draw a horizontal line across the page."
        },
        {
          "word": "hum",
          "partOfSpeech": "verb/noun",
          "meaning": "to make a continuous sound",
          "example": "The bees hummed in the garden."
        },
        {
          "word": "inventory",
          "partOfSpeech": "noun",
          "meaning": "list of goods",
          "example": "The store checked its inventory."
        },
        {
          "word": "inward",
          "partOfSpeech": "adj/adv",
          "meaning": "directed inside",
          "example": "He took a deep inward breath."
        },
        {
          "word": "loaf",
          "partOfSpeech": "noun",
          "meaning": "a shaped mass of bread",
          "example": "She baked a loaf of bread."
        },
        {
          "word": "oracle",
          "partOfSpeech": "noun",
          "meaning": "a wise person giving advice",
          "example": "They consulted the oracle for guidance."
        },
        {
          "word": "orbit",
          "partOfSpeech": "noun/verb",
          "meaning": "path around something; to circle",
          "example": "The Earth orbits the Sun."
        },
        {
          "word": "overview",
          "partOfSpeech": "noun",
          "meaning": "summary, general view",
          "example": "The manager gave an overview of the plan."
        },
        {
          "word": "preview",
          "partOfSpeech": "noun/verb",
          "meaning": "a sneak look; to show early",
          "example": "We watched a movie preview."
        },
        {
          "word": "previous",
          "partOfSpeech": "adjective",
          "meaning": "earlier",
          "example": "She met him on a previous trip."
        },
        {
          "word": "provide",
          "partOfSpeech": "verb",
          "meaning": "to supply",
          "example": "The teacher provided extra help."
        },
        {
          "word": "recur",
          "partOfSpeech": "verb",
          "meaning": "to happen again",
          "example": "The problem may recur next year."
        },
        {
          "word": "relevant",
          "partOfSpeech": "adjective",
          "meaning": "connected to the topic",
          "example": "Her comment was not relevant to the discussion."
        },
        {
          "word": "rite",
          "partOfSpeech": "noun",
          "meaning": "a religious or formal ceremony",
          "example": "The rite of marriage was performed."
        },
        {
          "word": "stall",
          "partOfSpeech": "noun/verb",
          "meaning": "small shop; to delay",
          "example": "They bought food from a market stall."
        },
        {
          "word": "supernatural",
          "partOfSpeech": "adjective",
          "meaning": "beyond natural laws",
          "example": "The movie was about supernatural powers."
        }
      ]
    },
    "27": {
      "title": "Unit 27 – The Transplant",
      "words": [
        {
          "word": "adapt",
          "partOfSpeech": "verb",
          "meaning": "to adjust to new conditions",
          "example": "He adapted quickly to his new job."
        },
        {
          "word": "biological",
          "partOfSpeech": "adjective",
          "meaning": "relating to biology or life",
          "example": "She studies biological sciences."
        },
        {
          "word": "cellular",
          "partOfSpeech": "adjective",
          "meaning": "relating to cells",
          "example": "The scientist examined cellular structures."
        },
        {
          "word": "dynamic",
          "partOfSpeech": "adjective",
          "meaning": "constantly changing, energetic",
          "example": "The dynamic city never sleeps."
        },
        {
          "word": "fantasy",
          "partOfSpeech": "noun",
          "meaning": "imagination, unreal ideas",
          "example": "He lives in a fantasy world."
        },
        {
          "word": "heredity",
          "partOfSpeech": "noun",
          "meaning": "passing traits from parents to offspring",
          "example": "Eye color is determined by heredity."
        },
        {
          "word": "internal",
          "partOfSpeech": "adjective",
          "meaning": "inside",
          "example": "He had internal injuries."
        },
        {
          "word": "minimal",
          "partOfSpeech": "adjective",
          "meaning": "very small in amount",
          "example": "The damage to the car was minimal."
        },
        {
          "word": "pioneer",
          "partOfSpeech": "noun/verb",
          "meaning": "trailblazer; to develop first",
          "example": "She pioneered new medical treatments."
        },
        {
          "word": "prescribe",
          "partOfSpeech": "verb",
          "meaning": "to order medicine officially",
          "example": "The doctor prescribed antibiotics."
        },
        {
          "word": "respective",
          "partOfSpeech": "adjective",
          "meaning": "belonging separately to each",
          "example": "They returned to their respective homes."
        },
        {
          "word": "revive",
          "partOfSpeech": "verb",
          "meaning": "to bring back to life",
          "example": "The lifeguard revived the swimmer."
        },
        {
          "word": "rigid",
          "partOfSpeech": "adjective",
          "meaning": "stiff, inflexible",
          "example": "The cardboard was too rigid to bend."
        },
        {
          "word": "sequence",
          "partOfSpeech": "noun",
          "meaning": "an ordered series",
          "example": "The dance followed a sequence of steps."
        },
        {
          "word": "substitute",
          "partOfSpeech": "noun/verb",
          "meaning": "replacement; to replace",
          "example": "She substituted sugar with honey."
        },
        {
          "word": "surgeon",
          "partOfSpeech": "noun",
          "meaning": "a doctor who performs surgery",
          "example": "The surgeon operated on his heart."
        },
        {
          "word": "therapy",
          "partOfSpeech": "noun",
          "meaning": "treatment for illness",
          "example": "He is undergoing therapy for his injury."
        },
        {
          "word": "transfer",
          "partOfSpeech": "verb",
          "meaning": "to move from one place to another",
          "example": "He transferred money to her account."
        },
        {
          "word": "transition",
          "partOfSpeech": "noun",
          "meaning": "change from one state to another",
          "example": "The country is in a transition to democracy."
        },
        {
          "word": "transplant",
          "partOfSpeech": "noun/verb",
          "meaning": "to move an organ; the organ itself",
          "example": "She received a heart transplant."
        }
      ]
    },
    "28": {
      "title": "Unit 28 – The Philanthropist",
      "words": [
        {
          "word": "aquarium",
          "partOfSpeech": "noun",
          "meaning": "a tank for keeping fish",
          "example": "They visited the aquarium to see sharks."
        },
        {
          "word": "arbitrary",
          "partOfSpeech": "adjective",
          "meaning": "based on random choice",
          "example": "The rules seemed arbitrary and unfair."
        },
        {
          "word": "autobiography",
          "partOfSpeech": "noun",
          "meaning": "a person’s life story written by themselves",
          "example": "She published her autobiography."
        },
        {
          "word": "convention",
          "partOfSpeech": "noun",
          "meaning": "a large formal meeting",
          "example": "He attended a business convention."
        },
        {
          "word": "gracious",
          "partOfSpeech": "adjective",
          "meaning": "polite, kind",
          "example": "The hostess was very gracious."
        },
        {
          "word": "improve",
          "partOfSpeech": "verb",
          "meaning": "to make better",
          "example": "He improved his grades this year."
        },
        {
          "word": "insulate",
          "partOfSpeech": "verb",
          "meaning": "to cover for protection",
          "example": "They insulated the house against cold."
        },
        {
          "word": "intrigue",
          "partOfSpeech": "verb/noun",
          "meaning": "to interest; a secret plot",
          "example": "The mystery intrigued the readers."
        },
        {
          "word": "longevity",
          "partOfSpeech": "noun",
          "meaning": "long life",
          "example": "Exercise increases longevity."
        },
        {
          "word": "misplace",
          "partOfSpeech": "verb",
          "meaning": "to put in the wrong placeI misplaced my keys again.",
          "example": "Example sentence not provided."
        },
        {
          "word": "naughty",
          "partOfSpeech": "adjective",
          "meaning": "badly behaved",
          "example": "The naughty child broke the vase."
        },
        {
          "word": "norm",
          "partOfSpeech": "noun",
          "meaning": "standard of behavior",
          "example": "Helping others is the norm in this community."
        },
        {
          "word": "orangutan",
          "partOfSpeech": "noun",
          "meaning": "a large ape from",
          "example": "AsiaThe orangutan swung through the trees."
        },
        {
          "word": "overload",
          "partOfSpeech": "verb/noun",
          "meaning": "to burden too much; excess load",
          "example": "The truck was overloaded with goods."
        },
        {
          "word": "philanthropy",
          "partOfSpeech": "noun",
          "meaning": "giving to charity",
          "example": "The millionaire was known for his philanthropy."
        },
        {
          "word": "probe",
          "partOfSpeech": "verb/noun",
          "meaning": "to investigate; a tool for investigation",
          "example": "The scientist probed the soil samples."
        },
        {
          "word": "recipient",
          "partOfSpeech": "noun",
          "meaning": "person who receives",
          "example": "The award recipient thanked the committee."
        },
        {
          "word": "reptile",
          "partOfSpeech": "noun",
          "meaning": "cold-blooded animal like snakes",
          "example": "The zoo had many reptiles."
        },
        {
          "word": "thrive",
          "partOfSpeech": "verb",
          "meaning": "to grow strongly",
          "example": "The plants thrived in the greenhouse."
        },
        {
          "word": "ultimate",
          "partOfSpeech": "adjective",
          "meaning": "final, best",
          "example": "Winning the trophy was his ultimate goal."
        }
      ]
    },
    "29": {
      "title": "Unit 29 – The Fossil",
      "words": [
        {
          "word": "antique",
          "partOfSpeech": "noun/adj",
          "meaning": "old and valuable",
          "example": "They collect antique furniture from the 18th century."
        },
        {
          "word": "applicant",
          "partOfSpeech": "noun",
          "meaning": "person who applies for something",
          "example": "Each applicant must submit a résumé."
        },
        {
          "word": "artifact",
          "partOfSpeech": "noun",
          "meaning": "object from the past",
          "example": "The museum displayed ancient artifacts."
        },
        {
          "word": "authentic",
          "partOfSpeech": "adjective",
          "meaning": "genuine, real",
          "example": "The signature was confirmed as authentic."
        },
        {
          "word": "chronology",
          "partOfSpeech": "noun",
          "meaning": "order of events in time",
          "example": "The book explains the chronology of the war."
        },
        {
          "word": "diplomat",
          "partOfSpeech": "noun",
          "meaning": "official representing a country",
          "example": "The diplomat attended the peace talks."
        },
        {
          "word": "epic",
          "partOfSpeech": "noun/adj",
          "meaning": "long heroic story; grand",
          "example": "Homer’s Iliad is an epic poem."
        },
        {
          "word": "excerpt",
          "partOfSpeech": "noun",
          "meaning": "a short part taken from text",
          "example": "She read an excerpt from the novel."
        },
        {
          "word": "fossil",
          "partOfSpeech": "noun",
          "meaning": "preserved remains of ancient life",
          "example": "They found a dinosaur fossil in the desert."
        },
        {
          "word": "humiliate",
          "partOfSpeech": "verb",
          "meaning": "to deeply embarrass",
          "example": "He was humiliated in front of his classmates."
        },
        {
          "word": "lyric",
          "partOfSpeech": "noun",
          "meaning": "words of a song",
          "example": "The lyrics of that song are beautiful."
        },
        {
          "word": "majesty",
          "partOfSpeech": "noun",
          "meaning": "greatness, royal dignity",
          "example": "The mountain rose in all its majesty."
        },
        {
          "word": "monarch",
          "partOfSpeech": "noun",
          "meaning": "king or queen",
          "example": "The monarch ruled for forty years."
        },
        {
          "word": "precede",
          "partOfSpeech": "verb",
          "meaning": "to come beforeA short speech preceded the ceremony.",
          "example": "Example sentence not provided."
        },
        {
          "word": "punctual",
          "partOfSpeech": "adjective",
          "meaning": "on time",
          "example": "She is always punctual for meetings."
        },
        {
          "word": "recruit",
          "partOfSpeech": "verb/noun",
          "meaning": "to enlist new people; a new member",
          "example": "The army recruited 500 soldiers."
        },
        {
          "word": "refund",
          "partOfSpeech": "noun/verb",
          "meaning": "money returned; to give back money",
          "example": "She received a refund for the broken phone."
        },
        {
          "word": "register",
          "partOfSpeech": "verb/noun",
          "meaning": "to sign up; official list",
          "example": "They registered for the language course."
        },
        {
          "word": "renown",
          "partOfSpeech": "noun",
          "meaning": "fame, honor",
          "example": "The scientist achieved worldwide renown."
        },
        {
          "word": "tusk",
          "partOfSpeech": "noun",
          "meaning": "long tooth of an elephant",
          "example": "The elephant’s tusks were huge."
        }
      ]
    },
    "30": {
      "title": "Unit 30 – The Reunion",
      "words": [
        {
          "word": "burden",
          "partOfSpeech": "noun/verb",
          "meaning": "heavy load; to cause hardship",
          "example": "He carried the burden of responsibility."
        },
        {
          "word": "compromise",
          "partOfSpeech": "noun/verb",
          "meaning": "agreement through concession; to settle",
          "example": "They reached a compromise after hours of debate."
        },
        {
          "word": "craft",
          "partOfSpeech": "noun/verb",
          "meaning": "skill in making; to make skillfully",
          "example": "The artist crafted a wooden bowl."
        },
        {
          "word": "crook",
          "partOfSpeech": "noun",
          "meaning": "criminal, dishonest person",
          "example": "The police arrested the crook for theft."
        },
        {
          "word": "currency",
          "partOfSpeech": "noun",
          "meaning": "system of money",
          "example": "The dollar is the official currency of the US."
        },
        {
          "word": "enigma",
          "partOfSpeech": "noun",
          "meaning": "puzzle, mystery",
          "example": "The cause of the fire remains an enigma."
        },
        {
          "word": "fragile",
          "partOfSpeech": "adjective",
          "meaning": "easily broken",
          "example": "The vase was fragile and broke easily."
        },
        {
          "word": "hybrid",
          "partOfSpeech": "noun/adj",
          "meaning": "mixture, combination",
          "example": "The car is a hybrid of gas and electricity."
        },
        {
          "word": "innocence",
          "partOfSpeech": "noun",
          "meaning": "the state of not being guilty",
          "example": "The child’s innocence was touching."
        },
        {
          "word": "merge",
          "partOfSpeech": "verb",
          "meaning": "to combine into one",
          "example": "The two companies merged last year."
        },
        {
          "word": "moderate",
          "partOfSpeech": "adjective",
          "meaning": "not extreme",
          "example": "She takes a moderate approach to politics."
        },
        {
          "word": "overwhelm",
          "partOfSpeech": "verb",
          "meaning": "to overpower or flood",
          "example": "He was overwhelmed with work."
        },
        {
          "word": "perception",
          "partOfSpeech": "noun",
          "meaning": "understanding through the senses",
          "example": "Her perception of art is unique."
        },
        {
          "word": "reunion",
          "partOfSpeech": "noun",
          "meaning": "a meeting after separation",
          "example": "They planned a school reunion."
        },
        {
          "word": "rig",
          "partOfSpeech": "verb/noun",
          "meaning": "to arrange unfairly; equipment",
          "example": "They rigged the election results."
        },
        {
          "word": "shiver",
          "partOfSpeech": "verb/noun",
          "meaning": "to shake from cold or fear",
          "example": "She shivered in the freezing wind."
        },
        {
          "word": "sociable",
          "partOfSpeech": "adjective",
          "meaning": "friendly, liking company",
          "example": "He is a sociable and outgoing man."
        },
        {
          "word": "talkative",
          "partOfSpeech": "adjective",
          "meaning": "fond of talking",
          "example": "The child was very talkative in class."
        },
        {
          "word": "tow",
          "partOfSpeech": "verb/noun",
          "meaning": "to pull a vehicle; the act of pulling",
          "example": "The truck towed the broken car."
        },
        {
          "word": "tramp",
          "partOfSpeech": "noun/verb",
          "meaning": "homeless person; to walk heavily",
          "example": "They heard the tramp of soldiers’ boots."
        }
      ]
    }
  }
};

// Generate books with actual data (Books 3-5) and empty structure (Book 6)
function generateSampleData() {
    // Add Book 3 with actual data
    vocabularyData.books[3] = book3Data;
    
    // Add Book 4 with actual data
    vocabularyData.books[4] = book4Data;
    
    // Add Book 5 with actual data
    vocabularyData.books[5] = book5Data;
    
    // Add empty Book 6 (waiting for file upload)
    vocabularyData.books[6] = {
  "title": "Book 6 - Advanced Level",
  "units": {
    "1": {
      "title": "Unit 1 – The Whale Hunt",
      "words": [
        {
          "word": "adverse",
          "partOfSpeech": "adj",
          "meaning": "harmful, unfavorable.They had to cancel the picnic because of the adverse weather",
          "example": "Example not provided."
        },
        {
          "word": "alternate",
          "partOfSpeech": "v/adj",
          "meaning": "to take turns; happening every other.She alternates between working at home and in the office",
          "example": "Example not provided."
        },
        {
          "word": "biodegradable",
          "partOfSpeech": "adj",
          "meaning": "able to break down naturally.We should use biodegradable bags to protect the environment",
          "example": "Example not provided."
        },
        {
          "word": "boxed",
          "partOfSpeech": "adj",
          "meaning": "contained in a box.She gave him a boxed set of novels",
          "example": "Example not provided."
        },
        {
          "word": "choke",
          "partOfSpeech": "v",
          "meaning": "to be unable to breathe because something is blocking the throat.The child choked on a piece of candy",
          "example": "Example not provided."
        },
        {
          "word": "convenient",
          "partOfSpeech": "adj",
          "meaning": "easy to use, suitable.Online shopping is very convenient for busy people",
          "example": "Example not provided."
        },
        {
          "word": "discard",
          "partOfSpeech": "v",
          "meaning": "to throw away.He discarded his old shoes",
          "example": "Example not provided."
        },
        {
          "word": "dolphin",
          "partOfSpeech": "n",
          "meaning": "a smart sea animal related to whales.We saw dolphins swimming near the boat",
          "example": "Example not provided."
        },
        {
          "word": "ecologically",
          "partOfSpeech": "adv",
          "meaning": "related to the environment.The factory tries to operate ecologically by reducing waste",
          "example": "Example not provided."
        },
        {
          "word": "fatal",
          "partOfSpeech": "adj",
          "meaning": "causing death.The driver suffered fatal injuries in the crash",
          "example": "Example not provided."
        },
        {
          "word": "incidence",
          "partOfSpeech": "n",
          "meaning": "the rate or occurrence of something.The incidence of flu rises in winter",
          "example": "Example not provided."
        },
        {
          "word": "municipal",
          "partOfSpeech": "adj",
          "meaning": "related to a town or city government.The municipal council approved the new park",
          "example": "Example not provided."
        },
        {
          "word": "overuse",
          "partOfSpeech": "v/n",
          "meaning": "to use too much.Overuse of antibiotics can be dangerous",
          "example": "Example not provided."
        },
        {
          "word": "pond",
          "partOfSpeech": "n",
          "meaning": "a small body of still water.The ducks were swimming in the pond",
          "example": "Example not provided."
        },
        {
          "word": "recycle",
          "partOfSpeech": "v",
          "meaning": "to reuse waste materials.We recycle plastic bottles to reduce trash",
          "example": "Example not provided."
        },
        {
          "word": "reusable",
          "partOfSpeech": "adj",
          "meaning": "able to be used again.He carries a reusable water bottle",
          "example": "Example not provided."
        },
        {
          "word": "stuffed",
          "partOfSpeech": "adj",
          "meaning": "filled with something.The teddy bear is stuffed with cotton",
          "example": "Example not provided."
        },
        {
          "word": "tragic",
          "partOfSpeech": "adj",
          "meaning": "very sad, causing sorrow.The movie tells a tragic love story",
          "example": "Example not provided."
        },
        {
          "word": "utilize",
          "partOfSpeech": "v",
          "meaning": "to make use of something.We must utilize our resources wisely",
          "example": "Example not provided."
        },
        {
          "word": "whale",
          "partOfSpeech": "n",
          "meaning": "the largest sea animal.The blue whale is the biggest animal on Earth",
          "example": "Example not provided."
        }
      ]
    },
    "2": {
      "title": "Unit 2 – The Parade",
      "words": [
        {
          "word": "amateur",
          "partOfSpeech": "n",
          "meaning": "a person who does something for enjoyment, not professionally.He is an amateur photographer",
          "example": "Example not provided."
        },
        {
          "word": "ambiguous",
          "partOfSpeech": "adj",
          "meaning": "unclear, having more than one meaning.His ambiguous answer confused everyone",
          "example": "Example not provided."
        },
        {
          "word": "anonymous",
          "partOfSpeech": "adj",
          "meaning": "with no name given.The letter was written by an anonymous sender",
          "example": "Example not provided."
        },
        {
          "word": "attain",
          "partOfSpeech": "v",
          "meaning": "to reach or achieve.She attained her goal of becoming a doctor",
          "example": "Example not provided."
        },
        {
          "word": "autonomy",
          "partOfSpeech": "n",
          "meaning": "independence, self-government.The region was granted autonomy from the central government",
          "example": "Example not provided."
        },
        {
          "word": "concession",
          "partOfSpeech": "n",
          "meaning": "something given up in an agreement.The union made concessions to reach a deal",
          "example": "Example not provided."
        },
        {
          "word": "decay",
          "partOfSpeech": "v/n",
          "meaning": "to rot or break down.The fruit began to decay after a week",
          "example": "Example not provided."
        },
        {
          "word": "dwell",
          "partOfSpeech": "v",
          "meaning": "to live in a place.They dwell in a small mountain village",
          "example": "Example not provided."
        },
        {
          "word": "enlighten",
          "partOfSpeech": "v",
          "meaning": "to give knowledge or understanding.The book enlightened me about history",
          "example": "Example not provided."
        },
        {
          "word": "enrich",
          "partOfSpeech": "v",
          "meaning": "to improve or make richer.Travel can enrich your life",
          "example": "Example not provided."
        },
        {
          "word": "flourish",
          "partOfSpeech": "v",
          "meaning": "to grow well, succeed.Flowers flourish in warm climates",
          "example": "Example not provided."
        },
        {
          "word": "geometry",
          "partOfSpeech": "n",
          "meaning": "the study of shapes and space.He is studying geometry in school",
          "example": "Example not provided."
        },
        {
          "word": "gleam",
          "partOfSpeech": "v/n",
          "meaning": "to shine softly; a small bright light.Her eyes gleamed with excitement",
          "example": "Example not provided."
        },
        {
          "word": "greed",
          "partOfSpeech": "n",
          "meaning": "a strong desire for more.His greed for money caused his downfall",
          "example": "Example not provided."
        },
        {
          "word": "harmony",
          "partOfSpeech": "n",
          "meaning": "agreement, peace.They live in harmony with nature",
          "example": "Example not provided."
        },
        {
          "word": "indigenous",
          "partOfSpeech": "adj",
          "meaning": "native to a place.The kangaroo is indigenous to Australia",
          "example": "Example not provided."
        },
        {
          "word": "jurisdiction",
          "partOfSpeech": "n",
          "meaning": "the legal power or authority.The case falls under federal jurisdiction",
          "example": "Example not provided."
        },
        {
          "word": "parade",
          "partOfSpeech": "n",
          "meaning": "a public procession or celebration.We watched the parade on Independence Day",
          "example": "Example not provided."
        },
        {
          "word": "statue",
          "partOfSpeech": "n",
          "meaning": "a carved or cast figure.The city has a statue of its founder",
          "example": "Example not provided."
        },
        {
          "word": "virgin",
          "partOfSpeech": "adj",
          "meaning": "untouched, pure.The hikers explored the virgin forest",
          "example": "Example not provided."
        }
      ]
    },
    "3": {
      "title": "Unit 3 – The Robot",
      "words": [
        {
          "word": "abnormal",
          "partOfSpeech": "adj",
          "meaning": "not normal, unusual.The doctor found an abnormal growth on the patient’s skin",
          "example": "Example not provided."
        },
        {
          "word": "absent",
          "partOfSpeech": "adj",
          "meaning": "not present.She was absent from class yesterday",
          "example": "Example not provided."
        },
        {
          "word": "adjacent",
          "partOfSpeech": "adj",
          "meaning": "next to something.The park is adjacent to the school",
          "example": "Example not provided."
        },
        {
          "word": "aluminum",
          "partOfSpeech": "n",
          "meaning": "a light, silver-colored metal.The cans are made of aluminum",
          "example": "Example not provided."
        },
        {
          "word": "applicable",
          "partOfSpeech": "adj",
          "meaning": "relevant, suitable.The rule is not applicable to this case",
          "example": "Example not provided."
        },
        {
          "word": "artificial",
          "partOfSpeech": "adj",
          "meaning": "made by people, not natural.They decorated the room with artificial flowers",
          "example": "Example not provided."
        },
        {
          "word": "bicycle",
          "partOfSpeech": "n",
          "meaning": "a vehicle with two wheels.He rides his bicycle to school",
          "example": "Example not provided."
        },
        {
          "word": "broker",
          "partOfSpeech": "n",
          "meaning": "a person who arranges deals.She works as a stockbroker in the city",
          "example": "Example not provided."
        },
        {
          "word": "bureaucracy",
          "partOfSpeech": "n",
          "meaning": "a system of many officials.The project was delayed by bureaucracy",
          "example": "Example not provided."
        },
        {
          "word": "configure",
          "partOfSpeech": "v",
          "meaning": "to arrange or set up.The software is configured for beginners",
          "example": "Example not provided."
        },
        {
          "word": "consolidate",
          "partOfSpeech": "v",
          "meaning": "to combine or strengthen.The two companies consolidated to save money",
          "example": "Example not provided."
        },
        {
          "word": "convenience",
          "partOfSpeech": "n",
          "meaning": "ease of use.The store is open 24 hours for customers’ convenience",
          "example": "Example not provided."
        },
        {
          "word": "deduct",
          "partOfSpeech": "v",
          "meaning": "to take away from a total.The bank deducts fees every month",
          "example": "Example not provided."
        },
        {
          "word": "deem",
          "partOfSpeech": "v",
          "meaning": "to consider or judge.The teacher deemed his answer correct",
          "example": "Example not provided."
        },
        {
          "word": "entrepreneur",
          "partOfSpeech": "n",
          "meaning": "a person who starts a business.The young entrepreneur opened a new café",
          "example": "Example not provided."
        },
        {
          "word": "evenly",
          "partOfSpeech": "adv",
          "meaning": "in equal amounts.The cake was cut evenly among the children",
          "example": "Example not provided."
        },
        {
          "word": "fiscal",
          "partOfSpeech": "adj",
          "meaning": "related to money or finance.The government announced new fiscal policies",
          "example": "Example not provided."
        },
        {
          "word": "franchise",
          "partOfSpeech": "n",
          "meaning": "a business right given by a company.He owns a fast-food franchise",
          "example": "Example not provided."
        },
        {
          "word": "ideological",
          "partOfSpeech": "adj",
          "meaning": "based on ideas or beliefs.The debate was driven by ideological differences",
          "example": "Example not provided."
        },
        {
          "word": "robot",
          "partOfSpeech": "n",
          "meaning": "a machine that can do work.The factory uses robots to build cars",
          "example": "Example not provided."
        }
      ]
    },
    "4": {
      "title": "Unit 4 – The Prairie",
      "words": [
        {
          "word": "abbey",
          "partOfSpeech": "n",
          "meaning": "a religious building where monks or nuns live.Tourists visited the old abbey on the hill",
          "example": "Example not provided."
        },
        {
          "word": "abundant",
          "partOfSpeech": "adj",
          "meaning": "existing in large amounts.The forest is abundant with wildlife",
          "example": "Example not provided."
        },
        {
          "word": "adjoin",
          "partOfSpeech": "v",
          "meaning": "to be next to.Their land adjoins the river",
          "example": "Example not provided."
        },
        {
          "word": "ample",
          "partOfSpeech": "adj",
          "meaning": "more than enough.We had ample food for everyone",
          "example": "Example not provided."
        },
        {
          "word": "arid",
          "partOfSpeech": "adj",
          "meaning": "very dry.Few plants grow in this arid climate",
          "example": "Example not provided."
        },
        {
          "word": "cathedral",
          "partOfSpeech": "n",
          "meaning": "a large important church.The cathedral is famous for its stained glass windows",
          "example": "Example not provided."
        },
        {
          "word": "crisis",
          "partOfSpeech": "n",
          "meaning": "a time of great difficulty.The country faced an economic crisis",
          "example": "Example not provided."
        },
        {
          "word": "deprive",
          "partOfSpeech": "v",
          "meaning": "to take something away.The war deprived them of their homes",
          "example": "Example not provided."
        },
        {
          "word": "drought",
          "partOfSpeech": "n",
          "meaning": "a long period without rain.The drought ruined the harvest",
          "example": "Example not provided."
        },
        {
          "word": "eligible",
          "partOfSpeech": "adj",
          "meaning": "qualified, allowed.He is eligible to vote at 18",
          "example": "Example not provided."
        },
        {
          "word": "fast",
          "partOfSpeech": "n",
          "meaning": "a period of not eating.Muslims observe a fast during Ramadan",
          "example": "Example not provided."
        },
        {
          "word": "grumble",
          "partOfSpeech": "v",
          "meaning": "to complain quietly.The workers grumbled about low pay",
          "example": "Example not provided."
        },
        {
          "word": "inland",
          "partOfSpeech": "adj",
          "meaning": "away from the sea.They traveled inland to avoid the storm",
          "example": "Example not provided."
        },
        {
          "word": "moisture",
          "partOfSpeech": "n",
          "meaning": "small amounts of water.Plants need moisture to grow",
          "example": "Example not provided."
        },
        {
          "word": "nonetheless",
          "partOfSpeech": "adv",
          "meaning": "in spite of that.It was raining; nonetheless, we went hiking",
          "example": "Example not provided."
        },
        {
          "word": "oath",
          "partOfSpeech": "n",
          "meaning": "a serious promise.The president swore an oath of office",
          "example": "Example not provided."
        },
        {
          "word": "prairie",
          "partOfSpeech": "n",
          "meaning": "flat grassland.Buffalo once roamed the prairie",
          "example": "Example not provided."
        },
        {
          "word": "rugged",
          "partOfSpeech": "adj",
          "meaning": "rough, uneven.They climbed the rugged mountains",
          "example": "Example not provided."
        },
        {
          "word": "scarce",
          "partOfSpeech": "adj",
          "meaning": "rare, not enough.Water is scarce in deserts",
          "example": "Example not provided."
        },
        {
          "word": "speculate",
          "partOfSpeech": "v",
          "meaning": "to guess or think about.Scientists speculate about life on other planets",
          "example": "Example not provided."
        }
      ]
    },
    "5": {
      "title": "Unit 5 – The Parasite",
      "words": [
        {
          "word": "aquatic",
          "partOfSpeech": "adj",
          "meaning": "living in water.Fish are aquatic animals",
          "example": "Example not provided."
        },
        {
          "word": "biosphere",
          "partOfSpeech": "n",
          "meaning": "the regions of Earth where life exists.Pollution harms the biosphere",
          "example": "Example not provided."
        },
        {
          "word": "bizarre",
          "partOfSpeech": "adj",
          "meaning": "very strange.He wore a bizarre costume to the party",
          "example": "Example not provided."
        },
        {
          "word": "Celsius",
          "partOfSpeech": "adj/n",
          "meaning": "a temperature scale.The temperature was 20 degrees Celsius",
          "example": "Example not provided."
        },
        {
          "word": "coarse",
          "partOfSpeech": "adj",
          "meaning": "rough in texture.The cloth felt coarse to the touch",
          "example": "Example not provided."
        },
        {
          "word": "companion",
          "partOfSpeech": "n",
          "meaning": "a friend.The dog is her constant companion",
          "example": "Example not provided."
        },
        {
          "word": "digest",
          "partOfSpeech": "v",
          "meaning": "to break down food in the stomach.It takes time to digest a big meal",
          "example": "Example not provided."
        },
        {
          "word": "duration",
          "partOfSpeech": "n",
          "meaning": "the length of time something lasts.He stayed for the duration of the movie",
          "example": "Example not provided."
        },
        {
          "word": "ecology",
          "partOfSpeech": "n",
          "meaning": "the study of the environment.She studies ecology at university",
          "example": "Example not provided."
        },
        {
          "word": "feat",
          "partOfSpeech": "n",
          "meaning": "an amazing achievement.Climbing Everest is a great feat",
          "example": "Example not provided."
        },
        {
          "word": "infinite",
          "partOfSpeech": "adj",
          "meaning": "without end.The universe seems infinite",
          "example": "Example not provided."
        },
        {
          "word": "nucleus",
          "partOfSpeech": "n",
          "meaning": "the center part of a cell or atom.The cell’s nucleus controls its activity",
          "example": "Example not provided."
        },
        {
          "word": "parasite",
          "partOfSpeech": "n",
          "meaning": "an organism that lives off another.The parasite feeds on the host animal",
          "example": "Example not provided."
        },
        {
          "word": "prominent",
          "partOfSpeech": "adj",
          "meaning": "important, well-known.She is a prominent scientist",
          "example": "Example not provided."
        },
        {
          "word": "repetitive",
          "partOfSpeech": "adj",
          "meaning": "happening again and again.The job is boring and repetitive",
          "example": "Example not provided."
        },
        {
          "word": "reproductive",
          "partOfSpeech": "adj",
          "meaning": "related to producing offspring.The reproductive system is essential for life",
          "example": "Example not provided."
        },
        {
          "word": "temperate",
          "partOfSpeech": "adj",
          "meaning": "mild, not extreme.They enjoy the temperate climate of the region",
          "example": "Example not provided."
        },
        {
          "word": "tolerance",
          "partOfSpeech": "n",
          "meaning": "the ability to accept differences.We should show tolerance toward others",
          "example": "Example not provided."
        },
        {
          "word": "undergo",
          "partOfSpeech": "v",
          "meaning": "to experience or go through.He will undergo surgery tomorrow",
          "example": "Example not provided."
        },
        {
          "word": "vulnerable",
          "partOfSpeech": "adj",
          "meaning": "easily hurt or harmed.Children are vulnerable to illness",
          "example": "Example not provided."
        }
      ]
    },
    "6": {
      "title": "Unit 6 – The Peninsula",
      "words": [
        {
          "word": "archaic",
          "partOfSpeech": "adj",
          "meaning": "very old, no longer in use.That archaic law is no longer enforced",
          "example": "Example not provided."
        },
        {
          "word": "brass",
          "partOfSpeech": "n",
          "meaning": "a bright yellow metal made of copper and zinc.The door handles were made of brass",
          "example": "Example not provided."
        },
        {
          "word": "capitalism",
          "partOfSpeech": "n",
          "meaning": "an economic system where businesses are privately owned.Capitalism encourages competition in the market",
          "example": "Example not provided."
        },
        {
          "word": "component",
          "partOfSpeech": "n",
          "meaning": "a part of something.The engine has many small components",
          "example": "Example not provided."
        },
        {
          "word": "dependence",
          "partOfSpeech": "n",
          "meaning": "reliance on something.His dependence on coffee is worrying",
          "example": "Example not provided."
        },
        {
          "word": "diminish",
          "partOfSpeech": "v",
          "meaning": "to become smaller.The pain diminished after taking medicine",
          "example": "Example not provided."
        },
        {
          "word": "drawback",
          "partOfSpeech": "n",
          "meaning": "a disadvantage.The only drawback of the car is its high cost",
          "example": "Example not provided."
        },
        {
          "word": "impose",
          "partOfSpeech": "v",
          "meaning": "to force something on others.The government imposed new taxes",
          "example": "Example not provided."
        },
        {
          "word": "industry",
          "partOfSpeech": "n",
          "meaning": "business or trade.Tourism is a major industry in Italy",
          "example": "Example not provided."
        },
        {
          "word": "managerial",
          "partOfSpeech": "adj",
          "meaning": "relating to managers.She was promoted to a managerial position",
          "example": "Example not provided."
        },
        {
          "word": "medieval",
          "partOfSpeech": "adj",
          "meaning": "from the Middle Ages.The castle is a medieval building",
          "example": "Example not provided."
        },
        {
          "word": "obsolete",
          "partOfSpeech": "adj",
          "meaning": "no longer in use.CD players are becoming obsolete",
          "example": "Example not provided."
        },
        {
          "word": "oriented",
          "partOfSpeech": "adj",
          "meaning": "directed toward something.The course is job-oriented",
          "example": "Example not provided."
        },
        {
          "word": "peninsula",
          "partOfSpeech": "n",
          "meaning": "land almost surrounded by water.Italy is a peninsula in southern Europe",
          "example": "Example not provided."
        },
        {
          "word": "prestige",
          "partOfSpeech": "n",
          "meaning": "respect or admiration.The award gave her prestige in her field",
          "example": "Example not provided."
        },
        {
          "word": "proportion",
          "partOfSpeech": "n",
          "meaning": "a part compared to the whole.A large proportion of the class passed",
          "example": "Example not provided."
        },
        {
          "word": "radical",
          "partOfSpeech": "adj",
          "meaning": "extreme or revolutionary.He proposed a radical change in policy",
          "example": "Example not provided."
        },
        {
          "word": "refute",
          "partOfSpeech": "v",
          "meaning": "to prove wrong.The lawyer refuted the witness’s story",
          "example": "Example not provided."
        },
        {
          "word": "spectacular",
          "partOfSpeech": "adj",
          "meaning": "very impressive.We enjoyed a spectacular fireworks display",
          "example": "Example not provided."
        },
        {
          "word": "weave",
          "partOfSpeech": "v",
          "meaning": "to make cloth by crossing threads.She weaved a basket from reeds",
          "example": "Example not provided."
        }
      ]
    },
    "7": {
      "title": "Unit 7 – The Tomato Farm",
      "words": [
        {
          "word": "accountant",
          "partOfSpeech": "n",
          "meaning": "a person who manages financial records.The accountant prepared the company’s tax returns",
          "example": "Example not provided."
        },
        {
          "word": "capitalist",
          "partOfSpeech": "n",
          "meaning": "a supporter of capitalism.The capitalist invested in new businesses",
          "example": "Example not provided."
        },
        {
          "word": "contempt",
          "partOfSpeech": "n",
          "meaning": "a strong dislike or lack of respect.He looked at the liar with contempt",
          "example": "Example not provided."
        },
        {
          "word": "crop",
          "partOfSpeech": "n",
          "meaning": "plants grown for food.Wheat is an important crop",
          "example": "Example not provided."
        },
        {
          "word": "dedicate",
          "partOfSpeech": "v",
          "meaning": "to devote effort or time.She dedicated her life to helping the poor",
          "example": "Example not provided."
        },
        {
          "word": "ditch",
          "partOfSpeech": "n",
          "meaning": "a narrow hole dug in the ground.The farmer dug a ditch for irrigation",
          "example": "Example not provided."
        },
        {
          "word": "enterprise",
          "partOfSpeech": "n",
          "meaning": "a business or project.The new enterprise created many jobs",
          "example": "Example not provided."
        },
        {
          "word": "finance",
          "partOfSpeech": "n/v",
          "meaning": "the management of money.She works in the finance department",
          "example": "Example not provided."
        },
        {
          "word": "indifferent",
          "partOfSpeech": "adj",
          "meaning": "not caring.He was indifferent to the outcome",
          "example": "Example not provided."
        },
        {
          "word": "irrigate",
          "partOfSpeech": "v",
          "meaning": "to supply water to land.The farmer irrigated the dry fields",
          "example": "Example not provided."
        },
        {
          "word": "maximize",
          "partOfSpeech": "v",
          "meaning": "to increase to the most.We need to maximize efficiency at work",
          "example": "Example not provided."
        },
        {
          "word": "monetary",
          "partOfSpeech": "adj",
          "meaning": "related to money.The central bank sets monetary policy",
          "example": "Example not provided."
        },
        {
          "word": "precaution",
          "partOfSpeech": "n",
          "meaning": "something done to prevent harm.He wore a mask as a precaution",
          "example": "Example not provided."
        },
        {
          "word": "preliminary",
          "partOfSpeech": "adj",
          "meaning": "happening before the main event.They held a preliminary meeting",
          "example": "Example not provided."
        },
        {
          "word": "saturate",
          "partOfSpeech": "v",
          "meaning": "to soak completely.The rain saturated the ground",
          "example": "Example not provided."
        },
        {
          "word": "simplicity",
          "partOfSpeech": "n",
          "meaning": "the state of being simple.The simplicity of the design impressed us",
          "example": "Example not provided."
        },
        {
          "word": "sow",
          "partOfSpeech": "v",
          "meaning": "to plant seeds.Farmers sow wheat in the spring",
          "example": "Example not provided."
        },
        {
          "word": "spade",
          "partOfSpeech": "n",
          "meaning": "a tool for digging.He dug the soil with a spade",
          "example": "Example not provided."
        },
        {
          "word": "tomato",
          "partOfSpeech": "n",
          "meaning": "a red fruit often eaten as a vegetable.She made a salad with fresh tomatoes",
          "example": "Example not provided."
        },
        {
          "word": "upcoming",
          "partOfSpeech": "adj",
          "meaning": "happening soon.They are excited for the upcoming holiday",
          "example": "Example not provided."
        }
      ]
    },
    "8": {
      "title": "Unit 8 – The Tattoo",
      "words": [
        {
          "word": "anthropology",
          "partOfSpeech": "n",
          "meaning": "the study of human societies and cultures.She is taking a class in anthropology",
          "example": "Example not provided."
        },
        {
          "word": "applaud",
          "partOfSpeech": "v",
          "meaning": "to clap hands in approval.The audience applauded after the performance",
          "example": "Example not provided."
        },
        {
          "word": "appoint",
          "partOfSpeech": "v",
          "meaning": "to officially choose someone.They appointed her as the new manager",
          "example": "Example not provided."
        },
        {
          "word": "compatible",
          "partOfSpeech": "adj",
          "meaning": "able to work or exist together.This software is not compatible with my computer",
          "example": "Example not provided."
        },
        {
          "word": "competence",
          "partOfSpeech": "n",
          "meaning": "the ability to do something well.Her competence as a teacher impressed everyone",
          "example": "Example not provided."
        },
        {
          "word": "confer",
          "partOfSpeech": "v",
          "meaning": "to discuss and exchange ideas.The scientists conferred about the discovery",
          "example": "Example not provided."
        },
        {
          "word": "consecutive",
          "partOfSpeech": "adj",
          "meaning": "following one after another.He won the award for three consecutive years",
          "example": "Example not provided."
        },
        {
          "word": "crude",
          "partOfSpeech": "adj",
          "meaning": "simple, not well made.They lived in a crude wooden hut",
          "example": "Example not provided."
        },
        {
          "word": "cube",
          "partOfSpeech": "n",
          "meaning": "a solid shape with six equal square sides.The box was shaped like a cube",
          "example": "Example not provided."
        },
        {
          "word": "feedback",
          "partOfSpeech": "n",
          "meaning": "opinions about performance.The teacher gave the students feedback on their essays",
          "example": "Example not provided."
        },
        {
          "word": "ignorance",
          "partOfSpeech": "n",
          "meaning": "lack of knowledge.His ignorance of the law caused him problems",
          "example": "Example not provided."
        },
        {
          "word": "masculine",
          "partOfSpeech": "adj",
          "meaning": "having qualities of a man.The shirt has a masculine style",
          "example": "Example not provided."
        },
        {
          "word": "monument",
          "partOfSpeech": "n",
          "meaning": "a structure built to honor something.The monument was built to honor the soldiers",
          "example": "Example not provided."
        },
        {
          "word": "muscular",
          "partOfSpeech": "adj",
          "meaning": "having strong muscles.The athlete is very muscular",
          "example": "Example not provided."
        },
        {
          "word": "posture",
          "partOfSpeech": "n",
          "meaning": "the way one holds the body.Good posture is important for health",
          "example": "Example not provided."
        },
        {
          "word": "situate",
          "partOfSpeech": "v",
          "meaning": "to place in a position.The school is situated near the park",
          "example": "Example not provided."
        },
        {
          "word": "supervise",
          "partOfSpeech": "v",
          "meaning": "to watch and guide others.The teacher supervised the exam",
          "example": "Example not provided."
        },
        {
          "word": "symmetry",
          "partOfSpeech": "n",
          "meaning": "balance between two sides.The butterfly’s wings show perfect symmetry",
          "example": "Example not provided."
        },
        {
          "word": "tattoo",
          "partOfSpeech": "n",
          "meaning": "a design marked on the skin.He has a dragon tattoo on his arm",
          "example": "Example not provided."
        },
        {
          "word": "undergraduate",
          "partOfSpeech": "n",
          "meaning": "a university student before graduation.She is an undergraduate studying biology",
          "example": "Example not provided."
        }
      ]
    },
    "9": {
      "title": "Unit 9 – The Spectator",
      "words": [
        {
          "word": "cater",
          "partOfSpeech": "v",
          "meaning": "to provide food or service.The restaurant catered the wedding",
          "example": "Example not provided."
        },
        {
          "word": "considerate",
          "partOfSpeech": "adj",
          "meaning": "thoughtful, caring about others.He is considerate of his neighbors",
          "example": "Example not provided."
        },
        {
          "word": "consumption",
          "partOfSpeech": "n",
          "meaning": "the act of using something.Water consumption is high during summer",
          "example": "Example not provided."
        },
        {
          "word": "criteria",
          "partOfSpeech": "n",
          "meaning": "standards used for judging.The applicants must meet certain criteria",
          "example": "Example not provided."
        },
        {
          "word": "crust",
          "partOfSpeech": "n",
          "meaning": "the hard outer part.The bread’s crust was golden brown",
          "example": "Example not provided."
        },
        {
          "word": "entitle",
          "partOfSpeech": "v",
          "meaning": "to give a right to.The ticket entitles you to a free drink",
          "example": "Example not provided."
        },
        {
          "word": "escort",
          "partOfSpeech": "v/n",
          "meaning": "to go with someone for protection.The guard escorted the president",
          "example": "Example not provided."
        },
        {
          "word": "external",
          "partOfSpeech": "adj",
          "meaning": "outer, on the outside.The building’s external walls need painting",
          "example": "Example not provided."
        },
        {
          "word": "facility",
          "partOfSpeech": "n",
          "meaning": "a place built for a purpose.The city has good sports facilities",
          "example": "Example not provided."
        },
        {
          "word": "faculty",
          "partOfSpeech": "n",
          "meaning": "teachers at a university.The faculty voted to change the curriculum",
          "example": "Example not provided."
        },
        {
          "word": "heap",
          "partOfSpeech": "n",
          "meaning": "a pile of things.There was a heap of clothes on the floor",
          "example": "Example not provided."
        },
        {
          "word": "hemisphere",
          "partOfSpeech": "n",
          "meaning": "half of the earth.Australia is in the southern hemisphere",
          "example": "Example not provided."
        },
        {
          "word": "hound",
          "partOfSpeech": "n",
          "meaning": "a type of dog for hunting.The hound chased the rabbit",
          "example": "Example not provided."
        },
        {
          "word": "impersonal",
          "partOfSpeech": "adj",
          "meaning": "not showing feelings.The letter was impersonal and formal",
          "example": "Example not provided."
        },
        {
          "word": "lick",
          "partOfSpeech": "v",
          "meaning": "to pass the tongue over something.The dog licked my hand",
          "example": "Example not provided."
        },
        {
          "word": "ornament",
          "partOfSpeech": "n",
          "meaning": "a decorative object.The Christmas tree had many ornaments",
          "example": "Example not provided."
        },
        {
          "word": "pedestrian",
          "partOfSpeech": "n",
          "meaning": "a person walking.The car almost hit a pedestrian",
          "example": "Example not provided."
        },
        {
          "word": "sanctuary",
          "partOfSpeech": "n",
          "meaning": "a safe place.The temple is a sanctuary for worshippers",
          "example": "Example not provided."
        },
        {
          "word": "spectator",
          "partOfSpeech": "n",
          "meaning": "someone who watches an event.Thousands of spectators attended the match",
          "example": "Example not provided."
        },
        {
          "word": "yell",
          "partOfSpeech": "v",
          "meaning": "to shout loudly.The coach yelled instructions to the players",
          "example": "Example not provided."
        }
      ]
    },
    "10": {
      "title": "Unit 10 – The Accessory",
      "words": [
        {
          "word": "accessory",
          "partOfSpeech": "n",
          "meaning": "something added for decoration or usefulness.She bought a new accessory for her phone",
          "example": "Example not provided."
        },
        {
          "word": "acquisition",
          "partOfSpeech": "n",
          "meaning": "the act of getting something.Language acquisition happens in childhood",
          "example": "Example not provided."
        },
        {
          "word": "cardboard",
          "partOfSpeech": "n",
          "meaning": "thick, stiff paper.The box was made of cardboard",
          "example": "Example not provided."
        },
        {
          "word": "dilemma",
          "partOfSpeech": "n",
          "meaning": "a difficult choice.He faced the dilemma of whether to stay or leave",
          "example": "Example not provided."
        },
        {
          "word": "elaborate",
          "partOfSpeech": "adj",
          "meaning": "detailed and complicated.She made an elaborate plan for the trip",
          "example": "Example not provided."
        },
        {
          "word": "facilitate",
          "partOfSpeech": "v",
          "meaning": "to make easier.The new system facilitates communication",
          "example": "Example not provided."
        },
        {
          "word": "fleet",
          "partOfSpeech": "n",
          "meaning": "a group of ships or vehicles.The navy has a large fleet",
          "example": "Example not provided."
        },
        {
          "word": "grid",
          "partOfSpeech": "n",
          "meaning": "a pattern of squares.The city streets form a grid",
          "example": "Example not provided."
        },
        {
          "word": "import",
          "partOfSpeech": "v",
          "meaning": "to bring goods from another country.The country imports oil from abroad",
          "example": "Example not provided."
        },
        {
          "word": "infer",
          "partOfSpeech": "v",
          "meaning": "to reach a conclusion from evidence.From her tone, I inferred she was upset",
          "example": "Example not provided."
        },
        {
          "word": "inflate",
          "partOfSpeech": "v",
          "meaning": "to fill with air.He inflated the balloon",
          "example": "Example not provided."
        },
        {
          "word": "innate",
          "partOfSpeech": "adj",
          "meaning": "natural, existing from birth.She has an innate talent for music",
          "example": "Example not provided."
        },
        {
          "word": "marble",
          "partOfSpeech": "n",
          "meaning": "a type of hard stone.The statue was made of marble",
          "example": "Example not provided."
        },
        {
          "word": "mast",
          "partOfSpeech": "n",
          "meaning": "a tall pole on a ship.The sails were tied to the mast",
          "example": "Example not provided."
        },
        {
          "word": "nausea",
          "partOfSpeech": "n",
          "meaning": "a sick feeling in the stomach.The boat ride gave him nausea",
          "example": "Example not provided."
        },
        {
          "word": "naval",
          "partOfSpeech": "adj",
          "meaning": "related to ships or navy.The country has strong naval forces",
          "example": "Example not provided."
        },
        {
          "word": "pouch",
          "partOfSpeech": "n",
          "meaning": "a small bag.She carried coins in a leather pouch",
          "example": "Example not provided."
        },
        {
          "word": "saturated",
          "partOfSpeech": "adj",
          "meaning": "completely full of liquid.The ground was saturated with rain",
          "example": "Example not provided."
        },
        {
          "word": "update",
          "partOfSpeech": "v/n",
          "meaning": "to make current.They updated the software last night",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "11": {
      "title": "Unit 11 – The Guardian",
      "words": [
        {
          "word": "attorney",
          "partOfSpeech": "n",
          "meaning": "a lawyer.She hired an attorney to handle the case",
          "example": "Example not provided."
        },
        {
          "word": "chronic",
          "partOfSpeech": "adj",
          "meaning": "lasting for a long time.He suffers from chronic pain",
          "example": "Example not provided."
        },
        {
          "word": "discipline",
          "partOfSpeech": "n",
          "meaning": "training to follow rules.Good discipline is important in school",
          "example": "Example not provided."
        },
        {
          "word": "donor",
          "partOfSpeech": "n",
          "meaning": "a person who gives something.The hospital thanked the blood donor",
          "example": "Example not provided."
        },
        {
          "word": "fellow",
          "partOfSpeech": "n",
          "meaning": "a person in the same group.He’s a fellow student at my school",
          "example": "Example not provided."
        },
        {
          "word": "gossip",
          "partOfSpeech": "n/v",
          "meaning": "talk about others’ private lives.They enjoy gossiping about celebrities",
          "example": "Example not provided."
        },
        {
          "word": "graduate",
          "partOfSpeech": "v/n",
          "meaning": "to finish school; a person who finished school.She graduated from college last year",
          "example": "Example not provided."
        },
        {
          "word": "graffiti",
          "partOfSpeech": "n",
          "meaning": "writings or drawings on walls.The wall was covered in graffiti",
          "example": "Example not provided."
        },
        {
          "word": "guardian",
          "partOfSpeech": "n",
          "meaning": "someone who protects or cares for another.The child’s guardian signed the form",
          "example": "Example not provided."
        },
        {
          "word": "implicate",
          "partOfSpeech": "v",
          "meaning": "to show someone is involved.The evidence implicated him in the crime",
          "example": "Example not provided."
        },
        {
          "word": "kin",
          "partOfSpeech": "n",
          "meaning": "family, relatives.She is visiting her kin in the country",
          "example": "Example not provided."
        },
        {
          "word": "referee",
          "partOfSpeech": "n",
          "meaning": "a sports official.The referee blew the whistle",
          "example": "Example not provided."
        },
        {
          "word": "sever",
          "partOfSpeech": "v",
          "meaning": "to cut off.The storm severed the power lines",
          "example": "Example not provided."
        },
        {
          "word": "shaft",
          "partOfSpeech": "n",
          "meaning": "a long narrow part.Light came through a shaft in the ceiling",
          "example": "Example not provided."
        },
        {
          "word": "stimulus",
          "partOfSpeech": "n",
          "meaning": "something causing a reaction.Light is a stimulus for plants to grow",
          "example": "Example not provided."
        },
        {
          "word": "suspicion",
          "partOfSpeech": "n",
          "meaning": "a feeling that something is wrong.She had a suspicion he was lying",
          "example": "Example not provided."
        },
        {
          "word": "terminate",
          "partOfSpeech": "v",
          "meaning": "to end.The contract was terminated early",
          "example": "Example not provided."
        },
        {
          "word": "theme",
          "partOfSpeech": "n",
          "meaning": "the main subject.The theme of the story is friendship",
          "example": "Example not provided."
        },
        {
          "word": "tuition",
          "partOfSpeech": "n",
          "meaning": "money paid for instruction.Tuition at the university is expensive",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "12": {
      "title": "Unit 12 – The Combat",
      "words": [
        {
          "word": "aggressive",
          "partOfSpeech": "adj",
          "meaning": "ready to attack.The dog is aggressive toward strangers",
          "example": "Example not provided."
        },
        {
          "word": "amnesty",
          "partOfSpeech": "n",
          "meaning": "forgiveness for crimes.The government gave amnesty to the rebels",
          "example": "Example not provided."
        },
        {
          "word": "arena",
          "partOfSpeech": "n",
          "meaning": "a place for sports or shows.The concert was held in the arena",
          "example": "Example not provided."
        },
        {
          "word": "auditorium",
          "partOfSpeech": "n",
          "meaning": "a large hall for events.The school assembly met in the auditorium",
          "example": "Example not provided."
        },
        {
          "word": "captive",
          "partOfSpeech": "n",
          "meaning": "a person kept prisoner.The soldiers kept the enemy captive",
          "example": "Example not provided."
        },
        {
          "word": "combat",
          "partOfSpeech": "n/v",
          "meaning": "fighting or battle.The soldiers prepared for combat",
          "example": "Example not provided."
        },
        {
          "word": "corps",
          "partOfSpeech": "n",
          "meaning": "a group of people working together.She joined the medical corps during the war",
          "example": "Example not provided."
        },
        {
          "word": "distract",
          "partOfSpeech": "v",
          "meaning": "to take attention away.Noise distracted the students",
          "example": "Example not provided."
        },
        {
          "word": "dumb",
          "partOfSpeech": "adj",
          "meaning": "unable to speak; foolish.The boy was born dumb",
          "example": "Example not provided."
        },
        {
          "word": "foe",
          "partOfSpeech": "n",
          "meaning": "an enemy.They fought bravely against their foes",
          "example": "Example not provided."
        },
        {
          "word": "meditate",
          "partOfSpeech": "v",
          "meaning": "to think deeply or pray.She meditates every morning",
          "example": "Example not provided."
        },
        {
          "word": "nick",
          "partOfSpeech": "n/v",
          "meaning": "a small cut.He got a nick on his finger while cooking",
          "example": "Example not provided."
        },
        {
          "word": "provoke",
          "partOfSpeech": "v",
          "meaning": "to make someone angry.The insult provoked him",
          "example": "Example not provided."
        },
        {
          "word": "reign",
          "partOfSpeech": "n/v",
          "meaning": "the rule of a king or queen.The queen’s reign lasted 50 years",
          "example": "Example not provided."
        },
        {
          "word": "rust",
          "partOfSpeech": "n/v",
          "meaning": "reddish coating on metal.The bike chain is covered in rust",
          "example": "Example not provided."
        },
        {
          "word": "sacred",
          "partOfSpeech": "adj",
          "meaning": "holy.The temple is a sacred place",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "13": {
      "title": "Unit 13 – The Canyon",
      "words": [
        {
          "word": "aesthetic",
          "partOfSpeech": "adj",
          "meaning": "concerned with beauty.The painting has aesthetic value",
          "example": "Example not provided."
        },
        {
          "word": "arrogant",
          "partOfSpeech": "adj",
          "meaning": "too proud, thinking highly of oneself.The arrogant man ignored everyone",
          "example": "Example not provided."
        },
        {
          "word": "drill",
          "partOfSpeech": "n/v",
          "meaning": "a tool for making holes; to practice.He used a drill to fix the chair",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder5",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder6",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder7",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder8",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder9",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder10",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder11",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder12",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder13",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder14",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder15",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder16",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder17",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "14": {
      "title": "Unit 14 – The Glacier",
      "words": [
        {
          "word": "behalf",
          "partOfSpeech": "n",
          "meaning": "representing someone.He spoke on behalf of the students",
          "example": "Example not provided."
        },
        {
          "word": "inward",
          "partOfSpeech": "adj/adv",
          "meaning": "toward the inside.She turned her gaze inward in thought",
          "example": "Example not provided."
        },
        {
          "word": "loaf",
          "partOfSpeech": "n",
          "meaning": "a shaped mass of bread.She baked a loaf of bread",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder5",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder6",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder7",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder8",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder9",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder10",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder11",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder12",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder13",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder14",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder15",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder16",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder17",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "15": {
      "title": "Unit 15 – The Aquarium",
      "words": [
        {
          "word": "aquarium",
          "partOfSpeech": "n",
          "meaning": "a glass container for fish.They keep tropical fish in a large aquarium",
          "example": "Example not provided."
        },
        {
          "word": "arbitrary",
          "partOfSpeech": "adj",
          "meaning": "based on chance or personal choice, not reason.The decision seemed arbitrary and unfair",
          "example": "Example not provided."
        },
        {
          "word": "autobiography",
          "partOfSpeech": "n",
          "meaning": "a person’s life story written by themselves.She published her autobiography at 60",
          "example": "Example not provided."
        },
        {
          "word": "convention",
          "partOfSpeech": "n",
          "meaning": "a formal meeting.Thousands attended the business convention",
          "example": "Example not provided."
        },
        {
          "word": "gracious",
          "partOfSpeech": "adj",
          "meaning": "kind, polite.The hostess was gracious to her guests",
          "example": "Example not provided."
        },
        {
          "word": "improve",
          "partOfSpeech": "v",
          "meaning": "to make better.He improved his English by reading daily",
          "example": "Example not provided."
        },
        {
          "word": "insulate",
          "partOfSpeech": "v",
          "meaning": "to cover to keep heat or cold in.They insulated the house to save energy",
          "example": "Example not provided."
        },
        {
          "word": "intrigue",
          "partOfSpeech": "v/n",
          "meaning": "to interest greatly; secret plot.The story intrigued me with its mystery",
          "example": "Example not provided."
        },
        {
          "word": "longevity",
          "partOfSpeech": "n",
          "meaning": "a long life.Healthy habits lead to longevity",
          "example": "Example not provided."
        },
        {
          "word": "misplace",
          "partOfSpeech": "v",
          "meaning": "to lose temporarily.I misplaced my keys this morning",
          "example": "Example not provided."
        },
        {
          "word": "naughty",
          "partOfSpeech": "adj",
          "meaning": "badly behaved.The naughty child refused to listen",
          "example": "Example not provided."
        },
        {
          "word": "orangutan",
          "partOfSpeech": "n",
          "meaning": "a large ape with red hair.An orangutan swung from tree to tree",
          "example": "Example not provided."
        },
        {
          "word": "overload",
          "partOfSpeech": "v/n",
          "meaning": "to put too much on.The truck was overloaded with goods",
          "example": "Example not provided."
        },
        {
          "word": "philanthropy",
          "partOfSpeech": "n",
          "meaning": "giving money or help to others.The millionaire was known for his philanthropy",
          "example": "Example not provided."
        },
        {
          "word": "probe",
          "partOfSpeech": "v/n",
          "meaning": "to investigate; a tool for exploration.The police probed the mystery",
          "example": "Example not provided."
        },
        {
          "word": "recipient",
          "partOfSpeech": "n",
          "meaning": "a person who receives something.She was the recipient of the award",
          "example": "Example not provided."
        },
        {
          "word": "reptile",
          "partOfSpeech": "n",
          "meaning": "a cold-blooded animal (snake, lizard).Crocodiles are reptiles",
          "example": "Example not provided."
        },
        {
          "word": "thrive",
          "partOfSpeech": "v",
          "meaning": "to grow well, succeed.Children thrive in a loving home",
          "example": "Example not provided."
        },
        {
          "word": "ultimate",
          "partOfSpeech": "adj",
          "meaning": "final, best.Winning the championship was the ultimate goal",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "16": {
      "title": "Unit 16 – The Artifact",
      "words": [
        {
          "word": "antique",
          "partOfSpeech": "adj/n",
          "meaning": "very old; an old object.She collects antique furniture",
          "example": "Example not provided."
        },
        {
          "word": "applicant",
          "partOfSpeech": "n",
          "meaning": "someone who applies for something.The job had many applicants",
          "example": "Example not provided."
        },
        {
          "word": "artifact",
          "partOfSpeech": "n",
          "meaning": "an object made in the past.The museum displayed ancient artifacts",
          "example": "Example not provided."
        },
        {
          "word": "authentic",
          "partOfSpeech": "adj",
          "meaning": "real, genuine.The signature was authentic",
          "example": "Example not provided."
        },
        {
          "word": "chronology",
          "partOfSpeech": "n",
          "meaning": "the order of events.The historian studied the chronology of wars",
          "example": "Example not provided."
        },
        {
          "word": "diplomat",
          "partOfSpeech": "n",
          "meaning": "a person who represents their country abroad.The diplomat attended the peace talks",
          "example": "Example not provided."
        },
        {
          "word": "epic",
          "partOfSpeech": "n/adj",
          "meaning": "a long heroic story; grand.The Iliad is an epic poem",
          "example": "Example not provided."
        },
        {
          "word": "excerpt",
          "partOfSpeech": "n",
          "meaning": "a small part taken from a text.He read an excerpt from the book",
          "example": "Example not provided."
        },
        {
          "word": "fossil",
          "partOfSpeech": "n",
          "meaning": "remains of ancient plants/animals in rock.They found a dinosaur fossil",
          "example": "Example not provided."
        },
        {
          "word": "humiliate",
          "partOfSpeech": "v",
          "meaning": "to make someone feel ashamed.He was humiliated in front of his friends",
          "example": "Example not provided."
        },
        {
          "word": "lyric",
          "partOfSpeech": "n/adj",
          "meaning": "the words of a song; poetic.She wrote the lyrics for the song",
          "example": "Example not provided."
        },
        {
          "word": "majesty",
          "partOfSpeech": "n",
          "meaning": "greatness, royal power.They admired the majesty of the mountains",
          "example": "Example not provided."
        },
        {
          "word": "monarch",
          "partOfSpeech": "n",
          "meaning": "a king or queen.The monarch ruled the country",
          "example": "Example not provided."
        },
        {
          "word": "precede",
          "partOfSpeech": "v",
          "meaning": "to come before.The introduction precedes the first chapter",
          "example": "Example not provided."
        },
        {
          "word": "punctual",
          "partOfSpeech": "adj",
          "meaning": "on time.She is always punctual to meetings",
          "example": "Example not provided."
        },
        {
          "word": "recruit",
          "partOfSpeech": "v/n",
          "meaning": "to enlist new members; a new member.The army recruits soldiers every year",
          "example": "Example not provided."
        },
        {
          "word": "refund",
          "partOfSpeech": "n/v",
          "meaning": "money returned; to return money.They gave him a refund for the broken item",
          "example": "Example not provided."
        },
        {
          "word": "register",
          "partOfSpeech": "v/n",
          "meaning": "to record information; an official list.You must register before voting",
          "example": "Example not provided."
        },
        {
          "word": "renown",
          "partOfSpeech": "n",
          "meaning": "fame, honor.The scientist gained renown for her research",
          "example": "Example not provided."
        },
        {
          "word": "tusk",
          "partOfSpeech": "n",
          "meaning": "a long, pointed tooth of an elephant, etc.The elephant has long tusks",
          "example": "Example not provided."
        }
      ]
    },
    "17": {
      "title": "Unit 17 – The Fossil Hunters",
      "words": [
        {
          "word": "coexist",
          "partOfSpeech": "v",
          "meaning": "to live together peacefully.Different groups must learn to coexist",
          "example": "Example not provided."
        },
        {
          "word": "conceive",
          "partOfSpeech": "v",
          "meaning": "to imagine or create an idea.She conceived a plan for the trip",
          "example": "Example not provided."
        },
        {
          "word": "dubious",
          "partOfSpeech": "adj",
          "meaning": "doubtful.His story sounds dubious",
          "example": "Example not provided."
        },
        {
          "word": "ego",
          "partOfSpeech": "n",
          "meaning": "one’s self-esteem.His ego was hurt when he lost",
          "example": "Example not provided."
        },
        {
          "word": "endeavor",
          "partOfSpeech": "n",
          "meaning": "an effort or attempt.Her writing endeavor paid off",
          "example": "Example not provided."
        },
        {
          "word": "engrave",
          "partOfSpeech": "v",
          "meaning": "to carve into a surface.They engraved their initials on the tree",
          "example": "Example not provided."
        },
        {
          "word": "excavate",
          "partOfSpeech": "v",
          "meaning": "to dig for something.The team excavated ancient ruins",
          "example": "Example not provided."
        },
        {
          "word": "jagged",
          "partOfSpeech": "adj",
          "meaning": "uneven, sharp-edged.He cut his hand on the jagged rock",
          "example": "Example not provided."
        },
        {
          "word": "locale",
          "partOfSpeech": "n",
          "meaning": "a place or setting.The beach was a perfect locale for the film",
          "example": "Example not provided."
        },
        {
          "word": "magnitude",
          "partOfSpeech": "n",
          "meaning": "size or importance.The magnitude of the problem was clear",
          "example": "Example not provided."
        },
        {
          "word": "mold",
          "partOfSpeech": "n/v",
          "meaning": "a fungus; to shape.The old bread was covered in mold",
          "example": "Example not provided."
        },
        {
          "word": "periphery",
          "partOfSpeech": "n",
          "meaning": "outer edge.They built houses at the city’s periphery",
          "example": "Example not provided."
        },
        {
          "word": "plaster",
          "partOfSpeech": "n/v",
          "meaning": "material for walls; to cover with it.They used plaster to repair the wall",
          "example": "Example not provided."
        },
        {
          "word": "shovel",
          "partOfSpeech": "n",
          "meaning": "a tool for digging.He dug with a shovel",
          "example": "Example not provided."
        },
        {
          "word": "thigh",
          "partOfSpeech": "n",
          "meaning": "the part of the leg above the knee.He injured his thigh while running",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder5",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "18": {
      "title": "Unit 18 – The Gourmet",
      "words": [
        {
          "word": "attic",
          "partOfSpeech": "n",
          "meaning": "the space under a roof.Old toys were found in the attic",
          "example": "Example not provided."
        },
        {
          "word": "chunk",
          "partOfSpeech": "n",
          "meaning": "a large piece.He ate a chunk of bread",
          "example": "Example not provided."
        },
        {
          "word": "civic",
          "partOfSpeech": "adj",
          "meaning": "relating to a city.The mayor spoke about civic duties",
          "example": "Example not provided."
        },
        {
          "word": "descent",
          "partOfSpeech": "n",
          "meaning": "downward movement.The plane began its descent",
          "example": "Example not provided."
        },
        {
          "word": "din",
          "partOfSpeech": "n",
          "meaning": "loud noise.The din of traffic was constant",
          "example": "Example not provided."
        },
        {
          "word": "dissatisfy",
          "partOfSpeech": "v",
          "meaning": "to make unhappy.The service dissatisfied the customer",
          "example": "Example not provided."
        },
        {
          "word": "fuss",
          "partOfSpeech": "n",
          "meaning": "unnecessary concern.She made a fuss about the small mistake",
          "example": "Example not provided."
        },
        {
          "word": "glamorous",
          "partOfSpeech": "adj",
          "meaning": "attractive, stylish.The actress wore a glamorous dress",
          "example": "Example not provided."
        },
        {
          "word": "gourmet",
          "partOfSpeech": "adj/n",
          "meaning": "fancy, high-quality food.They enjoyed a gourmet meal",
          "example": "Example not provided."
        },
        {
          "word": "hence",
          "partOfSpeech": "adv",
          "meaning": "therefore, for that reason.It rained, hence the game was canceled",
          "example": "Example not provided."
        },
        {
          "word": "intrinsic",
          "partOfSpeech": "adj",
          "meaning": "essential, natural.Curiosity is intrinsic to learning",
          "example": "Example not provided."
        },
        {
          "word": "kettle",
          "partOfSpeech": "n",
          "meaning": "a pot for boiling water.She boiled tea in the kettle",
          "example": "Example not provided."
        },
        {
          "word": "ministry",
          "partOfSpeech": "n",
          "meaning": "a government department.He works for the Ministry of Health",
          "example": "Example not provided."
        },
        {
          "word": "ordeal",
          "partOfSpeech": "n",
          "meaning": "a difficult experience.Losing her job was an ordeal",
          "example": "Example not provided."
        },
        {
          "word": "overwork",
          "partOfSpeech": "v/n",
          "meaning": "to work too much.He became ill from overwork",
          "example": "Example not provided."
        },
        {
          "word": "soundly",
          "partOfSpeech": "adv",
          "meaning": "deeply, firmly.The baby slept soundly",
          "example": "Example not provided."
        },
        {
          "word": "superintendent",
          "partOfSpeech": "n",
          "meaning": "a building manager.The superintendent repaired the heater",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "19": {
      "title": "Unit 19 – The Courier",
      "words": [
        {
          "word": "congested",
          "partOfSpeech": "adj",
          "meaning": "overcrowded.The streets were congested with cars",
          "example": "Example not provided."
        },
        {
          "word": "courier",
          "partOfSpeech": "n",
          "meaning": "a delivery person.The courier delivered the package",
          "example": "Example not provided."
        },
        {
          "word": "deform",
          "partOfSpeech": "v",
          "meaning": "to change shape badly.Heat deformed the plastic toy",
          "example": "Example not provided."
        },
        {
          "word": "etiquette",
          "partOfSpeech": "n",
          "meaning": "polite behavior.Good etiquette is important at formal dinners",
          "example": "Example not provided."
        },
        {
          "word": "exclusive",
          "partOfSpeech": "adj",
          "meaning": "limited, special.They stayed at an exclusive hotel",
          "example": "Example not provided."
        },
        {
          "word": "freight",
          "partOfSpeech": "n",
          "meaning": "goods carried by train, ship, etc.The train carried freight across the country",
          "example": "Example not provided."
        },
        {
          "word": "garment",
          "partOfSpeech": "n",
          "meaning": "a piece of clothing.The shop sells garments of fine quality",
          "example": "Example not provided."
        },
        {
          "word": "insomnia",
          "partOfSpeech": "n",
          "meaning": "inability to sleep.She suffered from insomnia for months",
          "example": "Example not provided."
        },
        {
          "word": "intuitive",
          "partOfSpeech": "adj",
          "meaning": "understood naturally.He has an intuitive sense of design",
          "example": "Example not provided."
        },
        {
          "word": "premium",
          "partOfSpeech": "n",
          "meaning": "an extra payment.They paid a premium for early delivery",
          "example": "Example not provided."
        },
        {
          "word": "privilege",
          "partOfSpeech": "n",
          "meaning": "a special right.Education is a privilege, not a burden",
          "example": "Example not provided."
        },
        {
          "word": "propel",
          "partOfSpeech": "v",
          "meaning": "to push forward.The motor propels the boat",
          "example": "Example not provided."
        },
        {
          "word": "socialize",
          "partOfSpeech": "v",
          "meaning": "to spend time with others.He loves to socialize at parties",
          "example": "Example not provided."
        },
        {
          "word": "tram",
          "partOfSpeech": "n",
          "meaning": "a streetcar.They rode the tram through the city",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder5",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder6",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "20": {
      "title": "Unit 20 – The Avalanche",
      "words": [
        {
          "word": "accumulate",
          "partOfSpeech": "v",
          "meaning": "to collect or gather.He accumulated wealth over many years",
          "example": "Example not provided."
        },
        {
          "word": "aerial",
          "partOfSpeech": "adj",
          "meaning": "related to the air.They took aerial photos from the plane",
          "example": "Example not provided."
        },
        {
          "word": "apparatus",
          "partOfSpeech": "n",
          "meaning": "equipment.The lab has scientific apparatus",
          "example": "Example not provided."
        },
        {
          "word": "avalanche",
          "partOfSpeech": "n",
          "meaning": "a mass of snow falling down.The avalanche buried the cabin",
          "example": "Example not provided."
        },
        {
          "word": "consistency",
          "partOfSpeech": "n",
          "meaning": "steadiness, regularity.She paints with consistency",
          "example": "Example not provided."
        },
        {
          "word": "discharge",
          "partOfSpeech": "v",
          "meaning": "to release.The factory discharged waste into the river",
          "example": "Example not provided."
        },
        {
          "word": "episode",
          "partOfSpeech": "n",
          "meaning": "an incident, event.The book tells about a tragic episode in history",
          "example": "Example not provided."
        },
        {
          "word": "intact",
          "partOfSpeech": "adj",
          "meaning": "whole, not broken.The vase survived intact",
          "example": "Example not provided."
        },
        {
          "word": "omen",
          "partOfSpeech": "n",
          "meaning": "a sign of the future.The black cat was a bad omen",
          "example": "Example not provided."
        },
        {
          "word": "overcast",
          "partOfSpeech": "adj",
          "meaning": "cloudy.The sky was overcast with clouds",
          "example": "Example not provided."
        },
        {
          "word": "ranger",
          "partOfSpeech": "n",
          "meaning": "a forest guard.The ranger showed us the trail",
          "example": "Example not provided."
        },
        {
          "word": "rubble",
          "partOfSpeech": "n",
          "meaning": "broken stone, debris.The house collapsed into rubble",
          "example": "Example not provided."
        },
        {
          "word": "sober",
          "partOfSpeech": "adj",
          "meaning": "serious, not drunk.He looked sober after the meeting",
          "example": "Example not provided."
        },
        {
          "word": "speck",
          "partOfSpeech": "n",
          "meaning": "a small spot.There was a speck of dust on the lens",
          "example": "Example not provided."
        },
        {
          "word": "upbringing",
          "partOfSpeech": "n",
          "meaning": "the way someone is raised.She had a strict upbringing",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder5",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "21": {
      "title": "Unit 21 – The Butler",
      "words": [
        {
          "word": "bliss",
          "partOfSpeech": "n",
          "meaning": "great happiness.They lived in marital bliss",
          "example": "Example not provided."
        },
        {
          "word": "butler",
          "partOfSpeech": "n",
          "meaning": "the main male servant in a house.The butler opened the door for the guests",
          "example": "Example not provided."
        },
        {
          "word": "cramp",
          "partOfSpeech": "n",
          "meaning": "a sudden, painful tightening of muscle.He got a cramp in his leg while swimming",
          "example": "Example not provided."
        },
        {
          "word": "decorate",
          "partOfSpeech": "v",
          "meaning": "to make attractive.They decorated the room for the party",
          "example": "Example not provided."
        },
        {
          "word": "dilapidated",
          "partOfSpeech": "adj",
          "meaning": "in poor condition.They lived in a dilapidated old house",
          "example": "Example not provided."
        },
        {
          "word": "evoke",
          "partOfSpeech": "v",
          "meaning": "to bring to mind.The song evoked memories of childhood",
          "example": "Example not provided."
        },
        {
          "word": "faucet",
          "partOfSpeech": "n",
          "meaning": "a device that controls water flow.Turn off the faucet to save water",
          "example": "Example not provided."
        },
        {
          "word": "filth",
          "partOfSpeech": "n",
          "meaning": "dirt, foul matter.The room was full of filth",
          "example": "Example not provided."
        },
        {
          "word": "flaw",
          "partOfSpeech": "n",
          "meaning": "an imperfection.There is a flaw in your reasoning",
          "example": "Example not provided."
        },
        {
          "word": "grin",
          "partOfSpeech": "v/n",
          "meaning": "to smile broadly; a big smile.He grinned with excitement",
          "example": "Example not provided."
        },
        {
          "word": "housekeeping",
          "partOfSpeech": "n",
          "meaning": "the management of a house.She does all the housekeeping",
          "example": "Example not provided."
        },
        {
          "word": "mound",
          "partOfSpeech": "n",
          "meaning": "a small hill or pile.He stood on a mound of earth",
          "example": "Example not provided."
        },
        {
          "word": "numb",
          "partOfSpeech": "adj",
          "meaning": "without feeling.My fingers were numb from the cold",
          "example": "Example not provided."
        },
        {
          "word": "reckless",
          "partOfSpeech": "adj",
          "meaning": "careless, dangerous.He drove at reckless speed",
          "example": "Example not provided."
        },
        {
          "word": "slate",
          "partOfSpeech": "n",
          "meaning": "a type of dark rock used for writing.The old school used slate boards",
          "example": "Example not provided."
        },
        {
          "word": "stool",
          "partOfSpeech": "n",
          "meaning": "a seat without a back.He sat on a wooden stool",
          "example": "Example not provided."
        },
        {
          "word": "testament",
          "partOfSpeech": "n",
          "meaning": "proof of something.Her success is a testament to hard work",
          "example": "Example not provided."
        },
        {
          "word": "timber",
          "partOfSpeech": "n",
          "meaning": "wood for building.The cabin was built with timber",
          "example": "Example not provided."
        },
        {
          "word": "valve",
          "partOfSpeech": "n",
          "meaning": "a device to control flow of liquid or gas.The plumber replaced the valve",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "22": {
      "title": "Unit 22 – The Guerrilla Fighters",
      "words": [
        {
          "word": "camouflage",
          "partOfSpeech": "n/v",
          "meaning": "disguise that makes things blend in.The soldiers wore camouflage uniforms",
          "example": "Example not provided."
        },
        {
          "word": "confront",
          "partOfSpeech": "v",
          "meaning": "to face boldly.She confronted him about the lie",
          "example": "Example not provided."
        },
        {
          "word": "contemplate",
          "partOfSpeech": "v",
          "meaning": "to think deeply.He contemplated moving abroad",
          "example": "Example not provided."
        },
        {
          "word": "contend",
          "partOfSpeech": "v",
          "meaning": "to compete or argue.Three teams will contend for the prize",
          "example": "Example not provided."
        },
        {
          "word": "cot",
          "partOfSpeech": "n",
          "meaning": "a small, light bed.The baby slept in a cot",
          "example": "Example not provided."
        },
        {
          "word": "enlist",
          "partOfSpeech": "v",
          "meaning": "to join the army.He enlisted in the navy at 18",
          "example": "Example not provided."
        },
        {
          "word": "frontier",
          "partOfSpeech": "n",
          "meaning": "border or edge.They crossed the frontier into France",
          "example": "Example not provided."
        },
        {
          "word": "guerilla",
          "partOfSpeech": "n",
          "meaning": "a fighter using irregular tactics.The guerilla fighters attacked at night",
          "example": "Example not provided."
        },
        {
          "word": "handbook",
          "partOfSpeech": "n",
          "meaning": "a guidebook with instructions.She carried a student handbook",
          "example": "Example not provided."
        },
        {
          "word": "hesitant",
          "partOfSpeech": "adj",
          "meaning": "unsure, not confident.He was hesitant to speak in class",
          "example": "Example not provided."
        },
        {
          "word": "lush",
          "partOfSpeech": "adj",
          "meaning": "richly green, full.The garden was lush with flowers",
          "example": "Example not provided."
        },
        {
          "word": "splendid",
          "partOfSpeech": "adj",
          "meaning": "very impressive.We enjoyed a splendid view from the mountain",
          "example": "Example not provided."
        },
        {
          "word": "substantial",
          "partOfSpeech": "adj",
          "meaning": "large, important.She made a substantial donation",
          "example": "Example not provided."
        },
        {
          "word": "weary",
          "partOfSpeech": "adj",
          "meaning": "very tired.She felt weary after the long trip",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder5",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder6",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "23": {
      "title": "Unit 23 – The Mob",
      "words": [
        {
          "word": "amid",
          "partOfSpeech": "prep",
          "meaning": "in the middle of.He stood amid the crowd",
          "example": "Example not provided."
        },
        {
          "word": "backstage",
          "partOfSpeech": "adv/n",
          "meaning": "behind the stage.The actors waited backstage",
          "example": "Example not provided."
        },
        {
          "word": "billionaire",
          "partOfSpeech": "n",
          "meaning": "a very rich person.The billionaire donated millions to charity",
          "example": "Example not provided."
        },
        {
          "word": "brute",
          "partOfSpeech": "n/adj",
          "meaning": "a cruel, rough person; rough.He acted like a brute",
          "example": "Example not provided."
        },
        {
          "word": "clumsy",
          "partOfSpeech": "adj",
          "meaning": "awkward, ungraceful.The clumsy boy dropped the vase",
          "example": "Example not provided."
        },
        {
          "word": "collide",
          "partOfSpeech": "v",
          "meaning": "to crash together.The cars collided on the highway",
          "example": "Example not provided."
        },
        {
          "word": "culprit",
          "partOfSpeech": "n",
          "meaning": "the guilty person.The police caught the culprit",
          "example": "Example not provided."
        },
        {
          "word": "evacuate",
          "partOfSpeech": "v",
          "meaning": "to leave a dangerous place.They evacuated the building after the fire alarm",
          "example": "Example not provided."
        },
        {
          "word": "flammable",
          "partOfSpeech": "adj",
          "meaning": "able to catch fire easily.Keep flammable liquids away from heat",
          "example": "Example not provided."
        },
        {
          "word": "premature",
          "partOfSpeech": "adj",
          "meaning": "happening too early.The baby was born premature",
          "example": "Example not provided."
        },
        {
          "word": "resent",
          "partOfSpeech": "v",
          "meaning": "to feel anger about.He resented being treated unfairly",
          "example": "Example not provided."
        },
        {
          "word": "satire",
          "partOfSpeech": "n",
          "meaning": "humorous criticism.The play was a satire on politics",
          "example": "Example not provided."
        },
        {
          "word": "scrutiny",
          "partOfSpeech": "n",
          "meaning": "close examination.The plan is under public scrutiny",
          "example": "Example not provided."
        },
        {
          "word": "segregate",
          "partOfSpeech": "v",
          "meaning": "to separate.Schools were once segregated by race",
          "example": "Example not provided."
        },
        {
          "word": "tumult",
          "partOfSpeech": "n",
          "meaning": "loud disorder.The crowd caused a tumult outside",
          "example": "Example not provided."
        },
        {
          "word": "uproar",
          "partOfSpeech": "n",
          "meaning": "loud noise, confusion.The joke caused an uproar of laughter",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "24": {
      "title": "Unit 24 – The Launch",
      "words": [
        {
          "word": "accelerate",
          "partOfSpeech": "v",
          "meaning": "to speed up.The car accelerated quickly",
          "example": "Example not provided."
        },
        {
          "word": "anew",
          "partOfSpeech": "adv",
          "meaning": "again, in a new way.She started her life anew in another city",
          "example": "Example not provided."
        },
        {
          "word": "dreary",
          "partOfSpeech": "adj",
          "meaning": "boring, dull.It was a dreary, rainy day",
          "example": "Example not provided."
        },
        {
          "word": "duplicate",
          "partOfSpeech": "v/n",
          "meaning": "to copy; a copy.He duplicated the report for everyone",
          "example": "Example not provided."
        },
        {
          "word": "electromagnetic",
          "partOfSpeech": "adj",
          "meaning": "related to electricity and magnetism.Radio waves are electromagnetic",
          "example": "Example not provided."
        },
        {
          "word": "glide",
          "partOfSpeech": "v",
          "meaning": "to move smoothly.The bird glided across the sky",
          "example": "Example not provided."
        },
        {
          "word": "ingenious",
          "partOfSpeech": "adj",
          "meaning": "very clever.She found an ingenious solution",
          "example": "Example not provided."
        },
        {
          "word": "innovative",
          "partOfSpeech": "adj",
          "meaning": "creative, new.They designed an innovative product",
          "example": "Example not provided."
        },
        {
          "word": "launch",
          "partOfSpeech": "v/n",
          "meaning": "to start, set into motion.They launched the new rocket",
          "example": "Example not provided."
        },
        {
          "word": "meteorological",
          "partOfSpeech": "adj",
          "meaning": "related to weather study.Meteorological data showed a storm",
          "example": "Example not provided."
        },
        {
          "word": "meteorology",
          "partOfSpeech": "n",
          "meaning": "the study of weather.She studied meteorology at university",
          "example": "Example not provided."
        },
        {
          "word": "penetrate",
          "partOfSpeech": "v",
          "meaning": "to enter or go through.The bullet penetrated the wall",
          "example": "Example not provided."
        },
        {
          "word": "persistent",
          "partOfSpeech": "adj",
          "meaning": "continuing without giving up.Her persistent efforts led to success",
          "example": "Example not provided."
        },
        {
          "word": "propulsion",
          "partOfSpeech": "n",
          "meaning": "force to move forward.The engine provides propulsion for the plane",
          "example": "Example not provided."
        },
        {
          "word": "simulate",
          "partOfSpeech": "v",
          "meaning": "to imitate.The pilot trained on a flight simulator",
          "example": "Example not provided."
        },
        {
          "word": "spur",
          "partOfSpeech": "v/n",
          "meaning": "to encourage; a motivation.His words spurred her to action",
          "example": "Example not provided."
        },
        {
          "word": "stimulate",
          "partOfSpeech": "v",
          "meaning": "to excite, to activate.The teacher stimulated discussion",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "25": {
      "title": "Unit 25 – The Manor",
      "words": [
        {
          "word": "beforehand",
          "partOfSpeech": "adv",
          "meaning": "earlier, in advance.We prepared beforehand for the trip",
          "example": "Example not provided."
        },
        {
          "word": "blurred",
          "partOfSpeech": "adj",
          "meaning": "unclear.Her vision was blurred after the accident",
          "example": "Example not provided."
        },
        {
          "word": "centigrade",
          "partOfSpeech": "adj/n",
          "meaning": "Celsius scale of temperature.It was 30 degrees centigrade",
          "example": "Example not provided."
        },
        {
          "word": "chatter",
          "partOfSpeech": "v/n",
          "meaning": "to talk quickly; fast talk.The kids chattered happily",
          "example": "Example not provided."
        },
        {
          "word": "concerto",
          "partOfSpeech": "n",
          "meaning": "a musical piece for solo and orchestra.The pianist performed a concerto",
          "example": "Example not provided."
        },
        {
          "word": "deteriorate",
          "partOfSpeech": "v",
          "meaning": "to get worse.The building deteriorated over time",
          "example": "Example not provided."
        },
        {
          "word": "zip",
          "partOfSpeech": "v/n",
          "meaning": "to fasten with a zipper; speed.She zipped her jacket",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder5",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder6",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder7",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder8",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder9",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder10",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder11",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder12",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder13",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "26": {
      "title": "Unit 26 – The Charter",
      "words": [
        {
          "word": "abolish",
          "partOfSpeech": "v",
          "meaning": "to officially end.They abolished the unfair law",
          "example": "Example not provided."
        },
        {
          "word": "amend",
          "partOfSpeech": "v",
          "meaning": "to change for the better.They amended the constitution",
          "example": "Example not provided."
        },
        {
          "word": "aspire",
          "partOfSpeech": "v",
          "meaning": "to hope for, aim.She aspires to be a doctor",
          "example": "Example not provided."
        },
        {
          "word": "poll",
          "partOfSpeech": "n/v",
          "meaning": "a survey; to ask opinions.The poll showed rising support",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder5",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder6",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder7",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder8",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder9",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder10",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder11",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder12",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder13",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder14",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder15",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder16",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "27": {
      "title": "Unit 27 – The Patriot",
      "words": [
        {
          "word": "coward",
          "partOfSpeech": "n",
          "meaning": "a person who lacks courage.The coward ran away from the fight",
          "example": "Example not provided."
        },
        {
          "word": "delete",
          "partOfSpeech": "v",
          "meaning": "to remove.She deleted the old files",
          "example": "Example not provided."
        },
        {
          "word": "exclude",
          "partOfSpeech": "v",
          "meaning": "to leave out.They excluded him from the meeting",
          "example": "Example not provided."
        },
        {
          "word": "patriot",
          "partOfSpeech": "n",
          "meaning": "someone loyal to their country.The patriots fought for independence",
          "example": "Example not provided."
        },
        {
          "word": "prosecute",
          "partOfSpeech": "v",
          "meaning": "to bring legal action against.The company was prosecuted for fraud",
          "example": "Example not provided."
        },
        {
          "word": "undermine",
          "partOfSpeech": "v",
          "meaning": "to weaken.His lies undermined their trust",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder5",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder6",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder7",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder8",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder9",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder10",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder11",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder12",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder13",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder14",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "28": {
      "title": "Unit 28 – The Vampire",
      "words": [
        {
          "word": "constrain",
          "partOfSpeech": "v",
          "meaning": "to limit or restrict.His illness constrained his activities",
          "example": "Example not provided."
        },
        {
          "word": "depot",
          "partOfSpeech": "n",
          "meaning": "a storage place or transport station.The bus depot is near the city center",
          "example": "Example not provided."
        },
        {
          "word": "emulate",
          "partOfSpeech": "v",
          "meaning": "to imitate or follow.Children often emulate their parents",
          "example": "Example not provided."
        },
        {
          "word": "forefinger",
          "partOfSpeech": "n",
          "meaning": "the index finger.He pointed with his forefinger",
          "example": "Example not provided."
        },
        {
          "word": "guts",
          "partOfSpeech": "n",
          "meaning": "bravery, courage.She had the guts to speak out",
          "example": "Example not provided."
        },
        {
          "word": "inherent",
          "partOfSpeech": "adj",
          "meaning": "naturally part of something.Freedom is an inherent right",
          "example": "Example not provided."
        },
        {
          "word": "intimidate",
          "partOfSpeech": "v",
          "meaning": "to scare or threaten.The bully intimidated the younger kids",
          "example": "Example not provided."
        },
        {
          "word": "janitor",
          "partOfSpeech": "n",
          "meaning": "a caretaker of a building.The janitor cleaned the school hallways",
          "example": "Example not provided."
        },
        {
          "word": "moist",
          "partOfSpeech": "adj",
          "meaning": "slightly wet.The soil was moist after the rain",
          "example": "Example not provided."
        },
        {
          "word": "nope",
          "partOfSpeech": "interj",
          "meaning": "informal “no.”“Did you finish it?” — “Nope.”",
          "example": "Example not provided."
        },
        {
          "word": "ransom",
          "partOfSpeech": "n",
          "meaning": "money paid for release.The kidnappers demanded a ransom",
          "example": "Example not provided."
        },
        {
          "word": "restrain",
          "partOfSpeech": "v",
          "meaning": "to hold back.Police restrained the suspect",
          "example": "Example not provided."
        },
        {
          "word": "saliva",
          "partOfSpeech": "n",
          "meaning": "liquid in the mouth.The sight of food made his mouth fill with saliva",
          "example": "Example not provided."
        },
        {
          "word": "sprint",
          "partOfSpeech": "v/n",
          "meaning": "to run quickly; a short fast run.She sprinted to catch the bus",
          "example": "Example not provided."
        },
        {
          "word": "stunt",
          "partOfSpeech": "n/v",
          "meaning": "a dangerous trick; to prevent growth.The movie had amazing stunts",
          "example": "Example not provided."
        },
        {
          "word": "tolerant",
          "partOfSpeech": "adj",
          "meaning": "accepting of others.We should be tolerant of different cultures",
          "example": "Example not provided."
        },
        {
          "word": "vampire",
          "partOfSpeech": "n",
          "meaning": "a mythical creature that drinks blood.The movie was about a vampire",
          "example": "Example not provided."
        },
        {
          "word": "yawn",
          "partOfSpeech": "v/n",
          "meaning": "to open mouth when tired; the act itself.He yawned during the lecture",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "29": {
      "title": "Unit 29 – The Petition",
      "words": [
        {
          "word": "adjoining",
          "partOfSpeech": "adj",
          "meaning": "next to or connected.Our rooms are adjoining",
          "example": "Example not provided."
        },
        {
          "word": "allege",
          "partOfSpeech": "v",
          "meaning": "to claim without proof.They alleged he was guilty",
          "example": "Example not provided."
        },
        {
          "word": "arch",
          "partOfSpeech": "n/v",
          "meaning": "a curved structure; to form a curve.The bridge had a stone arch",
          "example": "Example not provided."
        },
        {
          "word": "assemble",
          "partOfSpeech": "v",
          "meaning": "to gather or put together.The students assembled in the hall",
          "example": "Example not provided."
        },
        {
          "word": "casualty",
          "partOfSpeech": "n",
          "meaning": "a person hurt or killed.There were many casualties in the accident",
          "example": "Example not provided."
        },
        {
          "word": "hectare",
          "partOfSpeech": "n",
          "meaning": "a unit of land area (10,000 m²).The farm covers 20 hectares",
          "example": "Example not provided."
        },
        {
          "word": "heighten",
          "partOfSpeech": "v",
          "meaning": "to increase.The news heightened fears of war",
          "example": "Example not provided."
        },
        {
          "word": "hospitality",
          "partOfSpeech": "n",
          "meaning": "warm, friendly treatment of guests.We enjoyed their hospitality",
          "example": "Example not provided."
        },
        {
          "word": "mansion",
          "partOfSpeech": "n",
          "meaning": "a very large house.The actor lives in a mansion",
          "example": "Example not provided."
        },
        {
          "word": "outnumber",
          "partOfSpeech": "v",
          "meaning": "to be more numerous.The soldiers were outnumbered 2 to 1",
          "example": "Example not provided."
        },
        {
          "word": "overjoyed",
          "partOfSpeech": "adj",
          "meaning": "very happy.She was overjoyed at the news",
          "example": "Example not provided."
        },
        {
          "word": "pasture",
          "partOfSpeech": "n",
          "meaning": "land for animals to graze.Cows were eating grass in the pasture",
          "example": "Example not provided."
        },
        {
          "word": "petition",
          "partOfSpeech": "n/v",
          "meaning": "a formal request; to request formally.They signed a petition for cleaner air",
          "example": "Example not provided."
        },
        {
          "word": "renovate",
          "partOfSpeech": "v",
          "meaning": "to repair or improve.They renovated the old house",
          "example": "Example not provided."
        },
        {
          "word": "revise",
          "partOfSpeech": "v",
          "meaning": "to change or update.She revised her essay before submitting",
          "example": "Example not provided."
        },
        {
          "word": "slab",
          "partOfSpeech": "n",
          "meaning": "a large, flat piece.The sidewalk was made of concrete slabs",
          "example": "Example not provided."
        },
        {
          "word": "terrace",
          "partOfSpeech": "n",
          "meaning": "a flat outdoor area.They had lunch on the terrace",
          "example": "Example not provided."
        },
        {
          "word": "turf",
          "partOfSpeech": "n",
          "meaning": "grass-covered ground.The soccer players ran on the turf",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    },
    "30": {
      "title": "Unit 30 – The Thermometer",
      "words": [
        {
          "word": "analogous",
          "partOfSpeech": "adj",
          "meaning": "similar, comparable.The human brain is analogous to a computer",
          "example": "Example not provided."
        },
        {
          "word": "binoculars",
          "partOfSpeech": "n",
          "meaning": "an optical device for both eyes.He used binoculars to watch birds",
          "example": "Example not provided."
        },
        {
          "word": "comprise",
          "partOfSpeech": "v",
          "meaning": "to consist of.The class comprises 20 students",
          "example": "Example not provided."
        },
        {
          "word": "depict",
          "partOfSpeech": "v",
          "meaning": "to represent in art.The painting depicts a countryside scene",
          "example": "Example not provided."
        },
        {
          "word": "dual",
          "partOfSpeech": "adj",
          "meaning": "having two parts.She has dual citizenship",
          "example": "Example not provided."
        },
        {
          "word": "Fahrenheit",
          "partOfSpeech": "n/adj",
          "meaning": "a temperature scale.It was 90 degrees Fahrenheit today",
          "example": "Example not provided."
        },
        {
          "word": "grove",
          "partOfSpeech": "n",
          "meaning": "a small group of trees.They walked through an olive grove",
          "example": "Example not provided."
        },
        {
          "word": "ore",
          "partOfSpeech": "n",
          "meaning": "rock containing metal.The miners extracted iron ore",
          "example": "Example not provided."
        },
        {
          "word": "paradox",
          "partOfSpeech": "n",
          "meaning": "a statement that seems contradictory.It’s a paradox that silence can be loud",
          "example": "Example not provided."
        },
        {
          "word": "pier",
          "partOfSpeech": "n",
          "meaning": "a structure extending into water.We walked to the end of the pier",
          "example": "Example not provided."
        },
        {
          "word": "thermometer",
          "partOfSpeech": "n",
          "meaning": "a device for measuring temperature.The thermometer shows it’s 10 degrees",
          "example": "Example not provided."
        },
        {
          "word": "tilt",
          "partOfSpeech": "v/n",
          "meaning": "to lean to one side; a slant.The picture tilted to the left",
          "example": "Example not provided."
        },
        {
          "word": "placeholder1",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder2",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder3",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder4",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder5",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder6",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder7",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        },
        {
          "word": "placeholder8",
          "partOfSpeech": "n",
          "meaning": "Placeholder word - content to be added",
          "example": "This is a placeholder example."
        }
      ]
    }
  }
};;
        
    // Create 30 units for Book 6 with completely empty word lists
                    for (let unit = 1; unit <= 30; unit++) {
        vocabularyData.books[6].units[unit] = {
            title: "Unit " + unit + ": Basic Words",
                            words: []
                        };
    }
}

// Initialize the data
generateSampleData();

// Export the data
window.vocabularyData = vocabularyData;