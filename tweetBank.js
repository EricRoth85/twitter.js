

const _ = require('lodash');
module.exports = { add: add, list: list, find: find };
let data = [];

let testUsers = [ { id: 0,
  name: 'Emily Ecma',
  content: 'Fullstack Academy is mindblowing! The instructors are just so wonderful. #fullstacklove #codedreams' },
{ id: 1,
  name: 'Gabriel Ternary',
  content: 'Fullstack Academy is mindblowing! The instructors are just so mindblowing. #fullstacklove #codedreams' },
{ id: 2,
  name: 'Omri McQueue',
  content: 'Fullstack Academy is amazing! The instructors are just so amazing. #fullstacklove #codedreams' },
{ id: 3,
  name: 'Joe Dunderproto',
  content: 'Fullstack Academy is sweet! The instructors are just so sweet. #fullstacklove #codedreams' },
{ id: 4,
  name: 'Joe Stackson',
  content: 'Fullstack Academy is funny! The instructors are just so mindblowing. #fullstacklove #codedreams' },
{ id: 5,
  name: 'Gabriel Claujure',
  content: 'Fullstack Academy is awesome! The instructors are just so mindblowing. #fullstacklove #codedreams' },
{ id: 6,
  name: 'Kate Ecma',
  content: 'Fullstack Academy is breathtaking! The instructors are just so amazing. #fullstacklove #codedreams' },
{ id: 7,
  name: 'Geoff Ecma',
  content: 'Fullstack Academy is amazing! The instructors are just so wonderful. #fullstacklove #codedreams' },
{ id: 8,
  name: 'Scott OLogn',
  content: 'Fullstack Academy is impressive! The instructors are just so cool. #fullstacklove #codedreams' },
{ id: 9,
  name: 'Joe Ecma',
  content: 'Fullstack Academy is wonderful! The instructors are just so impressive. #fullstacklove #codedreams' } ]

data = data.concat(testUsers)

function add (name, content) {
  let idNum = data.length;
  data.push({ id: idNum, name: name, content: content });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}


const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

// for (let i = 0; i < 10; i++) {
//   module.exports.add( i, getFakeName(), getFakeTweet() );
// }

// console.log(find({name: 'Dan Ecma'}))

// console.log(data)
