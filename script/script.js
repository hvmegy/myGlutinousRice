function navigate2YearsWishes() { 
    window.location.href = "pages/2YearWishes/index.html"
}
function navigateGallery() { 
    window.location.href ="pages/Gallery/index.html"
}

function navigate2YearPlan() { 
    window.location.href ="pages/2YearPlan/index.html"
}

function init() {
    var ourDate = new Date("Apr 30, 2022 0:0:0").getTime();

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = now - ourDate;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("anniversary-counter").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }, 1000);
}

init()