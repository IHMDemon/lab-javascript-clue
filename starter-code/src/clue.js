// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

var mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  // image: url('https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg'),
  occupation: "Entrepreneur"
};

var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "White",
  description: "PhD in plant toxicology, Adopted daughter of Mr. buddy",
  age: 26,
  // image: url('http://www.radiotimes.com/uploads/images/Original/111967.jpg'),
  occupation: "Scientist"

};

var profPlum = {
  firstName: "Victor",
  lastName: "plum",
  color: "Purple",
  description:"Billionare video game designer",
  age: 22,
  // image: url('https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg'),
  occupation:"Designer"
}

var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  // image: url('https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg'),
  occupation: "Actor"
}
var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is form a wealthy family and uses her status and money to earn popularity",
  age: 36,
  // image: url('https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg'),
  occupation: "Socialite"
}
var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  // image: url('https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg'),
  occupation: "Retired Football player"
}

var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, mrMustard, missScarlet, mrsPeacock)
// WEAPONS


var rope = {
  name:"rope",
  weight:10
}


var knife = {
  name: "knife",
  weight: 8
}



var candleStick = {
  name:"rope",
  weight: 2
}


var dumbBell = {
  name: "dumbbell",
  weight: 30
}


var poision = {
  name:"poision",
  weight: 15
}


var bat = {
  name:"bat",
  weight: 13
}
var trophy = {
  name: "trophy",
  weight: 25
}

var pistol = {
  name: "Pistol",
  weight: 20
}
var weaponsArray = [];
weaponsArray.push(pistol, trophy, poision, dumbBell, candleStick, knife, rope);

// rooms

var dinningRoom ={
  name: "Dinning Room"
}



var conservatory = {
  name: "Conservatory"
}



var kitchen = {
  name: "Kitchen",
}




var study = {
  name:"Study"
}




var library = {
  name:"Library"
}




var billiardRoom = {
  name:"Billard Room"
}




var lounge = {
  name: "Lounge"
}




var ballroom = {
  name:"Ballroom"
}



var hall = {
  name: "Hall",
}



var spa = {
  name: "Spa",
}




var livingRoom = {
  name:"Living Room"
}




var observatory ={
  name:"Observatory"
}




var theater = {
  name:"Theater"
}




var guestHouse = {
  name: "Guest House"
}




var patio = {
  name: "Patio"
}
roomsArray = []
roomsArray.push(dinningRoom, conservatory, kitchen, study, library,
  billiardRoom,lounge, ballroom, hall, spa, livingRoom, observatory, theater,
guestHouse, patio)

console.log(roomsArray)



// create function randomSelector to pick any random number between 0 and length of any array that you pass


function randomSelector(cardStack) {
  return cardStack[Math.floor(Math.random() * (cardStack.length))
  ]}

function pickMistery() {
var misteryEnvelope = [];
misteryEnvelope.push(randomselector(charactersArray));
misteryEnvelope.push(randomselector(weaponsArray));
misteryEnvelope.push(randomselector(roomsArray));


  return misteryEnvelope;
  }

  function revealMistery(arr){
    return arr[0].firstName + ' ' + arr[0].lastName + ' killed Mr.Boddy using the ' + arr[1].name + ' in the '+ arr[2].name + ' !!!!'
  }
