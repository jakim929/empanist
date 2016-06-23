
// Random creation
function randomElement (arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

function randomNoElement (arr) {
  var number = 1 + Math.floor(Math.random()*(arr.length-1));
  if (arr.length <= number){
    return arr
  }
  var returnArray = []
  while(returnArray.length < number){
     var x = arr[Math.floor(Math.random()*arr.length)];
     if (!(returnArray.indexOf(x) > -1)){
       returnArray.push(x);
     }
  }
  return returnArray
}

function randomNoElementGiven (arr, number) {
  if (arr.length <= number){
    return arr
  }
  var returnArray = []
  while(returnArray.length < number){
     var x = arr[Math.floor(Math.random()*arr.length)];
     if (!(returnArray.indexOf(x) > -1)){
       returnArray.push(x);
     }
  }
  return returnArray
}


function randomInstrument (){
  var instrumentList = ["Voice","Bagpipes", "Banjo", "Bass drum", "Bassoon", "Bell", "Bongo", "Castanets", "Cello", "Clarinet", "Clavichord", "Conga drum", "Contrabassoon", "Cornet", "Cymbals", "Double bass", "Dulcian", "Dynamophone", "Flute", "Flutophone", "Glockenspiel", "Gongs", "Guitar", "Harmonica", "Harp", "Harpsichord", "Lute", "Mandolin", "Maracas", "Metallophone", "Musical box", "Oboe", "Ondes-Martenot", "Piano", "Recorder", "Saxophone", "Shawm", "Snare drum", "Steel drum", "Tambourine", "Theremin", "Triangle", "Trombone", "Trumpet", "Tuba", "Ukulele", "Viola", "Violin", "Xylophone",
  "Zither"];
  return randomElement(instrumentList);
};

function randomDatePar(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

function randomDate (){
  var start = new Date(1990, 1,1);
  var end = new Date(2015, 6, 21);

  return randomDatePar(start, end, 4, 12);
}

function randomAward (){
  var competitionList = ["First Manhattan International Music Competition ","Golden Classical Music Awards International Competition ","Washington Metropolitan Philharmonic Association Composition Competition ","APAP Young Performer’s Career Advancement Program ","Young Concert Artists Competition (YCA)","Young Artists Competition Flute Society of Greater Philadelphia ","Kennett Symphony Competition ","Howard County Rising Star Award Competition ","S&R Foundation Washington Award","Astral Artists Auditions ","Mary Graham Lasley Scholarship Competition ","VSA International Young Soloists Award Program Kennedy Center","Arts Club of Washington Piano Trio Composition Competition ","Washington International Competition ","Johansen International Competition ","Wonderlic Competition ","US Army Band National Collegiate Solo Competition ","Concert Artist Guild Victor Elmaleh Competition ","Chesapeake Chamber Music Competition ","Ensemble ACJW Fellowship ","Liszt-Garrison Piano Competition ","Juilliard Pre College Division Concerto Competition ","Stulberg International String Competition ","Aspen Summer Music Festival Fellowship","YoungArts (National Foundation for the Advancement of the Arts)","U.S. Presidential Scholar in the Arts","Ambler Symphony Competition","Philadelphia Orchestra Albert M. GreenField Competition","Old York Symphony Competition ","Warminster Symphony Competition","NPR’s “From the Top” ","Delaware Tri County Music Festival Competition ","American String Teacher’s Association (ASTA) National Solo Competition"]
  var competition = randomElement(competitionList);

  var awardNameList = ["1st Prize", "2nd Prize", "3rd Prize", "Effort Award", "Bach Award"];
  var awardName = randomElement(awardNameList);

  var wonDate = randomDate();

  return {name: competition, date: wonDate, award: awardName};
};

function randomMusicProgram (){
  var musicProgramList = ["Kneisel Hall","Miami Music Festival ","National Orchestra Institute (NOI)","Boston University Tanglewood Institute (BUTI)","Music Academy of the West (MAW)","Britt Festival (Southern Oregon) ","Prague Summer Nights Festival ","Aspen Summer Music Festival ","Verbier Festival ","Colorado college summer music festival","Lucerne Summer Music Festival","Yellow Barn","Meadowmount School of Music ","Atlantic Music Festival ","International Contemporary Ensemble at Lincoln Center","Taos Chamber Music Festival ","National Youth Orchestra of the United States of America at Carnegie Hall (NYO-USA)","National Youth Orchestra 2 (NYO2)","Perlman Music Program ","Music@Menlo"]
  var musicProgramName = randomElement(musicProgramList);

  var today = new Date(2016, 6, 21);

  var sd = randomDate();
  var ed = randomDatePar(sd, today, 6, 20);

  return {programName: musicProgramName, startDate: sd, endDate: ed};
};

createNewMusicProfile = function (givenUserId){
  var randomYearsPlayed = Math.floor(Math.random()*20);
    console.log(givenUserId);
  return {userId: givenUserId, instrument: randomInstrument(), yearsPlayed: randomYearsPlayed, awards: [randomAward(),randomAward()], musicPrograms: [randomMusicProgram(),randomMusicProgram()]};
};

createNewAccompanistProfile = function (givenUserId){
  var charges = [20, 40, 60]
  var randomCharge = randomElement(charges)

  var repertoires = ["Dvorak Cello Concerto in B Minor, Op. 104","Schumann Cello Concerto in A Minor, Op. 129","Boccherini Cello Sonata in A Major, G.4","Bloch Cello Sonata ","Bruch Kol Nidrei, Op.47 ","Chopin Introduction et Polonaise Brilliante, Op. 3 ","Fauré Papillon, Op.77","Franck Cello Sonata","Greig Cello Sonata in A Minor, ","Handel Sonata No.1 in G Minor ","Haydn Presto in G"];
  var randomRepertoire = randomNoElementGiven(repertoires, 3);

  var workingHours = ["morning", "afternoon", "night"];
  var randomWorkingHours = randomNoElement(workingHours);

  var workingDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  var randomWorkingDays = randomNoElement(workingDays);

  var sessionLocations = ["My Place", "Student's Place", "Doesn't matter"];
  var randomSessionLocation = randomElement(sessionLocations);

  var today = new Date(2002, 6, 21);
  var future = new Date(2010, 6, 21)

  var sd = today;
  var ed = randomDatePar(today, future, 6, 20);

  var locations = ["Boston", "Cambridge", "Harvard"];
  var randomMyLocation = randomElement(locations);

  var oneLiner = "I accept James as my Lord and Savior";
    console.log(givenUserId);

  return {Id: givenUserId,
          repertoire: randomRepertoire,
          charge: randomCharge,
          working_hours: randomWorkingHours,
          working_days: randomWorkingDays,
          session_location: randomSessionLocation,
          startDate: today,
          endDate: future,
          mylocation: randomMyLocation,
          one_liner: oneLiner};
}

createNewAccount = function (givenUserId){
  var firstNames = ["Jaelyn","Jasper","Shyann","Kyson","Maria","Annalise","Giovanni","Willie","Leyla","Jaron","Hadassah","Sadie","Clarissa","Katherine","Gwendolyn","Antoine","Jocelynn","Xavier","Trenton","Eliezer","Samantha","Zechariah","Colin","Carissa","Patricia","Amiya","Mariam","Camryn","Dakota","Grady","Kody","Jorge","Dwayne","Mario","Kelvin","Daniella","Bethany","Nicolas","Alan","Adrianna","Nathen","Malik","Karley","Paxton","Mason","Valentin","Phillip","Addison","Odin","Landyn","Milo","Broderick","Shaniya","Samson","Kamora","Michaela","Nasir","Alma","Lamar","Jaylan","Aurora","Ali","Kyle","Rex","Savanah","Nathaly","Kaylyn","Brian","Jaliyah","Ayaan","Marie","Kennedy","Kamryn","Joe","Noel","Leonard","Zain","Claudia","Nash","Moises","Sophie","Alfredo","Mattie","Francesca","Cristopher","Raelynn","Marlon","April","Erick","Draven","Jazmyn","Braxton","Tristen","Hayden","Julio","Isaias","Ayden","Bailey","Savannah","Breanna"];
  var lastNames = ["Woodward","Conner","Gibbs","Williamson","Bolton","Gross","Dougherty","Wallace","Daniel","Arellano","Mack","Joyce","Hammond","Lambert","Howell","Duran","Holt","Montoya","Brown","Atkins","Leblanc","Walton","Mccarty","Allen","Gentry","Burns","Key","Lam","Murphy","Frost","Parks","Velazquez","Fox","Oneill","Sharp","Best","Shaw","Leach","Mcgrath","Knight","Mcmahon","Oconnell","Hale","Hunter","Middleton","Miranda","Sullivan","Wilkins","Ruiz","Webb","Tyler","Lutz","Riggs","Morales","Dean","Ellis","Garrison","Santiago","Raymond","Knapp","Rivera","Sexton","Simmons","Horne","Sandoval","Mayo","Haney","Rocha","Larsen","House","Blankenship","Craig","Sparks","Gardner","Bartlett","Mccoy","Cummings","Lawrence","Marsh","Day","Mendoza","Cisneros","Kelley","Roth","Spears","Wang","Roman","Michael","Ellison","Weaver","Ewing","Nelson","Walsh","Lester","Shepherd","Bradley","Frederick","Stokes","Bray","Johns"];
  var randomName = randomElement(firstNames) + " " + randomElement(lastNames);

  var schools =["The Julliard School","Royal Academy of Music","Le Conservatoire de Paris","Berkley College of Music","Cleveland Institute of Music","Curtis Institute of Music","Jacobs School of Music","Manhattan School of Music","Trinity Laban Conservatoire of Music and Dance","Royal College of Music","Mannes College","Boston Conservatory","New England Conservatory","Oberlin Conservatory","King’s Academy","Los Angeles College of Music"];
  var randomAffiliation = randomElement(schools);

  var randomBirthDate = randomDate();

  var randomPhoneDigits = Math.floor(1000000000 + Math.random() * 9000000000);
  var randomPhone = randomPhoneDigits.toString();
  console.log(givenUserId);
  return {userId: givenUserId,
          name: randomName,
          birthDate: randomBirthDate,
          phone: randomPhone,
          affiliation: randomAffiliation};
}
