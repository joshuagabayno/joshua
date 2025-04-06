document.querySelectorAll("header ul li").forEach(function(page) {
    page.onclick = () => {
        let pageName = page.id.split("-")[1];
        showPage(pageName);
    }
});

function showPage(pageName) {
    clearPages();
    const current_page = document.getElementById(pageName);
    current_page.style.display = "block";
}

function clearPages() {
    const pages = document.querySelectorAll("#page-wrapper > div");
    
    for(var i = 0; i < pages.length; i++){
        pages[i].style.display = "none";
    }
}

showPage("home");