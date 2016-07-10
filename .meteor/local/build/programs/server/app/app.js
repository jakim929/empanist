var require = meteorInstall({"lib":{"routes.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// lib/routes.js                                                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
FlowRouter.route('/', {                                                                                            // 1
    name: 'home',                                                                                                  // 2
    action: function action() {                                                                                    // 3
        BlazeLayout.render('MainLayout', { main: 'HomeLayout', nav: 'Navbar' });                                   // 4
    }                                                                                                              // 5
});                                                                                                                // 1
                                                                                                                   //
FlowRouter.route('/addinfo', {                                                                                     // 8
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                             // 9
    name: 'addInfo',                                                                                               // 10
    action: function action() {                                                                                    // 11
        BlazeLayout.render('MainLayout', { main: 'AddInfoLayout', nav: 'Navbar' });                                // 12
    }                                                                                                              // 13
});                                                                                                                // 8
                                                                                                                   //
FlowRouter.route('/newaccomp', {                                                                                   // 16
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                             // 17
    name: 'NewAccompLayout',                                                                                       // 18
    action: function action() {                                                                                    // 19
        // pass form the form type from the link                                                                   //
        BlazeLayout.render('MainLayout', { main: 'NewAccompLayout', nav: 'Navbar' });                              // 21
    }                                                                                                              // 22
});                                                                                                                // 16
                                                                                                                   //
FlowRouter.route('/newaccomp/step1', {                                                                             // 25
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                             // 26
    name: 'NewAccompLayout',                                                                                       // 27
    action: function action() {                                                                                    // 28
        // pass form the form type from the link                                                                   //
        BlazeLayout.render('MainLayout', { main: 'upsertBasicProfileForm', nav: 'Navbar' });                       // 30
    }                                                                                                              // 31
});                                                                                                                // 25
FlowRouter.route('/newaccomp/step2', {                                                                             // 33
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                             // 34
    name: 'NewAccompLayout',                                                                                       // 35
    action: function action() {                                                                                    // 36
        // pass form the form type from the link                                                                   //
        BlazeLayout.render('MainLayout', { main: 'upsertMusicProfileForm', nav: 'Navbar' });                       // 38
    }                                                                                                              // 39
});                                                                                                                // 33
FlowRouter.route('/newaccomp/step3', {                                                                             // 41
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                             // 42
    name: 'NewAccompLayout',                                                                                       // 43
    action: function action() {                                                                                    // 44
        // pass form the form type from the link                                                                   //
        BlazeLayout.render('MainLayout', { main: 'upsertAccompanistForm', nav: 'Navbar' });                        // 46
    }                                                                                                              // 47
});                                                                                                                // 41
                                                                                                                   //
FlowRouter.route('/accompanistDashboard', {                                                                        // 50
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                             // 51
    name: 'accompanistDashboard',                                                                                  // 52
    action: function action() {                                                                                    // 53
        BlazeLayout.render('MainLayout', { main: 'AccompanistDashboard', nav: 'Navbar' });                         // 54
    }                                                                                                              // 55
});                                                                                                                // 50
                                                                                                                   //
FlowRouter.route('/bookingRequest/:transactionId', {                                                               // 58
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                             // 59
    name: 'bookingRequest',                                                                                        // 60
    action: function action(params, queryParams) {                                                                 // 61
        BlazeLayout.render('MainLayout', { main: 'BookingRequestLayout', nav: 'Navbar' });                         // 62
    }                                                                                                              // 63
});                                                                                                                // 58
                                                                                                                   //
FlowRouter.route('/results/', {                                                                                    // 66
    name: 'results',                                                                                               // 67
    action: function action(params, queryParams) {                                                                 // 68
        BlazeLayout.render('MainLayout', { main: 'ResultsLayout', nav: 'Navbar' });                                // 69
    }                                                                                                              // 70
});                                                                                                                // 66
                                                                                                                   //
FlowRouter.route('/payment', {                                                                                     // 73
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                             // 74
    name: 'payment',                                                                                               // 75
    action: function action() {                                                                                    // 76
        BlazeLayout.render('MainLayout', { main: 'PaymentLayout', nav: 'Navbar' });                                // 77
    }                                                                                                              // 78
});                                                                                                                // 73
                                                                                                                   //
FlowRouter.route('/bookings', {                                                                                    // 81
    triggersEnter: [AccountsTemplates.ensureSignedIn],                                                             // 82
    name: 'bookings',                                                                                              // 83
    action: function action() {                                                                                    // 84
        BlazeLayout.render('MainLayout', { main: 'BookingsLayout', nav: 'Navbar' });                               // 85
    }                                                                                                              // 86
});                                                                                                                // 81
                                                                                                                   //
FlowRouter.route('/profile/:profileId', {                                                                          // 89
    name: 'profile',                                                                                               // 90
    action: function action(params, queryParams) {                                                                 // 91
        BlazeLayout.render('MainLayout', { main: 'ProfileLayout', nav: 'Navbar' });                                // 92
    }                                                                                                              // 93
});                                                                                                                // 89
                                                                                                                   //
// Testing UI Elements                                                                                             //
FlowRouter.route('/test', {                                                                                        // 98
    action: function action() {                                                                                    // 99
        BlazeLayout.render('TestLayout');                                                                          // 100
    }                                                                                                              // 101
});                                                                                                                // 98
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"both":{"modules":{"_modules.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// both/modules/_modules.js                                                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Modules = {};                                                                                                      // 1
Modules.both = {};                                                                                                 // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"check-url-validity.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// both/modules/check-url-validity.js                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _fileExistsInDatabase = function _fileExistsInDatabase(url) {                                                  // 1
  return Images.findOne({ "url": url, "userId": Meteor.userId() }, { fields: { "_id": 1 } });                      // 2
};                                                                                                                 // 3
                                                                                                                   //
var _isNotAmazonUrl = function _isNotAmazonUrl(url) {                                                              // 5
  return url.indexOf('s3.amazonaws.com') < 0;                                                                      // 6
};                                                                                                                 // 7
                                                                                                                   //
var _validateUrl = function _validateUrl(url) {                                                                    // 9
  if (_fileExistsInDatabase(url)) {                                                                                // 10
    return { valid: false, error: "Sorry, this file already exists!" };                                            // 11
  }                                                                                                                // 12
                                                                                                                   //
  if (_isNotAmazonUrl(url)) {                                                                                      // 14
    return { valid: false, error: "Sorry, this isn't a valid URL!" };                                              // 15
  }                                                                                                                // 16
                                                                                                                   //
  return { valid: true };                                                                                          // 18
};                                                                                                                 // 19
                                                                                                                   //
var validate = function validate(url) {                                                                            // 21
  var test = _validateUrl(url);                                                                                    // 22
                                                                                                                   //
  if (!test.valid) {                                                                                               // 24
    throw new Meteor.Error("file-error", test.error);                                                              // 25
  }                                                                                                                // 26
};                                                                                                                 // 27
                                                                                                                   //
Modules.both.checkUrlValidity = validate;                                                                          // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"modules":{"_modules.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// server/modules/_modules.js                                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Modules.client = {};                                                                                               // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"dataCreation.js":["../collections/basicProfiles.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// server/dataCreation.js                                                                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var BasicProfiles;module.import('../collections/basicProfiles.js',{"BasicProfiles":function(v){BasicProfiles=v}});
                                                                                                                   //
// Random creation                                                                                                 //
function randomElement(arr) {                                                                                      // 4
  return arr[Math.floor(Math.random() * arr.length)];                                                              // 5
}                                                                                                                  // 6
                                                                                                                   //
function randomNoElement(arr) {                                                                                    // 8
  var number = 1 + Math.floor(Math.random() * (arr.length - 1));                                                   // 9
  if (arr.length <= number) {                                                                                      // 10
    return arr;                                                                                                    // 11
  }                                                                                                                // 12
  var returnArray = [];                                                                                            // 13
  while (returnArray.length < number) {                                                                            // 14
    var x = arr[Math.floor(Math.random() * arr.length)];                                                           // 15
    if (!(returnArray.indexOf(x) > -1)) {                                                                          // 16
      returnArray.push(x);                                                                                         // 17
    }                                                                                                              // 18
  }                                                                                                                // 19
  return returnArray;                                                                                              // 20
}                                                                                                                  // 21
                                                                                                                   //
function randomNoElementGiven(arr, number) {                                                                       // 23
  if (arr.length <= number) {                                                                                      // 24
    return arr;                                                                                                    // 25
  }                                                                                                                // 26
  var returnArray = [];                                                                                            // 27
  while (returnArray.length < number) {                                                                            // 28
    var x = arr[Math.floor(Math.random() * arr.length)];                                                           // 29
    if (!(returnArray.indexOf(x) > -1)) {                                                                          // 30
      returnArray.push(x);                                                                                         // 31
    }                                                                                                              // 32
  }                                                                                                                // 33
  return returnArray;                                                                                              // 34
}                                                                                                                  // 35
                                                                                                                   //
function randomInstrument() {                                                                                      // 38
  var instrumentList = ["Voice", "Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone", "Zither"];
  return randomElement(instrumentList);                                                                            // 41
};                                                                                                                 // 42
                                                                                                                   //
function randomDatePar(start, end, startHour, endHour) {                                                           // 44
  var date = new Date(+start + Math.random() * (end - start));                                                     // 45
  var hour = startHour + Math.random() * (endHour - startHour) | 0;                                                // 46
  date.setHours(hour);                                                                                             // 47
  return date;                                                                                                     // 48
}                                                                                                                  // 49
                                                                                                                   //
function randomDate() {                                                                                            // 51
  var start = new Date(1990, 1, 1);                                                                                // 52
  var end = new Date(2015, 6, 21);                                                                                 // 53
                                                                                                                   //
  return randomDatePar(start, end, 4, 12);                                                                         // 55
}                                                                                                                  // 56
                                                                                                                   //
function randomAward() {                                                                                           // 58
  var competitionList = ["First Manhattan International Music Competition ", "Golden Classical Music Awards International Competition ", "Washington Metropolitan Philharmonic Association Composition Competition ", "APAP Young Performer’s Career Advancement Program ", "Young Concert Artists Competition (YCA)", "Young Artists Competition Flute Society of Greater Philadelphia ", "Kennett Symphony Competition ", "Howard County Rising Star Award Competition ", "S&R Foundation Washington Award", "Astral Artists Auditions ", "Mary Graham Lasley Scholarship Competition ", "VSA International Young Soloists Award Program Kennedy Center", "Arts Club of Washington Piano Trio Composition Competition ", "Washington International Competition ", "Johansen International Competition ", "Wonderlic Competition ", "US Army Band National Collegiate Solo Competition ", "Concert Artist Guild Victor Elmaleh Competition ", "Chesapeake Chamber Music Competition ", "Ensemble ACJW Fellowship ", "Liszt-Garrison Piano Competition ", "Juilliard Pre College Division Concerto Competition ", "Stulberg International String Competition ", "Aspen Summer Music Festival Fellowship", "YoungArts (National Foundation for the Advancement of the Arts)", "U.S. Presidential Scholar in the Arts", "Ambler Symphony Competition", "Philadelphia Orchestra Albert M. GreenField Competition", "Old York Symphony Competition ", "Warminster Symphony Competition", "NPR’s “From the Top” ", "Delaware Tri County Music Festival Competition ", "American String Teacher’s Association (ASTA) National Solo Competition"];
  var competition = randomElement(competitionList);                                                                // 60
                                                                                                                   //
  var awardNameList = ["1st Prize", "2nd Prize", "3rd Prize", "Effort Award", "Bach Award"];                       // 62
  var awardName = randomElement(awardNameList);                                                                    // 63
                                                                                                                   //
  var wonDate = randomDate();                                                                                      // 65
                                                                                                                   //
  return { name: competition, date: wonDate, award: awardName };                                                   // 67
};                                                                                                                 // 68
                                                                                                                   //
function randomMusicProgram() {                                                                                    // 70
  var musicProgramList = ["Kneisel Hall", "Miami Music Festival ", "National Orchestra Institute (NOI)", "Boston University Tanglewood Institute (BUTI)", "Music Academy of the West (MAW)", "Britt Festival (Southern Oregon) ", "Prague Summer Nights Festival ", "Aspen Summer Music Festival ", "Verbier Festival ", "Colorado college summer music festival", "Lucerne Summer Music Festival", "Yellow Barn", "Meadowmount School of Music ", "Atlantic Music Festival ", "International Contemporary Ensemble at Lincoln Center", "Taos Chamber Music Festival ", "National Youth Orchestra of the United States of America at Carnegie Hall (NYO-USA)", "National Youth Orchestra 2 (NYO2)", "Perlman Music Program ", "Music@Menlo"];
  var musicProgramName = randomElement(musicProgramList);                                                          // 72
                                                                                                                   //
  var today = new Date(2016, 6, 21);                                                                               // 74
                                                                                                                   //
  var sd = randomDate();                                                                                           // 76
  var ed = randomDatePar(sd, today, 6, 20);                                                                        // 77
                                                                                                                   //
  return { programName: musicProgramName, startDate: sd, endDate: ed };                                            // 79
};                                                                                                                 // 80
                                                                                                                   //
createNewMusicProfile = function createNewMusicProfile(givenUserId) {                                              // 82
  var randomYearsPlayed = Math.floor(Math.random() * 20);                                                          // 83
  console.log(givenUserId);                                                                                        // 84
  return { userId: givenUserId, instrument: randomInstrument(), yearsPlayed: randomYearsPlayed, awards: [randomAward(), randomAward()], musicPrograms: [randomMusicProgram(), randomMusicProgram()] };
};                                                                                                                 // 86
                                                                                                                   //
createNewAccompanistProfile = function createNewAccompanistProfile(givenUserId) {                                  // 88
  var charges = [20, 40, 60];                                                                                      // 89
  var randomCharge = randomElement(charges);                                                                       // 90
                                                                                                                   //
  var repertoires = ["Dvorak Cello Concerto in B Minor, Op. 104", "Schumann Cello Concerto in A Minor, Op. 129", "Boccherini Cello Sonata in A Major, G.4", "Bloch Cello Sonata ", "Bruch Kol Nidrei, Op.47 ", "Chopin Introduction et Polonaise Brilliante, Op. 3 ", "Fauré Papillon, Op.77", "Franck Cello Sonata", "Greig Cello Sonata in A Minor, ", "Handel Sonata No.1 in G Minor ", "Haydn Presto in G"];
  var randomRepertoire = randomNoElementGiven(repertoires, 3);                                                     // 93
                                                                                                                   //
  var workingHours = ["morning", "afternoon", "night"];                                                            // 95
  var randomWorkingHours = randomNoElement(workingHours);                                                          // 96
                                                                                                                   //
  var workingDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];                // 98
  var randomWorkingDays = randomNoElement(workingDays);                                                            // 99
                                                                                                                   //
  var sessionLocations = ["My Place", "Student's Place", "Doesn't matter"];                                        // 101
  var randomSessionLocation = randomElement(sessionLocations);                                                     // 102
                                                                                                                   //
  var today = new Date(2002, 6, 21);                                                                               // 104
  var future = new Date(2010, 6, 21);                                                                              // 105
                                                                                                                   //
  var sd = today;                                                                                                  // 107
  var ed = randomDatePar(today, future, 6, 20);                                                                    // 108
                                                                                                                   //
  var locations = ["Boston", "Cambridge", "Harvard", "Jeddah", "Amman"];                                           // 110
  var randomMyLocation = randomElement(locations);                                                                 // 111
                                                                                                                   //
  var oneLiner = "I accept James as my Lord and Savior";                                                           // 113
  console.log(givenUserId);                                                                                        // 114
                                                                                                                   //
  return { Id: givenUserId,                                                                                        // 116
    repertoire: randomRepertoire,                                                                                  // 117
    charge: randomCharge,                                                                                          // 118
    working_hours: randomWorkingHours,                                                                             // 119
    working_days: randomWorkingDays,                                                                               // 120
    session_location: randomSessionLocation,                                                                       // 121
    startDate: today,                                                                                              // 122
    endDate: future,                                                                                               // 123
    mylocation: randomMyLocation,                                                                                  // 124
    one_liner: oneLiner };                                                                                         // 125
};                                                                                                                 // 126
                                                                                                                   //
createNewBasicProfile = function createNewBasicProfile(givenUserId) {                                              // 128
  var firstNames = ["Jaelyn", "Jasper", "Shyann", "Kyson", "Maria", "Annalise", "Giovanni", "Willie", "Leyla", "Jaron", "Hadassah", "Sadie", "Clarissa", "Katherine", "Gwendolyn", "Antoine", "Jocelynn", "Xavier", "Trenton", "Eliezer", "Samantha", "Zechariah", "Colin", "Carissa", "Patricia", "Amiya", "Mariam", "Camryn", "Dakota", "Grady", "Kody", "Jorge", "Dwayne", "Mario", "Kelvin", "Daniella", "Bethany", "Nicolas", "Alan", "Adrianna", "Nathen", "Malik", "Karley", "Paxton", "Mason", "Valentin", "Phillip", "Addison", "Odin", "Landyn", "Milo", "Broderick", "Shaniya", "Samson", "Kamora", "Michaela", "Nasir", "Alma", "Lamar", "Jaylan", "Aurora", "Ali", "Kyle", "Rex", "Savanah", "Nathaly", "Kaylyn", "Brian", "Jaliyah", "Ayaan", "Marie", "Kennedy", "Kamryn", "Joe", "Noel", "Leonard", "Zain", "Claudia", "Nash", "Moises", "Sophie", "Alfredo", "Mattie", "Francesca", "Cristopher", "Raelynn", "Marlon", "April", "Erick", "Draven", "Jazmyn", "Braxton", "Tristen", "Hayden", "Julio", "Isaias", "Ayden", "Bailey", "Savannah", "Breanna"];
  var lastNames = ["Woodward", "Conner", "Gibbs", "Williamson", "Bolton", "Gross", "Dougherty", "Wallace", "Daniel", "Arellano", "Mack", "Joyce", "Hammond", "Lambert", "Howell", "Duran", "Holt", "Montoya", "Brown", "Atkins", "Leblanc", "Walton", "Mccarty", "Allen", "Gentry", "Burns", "Key", "Lam", "Murphy", "Frost", "Parks", "Velazquez", "Fox", "Oneill", "Sharp", "Best", "Shaw", "Leach", "Mcgrath", "Knight", "Mcmahon", "Oconnell", "Hale", "Hunter", "Middleton", "Miranda", "Sullivan", "Wilkins", "Ruiz", "Webb", "Tyler", "Lutz", "Riggs", "Morales", "Dean", "Ellis", "Garrison", "Santiago", "Raymond", "Knapp", "Rivera", "Sexton", "Simmons", "Horne", "Sandoval", "Mayo", "Haney", "Rocha", "Larsen", "House", "Blankenship", "Craig", "Sparks", "Gardner", "Bartlett", "Mccoy", "Cummings", "Lawrence", "Marsh", "Day", "Mendoza", "Cisneros", "Kelley", "Roth", "Spears", "Wang", "Roman", "Michael", "Ellison", "Weaver", "Ewing", "Nelson", "Walsh", "Lester", "Shepherd", "Bradley", "Frederick", "Stokes", "Bray", "Johns"];
  var randomName = randomElement(firstNames) + " " + randomElement(lastNames);                                     // 131
                                                                                                                   //
  var schools = ["The Julliard School", "Royal Academy of Music", "Le Conservatoire de Paris", "Berkley College of Music", "Cleveland Institute of Music", "Curtis Institute of Music", "Jacobs School of Music", "Manhattan School of Music", "Trinity Laban Conservatoire of Music and Dance", "Royal College of Music", "Mannes College", "Boston Conservatory", "New England Conservatory", "Oberlin Conservatory", "King’s Academy", "Los Angeles College of Music"];
  var randomAffiliation = randomElement(schools);                                                                  // 134
                                                                                                                   //
  var randomBirthDate = randomDate();                                                                              // 136
                                                                                                                   //
  var randomPhoneDigits = Math.floor(1000000000 + Math.random() * 9000000000);                                     // 138
  var randomPhone = randomPhoneDigits.toString();                                                                  // 139
  console.log(givenUserId);                                                                                        // 140
  return { userId: givenUserId,                                                                                    // 141
    name: randomName,                                                                                              // 142
    birthDate: randomBirthDate,                                                                                    // 143
    phone: randomPhone,                                                                                            // 144
    affiliation: randomAffiliation };                                                                              // 145
};                                                                                                                 // 146
                                                                                                                   //
createNewTransaction = function createNewTransaction(givenUserId) {                                                // 148
  var repertoires = ["Dvorak Cello Concerto in B Minor, Op. 104", "Schumann Cello Concerto in A Minor, Op. 129", "Boccherini Cello Sonata in A Major, G.4", "Bloch Cello Sonata ", "Bruch Kol Nidrei, Op.47 ", "Chopin Introduction et Polonaise Brilliante, Op. 3 ", "Fauré Papillon, Op.77", "Franck Cello Sonata", "Greig Cello Sonata in A Minor, ", "Handel Sonata No.1 in G Minor ", "Haydn Presto in G"];
  var randomRepertoire = randomNoElementGiven(repertoires, 3);                                                     // 150
                                                                                                                   //
  var musicians = BasicProfiles.find({}, { userId: 1 }).fetch();                                                   // 152
  var randomMusician = randomElement(musicians).userId;                                                            // 153
                                                                                                                   //
  var randomStatus = 'Pending';                                                                                    // 155
                                                                                                                   //
  var today = new Date(2016, 6, 27);                                                                               // 157
  var future = new Date(2016, 7, 6);                                                                               // 158
                                                                                                                   //
  return { musician: randomMusician, accompanist: givenUserId, repertoire: randomRepertoire, status: randomStatus, startDate: today, endDate: future };
};                                                                                                                 // 162
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"slingshot.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// server/slingshot.js                                                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Slingshot.fileRestrictions("uploadToAmazonS3", {                                                                   // 1
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],                                                      // 2
  maxSize: 1 * 1024 * 1024                                                                                         // 3
});                                                                                                                // 1
                                                                                                                   //
