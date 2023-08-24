const navButton = () => {
    const button = document.getElementById("nav-button");
    const navBar = document.getElementById("nav-bar");
    
    if (button.className === "nav-button-active") {
        button.className = "nav-button-deactive";
        navBar.style.display = "none"
    }
    else {
        button.className = "nav-button-active";
        navBar.style.display = "block"
    }
}

const infoButton = n => {
    let index = n-1;
    const buttons = document.getElementsByClassName("container-info-button");
    const infoBars = document.getElementsByClassName("container-project-hover");
    const images = document.getElementsByClassName("project-image");

    if (buttons[index].className.includes(" info-button-active")) {
        buttons[index].className = buttons[index].className.replace(" info-button-active", "");
        infoBars[index].style.display = "none";
        images[index].style.opacity = "1";
    }
    else {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].className = buttons[i].className.replace(" info-button-active", "");
        }
        for (let i = 0; i < infoBars.length; i++) {
            infoBars[i].style.display = "none";
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.opacity = "1";
        }
        buttons[index].className += " info-button-active";
        infoBars[index].style.display = "block";
        images[index].style.opacity = "0.1";
    }
}