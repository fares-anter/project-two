let cardNumber =document.getElementById("card-number-display"); 
let cardName =document.getElementById("card-name-display"); 
let cardDate =document.getElementById("card-date-display"); 
let cardcvc =document.getElementById("card-cvc-display"); 
const RED= "hsl(0,100%,66%)"
let nameinput =document.getElementById("name"); 
let numberinput =document.getElementById("number"); 
let MMinput =document.getElementById("MM"); 
let YYinput =document.getElementById("YY"); 
let cvcinput =document.getElementById("cvc"); 

const btn =document.getElementById('btn')


const form =document.getElementById('card-form');
const thankyou = document.getElementById('thank-you');
const continuebtn= document.getElementById('continue-btn');




nameinput.addEventListener("input",()=>{
    cardName.textContent=nameinput.value || "JANE APPLESEED"
});

numberinput.addEventListener("input",()=>{
    const digist=numberinput.value.replace(/\D/g,"").slice(0,16);
    const formatted= digist.replace(/(.{4})/g,  "$1 ").trim();
    numberinput.value =formatted;
    cardNumber.textContent = formatted || "0000 0000 0000 0000";
})

function updateDate(){
    MMinput.value= MMinput.value.replace(/\D/g,"");
      YYinput.value= YYinput.value.replace(/\D/g,"");
      cardDate.textContent = (MMinput.value ||"00" )+"/" + (YYinput.value || "00");
    }
    MMinput.addEventListener("input",updateDate);
    YYinput.addEventListener("input",updateDate);

cvcinput.addEventListener("input",()=>{
    cvcinput.value = cvcinput.value.replace(/\D/g,"");
    cardcvc.textContent= cvcinput.value||"000";

});

function setError(inputs, message){
    inputs[0].parentElement.querySelector(".error").textContent= message;
    inputs.forEach( (input)=>{
        input.style.borderColor = message ? RED:"";
    })
    
}

// button
btn.addEventListener("click",()=>{
    let valid= true;
    // name card
    if(nameinput.value.trim()===""){
        setError([nameinput],"Can't be blank");
        valid=false;
    }else{
        setError([nameinput],"");
    }

    // card number
    const digits = numberinput.value.replace(/\s/g, "");
    if(digits===""){ 
        setError([numberinput],"Can't be blank");
        valid = false;
    }else if(!/^\d{16}$/.test(digits)){
        setError([numberinput],"Wrong format ,16number only");
        valid = false
    }else{
        setError([numberinput],"");
    }
    // deta
    const month = Number(MMinput.value);
    if(MMinput.value==="" || YYinput.value===""){
        setError([MMinput,YYinput],"Cant be blank");
        valid = false;

    }else if(MMinput.value.length !==2 || YYinput.value.length !==2||month<1 || month>12 ){
        setError([MMinput,YYinput],"Wrong format ");
        valid = false;
    }else{
        setError([MMinput,YYinput],"");
    }
    // CVC
    if(cvcinput.value===""){
        setError([cvcinput],"Cant be balnk");
        valid = false
    }else if(cvcinput.value.length !==3){
        setError([cvcinput],"Wrong format , 3number only");
        valid = false
    }else{ setError([cvcinput],"")}
    // cheak
    if(valid){
        form.classList.add("hidden");
        thankyou.classList.remove("hidden")
    }
});

continuebtn.addEventListener("click",()=>{
    form.reset();
    
    cardName.textContent ="JANE APPLESEED";
     cardNumber.textContent ="0000 0000 0000 0000";
      cardDate.textContent ="00/00";
       cardcvc.textContent ="000";

    thankyou.classList.add("hidden")
       form.classList.remove("hidden");
        
});


