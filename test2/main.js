let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["Test HTML", "Test CSS", "Test Javascript", "Test Python", "Test Test"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    
    console.log(selectStringArr);
    return selectStringArr;
}
//reset Typing
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}
// text output func
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping,3000);
    }
}

dynamic(randomString());

//cursor blink effect
function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);