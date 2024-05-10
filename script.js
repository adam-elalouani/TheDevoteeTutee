$(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultView: 'month',
      editable: true,
      events: [] // No initial events
    });
  
    // Handle form submission for scheduling meetings
    $('#newMeetingForm').submit(function(event) {
      event.preventDefault();
      
      var title = $('#meetingTitle').val();
      var start = $('#meetingStart').val();
      var end = $('#meetingEnd').val();
      
      if (title && start && end) {
        // Render the meeting on the calendar
        $('#calendar').fullCalendar('renderEvent', {
          title: title,
          start: start,
          end: end
        }, true);
  
        // Clear form fields after submission
        $('#meetingTitle').val('');
        $('#meetingStart').val('');
        $('#meetingEnd').val('');
  
        alert('Meeting scheduled successfully!');
      } else {
        alert('Please fill in all fields.');
      }
    });
  });