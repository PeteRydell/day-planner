$("#currentDay").text(moment().format('LLLL'));

var time = 'HH:mm:ss'

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
