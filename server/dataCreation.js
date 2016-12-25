import { BasicProfiles } from '../collections/basicProfiles.js'

import faker from 'faker';

// Random creation

var CoverPicArray = ["mMkm9KhL2jp6Lj9Wo", "SARGt54wALC4mMw8j", "yAu5D7mppEmT3z9p4", "KZbCMWNszSvkQStyY", "9mJ3KzmevRQjWdBvX", "Du5qwdHtcxZyYzgCa", "uorgs75MRGJvRNKya", "fGSGgw36NSBJiMW9e", "FYrrg3PdSJ8Dp3Led", "md2dujihTsw44pR59", "hHSYNswxx8szmTTkv", "KaxLigbeuhrdy29Ln", "DAMHQoxJAwPJWtJWu", "jKreAxi8ZTXdnZhKR", "X8LhqH3ZvXmmxsRxe", "sA7usj5aEEBBnSj6h", "wmzRmzchjoEwuxga6", "Lqu3jxHGWhnR9ZGbm", "9LLXinTfHZL7nNYE2", "DzhjJqaw2x4o7vQw3", "HxMyfECfmWLiQWYmp", "db3TWN4RCwAatn9aa", "uRHMm2qLKR4ZSxpLW", "2XLFJDvYBAy8WGbjT", "cLLAB6pQwh6gRzgb2", "9ChdoRQgQZs24LXRX", "XCsbj23GJWx7xpzHP", "YwyErkqe7FF2mgm2N", "okbycRpeYdJDwyBif", "HfEThqEeMQzuhy75T", "Yh23ZeW3tTnDH2e8Z", "rcJWB8X56CxHpqAmp", "acFqH4kJAMhK33YCk", "8jXRRyoDY857SRh3Y", "PvXYXe8aknQgpKyE2", "WN3mETN4zY5aGgSYW", "LM4pMHA3BTdPuvxW2", "jfoBtSKfkL4dX2uqQ", "yqRFiJbSXAtDv5uRk", "9vQPNtEk3PR8yMiJy", "KzfHnJpH7Mj2bT6LW", "2udHH985Lxu4XeetS", "4rvFzSAjgeXHyb6qS", "be4fwWoiHzSHBHhKD", "HMspevYExXQgRjEzt", "wCnBezkwY23K8BvqM", "aCNJsX3S2mavXpfF8", "TfpcE3vHPPSfhMfox", "K6dMroYZAkRx29ggC", "q8dCn6JuNzSRiFL4b", "NEek3aPRpTfvzov9C", "ygZaXEAipDy7YP4BX", "xyriE5odGKW4u3xHJ", "qheLLb2er8jFGY2QN", "pJF8TnNJKfzRYDEwg", "ChjcyrzK7tpsG8CHu", "mFMQjPbSM78nwsEAW", "mYdPP6LnM8XqsL8wB", "ohmPykqEnv373uW8G", "oRoQ7uyZRpLv6XZXf", "b7pDs4pqjEWSwrupd", "QZsrG9zT2prvjXcT8", "v2hTqYZxERPjFFNFb", "6NFmcjRwd6Jaj3hqs", "GYQacsWJfwZTdXxek", "t3YpWkdSrvWaJhGCA", "PXoESYtQ9yoPx75ud", "Fhs9Z8Jif2qkpftG6", "noFsRwcc9gzaFKmT9", "kzAw9g5L2gaD2F6su", "gLz4wPnMDC5XbykFd", "MsrPWT52eihXn2WqQ", "qTddw9X2ddsGpE7Z7", "9h7Ss8iGPSm5fQ6KJ", "SaRPmajfeCaH5hRwg", "5QHPEDu6xZGHnW3HS", "iGPGfcwpTuf2sPNCW", "bTnxDFNz8z87frjuY", "vqp8xsdmRB4EaLqxR", "YKPFARS6geKpbacWq", "KaS47rQcyXtnvw8px"]
var ProfilePicArray = ["txKB3Xc6SDJyn2tW2", "GZZAgPasc28gsprLz", "uQLwtLFtAcFP7m7Dh", "LA6PsdYcb28CMqgWG", "Qugku4XSn38FWaNtY", "fk3T4379pLtX62MGc", "uNcexQruPWStM3uB9", "cSABpkXnzMnFFHyBS", "HRy9hbo37p46SRzQT", "u5JH7YLtHpM4vmdxL", "QjoMwdtDWt3rgqXt9", "tY9pTsrjMsCy4qAQA", "rPMuBSXWayzw6vfcT", "87EEfxhrG5HM8XvKE", "z4tnFcpEzM6yuNwtX", "bntqY3CARd2jmwwSx", "SHdkikYu2p3hobunA", "5t3X87b3oQG9x32P5", "NntJWZKcKGQQhgseW", "pTc5oYFca5FpxrgBZ", "b9GcpRBcG3bH6nQxA", "53ASK74YLL2ahcBs3", "Xsv83pofvvJGMPGm4", "SMfpQsuTLaqgo2zp9", "f4FuWcrWjYzenvxmK", "ou3SxX46ZDptc5Hjv", "PthpWTPfNzHB5iQdT", "mriA7guPcJKZLy9X7", "AEo2Dj7KnyHTjNYix", "xyMkuxmWrNg8bCsbp", "MfoHPDEP4xgjsvzuM", "9MALZPXjMDkeRjkFp", "6ebd6Go4Ke3pjA2DQ", "BehJmSc8n9EYgB2AT", "JpWBBJJQuNkYBSCdC", "yCqAEMTb8yakCssye", "ncHiSL2jXJrQrGjoW", "GmmHjF9GA9vA4c7GC", "3LtE5GtYNp5qNHXF3", "P8hMm6kkRwsxqb9xg", "MvM2mR69fpPivNK6Y", "stMETitML7jE4rF3Q", "K63Cm2YJpLf323APt", "tidmh2XtytkZk8LHT", "pyB5qyc2LBi8Poh3j", "hHyDZnJC7xoWmTpkn", "DHuYY2BBr6MGZfMGC", "WnzvXyP9EBtDMGBC9", "y8KLdsTCtTazKojX5", "ZKgHdARX7ayYcrSyZ", "cwZDv2NEk3yDxstbj", "oBY6DWN8XdgT8HXNa", "pBo74KAK5T2yhTXmd", "Ws2uwTFH4ER95eoqx", "5CwnpREbhxGSau3FD", "kdb8TEy28LgwjpKZp", "4woxRq2EMQWdSfzv6", "ELyAZ24T4RJeQKDyY", "T9gNN77Jse8Atij78", "mwSxrvBxFp9DwEDbA", "sEFnSDdjYhjJ2oyny", "KQGjWDXzR7X8mFvYG", "9GKeg7phTHz9pYMPu", "jMi3EgR7CsgNdkdPu", "qb5geJWygzr3cJZop", "Hg5PZ75u4SB7p4zXu", "s2xKtoRww8W6uYspM", "3Tq8tz4A8QqA4hGFd", "b4qXY3kXhZ8TwZLiA", "spR5RfWD3fmKGzSAJ", "Z4Ecv9Wwmy9HoXALD", "JqpnXyB2cFAEdbQnm", "wm4C468NuSQDpRuPh", "kFGC5ZQjdBLxDmtuY", "nKaSNjoHEc4nFxWAg", "ab3dpdZawrFwzJM4E", "6hG8zqkfSN4pdutkG", "cMG2R9wP9C3K4pSAt", "yS933hrCYbLiFH3yW", "N8c35TMSxPEGMYcpY", "59PjEC873XKGeKX8L", "S5CyncLH8oJt8kEi4", "yva9fK55suca5Yxye", "7B2PK8xzFenZvek4a", "a8yaWHBBHnHorEJY4", "ZootNfnbGZ7J8tGby", "aaMhTLfZC8bSqmBxe", "G34xk3JgATcrMREhL", "qmbrFsz6qdAm6ddSh", "wDRCNxpE8qE4crWhb", "vCw4ikKZcwBhpAF4Z", "s9WSsteyjfiMGc8NZ", "HfL78ruGRaJWFpwLm", "34oxtYaLZ83TsgZ2o", "AxgtP8advA5JNcgx5"]