Slingshot.createDirective("uploadToAmazonS3", Slingshot.S3Storage, {                                               // 6
  bucket: "empanist-images",                                                                                       // 7
  acl: "public-read",                                                                                              // 8
  authorize: function authorize() {                                                                                // 9
    var userFileCount = Images.find({ "userId": this.userId }).count();                                            // 10
    return userFileCount < 3 ? true : false;                                                                       // 11
  },                                                                                                               // 12
  key: function key(file) {                                                                                        // 13
    var user = Meteor.users.findOne(this.userId);                                                                  // 14
    return user.emails[0].address + "/" + file.name;                                                               // 15
  }                                                                                                                // 16
});                                                                                                                // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor","../collections/basicProfiles.js","../collections/musicProfiles.js","../collections/accompanistProfiles.js","../collections/transactions.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// server/main.js                                                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var BasicProfiles;module.import('../collections/basicProfiles.js',{"BasicProfiles":function(v){BasicProfiles=v}});var MusicProfiles;module.import('../collections/musicProfiles.js',{"MusicProfiles":function(v){MusicProfiles=v}});var AccompanistProfiles;module.import('../collections/accompanistProfiles.js',{"AccompanistProfiles":function(v){AccompanistProfiles=v}});var Transactions;module.import('../collections/transactions.js',{"Transactions":function(v){Transactions=v}});var Sessions;module.import('../collections/transactions.js',{"Sessions":function(v){Sessions=v}});
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   // 4
                                                                                                                   // 5
                                                                                                                   // 6
                                                                                                                   //
