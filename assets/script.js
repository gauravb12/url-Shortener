$(document).ready(function(){

$('#formShortenUrl').submit(function(event) {
	event.preventDefault();
	var param = {urlInput: $('#urlInput').val()};
	console.log(param);

	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: window.location+'shorten',
		data: JSON.stringify(param),
		success: function(res){
			$('#resDiv').show();
			$('#sres').val(res);
		},
		error: function(err) {
			$('$err').html("URL couldn't be shortened. Please try again later!");
		}	
	});
});

});

function copyLink(){
	var copyText = document.getElementById('sres');
	copyText.select();
	document.execCommand("copy");
}