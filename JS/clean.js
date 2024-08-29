// Yaniss

//-----------Variables-------------
const barOutput = document.getElementById("clean-progress");
const output = document.getElementById("howCleanBar");
let isMartinClean = true;
let seconds = 0;
let minutes = 0;
let cleanliness = 100;

//-----------Functions--------------

cleanTimer();

function cleanTimer() {
    let timer = setInterval(function () {
        seconds++;
        if (seconds == 1) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 3) {
            minutes = 0;
            deCleanMartin();
            clearInterval(timer);
        }
    }, 1000);

    gameOver();

    output.innerHTML = cleanliness + "%";
    barOutput.style.width = cleanliness + "%";
}

function deCleanMartin() {
    cleanTimer();
    isMartinClean = false;
    cleanliness -= 5;

    if (cleanliness <= 35) {
        changeImage("dirty");
    }
    output.innerHTML = cleanliness + "%";
    barOutput.style.width = cleanliness + "%";
}

function cleanMartin() {
    cleanliness += 5;

    if (cleanliness >= 50) {
        changeImage("clean");
    }

    limitCleanliness();
    output.innerHTML = cleanliness + "%";
    barOutput.style.width = cleanliness + "%";
}

function limitCleanliness() {
    if (cleanliness >= 100) {
        cleanliness = 100;
    }
}

function gameOver() {
    if (cleanliness <= 0) {
        document.getElementById("testingSomething").innerHTML = /*HTML*/ `

        
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background-color: #f9f9f9; font-family: Arial, sans-serif; line-height: 1.6;">
    <h1 style="text-align: center; color: #333;">Dear Player1,</h1>

    <p>
        I hope this letter finds you well. It's been quite a journey since I decided to leave and explore the world beyond our cozy home.
    </p>

    <p>
        I wanted to take a moment to explain my departure and share the adventures I've had over the past few years. As you know, I loved our time together, but I felt a yearning for something more. The world outside was calling me, and I wanted to discover what lay beyond the trees.
    </p>

    <p>
        So, I made the difficult decision to venture out on my own.
    </p>

    <p>
        In the beginning, I wandered through lush forests and sprawling fields, soaking up the beauty of nature. I met incredible creatures along the way—some became friends, while others were just fleeting encounters. I learned to climb higher and reach further, both literally and metaphorically. After some time, I found myself in the bustling city, where my interest in finance bloomed.
    </p>

    <p>
        I discovered the world of stock trading and quickly became fascinated by the dynamics of the market. With determination, I taught myself the ins and outs of investing, and before I knew it, I was working as a <strong>stockholder.</strong>
    </p>

    <p>
        It was exhilarating to navigate the highs and lows, always striving for that next big opportunity. The experiences I’ve had have shaped who I am today. I’ve traveled to places I never imagined, tasted foods that delighted my senses, and met people who inspired me. Each moment has added to my understanding of the world, and I cherish the lessons learned along the way.
    </p>

    <p>
        While I’ve enjoyed my adventures, I often think of you and the time we shared. I hope you’re finding joy and fulfillment in your own journey, just as I have in mine. Take care of yourself, and know that I carry fond memories of our time together.
    </p>

    <p style="text-align: right;">
        Warmest wishes,
    </p>
    <h4 style="text-align: right; color: #555;">Martin the Koala</h4>
</div>

        </div>
    `;
    }
}
