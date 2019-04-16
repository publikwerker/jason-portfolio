const fortMock = require('./components/images/fortuneCardsMock.jpg');
const traffMock =  require('./components/images/trafficsCoolMock.jpg');
const learnMock = require('./components/images/learnVentureMock.jpg');

export const projectList = [
  {
    title:'Fortune.cards',
    mockUp: fortMock,
    description: 'A tarot card app with a unique turn on the traditional deck. It is designed to offer more insight into patterns in our lives.',
    stack: 'React, Node.js, Express, MongooseDB, JWT, Redux',
    github: 'https://github.com/thinkful-ei27/jason-react-capstone-app',
    demo: 'https://damp-hamlet-47102.herokuapp.com/'
  }, {
    title:'Traffic\'s Cool',
    mockUp: traffMock,
    description: 'A learning app designed to teach individuals the meaning of common US traffic signs. Using a spaced repetition algorithm, users are able to focus on the signs they are less familiar with.',
    stack: 'React, Node.js, Express, MongooseDB, JWT',
    github: 'https://github.com/thinkful-ei27/jason-derek-spaced-repetition-client',
    demo: 'https://traffics-cool.herokuapp.com/'
  }, {
    title:'LearnVenture',
    mockUp: learnMock,
    description: 'Create your own LearnVenture! Build an adventure with multiple outcomes. Let users choose their own path.',
    stack: 'React, Node.js, Express, MongooseDB, d3 Cytoscape, Redux, JWT',
    github: 'https://github.com/thinkful-ei27/client-5NodeBodies',
    demo: 'https://damp-hamlet-47102.herokuapp.com/'
  }
];
