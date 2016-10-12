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
		},
		error: function(xhr){
			console.log(xhr);
		}
	});
})