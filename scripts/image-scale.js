$(document).ready(function(){
    imageWidth = $('#my-picture').width();
    parentWidth = $('#my-picture').width();
    if (imageWidth > parentWidth) {
        $('#my-picture').css('width', '100%');
    }
});