
$(document).ready(function () {
    $("h1").fadeOut(2000)
    $("h1").fadeIn(3000)
    $("#button1").click(function () {
        $("ol").append("<li class='li1'> PS4 SLIM 3500kr <button id='buttonx1'>X</button></li>");
    });
    $('ol').on('click', 'button', function () {
        $(this).closest('li').remove();
    });
});
$("#button2").click(function () {
    $("ol").append("<li class='li2'>XBOX ONE 4500kr<button id='buttonx2'>X</button></li>");

});
$('ol').on('click', 'button', function () {
    $(this).closest('li').remove();
});

$("#button3").click(function () {
    $("ol").append("<li class='li3'>  Wii XL2 2500kr  <button id='buttonx3'>X</button></li>");
    $('ol').on('click', 'button', function () {
        $(this).closest('li').remove();
    });
});
$("#button4").click(function () {
    $("ol").append("<li class='li4'> NINTANDO XL 1000kr <button id='buttonx4'>X</button></li>");
    $('ol').on('click', 'button', function () {
        $(this).closest('li').remove();
    });
});
$("#button5").click(function () {
    $("ol").append("<li class='li5'> Nintendo NES 800kr <button id='buttonx5'>X</button></li>");
    $('ol').on('click', 'button', function () {
        $(this).closest('li').remove();
    });
});
$("#button6").click(function () {
    $("ol").append("<li class='li6'>  PSP 1500<button id='buttonx6'>X</button></li>");
    $('ol').on('click', 'button', function () {
        $(this).closest('li').remove();
    });
});
$("#button7").click(function () {
    $("ol").append("<li class='li7'>  CALL OF DUTY 500KR<button id='buttonx7'>X</button></li>");
    $("ol").on('click', 'button'), function () {
        $(this).closest("li").remove()
    }
});
$("#button8").click(function () {
    $("ol").append("<li class='li8'>  FORTNITE 350KR<button id='buttonx8'>X</button></li>");
    $("ol").on('clcik', 'button'), function () {
        $(this).closest("li").remove();
    }
})

$("#button9").click(function () {
    $("ol").append("<li class='li9'>PUBG 600kr<button id='buttonx9'>X</button></li>");
    $("ol").on('clcik', 'button'), function () {
        $(this).closest("li").remove();
    }

});

$("#button10").click(function () {
    $("ol").append("<li class='li10'>SONY 900KR<button id='buttonx10'>X</button></li>");
    $("ol").on('click', 'button'), function () {
        $(this).closest("li").remove();
    }
});

$("#button11").click(function () {
    $("ol").append("<li class='li11'>BETS SOLO 3 2900KR<button id='buttonx11'>X</button></li>");
    $("ol").on('click', 'button'), function () {
        $(this).closest("li").remove();
    }
});
$("#button12").click(function () {
    $("ol").append("<li class='li12'>JBL 1500KR<button id='buttonx12'>X</button></li>");
    $("ol").on('click', 'button'), function () {
        $(this).closest("li").remove();
    };
 
});

$("#button13").click(function () {
    $("ol").append("<li class='li13'>Parajumpers 4900KR<button id='buttonx13'>X</button></li>");
    $("ol").on('click', 'button'), function () {
        $(this).closest("li").remove();
    }
});
$("#button14").click(function () {
    $("ol").append("<li class='li14'>GANT 1100KR<button id='buttonx14'>X</button></li>");
    $("ol").on('click', 'button'), function () {
        $(this).closest("li").remove();
    }
});
$("#button15").click(function () {
    $("ol").append("<li class='li15'>Polo Ralph 500kr<button id='buttonx15'>X</button></li>");
    $("ol").on('click', 'button'), function () {
        $(this).closest("li").remove();
    }
});
$("#button16").click(function () {
    $("ol").append("<li class='li16'>motionscykel 2100kr<button id='buttonx16'>X</button></li>");
    $("ol").on('click', 'button'), function () {
        $(this).closest("li").remove();
    }
});
$("#button17").click(function () {
    $("ol").append("<li class='li17'>RubberDumbbell 1500kr<button id='buttonx17'>X</button></li>");
    $("ol").on('click', 'button'), function () {
        $(this).closest("li").remove();
    }
});
$("#button18").click(function () {
    $("ol").append("<li class='li18'>Fitness Homegym 5200kr<button id='buttonx14'>X</button></li>");
    $("ol").on('click', 'button'), function () {
        $(this).closest("li").remove();
    }
});

var heshko = String.fromCharCode(72, 73, 83, 72, 65, 77);
document.querySelector(".heshko").innerHTML = heshko +" ABULIL "

