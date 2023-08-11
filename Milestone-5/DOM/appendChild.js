// How to create html element manually.
const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');

const heading = document.createElement('h1');
heading.innerText = 'Css Properties'
section.appendChild(heading)

const ul = document.createElement('ul');
section.appendChild(ul)

const li1 = document.createElement('li');
li1.innerText = 'Background Color'
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText = 'Text Align';
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = 'Text Decoration';
ul.appendChild(li3)


mainContainer.appendChild(section)
console.log(section)

// How to create html element directly with innerHTML
const languageSection = document.createElement('section');
languageSection.innerHTML = `
    <h1>My Favorite Language</h1>
    <ul>
        <li>Javascript</li>
        <li>Python</li>
        <li>Php</li>
        <li>Java</li>
    </ul>
`
mainContainer.appendChild(languageSection);
console.log(languageSection)

const gamesSection = document.createElement('section');
gamesSection.innerHTML = `
    <h1>My Favorite Games</h1>
    <ul>
        <li>Cricket</li>
        <li>Football</li>
        <li>Hockey</li>
        <li>Long Jump</li>
    </ul>
`
mainContainer.appendChild(gamesSection);
