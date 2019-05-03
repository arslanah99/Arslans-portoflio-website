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
      url: 'https://twitter.com/username',
      text: "I'm on Twitter",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/username',
      text: "I'm on Telegram",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/username',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:email@email.co',
      text: 'Send me an email',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'Project Title #1',
    img: '',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample', 'Open source', 'React'],
    siteUrl: 'amazing.project.com',
    sourceCodeUrl: 'github.com/user/project'
  },
  {
    title: 'Project Title #2',
    img: 'https://www.nethruster.com/assets/img/icons/apple-touch-icon.png',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample', 'Freeware', 'Go'],
    siteUrl: 'amazing.project.com'
  },
  {
    title: 'Project Title #3',
    img: 'https://wareader.nethruster.com/assets/wrisot.svg',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Wat', 'Linux', 'LoL'],
    sourceCodeUrl: 'github.com/user/:O'
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
