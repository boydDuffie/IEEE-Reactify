// For now, the process of adding a new event will require someone to fill out a new object in this EventList array.
// It is very important to use require() on the img.src value, because otherwise it will not display the image when rendering events in the Events component (see Events.js).

export const EventList = [
  {
    virtual: true,
    title: 'Virtual Texas Instruments Resume Workshop',
    img: {
      src: require('./event-img/resume_review.jpg'),
      alt: 'resume review workshop',
    },
    signUp: 'https://www.facebook.com/UFIEEE',
    date: {
      month: 'September',
      day: '3',
      startTime: '6:00 pm',
      endTime: '7:30 pm',
    },
    location: {
      building: null,
      room: null,
      address: null,
    },
    meetingLink: 'https://ufl.zoom.us/j/95460634480',
  },
];
