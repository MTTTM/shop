define(function(a){var t=a("Public");$.ajax({type:"GET",url:"./datas/baobeiData.js",dataType:"json",success:function(a){var o=a;console.log(o.data),o.status&&o.data&&t.temp("../src/tpl/baobei.tpl.html",o,$(".content-list"),{appendChild:!0})},error:function(a){console.log(a)}})});