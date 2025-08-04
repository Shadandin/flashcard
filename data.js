// 4000 Essential English Words Data Structure
const vocabularyData = {
    books: {}
};

// Generate books with sample data (Books 1-6)
function generateSampleData() {
    // Add books (1-6) with generated data
    for (let book = 1; book <= 6; book++) {
        vocabularyData.books[book] = {
            title: `Book ${book} - ${getBookLevel(book)}`,
            units: {}
        };
        
        // Generate 30 units for each book
        for (let unit = 1; unit <= 30; unit++) {
            vocabularyData.books[book].units[unit] = {
                title: `Unit ${unit}: ${getUnitTheme(unit)}`,
                words: generateUnitWords(unit, book)
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