define(function(require){
	var Public   = require('Public'); 
	var baobei = {
		init: function(){
			this.render();
		},
		render: function() {
			$.ajax({
				type: 'GET',
				url: './datas/baobeiData.js',
				dataType: 'json',
				success: function(data){
					var ress = data;
					console.log(ress.data);
					if(ress.status && ress.data){
						Public.temp('../src/tpl/baobei.tpl.html', ress, $(".content-list"), {appendChild: true});
					}
				},
				error: function(xhr){
					console.log(xhr);
				}
			});
		}
	}
	baobei.init();
})	
