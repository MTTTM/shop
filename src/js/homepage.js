// define(function(require){
// 	var template = require('template');
// 	var Public   = require('Public');  
// 		var obj = {
// 		 	pnt : ['content-tiaomao','content-juhuasuan', 'content-daojia', 'content-waimai',
// 					 'content-chongzhi','content-alilvxing', 'content-lingjinbi', 'content-fenlei'],
// 			link  : ['javascript:;','javascript:;', 'javascript:;', 'javascript:;',
// 					 'javascript:;','javascript:;', 'javascript:;', 'categories.html'],
// 	        search: ['当前店','附近', '扫一扫', '保养查询','充值','外卖', '领金币', '分类']
// 		};
// 		Public.temp('../src/tpl/homepage.tpl.html', obj, $(".content-search"));
// })

define(function(require){
	var Public   = require('Public'); 
	$.ajax({
		type: 'GET',
		url: './datas/homepageData.js',
		dataType: 'json',
		success: function(data){
			var ress = data;
			if(ress.status && ress.data){
				Public.temp('../src/tpl/homepage.tpl.html', data, $(".content-search"), {appendChild: true});
			}
		},
		error: function(xhr){
			console.log(xhr);
		}
	});
})