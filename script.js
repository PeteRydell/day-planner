var timeBlock = [
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm"
    ];

var input = description;


//$(".container-1").html("9:00AM").attr({class: "hour"});
//$(".container-1").html("<input/>").attr({class: "col-xl-8 time-block row hour", name:'time'});




var calDiv = $(".container-1")

for (var i = 0; i < timeBlock.length; i++) {

    var newTimeBlock = $(timeBlock[i] + "</div>");
    
    calDiv.append(newTimeBlock);

};
