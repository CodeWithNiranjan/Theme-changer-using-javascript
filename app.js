var themeChanger = document.querySelector(".themeChanger");

var body = document.querySelector(".body");

themeChanger.onclick = function(){
    if(body.classList.contains != "dark"){
        body.classList.toggle("dark");
    }
    else{
        body.classList.remove("dark");
    }
}