const correctPassword = "mv2106";

const passwordPage = document.getElementById("passwordPage");
const mainPage = document.getElementById("mainPage");
const error = document.getElementById("error");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const typing = document.getElementById("typing");

let musicPlaying = false;

// Music Button

musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();
        musicBtn.innerHTML = "🎵";

    } else {

        music.play();
        musicBtn.innerHTML = "🔊";

    }

    musicPlaying = !musicPlaying;

});

// Password

function checkPassword() {

    const pass = document.getElementById("password").value;

    if (pass === correctPassword) {

        passwordPage.style.display = "none";
        mainPage.style.display = "flex";

        if (!musicPlaying) {
            music.play();
            musicBtn.innerHTML = "🔊";
            musicPlaying = true;
        }

        startTyping();

    } else {

        error.innerHTML = "❌ Wrong Password";

    }

}

// Enter key support

document.getElementById("password").addEventListener("keypress", function(e){

    if(e.key==="Enter"){
        checkPassword();
    }

});

// Typewriter Message

const message = `Sorry Anvi ❤️

Mujhe pata hai maine tujhse bahut bekar tarike se baat ki.

Mujhe aise baat bilkul nahi karni chahiye thi.

Aur mujhe ulte jawab bhi nahi dene chahiye the.

Shayadmaine aur bhi bahut kuch bol diya jo mujhe nahi bolna chahiye tha.

Uske liye main dil/dimaag se sorry bolta hoon.

Tu meri bahut achhi dost hai.

Main nahi chahta ki meri wajah se hamari dosti kharab ho.

Please mujhe maaf kar dena.

Aur haan... ❤️

Ye poori website maine sirf tere liye banayi hai.

Ek simple "Sorry" mujhe kaafi nahi laga.

Agar tu bole to main is website ko public bhi kar dunga.

Aur agar tu na chahe...

To ye website hamesha sirf tere liye hi rahegi.

Take Care 😊❤️

— Moksha`;

let i = 0;

function startTyping() {

    typing.innerHTML = "";

    function type() {

        if (i < message.length) {

            typing.innerHTML += message.charAt(i);

            i++;

            setTimeout(type, 30);

        }

    }

    type();

}
// Floating Hearts

const hearts=document.getElementById("hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.opacity=.8;

heart.style.pointerEvents="none";

heart.style.transition="6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-110vh) rotate(360deg)";
heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6500);

},500);