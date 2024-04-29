function navigateHome() { 
    window.location.href = "../../index.html"
}


function init() { 
    var d = document.getElementById("gallery"); 

    for (var i = 1; i <= 91; i++) { 
        var s = "<img src=\"GalleryPhotos/" + i + ".png\">";
        d.innerHTML += s;
    }
}

init() 