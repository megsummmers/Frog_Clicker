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
    if(clickNum == 1 || clickNum == 5 || clickNum == 15 || clickNum == 25 || clickNum == 35 || clickNum == 50 || clickNum == 65){
        imgNum++;
    } else if (clickNum == 135){
        frog.src("frogHeart.PNG");
    } else if (clickNum == 150){
        frog.src("frogHappy.PNG");
    }
    document.getElementById("background").src = `bg${imgNum}.PNG`;
    document.getElementById("tracker").innerHTML = "num "+clickNum;
  }