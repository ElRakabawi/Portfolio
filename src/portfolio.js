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
import You from './img/You.png'

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
    <span>I am a Web3 Front End Engineer with a passion for building beautiful, performant, and accessible web applications. I have a strong background in React/Vue, TypeScript, and Solidity. <br /><br /> I am also a strong believer in the power of open source and the community that surrounds it.</span>,
  resume: 'https://elrakabawi.eth.limo/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/elrakabawi',
    github: 'https://github.com/elrakabawi',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Volta Finance',
    description:
      'Volta Finance is a decentralized lending protocol built on Arbitrum One using React, Typescript and Tailwind.',
    stack: ['React', 'TypeScript', 'TailwindCSS'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://volta-finance.vercel.app/',
    image: Volta,
    color: '#60c0f4'
  },
  {
    name: 'Invictus Lords',
    description:
      'I built Invictus Lords from the ground up using Vue & Tailwind, I also authored, tested and deployed the smart contracts.',
    stack: ['Vue', 'EthersJs', 'MongoDB', 'Vercel'],
    sourceCode: 'https://github.com/station0x/invictus-lords',
    livePreview: 'https://invictuslords.com',
    image: Invictus,
    color: '#ff3e40'
  },
  {
    name: 'Encounter',
    description:
      'Encounter is a decentralized 1v1 space-themed board strategy game similiar to chess built with Vue, MongoDB and Vercel.',
    stack: ['Vue/Vuex', 'Solidity', 'MongoDB', 'Vercel'],
    sourceCode: 'https://github.com/station0x/encounter',
    livePreview: 'https://encounter.station0x.com',
    image: Encounter,
    color: '#f1ac47'
  },
  {
    name: 'Vue Serverless Chat app',
    description:
      'A VueJS/Vuex built with scaledrone, to provide serverless end-to-end chat service with image support.',
    stack: ['Vue', 'Vuex', 'CSS3'],
    sourceCode: 'https://github.com/ElRakabawi/chat-app',
    livePreview: 'https://elrakabawi.github.io/chatapp/',
    image: webChatImg,
    color: '#8768c5'
  },
  {
    name: 'JetSwap',
    description:
      'Jetswap is a decentralized exchange built on the Binance Smart Chain. It is a fork of PancakeSwap, the most popular DEX on the Binance Smart Chain.',
    stack: ['React', 'TypeScript', 'Solidity', 'TheGraph'],
    livePreview: 'https://jetswap.finance/',
    image: jetSwapImg,
    color: '#ffcb3e'
  },
  {
    name: 'Soulthread',
    description:
      'Soulthread is a Proof-of-Ownership Gatekeeping Bot for Discord. SoulThread connects identity and ownership of Crypto based holdings',
    stack: ['Vue', 'MongoDB', 'Vercel'],
    sourceCode: 'https://github.com/station0x/Soulthread-backend',
    livePreview: 'https://soulthread.xyz',
    image: Soulthread,
    color: '#40ffcd'
  },
  {
    name: 'Station0x',
    description:
      'I Co-founded Station Zero X, a Web3 development studio. We build Web3 games using Unreal, Docker & K8s, React/Vue, Solidity, and EthersJs.',
    stack: ['Unreal Engine', 'Docker', 'Solidity', 'Rust', 'K8s'],
    livePreview: 'https://station0x.com',
    sourceCode: 'https://github.com/station0x',
    image: Station0x,
    color: '#46f4b3'
  },
  {
    name: 'FC Launcher',
    description:
      'FinalCypher launcher is a cross platform desktop application built using Tauri, Vue & Express.',
    stack: ['Tauri/Rust', 'Vue/Vuex', 'Firebase', 'Express'],
    sourceCode: 'https://github.com/station0x/FinalCypher-Launcher',
    image: FCLauncher,
    color: '#47f1b0'
  },
  {
    name: 'Maison Pyramide',
    description:
      'Maisone Pyramide is a prestegious Fashion House based in Paris, France. I built their website & E-Showroom using React.',
    stack: ['React', 'TypeScript', 'Redux'],
    livePreview: 'https://maisonpyramide.com',
    image: MaisonPyramide,
    color: '#f0c338'
  },

  {
    name: 'Metacash',
    description:
      'MetaCash is a gasless wallet built on the Ethereum Network that allows users to send and receive crypto without paying gas fees.',
    stack: ['Vue/Vuex', 'Cordova', 'MaterialUI'],
    livePreview: 'https://medium.com/lamarkaz/dai-in-the-hands-of-all-8ed335879ae9',
    image: Metacash,
    color: '#5543be'
  },

  {
    name: 'You',
    description:
      'A new journey.',
    stack: ['React?', 'Tailwind?', 'Something Else?'],
    image: You,
    color: 'black'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  { 'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
  { 'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
  { 'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
  { 'Solidity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg'},
  { 'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
  { 'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
  { 'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},
  { 'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { 'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'},
  { 'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'},
  { 'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'},
  { 'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'},
  { 'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'},
  { 'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
  { 'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'},
  { 'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
  { 'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { 'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'},
  { 'Nuxt.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { 'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { 'Material UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'},
  { 'Unreal Engine': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg'},
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mselrakabawi@gmail.com'
}

export { header, about, projects, skills, contact }
