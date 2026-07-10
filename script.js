/* =====================================
   LOVE GIFT WEBSITE - COMPLETE SCRIPT.JS
   Cinematic Birthday Proposal
   All Features Included
===================================== */


// ===============================
// 1. LOADER REMOVE
// ===============================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if(loader){
        setTimeout(()=>{
            loader.style.opacity = "0";
            setTimeout(()=>{
                loader.style.display = "none";
            }, 1000);
        }, 2000);
    }
});


// ===============================
// 2. BACKGROUND MUSIC CONTROL
// ===============================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
let musicPlaying = false;

if(musicBtn && music){
    musicBtn.addEventListener("click", () => {
        if(!musicPlaying){
            music.play();
            musicBtn.innerHTML = "🔊 Music ON";
            musicPlaying = true;
        } else {
            music.pause();
            musicBtn.innerHTML = "🎵 Music OFF";
            musicPlaying = false;
        }
    });
}


// ===============================
// 3. GIFT BOX ANIMATION
// ===============================

const gift = document.querySelector(".gift-box");
const letterSection = document.querySelector("#letter");

if(gift){
    gift.addEventListener("click", () => {
        gift.classList.add("open");
        setTimeout(() => {
            if(letterSection){
                letterSection.classList.add("show");
            }
        }, 1500);
    });
}


// ===============================
// 4. TYPEWRITER EFFECT
// ===============================

