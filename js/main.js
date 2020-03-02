//Mobile Menu
$(document).on('click','.btn-menu',function(){
                $('nav').slideDown(200).addClass('close-menu');
                $(this).addClass('btn-menu-close');
            });

            $(document).on('click','.btn-menu-close',function(){
                $('nav').slideUp(200).addClass('close-menu');
                $(this).removeClass('btn-menu-close');
            });
            
            
            $(document).on('click','.menu-close',function(){
                $('nav').slideUp(200);
            });

// Homepage Projects Change - Mobile Screens
var currentIndex = 0,
  items = $('.mobile-sqs-1 .mobile-sqs-bl-1'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.mobile-sqs-1 .mobile-sqs-bl-1').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 2000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});


// Homepage Projects Change 
$(document).ready(function(){
    $(".sqs-1 .sqs-bl-1").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#bl-btn .next").click(function(){
            if ($(".sqs-1 .sqs-bl-1:visible").next().length != 0)
                $(".sqs-1 .sqs-bl-1:visible").next().show().prev().hide();
            else {
                $(".sqs-1 .sqs-bl-1:visible").hide();
                $(".sqs-1 .sqs-bl-1:first").show();
            }
            return false;
        });

        $("#bl-btn .prev").click(function(){
            if ($(".sqs-1 .sqs-bl-1:visible").prev().length != 0)
                $(".sqs-1 .sqs-bl-1:visible").prev().show().next().hide();
            else {
                $(".sqs-1 .sqs-bl-1:visible").hide();
                $(".sqs-1 .sqs-bl-1:last").show();
            }
            return false;
        });
 });

$(document).ready(function(){
    $(".sqs-1 .sqs-bl-2 .bl-pjts").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#bl-btn .next").click(function(){
            if ($(".sqs-1 .sqs-bl-2 .bl-pjts:visible").next().length != 0)
                $(".sqs-1 .sqs-bl-2 .bl-pjts:visible").next().show().prev().hide();
            else {
                $(".sqs-1 .sqs-bl-2 .bl-pjts:visible").hide();
                $(".sqs-1 .sqs-bl-2 .bl-pjts:first").show();
            }
            return false;
        });

        $("#bl-btn .prev").click(function(){
            if ($(".sqs-1 .sqs-bl-2 .bl-pjts:visible").prev().length != 0)
                $(".sqs-1 .sqs-bl-2 .bl-pjts:visible").prev().show().next().hide();
            else {
                $(".sqs-1 .sqs-bl-2 .bl-pjts:visible").hide();
                $(".sqs-1 .sqs-bl-2 .bl-pjts:last").show();
            }
            return false;
        });
 });

// Project Pages Link Change

$(document).ready(function(){
            $('#pjt-rte-1 a').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("Justin Pinder Car Rental");
            },
            function() {
                // assign it back here
                $(this).text("Previous Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-7 a').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("Justin Pinder Car Rental");
            },
            function() {
                // assign it back here
                $(this).text("Next Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-2 a:first-of-type').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("1648 at French Leave");
            },
            function() {
                // assign it back here
                $(this).text("Previous Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-2 a:last-of-type').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("Cadet Car Rentals");
            },
            function() {
                // assign it back here
                $(this).text("Next Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-3 a:first-of-type').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("Sea La Vie");
            },
            function() {
                // assign it back here
                $(this).text("Previous Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-3 a:last-of-type').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("Justin Pinder Car Rental");
            },
            function() {
                // assign it back here
                $(this).text("Next Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-4 a:first-of-type').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("Saint Life Productions");
            },
            function() {
                // assign it back here
                $(this).text("Previous Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-4 a:last-of-type').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("1648 at French Leave");
            },
            function() {
                // assign it back here
                $(this).text("Next Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-5 a:first-of-type').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("Justin Pinder Car Rental");
            },
            function() {
                // assign it back here
                $(this).text("Previous Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-5 a:last-of-type').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("Sea La Vie");
            },
            function() {
                // assign it back here
                $(this).text("Next Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-6 a:first-of-type').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("Justin Pinder Car Rental");
            },
            function() {
                // assign it back here
                $(this).text("Previous Project");
            });
});

$(document).ready(function(){
            $('#pjt-rte-6 a:last-of-type').hover(function() {
                // store $(this).text() in a variable     
                $(this).text("Saint Life Productions");
            },
            function() {
                // assign it back here
                $(this).text("Next Project");
            });
});