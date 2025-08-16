// 4000 Essential English Words Data Structure
const vocabularyData = {
    books: {}
};

// Book 3 data from the actual text file with empty slots for future additions
const book3Data = {
    "1": [
        { word: "Acre", partOfSpeech: "Noun", meaning: "A unit for measuring area.", example: "They lived on a 150-acre farm." },
        { word: "Afterlife", partOfSpeech: "Noun", meaning: "A life that some people believe begins when a person dies.", example: "I believe that there is an afterlife." },
        { word: "Archaeology", partOfSpeech: "Noun", meaning: "The study of the remains left by ancient societies.", example: "He enjoyed visiting the Great Pyramids of Egypt because of his interest in archaeology." },
        { word: "Distinct", partOfSpeech: "Adjective", meaning: "A distinct thing is different or stands out.", example: "He has a distinct accent." },
        { word: "Elite", partOfSpeech: "Adjective", meaning: "Of or from a high-level group.", example: "Only an elite group was allowed membership into the club." },
        { word: "Engineer", partOfSpeech: "Verb", meaning: "To skillfully plan out how to make something.", example: "After engineering the robot, they needed to find the correct parts to build it." },
        { word: "Found", partOfSpeech: "Verb", meaning: "To start, organize, or establish something.", example: "My grandfather founded the City Bank." },
        { word: "Gap", partOfSpeech: "Noun", meaning: "A space between two things.", example: "There is a small gap between the blocks of wood." },
        { word: "Glory", partOfSpeech: "Noun", meaning: "The importance, magnificence, or specialness of something.", example: "They enjoyed the glory of the beautiful sunset." },
        { word: "Interior", partOfSpeech: "Noun", meaning: "The inside part of something.", example: "The interior of the house was beautifully decorated." },
        { word: "Royal", partOfSpeech: "Adjective", meaning: "Related to a king or queen.", example: "The Duchess was part of the royal family." },
        { word: "Sole", partOfSpeech: "Adjective", meaning: "The only one.", example: "She was the sole woman in the room." },
        { word: "Stairs", partOfSpeech: "Noun", meaning: "A set of steps built to go from one level of a building to another.", example: "He took the stairs instead of the elevator." },
        { word: "Surface", partOfSpeech: "Noun", meaning: "The top layer of something.", example: "She wiped the surface of the table." },
        // Empty slots for future additions (6 more slots to reach 20)
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" }
    ],
    "2": [
        { word: "Agreement", partOfSpeech: "Noun", meaning: "A formal decision about future action.", example: "I think you'll get Tom's agreement to this proposal." },
        { word: "Iron", partOfSpeech: "Noun", meaning: "A strong metal that is used to make many objects.", example: "The horse had shoes made of iron." },
        { word: "Ladder", partOfSpeech: "Noun", meaning: "An object that is used to climb up and down things.", example: "He used a ladder to climb to the top of his tree house." },
        { word: "Modest", partOfSpeech: "Adjective", meaning: "People who are modest do not think that they are too important.", example: "Derek is very modest for someone who is so rich." },
        { word: "Occupy", partOfSpeech: "Verb", meaning: "To fill or be in a place or space.", example: "The students occupied the library during exam week." },
        { word: "Province", partOfSpeech: "Noun", meaning: "An area that is controlled by a country.", example: "Canada is divided into several different provinces." },
        { word: "Satisfaction", partOfSpeech: "Noun", meaning: "The feeling of having done or received something good.", example: "Brad was filled with satisfaction when he saw what was for dinner." },
        { word: "Sustain", partOfSpeech: "Verb", meaning: "To keep something going.", example: "Wind power is a clean way to sustain a city with energy." },
        // Empty slots for future additions (12 more slots to reach 20)
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" }
    ],
    "3": [
        { word: "Acquire", partOfSpeech: "Verb", meaning: "To get or gain possession of something.", example: "Tina acquired a strange package yesterday." },
        { word: "Awkward", partOfSpeech: "Adjective", meaning: "Embarrassing and uncomfortable.", example: "After dropping his coffee cup, Robbie felt awkward." },
        { word: "Caretaker", partOfSpeech: "Noun", meaning: "A person who takes care of very young, old, or sick people.", example: "My grandmother's caretaker helps her get around the house." },
        { word: "Hut", partOfSpeech: "Noun", meaning: "A house made of wood, grass, or mud that has only one or two rooms.", example: "We all went into the hut to sleep." },
        { word: "Inferior", partOfSpeech: "Adjective", meaning: "Not as good as something else.", example: "Cars built a hundred years ago are inferior to ones built today." },
        { word: "Lodge", partOfSpeech: "Noun", meaning: "A house in the mountains used by people who hunt or fish.", example: "During our ski trip, we stayed at a lodge." },
        { word: "Neglect", partOfSpeech: "Verb", meaning: "To not take care of something properly.", example: "William neglected his room, so it is a complete mess." },
        { word: "Newcomer", partOfSpeech: "Noun", meaning: "A person who has recently arrived at a place or a group.", example: "The students highly welcomed the newcomer to the school." },
        { word: "Offense", partOfSpeech: "Noun", meaning: "Behavior that is wrong or breaks a law.", example: "Stealing a car is a very serious offense." },
        { word: "Shepherd", partOfSpeech: "Noun", meaning: "A person who protects and cares for sheep.", example: "The shepherd moved the sheep to another field." },
        { word: "Venture", partOfSpeech: "Verb", meaning: "To go to a place that may be dangerous.", example: "Even though it was dangerous, they ventured up the mountain." },
        { word: "Wheat", partOfSpeech: "Noun", meaning: "A plant from which we get the grain used to make bread.", example: "The field of golden wheat was ready to be harvested." },
        // Empty slots for future additions (8 more slots to reach 20)
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" }
    ],
    "4": [
        { word: "Loose", partOfSpeech: "Adjective", meaning: "Not held in place tightly.", example: "The bolt was loose, so I tightened it with the wrench." },
        { word: "Offend", partOfSpeech: "Verb", meaning: "To make someone angry or upset.", example: "They were both offended by what they had said to each other." },
        { word: "Overnight", partOfSpeech: "Adverb", meaning: "Happening during the night.", example: "The campers stayed in the tent overnight." },
        { word: "Persist", partOfSpeech: "Verb", meaning: "To continue to do something despite difficulty.", example: "She persisted in her studies even when it was difficult." },
        { word: "Sled", partOfSpeech: "Noun", meaning: "A small vehicle used on snow.", example: "Marvin likes to ride his sled down the hill in winter." },
        { word: "Tease", partOfSpeech: "Verb", meaning: "To laugh at or make fun of someone.", example: "Jake teased Charlie because he was the new student." },
        { word: "Valentine", partOfSpeech: "Noun", meaning: "Someone loved or admired with great affection.", example: "Harry wanted Molly to be his valentine." },
        // Empty slots for future additions (13 more slots to reach 20)
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" }
    ],
    "5": [
        { word: "Cemetery", partOfSpeech: "Noun", meaning: "A place where people are buried when they die.", example: "Some people are scared of cemeteries." },
        { word: "Creature", partOfSpeech: "Noun", meaning: "An animal or person.", example: "Those creatures live in Africa." },
        { word: "Curse", partOfSpeech: "Verb", meaning: "To hope that bad things happen to someone.", example: "The witch cursed the village." },
        { word: "Disguise", partOfSpeech: "Noun", meaning: "Something you wear so people cannot tell who you are.", example: "Everyone knew that it was Molly in the disguise." },
        { word: "Hood", partOfSpeech: "Noun", meaning: "Part of a coat that goes over a person's head.", example: "She put on her hood to keep her head warm." },
        { word: "Inhabitant", partOfSpeech: "Noun", meaning: "A person who lives in a certain place.", example: "The number of inhabitants in the countryside is increasing." },
        { word: "Nourish", partOfSpeech: "Verb", meaning: "To give someone or something the food needed to live.", example: "A good mother will nourish her baby every day." },
        { word: "Pirate", partOfSpeech: "Noun", meaning: "A sailor who steals things from other boats.", example: "Pirates are very scary characters." },
        { word: "Publication", partOfSpeech: "Noun", meaning: "Something printed, like a newspaper or book.", example: "She's been a subscriber to that publication for over ten years." },
        { word: "Riddle", partOfSpeech: "Noun", meaning: "A question that is difficult to answer but meant to be funny.", example: "I could not answer Wendy's riddle, but it made me laugh." },
        { word: "Spoil", partOfSpeech: "Verb", meaning: "To rot or to make bad.", example: "We left the fruit out too long, and it spoiled." },
        { word: "Starve", partOfSpeech: "Verb", meaning: "To not get enough food for a long period of time.", example: "During the war, many people starved." },
        { word: "Thrill", partOfSpeech: "Noun", meaning: "An exciting feeling.", example: "The surfer enjoys the thrill of surfing a big wave." },
        { word: "Wicked", partOfSpeech: "Adjective", meaning: "Very bad or evil.", example: "My boss is a very wicked man." },
        // Empty slots for future additions (6 more slots to reach 20)
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" }
    ],
    "6": [
        { word: "Alert", partOfSpeech: "Verb", meaning: "To tell or warn someone about something.", example: "The fire alarm alerted us that there was a problem." },
        { word: "Broadcast", partOfSpeech: "Noun", meaning: "A television or radio show.", example: "We watched the broadcast of the local news on TV." },
        { word: "Bulletin", partOfSpeech: "Noun", meaning: "A news report about very recent and important events.", example: "There was a bulletin about the earthquake on the radio." },
        { word: "District", partOfSpeech: "Noun", meaning: "A small part of a city, county, state, or country.", example: "I live in a residential district of Seattle, Washington." },
        { word: "Drawer", partOfSpeech: "Noun", meaning: "A small part in furniture that is used to store things.", example: "I put my clothes into the empty drawers." },
        { word: "Endure", partOfSpeech: "Verb", meaning: "To experience and survive something difficult.", example: "She had to endure her husband shouting all day long." },
        { word: "Execute", partOfSpeech: "Verb", meaning: "To kill someone as a legal punishment.", example: "Some people are executed for serious crimes." },
        { word: "Grasp", partOfSpeech: "Verb", meaning: "To hold something.", example: "He grasped the bag of money tightly." },
        { word: "Rear", partOfSpeech: "Noun", meaning: "The back part of something.", example: "The man loaded the rear of his truck with boxes." },
        { word: "Senator", partOfSpeech: "Noun", meaning: "Someone who makes laws for a state.", example: "The senator proposed a new law to improve education." },
        { word: "Tremendous", partOfSpeech: "Adjective", meaning: "Very large or very good.", example: "The Earth's oceans are filled with a tremendous amount of water." },
        { word: "Underneath", partOfSpeech: "Preposition", meaning: "Below or under.", example: "The roots of a tree are located underneath the ground." },
        { word: "Worm", partOfSpeech: "Noun", meaning: "A small animal with a long, thin body.", example: "Worms are often used to help catch fish." },
        // Empty slots for future additions (7 more slots to reach 20)
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" }
    ],
    "7": [
        { word: "Abandon", partOfSpeech: "Verb", meaning: "To leave something forever or for a long time.", example: "The old room had been abandoned years before." },
        { word: "Ambitious", partOfSpeech: "Adjective", meaning: "Wants to be rich or successful.", example: "Kendra had to be ambitious to get into medical school." },
        { word: "Bark", partOfSpeech: "Verb", meaning: "To make a short, loud noise, like a dog.", example: "The dog barked loudly and frighteningly." },
        { word: "Bay", partOfSpeech: "Noun", meaning: "A part of the sea enclosed by a curve of the shore.", example: "The bay was calm and peaceful." },
        { word: "Deaf", partOfSpeech: "Adjective", meaning: "Cannot hear.", example: "Susan uses sign language because she is deaf." },
        { word: "Enthusiastic", partOfSpeech: "Adjective", meaning: "Excited by or interested in something.", example: "The man was enthusiastic about his job." },
        { word: "Expedition", partOfSpeech: "Noun", meaning: "A long trip, usually to a place very far away.", example: "They got into their spaceship to begin their expedition." },
        { word: "Horizon", partOfSpeech: "Noun", meaning: "Where the sky looks like it meets the ground.", example: "The sun dipped below the horizon." },
        { word: "Loyal", partOfSpeech: "Adjective", meaning: "Always help or support a certain person or thing.", example: "The three friends are very loyal to each other." },
        { word: "Mayor", partOfSpeech: "Noun", meaning: "The person in charge of a city.", example: "The mayor of my hometown is quite a powerful speaker." },
        { word: "Mutual", partOfSpeech: "Adjective", meaning: "Shared by two or more people or groups.", example: "They had a mutual agreement." },
        { word: "Rub", partOfSpeech: "Verb", meaning: "To push on something and move your hand back and forth.", example: "Mom's feet were sore, so she rubbed them." },
        { word: "Senses", partOfSpeech: "Noun", meaning: "How living things experience the world: sight, taste, smell, hearing, and touch.", example: "It would be hard to live without your five senses." },
        { word: "Veterinarian", partOfSpeech: "Noun", meaning: "A doctor who takes care of animals.", example: "Wanda became a veterinarian because she loves dogs." },
        // Empty slots for future additions (6 more slots to reach 20)
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" }
    ],
    "8": [
        { word: "Anniversary", partOfSpeech: "Noun", meaning: "A day that celebrates something from the past.", example: "My parents went out to a restaurant for their wedding anniversary." },
        { word: "Arithmetic", partOfSpeech: "Noun", meaning: "Math.", example: "I like to study arithmetic at school." },
        { word: "Ashamed", partOfSpeech: "Adjective", meaning: "Feeling guilt or embarrassment.", example: "He was ashamed when he forgot his teacher's name." },
        { word: "Burst", partOfSpeech: "Verb", meaning: "To suddenly break open or apart.", example: "The bomb burst and caused a lot of damage." },
        { word: "Couch", partOfSpeech: "Noun", meaning: "A long seat for more than one person.", example: "Kim and Martin's new couch was very expensive." },
        { word: "Drip", partOfSpeech: "Verb", meaning: "To fall a little bit at a time.", example: "I heard water dripping from the faucet." },
        { word: "Elegant", partOfSpeech: "Adjective", meaning: "Very fancy and pleasing.", example: "In Japan, women wear elegant kimonos on special occasions." },
        { word: "Fabric", partOfSpeech: "Noun", meaning: "Cloth used to make clothes, furniture, etc.", example: "The towels were made from a soft fabric." },
        { word: "Highlands", partOfSpeech: "Noun", meaning: "High areas of land, usually with mountains.", example: "The man had a small home in the highlands." },
        { word: "Ivory", partOfSpeech: "Noun", meaning: "A hard, white substance that comes from elephants.", example: "The elephant's long ivory tusks looked very impressive." },
        { word: "Mill", partOfSpeech: "Noun", meaning: "A building in which wheat is ground into flour.", example: "The farmer took his wheat to the mill to make it into flour." },
        { word: "Needle", partOfSpeech: "Noun", meaning: "A small, sharp tool used for sewing.", example: "She used a needle to sew the button." },
        { word: "Shed", partOfSpeech: "Noun", meaning: "A small building used to store things like tools.", example: "We have a small shed in the backyard for storage." },
        { word: "Thread", partOfSpeech: "Noun", meaning: "A thin piece of string.", example: "I have many different colors of thread at home." },
        { word: "Trim", partOfSpeech: "Verb", meaning: "To cut something a little bit.", example: "I had my hair trimmed this afternoon." },
        { word: "Upwards", partOfSpeech: "Adverb", meaning: "Moving vertically towards the direction above.", example: "The kite went upwards further and further." },
        // Empty slots for future additions (4 more slots to reach 20)
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" }
    ],
    "9": [
        { word: "Ally", partOfSpeech: "Noun", meaning: "Someone who agrees to help or support another person or group.", example: "I was happy to find many allies who shared my opinion." },
        { word: "Boast", partOfSpeech: "Verb", meaning: "To talk about how great one is.", example: "We all became tired of listening to him boast about himself all day." },
        { word: "Bounce", partOfSpeech: "Verb", meaning: "To move up and away from a surface after hitting it.", example: "Owen bounced the ball on the ground." },
        { word: "Defeat", partOfSpeech: "Verb", meaning: "To win against someone in a fight or competition.", example: "He defeated the challenger in the boxing match." },
        { word: "Dial", partOfSpeech: "Noun", meaning: "A circular tool, like the front of a clock.", example: "I looked at the dial to see what time it was." },
        { word: "Dominant", partOfSpeech: "Adjective", meaning: "Stronger than others.", example: "The gorilla is one of the dominant animals in the jungle." },
        { word: "Entire", partOfSpeech: "Adjective", meaning: "The whole thing or group.", example: "The entire table was covered with food." },
        { word: "Mercy", partOfSpeech: "Noun", meaning: "A feeling or act of kindness.", example: "He asked his boss for mercy and to not fire him." },
        { word: "Nod", partOfSpeech: "Verb", meaning: "To move your head up and down.", example: "I nodded my head as I listened to the song." },
        { word: "Opponent", partOfSpeech: "Noun", meaning: "A person or group trying to defeat another person or group.", example: "On the field, our opponents were too good for us." },
        { word: "Quarrel", partOfSpeech: "Verb", meaning: "To argue or fight.", example: "They quarreled about the money." },
        { word: "Sting", partOfSpeech: "Verb", meaning: "To cause sharp pain, like from a bee.", example: "The needle stung my arm and made me say, 'Ouch!'" },
        { word: "Strain", partOfSpeech: "Verb", meaning: "To try very hard.", example: "Casey strained to lift the heavy box." },
        { word: "Torture", partOfSpeech: "Noun", meaning: "Action that causes physical or mental pain.", example: "Greg thought that writing the essay was torture." },
        { word: "Wrestle", partOfSpeech: "Verb", meaning: "To try to push another competitor to the floor.", example: "My dad loved to wrestle when he was in high school." },
        // Empty slots for future additions (5 more slots to reach 20)
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" }
    ],
    "10": [
        { word: "Absence", partOfSpeech: "Noun", meaning: "The state of something being away.", example: "There is an absence of sand in the hourglass." },
        { word: "Aloud", partOfSpeech: "Adverb", meaning: "Done so that people can hear it.", example: "My father often reads stories aloud to me and my sister." },
        { word: "Bald", partOfSpeech: "Adjective", meaning: "Having no hair.", example: "My oldest brother is bald." },
        { word: "Blanket", partOfSpeech: "Noun", meaning: "A piece of cloth that people use to keep warm.", example: "I covered myself with a warm blanket." },
        { word: "Imitate", partOfSpeech: "Verb", meaning: "To copy or act the same way.", example: "He imitated his favorite superhero by putting on a costume." },
        { word: "Infant", partOfSpeech: "Noun", meaning: "A baby.", example: "The infant cried all night." },
        { word: "Kidnap", partOfSpeech: "Verb", meaning: "To take someone illegally.", example: "She was terrified to find out her son had been kidnapped." },
        { word: "Nap", partOfSpeech: "Noun", meaning: "A short sleep, usually during the day.", example: "I took a short nap because I had stayed up late last night." },
        { word: "Nowhere", partOfSpeech: "Adverb", meaning: "No place or not existing.", example: "Unfortunately, water was nowhere to be found." },
        { word: "Pat", partOfSpeech: "Verb", meaning: "To hit something softly with your hand.", example: "I patted some lotion onto my face." },
        { word: "Relief", partOfSpeech: "Noun", meaning: "A good feeling after something bad or challenging ends.", example: "I felt a sense of relief when I heard the good news." },
        { word: "Reproduce", partOfSpeech: "Verb", meaning: "To make something again.", example: "The artist reproduced the painting." },
        { word: "Urgent", partOfSpeech: "Adjective", meaning: "Requiring immediate action or attention.", example: "I had to leave at that moment; it was urgent." },
        { word: "Vanish", partOfSpeech: "Verb", meaning: "To go away suddenly.", example: "All the passengers vanished from the train station." },
        { word: "Wagon", partOfSpeech: "Noun", meaning: "A cart used to carry heavy things.", example: "He used his wagon to carry some of his gifts." },
        { word: "Wrinkle", partOfSpeech: "Noun", meaning: "A line on a person's face that appears as they get old.", example: "My grandfather has some wrinkles on his face." },
        // Empty slots for future additions (4 more slots to reach 20)
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" },
        { word: "", partOfSpeech: "", meaning: "", example: "" }
    ]
};

