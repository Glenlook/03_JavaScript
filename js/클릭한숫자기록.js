const box = document.querySelectorAll("#box");
const result = document.querySelector("#result");
const resetBtn = document.querySelector("#resetBtn");

for(let item of box){
  item.addEventListener("click", e => {

    if(result.innerText.length == 10){
      alert("10글자 까지만 입력 가능");
      return;
    } 

    result.innerText += e.target.innerText;
  }); 
}

resetBtn.addEventListener("click", () => {
  result.innerText = '';
});