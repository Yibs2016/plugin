	var activity = (function(){
		var loadingBgc = document.getElementById("loadingbgc"),
      loadingT = document.getElementById("num_gra");
      var all = 100,i = 0,j=0,h=0;
      var loading = function(){
							var timer = setInterval(function(){
							if(i<all){
		      			i = i+1;
		      			loadingT.innerHTML = i;
		      			var l = '0';
		      			j = j + 0.64;  /*****(图片高度/100)******/
		      			h = 64 - j ;
		      			loadingBgc.style.backgroundPosition=l+" "+(h+'px');
							}else{
      					clearInterval(timer);
      				}		 
    			
							},20);
					

      };
      var init = function(){
      	loading();

      }
      return {
      	init : init
      }

	})();


	activity.init();