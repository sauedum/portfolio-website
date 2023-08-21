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