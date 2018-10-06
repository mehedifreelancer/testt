$('.skillBtn').click(function () {
    $('iframe').addClass('videoFadeOut');
    $('.skillinDiv').addClass('fadeOut');
    $('.skillinDiv').fadeIn(500);

});

$('.skillBtn').click(function () {
    $('.skillBtn').css({
        'display': 'none'
    });
    $('.nextTwo').fadeIn();

})




//welcome page animation
$(document).ready(function () {


    $(".greet").fadeIn(3000);
    $(".left").animate({
        height: "80%"
    }, 3000);
    $(".bottom").animate({
        width: "140%"
    }, 3000);
});

//Animation for welcome modal panel


var modalShow = setTimeout(function () {
    $("#exampleModal").modal('show');
}, 1000);



$(".later").click(function () {

    $("#exampleModal").modal('hide');
    setTimeout(function () {
        $("#exampleModal").modal('show');
    }, 3000)
})

$(".no").click(function () {
    $("#exampleModal").modal('hide');
    clearTimeout(modalShow)

})


//Hire me button animation 

setInterval(function () {
    setTimeout(function () {
        $(".hire").css({
            "background": "#ddd",
            "border": "1px solid #97999b"
        })
    }, 500)

    setTimeout(function () {
        $(".hire").css({
            "background": "#a2a4a6",
            "border": "1px solid #a2a4a6",

        })
    }, 1000)
    setTimeout(function () {
        $(".hire").css({
            "background": "#1d1f21",
            "border": "1px solid #1d1f21"

        })
    }, 1500)
    setTimeout(function () {
        $(".hire").css({
            "background": "#de5347",
            "border": "1px solid #de5347"
        })
    }, 2000)

    setTimeout(function () {
        $(".hire").css({
            "background": "#47484b",
            "border": "1px solid #47484b"

        })
    }, 2500)

}, 3000)




//Animation for twinkle start---------------------------------------------------------------      
setInterval(function () {

    var a = 1000;

    $(".overlayThree").animate({
        marginLeft: a
    });



    setTimeout(function () {
        $(".overlayThree").animate({
            marginLeft: -800
        });

    }, 20000)


}, 15000);


//panelOverlay

setInterval(function () {

    var a = 1000;

    $(".panelOverlay").animate({
        marginLeft: a
    });



    setTimeout(function () {
        $(".panelOverlay").animate({
            marginLeft: '-500px'
        });

    }, 15000)


}, 10000);



//Animation for twinkle start end---------------------------------------------------------------



//FIrst page js event >>> to second page ..........
$('.portfolio').click(function () {


    $(".firststage").slideUp(1000);
    $('body').css({
        background: 'black'
    })
    $('.secondstage').fadeIn(1000);



});



////Java script code for toogle minimenu........................................................
$('.miniMenuButton').click(function () {
    $('.miniMenu').animate({
        'marginLeft': '0px'
    }, 500);
})
$('.fa-angle-double-left').click(function () {
    $('.miniMenu').animate({
        'marginLeft': '-300px'
    }, 500);
})

setTimeout(function () {
    $(".f").fadeOut(300);
}, 500);

$('.portfolio').click(function () {
    $('.videoOverlayOne').animate({
        'width': '100%'
    }, 2000);
});


$('.portfolio').click(function () {
    $('.videoOverlayTwo').animate({
        'width': '70%'
    }, 2500);
});
$('.portfolio').click(function () {
    $('.videoOverlayThree').animate({
        'width': '65%'
    });
}, 3000);
