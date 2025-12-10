// names.js

const NAMES_BY_CULTURE = {
  "Human (Barbarian)": {
    given: [
      "Ragnar", "Bjorn", "Kael", "Drago", "Frey", "Grim", "Torvin", "Wulf", "Brok", "Varrag", "Hilda", "Freya", "Grizel", "Svala", "Jora", "Mara", "Ayla", "Lethra", "Runa", "Valka", "Karg", "Jarl", "Borin", "Stig", "Thorn", "Garth", "Lethan", "Morkai", "Ulf", "Gann", "Bronwyn", "Sigrid", "Helga", "Orla", "Tyra", "Solveig", "Ylva", "Astrid", "Eira", "Saga", "Fenrir", "Hakon", "Lykos", "Odin", "Steinar", "Skadi", "Groa", "Tindra", "Varin", "Roric",
    ],
    surnames: [
      "Ironfist", "Bear-Killer", "Frostbeard", "Axebreaker", "Storm-Wielder", "Wolf-Heart", "Ice-Vein", "Mountain-Born", "Rageshaper", "Blood-Axe", "Thundercaller", "Longstride", "Stonehand", "Red-Hair", "The Fierce", "Battle-Scarred", "Oaksbane", "Sonsdottir", "Rocksplitter", "The Unbowed", "Grimfang", "Shieldbiter", "Fire-Eye", "Mistwalker", "Cinderbrow", "Great-Horn", "Blackmane", "Winter's Fury", "Fellhand", "Iron-Skin", "Grizzly", "Raven's Son", "Mammoth-Kin", "The Wanderer", "Stormblade", "Crushbone", "Troll-Foot", "Wilder", "Seafury", "Vikingr", "Son-of-Kael", "Daughter-of-Mara", "The Bold", "The Swift", "The Silent", "The Hunter", "The Strong", "The Savage", "The Mad", "The Bloody",
    ],
  },

  "Human (Civilised)": {
    given: [
      "William", "Thomas", "Robert", "Edgar", "Geoffrey", "Henry", "Richard", "Edward", "Arthur", "Walter", "Alice", "Eleanor", "Matilda", "Isabel", "Catherine", "Joan", "Margaret", "Cecilia", "Emma", "Juliana", "Alaric", "Theodore", "Lysander", "Peregrin", "Cassian", "Clement", "Godfrey", "Laurent", "Vincent", "Dorian", "Seraphina", "Anya", "Elara", "Vivianne", "Lenore", "Clarice", "Rosalind", "Genevieve", "Beatrice", "Stella", "Sebastian", "Baldwin", "Hugh", "Miles", "Gilbert", "Anne", "Philippa", "Lillian", "Adelaide", "Flora",
    ],
    surnames: [
      "Blackwood", "Silvertongue", "Grimfang", "Ironhand", "Highwater", "Dragonmere", "Oakenshield", "Sunstone", "Greycloak", "Winterfell", "Brightblade", "Avenstaff", "Thornfield", "Glimmerhold", "Riverwind", "Stormgarde", "Falconer", "Truesong", "Lionheart", "Goldcrest", "Emberfall", "Ashworth", "Towerguard", "Starkweather", "Moorcock", "Ravenscroft", "Whitehall", "Brookside", "Hearthstone", "Pendleton", "Vance", "Garrick", "Sable", "Hawthorne", "Wyvern", "Lockwood", "Cromwell", "Pendragon", "Blackwell", "Thornwood", "Barrington", "Locke", "Fairweather", "Deepwell", "Stonebridge", "Farnsworth", "Lightfoot", "Grimshaw", "Valiant", "Wexley",
    ],
  },

  "Human (Nomad)": {
    given: [
      "Kael", "Zayne", "Rayan", "Jafar", "Tarek", "Shyra", "Leila", "Samira", "Khadija", "Dina", "Temujin", "Batu", "Khan", "Altan", "Jochi", "Borte", "Anya", "Saran", "Chuluun", "Erdene", "Sirocco", "Gale", "Kestrel", "Hawk", "Jagger", "Canyon", "Dune", "Rider", "Storm", "Dust", "Asha", "Rima", "Zara", "Nadir", "Jamal", "Faris", "Aisha", "Khalid", "Amira", "Malik", "Arkas", "Batuul", "Falk", "Kiran", "Reza", "Sasha", "Vesper", "Yara", "Zar", "Rhea",
    ],
    surnames: [
      "Windswift", "Dune-Runner", "Sand-Born", "Horse-Kin", "Sky-Watcher", "Desert-Eye", "Steppe-Wolf", "Iron-Hoof", "Free-Rider", "Trailblazer", "Son-of-Zayn", "Daughter-of-Kira", "Tribe-of-Eagle", "The Scarred", "The Silent", "Great-Archer", "Dust-Dancer", "Rock-Hand", "Vulture-Kin", "Swift-Arrow", "Storm-Caller", "Long-Road", "Fire-Heart", "Sun-Hunter", "Pebble-Walker", "Grey-Mane", "Wasteland", "The Outrider", "Gale's Child", "Khagan", "Shadewatcher", "River-Seeker", "Endless-Horizon", "Moon-Trader", "The Unseen", "Sand-Storm", "Star-Guide", "Brave-One", "Of the Sands", "Clan-Steel", "Black-Tent", "War-Banner", "Whispering-Grass", "Mountain-Climber", "Sky-Nomad", "Wind-Shifter", "Desert-Fox", "The Tireless", "Wolf-Tribe", "Steppe-Guard",
    ],
  },
  
  "Human (Primitive)": {
    given: [
      "Grok", "Roga", "Kull", "Ona", "Turo", "Zar", "Bror", "Lika", "Vex", "Jara", "Stone", "Flint", "Hawk", "Moss", "River", "Shale", "Wolf", "Clay", "Fang", "Thorn", "Aka", "Boru", "Dara", "Garm", "Hema", "Juno", "Kael", "Mora", "Nari", "Orin", "Sila", "Tark", "Ulan", "Varg", "Yula", "Zol", "Rune", "Lumi", "Breck", "Tor", "Grot", "Mira", "Sauk", "Fael", "Kain", "Lyra", "Zen", "Elor", "Bael", "Ryl",
    ],
    surnames: [
      "Cave-Dweller", "Bear-Heart", "Stone-Arm", "Swift-Foot", "Fire-Giver", "Mammoth-Slayer", "River-Daughter", "The Unbreakable", "Axe-Hand", "Of the Green-Tribe", "Wolf's Son", "Great-Hunter", "Red-Ochre", "Spear-Tip", "Bone-Crafter", "The Silent", "Rock-Carver", "Deep-Shaman", "Cave-Painter", "Wind's Child", "Grit-Tooth", "Long-Stride", "Grey-Pelt", "Elder-Seed", "Clan-of-Rock", "Sharp-Eye", "Mud-Blooded", "Horn-Blower", "The Quick", "Strong-Back", "Ice-Walker", "Daughter-of-Ona", "Forest-Voice", "Tall-Shadow", "The Feared", "Stone-Bearer", "Grave-Guard", "The Cunning", "Ember-Seeker", "Water-Drinker", "Pebble-Tribe", "Crush-Grasper", "Rope-Maker", "Skin-Stitcher", "Great-Shout", "The Limping", "The Mad", "Moss-Eater", "Tusk-Breaker", "Hill-Guard",
    ],
  },
  
  Dwarf: {
    given: [
      "Gavur", "Glogin", "Bonir", "Radiol", "Aigror", "Aivor", "Glolor", "Radol", "Boril", "Dartiol", "Tholvil", "Dudor", "Bagin", "Dilvon", "Raron", "Amil", "Bolvan", "Ranan", "Ragron", "Magrin", "Randur", "Runion", "Rumiol", "Duvur", "Ragriol", "Ralviol", "Gigrir", "Dulion", "Rundor", "Madir", "Aigon", "Bogiol", "Malvin", "Damon", "Aimol", "Gloniol", "Dalgol", "Rulvil", "Airtiol", "Andin", "Ralon", "Mavon", "Bogrin", "Givon", "Dodir", "Drargol", "Rugril", "Galvol", "Magin", "Dimon", "Dagriol", "Athil", "Ragran", "Ainion", "Avor", "Mathor", "Digran", "Baril", "Galgir", "Dilvan",
    ],
    surnames: [
      "Battlehammer", "Blackbanner", "Blackbeard", "Blackhammer", "Blackhill", "Blackiron", "Blackmountain", "Blackshield", "Bloodforge", "Brightaxe", "Brightblaze", "Darkfell", "Deepaxe", "Firebeard", "Foehammer", "Goldenhelm", "Goldforge", "Greyaxe", "Greybeard", "Greyforge", "Greyhelm", "Ironaxe", "Ironbeard", "Ironbreaker", "Ironbrow", "Ironforge", "Ironhaft", "Ironhammer", "Ironhand", "Ironheart", "Ironhelm", "Ironhill", "Ironshield", "Ironwind", "Redaxe", "Redhammer", "Redhelm", "Shieldbreaker", "Silverbeard", "Silverforge", "Silverhammer", "Silvershield", "Stoneaxe", "Stonebear", "Stonebeard", "Stoneforge", "Stonehammer", "Stoneheart", "Stonehelm", "Stoneseeker", "Stoneshield", "Stonesinger", "Stonesplitter", "Stonewind", "Trueforge", "Ironspirit", "Spiritforge", "Stonespirit", "Thunderaxe", "Thunderhammer", "Thunderforge", "Firstaxe", "Firstforge", "Stonearm", "Ironarm", "Thundervoice", "Ironvoice", "Goldtongue"
    ],
  },
  
  Elf: {
    given: [
      "Aerthos", "Lariel", "Faelar", "Sylvana", "Mithos", "Lyraen", "Thaelen", "Nimrodel", "Elara", "Galdor", "Valenia", "Riel", "Calian", "Elora", "Darith", "Anya", "Fenris", "Tauriel", "Orophin", "Ilyana", "Gilthas", "Linnaea", "Aelion", "Nessa", "Malon", "Rina", "Caeleb", "Dainelle", "Lorien", "Isil", "Coran", "Lyrana", "Rathien", "Sariya", "Erendil", "Nyssa", "Tariq", "Vivien", "Faenor", "Shava", "Aelrindel", "Maelora", "Darcassan", "Tessara", "Vamrion", "Zylpha", "Alarion", "Briar", "Endoar", "Lysandra"
    ],
    surnames: [
      "Nightwhisper", "Moonshadow", "Silverleaf", "Windrunner", "Starseeker", "Greenshield", "Whisperwind", "Dawnstrider", "Brightwood", "Sunstone", "Swiftbow", "Deepwoods", "Aegis", "Elmsdown", "Goldentree", "Shadowmere", "Lightfoot", "Riverstream", "Forestheart", "Truesong", "Gemflower", "Stormhand", "Emberglow", "Purewater", "Sylvanus", "Aeron", "Glimmer", "Oakenshield", "Featherstep", "Winterfell", "Duskwood", "Aura", "Skyfire", "Shadowfall", "Frosthelm", "Stoneguard", "Longstride", "Mistweaver", "Ironbark", "Starlight", "Faelar", "Crescent", "Vanya", "Lothlorien", "Silvanesti", "Eldarin", "Telcontar", "Amakiir", "Moonbrook", "Evergreen",
    ],
  },
  
  Gnome: {
    given: [
      "Bramble", "Flicker", "Glim", "Wizzle", "Pippin", "Tinker", "Gidget", "Fizban", "Sprocket", "Snickle", "Zippy", "Gnorman", "Nibs", "Wiggin", "Jingle", "Fizzle", "Chip", "Knickers", "Grizelda", "Wally", "Midge", "Bimble", "Skittles", "Pipkin", "Trixie", "Grungle", "Cogsley", "Nutmeg", "Barnaby", "Whirl", "Gizmo", "Nettle", "Pumble", "Dizzy", "Gaffy", "Twinkle", "Rumble", "Minnow", "Beryl", "Stumpy", "Razzle", "Wren", "Fiddle", "Toad", "Wink", "Gilda", "Boffin", "Zook", "Blinky", "Squiggle",
    ],
    surnames: [
      "Coppersmith", "Tanglefoot", "Fimble", "Whistlewick", "Sparklegem", "Geargrinder", "Fizzywig", "Bellows", "Nicker", "Pumblefoot", "Gizmotron", "Wobbletock", "Stoneyhill", "Tinkerton", "Grizzlebeard", "Copperpot", "Buttonbrew", "Nutshell", "Whirligig", "Bramblefoot", "Rumblegut", "Screwloose", "Teakettle", "Quickstep", "Gadget", "Snicklefritz", "Wigglestick", "Flitterwing", "Pocketful", "Brightstone", "Wizzlebang", "Clockwork", "Zookington", "Grubblemoss", "Hollowpot", "Pipsqueak", "Fungus", "Cackleberry", "Rattletrap", "Smallscale", "Thimble", "Grumblefoot", "Sprockette", "Treetop", "Winklebottom", "Zz'glug", "Sparkle", "Ironknob", "Shiney", "Flintpicker",
    ],
  },
  
    Halfling: {
    given: [
      "Perrin", "Rosie", "Milo", "Pansy", "Samwise", "Holly", "Frodo", "Poppy", "Merry", "Lavender", "Pippin", "Daisy", "Tobold", "Marigold", "Hob", "Lily", "Otho", "Myrtle", "Will", "Primrose", "Esmeralda", "Bill", "Adalgrim", "Bell", "Bandobras", "Angelica", "Hamfast", "Ruby", "Doderic", "Butterbur", "Jolly", "Rose", "Folco", "Beryl", "Fosco", "Clover", "Ted", "Pearl", "Fredegar", "Hazel", "Digory", "Petunia", "Rory", "Lalia", "Drogo", "Jessamine", "Farmer", "Pringle", "Boffin", "Tansy",
    ],
    surnames: [
      "Took", "Brandybuck", "Gamgee", "Baggins", "Proudfoot", "Cotton", "Goodbody", "Grubb", "Bolger", "Chubb", "Boffin", "Sackville", "Burrows", "Greenhand", "Smallfoot", "Underhill", "Overhill", "Heathertoes", "Hilltopple", "Deepdelver", "Pebblestone", "Meadowlight", "Longbottom", "Highlands", "Riverbank", "Sweetwhistle", "Quickbeam", "Thistlewick", "Barrelbottom", "Honeyflow", "Gaffer", "Noakes", "Brockhouse", "Brownlock", "Twofoot", "Tunnelly", "Sandheaver", "Goldworthy", "Stoutman", "Fairyfoot", "Bellflower", "Honeyman", "Appleblossom", "Sunnyside", "Crumblefoot", "Mudbottom", "Thistlebrook", "Haywood", "Gravelfoot", "Stonebow",
    ],
  },
  
  "Half-Elf (Elf-raised)": {
    given: [
      "Elaraen", "Faeril", "Aerion", "Lyraenor", "Theren", "Niamh", "Kaelen", "Isildur", "Rianna", "Aeliana", "Valenor", "Elarion", "Sylvanus", "Nimue", "Anyael", "Lianen", "Darian", "Thalia", "Corin", "Althalus", "Mirenn", "Orionel", "Linwe", "Elor", "Caelyn", "Briarose", "Aerandir", "Eldaen", "Laelen", "Gildas", "Vanyel", "Aurae", "Rielan", "Saeran", "Faelar", "Calian", "Darthiir", "Nalaen", "Taurian", "Ilyara", "Olorin", "Liria", "Aldonel", "Nessaia", "Malonel", "Rinath", "Fenarin", "Shavael", "Endarien", "Lysandir",
    ],
    surnames: [
      "Moonwhisper", "Starbreeze", "Dawnheart", "Shadowdale", "Silverwood", "Windlight", "Brightsoul", "Greycloak", "Deepglade", "Winterstream", "Sunborn", "Rivermist", "Trueleaf", "Emberfall", "Forestsong", "Longshadow", "Oakheart", "Stardust", "Gentlehand", "Quickstep", "Fairchild", "Twinblade", "Veiledmoon", "Stonefey", "Hearthlight", "Faelandir", "Nighthill", "Aelstra", "Rinewake", "Lothian", "Halfblood", "Two-Worlds", "Ironwood", "Starfire", "Whisperwind", "Greyhame", "Elvenstar", "Silvershield", "Goldengrove", "Brightaxe", "Eldarion", "Halfelven", "Lorien", "Mithril", "Sunfire", "Valen", "Vanyar", "Sindarin", "Noldor", "Teleri",
    ],
  },
  
  "Half-Elf (Human-raised)": {
    given: [
      "Liam", "Elias", "Caleb", "Ethan", "Owen", "Arthur", "Gabriel", "Henry", "Julian", "Miles", "Chloe", "Isabelle", "Sophie", "Grace", "Ava", "Clara", "Eleanor", "Rose", "Viola", "Madeline", "Jasper", "Felix", "Theo", "Nora", "Hazel", "Finn", "Eliza", "Victor", "Silas", "Charlotte", "Evelyn", "Marcus", "Lucas", "Alice", "Edgar", "Jane", "Samuel", "Gemma", "Patrick", "Vivian", "Daniel", "Mira", "Leo", "Audrey", "James", "Penelope", "Wyatt", "Scarlett", "Dean", "Lydia",
    ],
    surnames: [
      "Greenwood", "Longshanks", "Fairhair", "Elms", "Rivers", "Auden", "Shepherd", "Miller", "Stonebrook", "Carver", "Fletcher", "Thorn", "Woodbine", "Highgate", "Ashworth", "Greyborn", "Needle", "Tanner", "Bauer", "Blackwell", "Silverhand", "Elfton", "Stark", "Noble", "Ears", "Brighteyes", "Tallman", "Draper", "Farnsworth", "Hawk", "Dale", "Cross", "Wells", "Mason", "Harrow", "Vance", "Thornfield", "Garrison", "Redding", "Pryce", "Feyborn", "Starling", "Hearth", "Gull", "Wyatt", "Caine", "Pendleton", "Vale", "Smith", "Ward",
    ],
  },
  
  "Half-Orc (Orc-raised)": {
    given: [
      "Grog", "Shug", "Hagur", "Vrak", "Durn", "Lort", "Kruug", "Mog", "Snarl", "Thrak", "Ugra", "Ghasha", "Shuza", "Oghra", "Grula", "Vasha", "Harka", "Mauk", "Jorga", "Zuk", "Grom", "Brak", "Karg", "Ruk", "Gorok", "Tusk", "Zarg", "Mogg", "Skarn", "Lug", "Yara", "Morg", "Drek", "Hrolg", "Urza", "Zasha", "Brog", "Murza", "Krod", "Jugg", "Vash", "Korgul", "Grit", "Sharga", "Grub", "Borug", "Zang", "Krosh", "Thrag", "Urzul"
    ],
    surnames: [
      "Gutcutter", "Irontusk", "Bloodeye", "Stonefist", "Axe-hand", "Blacktooth", "Skull-basher", "Redscar", "Fleshrender", "One-Eye", "Gravewalker", "Rageblood", "Hill-crusher", "War-Mouth", "Ironhide", "Maw", "Spinebreaker", "Vicious", "Shank", "Bonechewer", "Shadow-Killer", "Grimfang", "Death-speaker", "Thunderhand", "Tuskborne", "Hard-Nose", "Rupture", "The Scarred", "The Furious", "Ironarm", "Bloodtusk", "Guts", "Grime", "The Bold", "Skull", "Marrow", "Shankbone", "Cruel", "Fire-Breath", "Ogrekin", "Hammerfall", "Bane", "Ravage", "Cinder", "Smash", "Foulfang", "Grom", "Grog-son", "The Mad", "Ironbrow",
    ],
  },
  
  "Half-Orc (Human-raised)": {
    given: [
      "Marcus", "Dane", "Victor", "Brody", "Garrett", "Simon", "Quinn", "Seth", "Duncan", "Jared", "Greta", "Vera", "Brenda", "Kira", "Mina", "Stella", "Ruth", "Cassie", "Dawn", "Renee", "Finn", "Axel", "Torvin", "Rhys", "Clive", "Leon", "Tobias", "Owen", "Arthur", "Elias", "Ivy", "Helen", "Joyce", "Lana", "Mara", "Petra", "Sabine", "Thea", "Willa", "Zoe", "Felix", "Gideon", "Kirk", "Royce", "Wade", "Gillian", "Holly", "June", "Lena", "Piper",
    ],
    surnames: [
      "Strong", "Stone", "Tanner", "Smith", "Rivers", "Brown", "Greene", "Blackwood", "Harrow", "Fletcher", "Ironhand", "Longarm", "Hill", "Stonefield", "Miller", "Shepherd", "Hardy", "Grimsley", "Guts", "Bane", "Oakhart", "Spearman", "Ash", "Thorn", "Cross", "Wells", "Meadows", "Hawk", "Finch", "Crane", "Tuskson", "Greyskin", "Brute", "Oxley", "Garrison", "Hammer", "Wade", "Ford", "Kerrigan", "Dalton", "Savage", "Grimes", "Fierce", "Hulk", "Bruiser", "Ironhide", "Fist", "Morrow", "Shaw", "Cromwell",
    ],
  },
  
  // Fallback set if we ever hit a culture name we don't recognise
  
  
  
  Default: {
    given: [
      "Elaraen", "Faeril", "Aerion", "Lyraenor", "Theren", "Niamh", "Kaelen", "Isildur", "Rianna", "Aeliana", "Valenor", "Elarion", "Sylvanus", "Nimue", "Anyael", "Lianen", "Darian", "Thalia", "Corin", "Althalus", "Mirenn", "Orionel", "Linwe", "Elor", "Caelyn", "Briarose", "Aerandir", "Eldaen", "Laelen", "Gildas", "Vanyel", "Aurae", "Rielan", "Saeran", "Faelar", "Calian", "Darthiir", "Nalaen", "Taurian", "Ilyara", "Olorin", "Liria", "Aldonel", "Nessaia", "Malonel", "Rinath", "Fenarin", "Shavael", "Endarien", "Lysandir",
    ],
    surnames: [
      "Stone", "Rivers", "Wolf", "Ironhand",
      "Bright", "Thorn", "Kestrel", "Storm",
    ],
  },
};

function randomNameForCulture(cultureName) {
  const entry =
    NAMES_BY_CULTURE[cultureName] || NAMES_BY_CULTURE.Default;

  const givenList = entry.given;
  const surnameList = entry.surnames;

  const given =
    givenList[Math.floor(Math.random() * givenList.length)];
  const surname =
    surnameList[Math.floor(Math.random() * surnameList.length)];

  return `${given} ${surname}`;
}
