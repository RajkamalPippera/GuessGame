function out(){
    document.querySelector(".box").style.backgroundColor = "orange"
}
function outt(){
    document.querySelector(".box").style.backgroundColor = "black"
}
function out1(){
    document.querySelector(".box1").style.backgroundColor = "orange"
}
function outt1(){
    document.querySelector(".box1").style.backgroundColor = "black"
}

function out2(){
    document.querySelector(".box2").style.backgroundColor = "white"
}
function outt2(){
    document.querySelector(".box2").style.backgroundColor = "black"
}

function out3(){
    document.querySelector(".box3").style.backgroundColor = "green"
}
function outt3(){
    document.querySelector(".box3").style.backgroundColor = "black"
}

function out4(){
    document.querySelector(".box4").style.backgroundColor = "green"
}
function outt4(){
    document.querySelector(".box4").style.backgroundColor = "black"
}

let btn = document.querySelector("button")
let guessname;
btn.addEventListener("click",()=>{
    guessname = document.querySelector("#inputvalue").value
    if(guessname == "INDIA" || guessname == "india" || guessname == "India"){
        document.querySelector(".h1").textContent = " 🎉Congratulations you are winner 🎉"
        
    }
    else if(guessname === ""){
        document.querySelector(".h1").textContent = alert("Please Enter Name")
    }
    else{
        document.querySelector(".h1").textContent = "Wrong Guess ❌ Guess Again"
    }
})
let clearbtn = document.querySelector(".resetbtn")
clearbtn.addEventListener("click",()=>{
    document.querySelector("#inputvalue").value = ""
    document.querySelector(".h1").textContent = ""
   
})
