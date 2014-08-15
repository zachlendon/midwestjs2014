var companies = require('../companies.js');

exports.companies = {};

exports.companies.index = function(request, response) {
    response.render('index');
};

exports.companies.all = function(request, response) {
    response.json(companies().get());
};

exports.companies.one = function(request, response) {
  var id = request.params.id;

  response.json(companies(id).first());
};

exports.companies.create = function(request, response) {
  var company = request.body;

  companies().insert(company);

  response.json(company);
};