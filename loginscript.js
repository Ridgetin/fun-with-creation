const form = document.querySelector("form"),
field = form.querySelectorAll(".field"),
errorTxt = document.querySelectorAll(".error-txt"),
errorIcon = document.querySelectorAll(".error-icon");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    errorTxt.forEach(error => {
        error.classList.remove("show");
    });

    errorIcon.forEach(icon => {
        icon.classList.remove("show");
    });

    let fnameVal = field[0].querySelector("input").value;
    if(fnameVal == ""){
        field[0].classList.add("error")
        errorTxt[0].classList.add("show")
        errorIcon[0].classList.add("show");
    }
});
