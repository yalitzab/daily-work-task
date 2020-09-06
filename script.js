// Display current day
// $("#currentDay").text(moment().format("dddd, MMMM Do"));
// $(document).ready(function(){

// })
function getCurrentDay() {
var currentDay = moment().format('dddd, MMMM Do YYYY, HH:mm:ss');
$('#currentDay').text(currentDay);
// console.log(currentDay)
}

getCurrentDay();

function getTime(i){
    var num = i + 8
    if (num > 12 ){
        num = num - 12
        return num + 'p'
    }else if (num == 12) {
        return num + 'p'
    }else{
        return num + 'a'
    }

}

function createRows (){
    for (var i =  0; i < 9; i++){
        var time = getTime(i)
        console.log(time)

        var row = $('<div>')
        row.addClass('row justify-content-md-center time-block')

        var header = $('<div>')
        header.addClass('card-header hour col-1')
        header.text(`${time}m`)

        var textArea = $('<textarea>')
        textArea.addClass('col-md-10 description past present future')
        textArea.attr('id', `${time}`)

        var button = $('<button>')
        button.addClass('saveBtn col-md-1')
        button.text('Save')
        
        var container = $('.container')
        row.append(header)
        row.append(textArea)
        row.append(button)
        container.append(row)

    }
}
createRows();


// Save task text
$('.saveBtn').on('click', function() {
    var value = $(this).siblings('.description').val()
    var time = $(this).siblings('.description').attr('id')

    console.log(value + '  ' + time)
    localStorage.setItem(time, value)
})



//Hour update
// function hourUpdate() {
//     // get current number of hours
//     var date = moment().hours();
//     // loop over time blocks
//     $(".time-block").each(function() {
//       var blockHour = parseInt($(this).attr("id").split("-")[1]);
//       // check if we've moved past this time
//       if (blockHour < day) {
//         $(this).addClass("past");
//       } 
//       else if (blockHour === day) {
//         $(this).removeClass("past");
//         $(this).addClass("present");
//       } 
//       else {
//         $(this).removeClass("past");
//         $(this).removeClass("present");
//         $(this).addClass("future");
//       }
//     });
//   }
//   hourUpdate();

  // set up interval to check if current time needs to be updated
//   var interval = setInterval(hourUpdate, 15000);
  // load any saved data from localStorage
  $("#8a").val(localStorage.getItem("8a"));
  $("#9a").val(localStorage.getItem("9a"));
  $("#10a").val(localStorage.getItem("10a"));
  $("#11a").val(localStorage.getItem("11a"));
  $("#12p").val(localStorage.getItem("12p"));
  $("#1p").val(localStorage.getItem("1p"));
  $("#2p").val(localStorage.getItem("2p"));
  $("#3p").val(localStorage.getItem("3p"));
  $("#4p").val(localStorage.getItem("4p"));
  $("#5p").val(localStorage.getItem("5p"));

// });