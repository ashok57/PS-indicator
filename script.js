var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener('input', () => {
    if(pass.value.length  > 0){
        msg.style.display = "block";
    }
    else {
        msg.style.display = "none";
    }

    if(pass.value.length  < 5){

        str.innerHTML=  "Weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } 
    else if(pass.value.length >= 5  && pass.value.length < 9){

        str.innerHTML=  "Medium";
        pass.style.borderColor = "Yellow";
        msg.style.color = "Yellow";
    }

    else if(pass.value.length >= 9){
        str.innerHTML=  "Strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
})