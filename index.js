

const heartCountAll = document.getElementById("heartCount")

const buttons = document.querySelectorAll(".like-btn")

for (let btn of buttons) {
  btn.addEventListener("click", () => {
   let Totalheartcount = parseInt(heartCountAll.innerText);
   Totalheartcount ++ ;
   heartCountAll.innerText= Totalheartcount;
    
  });
}


const CopyCount = document.getElementById("copyCount");
const copyButtons = document.querySelectorAll(".CopyButton")
for(let button of copyButtons){
  button.addEventListener("click" , () => {


     const card = button.closest('.card');
    const text = card.querySelector('.copy-text').innerText;
    navigator.clipboard.writeText(text) 
   

   let TotalButtonClick = parseInt(CopyCount.innerText);
   TotalButtonClick++;
   CopyCount.innerText = TotalButtonClick;

    alert("নম্বর কপি হয়েছে :" + text);

  });
}
 