function randomNumberBetween(x, y){
  return (Math.floor(Math.random() * y) + x)
}
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


function randomInstrumentArray (){
  var instrumentList = ["Voice", "Bassoon", "Cello", "Clarinet",  "Contrabassoon", "Double bass",  "Flute",  "Guitar","Harp", "Harpsichord", "Oboe",  "Piano", "Saxophone", "Trombone", "Trumpet", "Tuba",  "Viola", "Violin"];

  var instrumentNum = randomNumberBetween(1,3)
  var instrumentArray = [{instrument: 'Piano', yearsPlayed: randomNumberBetween(10, 20)}];
  for(var i = 0; i <  instrumentNum; i++){
    instrumentArray.push({instrument: randomElement(instrumentList), yearsPlayed: randomNumberBetween(5, 15)});
  };

  return instrumentArray

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
  var wonYear = wonDate.getFullYear();

  return {name: competition, year: wonYear, award: awardName};
};

function randomMusicProgram (){
  var musicProgramList = ["Kneisel Hall","Miami Music Festival ","National Orchestra Institute (NOI)","Boston University Tanglewood Institute (BUTI)","Music Academy of the West (MAW)","Britt Festival (Southern Oregon) ","Prague Summer Nights Festival ","Aspen Summer Music Festival ","Verbier Festival ","Colorado college summer music festival","Lucerne Summer Music Festival","Yellow Barn","Meadowmount School of Music ","Atlantic Music Festival ","International Contemporary Ensemble at Lincoln Center","Taos Chamber Music Festival ","National Youth Orchestra of the United States of America at Carnegie Hall (NYO-USA)","National Youth Orchestra 2 (NYO2)","Perlman Music Program ","Music@Menlo"]
  var musicProgramName = randomElement(musicProgramList);

  var today = new Date(2016, 6, 21);

  var sd = randomDate();
  var ed = randomDatePar(sd, today, 6, 20);

  var sy = sd.getFullYear();
  var ey = ed.getFullYear();

  var sm = sd.getMonth();
  var em = ed.getMonth();

  return {programName: musicProgramName, startYear: sy, endYear: ey, startMonth: sm, endMonth: em};
};