// Generate books with actual data (Book 3) and empty structure (Books 4-6)
function generateSampleData() {
    // Add Book 3 with actual data
    vocabularyData.books[3] = {
        title: `Book 3 - ${getBookLevel(3)}`,
        units: {}
    };
    
    // Add actual Book 3 units
    for (let unit = 1; unit <= 10; unit++) {
        if (book3Data[unit]) {
            vocabularyData.books[3].units[unit] = {
                title: `Unit ${unit}: ${getUnitTheme(unit)}`,
                words: book3Data[unit]
            };
        }
    }
    
    // Generate remaining units for Book 3 (11-30) with sample data (to be replaced with actual data later)
    for (let unit = 11; unit <= 30; unit++) {
        vocabularyData.books[3].units[unit] = {
            title: `Unit ${unit}: ${getUnitTheme(unit)}`,
            words: generateUnitWords(unit, 3)
        };
    }
    
    // Add books (4-6) with empty structure for future uploads
    for (let book = 4; book <= 6; book++) {
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

function generateUnitWords(unit, book) {
    const words = [];
    const baseWords = [
        "achieve", "adapt", "admire", "advance", "advantage", "adventure", "affect", "agree", "allow", "amaze",
        "analyze", "announce", "appear", "apply", "approach", "approve", "argue", "arrange", "arrive", "assume",
        "attend", "attract", "avoid", "aware", "balance", "believe", "belong", "benefit", "blame", "bother",
        "breathe", "brief", "bright", "build", "burn", "burst", "bury", "calculate", "cancel", "care",
        "carry", "catch", "cause", "celebrate", "challenge", "change", "charge", "check", "choose", "claim",
        "clean", "clear", "climb", "close", "collect", "combine", "come", "comfort", "command", "comment",
        "commit", "compare", "compete", "complete", "concern", "confirm", "connect", "consider", "consist", "contain",
        "continue", "control", "convince", "cook", "copy", "correct", "count", "cover", "create", "cross",
        "cry", "cut", "damage", "dance", "dare", "decide", "declare", "decrease", "defend", "define",
        "delay", "deliver", "demand", "deny", "depend", "describe", "design", "destroy", "develop", "die",
        "differ", "discover", "discuss", "divide", "do", "draw", "dream", "drink", "drive", "drop",
        "earn", "eat", "educate", "elect", "employ", "encourage", "end", "enjoy", "enter", "escape",
        "establish", "estimate", "examine", "exist", "expect", "experience", "explain", "express", "extend", "face",
        "fail", "fall", "fear", "feel", "fight", "fill", "find", "finish", "fit", "fix",
        "follow", "force", "forget", "forgive", "form", "found", "free", "freeze", "gain", "gather",
        "get", "give", "go", "grow", "guess", "guide", "handle", "happen", "hate", "have",
        "hear", "help", "hide", "hit", "hold", "hope", "hurt", "imagine", "improve", "include",
        "increase", "indicate", "inform", "insist", "intend", "interest", "introduce", "invent", "invite", "join",
        "jump", "keep", "kill", "know", "lack", "laugh", "lay", "lead", "learn", "leave",
        "let", "lie", "like", "limit", "listen", "live", "look", "lose", "love", "make",
        "manage", "mark", "marry", "match", "matter", "mean", "measure", "meet", "mention", "mind",
        "miss", "move", "name", "need", "note", "notice", "obey", "obtain", "occur", "offer",
        "open", "order", "organize", "own", "pass", "pay", "perform", "pick", "place", "plan",
        "play", "please", "point", "possess", "prefer", "prepare", "present", "prevent", "produce", "promise",
        "protect", "prove", "provide", "pull", "push", "put", "raise", "reach", "read", "realize",
        "receive", "recognize", "record", "reduce", "refer", "refuse", "regard", "relate", "remain", "remember",
        "remove", "repeat", "replace", "reply", "report", "represent", "request", "require", "research", "respect",
        "respond", "rest", "result", "return", "reveal", "review", "ride", "ring", "rise", "risk",
        "run", "save", "say", "see", "seek", "seem", "sell", "send", "serve", "set",
        "shake", "share", "shoot", "show", "shut", "sing", "sit", "sleep", "smile", "speak",
        "spend", "stand", "start", "stay", "stop", "study", "succeed", "suffer", "suggest", "supply",
        "support", "suppose", "survive", "take", "talk", "teach", "tell", "think", "throw", "touch",
        "train", "travel", "treat", "trust", "try", "turn", "understand", "use", "value", "visit",
        "wait", "walk", "want", "warn", "wash", "watch", "wear", "win", "wish", "wonder",
        "work", "worry", "write", "yield"
    ];
    
    // Generate 20 words per unit
    for (let i = 0; i < 20; i++) {
        const wordIndex = (unit * 20 + i) % baseWords.length;
        const word = baseWords[wordIndex];
        const meanings = [
            "to accomplish or complete successfully",
            "to adjust to new conditions",
            "to regard with respect and approval",
            "to move forward or make progress",
            "a beneficial factor or circumstance",
            "an exciting or dangerous journey",
            "to have an influence on",
            "to have the same opinion",
            "to give permission",
            "to surprise greatly"
        ];
        const partsOfSpeech = ["verb", "noun", "adjective", "adverb"];
        const examples = [
            "I will achieve my goals this year.",
            "You need to adapt to the new environment.",
            "I admire your hard work.",
            "Technology continues to advance rapidly.",
            "Being bilingual is a great advantage.",
            "We went on an adventure in the mountains.",
            "Weather can affect your mood.",
            "I agree with your opinion.",
            "The teacher will allow extra time.",
            "The magician's tricks amaze the audience."
        ];
        
        words.push({
            word: word,
            meaning: meanings[i % meanings.length],
            partOfSpeech: partsOfSpeech[i % partsOfSpeech.length],
            example: examples[i % examples.length]
        });
    }
    
    return words;
}

// Initialize the data
generateSampleData();

// Export the data
window.vocabularyData = vocabularyData;