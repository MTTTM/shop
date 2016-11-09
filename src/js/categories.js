define(function(require){
	var Public   = require('Public');

	var cate = {
		init: function(){
			this.categoriesNav();
			this.categoriesData();
		},
		// categoriesNav
		categoriesNav: function(){
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
		},
		// categoriesData
		categoriesData: function(){
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
		}
	}
	cate.init();
})		