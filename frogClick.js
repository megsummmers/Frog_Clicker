var clickNum = 0;
var imgNum = 0;

function changeBG(){
    clickNum++;
    // frog bounce
    var frog = document.getElementById("frog");
    frog.classList.remove("transform");
    frog.offsetTop = frog.offsetTop;
    frog.classList.add("transform");
    //change background
    if(clickNum == 1 || clickNum == 5 || clickNum == 10 || clickNum == 20 || clickNum == 30 || clickNum == 45 || clickNum == 60 || clickNum == 75 || clickNum == 90 || clickNum == 105){
        imgNum++;
    } else if (clickNum == 125){
        frog.src("frogHeart.PNG");
    } else if (clickNum == 150){
        frog.src("frogHappy.PNG");
    }
    document.getElementById("background").src = `bg${imgNum}.PNG`;
    document.getElementById("tracker").innerHTML = "num "+clickNum;
}

function changeScreen(){
    document.getElementById("message").style.display = "none";
    document.getElementById("main").style.display = "block";
}