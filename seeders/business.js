'use strict'


module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Businesses'), [{
        name: "Escape This Live Indianapolis",
        location: "9546 Allisonville Rd #127, Indianapolis< IN 46250",
        phone: "317-435-5595",
        hours: ['Monday: 12PM - 9PM', 
                'Tuesday: 12PM - 9PM', 
                'Wednesday: 12PM - 9PM', 
                'Thursday: 12PM - 9PM', 
                'Friday: 12PM - 12AM',
                'Saturday: 12PM - 12AM',
                'Sunday: 12PM - 9PM'],
        price: 30.00,
        number_of_rooms: 2,
        url: 'http://www.escapethislive.com/indianapolis/', 
        themes: [
            'Wizards Escape',
            'Wild Wild West'],
        image: 'https://static1.squarespace.com/static/55d1efa2e4b0e5d01c225f7b/t/5716d98c1bbee0d40d762607/1461115277948/escapethislive-logo.png?format=1000w',
        createdAt: new Date(),
        updatedAt: new Date()   
    },
    {
        name: 'Breakout Games - North',
        location: '8455 Castlewood Dr A, Indianapolis, IN 46250',
        phone: '317-672-6060',
        hours: [
            'Monday: 12PM - 9PM',
            'Tuesday: 12PM - 9PM',
            'Wednesday: 12PM - 9PM',
            'Thursday: 12PM - 9PM',
            'Friday: 12PM - 12AM',
            'Saturday: 12PM - 12AM',
            'Sunday: 12PM - 9PM'
        ],
        price: 29.99,
        number_of_rooms: 7,
        url: 'https://breakoutgames.com/indianapolis/',
        themes: [
            'Runaway Train', 
            'Do Not Disturb', 
            'Mystery Mansion', 
            'The Kidnapping', 
            'Museum Heist', 
            'Operation: Casino', 
            'Island Escape'
        ],
        image: 'https://2m14st1h0x1b30k8dw3a8fxi-wpengine.netdna-ssl.com/wp-content/themes/fm-framework/images/holidays/breakout-holiday-logo-01.png',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Breakout Games - South',
        location: '4770 S Emerson Ave A, Indianapolis, IN 46203',
        phone: '317-960-1950',
        hours: [
            'Monday: 10AM - 10:30PM',
            'Tuesday: 10AM - 10:30PM',
            'Wednesday: 10AM - 10:30PM',
            'Thursday: 10AM - 10:30PM',
            'Friday: 10AM - 11:50PM',
            'Saturday: 10AM - 11:50PM',
            'Sunday: 11:30AM - 10:40PM'
        ],
        price: '29.99',
        number_of_rooms: 5,
        url: 'https://breakoutgames.com/indianapolis/',
        themes: [
            'The Kidnapping', 
            'Museum Heist', 
            'Operation: Casino', 
            'Island Escape', 
            'Hostage'
        ],
        image: 'https://2m14st1h0x1b30k8dw3a8fxi-wpengine.netdna-ssl.com/wp-content/themes/fm-framework/images/holidays/breakout-holiday-logo-01.png',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Escape the Room',
        location: '525 Massachusetts Ave, Indianapolis, IN 46204',
        phone: '317-960-4801',
        hours: [
            'Monday: Closed',
            'Tuesday: 12PM - 9:30PM',
            'Wednesday: 12PM - 9:30PM',
            'Thursday: 12PM - 9:30PM',
            'Friday: 12PM - 11PM',
            'Saturday: 12PM - 11PM',
            'Sunday: 12PM - 9:30PM'
        ],
        price: 28.00,
        number_of_rooms: 4,
        url: 'https://escapetheroom.com/indianapolis/',
        themes: [
            'The Dig', 
            'The Agency', 
            'The Apartment', 
            'The Rec Room'
        ],
        image: 'https://media.escapetheroom.com/indianapolis/wp-content/uploads/sites/10/2017/08/escape-logo-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Escape INDY',
        location: '150 E Market St # 00, Indianapolis, IN 46204',
        phone: '317-610-0904',
        hours: [
            'Monday: Closed',
            'Tuesday: 11AM - 10:15PM',
            'Wednesday: 11AM - 10:15PM',
            'Thursday: 11AM - 10:15PM',
            'Friday: 10AM - 11PM',
            'Saturday: 10AM - 11PM',
            'Sunday: 12 - 8:45PM'
            ],
        price: 27.00,
        number_of_rooms: 4,
        url: 'https://escape-indy.com/',
        themes: [
            "Dr. K's Lethal Injection", 
            "James Bomb", 
            "Asteria's Singularity", 
            "Mr. Dupree's Office"
            ],
        image: 'https://escape-indy.com/wp-content/themes/escape-indy/images/logo-indy.png',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'The Escape Room - Indianapolis' ,
        location: '200 S Meridian St #220, Indianapolis, IN 46225',
        phone: '317-986-6542',
        hours: [
            'Monday: 1PM - 10PM',
            'Tuesday: 10:30AM - 10PM',
            'Wednesday: 10:30AM - 10PM',
            'Thursday: 10:30AM - 10PM',
            'Friday: 10:30AM - 1:30AM',
            'Saturday: 8:30AM - 1:30AM',
            'Sunday: 1PM - 10PM'
        ],
        price: 29.00,
        number_of_rooms: 7,
        url: 'https://escaperoomindy.com/',
        themes: [
            "IU Time Warp 2020", 
            "Art Gallery", 
            "Bank Heist", 
            "Jail Break", 
            "KGB Interrogation", 
            "Space: 2112", 
            "Contagion"
        ],
        image: 'https://escaperoomindy.com/wp-content/uploads/2018/10/escape-room-usa-logo-small.png',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'The Escape Room - Fishers',
        location: '8890 E 116th St #210, Fishers, IN 46038',
        phone: '317-986-6542',
        hours: [
            'Monday: 10AM - 9PM',
            'Tuesday: 1PM - 9PM',
            'Wednesday: 10AM - 9PM',
            'Thursday: 10AM - 9PM',
            'Friday: 10AM - 12AM',
            'Saturday: 8:30AM - 12AM',
            'Sunday: 1-9PM'
        ],
        price: 29.00,
        number_of_rooms: 6,
        url: 'https://escaperoomindy.com/',
        themes: [
            'The Race 1', 
            'The Race 2', 
            'Stalag 21: American POW', 
            '1776', 
            'A Night At The Castle', 
            'Escape From The Titanic'
        ],
        image: 'https://escaperoomindy.com/wp-content/uploads/2018/10/escape-room-usa-logo-small.png',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Twisted Room Escapes Indianapolis',
        location: '3145 Thompson Rd, Indianapolis, IN 46227',
        phone: '317-757-2856',
        hours: [
            'Monday: Closed',
            'Tuesday: 5:30PM - 9PM',
            'Wednesday: 5:30PM - 9PM',
            'Thursday: 5:30PM - 9PM',
            'Friday: 5:30PM - 10PM',
            'Saturday: 1PM - 10:30PM',
            'Sunday: 2PM - 6PM'
        ],
        price: 28.00,
        number_of_rooms: 5,
        url: 'https://www.twistedroomescapes.com/',
        themes: [
            "Alice's White Rabbit Rescue", 
            "Missing Maestro", 
            "The Cabin", 
            "Submarine",
            "Detective Agency"

        ] ,
        image: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/47262825_10156885060548501_2617701147216969728_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=507d2c14f777fc110d0f55624c6f7d72&oe=5CAD0A6D',
        createdAt: new Date(),
        updatedAt: new Date()
    }]
},
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Themes', null, {})
}}



// db.sync()
//     .then(() => {
//         console.log('synced db and dropped old data');
//     })
//     .then(() => {
//         return Promise.map(businessData, business => Business.create(business));
//     })
//     .catch(err => {
//         console.error('error!!', err, err.stack);
//     })
//     .finally(() => {
//         db.close();
//         console.log('Finished');
//         return null;
//     });