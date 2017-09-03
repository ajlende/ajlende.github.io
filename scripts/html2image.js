$( document ).ready(function() {
    var img = tweet2image($('#stream-item-tweet-424413374873481216'));
	
	console.log("img is a " + typeof img);
	
	// $('body').prepend('<img src="'+img+'" hidden />');
	// window.open(img);
	
    var fr = new FileReader();
	fr.onload = function(ev2) {
        console.dir(ev2);
        $('#i').attr('src', ev2.target.result);
    };
    
    fr.readAsDataURL(img);
});

function tweet2image(tweetId) {
	var html2obj = html2canvas(tweetId, {
		'useCORS':true
	});
	var queue  = html2obj.parse();	
	var canvas = html2obj.render(queue);
	var data = canvas.toDataURL('image/jpeg');
	return data;
}

