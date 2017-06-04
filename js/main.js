var quote = "";
var author = "";
function getQuote(){
	var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
	var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
	var color = Math.floor(Math.random() * colors.length);
	$("html body").animate({backgroundColor: colors[color],
		color: colors[color]});
	$("button").animate({backgroundColor: colors[color]});
	$(".fa").animate({color: colors[color]});
	$.getJSON(url, function(data){
		quote = data.quoteText;
		author = data.quoteAuthor;
		$(".quote-text").animate({opacity: 0}, 500, function(){
			$(this).animate({
            opacity: 1
          }, 500);
			$("#text").text(data.quoteText);
		});
		if(data.quoteAuthor == ""){
			data.quoteAuthor = "-Anonymous";
			author = data.quoteAuthor;
			$(".quote-author").animate({opacity: 0}, 500, function(){

			$(this).animate({
				opacity: 1
			}, 500);
			$("#author").text(data.quoteAuthor);
		});
		}
		else{
		$(".quote-author").animate({opacity: 0}, 500, function(){
			$(this).animate({
				opacity: 1
			}, 500);
			$("#author").text("-" + data.quoteAuthor);
		});
	}
	});
}
$(document).ready(function(){
	getQuote();
	$("#new-quote").on("click", getQuote);
	$("#tweet-quote").on("click", function(){
		window.open("https://twitter.com/intent/tweet?hashtags=OuoteOfTheDay&text=" + encodeURIComponent('"' + quote + '"' + " " + author));
	});
});
