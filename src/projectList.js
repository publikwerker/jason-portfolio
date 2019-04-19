const fortMock = require('./components/images/fortuneCardsMock.jpg');
const fortShot = require('./components/images/fortunecardsss.jpg');
const traffMock =  require('./components/images/trafficsCoolMock.jpg');
const traffShot = require('./components/images/trafficscoolss.jpg');
const learnMock = require('./components/images/learnVentureMock.jpg');
const learnShot = require('./components/images/learnventuress.jpg');

export const projectList = [
  {
    title:'Fortune.cards',
    screenshot: fortShot,
    mockUp: fortMock,
    description: 'A tarot card app with a unique turn on the traditional deck. It is designed to offer more insight into patterns in our lives. The user is invited to ask a question of the cards, to choose the number of cards to be dealt, and then to click Deal. An image and description of each card is displayed, and the user may divine whatever wisdom they may glean.',
    stack: 'React, Node.js, Express, MongooseDB, JWT, Redux',
    github: 'https://github.com/thinkful-ei27/jason-react-capstone-app',
    demo: 'https://damp-hamlet-47102.herokuapp.com/'
  }, {
    title:'Traffic\'s Cool',
    screenshot: traffShot,
    mockUp: traffMock,
    description: 'A learning app designed to teach individuals the meaning of common US traffic signs. Using a spaced repetition algorithm, users are able to focus on the signs they are less familiar with. Try it out! username: test, password: Password123',
    stack: 'React, Node.js, Express, MongooseDB, JWT',
    github: 'https://github.com/thinkful-ei27/jason-derek-spaced-repetition-client',
    demo: 'https://traffics-cool.herokuapp.com/'
  }, {
    title:'LearnVenture',
    screenshot: learnShot,
    mockUp: learnMock,
    description: 'LearnVenture is a tool to build fun learning programs that pose unique questions based upon previous choices. You can build the storyline with videos, text, and multiple endings. In this project, I had the additional role of Design Lead. Try it out! username: fryshake, password: password123',
    stack: 'React, Node.js, Express, MongooseDB, d3 Cytoscape, Redux, JWT',
    github: 'https://github.com/thinkful-ei27/client-5NodeBodies',
    demo: 'https://www.learnventure.org/'
  }
];