Meteor.startup(function () {});                                                                                    // 8
                                                                                                                   //
AWS.config.update({                                                                                                // 11
  accessKeyId: Meteor.settings.AWSAccessKeyId,                                                                     // 12
  secretAccessKey: Meteor.settings.AWSSecretAccessKey                                                              // 13
});                                                                                                                // 11
                                                                                                                   //
var geo = new GeoCoder();                                                                                          // 18
                                                                                                                   //
getGeocode = function getGeocode(arg) {                                                                            // 20
  if (arg == 0) {                                                                                                  // 21
    return null;                                                                                                   // 22
  } else {                                                                                                         // 23
    var result = geo.geocode(arg);                                                                                 // 24
    return result;                                                                                                 // 25
  }                                                                                                                // 26
};                                                                                                                 // 27
                                                                                                                   //
Meteor.publish('files', function () {                                                                              // 30
  var data = Images.find({ "userId": this.userId });                                                               // 31
                                                                                                                   //
  if (data) {                                                                                                      // 33
    return data;                                                                                                   // 34
  }                                                                                                                // 35
                                                                                                                   //
  return this.ready();                                                                                             // 37
});                                                                                                                // 38
                                                                                                                   //
Meteor.methods({                                                                                                   // 41
  // Add security measures                                                                                         //
  deleteImageFromS3: function deleteImageFromS3(imageDatabaseId) {                                                 // 43
    if (!this.userId) {                                                                                            // 44
      throw new Meteor.error("Access Denied", "User not logged in");                                               // 45
    } else {                                                                                                       // 46
      var found = Images.findOne({ _id: imageDatabaseId, userId: this.userId });                                   // 47
      if (!found) {                                                                                                // 48
        throw new Meteor.error("Image search failed", "Image not found");                                          // 49
      }                                                                                                            // 50
                                                                                                                   //
      if (found.url.indexOf("https://empanist-images.s3.amazonaws.com/") < 0) {                                    // 52
        throw new Meteor.error("URL parse failed", "Not a valid image url");                                       // 54
      }                                                                                                            // 55
                                                                                                                   //
      var newKey = found.url.replace("https://empanist-images.s3.amazonaws.com/", "");                             // 57
      var s3 = new AWS.S3();                                                                                       // 58
                                                                                                                   //
      var params = {                                                                                               // 60
        Bucket: "empanist-images",                                                                                 // 61
        Key: newKey                                                                                                // 62
      };                                                                                                           // 60
                                                                                                                   //
      s3.deleteObject(params, Meteor.bindEnvironment(function (err, data) {                                        // 65
        if (err) {                                                                                                 // 66
          console.log(err);                                                                                        // 67
        } else {                                                                                                   // 68
          Images.remove({ _id: imageDatabaseId });                                                                 // 69
          console.log("Successfully deleted from S3", imageDatabaseId);                                            // 70
        }                                                                                                          // 71
      }));                                                                                                         // 72
    }                                                                                                              // 73
  },                                                                                                               // 75
                                                                                                                   //
  storeUrlInDatabase: function storeUrlInDatabase(url, type) {                                                     // 77
    check(url, String);                                                                                            // 78
    Modules.both.checkUrlValidity(url);                                                                            // 79
                                                                                                                   //
    try {                                                                                                          // 81
      Images.insert({                                                                                              // 82
        url: url,                                                                                                  // 83
        userId: Meteor.userId(),                                                                                   // 84
        picType: type,                                                                                             // 85
        added: new Date()                                                                                          // 86
      });                                                                                                          // 82
    } catch (exception) {                                                                                          // 88
      return exception;                                                                                            // 89
    }                                                                                                              // 90
  },                                                                                                               // 91
                                                                                                                   //
  getGeocode: function getGeocode(arg) {                                                                           // 93
    if (arg == 0) {                                                                                                // 94
      return null;                                                                                                 // 95
    } else {                                                                                                       // 96
      var result = geo.geocode(arg);                                                                               // 97
      return result;                                                                                               // 98
    }                                                                                                              // 99
  },                                                                                                               // 100
                                                                                                                   //
  insertFullRandomProfile: function insertFullRandomProfile(userId) {                                              // 102
    BasicProfiles.insert(createNewBasicProfile(userId), { getAutoValues: false });                                 // 103
    MusicProfiles.insert(createNewMusicProfile(userId), { getAutoValues: false });                                 // 104
    AccompanistProfiles.insert(createNewAccompanistProfile(userId), { getAutoValues: false });                     // 105
  },                                                                                                               // 106
                                                                                                                   //
  insertRandomData: function insertRandomData(number) {                                                            // 108
    for (var i = 0; i < number; i++) {                                                                             // 109
      var genId = Random.id();                                                                                     // 110
      BasicProfiles.insert(createNewBasicProfile(genId), { getAutoValues: false });                                // 111
      MusicProfiles.insert(createNewMusicProfile(genId), { getAutoValues: false });                                // 112
      AccompanistProfiles.insert(createNewAccompanistProfile(genId), { getAutoValues: false });                    // 113
    }                                                                                                              // 114
  },                                                                                                               // 115
                                                                                                                   //
  insertRandomTransactions: function insertRandomTransactions(number, userId) {                                    // 117
    for (var i = 0; i < number; i++) {                                                                             // 118
      Transactions.insert(createNewTransaction(userId));                                                           // 119
    }                                                                                                              // 120
  },                                                                                                               // 121
                                                                                                                   //
  divinify: function divinify(userId) {                                                                            // 123
    Roles.addUsersToRoles(userId, 'admin');                                                                        // 124
  },                                                                                                               // 125
                                                                                                                   //
  confirmBookingRequest: function confirmBookingRequest(transactionId) {                                           // 127
    var transaction = Transactions.findOne({ _id: transactionId });                                                // 128
    if (transaction) {                                                                                             // 129
      if (transaction.accompanist == this.userId) {                                                                // 130
        var firstSession = Sessions.findOne({ transaction: transactionId });                                       // 131
        console.log(firstSession);                                                                                 // 132
        if (firstSession.startTime) {                                                                              // 133
          Transactions.update({ _id: transactionId }, { $set: { status: "Ongoing" } });                            // 134
        } else {                                                                                                   // 135
          Meteor.Error("First session not set yet.");                                                              // 137
        }                                                                                                          // 138
      } else {                                                                                                     // 139
        Meteor.Error("No permission to confirm booking.");                                                         // 141
      }                                                                                                            // 142
    } else {                                                                                                       // 143
      Meteor.Error("No such transaction.");                                                                        // 144
    }                                                                                                              // 145
  }                                                                                                                // 146
                                                                                                                   //
});                                                                                                                // 41
                                                                                                                   //
