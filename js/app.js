const textDisplay = document.getElementById('text')
const phrases = ["I'm a Web Developer.", "I'm an ML Enthusiast..", "I'm a Computer Nerd..."]

let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

var gl = document.getElementById("glitch");
var over = false;

function normal() {
    gl.style.opacity = "0"; 
  }

function glitch() {
    if (over == false) {
    gl.style.opacity = "1";
    setTimeout(function() {
    normal();
    }, 1500);
    }
  }

function loop () {
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (300 -200) + 200
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}


loop()


const disp = document.getElementById('hello')

const phrase = ['printf("Hello, World!");', "console.log('Hello World');", 'print("Hello, World!")', 'std::cout<<"Hello, World!";', 'System.out.println("Hello, World!");']
let i1 = 0
let j1 = 0 
let currentPhrase1 = []
let isDeleting1 = false
let isEnd1 = false

function loop1 () {
  isEnd1 = false
  disp.innerHTML = currentPhrase1.join('')

  if (i1 < phrase.length) {

    if (!isDeleting1 && j1 <= phrase[i1].length) {
      currentPhrase1.push(phrase[i1][j1])
      j1++
      disp.innerHTML = currentPhrase1.join('')
    }

    if(isDeleting1 && j1 <= phrase[i1].length) {
  
      currentPhrase1.pop(phrase[i1][j1])
      j1--
      disp.innerHTML = currentPhrase1.join('')
    }

    if (j1 == phrase[i1].length) {
      isEnd1 = true
      isDeleting1 = true
    }

    if (isDeleting1 && j1 === 0) {
      currentPhrase1 = []
      isDeleting1 = false
      i1++
      if (i1 === phrase.length) {
        i1 = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -50) + 50
  const normalSpeed = Math.random() * (250 -200) + 200
  const time = isEnd1 ? 2000 : isDeleting1 ? spedUp : normalSpeed
  setTimeout(loop1, time)
}


loop1()


