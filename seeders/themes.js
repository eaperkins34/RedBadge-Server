// 'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Themes', [{
            name: "Alice's White Rabbit Rescue",
            description:"The famous adventures, Alice Liddell, has asked you to be in charge of house sitting while she's away. This job entails acting on her behalf should some emergency situation arise, and of course taking care of her rabbit. Hours after Alice's departure on the midday train, you arrive to check on her house, but upon entering the parlor, you discover something has gone amiss...Can you save the day by teatime?",
            minimum: 2,
            maximum: 8, 
            length: 60,
            difficulty: "5",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "The Cabin",
            description: "Lost on a hiking trip in the mountains with no cell reception and running dangerously low on food & water, you stumble upon an old cabin. Hoping to find supplies and a means to communicate with the outside world, you step onto the dilapiated porch and knock on the door, but no one is home. Do you try to get into the cabin anyway? Yes - your survival depends on it. But as you learn the secrets held within the cabin, you realize you may be in more danger than you were before. The inhabitant will soon be home, and he doesn't take kindly to trespassers.",
            minimum: 4,
            maximum: 8,
            length: 60,
            difficulty: "5",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Missing Maestro",
            description: "After receiving death threats, Leopold Stubernski, the conductor of the Twisted Symphony, turns up missing an hour before the orchestra is scheduled to take the stage. All the while, Morton Stib, the symphony's trombonist, craves his time in the spotlight. An arrogant, paranoid music director, and a disgruntled musician set the scene in this tale of orchestrated retribution. And you, as an avid patron of the performing arts, have offered to investigate the Maestro's private quarters. Can you discover the whereabouts of the Maestro in time for the big performance? ",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "5",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Submarine",
            description: "Then: Following World War II the United States government implemented a top secret program placing military personnel into a high-pressure situation inside a training submarine. This test was designed to assess their ability to make quick decisions and to determine how well they cope when facing a demaning situation. But due to an 'unfortunate incident,' the entire operation was shut down and the submarine was covertly dumped to the bottom of the ocean. Now: Many years later, you and your team of treasure seekers, while searching a desolate coastline, unexpectedly come across this submarine which has mysteriously resurfaced. Hoping to discover the find of a lifetime, you climb inside. But once abord, the entry hatch slams shut, machinery begins to whir, and a feminine voice speaks through the darkness. 'Is that you Captain Penrose? Welcome back. Training Sequence Initiated.'",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "8",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Detective Agency",
            description: "Are you curious about escape rooms? Twisted Room Escapes presents Luckey Haskins Detective Agency, our mini escape room adventure. Bring your group of up to 4 players and try out our TEACH (Twisted Escapes Academy for the Curious and Hopeful) Program. This is a perfect opportunity to get acquainted with key escape room elements. Learn about searching, locks, puzzles, and common escape room tools. Luckey Haskins Detective Agency is fun for all ages and will help you be ready to succeed in our 60 minutes escape games.",
            minimum: 2,
            maximum: 4,
            length: 60,
            difficulty: "4",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "The Race 1",
            description: "he Race It’s the final race of the season for the Vintage Race League and you and your main competitor are neck and neck in the points race. Your crew just received a call from the mechanic that both you and the other team’s racecars were sabotaged last night. Someone has irreparably damaged the four-barrel carburetor. According to the race rules you must present your car for inspection exactly two hours before race time….",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "1",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "The Race 2",
            description: "he Race It’s the final race of the season for the Vintage Race League and you and your main competitor are neck and neck in the points race. Your crew just received a call from the mechanic that both you and the other team’s racecars were sabotaged last night. Someone has irreparably damaged the four-barrel carburetor. According to the race rules you must present your car for inspection exactly two hours before race time….",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "1",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Stalag 21: American POW",
            description: "It is May of 1944, and you are Americans in a POW camp in central Germany. Your captivity began over two years ago when you and your B-17 Flying Fortress crew were shot down on a bombing run over Hamburg, Germany. Since then, you have been successful in making contact with the Allied Underground operating in the area of the camp. Your most reliable Underground agent has just contacted you with information…",
            minimum: 2,
            maximum: 12,
            length: 60,
            difficulty: "10",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "1776",
            description: "It has been 30 long months since the Declaration was sent to King George III. It is now February 22nd, 1779 and the War for Independence continues. You and your fellow Partisans have just been informed that Commander George Rogers Clark will arrive with a significant force in the next day or two to attack and retake Fort Sackville on the Wabash River ….",
            minimum: 2,
            maximum: 6,
            length: 60,
            difficulty: "6",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "A Night At The Castle",
            description: "You and your colleagues have arrived in Europe to visit the famed Neuschwanstein Castle. The purpose of your trip is not just to visit the beautiful 19th century Fairytale Palace…You and your team of Historical Investigators must search for evidence that King Ludwig ll (often referred to as “Mad King Ludwig”) was murdered as opposed to drowning by suicide in Lake Starnberg on June 13, 1886….",
            minimum: 2,
            maximum: 10,
            length: 60,
            difficulty: "5",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Escape From The Titanic",
            description: "The year is 1912 and you and your group are the most trusted servants of Isidor and Ida Strauss. Isidor is, of course, the cofounder of Macy’s department store. You are in the fourth day of your voyage aboard the RMS Titanic. The ship has encountered a significant problem and Isador has pulled you aside stating it is his belief that the Titanic will sink ….",
            minimum: 2,
            maximum: 7,
            length: 60,
            difficulty: "2",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "IU Time Warp 2020",
            description: "My grandfather used to tell me stories about a prestigious school called Indiana University. The school was founded in 1820, but was later destroyed by a devastating fire in 1883. To everyone’s dismay, the school was never rebuilt because the needed funds were lost. Attempting to change the ill-fated history of the school, I have created the Time Reversal Machine (TRM) that will take you back to 1883 in an attempt to locate those lost funds. If you are successful, the school will be rebuilt, and time will proceed forward into an alternate reality. Had IU been rebuilt after the fire, it would soon be celebrating its Bicentennial in the year 2020.",
            minimum: 2,
            maximum: 6,
            length: 60,
            difficulty: "5",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Art Gallery",
            description: "For the first time since 1963, the world’s most famous painting, the Mona Lisa, has departed its homeland of Paris, France and journeyed westward to the shores of America on a one year display tour. As luck would have it, one of her stops is Indianapolis! Given your infamous reputation as a master thief, you have been contacted by a wealthy local collector and offered $100,000,000 to steal the painting.",
            minimum: 2,
            maximum: 10,
            length: 60,
            difficulty: "6",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Bank Heist",
            description: "It’s the roaring 20’s and you and your seedy gang of no-goods are on the lookout for your next caper. Rumor has it that the Fletcher Bank & Trust Co. has just received a new shipment of gold! Gold fever has gripped you and you will stop at nothing to get it! It will involve a little safe-cracking, so you will need to act quickly before the cops arrive. Follow the clues and crack the safe to get your haul of 6 beautiful bars of pure gold!",
            minimum: 2,
            maximum: 10,
            length: 60,
            difficulty: "8",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Jail Break",
            description: "You and your friends are competing with the town’s largest real estate developer to buy a large tract of land from a local farmer. The Farmer wants to sell to you, but his son wants to sell to your competition. To acquire the land, a hit man for the developer has murdered the farmer and framed you with the crime! With all hope lost, an unknown ally just made you aware that the developer is related to the town Sheriff and his cousin the jail Warden.",
            minimum: 2,
            maximum: 6,
            length: 60,
            difficulty: "4",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "KGB Interrogation",
            description: "The year is 1964 and the height of the Cold War. You and your team of American spies have been placed in the Soviet Union to retrieve a sample of a mind-altering drug that causes long-term amnesia. Once injected, the drug renders the subject susceptible to mind reprogramming. Oh no! Your cover is blown and you have been arrested and taken to KGB headquarters in Moscow. You have only 60 minutes to find the drug and get out before you are interrogated, tortured, or, worst of all, transformed into a Soviet agent!",
            minimum: 2,
            maximum: 12,
            length: 60,
            difficulty: "10",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Space: 2112",
            description: "Earth agriculture is under siege from an aggressive form of mold that is affecting cereal grains on a global level. Over the course of the past decade, the mold has infected the majority of airable land worldwide. Although numerous attempts have been made to eradicate and delay its growth, to date none have been successful. It is currently predicted to infect all remaining airable land by 2115. Unless something changes, widespread starvation is expected by 2114. In recent months, food prices have skyrocketed and there is legislation making food hoarding illegal.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "8",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Contagion",
            description: "In the 1980’s a local Top Secret NSA biological weapons lab was shuddered. Most of its staff met a violent end at the hands of their infected co workers. The lab was “decontaminated” when closed, but unfortunately a small fireproof refrigerator was overlooked and it was recently opened with devastating results for the infected and three of his neighbors. As a leading national expert on biological pathogens, your team has been quickly assembled in hopes of avoiding a national Outbreak.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "8",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Dr. K's Lethal Injection",
            description: "The evil Dr. Kevorkianstein has plans to infect the world with a blood pathogen virus he has syntetically created in his laboratory. His plan after he infect the world is to sell the only known antidote and make billions. You and your team of CDC Agents must search his lab, find his notes, and make a version of the antidote to be analyzed back at headquarters. You must hurry as you have just 60 minutes before Dr. K returns! Can you escape and save the world?",
            minimum: 4,
            maximum: 10,
            length: 60,
            difficulty: "8",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "James Bomb",
            description: "While on a mission to intercept information in order to foil a terrorist attack on the Bank of England, you and your team of MI-6 Agents have been captured by Count David of Liverpool. The Count now has you and our fellow agents shackled in the basement of the World Bank, WITH THE BOMB!! Can you free yourself, find the deactivation mechanicsm, and escape the room before it explodes?",
            minimum: 4,
            maximum: 10,
            length: 60,
            difficulty: "5",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Asteria's Singularity",
            description: "As part of the Search and Rescue force in the elite EXO space agency, it’s your job to respond to distress calls from ships in orbit. You just received an urgent signal from the Titan Enterprise, a research vessel equipped with a powerful and intelligent A.I. control system, “Asteria.” It seems that Asteria’s core power supply is failing fast and requires a replacement quickly. You and your team must get the Asteria’s system back online to save the crew before oxygen runs out and the ship goes completely off course.",
            minimum: 4,
            maximum: 10,
            length: 60,
            difficulty: "5",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Mr. Dupree's Office",
            description: "You are on an elite team of fellow CIA agents assigned with the task of gathering incriminating evidence from the office of international business man, Mr. Dupree. Our Intelligence team could only get you into Mr. Dupree’s office for 60 minutes. YOU must get out before Mr. Dupree returns or the case is blown! Collect evidence of specific illegal activity, solve the puzzle and escape the room before you’re caught!",
            minimum: 4,
            maximum: 10,
            length: 60,
            difficulty: "2",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "The Dig",
            description: "The Dig is one of our most exhilarating rooms. You’ll have to solve a mystery as you make your way out of the depths of the Earth. Can you find the light in under 60 minutes? Your team is a small group of 10 excavators who can’t be left in the dark any longer!",
            minimum: 2,
            maximum: 10,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "The Agency",
            description: "10 players, one highly classified mission, 60 minutes. In The Agency, all agents must complete a mission using their training and ingenuity. Warning, should you fail to escape The Agency in time, the bureau will be forced to disavow your very existence!",
            minimum: 2,
            maximum: 10,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "The Apartment",
            description: "Make no mistake, you’re not stopping by The Apartment for a run-of-the-mill social call. You and 11 other guests may never look at an apartment the same way again after this adventure. Your team will have to look past the room’s intimate and cozy setting to uncover clues and find a way out in under 60 minutes.",
            minimum: 2,
            maximum: 12,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "The Rec Room",
            description: "There are Stranger Things going on in The Rec Room. You and 5 others will see if you really have what it takes to escape the 80’s in The Rec Room. There’s only one slight problem: if you can’t make it out in 60 minutes or under, you could be stuck there forever!",
            minimum: 2,
            maximum: 6,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "The Kidnapping",
            description: "The Kidnapping begins with you and your fellow captives waking up handcuffed and blindfolded in a strange room. With nothing but collective brainpower, hidden clues and 60 minutes on your side, you have to free yourselves before the kidnapper returns. A heart-pumping thriller from start to finish, you can expect a rush of non-stop fun.",
            minimum: 2,
            maximum: 7,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Operation: Casino",
            description: "In this life-sized spy game, you will be sent on a trail of clues to discover the alias of a missing agent, and bring down the syndicate responsible for his disappearance. Follow unexpected twists and turns, break codes and channel your alter-ego secret agent to escape the room in an hour or less. If you’re down with espionage, this is your game.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Island Escape",
            description: "While vacationing on a tropical island, you awake to the sounds of a dormant volcano rumbling to life. The only people still on the island, you and your team are left to your own devices and must work together to discover the keys to safety before the lava reaches shore. Bring your inner explorer out to play for this adrenaline-packed, all-ages adventure.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Museum Heist",
            description: "As former art thieves, you and your friends are hired to find a rare collection of stolen artwork on the eve of a prestigious gallery opening. Breaking your way into the thief’s home, you must follow clues, find the stolen goods and escape before the clock runs out. This all-ages adventure will give even the most experienced escape artist a run for their money.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Hostage",
            description: "While on a flight, your plane is hijacked and you lose consciousness as the cabin depressurizes. Later you wake up and realize you're trapped, handcuffed to your friends, in the hijackers headquarters. Can you lose your handcuffs, find out the details behind their hijacking and escape before time's up?",
            minimum: 2,
            maximum: 7,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Do Not Disturb",
            description: "A recent string of kidnappings has awakened old fears in the people of Breakout City. You've tracked the Kidnapper to a run-down motel on the outskirts of town. Unfortunately, he was expecting you, and now you're caught in his twisted web of games. This investigation-gone-wrong will send your mind spinning as you try to save his next victims... Or become one yourself.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Kidnapping",
            description: "The Kidnapping begins with you and your fellow captives waking up handcuffed and blindfolded in a strange room. With nothing but collective brainpower, hidden clues and 60 minutes on your side, you have to free yourselves before the kidnapper returns. A heart-pumping thriller from start to finish, you can expect a rush of non-stop fun.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Island Escape",
            description: "While vacationing on a tropical island, you awake to the sounds of a dormant volcano rumbling to life. The only people still on the island, you and your team are left to your own devices and must work together to discover the keys to safety before the lava reaches shore. Bring your inner explorer out to play for this adrenaline-packed, all-ages adventure.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Mystery Mansion",
            description: "This spine-chilling adventure starts in the ruins of an old mansion – abandoned decades ago by a reclusive and eccentric family. Since then, rumors swirl of a presence looming over the old house. Work as a team to race the clock and uncover the mansion's secrets in this all-ages mystery adventure.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Museum Heist",
            description: "As former art thieves, you and your friends are hired to find a rare collection of stolen artwork on the eve of a prestigious gallery opening. Breaking your way into the thief’s home, you must follow clues, find the stolen goods and escape before the clock runs out. This all-ages adventure will give even the most experienced escape artist a run for their money.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Runaway Train",
            description: "As the train winds through beautiful countryside, news spreads of an uproar in the locomotive car. Radicals have taken control of the conductor’s cabin, planted explosives, and set the train for a non-stop destination in the heart of the city. Gain entry to the conductor's cabin, stop the train, and free the passengers before time runs out.",
            minimum: 2,
            maximum: 7,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Operation: Casino",
            description: "In this life-sized spy game, you will be sent on a trail of clues to discover the alias of a missing agent, and bring down the syndicate responsible for his disappearance. Follow unexpected twists and turns, break codes and channel your alter-ego secret agent to escape the room in an hour or less. If you’re down with espionage, this is your game.",
            minimum: 2,
            maximum: 8,
            length: 60,
            difficulty: "N/A",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Wizard's Escape",
            description: "Step aboard the house of a famous young wizard. You have 60 min to find the ancient book from another demension.",
            minimum: 2,
            maximum: 10,
            length: 60,
            difficulty: "7",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: "Wild Wild West",
            description: "You and your rowdy Posse of Outlaws are at it again. Making your way through the Wild Wild West you stumble upon this drinking hole. Can you make it out with the loot? You have 60 minutes before the sheriff stops by for a drink.",
            minimum: 2,
            maximum: 10,
            length: 60,
            difficulty: "8",
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Businesses', null, {})
    }
}