createNewMusicProfile = function (givenUserId){
  var randomYearsPlayed = Math.floor(Math.random()*20);
    console.log(givenUserId);
  return {userId: givenUserId, instrument: randomInstrumentArray(),  awards: [randomAward(),randomAward()], musicPrograms: [randomMusicProgram(),randomMusicProgram()]};
};

createNewAccompanistProfile = function (givenUserId){
  var charges = [20, 40, 60]
  var randomCharge = randomElement(charges)

  var repertoires = ["Dvorak Cello Concerto in B Minor, Op. 104","Schumann Cello Concerto in A Minor, Op. 129","Boccherini Cello Sonata in A Major, G.4","Bloch Cello Sonata ","Bruch Kol Nidrei, Op.47 ","Chopin Introduction et Polonaise Brilliante, Op. 3 ","Fauré Papillon, Op.77","Franck Cello Sonata","Greig Cello Sonata in A Minor, ","Handel Sonata No.1 in G Minor ","Haydn Presto in G"];
  var randomRepertoire = randomNoElementGiven(repertoires, 3).map(function(elm){return {concerto:elm}});

  var workingHours = ["Morning", "Afternoon", "Night"];
  var randomWorkingHours = randomNoElement(workingHours);

  var workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var randomWorkingDays = randomNoElement(workingDays);

  var sessionLocations = ["My Place", "Student's Place", "Doesn't matter"];
  var randomSessionLocation = randomElement(sessionLocations);


  //
  // var today = new Date(2002, 6, 21);
  // var future = new Date(2010, 6, 21)
  //
  // var sd = today;
  // var ed = randomDatePar(today, future, 6, 20);

  var locations = ["Boston", "Cambridge", "Amman", "Jeddah", "Stanford"];
  var randomMyLocation = randomElement(locations);

  var oneLiner = "I accept Abdulrahman Jamjoom as my Lord and Savior";
    console.log(givenUserId);

  return {Id: givenUserId,
          repertoire: randomRepertoire,
          charge: randomCharge,
          working_hours: randomWorkingHours,
          working_days: randomWorkingDays,
          session_location: randomSessionLocation,
          mylocation: randomMyLocation,
          one_liner: oneLiner,
          accompanist_active: true};
}

createNewBasicProfile = function (givenUserId){
  var randomFirstName = faker.name.firstName();
  var randomLastName = faker.name.lastName();
  var randomFullName = randomFirstName + ' ' + randomLastName

  var schools =["The Julliard School","Royal Academy of Music","Le Conservatoire de Paris","Berkley College of Music","Cleveland Institute of Music","Curtis Institute of Music","Jacobs School of Music","Manhattan School of Music","Trinity Laban Conservatoire of Music and Dance","Royal College of Music","Mannes College","Boston Conservatory","New England Conservatory","Oberlin Conservatory","King’s Academy","Los Angeles College of Music"];
  var randomAffiliation = randomElement(schools);

  var randomBirthDate = faker.date.between(Date(1990, 1, 1), Date(2000, 1, 1));

  var randomPhone = faker.phone.phoneNumber();

  var randomProfilePic = randomElement(ProfilePicArray);
  var randomCoverPic = randomElement(CoverPicArray);

  return {
            userId: givenUserId,
            name: randomFullName,
            firstName : randomFirstName,
            lastName : randomLastName,
            birthDate: randomBirthDate,
            phone: randomPhone,
            affiliation: randomAffiliation,
            profilePic: randomProfilePic,
            coverPic: randomCoverPic
          };
}

createNewTransaction = function (givenUserId){
  var repertoires = ["Dvorak Cello Concerto in B Minor, Op. 104","Schumann Cello Concerto in A Minor, Op. 129","Boccherini Cello Sonata in A Major, G.4","Bloch Cello Sonata ","Bruch Kol Nidrei, Op.47 ","Chopin Introduction et Polonaise Brilliante, Op. 3 ","Fauré Papillon, Op.77","Franck Cello Sonata","Greig Cello Sonata in A Minor, ","Handel Sonata No.1 in G Minor ","Haydn Presto in G"];
  var randomRepertoire = randomNoElementGiven(repertoires, randomNumberBetween(2,7));

  var musicians = BasicProfiles.find({}, {userId : 1}).fetch();
  var randomMusician = (randomElement(musicians)).userId;

  var performanceType = ['Solo Recital/Concert', 'College Audition', 'Orchestral Audition', 'Competition', 'Recording Session', 'Private Lesson', 'Other'];
  var randomPerformanceType = randomElement(performanceType);

  var randomStatus = 'Pending';

  var today = new Date(2016, 6, 27);
  var future = new Date(2016, 7, 6);

  var randomSessionCount = randomNumberBetween(3,8);

  return {
    musician: randomMusician,
    accompanist: givenUserId,
    performanceType: randomPerformanceType,
    repertoire: randomRepertoire,
    status: randomStatus,
    startDate: today,
    endDate: future}
}
