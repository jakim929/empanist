import { Meteor } from 'meteor/meteor';
import { Accounts } from '../collections/account.js'
import { AccompanistProfile } from '../collections/accompanistProfile.js'

Meteor.startup(() => {

});

Meteor.methods({
  getGeocode: function (arg) {
    var geo = new GeoCoder();
    var result = geo.geocode(arg);
    return result
  },

  insertRandomAccount: function() {
    Accounts.insert(createNewAccount());
  }
});

function randomElement (arr) {
  return arr[Math.floor(Math.random()*arr.length)];
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
  var start = new Date(2000, 1,1);
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

function createNewAccount (){
  var randomUserId = Accounts.ObjectId();
  var randomYearsPlayed = Math.floor(Math.random()*20);
  return {userId: randomUserId, instrument: randomInstrument(), yearsPlayed: randomYearsPlayed, awards: randomAward(), musicPrograms: randomMusicProgram()};
};
