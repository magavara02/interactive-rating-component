var rating = 0;
const r1 = document.querySelector(".r1");
const r2 = document.querySelector(".r2");
const r3 = document.querySelector(".r3");
const r4 = document.querySelector(".r4");
const r5 = document.querySelector(".r5");

function rate(userRating){
    document.querySelector(".rating_submit").style.cursor = "pointer";
    rating = userRating + 1;
    document.querySelector(`.r${userRating + 1}`).classList.add("rating_active");
    for(var i = 0; i < 5; i++){
        if(i != userRating){
            document.querySelector(`.r${i + 1}`).classList.remove("rating_active");
        }
    }
}

document.querySelector(".rating_form").addEventListener("submit", function(e){
    e.preventDefault();
    if(rating !=0){
        document.querySelector(".feedback-stage").style.display = "none";
        document.querySelector(".rating_selection").innerText = "You selected " + rating + " out of 5";
        document.querySelector(".thankyou_stage").style.display = "flex";
    }
})