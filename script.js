/* ==========================================================
   SILATURRAHMI & NYUCI MORI
   PSHT SUB BUDENGAN
========================================================== */

/* ===============================
   AUDIO
================================ */

const audio = new Audio("asset/lagu.MP3");

audio.loop = true;
audio.volume = 0.5;
audio.preload = "auto";

function startAudio() {
    audio.play().catch(() => {
        document.body.addEventListener("click", function onFirstInteraction() {
            audio.play().catch(() => {});
        }, { once: true });
    });
}

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loading").style.display = "none";

        },800);

    },1500);

    startAudio();

});


/* ===============================
   NAMA TAMU DARI URL
================================ */

const params = new URLSearchParams(window.location.search);

const nama = params.get("to");

if(nama){

    document.getElementById("guest").innerHTML =
    decodeURIComponent(nama.replace(/\+/g," "));

}


/* ===============================
   TOMBOL BUKA UNDANGAN
================================ */

const btn = document.getElementById("openInvitation");

btn.addEventListener("click",()=>{

    audio.play().catch(()=>{});

    document.getElementById("countdown")
    .scrollIntoView({
        behavior:"smooth"
    });

});


/* ===============================
   COUNTDOWN
================================ */

const target =
new Date("2026-07-05T19:00:00").getTime();

function countdown(){

    const now = new Date().getTime();

    const distance = target - now;

    if(distance <= 0){

        document.getElementById("timer").innerHTML =
        "<h2>Acara Sedang Berlangsung</h2>";

        return;

    }

    const hari =
    Math.floor(distance/(1000*60*60*24));

    const jam =
    Math.floor(
    (distance%(1000*60*60*24))
    /(1000*60*60));

    const menit =
    Math.floor(
    (distance%(1000*60*60))
    /(1000*60));

    const detik =
    Math.floor(
    (distance%(1000*60))
    /1000);

    document.getElementById("timer").innerHTML =

`
<div>

<strong>${hari}</strong>

Hari

</div>

<div>

<strong>${jam}</strong>

Jam

</div>

<div>

<strong>${menit}</strong>

Menit

</div>

<div>

<strong>${detik}</strong>

Detik

</div>

`;

}

setInterval(countdown,1000);

countdown();


/* ===============================
   PARALLAX
================================ */

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    document.querySelector(".background-layer")
    .style.transform =
    `translateY(${y*0.18}px)`;

    document.querySelector(".middle-layer")
    .style.transform =
    `translateY(${y*0.10}px)`;

    document.querySelector(".front-layer")
    .style.transform =
    `translateY(${y*0.04}px)`;

});


/* ===============================
   REVEAL ANIMATION
================================ */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document
.querySelectorAll(".section")
.forEach(section=>{

observer.observe(section);

});


/* ===============================
   GLOW BUTTON
================================ */

setInterval(()=>{

btn.classList.toggle("pulse");

},1000);


/* ===============================
   SMOOTH NAVIGATION
================================ */

document
.querySelectorAll("nav a")
.forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

target.scrollIntoView({

behavior:"smooth"

});

});

});


/* ===============================
   EFFECT TITLE
================================ */

const title =
document.querySelector(".hero-content h1");

setInterval(()=>{

title.style.textShadow =
`
0 0 10px gold,
0 0 25px #d4af37,
0 0 40px gold
`;

setTimeout(()=>{

title.style.textShadow =
`
0 0 5px #d4af37
`;

},600);

},2500);


/* ===============================
   FLOATING LOTUS
================================ */

let lotus =
document.querySelector(".front-layer img");

let angle = 0;

setInterval(()=>{

angle += 0.03;

lotus.style.transform =
`
translateY(${Math.sin(angle)*10}px)
rotate(${Math.sin(angle)*2}deg)
`;

},20);
