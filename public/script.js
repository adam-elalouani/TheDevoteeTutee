$(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultView: 'month',
      editable: true,
      events: [] 
    });
  

    $('#newMeetingForm').submit(function(event) {
      event.preventDefault();
      
      var title = $('#meetingTitle').val();
      var start = $('#meetingStart').val();
      var end = $('#meetingEnd').val();
      
      if (title && start && end) {
       
        $('#calendar').fullCalendar('renderEvent', {
          title: title,
          start: start,
          end: end
        }, true);
  
     
        $('#meetingTitle').val('');
        $('#meetingStart').val('');
        $('#meetingEnd').val('');
  
        alert('Meeting scheduled successfully!');
      } else {
        alert('Please fill in all fields.');
      }
    });
  });