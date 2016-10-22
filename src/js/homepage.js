define(function(require){
	var Public   = require('Public'); 
	$.ajax({
		type: 'GET',
		url: './datas/homepageData.js',
		dataType: 'json',
		success: function(data){
			var ress = data;
			console.log(ress.data);
			if(ress.status && ress.data){
				Public.temp('../src/tpl/homepage.tpl.html', ress, $(".content-search"), {appendChild: true});				
			}
			$(".content-sliding li").eq(index).addClass('ative').siblings('li').removeClass('ative');
			var roll1 = $(".content-roll img");
			console.log(roll1);
			var roll2 = roll1.length;
			var index = 0;
			function autoroll(){
				time = setInterval(function(){
				if (index === roll2 - 1) {
					index = -1;
				};
				index++;
				roll1.eq(index).css({opacity:1}).siblings('img').css({opacity:0})
				$(".content-sliding li").eq(index).addClass('ative').siblings('li').removeClass('ative');
				},1000);
			};
			autoroll();
		},

		error: function(xhr){
			// console.log(xhr);
		}
	});
})