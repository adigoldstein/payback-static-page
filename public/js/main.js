$(document).ready(function () {


  var ip = '';
  var country = '';

  $.getJSON("https://geoip.nekudo.com/api/", function (data) {

    ip = data.ip;
    country = data.country.name;
    console.info(ip, country);

    $('.country-span').html(country);
    $('.ip-span').html(country);


  });
});
