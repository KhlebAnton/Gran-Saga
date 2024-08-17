//screen-welcome
const screenWelc = document.querySelector('.screen-welcome');
function showScreenWelc() {
    screenWelc.classList.remove('hidden');
}
function hideScreenWelc() {
    screenWelc.classList.add('hidden');
}

///game
const scrGame = document.querySelector('.screen-game');
function showGame() {
    scrGame.classList.remove('hidden');
}
function hideGame() {
    scrGame.classList.add('hidden');
}

//screen-preloader
const preloader = document.querySelector('.screen-preloader');
function showPreloader() {
    preloader.classList.remove('hidden');
}
function hidePreloader() {
    preloader.classList.add('hidden');
}

///progress bar 
const loaderPrecent = document.getElementById('loader-precent');
const loaderBar = document.querySelector('.loader-bar-progress');

function setProgress(progress) {
    loaderPrecent.textContent = progress;
    loaderBar.style.width = `${progress}%`;
}

function startLoad() {
    let count = 10;
    setInterval(()=> {
        if(count < 100) {
            setProgress(count);
        count = count + 7;
        } else {
            setProgress(100);
            hidePreloader();
            showInstr()
        }
        
    },100)
}

///instructions
const screenInstr = document.querySelector('.instructions');
function showInstr() {
    screenInstr.classList.remove('hidden');
}
function hideInstr() {
    screenInstr.classList.add('hidden')
}
function restartInst() {
 instItems[0].classList.remove('hidden')
}
const instItems = document.querySelectorAll('.instruction-item');
instItems.forEach((instr) => {
    instr.addEventListener('click' , ()=> {
        instr.classList.add('hidden');
        if(instr.nextElementSibling) {
            instr.nextElementSibling.classList.remove('hidden')
        } else {
            hideInstr();
            showGame();
        }
    })
});


///skin-item 
const skinItems = document.querySelectorAll('.skin-item');
skinItems.forEach((skin) => {
 skin.addEventListener('click', () => {
    skinItems.forEach((skin => skin.classList.remove('select')));
    skin.classList.add('select')
 })
})

///screenshot-container
const screenShotScreen = document.querySelector('.screenshot-container');
function showScreenShot() {
    screenShotScreen.classList.remove('hidden');
    showShotBlock();
    hideRegistBlock();
}
function hideScreenShot() {
    screenShotScreen.classList.add('hidden');
}

const screenshotBlock = document.querySelector('.screenshot-block');
function showShotBlock() {
    screenshotBlock.classList.remove('hidden')
}
function hideShotBlock() {
    screenshotBlock.classList.add('hidden')
}

const screenRegistBlock = document.querySelector('.registrtion-block');
function showRegistBlock() {
    screenRegistBlock.classList.remove('hidden')
}
function hideRegistBlock() {
    screenRegistBlock.classList.add('hidden')
}