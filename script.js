$("#currentDay").text(moment().format('LLLL'));

var time = 'HH:mm:ss'
var past = setInterval(past, 1000);
var current = setInterval(current, 1000);
var future = setInterval(future, 1000);

var nineAM = JSON.parse(localStorage.getItem('#descriptionNine'));
$("#descriptionNine").val(nineAM);
var tenAM = JSON.parse(localStorage.getItem('#descriptionTen'));
$("#descriptionTen").val(tenAM);
var elevenAM = JSON.parse(localStorage.getItem('#descriptionEleven'));
$("#descriptionEleven").val(elevenAM);
var twelvePM = JSON.parse(localStorage.getItem('#descriptionTwelve'));
$("#descriptionTwelve").val(twelvePM);
var onePM = JSON.parse(localStorage.getItem('#descriptionOne'));
$("#descriptionOne").val(onePM);
var twoPM = JSON.parse(localStorage.getItem('#descriptionTwo'));
$("#descriptionTwo").val(twoPM);
var threePM = JSON.parse(localStorage.getItem('#descriptionThree'));
$("#descriptionThree").val(threePM);
var fourPM = JSON.parse(localStorage.getItem('#descriptionFour'));
$("#descriptionFour").val(fourPM);
var fivePM = JSON.parse(localStorage.getItem('#descriptionFive'));
$("#descriptionFive").val(fivePM);

$("#saveBtnNine").click(function() { 
    var value = $('#descriptionNine').val(); 
    console.log(value)
    localStorage.setItem('#descriptionNine', JSON.stringify(value));
}); 

$("#saveBtnTen").click(function() { 
    var value = $('#descriptionTen').val(); 
    console.log(value)
    localStorage.setItem('#descriptionTen', JSON.stringify(value));
}); 

$("#saveBtnEleven").click(function() { 
    var value = $('#descriptionEleven').val(); 
    console.log(value)
    localStorage.setItem('#descriptionEleven', JSON.stringify(value));
}); 

$("#saveBtnTwelve").click(function() { 
    var value = $('#descriptionTwelve').val(); 
    console.log(value)
    localStorage.setItem('#descriptionTwelve', JSON.stringify(value));
}); 

$("#saveBtnOne").click(function() { 
    var value = $('#descriptionOne').val(); 
    console.log(value)
    localStorage.setItem('#descriptionOne', JSON.stringify(value));
}); 

$("#saveBtnTwo").click(function() { 
    var value = $('#descriptionTwo').val(); 
    console.log(value)
    localStorage.setItem('#descriptionTwo', JSON.stringify(value));
}); 

$("#saveBtnThree").click(function() { 
    var value = $('#descriptionThree').val(); 
    console.log(value)
    localStorage.setItem('#descriptionThree', JSON.stringify(value));
}); 

$("#saveBtnFour").click(function() { 
    var value = $('#descriptionFour').val(); 
    console.log(value)
    localStorage.setItem('#descriptionFour', JSON.stringify(value));
}); 

$("#saveBtnFive").click(function() { 
    var value = $('#descriptionFive').val(); 
    console.log(value)
    localStorage.setItem('#descriptionFive', JSON.stringify(value));
}); 

function current(){
    if (moment().isBetween(moment('09:00:00', time), moment('09:59:59', time))) {
        $("#descriptionNine").addClass("present")
    }
    if (moment().isBetween(moment('10:00:00', time), moment('10:59:59', time))) {
        $("#descriptionTen").addClass("present")
    }
    if (moment().isBetween(moment('11:00:00', time), moment('11:59:59', time))) {
        $("#descriptionEleven").addClass("present")
    }
    if (moment().isBetween(moment('12:00:00', time), moment('12:59:59', time))) {
        $("#descriptionTwelve").addClass("present")
    }
    if (moment().isBetween(moment('13:00:00', time), moment('13:59:59', time))) {
        $("#descriptionOne").addClass("present")
    }
    if (moment().isBetween(moment('14:00:00', time), moment('14:59:59', time))) {
        $("#descriptionTwo").addClass("present")
    }
    if (moment().isBetween(moment('15:00:00', time), moment('15:59:59', time))) {
        $("#descriptionThree").addClass("present")
    }
    if (moment().isBetween(moment('16:00:00', time), moment('16:59:59', time))) {
        $("#descriptionFour").addClass("present")
    }
    if (moment().isBetween(moment('17:00:00', time), moment('17:59:59', time))) {
        $("#descriptionFive").addClass("present")
    }
};

function future(){
    if(moment().isBefore(moment('08:59:59', time))){
        $("#descriptionNine").addClass("future")
    }
    if(moment().isBefore(moment('09:59:59', time))){
        $("#descriptionTen").addClass("future")
    }
    if(moment().isBefore(moment('10:59:59', time))){
        $("#descriptionEleven").addClass("future")
    }
    if(moment().isBefore(moment('11:59:59', time))){
        $("#descriptionTwelve").addClass("future")
    }
    if(moment().isBefore(moment('12:59:59', time))){
        $("#descriptionOne").addClass("future")
    }
    if(moment().isBefore(moment('13:59:59', time))){
        $("#descriptionTwo").addClass("future")
    }
    if(moment().isBefore(moment('14:59:59', time))){
        $("#descriptionThree").addClass("future")
    }
    if(moment().isBefore(moment('15:59:59', time))){
        $("#descriptionFour").addClass("future")
    }
    if(moment().isBefore(moment('16:59:59', time))){
        $("#descriptionFive").addClass("future")
    }

}

function past(){
    if (moment().isAfter(moment('09:59:59', time))) {
        $("#descriptionNine").addClass("past")
    }
    if (moment().isAfter(moment('10:59:59', time))) {
        $("#descriptionTen").addClass("past")
    }
    if (moment().isAfter(moment('11:59:59', time))) {
        $("#descriptionEleven").addClass("past")
    }
    if (moment().isAfter(moment('12:59:59', time))) {
        $("#descriptionTwelve").addClass("past")
    }
    if (moment().isAfter(moment('13:59:59', time))) {
        $("#descriptionOne").addClass("past")
    }
    if (moment().isAfter(moment('14:59:59', time))) {
        $("#descriptionTwo").addClass("past")
    }
    if (moment().isAfter(moment('15:59:59', time))) {
        $("#descriptionThree").addClass("past")
    }
    if (moment().isAfter(moment('16:59:59', time))) {
        $("#descriptionFour").addClass("past")
    }
    if (moment().isAfter(moment('17:59:59', time))) {
        $("#descriptionFive").addClass("past")
    }
};