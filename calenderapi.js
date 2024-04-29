
const calendarAPI = {
    scheduleEvent: function(eventName, eventDate) {
      
      console.log(`Event "${eventName}" scheduled for ${eventDate}`);
      
      return Promise.resolve({ success: true, message: 'Event scheduled successfully' });
    },
    getEvents: function() {
      
      const events = [
        {
          title: 'Tutoring Session',
          start: '2024-04-19T10:00:00',
          end: '2024-04-19T12:00:00'
        },
        {
          title: 'Tutee Meeting',
          start: '2024-04-21T14:00:00',
          end: '2024-04-21T16:00:00'
        }
      ];
      return Promise.resolve(events);
    }
  };
  
  // user authentication and account creation api (still need to finish)
  const authAPI = {
    login: function(username, password) {
      // authenticate user
      console.log(`User "${username}" logged in`);
      
      return Promise.resolve({ success: true, message: 'User logged in successfully' });
    },
    register: function(username, email, password) {
      // register new user
      console.log(`User "${username}" registered with email "${email}"`);
     
      return Promise.resolve({ success: true, message: 'User registered successfully' });
    },
    logout: function() {
      // log out user
      console.log('User logged out');
      
      return Promise.resolve({ success: true, message: 'User logged out successfully' });
    }
  };
  
  // video/storage api
  const mediaStorageAPI = {
    uploadMedia: function(file) {
      // upload media
      console.log(`File "${file.name}" uploaded successfully`);
      
      return Promise.resolve({ success: true, message: 'Media uploaded successfully' });
    },
    getMedia: function() {
      // fetch media
      const media = [
        { name: 'video1.mp4', url: 'https://example.com/video1.mp4' },
        { name: 'audio1.mp3', url: 'https://example.com/audio1.mp3' }
      ];
      return Promise.resolve(media);
    }
  };
  
  
  
  calendarAPI.scheduleEvent('Tutoring Session', '2024-04-25T10:00:00')
    .then(response => console.log(response))
    .catch(error => console.error(error));
  
  authAPI.login('username', 'password')
    .then(response => console.log(response))
    .catch(error => console.error(error));
  
  mediaStorageAPI.uploadMedia({ name: 'video1.mp4', size: '10MB' })
    .then(response => console.log(response))
    .catch(error => console.error(error));