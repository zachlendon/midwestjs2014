var faker = require('Faker');

var data = function(faker, count) {
  var data = [];

  while(count--) {
    data.push({
      "slogan" : faker.Company.catchPhrase(),
      "author" : faker.Name.findName(),
      "company" : faker.Company.companyName(),
    });
  }

  return data;
};

var taffy = require('taffy');

module.exports = taffy(
  data(faker, 1000)
);