function checkAnswer(){

    let ans = document.getElementById("answer").value.toLowerCase();

    if(ans === "kiss" || ans === "kiss snap"){
        window.location.href = "story.html";
    }
    else{
        document.getElementById("error").innerText =
        "That doesn't sound like my Queen 🥺 Try again ❤️";
    }
}
function openLetter(){
    window.location.href = "proposal.html";
}

function moveNo(){

    let btn = document.getElementById("noBtn");

    btn.style.position="absolute";
    btn.style.top = Math.random()*80+"%";
    btn.style.left = Math.random()*80+"%";
}
function yesClicked(){

    // Hide YES & NO buttons
    document.querySelector(".buttons").style.display = "none";

    // Show celebration section
    document.getElementById("celebration").style.display = "block";

    // Start fireworks
    launchFireworks();
}


/* Fireworks generator */
function launchFireworks(){

    let container = document.getElementById("fireworks");

    setInterval(()=>{

        let fire = document.createElement("div");
        fire.className = "firework";

        fire.style.top = Math.random()*100 + "%";
        fire.style.left = Math.random()*100 + "%";

        container.appendChild(fire);

        setTimeout(()=>{
            fire.remove();
        },1000);

    },200);
}


function startExperience(){

    if(music){
        music.volume = 0.6;
        music.currentTime = 0;

        let playPromise = music.play();

        if(playPromise !== undefined){
            playPromise
            .then(() => {
                console.log("Music started");
            })
            .catch(error => {
                console.log("Music blocked until interaction");
            });
        }
    }

    switchScene("envelopeScene");
}


