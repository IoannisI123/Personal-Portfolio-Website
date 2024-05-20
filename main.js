const webDevbtn = document.getElementById('webDevBtn');
const digitalMarkBtn = document.getElementById('digitalMarketingBtn');
const webDevSection = document.getElementById('webDevSection');
const digitalMarkSection = document.getElementById("digitalMarketingSection")
const webDevSection2 = document.getElementById("webDevSection2");

    digitalMarkBtn.addEventListener("click", toggleDigitalMark);
    webDevbtn.addEventListener("click", toggleWebDev)


function toggleDigitalMark(){
  webDevSection.classList.add("notDisplayed");
  webDevbtn.classList.remove("underlined");
  digitalMarkSection.classList.remove("notDisplayed");
  digitalMarkBtn.classList.add("underlined");
  webDevSection2.classList.add("notDisplayed");

}

function toggleWebDev(){
    
    digitalMarkSection.classList.add("notDisplayed");
    digitalMarkBtn.classList.remove("underlined");
    webDevSection.classList.remove("notDisplayed");
    webDevbtn.classList.add("underlined");
    webDevSection2.classList.remove("notDisplayed");

    
}
