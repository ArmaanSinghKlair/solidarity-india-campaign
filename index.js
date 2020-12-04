const header = document.querySelectorAll("header").item(0);
const logoText =document.querySelectorAll(".logo-container").item(0);
const supportButton = document.getElementsByClassName("cta-pay").item(0);
const modal = document.getElementsByClassName("modal").item(0);
const modalCloseButton = document.getElementsByClassName("close-button").item(0);
const modalText = document.getElementsByClassName("modal-text").item(0);
// Attaching Listeners

window.addEventListener("scroll",(e)=>{
    if(window.pageYOffset > 10){
        header.style.backgroundColor="rgba(0,0,0,0.85)"
        logoText.style.color="white";
    } else{
        header.style.backgroundColor="transparent"
        logoText.style.color="#333";
    }

   
   

}, true);

supportButton.addEventListener("click",(e)=>{
    modal.style.opacity = "1";
    modal.style.pointerEvents = "auto";

    modalText.innerHTML = "<h1 class='heading'>Make a Donation</h1> "+
                            "<p><b>Paytm: </b> +91 88510 71499</p><p><b>PayPal: </b> kunalrajeshsegan@gmail.com</p>";
},false);

modalCloseButton.addEventListener("click",(e)=>{
    modal.style.opacity = "0"
    modal.style.pointerEvents = "none";
},false)

