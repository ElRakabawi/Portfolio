import webChatImg from './img/WebChat.jpg'
import jetSwapImg from './img/Jetswap.png'
import Invictus from './img/Invictus.png'
import Soulthread from './img/Soulthread.png'
import Volta from './img/Volta.png'
import Station0x from './img/Station0x.png'
import FCLauncher from './img/FC-Launcher.png'
import MaisonPyramide from './img/MaisonPyramide.jpg'
import Metacash from './img/Metacash.png'
import Encounter from './img/Encounter.png'


const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/elrakabawi',
  title: 'Web3, forever.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  firstName: 'Muhammmed',
  lastName: 'ElRakabawi',
  role: 'Web3 Front End Engineer',
  description:
    <span>I am a Web3 Front End Engineer with a passion for building beautiful, performant, and accessible web applications. I have a strong background in React, TypeScript, and Solidity. <br /><br /> I am also a strong believer in the power of open source and the community that surrounds it.</span>,
  resume: 'https://elrakabawi.github.io/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/elrakabawi',
    github: 'https://github.com/elrakabawi',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Vue Serverless Chat app',
    description:
      'A VueJS/Vuex built with scaledrone, to provide serverless end-to-end chat service with image support.',
    stack: ['Vue', 'Vuex', 'CSS3'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: webChatImg,
    color: '#8768c5'
  },
  {
    name: 'JetSwap',
    description:
      'Jetswap is a decentralized exchange built on the Binance Smart Chain. It is a fork of PancakeSwap, the most popular DEX on the Binance Smart Chain.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: jetSwapImg,
    color: '#ffcb3e'
  },
  {
    name: 'Soulthread',
    description:
      'Soulthread is a Proof-of-Ownership Gatekeeping Bot for Discord. SoulThread connects identity and ownership of Crypto based holdings',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://soulthread.xyz',
    image: Soulthread,
    color: '#40ffcd'
  },
  {
    name: 'Volta Finance',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'TypeScript', 'TailwindCSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: Volta,
    color: '#60c0f4'
  },
  {
    name: 'Station0x',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Vue', 'EthersJs', 'Solidity', 'Vercel'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: Station0x,
    color: '#46f4b3'
  },
  {
    name: 'FC Launcher',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Tauri/Rust', 'Vue/Vuex', 'NodeJs', 'Express'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: FCLauncher,
    color: '#47f1b0'
  },
  {
    name: 'Maison Pyramide',
    description:
      'Maisone Pyramide is a prestegious Fashion House based in Paris, France. I built their website & E-Showroom using React.',
    stack: ['React', 'TypeScript', 'Redux'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: MaisonPyramide,
    color: '#f0c338'
  },
  {
    name: 'Invictus Lords',
    description:
      'I built Invictus Lords from the ground up using Vue & Tailwind, I also authored, tested and deployed the smart contracts.',
    stack: ['Vue', 'EthersJs', 'MongoDB', 'Vercel'],
    sourceCode: 'https://invictuslords.com',
    livePreview: 'https://github.com',
    image: Invictus,
    color: '#ff3e40'
  },
  {
    name: 'Metacash',
    description:
      'MetaCash is a gasless wallet built on the Ethereum Network that allows users to send and receive crypto without paying gas fees.',
    stack: ['Vue/Vuex', 'Cordova', 'MaterialUI'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: Metacash,
    color: '#5543be'
  },
  {
    name: 'Encounter',
    description:
      'MetaCash is a gasless wallet built on the Ethereum Network that allows users to send and receive crypto without paying gas fees.',
    stack: ['Vue/Vuex', 'Cordova', 'MaterialUI'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: Encounter,
    color: '#f1ac47'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
  {'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},
  {'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
  {'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
  {'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
  {'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'},
  {'SASS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'},
  {'Material UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'},
  {'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
  {'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
  {'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'},
  {'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'},
  {'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'},
  {'Solidity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg'},
  {'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'},
  {'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'},
  {'Unreal Engine': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg'},
  {'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'},
  {'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
  {'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'},
  { 'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { 'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { 'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
  { 'Babel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg' },
  { 'Nuxt.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { 'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com'
}

export { header, about, projects, skills, contact }
