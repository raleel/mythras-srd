// names.js

const NAMES_BY_CULTURE = {
  Colonist: {
    given: ["Roal Amunsen", "Hiram Bingum", "Ritchard Burten", "Gertrud Bellis", "Florenz Bakke", "Roburt Skott", "Thor Hayerdal", "Fridjof Nannsen", 
"David Livinsten", "Henry Stanlee", "Roy Chapmen Andrus", "Amelya Erhart", "Karl Linderg", "Samual Spayde", "Philbert Merlot",
 "Rick Trassy", "Lament Kransten", "Clark Savvage", "Allun Halfmain", "Nedland Selly", 
 "Phinias Fogg", "Aric Lanson", "Kortz Marlo", "Hovard P. Luvcraft", "Ed Burro", "Dashill Hammut", 
 "Aggie Kris", "Redyard Kiplin", "Roburt E. Hovard", "Jools Vurn", "Herman Melvil", "Ernest Hemming", "Humfree Bogart", 
 "Lauren Bekall", "Petur Lorray", "Sidney Greenstreet", "Boris Karlof", "Bela Lugosee", "Marlun Brand", "Orson Wellz", 
 "Rita Haywuth", "Alestur Crowlee", "Madum Blavatsky", "Rass Putin", "T.E. Lavrence", "Nikola Teslo", "Al Capon", "Sems Pade", 
 "Philop Merlowe", "Kaspar Gootman", "Brijit O’Shon", "Jol Kayro", "Eddee Marz", "Jo Brodee", "Lewellyn Archur", "Mike Hammar", 
 "Dikk Trasee", "Givventi Venzi", "Pery Messon", "Alen Quattermane", "Dok Savvage", "Indy Jonns", 
 "Rikk O’Konnel", "Kortz of the Kivvu", "Proffessor Challinjer", "Ned Lando", "Captin Nemo", "Rold Amunzen", "Gertrud Bel", 
 "Thor Heyerdull", "Percivull Fawsett", "Richerd Burten", "Florence Bakker", "Charles Linber", "Nelly Bligh", "Roy Chapmen", 
 "Hovvard Luvcraft", "Dashiel Hammutt", "Roburt E. Hovvard", "Edgur Burros", "Agatha Kristi", "Ernist Hemmingway", 
 "Rudyard Kipplin", "Alister Crowlee", "Maddum Blavatskee", "Gregory Rasputtin", "Harrick Hoodinee", "Al Kappone", 
 "Jon Dilling", "Samwell Spay", "Gasper Goot", "Joley Cayre", "Biddy Shon Sea", "Wilmott Coke", "Ephy Pear Lynn", "Tam Pol House", 
 "Dundee Lutin", "Ivane Archery", "Gunner Thurs Bee", "Lewie Arch", "Mickey Hammer Ton", "Nicky Charms", "Nora Charms", 
 "The Spinner", "Lament Cranes", "Cpt Futurem", "Inman Jonze", "Rickard O’Connelly", "Allun Quarters", "Captin Neem", "Finny Fogg", 
 "Prof Chally Ger", "Zorromon", "Humfrye Bo Gard", "Loryn Be Call", "Peadar Lorry", "Sidney Grinstreet", "Vee Vian Leigh ton", 
 "Marlyn Bran Dough", "Orrie Wells", "Ritzy Hay Worth", "Barry Kar Loft", "Belly Lu Gosee", "Claude Raines Fall", "Rold Amun Sen", 
 "Robin Falco", "Hyrum Bing Ham", "Thorin Higher Dale", "Gertie Belle Towers", "Richie Burt On", "Henry Morten Stan", 
 "Davy Livin Stone", "Rayman Chappy", "Amel Hairhart", "Chaz Lindy", "Alistar Crow Ly", "Maddy Blavats Key", "Nicky Teslow", 
 "Brick Layne", "Ailsa Lunn", "Victor Lozlo", "Capt Ray Know", "You Garth", "Walteer Kniff", "Philly Deetricks", "Barnaby Keys", 
 "Joey Gills", "Nora Dez Mound", "Max von Mire Ling", "Hurry Lyne", "Holly Mer Tins", "Janny Rocko", "Frankie Loud", "Dolly Why Not", 
 "Shirlock Holmsley", "Jon Wat Sun", "Si Mon Temple", "Foo Man Chu Lee", "Jams Bandy", "Moddy Blaze", "Vincen Van Tree", 
 "Dikke Durm", "Jean Tyr Nee", "Barb Stanny", "Edgy G Rob In Son", "Jams Cag Nee", "Jo Ann Crow Ford", "Betty Day Viss", "Merna Low Ee", 
 "Bill Pow Ell", "Robby Mitch Um", "Corn Nell Wooly", "Jams M Kane", "Sax Ro Mer", "Edgy Alan Powe", "Bram Stock Yard",
 "Merry Shell Eye", "Rex Stout Beer", "Earl Stan Lee Garton", "Mark Polo Neck", "Eben Bat Too Tah", "Buff Bill O", "Wy At Erp Stone", 
 "Clam Janie", "Chaz Pon Zee", "Bonna and Clayd", "Motta Harry", "Howie Cart Err", "Lord Carr Narven", "Sakky Ga Wee Ah", 
 "Carmin Sternweed", "Hairy Joans", "Latch Canine", "Genneral Sternwood", "Mickel Ohara", "Elssa Banister", "Hank Quinlun", 
 "Ramon Vargos", "Olle Swede", "Kittee Colluns", "Janny Farrel", "Gilda Mundsen", "Waldee Lydekur", "Mark McPhersen", "Kode Jarret", 
 "Verna Jarrit", "Fred Dobbs", "Sterlin Haydun", "Glorya Grame", "Munck Mayfayre", "Hamm Brookis", "Rennie Renwicke", "Longe Tomm", 
 "Janny Litteljon", "Maryan Ravenwode", "Ren Bellock", "Salla", "Markiss Brodee", "Shorte Rownd", "Margott Layne", "Burne Banke", 
 "Shrevee", "Jayne Portar", "Barry Flashmun", "Julieus No", "Honnie Rydure", "Jaye Gatsbee", "Daisy Bukannen", "Captain Ayhab", 
 "Ismael", "Kew Queg", "Alexan Humbolt", "Jonn Cabott", "Amerrego Vespuce", "Jacques Cartyar", "Fransisco Pizarro", "Hernun Cortes", 
 "Blacke Bart", "Samm Basse", "Coal Yungger", "Captain Blod", "Long John Sylver", "Jamus Hawkin", "Billie Bone", "Doctor Livsey", 
 "Squire Traylawn", "Captain Smollet", "Izzy Hand", "Benny Gunne", "Captain Hooke", "Mister Smee", "Wende Darling", "Peeter Pann", 
 "Tiger Lilly", "Maid Maryon", "Friar Tucke", "Littel Jon", "Willie Scarlett", "Allen Dale", "Robyn Hode", "Ivan Hoe", "Rebekka York", 
 "Brian de Boyes", "El Cyd", "Sher Kan", "Mowgly", "Baghera", "Ballo", "Akella", "Rikky Tikky", "Ghengis Can", "Kubly Kan", "Tamer Lane", 
 "Gorge Malory", "Andy Ervin", "Fridty Nansin", "Alexie Daveel", "Freyah Starke", "Isabelle Birde", "Jonn Speke", "Sammie Bakur", 
 "Jeffer Markum", "Kathy Moffit", "Whitt Sterling", "Terrence Mulloy", "Janny Friend", "Anny Shmitt", "Major Callaway", "Count Zarof", "Fredrick Dobbes",
      ],
  },

  HighFolk: {
    given: [
      "Alcius", "Cassia", "Darius", "Flavia", "Hadrian",
      "Julius", "Livia", "Marcellus", "Octavia", "Tiber", "Vettia",
    ],

  },

  Savage: {
    given: [
      "Aldan", "Batbayar", "Chagan", "Enebish", "Kulan",
      "Murod", "Saran", "Temur", "Yaraq", "Zaya",
    ],

  },

  // Fallback set if we ever hit a culture name we don't recognise
  Default: {
    given: [
      "Arin", "Bera", "Corin", "Dara", "Eldric", "Fara",
      "Garric", "Hesta", "Jorin", "Kaela",
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

  const given =
    givenList[Math.floor(Math.random() * givenList.length)];


  return `${given} ${surname}`;
}
