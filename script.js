$(document).ready(function() {
    $("#n1").click(function() {
        $("#n1").addClass("active")
        $("#n2").removeClass("active")
        $("#n3").removeClass("active")
        $('.home').css('background-image', 'url("1.jpg")')
        $('.cards-section, .counter-section ').css('background-image', 'linear-gradient(to right, black, purple)')
    })
})
$(document).ready(function() {
    $("#n2").click(function() {
        $("#n2").addClass("active")
        $("#n1").removeClass("active")
        $("#n3").removeClass("active")
        $('.home').css('background-image', 'url("2.jpg")')
        $('.cards-section, .counter-section').css('background-image', 'linear-gradient(to right, black, lightgreen)')
    })
})
$(document).ready(function() {
    $("#n3").click(function() {
        $("#n3").addClass("active")
        $("#n1").removeClass("active")
        $("#n2").removeClass("active")
        $('.home').css('background-image', 'url("3.jpg")')
        $('.cards-section, .counter-section').css('background-image', 'linear-gradient(to right, black, lightgreen, yellow, red)')
    })
})
$(document).ready(function() {
    $("#card1").mouseover(function() {
        $("#card-img-overlay1").css('opacity', '1')
        $("#card-img1").css('opacity', '0.2')
    })
    $("#card1").mouseout(function() {
        $("#card-img-overlay1").css('opacity', '0')
        $("#card-img1").css('opacity', '1')
    })
})
$(document).ready(function() {
    $("#card2").mouseover(function() {
        $("#card-img-overlay2").css('opacity', '1')
        $("#card-img2").css('opacity', '0.2')
    })
    $("#card2").mouseout(function() {
        $("#card-img-overlay2").css('opacity', '0')
        $("#card-img2").css('opacity', '1')
    })
})
$(document).ready(function() {
    $("#card3").mouseover(function() {
        $("#card-img3").css('opacity', '0.2')
        $("#card-img-overlay3").css('opacity', '1')
    })
    $("#card3").mouseout(function() {
        $("#card-img-overlay3").css('opacity', '0')
        $("#card-img3").css('opacity', '1')
    })
})
$(document).ready(function() {
    $("#card4").mouseover(function() {
        $("#card-img4").css('opacity', '0.2')
        $("#card-img-overlay4").css('opacity', '1')
    })
    $("#card4").mouseout(function() {
        $("#card-img-overlay4").css('opacity', '0')
        $("#card-img4").css('opacity', '1')
    })
})
