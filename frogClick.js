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
    if(clickNum == 1 || clickNum == 3 || clickNum == 6 || clickNum == 10 || clickNum == 15 || clickNum == 20 || clickNum == 30 || clickNum == 40 || clickNum == 50 || clickNum == 60){
        imgNum++;
    } else if (clickNum == 70){
        document.getElementById("frogImg").src = "frogHeart.PNG" ;
    } else if (clickNum == 75){
        document.getElementById("frogImg").src = "frogHappy.PNG";
    }
    document.getElementById("background").src = `bg${imgNum}.PNG`;
}

function changeScreen(){
    document.getElementById("message").style.display = "none";
    document.getElementById("main").style.display = "block";
}