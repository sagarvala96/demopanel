exports.baseURL = function baseURL() {
  var baseURL = "https://demo.appemporio.net/create-demo";

  return baseURL;
}

exports.admin_username = function admin_username() {
  var admin_username = "svalaelluminati@gmail.com";
  //var admin_username = "info@magicedelivery.com";

  return admin_username;
}

exports.admin_password = function admin_password() {
  var admin_password = "123456";
  //var admin_password = ")~6xC2J5B-UVw7+m";

  return admin_password;
}

exports.resolution = function resolution() {
  //var resolution = 'functions.resolution()'
  var resolution = 'macbook-15'
  // var resolution = 'macbook-13'
  // var resolution = 'macbook-11'
  // var resolution = 'ipad-2'
  // var resolution = 'ipad-mini'
  // var resolution = 'iphone-6+'
  // var resolution = 'iphone-6'

  return resolution;
}

// Change waiting time
exports.wait = function wait() {

  var wait = 3000;

  return wait;
}

exports.resolution = function resolution() {
  //var resolution = 'functions.resolution()'
  var resolution = 'macbook-15'
  // var resolution = 'macbook-13'
  // var resolution = 'macbook-11'
  // var resolution = 'ipad-2'
  // var resolution = 'ipad-mini'
  // var resolution = 'iphone-6+'
  // var resolution = 'iphone-6'

  return resolution;
}

exports.number = function number() {
  var number = "";
  var possible = "1234567890"

  for (var i = 0; i < 9; i++)
    number += possible.charAt(Math.floor(Math.random() * possible.length));

  return number;
}

exports.string = function string() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

exports.email = function email() {
  var text = "";
  //var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text + '@gmail.com';
}

exports.country = function country() {
  var country = "Canada";

  return country;
}

// add already added country
exports.already_added_country = function already_added_country() {
  var already_added_country = "India";

  return already_added_country;
}

exports.city = function city() {
  var city = "Toronto, ON, Canada";

  return city;
}

// add already added city
exports.already_added_city = function already_added_city() {
  var already_added_city = "Rajkot, Gujarat 360001, India";

  return already_added_city;
}

exports.vehicle_type = function vehicle_type() {
  var vehicle_type = "Sedan";

  return vehicle_type;
}

exports.delivery_business = function delivery_business() {
  var delivery_business = "Restaurants";

  return delivery_business;
}

exports.service = function service() {
  var service = "Painters";

  return service;
}