// Model
let html = "";
let count_food = 0;

//Amy Var
let happytime = 0;

// Yaniss Var
const output = document.getElementById('howCleanBar') ;
let isMartinClean = true;
let timer;
let seconds = 0;
let minute = 0;
let cleanliness = 100;

//  Controller

//@krigjo25
function foodOMeter(count_food)
{
    // Fetch the elements id.
    let id = document.getElementById('food-o-meeter');
    console.log(id, count_food)
    //  Ensure the display is 100%¨

    if (count_food == 4)
    {
    //  Print out 4 bars
    html = /*HTML*/`
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>
    <div class="segment"></div>`;
    }
    //  Ensure the display is 75%¨
    else if (count_food == 3)
        {
        //  Print out 4 bars
        html = /*HTML*/`
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>`;
        }
    
    //  Ensure the display is 50%¨
    else if (count_food == 2)
        {
        //  Print out 2 bars
        html = /*HTML*/`
        <div class="segment"></div>
        <div class="segment"></div>`;
    }

    //  Ensure the display is 25%
    else if (count_food == 1)
        {
        //  Print out 1 bars
        html = /*HTML*/`<div class="segment"></div>`;
        
        }
    else if (count_food > 4 || count_food < 1){

    }0
    id.innerHTML = html; 
    return;
}

function refill_food_o_meeter()
{
    return foodOMeter(food_count++);

}
// Amy
function playtime(happytime){
    
    if(happytime == 4) {
        document.getElementById('mood-progress').innerHTML = /*Html*/`
        
        `
        

       setTimeout(sadtime(),15000)
    } else if (happytime == 3){
    
        setTimeout(sadtime(),15000)
    } else if(happytime == 2){
        
        setTimeout(sadtime(),15000)
    } else if(happytime == 1){

    }
    
    
}

function sadtime(){
    happytime -= 1
}
function play(){
    if(happytime == 4){
    } else{
   happytime += 1}
}







//Yaniss
cleanTimer()
function cleanTimer() {
      let timer =  setInterval(function() {
            seconds++;
            if(seconds == 10){
                minute++;
                seconds = 0;
            }
            if(minute === 1){
                minute = 0;
                deCleanMartin();
                clearInterval(timer) 
            }  
        }, 1000);
    }       



function deCleanMartin() {
    cleanTimer()
    isMartinClean = false;
    cleanliness -= 10;
    output.innerHTML = cleanliness + "%"

    if (cleanliness <= 50){
        changeImage("dirty")
    }
    
}

function cleanMartin(){
    cleanliness += 5;
    
    if(cleanliness => 50){
        changeImage("clean")
    }
    
    if(cleanliness >= 100){
        cleanliness = 100;
    }
    output.innerHTML = cleanliness + "%"
}

//function limitCleanliness(){
//    limitCleanliness();
//}






function changeImage(state) {
    var imageElement = document.getElementById('animal-image');
    if (state === 'clean') {
        imageElement.src = "https://cdn.discordapp.com/attachments/1268499932604796972/1277551598268059699/koala.png?ex=66cd9424&is=66cc42a4&hm=9d95ecf18731ae52bcd5afd73ffbf0ed09e965d9c167d4522b279f20cecbe736&";
    } else if (state === 'sad') {
        imageElement.src = "https://cdn.discordapp.com/attachments/1268499932604796972/1277552562907906058/koala_sad.png?ex=66cd950a&is=66cc438a&hm=a68312392996198a176aa1d3e11d6e79c72088c9f04b523ebe030f849e815d6f&";
    } else if (state === 'dirty') {
        imageElement.src = "https://cdn.discordapp.com/attachments/1268499932604796972/1277553091897589841/koala_dirty.png?ex=66cd9588&is=66cc4408&hm=5fd2fd2eed884d419690aca9108f8740568a3618444900e9a66ac6926b42bfff&";
    }
}