const increase=document.getElementById("increasebtn");
const decrease=document.getElementById("decreasebtn");
const reset=document.getElementById("resetbtn");
let count=0;
increase.onclick=function(){
    count++;
    countLabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    countLabel.textContent=count;
}
decrease.onclick=function(){
    count--;
    countLabel.textContent=count;
}