function typeWriter(element, text, speed = 70){
    let i = 0;
    element.innerHTML = "";
    
    function typing(){
        if(i < text.length){
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

const letterText = document.querySelector(".love-text");
if(letterText){
    let message = "Dear Sania ❤️\n\nYou are the most beautiful chapter of my life.\nYour smile makes my world brighter.\nThank you for being my happiness, my peace and my forever. 💖";
    typeWriter(letterText, message, 50);
}


// ===============================
// 5. FLOATING HEARTS GENERATOR
// ===============================

function createHeart(){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    heart.style.fontSize = (Math.random() * 25 + 15) + "px";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 10000);
}
setInterval(createHeart, 700);


// ===============================
// 6. FALLING ROSE PETALS
// ===============================

function createPetal(){
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = "🌹";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.body.appendChild(petal);
    setTimeout(() => {
        petal.remove();
    }, 10000);
}
setInterval(createPetal, 1200);


// ===============================
// 7. PHOTO SLIDER - APNI PHOTOS LAGAO
// ===============================

// ✅ YAHAN APNI PHOTOS LAGAO (3 tareeqe)

// OPTION 1: Local images folder se (Recommended)
const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg"
];

// OPTION 2: Online upload (ImgBB) - Comment karein aur ye use karein
// const photos = [
//     "https://i.ibb.co/your-photo1-link.jpg",
//     "https://i.ibb.co/your-photo2-link.jpg",
//     "https://i.ibb.co/your-photo3-link.jpg"
// ];

// OPTION 3: Test photos (agar local kaam na karein)
// const photos = [
//     "https://picsum.photos/400/300?random=1",
//     "https://picsum.photos/400/300?random=2",
//     "https://picsum.photos/400/300?random=3"
// ];

let photoIndex = 0;
const slider = document.querySelector(".memory-img");

if(slider){
    // Pehli photo set karein
    if(photos.length > 0){
        slider.src = photos[0];
    }
    
    // Har 3 seconds mein photo change hogi
    setInterval(() => {
        photoIndex++;
        if(photoIndex >= photos.length){
            photoIndex = 0;
        }
        slider.src = photos[photoIndex];
    }, 3000);
}


// ===============================
// 8. COUNTDOWN
// ===============================

const countdown = document.querySelector("#countdown");
let seconds = 10;

if(countdown){
    let timer = setInterval(() => {
        seconds--;
        countdown.innerHTML = "💝 Proposal in " + seconds;
        if(seconds <= 0){
            clearInterval(timer);
            countdown.innerHTML = "💍 Ready For Surprise ❤️";
            document.querySelector("#proposal")?.classList.add("show");
        }
    }, 1000);
}


// ===============================
// 9. PROPOSAL REVEAL
// ===============================

const proposalBtn = document.querySelector("#openProposal");
if(proposalBtn){
    proposalBtn.onclick = () => {
        document.querySelector("#proposal").classList.add("show");
    };
}


// ===============================
// 10. NO BUTTON ESCAPE
// ===============================

const noBtn = document.querySelector("#noBtn");
if(noBtn){
    noBtn.addEventListener("mouseover", () => {
        let x = Math.random() * 300 - 150;
        let y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px,${y}px)`;
    });
    
    // Agar click kare toh bhi escape
    noBtn.addEventListener("click", () => {
        let x = Math.random() * 400 - 200;
        let y = Math.random() * 300 - 150;
        noBtn.style.transform = `translate(${x}px,${y}px)`;
    });
}


// ===============================
// 11. YES BUTTON CELEBRATION
// ===============================

const yesBtn = document.querySelector("#yesBtn");
const ringBox = document.getElementById("ringBox");

if(yesBtn){
    yesBtn.onclick = () => {
        // Show Ring
        if(ringBox){
            ringBox.style.display = "flex";
            ringBox.style.opacity = "1";
        }
        
        // Celebrations
        createConfetti();
        heartExplosion();
        fireworks();
        
        // Show Final Message
        const finalMsg = document.querySelector("#finalMessage");
        if(finalMsg){
            finalMsg.classList.add("show");
        }
        
        // Start Fireworks Canvas
        if(typeof createFirework === 'function'){
            for(let i = 0; i < 10; i++){
                setTimeout(() => {
                    createFirework(
                        Math.random() * canvas.width,
                        Math.random() * canvas.height / 2
                    );
                }, i * 400);
            }
        }
        
        // Show Love Message
        const loveMsg = document.querySelector(".love-message");
        if(loveMsg){
            loveMsg.innerHTML = "💖 I Love You Sania! 💖";
            loveMsg.style.display = "block";
        }
    };
}


// ===============================
// 12. HEART EXPLOSION
// ===============================

function heartExplosion(){
    for(let i = 0; i < 50; i++){
        let h = document.createElement("span");
        h.innerHTML = "❤️";
        h.className = "burst-heart";
        h.style.setProperty("--x", (Math.random() * 400 - 200) + "px");
        h.style.setProperty("--y", (Math.random() * 400 - 200) + "px");
        h.style.position = "fixed";
        h.style.fontSize = (Math.random() * 30 + 20) + "px";
        h.style.left = "50%";
        h.style.top = "50%";
        h.style.pointerEvents = "none";
        h.style.zIndex = "9999";
        document.body.appendChild(h);
        setTimeout(() => {
            h.remove();
        }, 2000);
    }
}


// ===============================
// 13. CONFETTI
// ===============================

function createConfetti(){
    const colors = ["#ff0000", "#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff6bd6"];
    for(let i = 0; i < 150; i++){
        let conf = document.createElement("div");
        conf.className = "confetti";
        conf.style.left = Math.random() * 100 + "vw";
        conf.style.top = "-10px";
        conf.style.animationDuration = (Math.random() * 3 + 2) + "s";
        conf.style.animationDelay = Math.random() * 2 + "s";
        conf.style.background = colors[Math.floor(Math.random() * colors.length)];
        conf.style.width = (Math.random() * 10 + 5) + "px";
        conf.style.height = (Math.random() * 10 + 5) + "px";
        conf.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        conf.style.position = "fixed";
        conf.style.pointerEvents = "none";
        conf.style.zIndex = "9998";
        document.body.appendChild(conf);
        setTimeout(() => {
            conf.remove();
        }, 5000);
    }
}


// ===============================
// 14. FIREWORKS
// ===============================

function fireworks(){
    for(let i = 0; i < 20; i++){
        let fire = document.createElement("div");
        fire.className = "firework";
        fire.style.left = Math.random() * 100 + "vw";
        fire.style.top = Math.random() * 70 + "vh";
        fire.style.position = "fixed";
        fire.style.pointerEvents = "none";
        fire.style.zIndex = "9997";
        document.body.appendChild(fire);
        setTimeout(() => {
            fire.remove();
        }, 2000);
    }
}


// ===============================
// 15. SMOOTH SCROLL
// ===============================

document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
        let target = document.querySelector(link.getAttribute("href"));
        if(target){
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===============================
// 16. CINEMATIC ZOOM EFFECT
// ===============================

window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => {
        let position = sec.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            sec.classList.add("active");
        }
    });
});


// ===============================
// 17. CURSOR HEART TRAIL
// ===============================

let heartTimeout;
document.addEventListener("mousemove", (e) => {
    // Throttle for performance
    clearTimeout(heartTimeout);
    heartTimeout = setTimeout(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = (e.clientX - 10) + "px";
        heart.style.top = (e.clientY - 10) + "px";
        heart.style.pointerEvents = "none";
        heart.style.fontSize = "15px";
        heart.style.zIndex = "9999";
        heart.style.opacity = "0.8";
        heart.style.animation = "heartFloat 1s ease-out forwards";
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }, 50);
});


// ===============================
// 18. MAGIC FLOATING PARTICLES
// ===============================

function createParticles(){
    const container = document.querySelector(".magic-particles");
    if(container){
        for(let i = 0; i < 50; i++){
            let particle = document.createElement("span");
            particle.style.position = "absolute";
            particle.style.width = "4px";
            particle.style.height = "4px";
            particle.style.background = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
            particle.style.borderRadius = "50%";
            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";
            particle.style.animation = "floatParticle " + (5 + Math.random() * 5) + "s ease-in-out infinite";
            particle.style.animationDelay = Math.random() * 8 + "s";
            particle.style.opacity = Math.random() * 0.5 + 0.3;
            container.appendChild(particle);
        }
    }
}
createParticles();


// ===============================
// 19. CINEMATIC FIREWORKS ENGINE
// ===============================

const canvas = document.getElementById("fireworksCanvas");
if(canvas){
    const ctx = canvas.getContext("2d");
    
    function resizeCanvas(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    
    window.addEventListener("resize", resizeCanvas);
    
    let particles = [];
    let fireworksActive = false;
    
    class Particle {
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.size = Math.random() * 4 + 2;
            this.speedX = (Math.random() - 0.5) * 8;
            this.speedY = (Math.random() - 0.5) * 8;
            this.life = 100;
            this.maxLife = 100;
            this.color = `hsl(${Math.random() * 360}, 100%, 65%)`;
            this.gravity = 0.05;
        }
        
        update(){
            this.x += this.speedX;
            this.y += this.speedY;
            this.speedY += this.gravity;
            this.life -= 1;
            this.size *= 0.98;
        }
        
        draw(){
            const alpha = this.life / this.maxLife;
            ctx.beginPath();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 15;
            ctx.shadowColor = this.color;
            ctx.arc(this.x, this.y, Math.max(this.size, 0.5), 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
    
    function createFirework(x, y){
        fireworksActive = true;
        for(let i = 0; i < 120; i++){
            particles.push(new Particle(x, y));
        }
    }
    
    function animateFireworks(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, index) => {
            p.update();
            p.draw();
            if(p.life <= 0 || p.size < 0.1){
                particles.splice(index, 1);
            }
        });
        
        if(particles.length > 0 || fireworksActive){
            requestAnimationFrame(animateFireworks);
        } else {
            fireworksActive = false;
        }
    }
    
    // Expose createFirework globally
    window.createFirework = createFirework;
    
    // Start animation loop
    animateFireworks();
}


// ===============================
// 20. EXTRA MUSIC CONTROL
// ===============================

const loveMusic = document.getElementById("loveMusic");
const musicToggle = document.getElementById("musicToggle");
let musicOn = false;

if(musicToggle && loveMusic){
    musicToggle.addEventListener("click", () => {
        if(!musicOn){
            loveMusic.play().catch(e => console.log("Music play failed:", e));
            musicToggle.innerHTML = "⏸ Pause Music";
            musicOn = true;
        } else {
            loveMusic.pause();
            musicToggle.innerHTML = "🎵 Play Love Song";
            musicOn = false;
        }
    });
}


// ===============================
// 21. KEYBOARD SHORTCUTS
// ===============================

document.addEventListener("keydown", (e) => {
    // Press 'M' for music toggle
    if(e.key === 'm' || e.key === 'M'){
        if(musicBtn){
            musicBtn.click();
        }
    }
    
    // Press 'Y' for Yes button
    if(e.key === 'y' || e.key === 'Y'){
        if(yesBtn){
            yesBtn.click();
        }
    }
    
    // Press 'Space' for gift box
    if(e.key === ' '){
        e.preventDefault();
        if(gift){
            gift.click();
        }
    }
});


// ===============================
// 22. CONSOLE WELCOME MESSAGE
// ===============================

console.log("%c❤️ LOVE GIFT WEBSITE ❤️", "font-size: 30px; color: #ff1493; font-weight: bold;");
console.log("%cMade with love for Sania 💖", "font-size: 18px; color: #ff6b6b;");
console.log("%cAll features loaded successfully! 🎉", "font-size: 14px; color: #4d96ff;");


// ===============================
// 23. PERFORMANCE OPTIMIZATION
// ===============================

// Clean up intervals on page hide
document.addEventListener("visibilitychange", () => {
    if(document.hidden){
        // Pause animations if needed
    }
});


// ===============================
// 24. ERROR HANDLING FOR PHOTOS
// ===============================

if(slider){
    slider.addEventListener("error", function() {
        console.warn("Photo not found, using fallback");
        this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ffd1dc' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23ff1493' font-size='20'%3E❤️ Photo ❤️%3C/text%3E%3C/svg%3E";
    });
}


// ===============================
// 25. RING ANIMATION
// ===============================

// Add ring animation class when shown
const ringObserver = new MutationObserver(() => {
    const ring = document.getElementById("ringBox");
    if(ring && ring.style.display === "flex"){
        ring.classList.add("ring-show");
    }
});

if(ringBox){
    ringObserver.observe(ringBox, {
        attributes: true,
        attributeFilter: ["style"]
    });
}


console.log("✅ All systems ready! ❤️");
console.log("🎯 Press 'M' for music, 'Y' for Yes, 'Space' for gift");