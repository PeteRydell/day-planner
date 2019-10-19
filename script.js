$("#currentDay").text(moment().format('LLLL'));

var nineAM = JSON.parse(localStorage.getItem('#descriptionNine'));
var tenAM = JSON.parse(localStorage.getItem('tenAM'));
var elevenAM = JSON.parse(localStorage.getItem('elevenAM'));
var twelvePM = JSON.parse(localStorage.getItem('twelvePM'));
var onePM = JSON.parse(localStorage.getItem('onePM'));
var twoPM = JSON.parse(localStorage.getItem('twoPM'));
var threePM = JSON.parse(localStorage.getItem('threePM'));
var fourPM = JSON.parse(localStorage.getItem('fourPM'));
var fivePM = JSON.parse(localStorage.getItem('fivePM'));

var nineAm = "";

$("#saveBtnNine").click(function() { 
    var nineAm = $('#descriptionNine').val(nineAm); 
    console.log(nineAm)
}); 







