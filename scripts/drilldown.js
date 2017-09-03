$(document).ready(function () {

    var numberOfTabs = 1;

    $('.add-right-button').on("click", this, function (event) {
        if (numberOfTabs <= 5) {
            $('.container').append('<div class="main-item"><div class="item-title" id="main-detail' + numberOfTabs + '">Detail ' + numberOfTabs + '</div><textarea></textarea><div class="sub-container"></div> </div>');
            numberOfTabs++;
        } else {
            alert("You are only allowed a maximum of 5 first-level details");
        }
    });

    $('.add-right-button').hover(function () {
        $(this).animate({left: '+=5px'}, 100);
    }, function () {
        $(this).animate({left: '-=5px'}, 200);
    });

    $('.add-bottom-button').on("click", this, function (event) {
        $('.sub-container').append('<div class="sub-item"><div class="item-title">Sub-Detail #</div><textarea></textarea></div>');
    });

    $('.add-bottom-button').hover(function () {
        $(this).animate({top: '+=5px'}, 100);
    }, function () {
        $(this).animate({top: '-=5px'}, 200);
    });

});