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
    description: 'A tarot card app with a unique turn on the traditional deck. Designed to offer more insight into patterns in our lives, the app invites the user to ask a question of the cards, to choose the number of cards to be dealt, and then to click Deal. An image and description of each card is displayed, and the user may divine whatever wisdom they may glean. I designed the deck and the app. Try it out! username: test, password: Password123',
    stack: 'React, Node.js, Express, MongoDB, JWT, Redux',
    github: 'https://github.com/publikwerker/fortune-cards-client',
    demo: 'https://www.fortune.cards/'
  }, {
    title:'Traffic\'s Cool',
    screenshot: traffShot,
    mockUp: traffMock,
    description: 'A learning app designed to teach individuals the meaning of common US traffic signs. Using a spaced repetition algorithm, users are able to focus on the signs they are less familiar with. Try it out! username: test, password: Password123',
    stack: 'React, Node.js, Express, MongoDB, JWT',
    github: 'https://github.com/publikwerker/traffics-cool',
    demo: 'https://www.traffics.cool/'
  }, {
    title:'LearnVenture',
    screenshot: learnShot,
    mockUp: learnMock,
    description: 'LearnVenture is a tool to build fun learning programs that pose unique questions based upon previous choices. You can build the storyline with videos, text, and multiple endings. In this project, I had the additional role of Design Lead. Try it out! username: fryshake, password: password123',
    stack: 'React, Node.js, Express, MongoDB, d3 Cytoscape, Redux, JWT',
    github: 'https://github.com/thinkful-ei27/client-5NodeBodies',
    demo: 'https://www.learnventure.org/'
  }, {
    title:'Publikwerker.com',
    screenshot: learnShot,
    mockUp: learnMock,
    description: 'Yes, it is true! Publikwerker designed this very page. Although simpler than most, still a fun project. Self-promotion is key to success in this new Gig economy.',
    stack: 'React, Node.js, JavaScript',
    github: 'https://github.com/publikwerker/jason-portfolio',
    demo: 'https://www.publikwerker.com/'
  }, {
    title:'WalterCosmopolis.com',
    screenshot: learnShot,
    mockUp: learnMock,
    description: 'The World Famous Entertainer Walter Cosmopolis approached Publikwerker to create a CSS-heavy promotional site. It includes new CSS-animations, transitions, and even a background video. Although it is not compatible with older browsers, it is pretty slick.',
    stack: 'React, Vanilla JavaScript',
    github: 'https://github.com/publikwerker/walter_cosmopolis2.0',
    demo: 'https://www.WalterCosmopolis.com/'
  }, {
    title: 'Publik Weather App',
    screenshot: learnShot,
    mockup: learnMock,
    description: 'This was a fun little exercise just to explore Node some more. The web app simply takes input of city or zip and displays location and brief forecast. Behind the scenes, HTTP requests are sent to mapbox.com and darksky.net APIs for geocode and weather forecast.',
    stack: 'Node.js, JavaScript',
    github: 'https://github.com/publikwerker/publik-weather-app',
    demo: 'https://publik-weather-app.herokuapp.com/'
  }
];