// Server Side hooks                                                                                               //
// CHANGE ADMIN SETTINGS WHEN DONE TESTING                                                                         //
                                                                                                                   //
Meteor.users.after.insert(function (userId, doc) {                                                                 // 153
  Roles.addUsersToRoles(this._id, 'makeBasicProfile');                                                             // 154
});                                                                                                                // 155
                                                                                                                   //
// Basic Profiles Server Side Hooks                                                                                //
                                                                                                                   //
BasicProfiles.before.insert(function (userId, doc) {                                                               // 159
  var loggedInUser = Meteor.user();                                                                                // 160
  if (!loggedInUser) {                                                                                             // 161
    throw new Meteor.Error(403, "Not Logged In");                                                                  // 162
  } else if (!Roles.userIsInRole(loggedInUser._id, 'makeBasicProfile') && !Roles.userIsInRole(loggedInUser._id, 'admin')) {
    throw new Meteor.Error(403, "No Permission to Make Basic Profile");                                            // 165
  }                                                                                                                // 166
});                                                                                                                // 167
                                                                                                                   //
BasicProfiles.after.insert(function (userId, doc) {                                                                // 169
  console.log("Basic Profile Made for", doc.userId);                                                               // 170
  Roles.addUsersToRoles(doc.userId, 'makeMusicProfile');                                                           // 171
  Roles.addUsersToRoles(doc.userId, 'bookAccompanist');                                                            // 172
});                                                                                                                // 173
                                                                                                                   //
// Music Profile Server Side Hooks                                                                                 //
                                                                                                                   //
MusicProfiles.before.insert(function (userId, doc) {                                                               // 178
  var loggedInUser = Meteor.user();                                                                                // 179
  if (!loggedInUser) {                                                                                             // 180
    throw new Meteor.Error(403, "Not Logged In");                                                                  // 181
  } else if (!Roles.userIsInRole(loggedInUser._id, 'makeMusicProfile') && !Roles.userIsInRole(loggedInUser._id, 'admin')) {
    throw new Meteor.Error(403, "No Permission to Make Music Profile");                                            // 184
  }                                                                                                                // 185
});                                                                                                                // 186
                                                                                                                   //
MusicProfiles.after.insert(function (userId, doc) {                                                                // 188
  Roles.addUsersToRoles(doc.userId, ['becomeAccompanist', 'musician']);                                            // 189
});                                                                                                                // 190
                                                                                                                   //
// Accompanist Profile Server Side Hooks                                                                           //
                                                                                                                   //
AccompanistProfiles.before.insert(function (userId, doc) {                                                         // 196
  var loggedInUser = Meteor.user();                                                                                // 197
  if (!loggedInUser) {                                                                                             // 198
    throw new Meteor.Error(403, "Not Logged In");                                                                  // 199
  } else if (!Roles.userIsInRole(loggedInUser._id, 'becomeAccompanist') && !Roles.userIsInRole(loggedInUser._id, 'admin')) {
    throw new Meteor.Error(403, "Must first make Music Profile");                                                  // 202
  }                                                                                                                // 203
});                                                                                                                // 204
                                                                                                                   //
AccompanistProfiles.after.insert(function (userId, doc) {                                                          // 206
  var address = doc.mylocation;                                                                                    // 207
  var coded = getGeocode(address);                                                                                 // 208
                                                                                                                   //
  var lat = Number(coded[0].latitude);                                                                             // 210
  var lng = Number(coded[0].longitude);                                                                            // 211
  var coords_new = [lng, lat];                                                                                     // 212
  console.log("working Insert");                                                                                   // 213
  AccompanistProfiles.update({ _id: doc._id }, { $set: { geolocation: coded[0], loc: { 'type': "Point", 'coordinates': coords_new } } }, { getAutoValues: false });
  Roles.addUsersToRoles(userId, 'accompanist');                                                                    // 215
});                                                                                                                // 216
                                                                                                                   //
