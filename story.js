const letter = `We met in the most unexpected yet beautiful way… in a gym, between workouts, laughter, and those playful moments that slowly turned into something so special. What started as simple conversations and masti became memories that I will carry in my heart forever.

One of my favourite memories will always be my birthday… celebrating it with you, going to Shiv Mandir together, standing beside you, feeling closer to you than ever before. That day didn’t just become a memory… it became a feeling that still lives inside me.

I miss those peaceful days when we were alone at home, holding each other, cuddling, forgetting the world existed outside us. Those were the moments where time felt slower, softer, and perfect… just because you were there with me.

Celebrating Navratri with you, playing garba together, laughing, enjoying every beat and every step with you beside me… those nights were filled with happiness I never knew I needed.

But one moment that will always stay deepest in my heart is the day you cried in my arms before leaving to study abroad. That moment showed me how strong our bond really is. Holding you that day… I wished time would just stop.

I miss every kiss we shared… every hug that made everything feel okay… but the last hug and the last kiss you gave me… those live in my heart every single day.

No matter the distance, no matter the time zones, no matter how far you are… my heart still finds its way to you.

Because I love you… more than words, more than distance, more than anything.`;


let i = 0;
let speed = 30; // typing speed (increase number = slower)

function startStory(){

    document.getElementById("tapBox").style.display = "none";
    document.getElementById("letterBox").style.display = "block";

    typeWriter();
}

function typeWriter(){

    let box = document.getElementById("storyText");

    if(i < letter.length){

        box.innerHTML += letter.charAt(i);
        i++;

        box.scrollTop = box.scrollHeight;

        setTimeout(typeWriter, speed);

    } else {

        document.getElementById("proposalBtn").style.display = "inline-block";
    }
}

function goProposal(){
    window.location.href = "proposal.html"; // your proposal page file name
}
