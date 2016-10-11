// define(function(require){
// 	var template = require('template'); 
// 	var Public   = require('Public'); 
// 	var obj = {
// 	     	link:     ['./images/53.jpg', './images/54.jpg', './images/55.jpg', './images/56.jpg'],
// 	        priceone: ['29','29', '69', '69'],
// 	        pricetwo: ['69','69', '99', '99']
// 		};
// 	Public.temp('../src/tpl/baobei.tpl.html', obj, $(".content-list"));
// })
define(function(require){
	var Public   = require('Public'); 
	$.ajax({
		type: 'GET',
		url: './datas/baobeiData.js',
		dataType: 'json',
		success: function(data){
			var ress = data;
			console.log(ress.data);
			if(ress.status && ress.data){
				Public.temp('../src/tpl/baobei.tpl.html', ress.data, $(".content-list"), {appendChild: true});
			}
		},
		error: function(xhr){
			console.log(xhr);
		}
	});
})	
