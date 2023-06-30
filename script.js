// Function to determine timeslot class / color
function getTimeslotClass(current_hour, other_hour) {
  if (other_hour < current_hour) {
    return 'past'
  }

  if (other_hour === current_hour) {
    return 'present'
  }

  if (other_hour > current_hour) {
    return 'future'
  }
}

// Function to save to local storage
function saveText(key, value) {
  localStorage.setItem(key, value)
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Add code to display the current date in the header of the page.
  const now = dayjs().format('dddd, MMMM D')

  const current_day = $('#currentDay')
  current_day.text(now)

  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  const current_hour = Number(dayjs().format('H'))

  $('#hour-9').addClass(getTimeslotClass(current_hour, 9))
  $('#hour-10').addClass(getTimeslotClass(current_hour, 10))
  $('#hour-11').addClass(getTimeslotClass(current_hour, 11))
  $('#hour-12').addClass(getTimeslotClass(current_hour, 12))
  $('#hour-1').addClass(getTimeslotClass(current_hour, 13))
  $('#hour-2').addClass(getTimeslotClass(current_hour, 14))
  $('#hour-3').addClass(getTimeslotClass(current_hour, 15))
  $('#hour-4').addClass(getTimeslotClass(current_hour, 16))
  $('#hour-5').addClass(getTimeslotClass(current_hour, 17))

  // Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $('#hour-9 button').click(() => {
    saveText('nine-am', $('#hour-9 textarea').val())
  })

  $('#hour-10 button').click(() => {
    saveText('ten-am', $('#hour-10 textarea').val())
  })

  $('#hour-11 button').click(() => {
    saveText('eleven-am', $('#hour-11 textarea').val())
  })

  $('#hour-12 button').click(() => {
    saveText('twelve-pm', $('#hour-12 textarea').val())
  })

  $('#hour-1 button').click(() => {
    saveText('one-pm', $('#hour-1 textarea').val())
  })

  $('#hour-2 button').click(() => {
    saveText('two-pm', $('#hour-2 textarea').val())
  })

  $('#hour-3 button').click(() => {
    saveText('three-pm', $('#hour-3 textarea').val())
  })

  $('#hour-4 button').click(() => {
    saveText('four-pm', $('#hour-4 textarea').val())
  })

  $('#hour-5 button').click(() => {
    saveText('five-pm', $('#hour-5 textarea').val())
  })

  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $('#hour-9 textarea').val(localStorage.getItem('nine-am'))
  $('#hour-10 textarea').val(localStorage.getItem('ten-am'))
  $('#hour-11 textarea').val(localStorage.getItem('eleven-am'))
  $('#hour-12 textarea').val(localStorage.getItem('twelve-pm'))
  $('#hour-1 textarea').val(localStorage.getItem('one-pm'))
  $('#hour-2 textarea').val(localStorage.getItem('two-pm'))
  $('#hour-3 textarea').val(localStorage.getItem('three-pm'))
  $('#hour-4 textarea').val(localStorage.getItem('four-pm'))
  $('#hour-5 textarea').val(localStorage.getItem('five-pm'))
});
