const profile = {
  fullName: 'Arslan Ahmad',
  description: 'FULL-STACK DEVELOPER',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'avatar.svg',
  about: {
    title: `Hi there! 
    Welcome to my about`,
    description: `I am a result driven full stack developer who is obsessed with the process of improving my skills. I first discovered my love for coding from
    an early age through game design in high school. I have a proven track record of performing well in fast-paced environments. I am eager
    to emerge myself in complex issues that will allow for personal growth in web development. I am extremely team oriented and I believe
    that teamwork is the best way to approach tough problems and to help build a strong foundation. Additionally, I love to play basketball as I
    believe it improves my work ethic and ability to communicate with others.`,
    findMeOn: [
      {
        iconName: 'location',
        text: 'Canada, Calgary',
        url: '',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'twitter',
        text: '@Arslan67891210',
        url: 'https://twitter.com/Arslan67891210',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'Arah09@hotmail.com',
        url: 'mailto:Arah09@hotmail.com',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'linkdin',
        text: 'Arslan Ahmad',
        url: 'https://www.linkedin.com/in/arslan-ahmad-0499a8180/',
        hoverColor: '#e9641c'
      }
    ]
  },
  social: [
    {
      iconName: 'twitter',
      url: 'https://twitter.com/Arslan67891210',
      text: "Check out my twitter!",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'github',
      url: 'https://github.com/arslanah99',
      text: "Checkout my Github!",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:Arah09@hotmail.com',
      text: 'Send me an email!',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'UpcycleYYC',
    img: 'https://github.com/tranpaulyn/realUpcycleYYC/blob/master/Screenshots/home.png?raw=true',
    description: 'UpcycleYYC is a waste management application with a gamifycation aspect built with react on the front end hosted on heroku and rails for the back end with postgres for the database.',
    categories: ['React', 'Ruby on Rails', 'Postgres', 'Heroku'],
    siteUrl: 'https://afternoon-tor-83860.herokuapp.com/',
    sourceCodeUrl: 'https://github.com/arslanah99/realUpcycleYYC'
  },
  {
    title: 'ElFedora',
    img: 'https://github.com/tranpaulyn/elFedora/blob/master/docs/Screenshot%20from%202019-03-04%2009-36-27.png?raw=true',
    description: 'ElFedora is a take-out app that has a fully functioning interface built with Twilo, Node Skeleton, Knex, EJS, Express, PG, Morgan, Dotenv, Nodemon, Body-Parser and NPM.',
    categories: ['Express', 'EJS', 'PG', 'Nodemon', 'Knex'],
    siteUrl: 'https://elfedora.herokuapp.com/',
    sourceCodeUrl: 'https://github.com/arslanah99/elFedora'
  },
  {
    title: 'ChattyApp',
    img: 'https://github.com/arslanah99/ChattyApp/blob/master/docs/Chatty-ScreenShot.png?raw=true',
    description: 'A minimal and light dev environment for ReactJS. With a server that allows for texting to more than 1 web client.',
    categories: ['Babel', 'Express', 'React'],
    sourceCodeUrl: 'https://github.com/arslanah99/ChattyApp'
  },
  {
    title: 'Tweeter',
    img: 'https://github.com/arslanah99/tweeter/blob/master/docs/tweet-boxs.png?raw=true',
    description: 'Tweeter is a simple, single-page Twitter clone.',
    categories: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'MongoDB'],
    sourceCodeUrl: 'https://github.com/arslanah99/tweeter'
  },
  {
    title: 'TinyApp',
    img: 'https://github.com/arslanah99/TinyApp/blob/master/docs/Screenshot%20from%202019-02-17%2018-29-40.png?raw=true',
    description: 'A URL-shortner application with a fully functioning user interface built with Node and Express',
    categories: ['CSS', 'JavaScript', 'Express', 'EJS', 'bcrypt'],
    sourceCodeUrl: 'https://github.com/arslanah99/TinyApp'
  }
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
const missingProjectIcon = './assets/no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
