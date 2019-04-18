const fortMock = require('./components/images/fortuneCardsMock.jpg');
const traffMock =  require('./components/images/trafficsCoolMock.jpg');
const learnMock = require('./components/images/learnVentureMock.jpg');

export const projectList = [
  {
    title:'Fortune.cards',
    mockUp: fortMock,
    description: 'A tarot card app with a unique turn on the traditional deck. It is designed to offer more insight into patterns in our lives. The user is invited to ask a question of the cards, to choose the number of cards to be dealt, and then to click Deal. An image and description of each card is displayed, and the user may devine whatever wisdom they may glean.',
    stack: 'React, Node.js, Express, MongooseDB, JWT, Redux',
    github: 'https://github.com/thinkful-ei27/jason-react-capstone-app',
    demo: 'https://damp-hamlet-47102.herokuapp.com/'
  }, {
    title:'Traffic\'s Cool',
    mockUp: traffMock,
    description: 'A learning app designed to teach individuals the meaning of common US traffic signs. Using a spaced repetition algorithm, users are able to focus on the signs they are less familiar with. Try it out! username: test, password: Password123',
    stack: 'React, Node.js, Express, MongooseDB, JWT',
    github: 'https://github.com/thinkful-ei27/jason-derek-spaced-repetition-client',
    demo: 'https://traffics-cool.herokuapp.com/'
  }, {
    title:'LearnVenture',
    mockUp: learnMock,
    description: 'LearnVenture is a versatile tool you can use to build engaging educational quests. With a simple, straight forward design it is easy to use for both teachers and students. Anyone can use this site to help teach any topic. Educators can put students in the shoes of influential characters from history to test their knowledge of current curriculum. In the professional landscape, employers can use it to create informational material on how to use new products and services. If you have knowledge to impart, LearnVenture is a fun tool to help share that information. In this project, I had the role of Design Lead. Try it out! username: fryshake, password: Password123',
    stack: 'React, Node.js, Express, MongooseDB, d3 Cytoscape, Redux, JWT',
    github: 'https://github.com/thinkful-ei27/client-5NodeBodies',
    demo: 'https://damp-hamlet-47102.herokuapp.com/'
  }
];