AccompanistProfiles.after.update(function (userId, doc, fieldNames, modifier, options) {                           // 218
                                                                                                                   //
  var address = doc.mylocation;                                                                                    // 220
                                                                                                                   //
  // take if outside to make more efficient!!!!!                                                                   //
  var result = getGeocode(address);                                                                                // 223
                                                                                                                   //
  var lat = Number(result[0].latitude);                                                                            // 225
  var lng = Number(result[0].longitude);                                                                           // 226
  var coords_new = [lng, lat];                                                                                     // 227
  var coords_db = doc.loc.coordinates;                                                                             // 228
                                                                                                                   //
  if (coords_new[0] !== coords_db[0] && coords_new[1] !== coords_db[1]) {                                          // 230
    console.log("updating");                                                                                       // 231
    AccompanistProfiles.update({ _id: doc._id }, { $set: { geolocation: result[0], loc: { 'type': "Point", 'coordinates': coords_new } } }, { getAutoValues: false });
  }                                                                                                                // 234
  console.log("working_UPDATE nothing done");                                                                      // 235
}, { fetchPrevious: true });                                                                                       // 237
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"collections":{"accompanistProfiles.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// collections/accompanistProfiles.js                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({AccompanistProfiles:function(){return AccompanistProfiles}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                   //
var AccompanistProfiles = new Mongo.Collection('accompanistProfiles');                                             // 3
                                                                                                                   //
AccompanistProfileSchema = new SimpleSchema({                                                                      // 5
  Id: {                                                                                                            // 6
    type: String,                                                                                                  // 7
    label: "Accompanist User ID",                                                                                  // 8
    autoform: {                                                                                                    // 9
      type: "hidden"                                                                                               // 10
    },                                                                                                             // 9
    autoValue: function autoValue() {                                                                              // 12
      return this.userId;                                                                                          // 13
    }                                                                                                              // 14
  },                                                                                                               // 6
                                                                                                                   //
  repertoire: {                                                                                                    // 17
    type: [String],                                                                                                // 18
    label: "Repertoire"                                                                                            // 19
  },                                                                                                               // 17
                                                                                                                   //
  charge: {                                                                                                        // 22
    type: Number,                                                                                                  // 23
    label: "Hourly Charge",                                                                                        // 24
    autoform: {                                                                                                    // 25
      options: [{ label: "$20", value: 20 }, { label: "$40", value: 40 }, { label: "$60", value: 60 }]             // 26
    }                                                                                                              // 25
  },                                                                                                               // 22
                                                                                                                   //
  working_hours: {                                                                                                 // 34
    type: [String],                                                                                                // 35
    label: "Times you prefer working",                                                                             // 36
    autoform: {                                                                                                    // 37
      type: "select-checkbox-inline",                                                                              // 38
      options: [{ label: "Morning (8am - 12pm)", value: "Morning" }, { label: "Afternoon (12pm - 6pm)", value: "Afternoon" }, { label: "Night (6pm - 11pm)", value: "Night" }]
    }                                                                                                              // 37
  },                                                                                                               // 34
                                                                                                                   //
  working_days: {                                                                                                  // 47
    type: [String],                                                                                                // 48
    //noselect:true,                                                                                               //
    label: "Days you want to accompany",                                                                           // 50
    autoform: {                                                                                                    // 51
      type: "select-checkbox-inline",                                                                              // 52
      options: [{ label: "Monday", value: "Monday" }, { label: "Tuesday", value: "Tuesday" }, { label: "Wednesday", value: "Wednesday" }, { label: "Thursday", value: "Thursday" }, { label: "Friday", value: "Friday" }, { label: "Saturday", value: "Saturday" }, { label: "Sunday", value: "Sunday" }]
    }                                                                                                              // 51
  },                                                                                                               // 47
                                                                                                                   //
  session_location: {                                                                                              // 65
    type: String,                                                                                                  // 66
    label: "Session's Location",                                                                                   // 67
    autoform: {                                                                                                    // 68
      options: [{ label: "My Place", value: "My Place" }, { label: "Student's Place", value: "Student's Place" }, { label: "Doesn't matter", value: "Doesn't matter" }]
    }                                                                                                              // 68
  },                                                                                                               // 65
                                                                                                                   //
  startDate: {                                                                                                     // 77
    type: Date,                                                                                                    // 78
    label: "Start Date"                                                                                            // 79
  },                                                                                                               // 77
                                                                                                                   //
  endDate: {                                                                                                       // 82
    type: Date,                                                                                                    // 83
    label: "End Date"                                                                                              // 84
  },                                                                                                               // 82
                                                                                                                   //
  // make this show up only if the accomp said he's willing to give sessoins in his place                          //
  mylocation: {                                                                                                    // 88
    type: String,                                                                                                  // 89
    label: "mylocation"                                                                                            // 90
  },                                                                                                               // 88
                                                                                                                   //
  geolocation: {                                                                                                   // 93
    type: Object,                                                                                                  // 94
    blackbox: true,                                                                                                // 95
    label: 'geolocation',                                                                                          // 96
    autoform: {                                                                                                    // 97
      type: "hidden",                                                                                              // 98
      label: false                                                                                                 // 99
    },                                                                                                             // 97
    optional: true                                                                                                 // 101
  },                                                                                                               // 93
                                                                                                                   //
  loc: {                                                                                                           // 104
    type: Object,                                                                                                  // 105
    index: '2dsphere',                                                                                             // 106
    label: "Location",                                                                                             // 107
    //blackbox: true,                                                                                              //
    autoform: {                                                                                                    // 109
      type: "hidden",                                                                                              // 110
      omit: true                                                                                                   // 111
    },                                                                                                             // 109
    optional: true                                                                                                 // 113
  },                                                                                                               // 104
                                                                                                                   //
  "loc.type": {                                                                                                    // 116
    type: String,                                                                                                  // 117
    allowedValues: ["Point"],                                                                                      // 118
    label: "Start location type"                                                                                   // 119
  },                                                                                                               // 116
                                                                                                                   //
  "loc.coordinates": {                                                                                             // 122
    type: [Number],                                                                                                // 123
    //minCount: 2,                                                                                                 //
    //maxCount: 2,                                                                                                 //
    decimal: true                                                                                                  // 126
  },                                                                                                               // 122
                                                                                                                   //
  one_liner: {                                                                                                     // 129
    type: String,                                                                                                  // 130
    label: "Describe yourself in one sentence"                                                                     // 131
  }                                                                                                                // 129
                                                                                                                   //
});                                                                                                                // 5
                                                                                                                   //
AccompanistProfiles.attachSchema(AccompanistProfileSchema);                                                        // 137
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"basicProfiles.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// collections/basicProfiles.js                                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({BasicProfiles:function(){return BasicProfiles}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                   //
var BasicProfiles = new Mongo.Collection('basicProfiles');                                                         // 3
                                                                                                                   //
PaymentMethodSchema = new SimpleSchema({                                                                           // 5
  paymentType: {                                                                                                   // 6
    type: String,                                                                                                  // 7
    label: "Payment Type"                                                                                          // 8
  }                                                                                                                // 6
});                                                                                                                // 5
                                                                                                                   //
BasicProfileSchema = new SimpleSchema({                                                                            // 12
  userId: {                                                                                                        // 13
    type: String,                                                                                                  // 14
    label: "User ID",                                                                                              // 15
    autoform: {                                                                                                    // 16
      type: "hidden"                                                                                               // 17
    },                                                                                                             // 16
    autoValue: function autoValue() {                                                                              // 19
      return this.userId;                                                                                          // 20
    }                                                                                                              // 21
  },                                                                                                               // 13
                                                                                                                   //
  name: {                                                                                                          // 24
    type: String,                                                                                                  // 25
    label: "Name"                                                                                                  // 26
  },                                                                                                               // 24
                                                                                                                   //
  birthDate: {                                                                                                     // 29
    type: Date                                                                                                     // 30
  },                                                                                                               // 29
  // label: "Date of Birth"                                                                                        //
  //                                                                                                               //
  phone: {                                                                                                         // 34
    type: String,                                                                                                  // 35
    label: "Phone Number"                                                                                          // 36
  },                                                                                                               // 34
                                                                                                                   //
  affiliation: {                                                                                                   // 39
    type: String,                                                                                                  // 40
    label: "Affiliation"                                                                                           // 41
  }                                                                                                                // 39
});                                                                                                                // 12
                                                                                                                   //
BasicProfiles.attachSchema(BasicProfileSchema);                                                                    // 45
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"competitions.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// collections/competitions.js                                                                                     //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({MusicCompetitions:function(){return MusicCompetitions},TagsCollection:function(){return TagsCollection}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                   //
var MusicCompetitions = new Mongo.Collection('musicCompetitions');                                                 // 3
var TagsCollection = new Mongo.Collection('tagsCollection');                                                       // 4
                                                                                                                   //
MusicCompetitionSchema = new SimpleSchema({                                                                        // 6
  name: {                                                                                                          // 7
    type: String,                                                                                                  // 8
    label: "Competition Name"                                                                                      // 9
  },                                                                                                               // 7
  alias: {                                                                                                         // 11
    type: [String],                                                                                                // 12
    label: "Other Names"                                                                                           // 13
  },                                                                                                               // 11
  reputation: {                                                                                                    // 15
    type: Number,                                                                                                  // 16
    label: "Competition Reputation",                                                                               // 17
    min: 1,                                                                                                        // 18
    max: 3                                                                                                         // 19
  }                                                                                                                // 15
                                                                                                                   //
});                                                                                                                // 6
                                                                                                                   //
MusicCompetitions.attachSchema(MusicCompetitionSchema);                                                            // 24
                                                                                                                   //
TagsSchema = new SimpleSchema({                                                                                    // 26
  tags: {                                                                                                          // 27
    type: [Object]                                                                                                 // 28
  },                                                                                                               // 27
  "tags.$._id": {                                                                                                  // 30
    type: String                                                                                                   // 31
  },                                                                                                               // 30
  "tags.$.name": {                                                                                                 // 33
    type: String                                                                                                   // 34
  }                                                                                                                // 33
});                                                                                                                // 26
                                                                                                                   //
TagsCollection.attachSchema(TagsSchema);                                                                           // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"images.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// collections/images.js                                                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});                                            // 1
                                                                                                                   //
Images = new Mongo.Collection('images');                                                                           // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"musicProfiles.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// collections/musicProfiles.js                                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({MusicProfiles:function(){return MusicProfiles}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                   //
var MusicProfiles = new Mongo.Collection('musicProfiles');                                                         // 3
                                                                                                                   //
OrchestraSchema = new SimpleSchema({                                                                               // 5
  name: {                                                                                                          // 6
    type: String,                                                                                                  // 7
    label: "Orchestra Name"                                                                                        // 8
  },                                                                                                               // 6
                                                                                                                   //
  position: {                                                                                                      // 11
    type: String,                                                                                                  // 12
    label: "Position in Orchestra"                                                                                 // 13
  },                                                                                                               // 11
                                                                                                                   //
  startDate: {                                                                                                     // 16
    type: Date,                                                                                                    // 17
    label: "Beginning Date"                                                                                        // 18
  },                                                                                                               // 16
                                                                                                                   //
  endDate: {                                                                                                       // 21
    type: Date,                                                                                                    // 22
    label: "Ending Date"                                                                                           // 23
  }                                                                                                                // 21
});                                                                                                                // 5
                                                                                                                   //
AwardSchema = new SimpleSchema({                                                                                   // 27
  name: {                                                                                                          // 28
    type: String,                                                                                                  // 29
    label: "Competition Name"                                                                                      // 30
  },                                                                                                               // 28
                                                                                                                   //
  award: {                                                                                                         // 33
    type: String,                                                                                                  // 34
    label: "Award Title"                                                                                           // 35
  },                                                                                                               // 33
  date: {                                                                                                          // 37
    type: Date,                                                                                                    // 38
    label: "Date Received"                                                                                         // 39
  }                                                                                                                // 37
});                                                                                                                // 27
                                                                                                                   //
MusicProgramSchema = new SimpleSchema({                                                                            // 43
                                                                                                                   //
  programName: {                                                                                                   // 45
    type: String,                                                                                                  // 46
    label: "Program Name"                                                                                          // 47
  },                                                                                                               // 45
                                                                                                                   //
  startDate: {                                                                                                     // 50
    type: Date,                                                                                                    // 51
    label: "Start Date"                                                                                            // 52
  },                                                                                                               // 50
                                                                                                                   //
  endDate: {                                                                                                       // 55
    type: Date,                                                                                                    // 56
    label: "End Date"                                                                                              // 57
  }                                                                                                                // 55
});                                                                                                                // 43
                                                                                                                   //
MusicProfileSchema = new SimpleSchema({                                                                            // 63
  userId: {                                                                                                        // 64
    type: String,                                                                                                  // 65
    label: "User ID",                                                                                              // 66
    autoform: {                                                                                                    // 67
      type: "hidden"                                                                                               // 68
    },                                                                                                             // 67
    autoValue: function autoValue() {                                                                              // 70
      return this.userId;                                                                                          // 71
    }                                                                                                              // 72
  },                                                                                                               // 64
                                                                                                                   //
  instrument: {                                                                                                    // 75
    type: String,                                                                                                  // 76
    label: "Instrument Played",                                                                                    // 77
    optional: true                                                                                                 // 78
  },                                                                                                               // 75
                                                                                                                   //
  yearsPlayed: {                                                                                                   // 81
    type: Number,                                                                                                  // 82
    label: "Years Played",                                                                                         // 83
    optional: true                                                                                                 // 84
  },                                                                                                               // 81
                                                                                                                   //
  awards: {                                                                                                        // 87
    type: [AwardSchema],                                                                                           // 88
    label: "Awards Won",                                                                                           // 89
    optional: true,                                                                                                // 90
    blackbox: true                                                                                                 // 91
  },                                                                                                               // 87
                                                                                                                   //
  musicPrograms: {                                                                                                 // 94
    type: [MusicProgramSchema],                                                                                    // 95
    label: "Music Programs Participated in",                                                                       // 96
    optional: true                                                                                                 // 97
  },                                                                                                               // 94
                                                                                                                   //
  orchestras: {                                                                                                    // 100
    type: [OrchestraSchema],                                                                                       // 101
    label: "Orchestras Played At",                                                                                 // 102
    optional: true                                                                                                 // 103
  }                                                                                                                // 100
                                                                                                                   //
});                                                                                                                // 63
                                                                                                                   //
MusicProfiles.attachSchema(MusicProfileSchema);                                                                    // 108
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"testData.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// collections/testData.js                                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({TestAccountData:function(){return TestAccountData}});var TestAccountData = [{ "name": "Marshall Caldwell", "birthDate": "1999-12-15T23:15:28-08:00", "phone": "1-886-756-4707", "affiliation": "Volutpat Ornare Facilisis Limited", "userId": "guw10gqL8G1wV09y8" }, { "name": "Stuart Watts", "birthDate": "2001-06-13T10:22:34-07:00", "phone": "1-406-742-2081", "affiliation": "Neque PC", "userId": "nFk94gJH7v4Ae03K0" }, { "name": "Anika Barrett", "birthDate": "1988-12-04T02:21:27-08:00", "phone": "1-906-343-2676", "affiliation": "Vitae Mauris Sit Industries", "userId": "XaY92UpT3V6au06M3" }, { "name": "Christine Knight", "birthDate": "1996-01-30T12:30:44-08:00", "phone": "1-583-514-8245", "affiliation": "Tempus Institute", "userId": "okC97lYf4E6Mj83E8" }, { "name": "August Gill", "birthDate": "1997-05-03T14:19:36-07:00", "phone": "1-673-846-7487", "affiliation": "Sed Industries", "userId": "Eus21vjk8S5AG85e0" }, { "name": "Kaden Branch", "birthDate": "1997-03-31T11:21:25-08:00", "phone": "1-286-389-8464", "affiliation": "Dui Fusce Aliquam LLC", "userId": "sIy44Bxf9r9zT31d2" }, { "name": "Selma Leblanc", "birthDate": "1995-12-08T19:25:16-08:00", "phone": "1-612-658-7587", "affiliation": "Ut Dolor Ltd", "userId": "ZEn70nMZ5z8wc56A9" }, { "name": "Castor Todd", "birthDate": "1999-10-01T18:16:39-07:00", "phone": "1-133-787-4457", "affiliation": "Amet LLP", "userId": "kDQ35jVX0N4IS80j0" }, { "name": "Paul England", "birthDate": "1991-10-01T15:55:16-07:00", "phone": "1-632-220-9531", "affiliation": "Aliquet Libero Integer Associates", "userId": "zkq23Wnw2W8Ld74a5" }, { "name": "Quin Molina", "birthDate": "1988-10-14T23:23:39-07:00", "phone": "1-289-983-2366", "affiliation": "Elementum Lorem Ut LLP", "userId": "cCG05Qob9o5oN13b1" }, { "name": "Piper Bell", "birthDate": "1995-01-20T02:04:09-08:00", "phone": "1-622-452-5765", "affiliation": "Pede Consulting", "userId": "ujJ93oPL6U7Dt05N2" }, { "name": "Janna Sims", "birthDate": "1990-05-28T08:49:30-07:00", "phone": "1-123-198-2932", "affiliation": "Duis Elementum Dui LLP", "userId": "vmP93ijA8w7Xq57Q0" }, { "name": "Jacqueline Tran", "birthDate": "2000-12-28T19:53:05-08:00", "phone": "1-393-947-0839", "affiliation": "Iaculis Enim Sit LLP", "userId": "LjD15SHs5C3be17Z8" }, { "name": "Jerry Reese", "birthDate": "1985-03-18T17:21:36-08:00", "phone": "1-660-764-8105", "affiliation": "Per Inceptos Incorporated", "userId": "YQK13JPu2N2uq03m0" }, { "name": "Florence Greer", "birthDate": "1993-06-29T02:38:56-07:00", "phone": "1-291-988-8730", "affiliation": "Sagittis Semper Nam Industries", "userId": "INl64Rsu0G6Ia79Y6" }, { "name": "Michael Mathews", "birthDate": "2003-06-08T05:30:34-07:00", "phone": "1-351-792-1539", "affiliation": "Sit Amet Risus Company", "userId": "sKw71srx5g3ZB96S5" }, { "name": "Nayda Wilder", "birthDate": "1997-05-15T20:12:50-07:00", "phone": "1-334-673-0470", "affiliation": "Dis Parturient Montes LLC", "userId": "soU23GJu8w9EL99F1" }, { "name": "Gloria Hays", "birthDate": "2003-06-01T16:37:54-07:00", "phone": "1-728-321-8762", "affiliation": "Porttitor Tellus Non LLC", "userId": "QPx65KGs0U2kl16L3" }, { "name": "Audra Meadows", "birthDate": "1985-12-16T21:48:51-08:00", "phone": "1-956-121-2924", "affiliation": "Orci Consectetuer Inc.", "userId": "Omd06IBa7i1xC53Z2" }, { "name": "Wilma Wise", "birthDate": "1998-04-19T04:57:54-07:00", "phone": "1-389-567-2886", "affiliation": "Non Magna Nam Corp.", "userId": "Qpc26fzL6g2Ya05o5" }, { "name": "Sierra Harrison", "birthDate": "2004-01-01T00:38:50-08:00", "phone": "1-311-962-3143", "affiliation": "Dictum Mi Ac Ltd", "userId": "pko54uKt6U8KI24C8" }, { "name": "Dustin Cote", "birthDate": "1992-11-10T01:28:01-08:00", "phone": "1-816-898-1600", "affiliation": "Auctor Institute", "userId": "bqK72gGa3Y8cN86A1" }, { "name": "Burton Landry", "birthDate": "1987-03-14T13:29:21-08:00", "phone": "1-567-979-7277", "affiliation": "Neque Pellentesque Massa Incorporated", "userId": "PJK73XqR0c1Py67e9" }, { "name": "Blaze Ellis", "birthDate": "1989-03-19T22:29:49-08:00", "phone": "1-482-239-4671", "affiliation": "Nulla Interdum Curabitur Incorporated", "userId": "Eux02DIE1c9Ag06K9" }, { "name": "Diana Raymond", "birthDate": "1993-08-14T19:03:12-07:00", "phone": "1-695-629-3307", "affiliation": "Tellus Foundation", "userId": "FNU11LAt3s8gn76E4" }, { "name": "Sheila Randall", "birthDate": "1997-07-20T05:19:46-07:00", "phone": "1-872-694-1642", "affiliation": "Natoque Penatibus Corp.", "userId": "MJl05fif3f7FE45w3" }, { "name": "Yardley Hendrix", "birthDate": "1984-08-26T03:10:46-07:00", "phone": "1-585-310-7139", "affiliation": "Maecenas Libero Est Corporation", "userId": "GCv89xUI9b6LY64t2" }, { "name": "Sonia Kelley", "birthDate": "1988-05-14T15:01:51-07:00", "phone": "1-760-982-9479", "affiliation": "Congue Turpis Corp.", "userId": "oxI96gTx2L9ef91p6" }, { "name": "Ursa Rush", "birthDate": "1985-01-17T05:33:12-08:00", "phone": "1-306-249-1834", "affiliation": "Purus Gravida Sagittis Ltd", "userId": "DPl37Inq9s8jW14G8" }, { "name": "Gil Vazquez", "birthDate": "1989-06-16T20:41:48-07:00", "phone": "1-211-995-6614", "affiliation": "Volutpat Limited", "userId": "MnX74keF3O1mk61g0" }, { "name": "Kelly Griffin", "birthDate": "1991-01-24T19:51:22-08:00", "phone": "1-270-213-3655", "affiliation": "Pede Suspendisse Dui PC", "userId": "uqJ95tdE6x2rk60H4" }, { "name": "Troy Spencer", "birthDate": "1985-03-20T00:35:35-08:00", "phone": "1-686-846-0990", "affiliation": "Malesuada Company", "userId": "DNn68uOM9A7jW63w8" }, { "name": "Georgia Mckinney", "birthDate": "1989-10-03T19:41:15-07:00", "phone": "1-209-201-4736", "affiliation": "Primis In Corp.", "userId": "uRC62Rov0W2lm79a6" }, { "name": "Kamal Delaney", "birthDate": "1993-03-09T17:34:54-08:00", "phone": "1-420-845-2702", "affiliation": "Scelerisque Scelerisque Dui Foundation", "userId": "pzD59ALz1f7CF81m9" }, { "name": "Barbara Gomez", "birthDate": "1998-03-03T10:04:22-08:00", "phone": "1-330-946-5982", "affiliation": "Pretium Neque Morbi Associates", "userId": "ixz51TiY5f9HA89i3" }, { "name": "Tyler Mcclure", "birthDate": "1987-08-02T08:16:53-07:00", "phone": "1-803-851-6951", "affiliation": "Nam Consequat PC", "userId": "Hxv12Fkw2i4vO18d9" }, { "name": "Elizabeth Wooten", "birthDate": "2003-11-07T19:12:23-08:00", "phone": "1-545-228-2453", "affiliation": "Nunc Corporation", "userId": "Kow34xHe1Q4ip83I6" }, { "name": "Mohammad Beach", "birthDate": "1988-05-24T11:03:53-07:00", "phone": "1-983-425-8167", "affiliation": "Imperdiet Dictum Magna Limited", "userId": "CgH59UZB6z8dr24Q7" }, { "name": "Herman Saunders", "birthDate": "2004-05-06T17:36:38-07:00", "phone": "1-744-347-5888", "affiliation": "Parturient Montes LLC", "userId": "Ikf32Nje6H0Mv06v9" }, { "name": "Giselle Donovan", "birthDate": "1992-03-15T01:15:30-08:00", "phone": "1-602-610-2359", "affiliation": "Fusce Fermentum Limited", "userId": "MCG73Jla4g4HL41C6" }, { "name": "McKenzie Merrill", "birthDate": "1988-05-19T01:39:58-07:00", "phone": "1-405-922-2385", "affiliation": "Conubia Nostra Per Corp.", "userId": "kkb47cMQ6T0Vp89z7" }, { "name": "Jaime Clayton", "birthDate": "2000-04-25T00:34:19-07:00", "phone": "1-894-771-7649", "affiliation": "Nullam Velit LLP", "userId": "GHo45nwe6G4df58g9" }, { "name": "Ruby Bishop", "birthDate": "1986-03-12T05:25:28-08:00", "phone": "1-403-932-9444", "affiliation": "Pharetra Institute", "userId": "Uzd40gEr9t6QO69t1" }, { "name": "Rebecca Miller", "birthDate": "2003-03-17T19:50:42-08:00", "phone": "1-516-210-4671", "affiliation": "Ligula Aenean Associates", "userId": "zrP71aJg0I4Ps09o2" }, { "name": "MacKensie Hurst", "birthDate": "1994-09-18T21:48:56-07:00", "phone": "1-106-539-9515", "affiliation": "Morbi Ltd", "userId": "juR93XSm6C6wH33a8" }, { "name": "Dustin Gibbs", "birthDate": "1985-11-25T08:02:15-08:00", "phone": "1-502-920-2906", "affiliation": "Mi PC", "userId": "iGB15zhc8m0hp19k3" }, { "name": "Nissim Preston", "birthDate": "1991-06-11T16:39:05-07:00", "phone": "1-419-832-3712", "affiliation": "Augue Scelerisque Consulting", "userId": "mtu72nVr7U0rS78k3" }, { "name": "Tanner Gallagher", "birthDate": "2003-12-07T10:59:05-08:00", "phone": "1-391-634-8499", "affiliation": "Donec Felis Orci Institute", "userId": "oJO16onM6G8Ck43n9" }, { "name": "Castor Livingston", "birthDate": "2002-12-30T15:37:13-08:00", "phone": "1-805-836-6212", "affiliation": "Mauris Industries", "userId": "ydG22JeR6V1Rv95Y7" }, { "name": "Asher Peck", "birthDate": "1993-06-25T08:00:25-07:00", "phone": "1-959-801-5316", "affiliation": "In Condimentum Corp.", "userId": "Xef71Lak6c6wN86G6" }, { "name": "Ila Mccoy", "birthDate": "1997-07-26T09:33:55-07:00", "phone": "1-890-878-8247", "affiliation": "Dictum Magna Ut LLC", "userId": "pVi34lSh0J7jR78Y2" }, { "name": "Jared Walker", "birthDate": "2002-04-27T15:01:02-07:00", "phone": "1-204-732-7500", "affiliation": "Morbi Tristique Industries", "userId": "tSM47RUQ2o3LQ91Q1" }, { "name": "Callum Matthews", "birthDate": "2003-05-22T06:09:27-07:00", "phone": "1-307-292-4774", "affiliation": "Et Eros Proin LLC", "userId": "THf97eZl6k8DT66Y0" }, { "name": "Ann Griffith", "birthDate": "1994-01-31T15:01:51-08:00", "phone": "1-233-548-3510", "affiliation": "Sit Amet LLP", "userId": "xgS99GqJ2S5Ej63V3" }, { "name": "Drew Robbins", "birthDate": "1996-03-24T19:48:03-08:00", "phone": "1-389-637-9776", "affiliation": "Egestas A Industries", "userId": "YDW05ePE2Q0cm58m8" }, { "name": "Kasimir Guthrie", "birthDate": "2004-03-29T04:00:04-08:00", "phone": "1-628-351-2121", "affiliation": "Mi Ac Mattis Ltd", "userId": "Yjq61skL0b9oh02R4" }, { "name": "Lacy Spencer", "birthDate": "2002-01-19T17:40:46-08:00", "phone": "1-660-611-7919", "affiliation": "Enim Curabitur Ltd", "userId": "hMn88gSr0B6uo81q6" }, { "name": "Ramona Farley", "birthDate": "1993-03-20T20:09:20-08:00", "phone": "1-412-598-7807", "affiliation": "Consectetuer Industries", "userId": "WYz26bzd9z5Ar08t9" }, { "name": "Rana Gomez", "birthDate": "1997-02-26T04:32:05-08:00", "phone": "1-169-633-6218", "affiliation": "Amet Metus Aliquam Inc.", "userId": "CRp82hxL9K1sY96U3" }, { "name": "Uta William", "birthDate": "1987-02-01T19:46:27-08:00", "phone": "1-143-967-9135", "affiliation": "Eu PC", "userId": "xkc76thq5X2DP59H7" }, { "name": "Aretha Barry", "birthDate": "1991-07-16T15:12:08-07:00", "phone": "1-133-750-9846", "affiliation": "Libero Dui Incorporated", "userId": "pwE79cxu1M8qA24a3" }, { "name": "Aaron Moran", "birthDate": "1988-11-29T02:49:02-08:00", "phone": "1-435-874-8654", "affiliation": "Est Ac Facilisis Consulting", "userId": "JiQ35bui5b7hd91U9" }, { "name": "Hanae Maddox", "birthDate": "1989-10-01T07:15:52-07:00", "phone": "1-772-466-8976", "affiliation": "Sed Consulting", "userId": "IpJ81FMp9Z7zZ08x0" }, { "name": "Catherine Cabrera", "birthDate": "1996-10-16T06:28:14-07:00", "phone": "1-461-740-7106", "affiliation": "Sagittis Semper Nam Industries", "userId": "SRV06QKv4k8yw07h8" }, { "name": "Brandon Mccormick", "birthDate": "2001-05-25T23:22:42-07:00", "phone": "1-145-618-4490", "affiliation": "Eu Eleifend Incorporated", "userId": "Sxy42TBm0A7JB46e8" }, { "name": "Kasper Doyle", "birthDate": "1986-10-05T14:07:56-07:00", "phone": "1-571-989-3511", "affiliation": "Accumsan Ltd", "userId": "xIK66Faf1v1KJ72C1" }, { "name": "Quynn Gallegos", "birthDate": "1988-07-05T07:43:10-07:00", "phone": "1-234-801-0104", "affiliation": "Vestibulum Ante Ipsum Institute", "userId": "FOi63Pcj2n9aF49E3" }, { "name": "Rae Dorsey", "birthDate": "1993-10-01T10:26:46-07:00", "phone": "1-914-668-2523", "affiliation": "Quis Pede LLP", "userId": "HSr37gFs6o7iG77x4" }, { "name": "Rachel Ruiz", "birthDate": "2004-01-19T19:46:23-08:00", "phone": "1-933-931-1380", "affiliation": "Gravida Praesent Company", "userId": "CKM28nkj3p3VI43S5" }, { "name": "Holly Hays", "birthDate": "1986-11-03T22:18:15-08:00", "phone": "1-629-899-1809", "affiliation": "Lorem Eget Mollis Incorporated", "userId": "eVa84REP7c7AO13E0" }, { "name": "Lane York", "birthDate": "1986-11-08T13:25:18-08:00", "phone": "1-772-902-3447", "affiliation": "Arcu Sed Industries", "userId": "oAv28xZu1G2Hb81N7" }, { "name": "Clare Talley", "birthDate": "1986-10-16T09:41:39-07:00", "phone": "1-633-311-0297", "affiliation": "Laoreet Lectus Quis Institute", "userId": "wPH85KRt0s4Bu29v7" }, { "name": "Petra Ayers", "birthDate": "1999-04-05T14:05:27-07:00", "phone": "1-791-802-0722", "affiliation": "Id Company", "userId": "qfk09gpm8L6MS65B3" }, { "name": "Candace Santiago", "birthDate": "1986-10-13T21:58:40-07:00", "phone": "1-859-290-8638", "affiliation": "Tristique Senectus Incorporated", "userId": "wFW01qsU3w0DA94w2" }, { "name": "Fuller Mullins", "birthDate": "1997-10-22T04:07:18-07:00", "phone": "1-799-669-6229", "affiliation": "Eget Ipsum Donec Ltd", "userId": "Uvj03maV7B3ze09e8" }, { "name": "Jamal Beach", "birthDate": "1988-09-19T17:23:03-07:00", "phone": "1-748-607-5684", "affiliation": "Purus Maecenas Ltd", "userId": "QuB33WiX4v3bf88l6" }, { "name": "Tamara Brock", "birthDate": "1992-06-16T16:24:38-07:00", "phone": "1-190-731-5427", "affiliation": "Magnis Dis Parturient Foundation", "userId": "PYg20BGl2P6Jz17s9" }, { "name": "Todd Ferrell", "birthDate": "1998-08-14T00:24:05-07:00", "phone": "1-420-195-0783", "affiliation": "Commodo Auctor Velit Company", "userId": "mPi71yWN6h3wl41n3" }, { "name": "Thaddeus Charles", "birthDate": "1985-08-18T19:34:06-07:00", "phone": "1-735-262-2161", "affiliation": "Elementum Sem Vitae PC", "userId": "bcD74gtg0V9cQ33P8" }, { "name": "Amanda Henson", "birthDate": "1988-03-20T06:20:34-08:00", "phone": "1-951-967-4393", "affiliation": "Dolor Tempus Non Corp.", "userId": "Kwt84GZD0R2DY18W6" }, { "name": "Stacy Watts", "birthDate": "2001-02-02T00:19:50-08:00", "phone": "1-669-514-6842", "affiliation": "Eros LLC", "userId": "XRD37VpS1B4Bm66o0" }, { "name": "Sage Justice", "birthDate": "1991-05-17T14:23:48-07:00", "phone": "1-922-387-0547", "affiliation": "Malesuada Augue Corporation", "userId": "Rih82jfK7M7gn39V1" }, { "name": "Yolanda Shepherd", "birthDate": "1994-03-07T03:35:02-08:00", "phone": "1-527-133-6590", "affiliation": "Egestas Blandit Nam Inc.", "userId": "SOk32lyX3M7wJ20d1" }, { "name": "Carly Whitney", "birthDate": "1992-11-23T23:34:23-08:00", "phone": "1-716-836-4489", "affiliation": "Accumsan Consulting", "userId": "sMS15EyF1c3Wf78u1" }, { "name": "Rhoda Dickson", "birthDate": "2001-05-18T13:08:22-07:00", "phone": "1-182-772-5853", "affiliation": "Massa Industries", "userId": "TLe73XmG7e6gV81R7" }, { "name": "September Holder", "birthDate": "1996-01-01T15:02:01-08:00", "phone": "1-554-529-7380", "affiliation": "Libero Morbi Accumsan LLC", "userId": "RDR16YDi5k0Kh74d3" }, { "name": "Jasmine Cardenas", "birthDate": "1993-01-10T14:32:36-08:00", "phone": "1-268-664-2588", "affiliation": "Fusce Fermentum Institute", "userId": "ftS01Fgh1S8Aj90o1" }, { "name": "Raymond Burt", "birthDate": "1991-09-27T00:57:14-07:00", "phone": "1-343-942-6179", "affiliation": "Cras Convallis Convallis Foundation", "userId": "toR07JmR5a2HQ68d1" }, { "name": "Adam Pitts", "birthDate": "1988-11-17T20:02:42-08:00", "phone": "1-928-464-6684", "affiliation": "Eu Lacus Quisque Ltd", "userId": "aHI23meh6m4lN80A4" }, { "name": "Zachery Valdez", "birthDate": "2003-08-18T10:18:43-07:00", "phone": "1-473-955-0815", "affiliation": "Non Lorem Vitae Inc.", "userId": "uCM46MTQ3P9Iq94m9" }, { "name": "Aquila Kirk", "birthDate": "1998-06-08T06:27:50-07:00", "phone": "1-521-602-9034", "affiliation": "Phasellus Ornare Foundation", "userId": "oyQ69fuh3t0yq02H2" }, { "name": "Tyrone Cohen", "birthDate": "1997-04-05T16:57:14-08:00", "phone": "1-157-803-2407", "affiliation": "Phasellus Dapibus PC", "userId": "koX11Rov5J1rE05t2" }, { "name": "Lewis Washington", "birthDate": "1985-04-29T04:31:45-07:00", "phone": "1-263-573-1741", "affiliation": "Ornare Fusce Incorporated", "userId": "FPi89UxP2t3cJ69u7" }, { "name": "Hermione Francis", "birthDate": "1990-07-22T21:53:06-07:00", "phone": "1-284-230-7250", "affiliation": "Neque In PC", "userId": "DcO96OFG3N6dk99q1" }, { "name": "Emerald Cooley", "birthDate": "1987-06-19T21:34:52-07:00", "phone": "1-546-532-5597", "affiliation": "In Corporation", "userId": "icW54VKS5O1Ha12G0" }, { "name": "Lane Cherry", "birthDate": "2002-01-26T04:40:03-08:00", "phone": "1-822-242-3009", "affiliation": "Molestie Associates", "userId": "APv31yLQ1K8eX97B6" }, { "name": "Elijah Davis", "birthDate": "1992-07-09T08:10:30-07:00", "phone": "1-416-394-7710", "affiliation": "Malesuada Ut Incorporated", "userId": "TnI88bgC7v7IT46Z8" }, { "name": "Arden Mcgowan", "birthDate": "1984-08-22T12:51:27-07:00", "phone": "1-237-193-1527", "affiliation": "Cursus Et LLP", "userId": "Ane34VwS4t6mw87G1" }, { "name": "Rudyard Hammond", "birthDate": "1986-06-02T17:43:43-07:00", "phone": "1-329-623-5705", "affiliation": "Vel Mauris Integer Industries", "userId": "CQP42XMs9f7sw30Q3" }, { "name": "Malachi Oneill", "birthDate": "1989-06-30T09:44:27-07:00", "phone": "1-639-838-2143", "affiliation": "Magnis Dis Parturient Consulting", "userId": "DWH78KQL9q6oA40w8" }];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"transactions.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// collections/transactions.js                                                                                     //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({Transactions:function(){return Transactions},Sessions:function(){return Sessions}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                   //
var Transactions = new Mongo.Collection('transactions');                                                           // 3
var Sessions = new Mongo.Collection('sessions');                                                                   // 4
                                                                                                                   //
TransactionSchema = new SimpleSchema({                                                                             // 7
  musician: {                                                                                                      // 8
    type: String,                                                                                                  // 9
    label: "Musician ID"                                                                                           // 10
  },                                                                                                               // 8
                                                                                                                   //
  // autoform: {                                                                                                   //
  //   type: "hidden"                                                                                              //
  // }                                                                                                             //
  accompanist: {                                                                                                   // 16
    type: String,                                                                                                  // 17
    label: "Accompanist ID"                                                                                        // 18
  },                                                                                                               // 16
                                                                                                                   //
  // autoform: {                                                                                                   //
  //   type: "hidden"                                                                                              //
  // }                                                                                                             //
  repertoire: {                                                                                                    // 24
    type: [String],                                                                                                // 25
    label: "Planned Repertoire"                                                                                    // 26
  },                                                                                                               // 24
                                                                                                                   //
  status: {                                                                                                        // 29
    type: String,                                                                                                  // 30
    label: "Booking Status",                                                                                       // 31
    allowedValues: ['Pending', 'Ongoing', 'Completed', 'Rejected', 'Cancelled']                                    // 32
  },                                                                                                               // 29
                                                                                                                   //
  // autoform: {                                                                                                   //
  //   type: "hidden"                                                                                              //
  // }                                                                                                             //
  startDate: {                                                                                                     // 38
    type: Date,                                                                                                    // 39
    label: "Start Date"                                                                                            // 40
  },                                                                                                               // 38
                                                                                                                   //
  endDate: {                                                                                                       // 43
    type: Date,                                                                                                    // 44
    label: "End Date"                                                                                              // 45
  },                                                                                                               // 43
                                                                                                                   //
  rating: {                                                                                                        // 48
    type: Number,                                                                                                  // 49
    label: 'Booking Rating',                                                                                       // 50
    optional: true                                                                                                 // 51
  }                                                                                                                // 48
});                                                                                                                // 7
                                                                                                                   //
// autoform: {                                                                                                     //
//   type: "hidden"                                                                                                //
// }                                                                                                               //
SessionSchema = new SimpleSchema({                                                                                 // 59
                                                                                                                   //
  transaction: {                                                                                                   // 61
    type: String,                                                                                                  // 62
    label: "Transaction ID",                                                                                       // 63
    optional: true                                                                                                 // 64
  },                                                                                                               // 61
                                                                                                                   //
  // autoform: {                                                                                                   //
  //   type: "hidden"                                                                                              //
  // }                                                                                                             //
  location: {                                                                                                      // 70
    type: String,                                                                                                  // 71
    label: 'Session Location'                                                                                      // 72
  },                                                                                                               // 70
                                                                                                                   //
  suggestedTimes: {                                                                                                // 75
    type: [Date],                                                                                                  // 76
    label: 'Suggested Times for Session'                                                                           // 77
  },                                                                                                               // 75
                                                                                                                   //
  startTime: {                                                                                                     // 80
    type: Date,                                                                                                    // 81
    optional: true,                                                                                                // 82
    label: 'Start Time'                                                                                            // 83
  },                                                                                                               // 80
                                                                                                                   //
  duration: {                                                                                                      // 86
    type: Number,                                                                                                  // 87
    label: "Duration in Hours"                                                                                     // 88
  },                                                                                                               // 86
                                                                                                                   //
  status: {                                                                                                        // 91
    type: String,                                                                                                  // 92
    label: 'Session Status',                                                                                       // 93
    allowedValues: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],                                             // 94
    optional: true                                                                                                 // 95
  }                                                                                                                // 91
                                                                                                                   //
});                                                                                                                // 59
                                                                                                                   //
Sessions.attachSchema(SessionSchema);                                                                              // 101
Transactions.attachSchema(TransactionSchema);                                                                      // 102
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/routes.js");
require("./both/modules/_modules.js");
require("./both/modules/check-url-validity.js");
require("./server/modules/_modules.js");
require("./collections/accompanistProfiles.js");
require("./collections/basicProfiles.js");
require("./collections/competitions.js");
require("./collections/images.js");
require("./collections/musicProfiles.js");
require("./collections/testData.js");
require("./collections/transactions.js");
require("./server/dataCreation.js");
require("./server/slingshot.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
