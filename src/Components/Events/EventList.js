// For now, the process of adding a new event will require someone to fill out a new object in this EventList array.
// It is very important to use require() on the img.src value, because otherwise it will not display the image when rendering events in the Events component (see Events.js).

export const EventList = [
  {
    virtual: true,
    title: 'ECE Student Orgs Virtual Game Night',
    img: {
      src: require('./event-img/video_call.jpg'),
      alt: 'game night july 26th',
    },
    signUp: 'https://www.facebook.com/events/1113278472406035/',
    date: {
      month: 'July',
      day: '26',
      startTime: '7:00 pm',
      endTime: '10:00 pm',
    },
    location: {
      building: null,
      room: null,
      address: null,
    },
    meetingLink: 'https://ufl.zoom.us/j/4480710273',
  },
  {
    virtual: false,
    title: 'Test Event',
    img: {
      src: require('./event-img/video_call.jpg'),
      alt: 'game night july 26th',
    },
    signUp: 'https://www.facebook.com/events/1113278472406035/',
    date: {
      month: 'July',
      day: '26',
      startTime: '7:00 pm',
      endTime: '10:00 pm',
    },
    location: {
      building: 'test',
      room: 'test',
      address: 'test',
    },
    meetingLink: 'https://ufl.zoom.us/j/4480710273',
  },
];
