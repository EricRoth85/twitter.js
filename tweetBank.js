

const _ = require('lodash');
module.exports = { add: add, list: list, find: find };
let data = [];

let testUsers = [ { name: 'Nimit Dunderproto',
content: 'Fullstack Academy is sweet! The instructors are just so mindblowing. #fullstacklove #codedreams' },
{ name: 'Ben Ecma',
content: 'Fullstack Academy is mindblowing! The instructors are just so cool. #fullstacklove #codedreams' },
{ name: 'Karen Docsreader',
content: 'Fullstack Academy is funny! The instructors are just so sweet. #fullstacklove #codedreams' },
{ name: 'Gabriel Stackson',
content: 'Fullstack Academy is breathtaking! The instructors are just so funny. #fullstacklove #codedreams' },
{ name: 'Joe Docsreader',
content: 'Fullstack Academy is amazing! The instructors are just so breathtaking. #fullstacklove #codedreams' },
{ name: 'Nimit Binder',
content: 'Fullstack Academy is sweet! The instructors are just so awesome. #fullstacklove #codedreams' },
{ name: 'Ben Ecma',
content: 'Fullstack Academy is amazing! The instructors are just so breathtaking. #fullstacklove #codedreams' },
{ name: 'Gabriel Ecma',
content: 'Fullstack Academy is breathtaking! The instructors are just so amazing. #fullstacklove #codedreams' },
{ name: 'Karen Binder',
content: 'Fullstack Academy is awesome! The instructors are just so awesome. #fullstacklove #codedreams' },
{ name: 'Dan Ecma',
content: 'Fullstack Academy is cool! The instructors are just so awesome. #fullstacklove #codedreams' } ]

data = data.concat(testUsers)

function add (name, content) {
  data.push({ name: name, content: content });
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
//   module.exports.add( getFakeName(), getFakeTweet() );
// }

console.log(find({name: 'Dan Ecma'}))


// console.log(data)
