import ebecImage from './img/Ebec.jpg'
import teslaImage from './img/TeslaCopy.png'
import clientImage from './img/clientAPI.png'
import RPSimage from './img/minigame.png'

export const ProjectsData = [
    {
        name:'Tesla Copy',
        image: teslaImage,
        reactUsage: true,
        apiUsage: false,
        jsUsage: true,
        htmlUsage: true,
        cssUsage: true,
        description: 'This project was intended to showcase skills current in the market by creating a copy of a famous website with up-to-date technology, in this case Tesla.',
        link:'https://william-789.github.io/tesla-copy/',
        code:'https://github.com/william-789/tesla-copy.git',
    },
    {
        name:'Client info Plataform',
        image: clientImage,
        reactUsage: true,
        apiUsage: true,
        jsUsage: true,
        htmlUsage: true,
        cssUsage: true,
        description: 'Focused on the technical part, this app uses Fecth API to fetch data from the api called RandomUser, which randomly generates a set of informations about a fictional person.',
        link:'https://william-789.github.io/client-info-api/',
        code:'https://github.com/william-789/client-info-api',
    },
    {
        name:'EBEC 22',
        image: ebecImage,
        reactUsage: true,
        apiUsage: false,
        jsUsage: true,
        htmlUsage: true,
        cssUsage: true,
        description: 'Website created during early 2022 to be used for advertisement and as information center for the EBEC22, before and during the event in Porto.',
        link:'https://william-789.github.io/ebec22',
        code: 'https://github.com/william-789/ebec22',
    },
    {
        name:'Rock, paper, scissors',
        image: RPSimage,
        reactUsage: true,
        apiUsage: false,
        jsUsage: true,
        htmlUsage: true,
        cssUsage: true,
        description: 'Little game created with pure JavaScript, HTML and CSS. Has yet to be improved, but already present the basic functions to keep track of win and lose states and score.',
        link:'https://william-789.github.io/rock-paper-scissors/',
        code: 'https://github.com/william-789/rock-paper-scissors.git',
    },
]