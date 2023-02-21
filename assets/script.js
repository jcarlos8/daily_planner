//variable to display current date & time

var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);

var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

// Check each hour, set up for color change

$.each(timeBlock, function (i, hour) {
  var hourId = parseInt($(this).attr("id"));
  if (hourId === now) {
    $(this).next().addClass("present");
  } else if (hourId < now) {
    $(this).next().addClass("past");
  } else if (hourId > now) {
    $(this).next().addClass("future");
  }
});

// Saving data to local storage

$(".saveBtn").on("click", function (event) {
  var calItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calItem);
});

$(document).ready(function () {
  if (localStorage["nine"] !== null && localStorage["nine"] !== undefined) {
    var nineAm = $("<p>" + localStorage["nine"] + "</p>");
    $("#nineAm").append(nineAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["ten"] !== null && localStorage["ten"] !== undefined) {
    var tenAm = $("<p>" + localStorage["ten"] + "</p>");
    $("#tenAm").append(tenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["eleven"] !== null && localStorage["eleven"] !== undefined) {
    var elevenAm = $("<p>" + localStorage["eleven"] + "</p>");
    $("#elevenAm").append(elevenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["twelve"] !== null && localStorage["twelve"] !== undefined) {
    var twelvePm = $("<p>" + localStorage["twelve"] + "</p>");
    $("#twelvePm").append(twelvePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["one"] !== null && localStorage["one"] !== undefined) {
    var onePm = $("<p>" + localStorage["one"] + "</p>");
    $("#onePm").append(onePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["two"] !== null && localStorage["two"] !== undefined) {
    var twoPm = $("<p>" + localStorage["two"] + "</p>");
    $("#twoPm").append(twoPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["three"] !== null && localStorage["three"] !== undefined) {
    var threePm = $("<p>" + localStorage["three"] + "</p>");
    $("#threePm").append(threePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["four"] !== null && localStorage["four"] !== undefined) {
    var fourPm = $("<p>" + localStorage["four"] + "</p>");
    $("#fourPm").append(fourPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["five"] !== null && localStorage["five"] !== undefined) {
    var fivePm = $("<p>" + localStorage["five"] + "</p>");
    $("#fivePm").append(fivePm[0].innerText);
  } else {
    ("");
  }
});
