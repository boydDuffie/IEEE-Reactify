export const EventList = [
  {
    virtual: true,
    title: 'ECE Student Orgs Virtual Game Night',
    img: {
      src: './event-img/video_call.jpg',
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
      src: './event-img/video_call.jpg',
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
