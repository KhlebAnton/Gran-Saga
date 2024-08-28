/*document.body.style.height = window.innerHeight + 'px';

window.addEventListener('resize', function() {
    document.body.style.height = window.innerHeight + 'px';
});*/
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
    sendMessageToApp("startLoad")
    /*let count = 10;
    setInterval(()=> {
        if(count < 100) {
            setProgress(count);
        count = count + 7;
        } else {
            setProgress(100);
            hidePreloader();
            showInstr()
        }
        
    },100)*/
}

///instructions
const screenInstr = document.querySelector('.instructions');
function showInstr() {
    screenInstr.classList.remove('hidden');
}
function hideInstr() {
    screenInstr.classList.add('hidden')
}
/*function restartInst() {
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
});*/


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
    setTimeout(function(){
        screenRegistBlock.classList.remove('hidden');
        onSoundPopup();
    },2000)
}
function hideRegistBlock() {
    screenRegistBlock.classList.add('hidden')
}

function sendMessageToApp(msg){
    window.parent.postMessage(msg, "*");
}
window.addEventListener('message', (msg) => {
    msg = msg.data;
    console.log("receiveMessage " + msg)
    if (msg.includes("onContentLoading")) {
        //$(".btn_start_game.animated").addClass("go")
        let progress = Math.round((msg.split(" ")[1]));
        console.log("onContentLoading " + progress)
        setProgress(progress)
        //showLoadingProgress(progress)
        //percentElement.innerText = progress + '%';
    }
    if (msg.includes("PhotoDone")) {
        console.log("PhotoDone")
        let data = msg.split("PhotoDone ")[1];
        showScreenShot()
        $(".screenshot-img").css("background-image", "url("+data+")");
    }

    if (msg.includes("showWelcome")) {
        showScreenWelc();
        hidePreloader();
    }
    if (msg.includes("showLoading")) {
        console.log("showPreloader")
        showPreloader()
    }
    if (msg.includes("hideLoading")) {
        console.log("hidePreloader")
        hidePreloader()
    }
    if (msg.includes("showInstr")) {
        console.log("showInstr")
        showInstr()
    }
    if (msg.includes("hideInstr")) {
        console.log("hideInstr")
        hideInstr()
    }
    if (msg.includes("showInstructionScan")) {
        console.log("showInstructionScan")
        showInstruction("Scan")
    }
    if (msg.includes("showInstructionMove")) {
        console.log("showInstructionMove")
        showInstruction("Move")
    }
    if (msg.includes("showInstructionTap")) {
        console.log("showInstructionTap")
        showInstruction("Tap")
    }
    if (msg.includes("showInstructionRotate")) {
        console.log("showInstructionRotate2")
        showInstruction("Rotate")
    }
    if (msg.includes("showGame")) {
        showGame()
    }
    if (msg.includes("showError ")) {
        showError(msg.split("showError ")[1])
    }
})
function showInstruction(type){
    $(".instruction-item").addClass("hidden")
    setTimeout(function(){
        $("#instruction_"+type).removeClass("hidden")
    },500)
}

///
let userAgent = navigator.userAgent || navigator.vendor || window.opera;
function getOS(){
    if(isIOS()) {
        console.log("IOS platform");
        return "IOS";
    }
    if(this.isAndroid()) {
        console.log("Android platform");
        return "Android"
    }
    if(isIOS() == false && isAndroid() == false){
        console.log("unknown platform error");
        return "Desktop";
    }
}
function isIOS() {
    if (/iPad|iPhone|iPod/.test(navigator.platform)) {
        return true;
    } else {
        return navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2 &&
            /MacIntel/.test(navigator.platform);
    }
}
function isAndroid(){
    return /android/i.test(userAgent)
}

/*document.body.addEventListener("click", printMousePos);
function printMousePos(event) {
    console.log(123)
    sendMessageToApp('screenClick ' + event.clientX + ' ' + event.clientY);
}*/

function Respawn(){
    showInstr();
    hideGame();
    setTimeout(function(){
        sendMessageToApp('respawn')
    },100)
}

//sound
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const soundShot = document.getElementById('audio_shot');
const soundBtn = document.getElementById('audio_btn');
const soundPopup = document.getElementById('audio_popup');
const soundBack = document.getElementById('audio_back');

function onSoundBtn() {
    soundBtn.play(); 
};
function onSoundShot() {
    soundShot.play();
};
function onSoundPopup() {
    soundPopup.play();
}

function onSoundBack() {
    soundBack.play();
};

//lottie 
const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-buy'), // контейнер для анимации
    renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
    loop: true, // зацикливание анимации
    autoplay: true, // автоматический запуск анимации
    path: './img/UI/buy.json' // путь к вашему JSON-файлу с анимацией
  });

  const animationFlick = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-flick'), // контейнер для анимации
    renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
    loop: true, // зацикливание анимации
    autoplay: true, // автоматический запуск анимации
    path: './img/UI/flick.json' // путь к вашему JSON-файлу с анимацией
  });

  const animationPinch = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-pinch'), // контейнер для анимации
    renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
    loop: true, // зацикливание анимации
    autoplay: true, // автоматический запуск анимации
    path: './img/UI/pinch.json' // путь к вашему JSON-файлу с анимацией
  });

  const replaceIcons = document.querySelectorAll('.icon-replace');
  setInterval(()=> {
    replaceIcons.forEach((icon)=> {
        if(icon.classList.contains('hidden')) {
            icon.classList.remove('hidden')
        } else {
            icon.classList.add('hidden')
        }
    })
  },1700);

  
  