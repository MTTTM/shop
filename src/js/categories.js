define(function(require){
	var Public   = require('Public'); 
	$.ajax({
		type: 'GET',
		url: './datas/categoriesData.js',
		dataType: 'json',
		success: function(data){
			var ress = data;
			if(ress.status && ress.data){
				Public.temp('../src/tpl/categoriesNav.tpl.html', ress, $(".head-list"), {appendChild: true});
			}	
		},
		error: function(xhr){
			console.log(xhr);
		}
	});

	$.ajax({
		type: 'GET',
		url: './datas/categoriesData.js',
		dataType: 'json',
		success: function(data){
			var res = data;
			if(res.status && res.data){
				Public.temp('../src/tpl/categoriesData.tpl.html', res, $("section"), {appendChild: true});
			}	
		},
		error: function(xhr){
			console.log(xhr);
		}
	});
})		